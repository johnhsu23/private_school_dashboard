var ETSNAEPReportingCharts = function(){
	var barChartStyles = function(){
		var margins = {left: 20, right: 20, top: 20, betweenBars: 20}
		var barWidth = 30;
		return {
			margins: margins,
			barWidth: barWidth,
			getChartWidth: function(numberBars){
				return barWidth * numberBars + margins.betweenBars * (numberBars - 1) + margins.left + margins.right;
			}
		}
	}();

	var getMinMax = function(items) {
	    return items.reduce(
	        function(accumulator, currentValue){
	            return [
	                Math.min(currentValue.score, accumulator[0]),
	                Math.max(currentValue.score, accumulator[1])
	            ];
	        }, [Number.INFINITY, Number.NEGATIVE_INFINITY]
	    );
	}

	return {
		createBarChart : function(selector, paramters){
			var data = paramters.data;
			var title = paramters.title;
			var id = paramters.id;
			var chartHeight = paramters.maxScaleScore / 2 + 60;
			var margins = barChartStyles.margins;
			var barWidth = barChartStyles.barWidth;
			var numberBars = paramters.data.length;
			var chartWidth = barChartStyles.getChartWidth(paramters.data.length);

			var svg = d3.select(selector).append("svg")
				.attr("width", chartWidth)
				.attr("height", chartHeight)
				.attr("id", id)
				.attr("class", "bar-chart")

			var barGroup = svg.append("g")
				.attr("transform", function(d) {return "translate(0, " + chartHeight + ")"})

			var bars = barGroup.selectAll("rect")
				.data(data)
				.enter()
				.append("rect")
				.attr("y", function(d){return -d.score / 2})
				.attr("x", function(d, i) {return i * 50 + margins.left})
				.attr("width", 30)
				.attr("height", function(d) {return 0})
				.attr("fill", function(d, i){
					var colors = ["#001871", "#41639e", "#889bc0", "#dde2eb"];
					return colors[i];
				});

			var barLabels = barGroup.selectAll("text")
				.data(data)
				.enter()
				.append("text")

			barLabels.attr("dx", function(d, i) {return i * (barWidth + margins.betweenBars) + margins.left + barWidth / 2})
				.attr("dy", function(d) {return -d.score - 3})
				.attr("text-anchor", "middle")
				.text(function(d){return ""});

			svg.append("text")
				.attr("dx", chartWidth / 2)
				.attr("dy", 30)
				.attr("text-anchor", "middle")
				.text(title);

			svg.append("line")
				.attr("x1", 0)
				.attr("x2", chartWidth)
				.attr("y1", chartHeight)
				.attr("y2", chartHeight);
		},

		updateBarChart : function(selector, paramters){
			var data = paramters.data;
			var title = paramters.title;
			var id = paramters.id;
			var chartHeight = paramters.maxScaleScore / 2 + 60;
			var minMax = getMinMax(data);

			var svg = d3.select("body").select(selector);
			var heightDifference = chartHeight - svg.attr("height");
			svg.attr("height", chartHeight)

			var xAxis = svg.selectAll("line")
				.attr("y1", chartHeight)
				.attr("y2", chartHeight)

			var barGroup = svg.selectAll("g")
				.attr("transform", function(d) {return "translate(0, " + chartHeight + ")"})

			var bars = barGroup.selectAll("rect")
				.data(data)
			
			bars.transition()
				.attr("y", function(d) {return -d.score / 2})
				.attr("height", function(d) {return d.score / 2})
				.duration(1000)

			var barLabels = barGroup.selectAll("text")
				.data(data)
				.transition()
				.attr("dy", function(d) {return -d.score / 2 - 3})
				.text(function(d){return d.label})
				.duration(1000);
		},

		toggleBarLabelVisibility : function(selector, position){
			var svg = d3.select("body").select(selector);
			
			var barGroup = svg.selectAll("g");
			var bars = barGroup.selectAll("rect:nth-of-type(" + (position + 1) + ")");
			bars.attr("visibility", function(d){
				var currentVisibility = d3.select(this).attr("visibility");
				if(currentVisibility == "" || currentVisibility == "hidden"){
					return "visible";	
				} else {
					return "hidden";
				}
			})
			var labels = barGroup.selectAll("text:nth-of-type(" + (position + 1) + ")");
			labels.attr("visibility", toggleVisibility)

			function toggleVisibility(d){
				var currentVisibility = d3.select(this).attr("visibility");
				if(currentVisibility == "" || currentVisibility == "hidden"){
					return "visible";
				} else {
					return "hidden";
				}
			}
		}
	}
}()