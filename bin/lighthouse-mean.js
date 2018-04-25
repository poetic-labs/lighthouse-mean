#!/usr/bin/env node
const program = require('commander');
const lighthouseMean = require('../dist').default;

program
  .version('1.0.0')
  .option('-q, --quantity [quantity]', 'Number of audits to run', 1)
  .option('-u, --url [url]', 'The URL of the webpage to audit')
  .parse(process.argv);

const { url, quantity } = program;

lighthouseMean({
  url,
  quantity,
})
