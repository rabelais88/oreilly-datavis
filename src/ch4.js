// drawing an xy plot
function rand(maxVal) {
  return parseInt(Math.random() * maxVal);
}
let myData = [];
for (let i = 0; i < 20;i ++) {
  myData.push([rand(50),rand(250)]);
}
const svgWidth = 800;
const svgHeight = 500;

const lowestX = d3.min(myData, d => d[0]);
const highestX = d3.max(myData, d => d[0])
const scaleX = d3.scaleLinear().domain([lowestX, highestX]).range([100, svgWidth - 100]);

const lowestY = d3.min(myData, d => d[1])
const highestY = d3.max(myData, d => d[1])
const scaleY = d3.scaleLinear().domain([lowestY, highestY]).range([100, svgHeight - 100]);

// ~p.145

const svg = d3.select('body')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .style('background-color', 'lightgray');

const dots = svg.selectAll('circle')
  .data(myData)
  .enter()
  .append('circle')
  .attr('r', d => Math.sqrt(svgHeight - d[1]))
  .attr('cx', d => scaleX(d[0]))
  .attr('cy', d => scaleY(d[1]))
  .attr('fill', 'black');
/**
 * D3’s call() function takes the incoming selection, as received from the prior link in the chain,
 * and hands that selection off to any function.
 * In this case, the selection is our new g group element.
 * Although the g isn’t strictly necessary,
 * we are using it because the axis function is about to generate lots of crazy lines and numbers,
 * and it’s nice to contain all those elements within a single group object.
 * call() hands off g to the xAxis function, so our axis is generated within g.
 */

// raw syntax for drawing axis with .call()
const xAxis = d3.axisBottom().scale(scaleX).ticks(5); // .tick() is still available! in a different usage tho

const yAxis = d3.axisRight().scale(scaleY).tickValues([0, 50, 100, 250]);

svg.append('g')
  .attr('class', 'axis')
  .call(xAxis);

svg.append('g')
  .attr('class', 'axis')
  .call(xAxis)
  .attr('transform')

svg.append('g')
  .attr('class', 'axis')
  .call(yAxis);