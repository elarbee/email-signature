module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: false
      },
      files: {                                   // Dictionary of files
        './email-signature.min.html' : './email-signature.html'    // 'destination': 'source'
      }
    }
  },
    watch: {
      files: ['./email-signature.html'],
      tasks: ['htmlmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
