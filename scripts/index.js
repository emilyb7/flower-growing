const fs = require('fs');

const tasks = [
  require('./classes.js'),
  require('./flowerKeyFrames.js'),
];

const concatenate = (str, fn) => str + fn();

const iterate = (tasks, str = '') => {
  const nextTask = tasks[0];
  const output = concatenate(str, nextTask);
  if (!!tasks[1]) {
    return iterate(tasks.slice(1), output);
  } else {
    return output;
  }
}

const writeCSS = (tasks) => {
  const str = iterate(tasks);
  fs.writeFile('../grow-flower.css', str, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("done");
    }
  })
};

writeCSS(tasks);
