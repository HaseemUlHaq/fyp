//var plaza=require('../models/plaza.js');
const Shop= require("../models/shop");

exports.getAll=function (req,res,next)
{
  console.log("listening to shop");
  res.send({type:"GET"});
};

exports.add=function (req,res,next)
{
  Shop.create(req.body).then(function (Shop)
  {
    res.send(Shop);
  }).catch(next);
};


exports.edit=function (req,res,next)
{
  Shop.findByIdAndUpdate({_id:req.params.id},req.body).then(function()
  {
    Shop.findOne({_id:req.params.id}).then(function (Shop)
    {
      res.send(Shop);
      console.log({_id:req.params.id});
    })
  })
};

exports.isDeleted=function (req,res,next)
{
  Shop.findByIdAndRemove({_id:req.params.id}).then(function(Shop)
  {
    res.send(Shop);
    console.log({_id:req.params.id});
  });
};
