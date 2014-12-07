var path = require("path");
var rename = require("gulp-rename");

/**
 * Generate pretty URLs for files piped through this method.
 *
 * @see `gulp-rename` for more information
 *
 * @param {Object} file Object containing file path information
 * @return Modified file path object
 */
function prettyUrl(file) {
  file.extname = ".html";

  if (file.basename !== "index") {
    file.dirname = path.join(file.dirname, file.basename);
    file.basename = "index";
  }

  return file;
}

module.exports = function() {
  return rename(prettyUrl);
};
