import nextConnect from 'next-connect';
import fs from 'fs';
import multer from 'multer';
import cloudinary from '../../utils/cloudinary';
import dbConnect from '../../utils/dbConnect';
import Doc from '../../models/Docs';

dbConnect();
// Returns a Multer instance that provides several methods for generating 
// middleware that process files uploaded in multipart/form-data format.
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/fileuploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});


const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.single('uploading');

// Adds the middleware to Next-Connect
apiRoute.use(uploadMiddleware);

// Process a POST request
apiRoute.post(async (req, res) => {
    try{
const result = await cloudinary.v2.uploader.upload(`./public/fileuploads/${req.body.name}`, 
  function(error, result) {console.log(result, error); });

  let doc = new Doc({
      name:req.body.name,
      size:req.body.size,
      created:req.body.created,
      filetype:req.body.type,
      color:req.body.color,
      fav:false,
      pdfFile:result.secure_url,
      cloudId:result.public_id
  });
  //Save Doc Via Mongoose
  await doc.save();
   fs.unlink(`./public/fileuploads/${req.body.name}`,(err)=>{console.log(err)});
  res.status(200).json({ data: doc });
    }
    catch(err){
        console.log(err);
    }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};