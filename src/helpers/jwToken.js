import jwt from 'jsonwebtoken';

export const generateJsonWebToken = (uidPerson) => {
    return new Promise((resolve,reject) => { // đặt 1 lời hứa , hứa làm thì phải làm
        const payload = {uidPerson};
        jwt.sign(payload, process.env.APP_KEY_JWT, { // tạo token
            expiresIn: '12h' // trong khoảng thời gian 12 h
        }, (err, token) => {
            if(!err) resolve (token);
            else reject('Error Generate a Token')
        });
    });
}

//hiểu thêm link : https://www.npmjs.com/package/jsonwebtoken