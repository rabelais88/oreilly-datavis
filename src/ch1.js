// chapter 1 p.98 ~
// check console window
const rowConverter = function(d) {
  return {
    Food: d.Food,
    Deliciousness: parseFloat(d.Deliciousness)
  };
}

// d3 v4 way - CONVERTER DOESN'T WORK THIS WAY
d3.csv('food.csv', function(data) {
  console.table(data);
});

d3.csv('food.csv', rowConverter)
  .then(data => {
    console.table(data);
  })

d3.json('test.json')
  .then(data => {
    console.table(data)
  });

d3.select('body').append('p').text('please open console(devtool)');