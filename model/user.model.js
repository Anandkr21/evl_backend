const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    pass:String,
    age:Number,
    city:String
})

const userModel=mongoose.model('user',userSchema)

module.exports={
    userModel
}

// {
//     "name":"anand",
//     "email":"a@gmail.com",
//     "gender":"male",
//     "pass":"anand",
//     "age":"44",
//     "city":"cpr"
//   }



// name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String