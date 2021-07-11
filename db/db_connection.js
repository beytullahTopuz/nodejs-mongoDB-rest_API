const mongoose = require('mongoose');

//connect db
mongoose.connect('mongodb://localhost/blood_donation_DB',
{useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false})
    .then(()=>console.log("DB connection is successful"))
    .catch(err =>console.log("connection failed", err));