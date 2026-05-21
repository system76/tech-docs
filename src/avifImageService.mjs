import sharpService from 'astro/assets/services/sharp';

export default {
	...sharpService,
	validateOptions(options, config) {
		if (!options.format) {
			options.format = 'avif';
		}
		return sharpService.validateOptions(options, config);
	},
};
