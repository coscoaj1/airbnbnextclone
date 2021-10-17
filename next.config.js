module.exports = {
	images: {
		domains: ['airbnbcloneapp.s3.amazonaws.com'],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	reactStrictMode: true,
};
