const express = require('express')

const Product = require('../model/product')




exports.index = (req, res) => {
    Product.find((err, data) => {
        if (!err) {
            res.render('index', {
                title: "home page",
                displaydata: data,
            })
        } else {
            console.log("data not found");
        }
    })

}
exports.create = (req, res) => {
    res.render('add_product', {
        title: "add page"
    })
}

exports.store = (req, res) => {
    //console.log(req.body);
    const product = new Product({
        product_name: req.body.pname,
        price: req.body.price,
        size: req.body.size,
        details: req.body.details

    });
    product.save().then((result) => {
        console.log(result, "product added successfully");
        res.redirect('/');
    }).catch((err) => {
        console.log(err, 'product not save');
        res.redirect('/create');
    })

}


exports.Editproduct=(req,res)=>{
const pid=req.params.p_id;
Product.findById(pid).then(product=>{
    console.log(product);
    res.render('edit',{
        title:"edit page",
        singleData:product
    })
}).catch(err=>{
    console.log(err);
})
    
}

exports.update=(req,res)=>{
    const product_id=req.body.p_id;
    const product_name=req.body.pname;
    const price=req.body.price;
    const size=req.body.size;
    const details=req.body.details;

    Product.findById(product_id).then(result=>{
        result.product_name=product_name
        result.price=price
        result.size=size
        result.details=details
        return result.save().then(results=>{
            res.redirect('/');
        }).catch(err=>{
            console.log(err);
        })
    }).catch(err=>{
        console.log(err);
    })
}

exports.delete=(req,res)=>{
    const pid=req.params.p_id;
    Product.deleteOne({_id:pid}).then(deleteProduct=>{
        console.log(deleteProduct,"delete successfully");
        res.redirect('/');
    }).catch(err=>{
        console.log(err);
    })
}