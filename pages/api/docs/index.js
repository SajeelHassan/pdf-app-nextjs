import dbConnect from '../../../utils/dbConnect';
import upload from '../../../utils/multer';
import cloudinary from '../../../utils/cloudinary';
import Doc from '../../../models/Docs';

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
const handler = async (req, res) => {
    const { method } = req;

    switch (method) {
        case 'POST':
            try {
                // Upload image to cloudinary
                upload.single('uploading');
                // console.log(req.file);
                // const result = await cloudinary.uploader.upload(req.body.name);
                // console.log(result.json)
                // console.log(req)
                // Create new user
                // let user = new Doc({
                // name: req.body.name,
                // theFile: result.secure_url,
                // cloudId: result.public_id,
                // });
                // // Save user
                // await user.save();
                // res.json(user);
                } 
            catch (err) {
                    console.log(err);
                }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
export default handler;