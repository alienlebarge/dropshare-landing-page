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
        src: ['<%= inline.dist.dest  %>'],             // source files array (supports minimatch)
        dest: '<%= inline.dist.dest  %>',             // destination directory or file
        replacements: [{
          from: '{{rooturl}}',
          to: '<%= settings.rooturl  %>'
        },
        {
          from: '{{ga}}',
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
