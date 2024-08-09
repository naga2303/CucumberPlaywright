const dotenv = require('dotenv');
//import * as dotenv from 'dotenv';

const getEnv = () => {
    if (process.env.ENV) {
        dotenv.config({
            override: true,
            path: `src/helper/env/.env.${process.env.ENV}`

            
        });
    } else {
        console.error("NO ENV PASSED!")   
console.log('Current environment:', process.env.ENV);
     
    }
};

module.exports = {
    getEnv
};