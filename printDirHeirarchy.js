const dirTree = require('directory-tree');

function getDirTree(path) {
    return dirTree(path);
}


const tree = getDirTree('.');
console.log(JSON.stringify(tree));
