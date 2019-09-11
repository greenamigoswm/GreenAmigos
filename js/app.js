var canvas, ctx1,ctx2,ctx3,ctx4, W, H,myHistogram,myDoughnutChart,myPieChart,myLineChart,xVal,sub;
var labels=new Array();
var values=new Array();
var colors=new Array();
var count=0;
var grd;

function init() {

  firstTime();
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/*For the first time when the graph is created*/
function firstTime(){


        //Raw
        $('#raw').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 60,
                    beta: 0,
                }
            },
            title: {
              text: 'Different Raw Materials used by Paper and Pulp Industries'
            },
            plotOptions: {
                pie: {
                    depth: 30,
                    cursor: 'pointer',

                    style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                },

            },
            credits: {
                  enabled: false
              },
            series: [{
              name:"Percentage",
                data: [
                {
                  name:"Paper Waste",
                  y:70
                }, 
                {
                  name:"Virgin Wood",
                  y:20
                }, 
                {
                  name:"Agro Waste",
                  y:10,
                  sliced: true
                }
                ]
            }]

        });


        //Paper
        $('#paper').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 60,
                    beta: 0,
                }
            },
            title: {
              text: 'Grades of paper produced in India'
            },
            plotOptions: {
                pie: {
                    depth: 30,
                    cursor: 'pointer'
                }
            },
            credits: {
                  enabled: false
              },
            series: [{
              name:"Percentage",
                data: [
                {
                  name:"Packaging Grade Paper",
                  y:53
                }, 
                {
                  name:"Newspaper",
                  y:8
                }, 
                {
                  name:"Special Paper",
                  y:1,
                  sliced: true
                },
                {
                  name:"Writing and Printing",
                  y:38
                }
                ]
            }]

        });

        //Quantity
          $('#quantity').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 60,
                    beta: 0,
                }
            },
            title: {
              text: '2.75 MT of waste paper is recovered every year in India'
            },
            plotOptions: {
                pie: {
                    depth: 30,
                    cursor: 'pointer'
                }
            },
              credits: {
                  enabled: false
              },
            series: [{
                data: [
                {
                  name:"Newspaper and Magazine",
                  y:1.5
                }, 
                {
                  name:"Paper Trimmings",
                  y:0.25,
                  sliced: true
                }, 
                {
                  name:"Notebooks",
                  y:0.5
                },
                {
                  name:"Textbooks",
                  y:0.5
                }
                ]
            }]
        });


        //Country Histogram
                // Set up the chart
          var chart = new Highcharts.Chart({
              chart: {
                  renderTo: 'country',
                  type: 'column',
                  options3d: {
                      enabled: true,
                      alpha: 0,
                      beta: 0,
                      depth: 100,
                      viewDistance: 25
                  }
              },
              title: {
                  text: 'Percentage Recovery of paper waste by different countries'
              },
              xAxis: {
                  type: 'category'
              },
              plotOptions: {
                  column: {
                      depth: 25
                  },
                  series: {
                  borderWidth: 0,
                  dataLabels: {
                      enabled: true,
                      format: '{point.y:.1f}%'
                  }
                }
              },
                credits: {
                    enabled: false
                },
              series: [{
                name:"Percentage",
                colorByPoint: true,
                  data: [
                  {
                    name:"Germany",
                    y:73
                  },
                  {
                    name:"Sweden",
                    y:69
                  },
                  {
                    name:"Japan",
                    y:60
                  },
                  {
                    name:"USA",
                    y:49
                  },
                  {
                    name:"Italy",
                    y:45
                  },
                  {
                    name:"India",
                    sliced:true,
                    y:27
                  }
                  ]
              }]
          });

}
