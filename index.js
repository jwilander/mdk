#!/usr/bin/env node --harmony

var program = require('commander');

program
    .version('0.0.6')
    .command('init', 'Initialize an integration or plugin template')
    .parse(process.argv);
