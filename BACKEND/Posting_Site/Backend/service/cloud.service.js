require('dotenv').config();
const ImageKit = require('@imagekit/nodejs')

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});
async function UploadFiles(buffer){

    const response = await imageKit.files.upload({
        file: buffer.toString("Base64"),
        fileName: 'file-name.jpg',
    });
    
    return response;
}

module.exports = UploadFiles;