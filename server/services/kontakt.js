// frugt-servicen har brug for database adgang
const mysql = require('../config/sql');
mysql.connect((err) => {
   if (err) {
      console.log(Date(), err.stack);
      return;
   }
});
module.exports = {
    'deleteById': (id, next) => {
        let query = `DELETE FROM kontakt WHERE id = ?`;
        const db = mysql.connect();
  db.query(query, [id], (err, results) => {
           if (err) {
              next(err);
           } else {
              next(null, results);
           }
        });
        db.end();
     }
  }