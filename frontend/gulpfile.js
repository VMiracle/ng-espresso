var gulp = require('gulp'),
    pug = require('gulp-pug2');
gulp.task('pug', function() { 
    return gulp.src('dev/templates/pug/*.pug') // los archivos se encuentran en una carpeta llamada "pug"
       .pipe(pug({ yourTemplate: 'Locals' }))
       .pipe(gulp.dest('./dev/templates/')) // los archivos HTML creados se ubicarán en la raíz del proyecto
});

gulp.task('watch', function() {
    gulp.watch('dev/templates/pug/*.pug', ['pug']);
});
gulp.task('default', ['pug', 'watch']);