#!/usr/bin/env node

/**
 * Generate folder with express based routes to be used on RESTful api
 */
'use strict';

const resource = process.argv[2];
const model = process.argv[3];
const scaffold = require('./scripts/scaffold');

if (!resource) {
    console.log('no resource param provided');
    return process.exit(1);
}

if (!model) {
    console.log('no model param provided');
    return process.exit(1);
}

scaffold(resource, model);