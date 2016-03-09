'use strict';

module.exports = model => {
    return `/**
 * ${model}
 * Manage attributes, CRUD actions and queries
 */
'use strict';

const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

let schema = new mongoose.Schema({

}, {
    versionKey: false
});

schema.plugin(timestamps);
module.exports = mongoose.model('${model}', schema);
`;
};
