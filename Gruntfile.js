'use strict';
const sass = require('node-sass');

module.exports = function (grunt) {
  grunt.initConfig({
    sass:{
      options:{
        implementation: sass,
        outputStyle: 'expanded',
        sourceMap:true
      },
      dist:{
        files:[{
          expand:true,
          cwd: 'assets/sass/',
          src: '**/*.scss',
          dest: 'assets/css',
          ext: '.css'
        }]
      }
    },
    watch:{
      files:'assets/sass/**/*.scss',
      tasks: 'sass',
      options: {
        livereload: true,
      }
    },
    browserSync: {
      bsFiles: {
        src : [
          'html/*.html',
          'html/**/*.html',
          'js/*.js',
          'assets/css/*.css'
            ]
        },
        options: {
            watchTask: true,
                server: {
                  baseDir: "./"
              }
        }
  }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default',['browserSync','sass','watch'])
};