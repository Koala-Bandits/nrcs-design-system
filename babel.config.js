module.exports = function (api) {
	api.cache(true);

	return {
		presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
		plugins: [
			["@babel/plugin-proposal-decorators", { legacy: true }],
			["@babel/plugin-proposal-class-properties", { loose: true }],
			["@babel/plugin-transform-for-of", { loose: true }]
		],
	};
};
