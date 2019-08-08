var ProductMdl = require('../models/Product');

module.exports = {
	index: (req, res) => {
		res.render('index', { title: 'Express' });
	}
};