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
    console.log(`FUCK: ${test.fullTitle()} -- error: ${err.message}`);
  });

  runner.on('end', function() {
    console.log('end: %d/%d', passes, passes + failures);
  });
}
