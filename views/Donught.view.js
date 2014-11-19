sap.ui.jsview("views.Donught", {  
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
                    var mainDonoughtChart = new sap.viz.ui5.Donut("mainDonoughtChart", {  
                              width : "100%",  
                              height : "40%",  
//                              line : {
//                          		'colorPalette' : d3.scale.category20().range()
//                          		}, 
                          		 
                              title : {  
                                        visible : true,  
                                        text : '% Contact High Returns '
                              },
//                          	legend: {
//                          		position:'bottom',
//                          	}
//                              ,  
                                
                              dataset : topSalesDataset = new sap.viz.ui5.data.FlattenedDataset({  
                                        // a Bar Chart requires exactly one dimension (x-axis)  
                                        dimensions : [ {  
                                                  axis : 1, // must be one for the x-axis, 2 for y-axis  
                                                  name : 'Group',  
                                                  value : "{Group}"  
                                        }],  
                                        // it can show multiple measures, each results in a new set of bars  
                                        // in a new color  
                                        measures : [   
                                        {  
                                                group:1,  
                                        		name : 'Value', // 'name' is used as label in the Legend  
                                                  value : '{Best}' // 'value' defines the binding for the  
                                        }   
                                         
                                        ],  
                                        // 'data' is used to bind the whole data collection that is to be  
                                        // displayed in the chart  
                                        data : {  
                                                  path : "/"  
                                        } 
                              
                              })  
                    });  

                    return mainDonoughtChart;   
}  
});  