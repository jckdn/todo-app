import jsf from 'json-schema-faker';
import { schema } from './schema.js';
import fs from 'fs';
import chalk from 'chalk';
import path from 'path';
import dirname from '../utils/dirname.js';
/**
 * NOTE: ATTOW version 6* of faker.js (the newly forked, non-vandalised faker) seems to
 * produce unexpected output with json-schema-faker, 5.5.3 works fine.
 */
import faker from '@faker-js/faker';

jsf.extend('faker', () => faker);
const sample = await jsf.resolve(schema);

console.log(sample);

fs.writeFile(
  path.join(dirname(import.meta.url), 'db.json'),
  JSON.stringify(sample, null, 2),
  (error) => {
    if (error) {
      console.log('Mock data failed to generate - ' + chalk.red(error));
    } else {
      console.log(chalk.green('Mock data generated'));
    }
  },
);
