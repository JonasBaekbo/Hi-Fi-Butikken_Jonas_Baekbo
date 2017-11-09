// frugt-servicen har brug for database adgang
const db = require('../config/sql').connect();
db.connect((err) => {
   if (err) {
      console.log(Date(), err.stack);
      return;
   }
});
module.exports = {
    'deleteById': (id, next) => {
        let query = `DELETE FROM kontakt WHERE id = ?`;
  db.query(query, [id], (err, results) => {
           if (err) {
              next(err);
           } else {
              next(null, results);
           }
        });
     }
  }