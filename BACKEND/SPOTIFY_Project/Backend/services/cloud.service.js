const ImageKit = require('@imagekit/nodejs')

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});

async function uploadFiles(file){

    const response = await client.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "Spotify-artist-collection/music"
    });
    
    return response;
}

module.exports = {uploadFiles}