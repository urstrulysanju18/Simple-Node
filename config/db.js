const mongoose=require('mongoose')

const db=async()=>{
    try{
        await mongoose.connect('mongodb+srv://urstrulysanju:test1234@cluster.xtgie.mongodb.net/Node_Interview?retryWrites=true&w=majority&appName=Cluster')
        .then(()=>console.log("Connected to MongoDB"))
        .catch(()=>console.log('Error'))
    }
    catch(err){
        console.log('error')
    }
}

module.exports=db