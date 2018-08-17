// chapter 2 p 103

d3.json('test.json').then(visualize)

function visualize(myData) {
  d3.select('body').selectAll('p')
    .data(myData)
    .enter()
    .append('p')
    .text((d,i) => `${i} value: ${d}`)
    .style('font-size', d => `${d}px`)
    .style('color', colorize)
}

function colorize(d) {
  if (d > 15) return 'red';
  return 'black';
}