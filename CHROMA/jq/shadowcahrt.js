// line shadow chart
var options = {
    series: [{
        name: 'Shoes',
        data: [45, 71, 35, 52, 70, 58]
    }, {
        name: 'Watches',
        data: [0, 75, 18, 75, 108, 65]
    }],
    chart: {
        type: 'area',
        height: 300,
    },
    grid:{
        show:false,
      },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'right',
    },
    stroke: {
        curve: 'smooth',
        innerHeight:100,
    },
    colors: ['#009c8a', '#0cca8e'],
    xaxis: {
        type: 'year',
        categories: ["2006", "2007", "2008", "2009", "2010", "2011"]
    },
};

var chart = new ApexCharts(document.querySelector(".chart2"), options);
chart.render();
