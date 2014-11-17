$.response.contentType = "text/html";
var body;
var idResult;           	
var ID=1;

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
	 while (rs.next())
		{
		 ID++;
		}
}

 
 
var NAME = $.request.parameters.get("NAME");  
if (NAME === null) {  
    $.response.setContentType("text/plain");  
    $.response.addBody("NAME is null!");  
}  
var ADDRESS = $.request.parameters.get("ADDRESS");  
if (ADDRESS === null) {  
    $.response.setContentType("text/plain");  
    $.response.addBody("id is null!");  
}  
var FRIENDSLEVEL = $.request.parameters.get("FRIENDSLEVEL");  
if (FRIENDSLEVEL === null) {  
    $.response.setContentType("text/plain");  
    $.response.addBody("FRIENDSLEVEL is null!");  
} 
var VALUE = $.request.parameters.get("VALUE");  
if (VALUE === null) {  
    $.response.setContentType("text/plain");  
    $.response.addBody("VALUE is null!");  
}  
var COLABORATE = $.request.parameters.get("COLABORATE");  
if (COLABORATE === null) {  
    $.response.setContentType("text/plain");  
    $.response.addBody("COLABORATE is null!");  
} 
var DATE = $.request.parameters.get("DATE");  
if (DATE === null) {  
    $.response.setContentType("text/plain");  
    $.response.addBody("DATE is null!");  
}  
var CONTACT_TYPE = $.request.parameters.get("CONTACT_TYPE");  
if (CONTACT_TYPE === null) {  
    $.response.setContentType("text/plain");  
    $.response.addBody("CONTACT_TYPE is null!");  
}
 



var output = {};  
output.data = [];  
conn.prepareStatement("SET SCHEMA \"SYSTEM\"").execute();

var st = "INSERT INTO \"BMBFRIENDS\" values(?,?,?,?,?,?,?,?)"; 
pstmt = conn.prepareStatement(st);
pstmt.setInteger(1,ID);  
pstmt.setString(2,NAME);
pstmt.setString(3,ADDRESS);  
pstmt.setString(4,FRIENDSLEVEL);
pstmt.setString(5,VALUE);  
pstmt.setString(6,COLABORATE);
pstmt.setString(7,DATE);
pstmt.setString(8,CONTACT_TYPE); 
pstmt.execute();  
conn.commit();

	var record = [];   
	record.push(ID);  
	record.push(NAME);
	record.push(ADDRESS);  
	record.push(FRIENDSLEVEL);
	record.push(VALUE);  
	record.push(COLABORATE);
	record.push(DATE);
	record.push(CONTACT_TYPE);
	output.data.push(record);  
	

rs.close();
pstmt.close();
conn.close();