$(document).ready(function(){
    $.getScript( "js/ets_util.js", function( data, textStatus, jqxhr ) {
        alert(ETSUtil);
        ETSUtil.runScripts(["js/naep_data.js"], function(){
            main();
        });
    });
    
    function setValue(name, value){
        alert("set " + name + " to " + value);
    }

    function main(){
        $(".select-options.jurisdiction-new").autocompleteDropdown("jurisdiction", true, setValue);
        $(".select-options.result-new").autocompleteDropdown("statType", false, setValue);
    }

})

setTimeout(function(){alert("time out");alert(ETSUtil.runScripts);}, 3000);