import { Request } from 'express';
export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: Function,
) => {
  if (!file)
    return cb('File is empty', false);

  const extension = file.mimetype.split('/')[1];
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

  // if its enterprise file, we allow only one file otherwise 5 files for products
  if (allowedExtensions.includes(extension))
    return cb(null, true);

  return cb(null, false);
};
