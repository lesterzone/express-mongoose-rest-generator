/**
 * Generate model object
 */
'use strict';
const template = require('../templates/remove');

module.exports = (resource, model) => template(resource, model);
