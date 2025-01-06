const express=require('express');
const app=express();
//app.set('View engine','ejs');
app.get('/',(req,res)=>{
    //console.log("hi");
    //res.status(500).send("error occurred");
    //res.status(200).send({error:"error message"});
    //res.json({express:"learning express"});
    //res.send("hello world");
    res.render("index.ejs",{text:"world"});


});
/* app.get("/user:",(req,res)=>{
    res.send("user information");

});
 */
/* app.get("/user/newuser:",(req,res)=>{
    res.send("Newuser added");

});

app.get("/user/deleteuser:",(req,res)=>{
    res.send("Nuser Deleted");

}); */

const userRoute=require('./routes/user');
app.use('/user',userRoute);
app.listen(3000);
