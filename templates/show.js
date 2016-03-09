'use strict';

module.exports = (resource, model) => {

    let modelName = model.toLowerCase();
    return `/**
 * Middleware to get single ${model}
 */
'use strict';

const ${model} = require('./${modelName}');

module.exports = (request, response) => {
    if (!request.params.id) {
        return response.status(422).json({
            error: 'required params missing'
        });
    }

    let query = {
        _id: request.params.id
    };

    return ${model}
        .findOne(query)
        .then(data => response.json(data))
        .catch(error => response.status(422).json(error));
};
`;
};
