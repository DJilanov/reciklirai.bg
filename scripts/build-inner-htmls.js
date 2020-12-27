const fs = require('fs');
const path = require('path');
const axios = require('axios');
const endOfLine = require('os').EOL;

const categoriesDataPath = 'http://www.jilanov.com:3200/api/categories';
const productsDataPath = 'http://www.jilanov.com:3200/api/products';

let categories = [];
let products = [];

const htmlBuilder = (buildCategories) => {
    if(buildCategories) {
        categories.forEach((category) => {
            try {
                fs.readdirSync(path.join(`./dist/${category.route}`));
            } catch(e) {
                fs.mkdirSync(path.join(`./dist/${category.route}`), { recursive: true });
            }
            let filledTemplate = template.replace(
                '{{title}}',
                `<title>${category.title.bg}</title>`
            );
            filledTemplate = filledTemplate.replace(
                '{{description}}',
                `<meta name="description" content="${category.content.bg}">`
            );
            filledTemplate = filledTemplate.replace(
                '{{twitter_card}}',
                `
                <meta name="twitter:card" content="http://www.jilanov.com/assets/logo.jpg">
                <meta name="twitter:site" content="http://www.jilanov.com">
                <meta name="twitter:title" content="${category.title.bg}">
                <meta name="twitter:description" content="${category.content.bg}">
                <meta name="twitter:creator" content="Jilanov">
                <meta name="twitter:image:src" content="http://www.jilanov.com/assets/logo.jpg">
                `
            );
            filledTemplate = filledTemplate.replace(
                '{{open_graph}}',
                `
                <meta property="og:title" content="${category.title.bg}" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://www.jilanov.com/${category.route}" />
                <meta property="og:description" content="${category.content.bg}" />
                <meta property="og:image" content="http://www.jilanov.com/assets/logo.jpg" />
                <meta property="og:image:secure_url" content="http://www.jilanov.com/assets/logo.jpg" />
                <meta property="og:site_name" content="Jilanov" />
                `
            );
            filledTemplate = filledTemplate.replace(
                '{{product_data}}',
                ''
            );
            fs.writeFileSync(path.join(`./dist/${category.route}/index.html`), filledTemplate, 'utf8');
        })
    } else {
        // 'dist/category/laptops/product/hp_elitebook_2760p/index.html'
        products.forEach((product) => {
            let category = categories.filter((cat) => cat.products === product.category)[0];
            if(!category) {
                return;
            }
            try {
                fs.readdirSync(path.join(`./dist/${category.route}/product/${product.url}`));
            } catch(e) {
                fs.mkdirSync(path.join(`./dist/${category.route}/product/${product.url}`), { recursive: true });
            }
            let filledTemplate = template.replace(
                '{{title}}',
                `<title>${product.model.bg}</title>`
            );
            filledTemplate = filledTemplate.replace(
                '{{description}}',
                `<meta name="description" content="${(product.description.bg.includes('test') || !product.description.bg.length ) ? product.model.bg : product.description.bg}">`
            );
            filledTemplate = filledTemplate.replace(
                '{{twitter_card}}',
                `
                <meta name="twitter:card" content="http://www.jilanov.com:3200/static/${product.images[0]}">
                <meta name="twitter:site" content="http://www.jilanov.com">
                <meta name="twitter:title" content="${product.model.bg}">
                <meta name="twitter:description" content="${(product.description.bg.includes('test') || !product.description.bg.length ) ? product.model.bg : product.description.bg}">
                <meta name="twitter:creator" content="Jilanov">
                <meta name="twitter:image:src" content="http://www.jilanov.com:3200/static/${product.images[0]}">
                `
            );
            filledTemplate = filledTemplate.replace(
                '{{open_graph}}',
                `
                <meta property="og:title" content="${product.model.bg}" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="http://www.jilanov.com/${category.route}/product/${product.url}" />
                <meta property="og:description" content="${getProductDescription(product.category)} само за ${product.price} лева!" />
                <meta property="og:image" content="http://www.jilanov.com:3200/static/${product.images[0]}" />
                <meta property="og:site_name" content="Jilanov" />
                `
            );
            filledTemplate = filledTemplate.replace(
                '{{product_data}}',
                `
                <meta property="og:price:amount" content="${product.price}" />
                <meta property="og:price:currency" content="BGN" />
                `
            );
            fs.writeFileSync(path.join(`./dist/${category.route}/product/${product.url}/index.html`), filledTemplate, 'utf8');
        })
    }
}

const getProductDescription = (category) => {
    switch(category) {
        case 'computers':
            return 'test';
        case 'security-cameras':
            return 'test';
        case 'hardware-components':
            return 'test';
        case 'laptop-components':
            return 'test';
        case 'consumables':
            return 'test';
        case 'software-development':
            return 'test';
        case 'laptops':
            return 'Висок клас употребяван лаптоп готов за употреба';
        default: 
            return ''
    }
}

axios.get(categoriesDataPath).then(res => {
  categories = res.data;
  htmlBuilder(true);
}).catch(e => console.log(e));

axios.get(productsDataPath).then(res => {
  products = res.data;
  if(products.length && categories.length) {
    htmlBuilder(false);
  }
}).catch(e => console.log(e));

const template = `
<!DOCTYPE html>

<html lang="en">

    <head>
        <base href="/">
        <script type="text/javascript">
            (function(l) {
                if (l.search) {
                var q = {};
                l.search.slice(1).split('&').forEach(function(v) {
                    var a = v.split('=');
                    q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
                });
                if (q.p !== undefined) {
                    window.history.replaceState(null, null,
                    l.pathname.slice(0, -1) + (q.p || '') +
                    (q.q ? ('?' + q.q) : '') +
                    l.hash
                    );
                }
                }
            }(window.location))
            </script>
        <!-- Universal -->
        {{title}}
        {{description}}
        <meta http-equiv="Content-Type" content="text/html;" charset=UTF-8>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="./assets/Favicon.ico">

        <!-- Twitter Card data -->
        {{twitter_card}}

        <!-- Facebook -->
        <meta property="fb:app_id" content="Jilanovltd" />

        <!-- Open Graph data -->
        {{open_graph}}

        <!-- Product data -->
        {{product_data}}

		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ7JbwKivO6_50DDkipCoxkgtcURyelr8"></script>
    <link rel="stylesheet" href="styles.55f6178fbae589549b16.css"></head>

    <body>
        <app-root></app-root>
	<script src="runtime-es2015.9b7675e0c2dee207c0f8.js" type="module"></script><script src="runtime-es5.9b7675e0c2dee207c0f8.js" nomodule defer></script><script src="polyfills-es5.926604121381356d0c98.js" nomodule defer></script><script src="polyfills-es2015.a99454eeea8623bbda2c.js" type="module"></script><script src="scripts.79b2db637624e12dbebf.js" defer></script><script src="main-es2015.ec1d96a194ed69a6e983.js" type="module"></script><script src="main-es5.ec1d96a194ed69a6e983.js" nomodule defer></script></body>

</html>
`;

