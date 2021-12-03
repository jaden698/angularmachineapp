var express = require('express');
var router = express.Router();
var Machine = require('../models/machine');

router.post('/add',  function(req,res,next){
    var machine = new Machine({
      id: req.body.id,
      nom:req.body.nom,
      ip:req.body.ip,
      etat:req.body.etat,
      
    });
  
    let promise = machine.save();
  
    promise.then(function(doc){
      return res.status(201).json(doc);
    })
  
    promise.catch(function(err){
      return res.status(501).json({message: 'Error registering favorit.'})
    })
  })

  router.get('/ret',function(req,res,next){

    let promise=Machine.find();

    promise.then(function(doc){
       return res.status(201).json(doc);
     })
   
})

router.delete('/delete/:id',function(req,res,next){

    let promise=Machine.findOneAndRemove(req.params.id)

    promise.then(function(doc){
       return res.status(201).json(doc);
     })
   
})





module.exports = router;