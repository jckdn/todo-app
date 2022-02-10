import fs from 'fs';
import { join, dirname } from 'path';
import mockData from './mockData.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { courses, authors } = mockData;
const data = JSON.stringify({ courses, authors });
const filepath = join(__dirname, 'db.json');

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log('Mock DB created.');
});
