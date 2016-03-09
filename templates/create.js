'use strict';

module.exports = (resource, model) => {
    let modelName = model.toLowerCase();

    return `/**
 * Middleware to create ${resource} based on request body object provided
 */
'use strict';

const ${model} = require('/${modelName}');

module.exports = (request, response) => {
    return new ${model}(request.body)
        .save()
        .then(data => response.json(data))
        .catch(error => response.status(422).json(error));
};
`;
};
