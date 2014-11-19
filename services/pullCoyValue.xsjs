var select_all_sales_orders_query = "select (select count(*) from \"SYSTEM\".\"BMBFRIENDS\") as TotalCount, (select count(*) from \"SYSTEM\".\"BMBFRIENDS\" where COLLABORATE < '2') as QualifiedCount from \"SYSTEM\".\"BMBFRIENDS\" LIMIT 2";
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
                    var mixt=true;
                    while (resultSet.next()) { 
                    	 if (mixt === true){
                    		 salesOrder = {};  
                              salesOrder.Average = resultSet.getString(1);  
                                                         
                              salesOrder.Best = resultSet.getString(2); 
                              salesOrdersList.push(salesOrder); 
                              mixt = false;
                    	 }
                    	 else {
                    		 salesOrder = {};  
                             salesOrder.Average = resultSet.getString(2);  
                                                        
                             salesOrder.Best = resultSet.getString(1); 
                             salesOrdersList.push(salesOrder); 
                             mixt = true;
                   	 }
                    	
                              
                              

                              
                    }  
          } finally {  
        	  		
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