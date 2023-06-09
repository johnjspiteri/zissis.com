module.exports = {
	options: {
		map: true,
		processors: [
			require("pixrem")(),
			require("autoprefixer")({browsers: "last 2 versions"}),
			require("cssnano")()
		]
	},
	dist: {
		"src": "client/assets/css/styles.css"
	}
};