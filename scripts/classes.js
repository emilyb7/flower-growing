const fs = require('fs');

const classes = () => {
  let output = '';

  for (let i = 0; i < 11; i ++) {

    for (let j = 0; j < 11; j++) {
      let diff = j - i > -1 ? j - i : j - i * -1;
      let dur = diff >= 7 ? 0.6 : (diff >= 4 ? 0.4 : 0.2);
      let timing = 'ease'
      output += `.grow-${i}-${j} {
        animation-name: growFlower-${i}-${j};
        animation-duration: ${"0.1"}s;
        animation-timing-function: ${timing};
       }
      \n`;
    }
  }
  return output;
}

module.exports = classes;
