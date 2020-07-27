const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var companySchema = new mongoose.Schema({
    SavedForm:{
        form1:{
            city:String,
            pincode:String
        }
     },
    NewForm:{
        form1:{
            city:String,
            pincode:String
        }
     },
    SentForm:{
        form1:{
            city:String,
            pincode:String
        }
     },
       
})
mongoose.model('company', companySchema);