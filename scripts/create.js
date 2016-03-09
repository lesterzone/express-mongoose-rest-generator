/**
 * Generate model object
 */
'use strict';
const template = require('../templates/create');

module.exports = (resource, model) => template(resource, model);
