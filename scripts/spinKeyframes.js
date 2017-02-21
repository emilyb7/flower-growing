const fs = require('fs');

const spinKeyFrames = () => {
  var output = '';
  for (var i = 0; i < 11; i ++) {

    for (var j = 0; j < 11; j++) {
      output += `
      @keyframes spinFlower-${i}-${j} {
        from {
          transform:rotate(${5 * i}deg);
        }
        to {
          transform:rotate(${5 * j}deg);
        }
      }
      \n`;
    }
  }
  return output;
}

module.exports = spinKeyFrames;
