import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/fileuploads";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(err);
   res.status(200).json({data: [fields,files]});
  });
};