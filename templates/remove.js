'use strict';

module.exports = (resource, model) => {
    let modelName = model.toLowerCase();

    return `/**
 * Helper middleware, used to delete a document.
 */
'use strict';

const ${model} = require('/${modelName}');

module.exports = (request, response) => {

    let query = {
        _id: request.params.id
    };

    return ${model}
        .findOne(query)
        .then(data => {
            if (!data) {
                return response.status(404).json({
                    error: 'not found'
                });
            }
            return ${model}.remove(query);
        })
        .then(( /*removed*/ ) => response.send())
        .catch(error => response.status(422).json(error));
};
`;
};
