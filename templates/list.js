'use strict';

module.exports = (resource, model) => {
    let modelName = model.toLowerCase();

    return `/**
 * Find list of ${resource} based on model param
 */
'use strict';

const ${model} = require('/${modelName}');

module.exports = (request, response) => {
    return ${model}
        .find({})
        .then(data => response.json(data))
        .catch(error => response.status(422).json(error));
};`;
};
