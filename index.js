var express = require('express');
var app = express();
var jade = require('jade');
var products = require('./products.json').products;
var portofolio = require('./portofolio.json').portofolio;

app.use(express.static('source/public'));

app.set('views', 'source/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    res.render('index', {
        isHome: true,
        products: products
    });
});

app.get('/acasa', function (req, res) {
    res.render('index', {
        isHome: true,
        products: products
    });
});

app.get('/despre-noi', function (req, res) {
    res.render('about', {
        isAbout: true,
        products: products,        
        pageTitle: 'Despre Noi'
    });
});

app.get('/produse', function (req, res) {
    res.render('products', {
        isProducts: true,
        pageTitle: 'Produse',
        products: products
    });
});

app.get('/produse/:product', function (req, res) {
    var productName = req.params.product;
    var match = null;
    products.forEach((item) => {
        if (item.url.toLowerCase() === productName.toLowerCase()) {
            match = item;
        }
    });
    if (match == null) {
        res.render('products', {
            isProducts: true,
            pageTitle: 'Produse',
            products: products
        });
    } else {
        res.render('product-item', {
            isProducts: true,
            topFixed: true,
            pageTitle: match.name,
            products: products,            
            product: match
        });
    }
});

app.get('/portofoliu', function(req, res) {
    res.render('portofolio', {
        portofolio: portofolio,
        products: products,        
        isPortofolio: true,
        pageTitle: 'Portofoliu'
    });
});

app.get('/filiale', function(req, res) {
    res.render('locations', {
        products: products,        
        isLocations: true,
        pageTitle: 'Filiale'
    });
});

app.get('/contact', function(req, res) {
    res.render('contact', {
        products: products,
        isContact: true,
        pageTitle: 'Contact'
    });
});

app.get('/map-points', function(req, res) {
    res.sendFile(__dirname + '/locations.json');
});

app.listen(process.env.port || 3000, function () {
    console.log('Running on port 3000');
});