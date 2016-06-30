var Str = require('string');
var Path = require('path');
var Readdir = require('recursive-readdir');
var Bluebird = require('bluebird');
var Fs = Bluebird.promisifyAll(require('fs-extra'));

export default class HtmlTemplate {
    recursiveHtmlToJs(basePath, onDone) {
        let ignoreFunc = function(file, stats) {
            // `file` is the absolute path to the file, and `stats` is an `fs.Stats`
            // object returned from `fs.lstat()`.
            return stats.isDirectory() || !Str(file).endsWith('.tpl.html');
        };

        // Ignore files named 'foo.cs' and descendants of directories named test
        Readdir(basePath, [ignoreFunc], function(err, files) {
            console.log(files);
            let numFilesDone = 0;
            for(let fullPath of files) {
                console.log(fullPath);
                Fs.readFileAsync(fullPath, 'utf8').then(function(data) {
                    console.log(arguments);
                    let lines = data.split("\n");

                    if(!lines || (lines.length === 0)) {
                        return;
                    }
                    let escapedLines = [];

                    if(lines[lines.length-1] != "") {
                        lines.push('');
                    }
                    for(let line of lines) {
                        escapedLines.push("'" + line.replace("'", "\\'") + "'");
                    }

                    let outPath = fullPath.slice(0, -1 * ('.html'.length)) + '.js';
                    let startJs = 'export default (';
                    let endJs = ')';

                    Fs.writeFileAsync(outPath, startJs + escapedLines.join("\n+") + endJs)
                        .then(function() {
                            if(++numFilesDone == files.length) {
                                onDone();
                                return;
                            }
                        })
                        .catch((err) => {
                            console.log(err);
                            throw err;
                    });
                    console.log(escapedLines);
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                });
            }
        });
    }
}
