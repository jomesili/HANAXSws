var $myCat;

var secondVal;
var firstVal;
var grp;
var ID =1;
var NAME;
var ADDRESS;  
var FRIENDSLEVEL;
var VALUE;  
var COLABORATE;
var DATE;
var CONTACT_TYPE;
var collabValue;
var thirdVal;
var options;
var xValue;
var yValue;
var collabValue;
var testItem;

var newSeries=[];


function loadXMLDoc()
{
	   
	   $.get( "insert.xsjs", {ID:ID,NAME:NAME,ADDRESS:ADDRESS,FRIENDSLEVEL:FRIENDSLEVEL,VALUE:VALUE,COLABORATE:COLABORATE,DATE:"04-11-14",CONTACT_TYPE:CONTACT_TYPE } )
	   .done(function( data ) {
	     alert( "Data Loaded: " + data );
	   });
	   
   
	   
	   
};


function clickBtn(){
	getNewFigure();
	
	loadXMLDoc();


	xValue = firstVal*1;
	yValue = collabValue*1;
	newSeries = [xValue,yValue,secondVal];
	//newSeries = [xValue,thirdVal,secondVal];
	if($myCat === "contact"){
	options.series.push({
	//options.series.push({
	name: 'Friends',
	    data:[newSeries],
	    });
	}
	else{
	    options.series.push({
	        name: 'Company',
	color: '#00FF00',
	data:[newSeries]
	},false);


                 
       }
	var chart = new Highcharts.Chart(options); 
         
         
};
    
$(function () {
	var theThing = $.getJSON( "insert.xsjs", $myData );
	
});
   
$(function () {
        
        
         options = {
            chart: {
                renderTo: 'container',
			type: 'bubble',
			zoomType: 'xy'
			            },
			            tooltip: {
			formatter: function() {
			return 'The value for <b>' + xValue + '</b> is <b>' + this.y + '</b>, in series '+ this.series.name;
			}
			},
            credits: {
                    enabled: false
                },
               series: [{
                    data: [newSeries]
            }],
                xAxis: {
            plotLines: [{
                color: '#000000',
		    width: 1,
		    value: 5,
		    lineWidth: 0,
			minorGridLineWidth: 0,
			lineColor: 'transparent'
		    }],
		    max: 10,
		    min: 0
			},
			yAxis: {
			    plotLines: [{
			        color: '#000000',
			                width: 1,
			                value: 5
			            }],
			        labels: {
			enabled: false
			},
             max: 10,
            min: 0
        }
                }; 

         
        var chart = new Highcharts.Chart(options);
        
  
   });
   
$(function() {
       	$( "#slider-range-max" ).slider({
		 range: "max",
		 min: 1,
		 max: 9,
		 value: 1,
		 slide: function( event, ui ) {
		   $( "#amount" ).val( ui.value );
		     }
		   });
		   $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
		   
		                
		   $( "#compete-range-max" ).slider({
		 range: "max",
		 min: 1,
		 max: 9,
		 value:1,
		 slide: function( event, ui ) {
		   $( "#competition" ).val( ui.value );
		     }
		   });
		   $( "#competition" ).val( $( "#compete-range-max" ).slider( "value" ) );
		   
		   $( "#coyVal-range-max" ).slider({
		 range: "max",
		 min: 1,
		 max: 9,
		 value: 1,
		 slide: function( event, ui ) {
		   $( "#coyVal" ).val( ui.value );
		     }
		   });
		   $( "#coyVal" ).val( $( "#coyVal-range-max" ).slider( "value" ) );
  
 });
   
function showCompany() {
	$(".coy").show();
	$(".contact").hide();
};
	         
	           
function showContact() {
	$(".coy").hide();
	$(".contact").show();
};

// set which category to show up first by calling the function

$(showContact);

$(function (){
	$('#chose-cat').change(function(){
                
	$myCat = $( "#chose-cat" ).val();
	($myCat === "contact") ?  showContact() : showCompany();
	   
	    });
});
	 

$(function (){
	$('#chose-cat').select(function(){
	$myCat = $( "#chose-cat" ).val();
	($myCat === "coy") ?  showContact() : showCompany();
	grp = $myCat;
	});
 });
            
                
           
//used to collect information from form
             
function getNewFigure(){	 
	if($('input[type="radio"].likeness').is(':checked')) {
		secondVal = $("input[type='radio'].likeness:checked").val();// multiply with to get size of Bubble
	}
	$myCat = $( "#chose-cat" ).val(); 
	
	if($myCat === "contact"){
		firstVal =  $( "#amount" ).val();
		CONTACT_TYPE = $myCat;
		NAME = $( "#contactName" ).val();
		ADDRESS = $( "#contactEmail" ).val();
		FRIENDSLEVEL = $( "#amount" ).val();
	}
	else {
	    firstVal = $ ( "#competition" ).val();
		NAME = $( "#companyName" ).val();
		CONTACT_TYPE = $myCat;
		ADDRESS = $( "#companyWebsite" ).val();
		FRIENDSLEVEL = $( "#competition" ).val();
	}
	
	VALUE = $ ( "#coyVal" ).val();// value to company
	collabValue = $ ( "#coyVal" ).val();// value to company
	thirdVal = (firstVal * secondVal);
	COLABORATE = $("input[type='radio'].likeness:checked").val();// likelyhood to collaborate inthe future
	    
	   
   
}