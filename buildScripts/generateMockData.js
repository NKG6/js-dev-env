/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */
/* eslint-disable no-console */

import chalk from 'chalk';
//var jsf = require('json-schema-faker');
import jsf from 'json-schema-faker';
//var mockDataSchema = require('./mockDataSchema');
import {schema} from './mockDataSchema';
//var fs = require('fs');
import fs from 'fs';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
