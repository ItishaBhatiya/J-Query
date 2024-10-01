// bar chart
  
var options = {
    series: [{
    name: 'Income',
    type: 'column',
    data: [79, 60, 80, 79, 95]
  }, {
    name: 'Revenue',
    type: 'column',
    data: [40, 65, 100, 50, 108]
  }, {
  }],
    chart: {
    type: 'line',
  },
  grid:{
    show:false,
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: [1, 1]
  },
  colors: ['#009c8a', '#0cca8e'],
  xaxis: {
    categories: [2011, 2012, 2013, 2014, 2015],
  },
  yaxis: [

  ],
  tooltip: {
   
  },
  legend: {
    position: 'bottom'
  },
  };

  var chart = new ApexCharts(document.querySelector(".chart3"), options);
  chart.render();


