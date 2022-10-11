'use strict';

const fs = require('fs');
const path = require('path');
const { profileRule: { cpuprofile, heapprofile, gcprofile }, checkProfile } = require('./command.test');

exports = module.exports = function () {
  const list = [
    {
      title: '<fatalerror / oom> cpu profiling',
      jspath: path.join(__dirname, 'fatal-error.js'),
      tid: 0,
      cmd: 'start_cpu_profiling',
      check(file) {
        const content = fs.readFileSync(file, 'utf8').trim();
        checkProfile(cpuprofile, JSON.parse(content));
      }
    },
    {
      title: '<fatalerror / oom> heap profiling',
      jspath: path.join(__dirname, 'fatal-error.js'),
      tid: 0,
      cmd: 'start_heap_profiling',
      check(file) {
        const content = fs.readFileSync(file, 'utf8').trim();
        checkProfile(heapprofile, JSON.parse(content));
      }
    },
    {
      title: '<fatalerror / oom> gc profiling',
      jspath: path.join(__dirname, 'fatal-error.js'),
      tid: 0,
      cmd: 'start_gc_profiling',
      check(file) {
        const content = fs.readFileSync(file, 'utf8').trim();
        checkProfile(gcprofile, JSON.parse(content));
      }
    }
  ];

  return list;
};