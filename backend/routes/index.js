var express = require('express');
const con = require('../config/config');
var router = express.Router();

/* GET home page. */
router.get('/getList', function(req, res, next) {
  var sql= "select * from  student "
  con.query(sql,(Error,result )=>{
    if(Error){
      console.log(Error)
    }else{
      console.log(result)
      res.json( result);

    }
})
 
});

module.exports = router;
