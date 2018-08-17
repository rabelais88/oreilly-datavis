//d3.json('test.json').then(visualize);

const testData = new Array(8).fill(0).map((el, i) => parseInt(Math.random() * 100))
visualize(testData);

function visualize(myData){
  const w = 500;
  const h = 300;
  const barMax = 200;
  const dataMax = Math.max(...myData);
  
  const svg = d3.select('body')
    .append('svg')
    .attr('width', w)
    .attr('height', h);

  svg.selectAll('rect')
    .data(myData)
    .enter()
    .append('rect')
    .attr('x', (d, i) => i * (w / myData.length))
    .attr('y', d => barMax - (barMax / dataMax) * d)
    .attr('width', 20)
    .attr('height', d => (barMax / dataMax) * d)
    .attr('fill', 'teal');
}