module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // htmlmin: {
        //     dist: {
        //         options: {
        //             removeComments: true,
        //             collapseWhitespace: true
        //         },
        //         files: {
        //             'dist/index.html': 'index.html',   
        //         }
        //     }
        // },
        concat: {
            dist: {
                src: ['scss/*.scss'],
                dest: 'scss/build.scss'
            }
        },
        sass: {
            dist: {
                files: {
                    'css/build.css': 'scss/build.scss',
                }
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': ['css/*.css']
                }
            }
        },
        uglify: {
            options: {
                compress: true
            },
            app: {
                src: ['js/app.js', 'js/*/*.js', 'js/filter.js'],
                dest: 'dist/app.min.js'
            },
            // routes: {
            //     src: ['js/routes.js'],
            //     dest: 'dist/routes.min.js'
            // },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-htmlmin')

    grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'uglify']);
};