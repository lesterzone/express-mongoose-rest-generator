/**
 * Generate model object
 */
'use strict';
const template = require('../templates/index');

module.exports = (resource, model) => template(resource, model);
