import express from 'express';
import cors from 'cors';
import { fileNamer } from './helpers/fileNamer';
import { fileFilter } from './helpers/fileFilter';
import multer from 'multer';

import { exec } from 'child_process';


const bootstrap = () => {

  const storage = multer.diskStorage({
    destination: function (req: any, file: Express.Multer.File, cb: Function) {
      cb(null, 'uploads/')
    },
    filename: fileNamer
  });

  const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
  });

  const app = express();
  
  // use middleware
  app.use(express.json());
  app.use(cors());

  console.log('Server enpoint: (get) /');
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  console.log('Server enpoint: (delete) /images');
  app.delete('/images', (req, res) => {
    exec('rm -rf images/*', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
    
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
    
      console.log(`Images folder cleaned >> ${stdout}`);
    });

    res.send('Delete images success');
  });

  console.log('Server enpoint: (post - multipart/form-data) /upload/images');
  app.post('/upload/images', upload.array('imgs', 30), (req, res) => {
    // @ts-ignore
    // console.log('req.files', req.files);

    exec('node fileProc.js', (error, stdout, stderr) => {
      if (error) {
        console.error(`error: ${error.message}`);
        return;
      }
    
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
    
      console.log(`Process fileProc.js stdout:\n${stdout}`);
    });


    res.send('Upload images success');
  });

  console.log('Server is running on port 3000');
  app.listen(3000);
}

bootstrap();