const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': '128.199.57.136',
            'user': 'root',
            'password': '1234',
            'database': 'hifi_butik'
        });
    }
};