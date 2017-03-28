This plugin is my version of **include-replace-webpack-plugin**
( https://github.com/justkidding96/include-replace-webpack-plugin )
# Include file
Use `@@include('path_to_file')` to place here content of file.

## Using with webpack

```js
const IncludeReplaceWebpackPlugin = require('include-replace-webpack-plugin');

plugins: [
    new IncludeReplaceWebpackPlugin({
        directory: './public/', //path to directory with files
        input: 'input.html',
        output: 'output.html',
    })
]
```
this config check `/public/input.html` to find `@@include` tags and replace it with content
of their files, next save results in `/public/output.html`, 
all pathes to including files will be read from path `/public/` 


## License
Include and replace is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).