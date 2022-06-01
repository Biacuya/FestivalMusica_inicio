const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(callback) {
    src("src/scss/**/*.scss") //Identificar el archivo SASS
        .pipe(sass()) //Compilarlo
        .pipe(dest("build/css")); //Almacernarlo en el disco duro

    callback();//Avisa al gulp que llegamos al final
}

function dev(callback) {
    watch("src/scss/**/*.scss", css);

    callback();
}

exports.css = css; //exports es codigo node
exports.dev = dev