'use strict'

var gulp = require('gulp'),
      minifycss = require('gulp-minify-css'),
      uglify = require('gulp-uglify'),
      browserify = require('gulp-browserify'),
      rev = require('gulp-rev'),
      clean = require('gulp-clean'),
      revCollector = require('gulp-rev-collector'),
      runSequence = require('gulp-sequence'),
      promise = require('es6-promise').Promise,
      requirejsOptimize = require('gulp-requirejs-optimize'),
      flatten = require('gulp-flatten');

//清空文件夹，避免资源冗余
gulp.task('clean',function(){
   return gulp.src('./dist',{read:false,force:true}).pipe(clean());
});

//清空文件夹，避免资源冗余
gulp.task('pm-clean',function(){
   return gulp.src('./pointsMall/dist',{read:false,force:true}).pipe(clean());
});

gulp.task('bsp',function(){
	return gulp.src('./pointsMall/rjs/**/*.js')
	    .pipe(browserify({
	        insertGlobals : true
	      }))
	    .pipe(uglify())
	    //.pipe(rev())
	    .pipe(gulp.dest('./dist/js'));
	    //.pipe(rev.manifest({
	    //	merge: true
	    //}))
	    //.pipe(gulp.dest('./dist/rev/js'));
});

/** 
 * 积分商城-exchangeShop
 * 压缩js
 */
gulp.task('pm-script-ep',function(){
    return gulp.src(['./pointsMall/js/module/*.js','./pointsMall/js/module/exchangeShop/**/*.js'])
    	.pipe(flatten())
	    .pipe(uglify())
	    .pipe(rev())
	    .pipe(gulp.dest('./pointsMall/dist/exchangeShop/js'))
	    .pipe(rev.manifest({
	    	merge: true
	    }))
	    .pipe(gulp.dest('./pointsMall/rev/exchangeShop'));
});
/** 
 * 积分商城-underwriting
 * 压缩js
 */
gulp.task('pm-script-ug',function(){
    return gulp.src(['./pointsMall/js/module/*.js','./pointsMall/js/module/underwriting/**/*.js'])
    	.pipe(flatten())
	    .pipe(uglify())
	    .pipe(rev())
	    .pipe(gulp.dest('./pointsMall/dist/underwriting/js'))
	    .pipe(rev.manifest({
	    	merge: true
	    }))
	    .pipe(gulp.dest('./pointsMall/rev/underwriting'));
});
//gulp.task('rev' ,['style','script','bsp'],function () {
//	return gulp.src(['./dist/rev/**/*.json', './WEB-INF/view/ebt/wechat/**/*.jsp'])
//        .pipe( revCollector({
//            replaceReved: true
//        }) )
//        .pipe( gulp.dest('./WEB-INF/view/ebt/wechat/') );
//});
/** 
 *  压缩css文件
 */
gulp.task('style',function() {
    return gulp.src('./pointsMall/**/*.css')
				    .pipe(minifycss())
				    .pipe(gulp.dest('./dist'));
});
/** 
 * 压缩pm-css文件
 */
gulp.task('pm-style',function() {
    return gulp.src('./pointsMall/css/**/*.css')
			    .pipe(minifycss())
			    .pipe(gulp.dest('./pointsMall/dist/css'));
});
/**
 *  pm监听器
 */
gulp.task("pm-watch",function(cb){
    gulp.watch('./pointsMall/js/module/**/*.js', ['pm-script-ug','pm-script-ep']);
    gulp.watch('./pointsMall/css/**/*.css', ['pm-style']);
})
/**
 *  监听器
 */
gulp.task("watch",function(cb){
    gulp.watch('./source/**/*.css', ['rev']);
})

/**
 * 版本控制
 */
gulp.task('default', ['clean'],function() {
	//gulp.start("rev","watch");
		
})

/**
 * 积分商城
 */
gulp.task('pm',['pm-clean'],function() {
	gulp.start('pm-script-ug','pm-script-ep',"pm-style","pm-watch");
})
