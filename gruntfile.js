module.exports = function(grunt){
	grunt.initConfig({
		watch:{
			css:{
			  files: ['**/sass/**/*.sass'],
			  tasks: ['sass', 'autoprefixer']
			 }

		},
		autoprefixer:{
			single_file:{
				src: '**/css/style.css',
				dest: 'assets/css/style.css'
			}
		},
		sass:{
			options:{
	        	style: 'expanded'
	      	},
			dist:{
		      files:{
		        'assets/css/style.css': 'assets/sass/master.sass'
		      }
		    }
		},
		markdown: {
		    all: {
		      files: [
		        {
		          expand: true,
		          src: 'Unterlagen/*.md',
		          dest: 'Unterlagen',
		          ext: '.html'
		        }
		      ]
		    }
		  }

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-markdown');
	grunt.registerTask("default", ['autoprefixer']);
	grunt.registerTask("default", ['sass']);
	grunt.registerTask("default", ['grunt-markdown']);
	grunt.registerTask('la', ['watch']);

}
