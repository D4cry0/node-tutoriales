import * as fs from 'fs';
import {fork} from 'child_process';


const fileProccessor = () => {
  try {   
    const filesUploaded = fs.readdirSync('uploads');
  
    filesUploaded.forEach((fileName) => {
      console.log('Processing file in fork process: ' + fileName);

      const forkP = fork('fileConverter.js', [fileName]);
    
      forkP.on('message', (message) => {
        console.log(`Fork PID: ${forkP.pid} >> ${message}`);
      });

      forkP.on('exit', (code) => {
        console.log(`Fork PID ${forkP.pid} >> exited with code: ` + code);
      });
    
      forkP.on('error', (error) => {
        console.log(`Fork PID ${forkP.pid} >> error: `, error);
      });
  
    });

    console.log('\n\n');

  } catch (error) {
    console.error('Error processing files: ' + error);
  }
}

fileProccessor();