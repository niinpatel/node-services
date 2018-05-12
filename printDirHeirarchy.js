const fs = require('fs');


function printDirHeirarchy(dir) {

    console.log(dir);
    let files = fs.readdirSync(dir);
        if(files){
            for(let file of files){
                filepath = dir + '/' + file;
                let stat = fs.statSync(filepath);
                if(stat.isFile()){
                    console.log(filepath);
                }
                else{
                    printDirHeirarchy(filepath);
                }

            }
        }

}

printDirHeirarchy('.');

