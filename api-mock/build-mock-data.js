import jsf from 'json-schema-faker';
import { schema } from './mock-data-schema.js';
import fs from 'fs';
import chalk from 'chalk';
/**
 * NOTE: Version 6* of faker.js (the 'new' faker) may produce unexpected output with
 * json-schema-faker, 5.5.3 works fine.
 */
import faker from '@faker-js/faker';

jsf.extend('faker', () => faker);
const sample = await jsf.resolve(schema);
console.log(sample);

fs.writeFile('./api-server/db.json', JSON.stringify(sample), (error) => {
  if (error) {
    console.log('Mock data failed to generate - ' + chalk.red(error));
  } else {
    console.log(chalk.green('Mock data generated'));
  }
});
