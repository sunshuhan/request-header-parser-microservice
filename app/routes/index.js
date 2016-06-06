"use strict";
module.exports = function(app){
    app.route('/').get(function(req,res){
      res.json({ipaddress:req.headers['x-forwarded-for'],language:req.headers['accept-language'].split(',')[0],software:req.headers['user-agent'].substring(req.headers['user-agent'].indexOf('(')+1,req.headers['user-agent'].indexOf(')'))});

  
    });
};
