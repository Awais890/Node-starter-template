function insertIntoDB(query)
{
    return new Promise((resolve,reject)=>{
        // var loginId = req.session.userId;
        var mySqlQuery =query;
         mySqlQuery = mySqlQuery.toUpperCase();
        con.query(mySqlQuery,(error,result)=>
        {
        
            if(!error)
            {
                // console.log("Insert successfull");
                resolve({status:"done"});
            }
            else
            {
                console.log(error.message);
                reject({status:error.message})
            }
        
        });
    });
}
function getDataFromDB(query){
    return new Promise((resolve,reject)=>{
        // var loginId = req.session.userId;
        var mySqlQuery = query;
         mySqlQuery = mySqlQuery.toUpperCase();
        //  console.log(mySqlQuery);
        con.query(mySqlQuery,(error,result)=>
        {
        
            if(!error)
            {
                // console.log("Get Successfull");
                resolve(result)
            
            }
            else
            {
                console.log(error.message);
            
        
                reject({'status':error.message})
            }
        
        });
    });
}

module.exports = {insertIntoDB,getDataFromDB}