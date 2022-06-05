const { src, dest, watch, parallel } = require("gulp");

//css
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//Imagenes
const cache = require("gulp-cache");
const imageMin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

function css(callback) {
    src("src/scss/**/*.scss") //Identificar el archivo SASS
        .pipe(plumber())
        .pipe(sass()) //Compilarlo
        .pipe(dest("build/css")); //Almacernarlo en el disco duro

    callback();//Avisa al gulp que llegamos al final
}

function imagenes(callback) {
    const options = {
        optimizationLevel: 3
    };

    src("src/img/**/*.{jpg,png}")
        .pipe(cache(imageMin(options)))
        .pipe(dest("build/img"))
    callback();
}

function versionWebp(callback) {
    const options = {
        quality: 50
    };
    src("src/img/**/*.{jpg,png}")
        .pipe(webp(options))
        .pipe(dest("build/img"))

    callback();
}

function versionAvif(callback) {
    const options = {
        quality: 50
    };
    src("src/img/**/*.{jpg,png}")
        .pipe(avif(options))
        .pipe(dest("build/img"))

    callback();
}

function dev(callback) {
    watch("src/scss/**/*.scss", css);
    callback();
}

exports.css = css; //exports es codigo node
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif, dev); //parallel ejecuta todas las funciones al mismo tiempo