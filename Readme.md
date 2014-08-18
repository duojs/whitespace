
# duo-whitespace

  compile whitespace-significant CSS to valid CSS using [css-whitespace](https://github.com/reworkcss/css-whitespace).

## Installation

```bash
npm install duo-whitespace
```

## Usage

From the CLI:

```bash
$ duo --use duo-whitespace
```

Using the API:

```js
Duo(root)
  .entry(entry)
  .use(whitespace())
  .run(fn);
```

## API

### whitespace([opts])

Initialize a duo plugin. The available options are:

- `type`: specify a type to filter on. Defaults to `.styl` files

## Test

```bash
$ npm install
$ make
```

## License

(The MIT License)

Copyright (c) 2014 Matthew Mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
