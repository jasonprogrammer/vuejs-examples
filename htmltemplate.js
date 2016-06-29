var Fs = require('fs-extra');
var Str = require('string');
var Path = require('path');
var Readdir = require('recursive-readdir');
var Bluebird = require('bluebird');

export default class HtmlTemplate {
    recursiveHtmlToJs(basePath) {
        let ignoreFunc = function(file, stats) {
            // `file` is the absolute path to the file, and `stats` is an `fs.Stats`
            // object returned from `fs.lstat()`.
            return stats.isDirectory() || !Str(file).endsWith('.tpl.html');
        };

        // Ignore files named 'foo.cs' and descendants of directories named test
        Readdir(basePath, [ignoreFunc], function(err, files) {
            console.log(files);
            for(let fullPath of files) {
                console.log(fullPath);
                Fs.readFile(fullPath, 'utf8', function(err, data) {
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

                    Fs.writeFile(outPath, startJs + escapedLines.join("\n+") + endJs, (err) => {
                        if(err) {
                            console.log(err);
                            throw err;
                        }
                    });
                    console.log(escapedLines);
                });
            }
        });
    }
}
