// *******************************
// A. Establish built-in dependency
const util = require('util');


// *******************************
// B. Establish MySQL dependency
const mysql = require('mysql');


// *******************************
// C. Establish connection to MySQL server
const serverConnection = mysql.establishConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deerfield',
    database: 'associates'
});

serverConnection.establishConnection();


// *******************************
// D. Establish promises
serverConnection.query = util.promisify(serverConnection.query);


// E. Export connection
module.exports = serverConnection;
