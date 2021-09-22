import dbConnect from '../../../utils/dbConnect';
import Doc from '../../../models/Docs';

dbConnect();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            try {
                const docs = await Doc.find({});

                res.status(200).json({ success: true, data: docs })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}