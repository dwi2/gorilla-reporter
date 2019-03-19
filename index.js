'use strict';
var mocha = require('mocha');
module.exports = GorillaReporter;

const BANANA =`
        .-.
       /  |
      |  /
   .'\|.-; _
  /.-.;\  |\|
  '   |'._/ \`
      |  \
       \  |
jgs     '-'
`;

function GorillaReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  var passes = 0;
  var failures = 0;

  runnder.on('test', function() {
    console.log(`哥!不要緊張~~`);
  });

  runner.on('pass', function(test) {
    passes++;
    console.log(`${BANANA}: ${test.fullTitle()}`);
  });

  runner.on('fail', function(test, err) {
    failures++;
    console.log(`幹: ${test.fullTitle()} -- 這個錯了啦: ${err.message}`);
  });

  runner.on('end', function() {
    console.log(`晚上要吃什麼? ${passes}/${passes + failures}`);
  });
}
