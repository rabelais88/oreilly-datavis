// scaling time & xy plotting

const parseTime = d3.timeParse("%m/%d/%y");
const rowConverter = (d) => { return {
  Date: parseTime(d.Date),
  Amount: parseInt(d.Amount)
}};

d3.csv('/csv/times.csv', rowConverter).then(scaleTime)

function scaleTime(timesData) {
  console.table(timesData)
  const svgWidth = 800;
  const svgHeight = 500;
  const padding = 100;

  const xScale = d3.scaleTime()
    .domain([
    d3.min(timesData, d => d.Date),
    d3.max(timesData, d => d.Date) ])
    .range([padding, svgWidth - padding]);
  
  const yScale = d3.scaleLinear()
    .domain([d3.min(timesData, d => d.Amount), d3.max(timesData, d => d.Amount)])
    .range([padding, svgHeight - padding]);

  const svg = d3.select('body').append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);
  
  // adding ticks
  const xTicks = d3.axisBottom()
    .scale(xScale)
    .ticks(5);
  
  const yTickFormat = d3.format('r');
  const yTicks = d3.axisRight()
    .scale(yScale)
    .ticks(5)
    .tickFormat(yTickFormat);
  
  const circles = svg.selectAll('g')
    .data(timesData)
    .enter()
    .append('g')
    .append('circle')
    .attr('r', '5px')
    .attr('fill', 'black')
    .attr('cx', d => xScale(d.Date))
    .attr('cy', d => yScale(d.Amount))
  

  const texts = svg.selectAll('text')
    .data(timesData)
    .enter()
    .append('text')
    .text(d => d3.timeFormat('%Y %m %d')(d.Date)) // or just const tf = d3.timeFormat('%y %m %d'); tf(d.Date);
    .attr('fill', 'black')
    .attr('x', d => xScale(d.Date))
    .attr('y', d => yScale(d.Amount))

  svg.append('g')
  .attr('class', 'axis')
  .call(yTicks);

  svg.append('g')
    .attr('class', 'axis')
    .call(xTicks);
}