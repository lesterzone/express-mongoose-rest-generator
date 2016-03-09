/**
 * Generate model object
 */
'use strict';
const fs = require('fs');

module.exports = (filePath, text) => {
    fs.writeFile(filePath, text, (error) => {
        if (error) {
            console.log(error);
            return process.exit(1);
        }

        console.log(`${filePath} created`);
    });
};
