const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/content.txt');
let writeStream = fs.createWriteStream(__dirname + "/destination.txt");

readStream.on('readable', () => {
    let chunk;
    while (null !== (chunk = readStream.read(16))) {
        console.log(`Received ${chunk.length} bytes of data.`);
        writeStream.write(chunk);
    }
});


// Below is the code to run this as a nodejs script every two minutes
// */2 * * * * /usr/local/bin/node /home/nitin/WebstormProjects/nodePractice/NodeServices.js


