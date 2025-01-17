import * as fs from 'fs';
import * as path from 'path';
import sharp from 'sharp';


const convertToWebp = async() => {

  const fileName = process.argv[2];

  const imageVariants = [
    { sizePercent: 100},
    { sizePercent: 95},
    { sizePercent: 90},
    { sizePercent: 85},
    { sizePercent: 80},
    { sizePercent: 75},
    { sizePercent: 70},
    { sizePercent: 65},
    { sizePercent: 60},
    { sizePercent: 55},
    { sizePercent: 50},
    { sizePercent: 45},
    { sizePercent: 40},
    { sizePercent: 35},
    { sizePercent: 30},
    { sizePercent: 25},
    { sizePercent: 20},
    { sizePercent: 15},
    { sizePercent: 10},
    { sizePercent: 5},
  ]

  try {

    //Check if the path exists
    if (!fs.existsSync( 'uploads/' + fileName)){
        return;
    }
    
    for( const sizeP of imageVariants ) {
      if( fileName.endsWith('.webp') ) {
        await sharp(`uploads/${fileName}`, { animated: true })
            .metadata()
            .then(({ width }) => sharp(`uploads/${fileName}`)
            // @ts-ignore
            .resize(Math.round(width/100 * sizeP.sizePercent ))
            .webp({ quality: 80 })
            .toFile(`images/${fileName.split('.')[0]}__${sizeP.sizePercent}.webp`));
      } else {
        let buffer = await sharp(`uploads/${fileName}`)
            .metadata()
            .then(({ width }) => sharp(`uploads/${fileName}`)
            // @ts-ignore
            .resize(Math.round(width/100 * sizeP.sizePercent ))
            .webp({ quality: 80 })
            .toBuffer());
    
        await sharp(buffer).toFile(`images/${fileName.split('.')[0]}__${sizeP.sizePercent}.webp`);
      }
    }
    
    fs.unlinkSync(`uploads/${fileName}`);

    // @ts-ignore
    process.send('File processed successfully:' + fileName);

  } catch (error) {
    console.error(error);
  }
}

convertToWebp();