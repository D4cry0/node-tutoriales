import { Request } from 'express';
import { v4 as uuid } from 'uuid';

export const fileNamer = (req: Request, file: Express.Multer.File, cb: Function) => {
  if(!file)
    return cb('File is empty', false);
  
  const fileExtension = file.mimetype.split('/')[1];

  const nameSplitByDot = file.originalname.split('.');
  nameSplitByDot.length > 1 && nameSplitByDot.pop();
  const nameWithoutExtension = nameSplitByDot.join('.');

  const fileName = `${nameWithoutExtension.replace(/[^a-zA-Z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-+|-+$/g, '')}_${uuid()}.${fileExtension}`;

  cb(null, fileName);
}