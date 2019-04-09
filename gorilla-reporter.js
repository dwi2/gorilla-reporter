'use strict';
const mocha = require('mocha');

const chalk = require('chalk');
const green = chalk.greenBright;
const yellow = chalk.yellowBright;
const red = chalk.redBright;
const blue = chalk.blueBright;
const gray = chalk.gray;

const BANANA = yellow(`
        .-.
       /  |
      |  /
   .'\\|.-; _
  /.-.;\\  |\\|
  '   |'._/ \`
      |  \\
       \\  |
jgs      '-'
`);

function write(text) {
  process.stdout.write(text);
}

function gorillaSays(text) {
  const words = text ? text : '';
  write(chalk.hex('#512a07')(`
           ."\`".                     
       .-./ _=_ \\.-.  ${words} 
      {  (,(oYo),) }}   )            
      {{ |   "   |} }  /             
      { { \\(---)/  }}                
      {{  }'-=-'{ } }                
      { { }._:_.{  }}                
      {{  } -:- { } }                
jgs   {_{ }\`===\`{  _}                
     ((((\\)     (/))))               `))
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
    write(`${green('A_A')}\t${test.fullTitle()}\n`);
  });

  runner.on('fail', (test, err) => {
    failures++;
    write('\n');
    write(`${red('幹')} ${test.fullTitle()} ${gray(`這個錯了啦: ${err.message}`)}\n`);
  });

  runner.on('pending', (test) => {
    write('\n');
    write(`\n${blue('額')} ${gray('哥這個')} ${test.fullTitle()} ${gray('不用測')}\n`);
  });
  
  runner.on('end', () => {
    write('\n');
    if (failures > 0) {
      write(`${passes + failures}${gray('個裡面錯了')}${failures}${gray('個, 我要被你笑死!')}`);
    } else {
      write(BANANA);
      write(`${passes}/${passes + failures} ${gray('全部都對了! 很不錯耶~~')}`);
    }
    write('\n');
  });
}

module.exports = GorillaReporter;
