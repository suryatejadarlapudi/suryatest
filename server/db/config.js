var connectionString = 'postgres://DTRV15DEV:p5bc10dfde0655613b93e7092995e44c0c4c1b62fd2df35503daaf9e843710224@ec2-107-21-138-109.compute-1.amazonaws.com:5432/d2a3iij93vt4mr';
// 'postgres://kjlgojcshuptgh:2f258ac5ee94d88001b2ab56e10d76271e016d444e36d0cb842eadf159c40f7f@ec2-54-243-46-32.compute-1.amazonaws.com:5432/ddls4hi0ss52t8';
                    // "postgres://YourUserName:YourPassword@localhost:5432/YourDatabase";

var pg = require('pg');
const { Pool, Client } = require('pg');
const pool = new Pool({
  connectionString: connectionString,
});
require('pg').defaults.ssl = true;
console.log('connected to dtr test db..');
module.exports = pool;