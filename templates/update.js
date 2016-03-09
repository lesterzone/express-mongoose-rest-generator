'use strict';

module.exports = (resource, model) => {
    let modelName = model.toLowerCase();

    return `/**
 * Helper middleware, used to update a ${model}.
 */
'use strict';

const ${model} = require('./${modelName}');

module.exports = (request, response) => {

    let query = {
        _id: request.params.id
    };

    return ${model}
        .findOne(query)
        .then(( /*doc*/ ) => ${model}.update(query, request.body))
        .then(( /*updated*/ ) => response.send())
        .catch(error => response.status(422).json(error));
};
`;
};
