var gulp = require('gulp'),
    maven = require('gulp-maven-deploy'),
    zip = require('gulp-zip');


gulp.task('deploy-local', function() {
    return gulp.src('.')
        .pipe(zip('my-artifact.war'))
        .pipe(maven.install({
            'groupId': 'com.mygroup',
        }))
});

gulp.task('default', ['deploy-local']);