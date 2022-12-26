const jwt = require('jsonwebtoken')
const secret = 'secret';

function generateJWTtoken(username) {
    return jwt.sign({ data : username} , secret, { expiresIn: 60 * 60 }
    ) 
}

function authenticateToken(request, response, next) {
    const authHeader = request.headers["authorization"];
    console.log(authHeader);

    const token = authHeader.split(' ')[1];
    if (token === null) return response.send("no token found");

    jwt.verify(token, secret, (err, user) => {
        if (err) {
            response.send({ Error: err });
        }

        return request.body.user = user;
        // console.log(user);
    });
    next();
}

// console.log(generateJWTtoken("naresh"));

module.exports = {generateJWTtoken, authenticateToken}