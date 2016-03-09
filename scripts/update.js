/**
 * Generate model object
 */
'use strict';
const template = require('../templates/update');

module.exports = (resource, model) => template(resource, model);
