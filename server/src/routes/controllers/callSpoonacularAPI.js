const axios = require("axios");

// Único AXIOS
const callSpoonacularAPI = async (url) => {
	const { data } = await axios.get(url, {
		headers: { "x-api-key": process.env.API_KEY },
	});

	return data;
};
module.exports = callSpoonacularAPI;
