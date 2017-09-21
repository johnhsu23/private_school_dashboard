var NAEPData = function(){
	// alert("naep data");
	

	// 	function loadData(data){
	// 		alert("load data");
	// 	}
	// },
	// var CriteriaGroup = function(){
	// 	var code;
	// 	var label;
	// }
	
	publicCatholicCriteria = {type: "data", variable: "SCHTYPE", jurisdiction: "NT", stattype: "MN%3AMN", year: "current", categoryIndex: "1,3"};
	privateCriteria = {type: "data", variable: "SCHTYP2", jurisdiction: "NT", stattype: "MN%3AMN", year: "current", categoryIndex: "1"};
    charterCriteria = {type: "data", variable: "CHRTRPT", jurisdiction: "NT", stattype: "MN%3AMN", year: "current", categoryIndex: "1"};

	return {
		codes : {
			subject : [{subject: "civics", subscale: "CIVRP"}, {subject: "economics", subscale: "ERPCM"}, {subject: "geography", subscale: "GRPCM"}, {subject: "mathematics", subscale: "MRPCM"}, {subject: "music", subscale: "MUSRP"}, {subject: "reading", subscale: "RRPCM"}, {subject: "science", subscale: "SRPCM"}, {subject: "history", subscale: "hrpcm"}, {subject: "tel", subscale: "TRPUN"}, {subject: "visualarts", subscale: "VISRP"}, {subject: "writing", subscale: "WRIRP"}],
		},
		adHocdataCriterias:{
			publicCatholicCriteria : publicCatholicCriteria,
			privateCriteria : privateCriteria,
        	charterCriteria : charterCriteria,
        	schoolCriterias : [publicCatholicCriteria, privateCriteria, charterCriteria]
		}
 	}
}();