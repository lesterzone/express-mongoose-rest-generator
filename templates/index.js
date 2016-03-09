'use strict';

module.exports = resource => {
    return `/**
 * Manage ${resource}
 *  create
 *  update
 *  get single and list
 *  delete
 */
'use strict';

const router = require('express').Router();

const create = require('./create');
const list = require('./list');
const show = require('./show');
const update = require('./update');
const remove = require('./remove');

const PATH = '/${resource}';
const SINGLE = '/${resource}/:id';

router
    .get(PATH, list)
    .post(PATH, create)
    .get(SINGLE, show)
    .put(SINGLE, update)
    .delete(SINGLE, remove);

module.exports = router;`;
};
