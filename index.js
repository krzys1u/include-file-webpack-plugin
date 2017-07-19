const path = require('path');
const fs = require('fs');

class IncludeFileWebpackPlugin {
    constructor ( config ) {
        this.input = config.input;
        this.output = config.output;
        this.directory = config.directory;
        this.processIncludeContents = config.processIncludeContents;

        this.inputPath = this.directory + this.input;
        this.outputPath = this.directory + this.output;
    }

    apply () {
        this.processFile();
    }

    processFile () {
        this.inputContent = fs.readFileSync(this.inputPath, 'utf-8');

        const matches = this.findIncludeTags(/@@include\(\'(.*)\'\)/g);

        var replacementData = [];

        matches.forEach(function(match) {
            let from = match[0],
                to = match[1],
                includedFile = this.directory + to.replace('./',''),
                fileContent = fs.readFileSync(includedFile);

            if (this.processIncludeContents) {
                fileContent = this.processIncludeContents(fileContent.toString());
            }

            replacementData.push({
                from: from,
                to: fileContent
            });
        }.bind(this));

        this.includeAndSaveFile(replacementData);
    }

    includeAndSaveFile ( data ) {
        data.forEach(function(item){
            this.inputContent = this.inputContent.replace(item.from, item.to);
        }.bind(this));

        fs.writeFileSync(this.outputPath, this.inputContent);
    }

    findIncludeTags (regexp) {
        let matches = [];
        this.inputContent.replace(regexp, function () {
            let arr = Array.prototype.slice.call(arguments);
            matches.push(arr);
        });
        return matches;
    }
}

module.exports = IncludeFileWebpackPlugin;