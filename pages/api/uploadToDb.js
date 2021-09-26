import nextConnect from 'next-connect';
import fs from 'fs';
import cloudinary from '../../utils/cloudinary';
import dbConnect from '../../utils/dbConnect';
import Doc from '../../models/Docs';

dbConnect();
const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Process a POST request
apiRoute.post(async (req, res) => {
    try{
const result = await cloudinary.v2.uploader.upload(`${req.body[1].uploading.path}`, 
  function(error, result) {console.log(result, error); });

  let doc = new Doc({
      name:req.body[0].name,
      size:req.body[0].size,
      created:req.body[0].created,
      filetype:req.body[0].type,
      color:req.body[0].color,
      fav:false,
      pdfFile:result.secure_url,
      cloudId:result.public_id
  });
  //Save Doc Via Mongoose
  await doc.save();
  fs.unlink(`${req.body[1].uploading.path}`,(err)=>{console.log(err)});
  res.status(200).json({ data: doc });
    }
    catch(err){
        console.log(err);
    }
});

export default apiRoute;