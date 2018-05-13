const fs = require('fs');


function printDirHeirarchy(dir) {

    console.log(dir);
    let files = fs.readdirSync(dir);
    let filePath;
    for (let file of files) {
        filePath = dir + '/' + file;
        let stat = fs.statSync(filePath);
        if (stat.isFile()) {
            console.log(filePath);
        }
        else {
            printDirHeirarchy(filePath);
        }

    }
}

printDirHeirarchy(__dirname);

