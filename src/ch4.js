// drawing an xy plot
function rand(maxVal) {
  return parseInt(Math.random() * maxVal);
}
let myData = [];
for (let i = 0; i < 20;i ++) {
  myData.push([rand(50),rand(250)]);
}
const maxWidth = 250;
const maxHeight = 250;

const lowestX = d3.min(myData, d => d[0]);
const highestX = d3.max(myData, d => d[0])
const scaleX = d3.scaleLinear().domain([lowestX, highestX]).range([0, maxWidth]);

const lowestY = d3.min(myData, d => d[1])
const highestY = d3.max(myData, d => d[1])
const scaleY = d3.scaleLinear().domain([lowestY, highestY]).range([0, maxHeight]);

// ~p.145