module.exports = {
	options: {
		beautify: true,
		mangle: false,
		preserveComments: true,
		compress: {
			// drop_console: false,
			sequences: false
		}
	},
	target: {
		files: {
			'client/assets/scripts/app.min.js': [
				'node_modules/jquery/dist/jquery.js',
				'node_modules/lodash/lodash.js',
				'node_modules/angular/angular.js',
				'node_modules/angular-animate/angular-animate.js',
				'node_modules/angular-aria/angular-aria.js',
				'node_modules/angular-resource/angular-resource.js',
				'node_modules/angular-loading-bar/build/loading-bar.js',
				'node_modules/angularjs-stripe-elements/index.js',
				'node_modules/angular-scroll/angular-scroll.js',
				'node_modules/angular-local-storage/dist/angular-local-storage.js',
				'node_modules/@uirouter/angularjs/release/angular-ui-router.js',
				'node_modules/ui-router-metatags/dist/ui-router-metatags.js',
				'node_modules/angularytics/dist/angularytics.js',
				'node_modules/angular-material/angular-material.js',

				'source/scripts/app/module.js',
				'source/scripts/app/route.js',
				'source/scripts/app/config.js',
				'source/scripts/app/factory.js',
				'source/scripts/app/run.js',
				'source/scripts/common/module.js',
				'source/scripts/common/component/card.js',
				'source/scripts/common/directive/escape.js',
				'source/scripts/common/filter/category.js',
				'source/scripts/common/filter/tag.js',
				'source/scripts/header/controller.js',
				'source/scripts/panel/controller.js',
				'source/scripts/footer/controller.js',
				'source/scripts/index/module.js',
				'source/scripts/index/controller.js',
				'source/scripts/index/route.js',
				'source/scripts/coaching/module.js',
				'source/scripts/coaching/route.js',
				'source/scripts/coaching/controller.js',
				'source/scripts/math/module.js',
				'source/scripts/math/route.js',
				'source/scripts/math/controller.js',
				'source/scripts/imagery/module.js',
				'source/scripts/imagery/route.js',
				'source/scripts/imagery/controller.js',
				'source/scripts/about/module.js',
				'source/scripts/about/controller.js',
				'source/scripts/about/route.js',
				'source/scripts/error/module.js',
				'source/scripts/error/route.js',
			]
		}
	}
};
