const service = require('../services/kontakt');
const db = require('../config/sql').connect();
module.exports = (app) => {
    app.get('/kontakt', (req, res) => {
        db.query('SELECT * FROM kontakt', function (err, data) {
            res.send(data);
        })
    });
    app.get('/kontakt/:id', (req, res) => {
        if (req.params.id != undefined) {
            service.deleteById(req.params.id, (err, result) => {
                if (err) {
                    console.log(Date(), err);
                    res.status(500);
                } else {
                    res.writeHead(302, { 'Location': 'http://128.199.57.136:3000/admin/kontakt.html' });
                    res.end();
                }
            });
        } else {
            res.writeHead(302, { 'Location': 'http://128.199.57.136:3000/admin/kontakt.html' });
            res.end();
        }
    });
}