const service = require('../services/produkter');
const mysql = require('../config/sql');
const fs = require('fs');
const path = require('path');
const security = require('../services/security');


module.exports = (app) => {
    app.get('/images/:name', (req, res, next) => {
        // det er kun jpg eller png filer jeg ønsker at tillade adgang til her
        if (path.extname(req.params.name) == '.jpg' || path.extname(req.params.name) == '.png' || path.extname(req.params.name) == '.gif') {
            // forsøg at læs billede filen fra images mappen...
            fs.readFile('./images/' + req.params.name, function (err, file) {
                if (err) {
                    // den ønskede fil blev ikke fundet, vi sender standard "no-image.png" i stedet
                    // dette kunne også have været en res.json(404) 
                    fs.readFile('./images/no-image.png', (err2, default_file) => {
                        res.writeHead(200);
                        res.write(default_file);
                        res.end();
                    });

                } else {
                    // her kunne der skaleres "on-the-fly" ... det tager vi en anden dag
                    res.writeHead(200);
                    res.write(file);
                    res.end();
                }
            });
        } else {
            // hvis den ønskede fil ikke er en .jpg eller .png, 
            // sendes no-image som standard eller res.json(404)
            res.json(404);
            // fs.readFile('./api/images/no-image.png', (err, default_file) => {
            //    res.writeHead(200);
            //    res.write(default_file);
            //    res.end();
            // });
        }
    });
    app.get('/produkt', (req, res) => {
        service.getAll((err, result) => {
            if (err) {
                console.log(Date(), err);
                res.status(500);
            } else {
                var sql = `
            SELECT produkter.*, kategori.kategori, producent.producent FROM(( produkter INNER JOIN kategori ON fk_kategori_id = kategori.ID) INNER JOIN producent ON fk_producent = producent.ID)`;
                const db = mysql.connect();
                db.query(sql, function (err, data) {
                    if (err) {
                        console.log(err);
                    }
                    var json = [];
                    var prod = [];
                    var type = "";
                    var firsttime = true;
                    var count = data.length;
                    data.forEach(function (element, index) {
                        var newType = (element.kategori != type); // sæt newType lig med true eller false 
                        if (newType) { // hvis det er en ny type
                            if (!firsttime) { // og det ikke er første gennemløb
                                var stringProd = JSON.stringify(prod); // lav json-array om til string
                                var stringType = `"type":"${type}"`;
                                var obj = `{${stringType},"prod": ${stringProd}}`;
                                json.push(JSON.parse(obj));
                            }
                            firsttime = false; // først gennemløb slut
                            type = element.kategori; // husk type
                            prod = []; // tøm listen med produkter
                        }
                        prod.push(JSON.parse(`{"id":"${element.ID}","navn":"${element.navn}", "pris":"${element.pris}", "producent":"${element.producent}", "billede":"${element.billede}"}`)); // indsæt produkt i produktlisten

                        // hvis det er sidste produkt, så sæt det på listen (bør laves som en function, da koden er en kopi af ovenstående)
                        if (count <= (index + 1)) {
                            var stringProd = JSON.stringify(prod);
                            var stringType = `"type":"${type}"`;
                            var obj = `{${stringType},"prod": ${stringProd}}`;
                            json.push(JSON.parse(obj));
                        }
                    }, this);

                    res.send(json);
                })
                db.end();
            }
        })
    });
    app.get('/produkt/:id', (req, res) => {
        const db = mysql.connect();
        db.query('SELECT produkter.*, kategori.kategori, producent.producent FROM(( produkter INNER JOIN kategori ON fk_kategori_id = kategori.ID) INNER JOIN producent ON fk_producent = producent.ID) where produkter.id = ?', [req.params.id], function (err, data) {
            res.send(data);
        })
        db.end();
    });

    app.get('/forside', (req, res) => {
        service.random((err, result) => {
            if (err) {
                console.log(Date(), err);
                res.status(500);
            } else {
                res.json(200, result);
            }
        })
    });
    app.post('/kontakt', (req, res) => {
        if (req.body.fname != undefined && req.body.lname != undefined && req.body.email != undefined && req.body.besked != undefined) {
            service.kontakt(req.body.fname, req.body.lname, req.body.email, req.body.besked, (err, result) => {
                if (err) {
                    console.log(Date(), err);
                    res.status(500);
                } else {
                    res.writeHead(302, { 'Location': 'http://Localhost:3000/index.html' });
                    res.end();
                }
            });
        } else {
            res.json(400);
        }
    });
    app.get('/produkt/soeg/:key', function (req, res) {
        const db = mysql.connect();
        db.query(`SELECT * from produkter where navn like '%${req.params.key}%'`, function (err, rows, fields) {
            // if (err) throw err;
            // var data = [];
            // for (i = 0; i < rows.length; i++) {
            //     data.push(rows[i].produkt);
            // }
            res.end(JSON.stringify(rows));
        });
        db.end();
    });
    app.get('/kategori', function (req, res) {
        service.kategori((err, result) => {
            if (err) {
                console.log(Date(), err);
                res.status(500);
            } else {
                res.json(200, result);
            }
        })
    });
    app.get('/kategori/:key', function (req, res) {
        const db = mysql.connect();
        db.query('SELECT produkter.*, kategori.kategori, producent.producent FROM(( produkter INNER JOIN kategori ON fk_kategori_id = kategori.ID) INNER JOIN producent ON fk_producent = producent.ID) where fk_kategori_id = ?', [req.params.key], function (err, data) {
            res.end(JSON.stringify(data));
        })
        db.end();
    });
    app.del('/produkt/:id', security.isAuthenticated, (req, res) => {
        if (req.params.id != undefined) {
            service.deleteById(req.params.id, (err, result) => {
                if (err) {
                    console.log(Date(), err);
                    res.status(500);
                } else {
                    res.json(200, result);
                }
            });
        } else {
            res.json(200, result);
        }
    });
    app.put('/produkt/:id', security.isAuthenticated, function (req, res, next) { // selve routet som har put metoden. Opdatering af produkter.
        console.log(req.body);
        let id = (isNaN(req.params.id) ? 0 : req.params.id);
        let navn = req.body.navn;
        let pris = req.body.pris;
        let beskrivelse = req.body.beskrivelse;
        let kategori_id = req.body.kategori_id;
        let producent_id = req.body.producent_id;

        let image = req.body.oldProductImage;
        console.log(navn, pris, beskrivelse, kategori_id, producent_id, image, req.params.id);
        if (navn != '' && beskrivelse != '' && !isNaN(pris) && id > 0) {

            // håndter billedet, hvis der er sendt et billede 
            if (req.files.productImage.name != '') {

                // gem det nye nan
                image = req.files.productImage.name;

                // flyt den uploadede midlertidige fil til billede mappen 
                var temp_image = fs.createReadStream('./' + req.files.productImage.path); // input stream
                var final_image = fs.createWriteStream('./images/' + image); // output stream
                temp_image.pipe(final_image);
                temp_image.on('end', function () {
                    // slet den midlertidige fil, når "final_image" er oprettet  
                    fs.unlink('./' + req.files.productImage.path);
                    // slet det gamle billede
                    // SUPER MEGET OBS PÅ AT DETTE ÅBNER OP FOR SLETNING AF ALLE FILER!!!!
                    // DERFOR ET HURTIGT TJEK PÅ FILENDELSEN HVOR KUN JPG OG PNG MÅ SLETTES 
                    if (req.body.oldProductImage != 'no-image.png') {
                        if (path.extname(req.body.oldProductImage) == '.jpg' || path.extname(req.body.oldProductImage) == '.png') {
                            let image_file = './images/' + req.body.oldProductImage;
                            if (fs.existsSync(image_file)) {
                                fs.unlinkSync(image_file);
                            }
                        }
                    }
                });
            } else {
                // denne er nødvendig, pga en tom fil bliver lagt i uploadmappen hver gang formularen sendes...  
                fs.unlink('./' + req.files.productImage.path);
            }

            let sql = `UPDATE produkter SET navn=?,pris=?,beskrivelse=?,fk_kategori_id=?,fk_producent=?, billede=? WHERE ID=?`;
            const db = mysql.connect();
            db.query(sql, [navn, pris, beskrivelse, kategori_id, producent_id, image, req.params.id], function (err, data) {

                if (err) {
                    console.log(err);
                } else {
                    res.send("Ok");
                }
            })
            db.end();
        }
    });
    app.post('/produkt', security.isAuthenticated, (req, res, next) => {

        let image = 'no-image.png';

        let sql = `INSERT INTO produkter SET navn=?,pris=?,beskrivelse=?,fk_kategori_id=?,fk_producent=?, billede=?`;

        let name = (req.body.navn == undefined ? '' : req.body.navn);
        let description = (req.body.beskrivelse == undefined ? '' : req.body.beskrivelse);
        let price = (req.body.pris == undefined ? 0 : req.body.pris);
        let kategori_id = req.body.kategori_id;
        let producent_id = req.body.producent_id;
        price = price.replace(',', '.');
        if (name != '' && description != '' && !isNaN(price)) {
            // håndter billedet, hvis der er sendt et billede 
            if (req.files.productImage.name != '') {
                image = req.files.productImage.name;

                // flyt den uploadede midlertidige fil til billede mappen
                var temp_image = fs.createReadStream('./' + req.files.productImage.path); // input stream
                var final_image = fs.createWriteStream('./images/' + image); // output stream
                temp_image.pipe(final_image); // flyt data fra temp til final
                temp_image.on('end', function () {
                    // slet den midlertidige fil, når "final_image" er oprettet  
                    fs.unlink('./' + req.files.productImage.path);
                });
            } else {
                // denne er nødvendig, pga en tom fil bliver lagt i uploadmappen hver gang formularen sendes.
                fs.unlink('./' + req.files.productImage.path);
            }

            const db = mysql.connect();
            console.log(name, price, description, kategori_id, producent_id, image);
            db.query(sql, [name, price, description, kategori_id, producent_id, image], function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(200, data);
                }
            })
            db.end();
        } else {
            res.json(400, {
                message: 'validering fejlede'
            });
        }
    });

};