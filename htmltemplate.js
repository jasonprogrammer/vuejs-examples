var fs = require('fs-extra');
var st = require('string');
var path = require('path');

export default class HtmlTemplate {
    getFilePaths(baseDir) {
        let paths = [];
        this.getFilePathsRecursive(baseDir, paths);
        return paths;
    }

    getFilePathsRecursive(dirPath, paths) {
        fs.readdir(dirPath, (err, fileNames) => {
            for(let fileName of fileNames) {
                let fullPath = path.resolve(dirPath, fileName);
                fs.stat(fullPath, (err, stats) => {
                    if(err) {
                        console.log(err);
                        return;
                    }
                    if(stats.isDirectory(fullPath)) {
                        paths.push.apply(paths, this.getFilePathsRecursive(fullPath, paths));
                        return;
                    }
                    if(st(fileName).endsWith('.tpl.html')) {
                        console.log(fullPath);
                        paths.push(fullPath);
                    }
                });
            }
        });
    }
}
