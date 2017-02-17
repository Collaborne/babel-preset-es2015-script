*This preset is deprecated*
===========================

Instead of using this preset use the `babel-preset-es2015` with the `modules` option set to `false`:

```js
{
  "presets": [ [ "es2015", { modules: false } ] ]
}
```

`babel-preset-es2015-script` is now just a different way to write the same.

Old documentation follows:

babel-preset-es2015-script [![Build Status](https://travis-ci.org/Collaborne/babel-preset-es2015-script.svg?branch=master)](https://travis-ci.org/Collaborne/babel-preset-es2015-script) [![Greenkeeper badge](https://badges.greenkeeper.io/Collaborne/babel-preset-es2015-script.svg)](https://greenkeeper.io/)
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

    Copyright 2011-2017 Collaborne B.V. <http://github.com/Collaborne/>

    Licensed under the Apache License, Version 2.0 (the "License"); you may not
    use this file except in compliance with the License. You may obtain a copy of
    the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations under
    the License.
