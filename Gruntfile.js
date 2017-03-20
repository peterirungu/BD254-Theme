"use strict";
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		connect: {
            server: {
                options: {
                    port: 8000,
                    base: './',
                    livereload: true,
                    open: {
                        target: 'http://localhost/BD254-Theme/'
                    }
                }
            }
        },

        cssmin: {
        	target: {
        		files: [{
        			expand: true,
        			cwd: 'assets/css',
        			src: ['asstes/*.css', 'assets/!*.min.css'],
        			dest: 'assets/css/',
        			ext: '.min.css'
        		}]
        	}
        },

        watch: {
        	scripts:{
        		files: ['assets/js/*.js', 'assets/css/*.css'],
        		options: {
        			spawn: false,
        		},
        	},
        },

        jshint: {
            files: ['assets/js/*.js'],
        },
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
    grunt.registerTask('default', ['connect', 'cssmin', 'watch']);
}

