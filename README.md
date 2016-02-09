babel-preset-es2015-script [![Build Status](https://travis-ci.org/Collaborne/babel-preset-es2015-script.svg?branch=master)](https://travis-ci.org/Collaborne/babel-preset-es2015-script)
=========
Babel preset based on [the es2015 preset](http://babeljs.io/docs/plugins/preset-es2015/), but for use inside the browser rather than for an ES6 module.
Specifically this preset does not include [the transform-es2015-modules-commonjs plugin](http://babeljs.io/docs/plugins/transform-es2015-modules-commonjs/)

## Installation

	$ npm install --save-dev babel-preset-es2015-script

## Usage

```js
{
  "presets": ["es2015-script"]
}
```

## License

    This software is licensed under the Apache 2 license, quoted below.

    Copyright 2011-2016 Collaborne B.V. <http://github.com/Collaborne/>

    Licensed under the Apache License, Version 2.0 (the "License"); you may not
    use this file except in compliance with the License. You may obtain a copy of
    the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations under
    the License.
