import mongoose from  'mongoose';

const DocSchema = new mongoose.Schema({
    name: {
        type: String
    },
    theFile : {
        type: String 
    },
    cloudId:{
        type: String 

    }
})

module.exports = mongoose.models.Doc || mongoose.model('Doc', DocSchema);