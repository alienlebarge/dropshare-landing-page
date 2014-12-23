module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    settings: grunt.file.readJSON('settings.json'),

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
        dest: ['Dropshare-LandingPage.html']
      }
    },

    replace: {
      root: {
        src: ['Dropshare-LandingPage.html'],             // source files array (supports minimatch)
        dest: 'Dropshare-LandingPage.html',             // destination directory or file
        replacements: [{
          from: '{{rooturl}}',
          to: '<%= settings.rooturl  %>'
        },
        {
          from: 'UA-XXXXXXXX-X',
          to: '<%= settings.ga  %>'
        }
        ]
      }
    }

  });

  // Load the plugin that provides the "compass" task.
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Load the plugin that provides the "inline" task.
  grunt.loadNpmTasks('grunt-inline');

  // Load the plugin that provides the "replace" task.
  grunt.loadNpmTasks('grunt-text-replace');

  // Default task(s).
  grunt.registerTask('default', ['compass', 'inline', 'replace']);

};
