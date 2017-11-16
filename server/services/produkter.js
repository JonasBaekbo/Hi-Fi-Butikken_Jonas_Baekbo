const db = require('../config/sql').connect();
db.connect((err) => {
   if (err) {
      console.log(Date(), err.stack);
      return;
   }
});


module.exports = {

   'getAll': (next) => {
      let query = `SELECT produkter.*, kategori.kategori, producent.producent FROM(( produkter INNER JOIN kategori ON fk_kategori_id = kategori.ID) INNER JOIN producent ON fk_producent = producent.ID)`;

      db.query(query, (err, results) => {
         if (err) {
            next(err);
         } else {
            next(null, results);
         }
      });
   },

   'getOne': (varenr, next) => {
    let query = `SELECT produkter.*, kategori.kategori, producent.producent FROM(( produkter INNER JOIN kategori ON fk_kategori_id = kategori.ID) INNER JOIN producent ON fk_producent = producent.ID) where produkter.id = ${varenr}`;
    
    db.query(query, (err, results) => {
        if (err) {
           next(err);
        } else {
           next(null, results);
        }
     });
  },

   'deleteById': (id, next) => {
      let query = `DELETE FROM produkter WHERE id = ?`;

      db.query(query, [id], (err, results) => {
         if (err) {
            next(err);
         } else {
            next(null, results);
         }
      });
   },
   'kontakt': (fornavn, efternavn, email, besked, next) => {
    let query = `INSERT INTO kontakt SET Fornavn = '${fornavn}', Efternavn = '${efternavn}', Email = '${email}', Besked = '${besked}'`;
    db.query(query, (err, results) => {
        if (err) {
           next(err);
        } else {
           next(null, results);
        }
     });
   },
   'random': (next) => {
    let query = `SELECT * FROM produkter order BY rand() limit 2`;
    
          db.query(query, (err, results) => {
             if (err) {
                next(err);
             } else {
                next(null, results);
             }
          });
       },
       'kategori': (next) => {
        let query = `SELECT * FROM kategori`;
        
              db.query(query, (err, results) => {
                 if (err) {
                    next(err);
                 } else {
                    next(null, results);
                 }
              });
           }
    }