var select_all_sales_orders_query = 
"select "+
"round(avg(CAST(FRIENDLEVEL as INT)), 0) as friendvalue , "+
"round(avg(CAST(value as INT)) , 0) as BusinessValue , "+
"round(avg(CAST(COLLABORATE as REAL)), 0) as Collabvalue, "+
"CONTACT_TYPE,"+
"(round(avg(CAST(FRIENDLEVEL as INT)), 0)+ "+
"round(avg(CAST(value as INT)) , 0) + "+
"round(avg(CAST(COLLABORATE as REAL)), 0)) as CompanyValue "+
"from \"SYSTEM\".\"BMBFRIENDS\" "+
"GROUP BY CONTACT_TYPE ORDER BY CompanyValue DESC Limit 10"; 
	 
function close(closables) {  
          var closable;  
          var i;  
          for (i = 0; i < closables.length; i++) {  
                    closable = closables[i];  
                    if(closable) {  
                              closable.close();  
                    }  
          }  
}  
function getSalesOrders(){  
          var salesOrdersList = [];  
          var connection = $.db.getConnection();  
          var statement = null;  
          var resultSet = null;   
          try{  
                    statement = connection.prepareStatement(select_all_sales_orders_query);  
                    resultSet = statement.executeQuery();  
                    var salesOrder;  
                    
                    while (resultSet.next()) { 
                    	
                    		 salesOrder = {};  
                              salesOrder.friendValue = resultSet.getString(1);  
                              salesOrder.businessValue = resultSet.getString(2); 
                              salesOrder.collabValue = resultSet.getString(3);  
                              salesOrder.contactType = resultSet.getString(4); 
                              salesOrder.companyValue = resultSet.getString(5); 
                              salesOrdersList.push(salesOrder); 
                              
                    	 }
                    	
                              
                    }  
           finally {  
        	  		
                    close([resultSet, statement, connection]);   
          }  
          return salesOrdersList;  
}  
function doGet() {  
          try{  
                    $.response.contentType = "application/json";  
                    
                    $.response.setBody(JSON.stringify(getSalesOrders()));  
          }  
          catch(err){  
                    $.response.contentType = "text/plain";  
                    $.response.setBody("Error while executing query: [" + err.message + "]");  
                    $.response.returnCode = 200;  
          }  
}  
doGet();  