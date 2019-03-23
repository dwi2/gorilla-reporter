'use strict';
const mocha = require('mocha');

const BANANA =`
        .-.
       /  |
      |  /
   .'\\|.-; _
  /.-.;\\  |\\|
  '   |'._/ \`
      |  \\
       \\  |
jgs      '-'
`;

function write(text) {
  process.stdout.write(text);
}

function gorillaSays(text) {
  const words = text ? text : '';
  write(`
           ."\`".
       .-./ _=_ \\.-.  ${words}
      {  (,(oYo),) }}   )
      {{ |   "   |} }  /
      { { \\(---)/  }}
      {{  }'-=-'{ } }
      { { }._:_.{  }}
      {{  } -:- { } }
jgs   {_{ }\`===\`{  _}
     ((((\\)     (/))))
  `)
}

function GorillaReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  var passes = 0;
  var failures = 0;

  runner.on('start', () => {
    gorillaSays(`哥! 不要緊張~~`);
    write('\n');
  });

  runner.on('pass', (test) => {
    passes++;
    write(`A_A\t${test.fullTitle()}\n`);
  });

  runner.on('fail', (test, err) => {
    failures++;
    write('\n');
    write(`幹: ${test.fullTitle()} -- 這個錯了啦: ${err.message}\n`);
  });

  runner.on('pending', (test) => {
    write('\n');
    write(`額 哥這個 ${test.fullTitle()} 不用測`);
  });
  
  runner.on('end', () => {
    write('\n');
    if (failures > 0) {
      write(`${passes + failures}個裡面錯了${failures}個, 我要被你笑死!
      `);
    } else {
      write(BANANA);
      write(`${passes}/${passes + failures} 全部都對了! 很不錯耶~~`);
    }
    write('\n');
  });
}

module.exports = GorillaReporter;
