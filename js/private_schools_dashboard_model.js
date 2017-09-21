var ETSNAEPReporting = function(){
	var _overallCriteria = {statType: "MN:MN", variable:"TOTAL", categoryIndex:"1"};
	var _demoGroupCriteria = {variable: "SCHTYPE"};
	var _contextualVariableCriteria = {variable: "SCHTYPE"};
	
	var publicCatholicCriteria = {type: "data", variable: "SCHTYPE", jurisdiction: "NT", stattype: "MN%3AMN", year: "current", categoryIndex: "1,3"};
	var privateCriteria = {type: "data", variable: "SCHTYP2", jurisdiction: "NT", stattype: "MN%3AMN", year: "current", categoryIndex: "1"};
    var charterCriteria = {type: "data", variable: "CHRTRPT", jurisdiction: "NT", stattype: "MN%3AMN", year: "current", categoryIndex: "1"};
	//var subjectDataRows = [{shortLabel: "civics", subscale: "CIVRP", subject: "CIV", maxScaleScore: 300}, {shortLabel: "economics", subscale: "ERPCM", subject: "ECN", maxScaleScore: 300}, {shortLabel: "geography", subscale: "GRPCM", subject: "GEO", maxScaleScore: 500}, {subject:"MAT", shortLabel: "mathematics", subscale: "MRPCM", maxScaleScore: 500}, {subject: "MUS", shortLabel: "music", subscale: "MUSRP", maxScaleScore: 300}, {subject: "RED", shortLabel: "reading", subscale: "RRPCM", maxScaleScore: 500}, {subject: "SCI", shortLabel: "science", subscale: "SRPCM", maxScaleScore: 500}, {subject: "HIS", shortLabel: "history", subscale: "hrpcm", maxScaleScore: 300}, {subject: "TEL", shortLabel: "tel", subscale: "TRPUN", maxScaleScore: 300}, {subject: "VIS", shortLabel: "visualarts", subscale: "VISRP", maxScaleScore: 300}, {subject: "WRI", shortLabel: "writing", subscale: "WRIRP", maxScaleScore: 300}];
	var subjectDataRows = [{shortLabel: "music", subscale: "MUSRP", subject: "MUS", maxScaleScore: 300}, {shortLabel: "visual-arts", subscale: "VISRP", subject: "VIS", maxScaleScore: 300}, {shortLabel: "civics", subscale: "CIVRP", subject: "CIV", maxScaleScore: 300}, {shortLabel: "economics", subscale: "ERPCM", subject: "ECN", maxScaleScore: 300}, {shortLabel: "geography", subscale: "GRPCM", subject: "GEO", maxScaleScore: 500}, {subject:"MAT", shortLabel: "mathematics", subscale: "MRPCM", maxScaleScore: 500}, {subject: "RED", shortLabel: "reading", subscale: "RRPCM", maxScaleScore: 500}, {subject: "SCI", shortLabel: "science", subscale: "SRPCM", maxScaleScore: 500}, {subject: "TEL", shortLabel: "tel", subscale: "TRPUN", maxScaleScore: 300}, {subject: "HIS", shortLabel: "history", subscale: "hrpcm", maxScaleScore: 300}];
   
    var subjectClasses = {CIV: "civics", ECN: "economics", GEO: "geography", MAT: "mathematics", RED: "reading", SCI: "science"};
    //var subjectCodes = [{subject: "CIV", label: "Civics", class: "civics", subscale: "CIVRP"}];
    var loadedData = {};
    var firstTime = true;

    function copyArray(array){
    	return JSON.parse(JSON.stringify(array));
    }

	return {
		privateSchoolDashboardPage : {
			setOverallCriteriaWithKey : function(key, value){
				_overallCriteria[key] = value;
			},
			getOverallCriteriaCopy : function(){
				return copyArray(_overallCriteria);
			},
			getSubjectDataRows : function(){
				return copyArray(subjectDataRows);
			},
			getSchoolCriterias : function(){
				return [copyArray(publicCatholicCriteria), copyArray(privateCriteria), copyArray(charterCriteria)];
			},
			loadedData : loadedData,
			firstTime : firstTime,
			requestUrl : "https://nrcpreview3.naepims.org/NRCDataService/GetAdhocData.aspx"
		},
		dataFunctions : {
			processScore : function(score){
	            if(score == 999) return 0;
	            return Math.round(score);
	        },
	        processLabel : function(label){
                if(label == null) return "#";
                return Math.round(label);
            },
            getMaxScore : function(scoreDataSet){
                var maxScore = 0;
                for(key in scoreDataSet){
                    var result = scoreDataSet[key].result;
                    if(result){
                        for(var i = 0; i < result.length; i++){
                            if(result[i].value != 999)
                                maxScore = Math.max(maxScore, result[i].value);
                        }
                    }
                }
                return maxScore;
            }
		}
	}
}();