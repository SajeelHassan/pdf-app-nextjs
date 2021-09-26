import mongoose from  'mongoose';

const DocSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    size : {
        type: String ,
        required: true, 
    },
    created : {
        type: String,
        required: true, 
    },
    filetype : {
        type: String,
        required: true, 
    },
    pdfFile:{
        type:String,
        required: true, 
    },
    color:{
        type:String,
        required: true, 
    },
    fav:{
        type:Boolean,
        required: true, 
    },
    cloudId:{
        type: String,
        required: true,  

    }
})

module.exports = mongoose.models.Doc || mongoose.model('Doc', DocSchema);