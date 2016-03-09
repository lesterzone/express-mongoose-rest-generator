/**
 * Generate model object
 */
'use strict';
const template = require('../templates/show');

module.exports = (resource, model) => template(resource, model);
