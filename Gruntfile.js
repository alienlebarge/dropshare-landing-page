module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    compass: {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets'
        }
      }
    },

    inline: {
      dist: {
        options:{
          cssmin: true,
          uglify: true
        },
        src: ['_Dropshare-LandingPage.html'],
        dest: ['Dropshare-LandingPage.html.html']
      }
    }

  });

  // Load the plugin that provides the "compass" task.
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Load the plugin that provides the "inline" task.
  grunt.loadNpmTasks('grunt-inline');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'inline']);

};
