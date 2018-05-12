const fs = require('fs');

function allFileNames(folder) {

    fs.readdir(folder, (err, files) => {
        if(err){
            console.log(err);
        } else {
            for (let file of files) {
                console.log(file);
            }
        }
    })

}

function createFolder(folderName) {

    fs.mkdir(folderName, 0o777, (err)=> {
        if(err){
            console.log(err);
        }
        else console.log(folderName + ' created');
    })

}


function deleteFolder(folderName) {

    fs.rmdir(folderName, (err)=> {
        if(err){
            console.log(err);
        }
        else console.log(folderName + ' deleted');
    })

}

function readTxt(file) {

    fs.readFile(file, 'utf-8', (err, data) => {
        if(err){
            console.log(err);
        }
        else console.log(data);
    })

}

function appendTxt(file, data) {

    fs.appendFile(file, data, 'utf-8', (err) => {
        if(err) {
            console.log(err);
        }
        else console.log('data has been added to ' + file);
    })
}


/**
 * Uncomment these to test out the functions.
 */
// allFileNames('.');
// createFolder('hello world');
// deleteFolder('folder 1');
// readTxt('1.txt');
// appendTxt('1.txt', 'this is appended text');
// appendTxt('hello.txt', 'hello world');
