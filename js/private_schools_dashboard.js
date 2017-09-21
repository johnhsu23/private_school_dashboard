$(document).ready(function(){
    var page;
    var dataFunctions;

    ETSUtil.runScriptsAndRequestJson(["js/private_schools_dashboard_model.js", "js/naep_charts.js", "js/d3.v3.min.js"], {"jurisdictions": "data/jurisdictions.js", "variables": "data/variables.js", "statTypes": "data/stat_types.js"}, function(data){
        page = ETSNAEPReporting.privateSchoolDashboardPage;
        dataFunctions = ETSNAEPReporting.dataFunctions;
        main(data);
    });
    
    function setOverall(name, value){
        page.setOverallCriteriaWithKey(name, value.VarName);
        if(name == "variable"){
            page.setOverallCriteriaWithKey("categoryIndex", value.Value);
        }
        updateOverallBars();
    }

    function main(criteriaData){
        //events
        $("#overall-results .block-content span").on("click", function(){
            var subjectClass = getSubjectClassOfBlockAncestor(this);
            ["4", "8", "12"].forEach(function(grade){
                ETSNAEPReportingCharts.toggleBarLabelVisibility("#" + subjectClass + grade, $(this).parent().children("span").index(this));
            }, this);
            
            function getSubjectClassOfBlockAncestor(element){ 
                return $(element).parents(".block").attr("class").split(/\s+/)[1];
            }
        })

        //bind data
        $(".select-options.variables .menu-section div").each(function(index){
            $(this).data("code", criteriaData["variables"][index]);
        });
        $(".select-options.stat-types .menu-section div").each(function(index){
            $(this).data("code", criteriaData["statTypes"][index]);
        });

        //open first menu
        $(".block-container .block input[type=checkbox]:eq(0)").attr("checked", true);

        //Create Bars Charts
        page.getSubjectDataRows().forEach(function(subjectDataRow){
            [4, 8, 12].forEach(function(grade){
                ETSNAEPReportingCharts.createBarChart("." + subjectDataRow.shortLabel + " .block-content .bar-charts", {title: "Grade " + grade, data: [{score: 0, label: ""}, {score: 0, label: ""}, {score: 0, label: ""}, {score: 0, label: ""}], id: subjectDataRow.shortLabel + grade, maxScaleScore: 0}); //subjectDataRow.maxScaleScore});
            });
        });
        updateOverallBars();

        //Create dropdown menus
        $(".select-options.variables").autocompleteDropdown("variable", true, setOverall);
        $(".select-options.stat-types").autocompleteDropdown("stattype", false, setOverall);
    }

    function updateOverallBars(){
        var requestSet = getOverallRequests(page.getSubjectDataRows());
        processOverallRequests(requestSet);
    }

    function getOverallRequests(subjectCodes){
        var requestSet = [];
        subjectCodes.forEach(function(subjectInfo){
            var gradeSchoolType = ETSUtil.cartesian(["4", "8", "12"], page.getSchoolCriterias());
            requests = {};
            gradeSchoolType.forEach(function(element){
                var grade = element[0];
                var criteria = element[1];
                newCriteria = JSON.parse(JSON.stringify(criteria));
                newCriteria.variable += "%2B" + page.getOverallCriteriaCopy().variable;
                newCriteria.categoryIndex = newCriteria.categoryIndex.split(",").map(function(element){
                    return element + "%2B" + page.getOverallCriteriaCopy().categoryIndex;
                }).join();
                var subjectCriteria = JSON.parse(JSON.stringify(subjectInfo));
                delete subjectCriteria.shortLabel
                delete subjectCriteria.maxScaleScore
                var queryString = ETSUtil.createRequestUrl(page.requestUrl, $.extend({}, newCriteria, subjectCriteria, {"grade": grade}));
                var dataName = subjectInfo.shortLabel + grade + ((criteria.variable == "SCHTYPE") ? "PublicCatholic" : (criteria.variable == "SCHTYP2") ? "Private" : "Charter");
                requests[dataName] = queryString;
            });
            requestSet.push(requests);
        });
        return requestSet;
    }

    function processOverallRequests(requestSet){
        requestSet.forEach(function(requests){
            ETSUtil.requestJSON(requests, function(scoreDataSet){
                var subjectGrade = ETSUtil.cartesian(page.getSubjectDataRows(), ["4", "8", "12"]);
                var subjectShortLabel = getSubjectShortLabel(scoreDataSet);
                var maxScore = dataFunctions.getMaxScore(scoreDataSet);
                var topRange = Math.ceil(maxScore / 100) * 100;
                ["4", "8", "12"].forEach(function(grade){
                    var scores = [];
                    ["PublicCatholic", "Private", "Charter"].forEach(function(schoolTypeCombo, schoolIndex){
                        var result = scoreDataSet[subjectShortLabel + grade + schoolTypeCombo].result;
                        if(!result || result.length == 0 || !$.isArray(result)){
                            scores.push(null);  
                        } else {
                            result.forEach(function(resultRow, index){
                                scores.push((resultRow && resultRow.value) ? resultRow.value : null);
                            })
                        }
                    })
                    var map2ScoreLabel = function(score){ return {score: dataFunctions.processScore(score), label: dataFunctions.processLabel(score)}}
                    var data = scores.map(map2ScoreLabel);
                    ETSNAEPReportingCharts.updateBarChart("#" + subjectShortLabel + grade, {data: data, maxScaleScore: topRange});
                })

                function getSubjectShortLabel(scoreDataSet){  //not a very generic function so I left it in this file
                    for(key in scoreDataSet){
                        var subjectCodes = page.getSubjectDataRows();
                        for(var i = 0; i < subjectCodes.length; i++){
                            if(key.indexOf(subjectCodes[i].shortLabel) == 0) return subjectCodes[i].shortLabel;
                        }
                    }
                    return null;
                }
            })
        });
    }
})