/**
 * Generate model object
 */
'use strict';
const template = require('../templates/list');

module.exports = (resource, model) => template(resource, model);
