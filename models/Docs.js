import mongoose from  'mongoose';

const DocSchema = new mongoose.Schema({
    name: {
        type: String
    },
    size : {
        type: String 
    },
    created : {
        type: String
    },
    filetype : {
        type: String
    },
    pdfFile:{
        type:String
    },
    color:{
        type:String
    },
    fav:{
        type:Boolean
    },
    cloudId:{
        type: String 

    }
})

module.exports = mongoose.models.Doc || mongoose.model('Doc', DocSchema);