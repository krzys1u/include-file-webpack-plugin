This plugin is my version of **include-replace-webpack-plugin**
( https://github.com/justkidding96/include-replace-webpack-plugin )

Repository url:
( https://github.com/krzys1u/include-file-webpack-plugin )
# Include file
Use `@@include('path_to_file')` to place here content of file.

## Using with webpack

```js
const IncludeFileWebpackPlugin = require('include-file-webpack-plugin');

plugins: [
    new IncludeFileWebpackPlugin(config)
]
```

### config options:

```js
const config = {
    directory: './public/', //path to directory with files
    input: 'input.html',
    output: 'output.html',
    processIncludeContents: function(html) {
        return html;
    }
}
```

##### directory: path where files should be looked for
##### input: input file to process
##### output: output file generated from plugin
##### processIncludeContents: (optional) function used for processing each included file

this config checks `/public/input.html` to find `@@include` tags and replace it with content
of their files, next save results in `/public/output.html`, 
all pathes to including files will be read from path `/public/` 


## License
Include and replace is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).