const service = require('../services/produkter');
const db = require('../config/sql').connect();


module.exports = (app) => {
    app.get('/produkt', (req, res) => {
        service.getAll((err, result) => {
           if (err) {
              console.log(Date(), err);
              res.status(500);
           } else {
            var sql = `
            SELECT produkter.*, kategori.kategori, producent.producent FROM(( produkter INNER JOIN kategori ON fk_kategori_id = kategori.ID) INNER JOIN producent ON fk_producent = producent.ID)`;
            db.query(sql, function (err, data) {
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
           }
        })
     });
     app.get('/produkt/:id', (req, res) => {
        db.query('SELECT produkter.*, kategori.kategori, producent.producent FROM(( produkter INNER JOIN kategori ON fk_kategori_id = kategori.ID) INNER JOIN producent ON fk_producent = producent.ID) where produkter.id = ?', [req.params.id], function (err, data) {
            res.send(data);
        })
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
                res.writeHead(302, {'Location': 'http://Localhost:3000/index.html'});
                res.end();
              }
           });
        } else {
           res.json(400);
        }
     });
     app.get('/produkt/soeg/:key', function (req, res) {
        db.query(`SELECT * from produkter where navn like '%${req.params.key}%'`, function (err, rows, fields) {
            // if (err) throw err;
            // var data = [];
            // for (i = 0; i < rows.length; i++) {
            //     data.push(rows[i].produkt);
            // }
            res.end(JSON.stringify(rows));
        });
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
                db.query('SELECT produkter.*, kategori.kategori, producent.producent FROM(( produkter INNER JOIN kategori ON fk_kategori_id = kategori.ID) INNER JOIN producent ON fk_producent = producent.ID) where fk_kategori_id = ?', [req.params.key], function (err, data) {
                    res.end(JSON.stringify(data));
                })
            });   
    app.del('/produkt/:id', (req, res) => {
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
};