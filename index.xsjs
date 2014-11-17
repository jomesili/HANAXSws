$.response.contentType = "text/html";
var $myData;
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
var header =
	"<html>"+
"<head>"+
 "   <title>TODO supply a title</title>"+
 "   <meta charset=\"UTF-8\">"+
"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"+
 "    <link rel=\"stylesheet\" href=\"//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css\">"+
"     <link href=\"css/bootstrap.min.css\" rel=\"stylesheet\" media=\"screen\">"+
"    <link href=\"js/font-awesome/css/font-awesome-ie7.css\" rel=\"stylesheet\" type=\"text/css\"/>"+
"    <link href=\"js/font-awesome/css/font-awesome.css\" rel=\"stylesheet\" type=\"text/css\"/>"+

 "   <script src=\"//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js\"></script>"+

"    <script src=\"http://code.highcharts.com/highcharts.js\"></script>"+
"    <script src=\"http://code.highcharts.com/highcharts-more.js\"></script>"+
"    <script src=\"http://code.highcharts.com/modules/exporting.js\"></script>"+
"    <script src=\"http://code.jquery.com/ui/1.11.1/jquery-ui.js\"></script>"+
"    <script src=\"js/bootstrap.min.js\"></script>"+


"</head>";      
var body="";
var ID=0;
var theCount = 1;
var newSeries = []; 
var resultSet = null; 
 

var conn = $.db.getConnection();
conn.prepareStatement("SET SCHEMA \"SYSTEM\"").execute(); 
//get ID
var pstmt = conn.prepareStatement(
		"select * from \"SYSTEM\".\"BMBFRIENDS\""		
);

var rs = pstmt.executeQuery();
 
if(!rs.next()) 
	{
	
	body = "Failed Reteiving  attribute view";
	$.response.addBody(body);  
	}
else{
	var salesOrder;  
	while (rs.next())
		{
		
			
			theCount++ ;
			//testItem = theCount;
			 salesOrder = {};  
             salesOrder.Friendship = rs.getString(4);  
             salesOrder.Value = rs.getString(5);  
             salesOrder.Impact = rs.getString(6);  
             newSeries.push(salesOrder);  
		
		}
}


//setting up the connection strings
var body = "<body>";



 body= body + "   <div class=\"container-fluid\">"+
 "       <nav>"+
"        <img src=\"img/LogoBMB.png\" alt=\"\"/></nav>"+
"                </div><p></p>"+
"    <div class=\"container-fluid\">"+
 "       <div class=\"row-fluid\">"+
 "           <div class=\"span3\">"+
               
"                <select id=\"chose-cat\" >"+
 "                   <option value=\"contact\">Contact</option>"+
 "                   <option value=\"company\">Company</option>"+
                    
"                  </select>"+
"                <div class=\"contact\">"+
"                <input  type=\"text\" class = \"contact\" id=\"contactName\" placeholder=\"Contact name\">"+
"                <div class=\"input-prepend contact\">"+
"                    <span class=\"add-on\">@</span>"+
"                    <input class=\"span11\" id=\"contactEmail\" type=\"email\" placeholder=\"Contact email\">"+
"                </div>"+
"                 <p>"+
 "                   <label for=\"amount\">Friend:</label>"+
"                    <input type=\"text\" id=\"amount\" readonly style=\"border:0; color:#f6931f; font-weight:bold;\">"+
"                 </p>"+
"                <div   id=\"slider-range-max\"></div>"+
 "               </div>"+
                
"                 <div class=\"coy\">"+
"                  <input  type=\"text\" placeholder=\"Company name\" id=\"companyName\">"+
 "                <div class=\"input-prepend \">"+
"                    <span class=\"add-on\"><i class=\"fa-globe\"></i> </span>"+
"                    <input class=\"span11\" id=\"companyWebsite\" type=\"text\" placeholder=\"Company website\">"+
 "                </div>"+
 "                 <p>"+
 "                   <label for=\"competition\">Competition:</label>"+
 "                   <input type=\"text\" id=\"competition\" readonly style=\"border:0; color:#f6931f; font-weight:bold;\">"+
 "                </p>"+
"                <div   id=\"compete-range-max\"></div>"+
 "                </div>"+
                
"                <br/>"+
                
 "               <p>"+
 "                   <label for=\"coyVal\">Value to BMB Services :</label>"+
 "                   <input type=\"text\" id=\"coyVal\" readonly style=\"border:0; color:#f6931f; font-weight:bold;\">"+
  "               </p>"+
  "              <div   id=\"coyVal-range-max\"></div>"+
                
  "              <p>Probability to collaborate with</p>"+
  "              <label class=\"radio inline\">"+
 "                   <input class=\"likeness\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios1\" value=\"1\" checked>"+
 "                   not likely"+
 "                 </label>"+
 "                 <label class=\"radio inline\">"+
"                   <input class=\"likeness\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios2\" value=\"1.5\">"+
"                    likely"+
 "               </label>"+
 "               <label class=\"radio inline\">"+
  "                  <input class=\"likeness\" type=\"radio\" name=\"optionsRadios\" id=\"optionsRadios3\" value=\"2\">"+
 "                   Very likely"+
 "               </label>"+
                
                
 "               <p>"+
 "                   <a href=\"#\" id=\"addItem\" class=\"btn btn-primary btn-large\" onclick=\"clickBtn()\"><i class=\"icon-hand\"></i> Add »</a></p>"+
 "           </div>"+
 "       <div class=\"span9\">"+
 "           <div id=\"container\" style=\"height: 600px;\"></div>"+
 "       </div>"+
 "       </div>"+
  "  </div>";




 rs.close();
 pstmt.close();
 conn.close();
 

 


 $myData  =newSeries;
	  
 body= body + "   <script src=\"js/friends.js\"></script>"; 


body = body + "Result "+ newSeries + "</body>";
header = header+ "</html>";
$.response.setBody(header+body);
