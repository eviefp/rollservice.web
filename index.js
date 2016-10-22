var express = require('express');
var app = express();
var jade = require('jade');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var products = require('./products.json').products;
var partners = require('./partners.json').partners;
var portofolio = require('./portofolio.json').portofolio;
var locations = require('./locations.json').locations;

app.use(express.static('source/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', 'source/views');
app.set('view engine', 'jade');

//-------- mail
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(process.env.emailTransportString);

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"RollService Contact" <rollservicesrl@gmail.com>', // sender address
    to: '"RollService Contact" <rollservicesrl@gmail.com>', // list of receivers
    subject: 'Contact website', // Subject line
    html: '' // html body
};

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

app.get('/produse-ro', function (req, res) {
    res.render('our-products', {
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

app.get('/portofoliu', function (req, res) {
    res.render('portofolio', {
        portofolio: portofolio,
        products: products,
        isPortofolio: true,
        pageTitle: 'Portofoliu'
    });
});

app.get('/parteneri', function (req, res) {
    res.render('partners', {
        isPartners: true,
        pageTitle: 'Parteneri',
        partners: partners
    });
});

app.get('/filiale', function (req, res) {
    res.render('locations', {
        products: products,
        isLocations: true,
        pageTitle: 'Filiale',
        gmapsKey: process.env.gmapsKey
    });
});

app.get('/contact/:sent?', function (req, res) {
    res.render('contact', {
        products: products,
        isContact: true,
        pageTitle: 'Contact',
        sent: req.params.sent === 'true'
    });
});

app.post('/contact', function (req, res) {
    // send mail with defined transport object
    mailOptions.html = 
        "<p>Nume: " + req.body.firstname + " " + req.body.surname + "</p>" +
        "<p>Companie: " + req.body.company + "</p>" +
        "<p>Oras: " + req.body.city + ", " + req.body.district + ", " + req.body.address + "</p>" +
        "<p>Email: " + req.body.email + "</p>" +
        "<p>Telefon: " + req.body.telephone + "</p>" +
        "<h2>Mesaj</h2>" +
        "<p>" + req.body.request + "</p>";
        
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    res.redirect('/contact/true')
});

app.get('/map-points', function (req, res) {
    res.sendFile(__dirname + '/locations.json');
});

app.listen(process.env.port || 3000, function () {
    console.log('Running on port 3000');
});