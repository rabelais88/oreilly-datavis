//d3.json('test.json').then(visualize);

const testData = new Array(8).fill(0).map((el, i) => parseInt(Math.random() * 100))
visualize(testData);

function visualize(myData){
  const w = 500;
  const h = 100;
  
  const svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg.selectAll('rect')
    .data(myData)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (w / myData.length))
    .attr('y', 0)
    .attr('width', 20)
    .attr('height', 100);
}