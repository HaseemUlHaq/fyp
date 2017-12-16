const Notification=require("../models/notification");

exports.getAll=function (req,res,next)
{
  console.log("listening to Notification");
  res.send({type:"GET"});
};

exports.add=function (req,res,next)
{
  Notification.create(req.body).then(function (Notification)
  {
    res.send(Notification);
  }).catch(next);
};


exports.edit=function (req,res,next)
{
  Notification.findByIdAndUpdate({_id:req.params.id},req.body).then(function()
  {
    Notification.findOne({_id:req.params.id}).then(function (Notification)
    {
      res.send(Notification);
      console.log({_id:req.params.id});
    })
  })
};

exports.isDeleted=function (req,res,next)
{
  Notification.findByIdAndRemove({_id:req.params.id}).then(function(Notification)
  {
    res.send(Notification);
    console.log({_id:req.params.id});
  });
};
