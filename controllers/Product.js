var ProductMdl = require('../models/Product');
var multer = require('multer');
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + Math.floor(Math.random() * 10000000000) + path.extname(file.originalname))
  }
})

var upload = multer({storage: storage}).single('image');

module.exports = {
	index: (req, res) => {
		ProductMdl.find({}, function (error, products) {
			if (error) {
                res.json({error});
			} else {
				res.json(products)
			}
		}).sort({_id:-1})
	},
	view: (req, res) => {
		ProductMdl.findOne({ _id: req.params.id }, function(error, product) {
            if (error) {
                res.json({error});
            } else {
                res.json(product);
            }
        });
	},
	add: (req, res) => {
		upload(req, res, function (error) {
			req.body.image = req.file ? req.file.filename : null;
			var Product = new ProductMdl(req.body);
			Product.save(function(error, product) {
				if (error) {
					res.json({error});
				} else {
					res.json(product);
				}
			});
        });
	},
	edit: (req, res) => {
		upload(req, res, function (error) {
			req.body.image = req.file ? req.file.filename : (req.body.image ? req.body.image : null);
			ProductMdl.updateOne({ _id: req.params.id }, req.body, function(error, product) {
				 if (error) {
					res.json({error});
				 } else {
					 res.json(product);
				 }
			})
		})
	},
	delete: (req, res) => {
		ProductMdl.findOne({ _id: req.params.id }, function(error, product) {
            if (error) {
                res.json({error});
            } else {
                product.remove(function(error, product){
                    res.json(200, {status: 'Hotdog success deleted.'});
                })
            }
        });
	},
};