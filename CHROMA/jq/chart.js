// simple line chart

var options = {
  series: [{
    name: 'series1',
    data: [45, 71, 35, 52, 70, 58]
  }, {
    name: 'series2',
    data: [0, 75, 18, 75, 108, 65]
  }],
  chart: {
    type: 'line'
  },
  grid:{
    show:false,
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: [2, 2]
  },
  colors: ['#009c8a', '#0cca8e'],
  xaxis: {
    type: 'year',
    categories: ["2006", "2007", "2008", "2009", "2010", "2011"]
  },
};

var chart = new ApexCharts(document.querySelector(".chart1"), options);
chart.render();


// pie chart

var options = {
  series: [100, 70, 100, 80],
  chart: {
    type: 'donut',
    width: 380,
  },
  colors: ['#0cca8e', '#009c8a', '#FEBA47', '#F1635F'],
  stroke: {
    width: 2,
    colors:["var(--dark-bg-1)"],
  },
  labels: ['Import 100', 'Export 70', 'Return 100', 'Revenue 80'],
  background: {
    enabled: true,
    foreColor: '#fff',
    borderWidth: 0
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    position: 'bottom'
  },

  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
    }
  }]
};

var chart = new ApexCharts(document.querySelector(".chart"), options);
chart.render();


