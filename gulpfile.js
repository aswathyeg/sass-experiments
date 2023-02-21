import { src, dest, watch, series } from "gulp";
const saas = import("gulp-sass")(import("saas"));
function buildStyles() {
  //to compile sass
  return src("index.scss").pipe(saas()).pipe(dest("css"));
}
function watchTask() {
  //to watch and recompile
  watch(["index.scss"], buildStyles);
}
exports.default = series(buildStyles, watchTask);
