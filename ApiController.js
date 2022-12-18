
const Product = require('../model/product');

exports.getdata = (req, res) => {
    Product.find((err, data) => {
        if (!err) {
            res.status(200).json({
                success: true,
                msg: "fetch all data",
                data: data,
            })
        } else {
            res.status(400).send({ success: false, msg: "error occers" })
        }
    })
}

exports.storedata = (req, res) => {
    const productData = new Product({
        product_name: req.body.product_name,
        price: req.body.price,
        size: req.body.size,
        details: req.body.details
    });
    productData
        .save(productData)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred ."
            });
        });
};