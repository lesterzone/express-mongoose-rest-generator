# emrg
**E**xpress **M**ongoose **R**est **G**enerator, not a fancy name I know, but, it's a name.
This is a package to generate API's endpoints based on folder structure defined.

## Why?

Because I need it. I need to run a command and get base template. I'm following a specific convention so, it may not work for you.
Sorry if you expect a fancy generator.

## Folder structure

I'm using first level folder structure. That means no MVC. Instead I place model, middlewares to manage resource in a single folder.

## Ussage

`emrg <resource> <Model>`

```
emrg tasks Task
```

```
./tasks/task.js created
./tasks/create.js created
./tasks/index.js created
./tasks/update.js created
./tasks/list.js created
./tasks/show.js created
./tasks/remove.js created
```

## How I use generated content?

```javascript
// app.js
let app = express();

/**
 * Require modules|routes|express applications and use their endpoints
 */
require('./modules')(app);

```

```javascript
// modules.js
/**
 * Require modules and attach them to the application.
 * Basically set new routes for express or you can also mount new express apps
 */
'use strict';

const tasks = require('./tasks');
const users = require('./users');

module.exports = app => {
    app
        .use(users)
        .use(tasks);
};

```