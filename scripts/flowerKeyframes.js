const fs = require('fs');

const flowerKeyFrames = () => {
  let output = '';
  for (let i = 0; i < 11; i ++) {

    for (let j = 0; j < 11; j++) {
      output += `@keyframes growFlower-${i}-${j} {
        from {
          height: ${i * 10}px;
          width: ${i * 10}px;
          transform:rotate(${5 * i}deg);
        }
        to {
          height: ${j * 10}px;
          width:  ${j * 10}px;
          transform:rotate(${5 * j}deg);
        }
      }
      \n`;
    }
  }
  return output;
}

module.exports = flowerKeyFrames;
