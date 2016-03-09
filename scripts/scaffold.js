/**
 * Generate resource object
 */
'use strict';

const mkdirp = require('mkdirp');

const write = require('./write');

const generateModel = require('./model');
const index = require('./index');
const create = require('./create');
const update = require('./update');
const list = require('./list');
const show = require('./show');
const remove = require('./remove');

module.exports = (resource, model) => {
    mkdirp(resource, (error) => {
        if (error) {
            console.log(error);
            return process.exit(1);
        }

        let fileName = model.toLowerCase();
        write(`./${resource}/${fileName}.js`, generateModel(model));
        write(`./${resource}/index.js`, index(resource, model));

        write(`./${resource}/create.js`, create(resource, model));
        write(`./${resource}/update.js`, update(resource, model));
        write(`./${resource}/list.js`, list(resource, model));
        write(`./${resource}/show.js`, show(resource, model));
        write(`./${resource}/remove.js`, remove(resource, model));
    });
};