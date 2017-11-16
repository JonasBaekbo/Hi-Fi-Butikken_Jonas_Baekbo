const mysql = require('../config/sql');
module.exports = (app) => {
    app.get('/kategori', (req, res) => {
        var sql = `
        SELECT * FROM kategori`;
        const db = mysql.connect();
        db.query(sql, function (err, data) {
            if(err){
                console.log(err);
            }
            res.send(data);

        });
        db.end();
    });
}