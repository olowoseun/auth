const bcrypt = require('bcrypt');
const { MD5 } = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10, (err, salt) => {
//     if(err) return next(err);

//     bcrypt.hash('password123', salt, (err, hash) => {
//         if(err) return next(err);
//         console.log(hash);
//     }); 
// });

const id= '1000';
const secret = 'supersecret';

const rcdToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK1Y';

const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(rcdToken, secret);

console.log(decodeToken);