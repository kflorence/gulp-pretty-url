# gulp-pretty-url

A simple [https://github.com/hparra/gulp-rename](gulp-rename) wrapper to generate pretty URLs.

## Install

`npm install gulp-pretty-url --save-dev`

## Example

```javascript
var gulp = require("gulp");
var prettyUrl = require("gulp-pretty-url");

gulp.task("pretty-urls", function() {
  return gulp.src("src/**/*.hbs")
    .pipe(prettyUrl())
    .pipe(gulp.dest("dest"))
});
```

Given the following file structure:

```
  .
  ├── index.hbs
  ├── qux.hbs
  └── foo
      ├── bar.hbs
      └── baz.hbs
```

The result would be:

```
  .
  ├── index.html
  ├── qux
  │   ├── index.html
  └── foo
      ├── bar
      │   └── index.html
      └── baz
          └── index.html
```

## License

MIT
