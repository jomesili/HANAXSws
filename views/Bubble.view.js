sap.ui.jsview("views.Bubble", {  
          /** Specifies the Controller belonging to this View. 
          * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller. 
          * @memberOf views.Bubble 
          */  
          getControllerName : function() {  
                    return null;  
          },  
          /** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
          * Since the Controller is given to this method, its event handlers can be attached right away. 
          * @memberOf views.Companies 
          */  
          createContent : function(oController) {
        	  
		        	 
                    var mainBubbleChart = new sap.viz.ui5.Scatter("mainBubbleChart", {  
                              width : "100%",  
                              height : "50%",  
                              line : {
                          		//'colorPalette' : d3.scale.category20().range()
                          		},   
                              title : {  
                                        visible : true,  
                                        text : 'Friend Aggregation'   
                              },
                              xAxis: {  
                                  //title: { visible: true, text : "Friend Aggregation" },
                                  scale: new sap.viz.ui5.types.Axis_scale({fixedRange:true, minValue: 0, maxValue: 12})
                         		 }, 
                                
                              dataset : topSalesDataset = new sap.viz.ui5.data.FlattenedDataset({  
                                        // a Bar Chart requires exactly one dimension (x-axis)  
                                        dimensions : [ {  
                                                  axis : 1, // must be one for the x-axis, 2 for y-axis  
                                                  name : 'Company',  
                                                  value : "{Name}"  
                                        }],  
                                        // it can show multiple measures, each results in a new set of bars  
                                        // in a new color  
                                        measures : [   
                                          
                                        {  
                                            group:1,  
                                    		name : 'Business Value', // 'name' is used as label in the Legend  
                                              value : '{BusinessValue}' // 'value' defines the binding for the  
                                    },
                                        {  
                                        		group:2, 
                                        		name : 'Friend Value', // 'name' is used as label in the Legend  
                                                  value : '{friendValue}' // 'value' defines the binding for the  
                                        }  
                                        ],  
                                        // 'data' is used to bind the whole data collection that is to be  
                                        // displayed in the chart  
                                        data : {  
                                                  path : "/"  
                                        } 
                              
                              })  
                    }); 
//                    var YAxis = mainBubbleChart.getYAxis();
//		        	  YAxis.setVisible(true);
                   
  
                    return mainBubbleChart;  
}  
});  