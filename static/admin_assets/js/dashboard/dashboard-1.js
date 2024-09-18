

(function ($) {
  /* "use strict" */

  var dlabChartlist = function () {

    var screenWidth = $(window).width();
    //let draw = Chart.controllers.line.__super__.draw; //draw shadow

    var NewCustomers = function () {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [100, 300, 100, 400, 200, 400],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'area',
          height: 50,
          width: 100,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        colors: ['var(--primary)'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 3,
          curve: 'smooth',
          colors: ['var(--primary)'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        x: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        y: {
          show: false,
        },
        fill: {
          type: 'gradient',
          gradient: {
            colorStops: [
              {
                offset: 0,
                color: 'var(--primary)',
                opacity: 1
              },
              {
                offset: 0.3,
                color: 'var(--primary)',
                opacity: .4
              },
              {
                offset: 100,
                color: 'var(--primary)',
                opacity: 0
              }
            ]
          }
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        },
        responsive: [{
          breakpoint: 1400,
          options: {
            chart: {
              width: 70,
              height: 40,
            }
          },
        }]
      };

      var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers"), options);
      chartBar1.render();

    }
    var NewCustomers1 = function () {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [100, 300, 200, 400, 100, 400],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'area',
          height: 50,
          width: 100,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        colors: ['#0E8A74'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 3,
          curve: 'smooth',
          colors: ['#145650'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        x: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        y: {
          show: false,
        },
        fill: {
          type: 'gradient',
          gradient: {
            colorStops: [
              {
                offset: 0,
                color: '#0E8A74',
                opacity: 1
              },
              {
                offset: 0.3,
                color: '#0E8A74',
                opacity: .4
              },
              {
                offset: 100,
                color: '#0E8A74',
                opacity: 0
              }
            ]
          }
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        },
        responsive: [{
          breakpoint: 1400,
          options: {
            chart: {
              width: 70,
              height: 40,
            }
          },
        }]
      };

      var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers1"), options);
      chartBar1.render();

    }
    var NewCustomers2 = function () {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [100, 200, 100, 300, 200, 400],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'area',
          height: 50,
          width: 100,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        colors: ['#0E8A74'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 3,
          curve: 'smooth',
          colors: ['#3385D6'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        x: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        y: {
          show: false,
        },
        fill: {
          type: 'gradient',
          gradient: {
            colorStops: [
              {
                offset: 0,
                color: '#3385D6',
                opacity: 1
              },
              {
                offset: 0.3,
                color: '#3385D6',
                opacity: .4
              },
              {
                offset: 100,
                color: '#3385D6',
                opacity: 0
              }
            ]
          }
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        },
        responsive: [{
          breakpoint: 1400,
          options: {
            chart: {
              width: 70,
              height: 40,
            }
          },
        }]
      };

      var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers2"), options);
      chartBar1.render();

    }
    var NewCustomers3 = function () {
      var options = {
        series: [
          {
            name: 'Net Profit',
            data: [100, 200, 100, 300, 200, 400],
            /* radius: 30,	 */
          },
        ],
        chart: {
          type: 'area',
          height: 50,
          width: 100,
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false
          },
          sparkline: {
            enabled: true
          }

        },

        colors: ['#0E8A74'],
        dataLabels: {
          enabled: false,
        },

        legend: {
          show: false,
        },
        stroke: {
          show: true,
          width: 3,
          curve: 'smooth',
          colors: ['#B723AD'],
        },

        grid: {
          show: false,
          borderColor: '#eee',
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0

          }
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          hover: {
            filter: {
              type: 'none',
              value: 0
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0
            }
          }
        },
        x: {
          categories: ['Jan', 'feb', 'Mar', 'Apr', 'May'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            style: {
              fontSize: '12px',
            }
          },
          crosshairs: {
            show: false,
            position: 'front',
            stroke: {
              width: 1,
              dashArray: 3
            }
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            }
          }
        },
        y: {
          show: false,
        },
        fill: {
          type: 'gradient',
          gradient: {
            colorStops: [
              {
                offset: 0,
                color: '#B723AD',
                opacity: 1
              },
              {
                offset: 0.3,
                color: '#B723AD',
                opacity: .4
              },
              {
                offset: 100,
                color: '#B723AD',
                opacity: 0
              }
            ]
          }
        },
        tooltip: {
          enabled: false,
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return "$" + val + " thousands"
            }
          }
        },
        responsive: [{
          breakpoint: 1400,
          options: {
            chart: {
              width: 70,
              height: 40,
            }
          },
        }]
      };

      var chartBar1 = new ApexCharts(document.querySelector("#NewCustomers3"), options);
      chartBar1.render();

    }


    var activityChart = function () {
      // Get the chart element and read the data attributes
      const chartElement = document.getElementById('vacancyChart');
      const seriesData = [
        {
          name: 'Active Users',
          data: JSON.parse(chartElement.getAttribute('data-active-users'))
        },
        {
          name: 'Inactive Users',
          data: JSON.parse(chartElement.getAttribute('data-inactive-users'))
        }
      ];
      const categoriesData = JSON.parse(chartElement.getAttribute('data-months'));

      var options = {
        series: seriesData, // Use series data from HTML
        chart: {
          height: 180,
          type: 'area',
          toolbar: {
            show: false
          },
        },
        colors: ["#35c556", "#000000"],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 0.5,
        },
        legend: {
          show: false
        },
        grid: {
          show: true,
          strokeDashArray: 6,
          borderColor: 'var(--border)',
        },
        yaxis: {
          labels: {
            style: {
              colors: 'var(--text)',
              fontSize: '10px',
              fontFamily: 'Poppins',
              fontWeight: 400
            },
            formatter: function (value) {
              return value;
            }
          },
        },
        xaxis: {
          categories: categoriesData, // Use categories data from HTML
          labels: {
            style: {
              colors: 'var(--text)',
              fontSize: '9px',
              fontFamily: 'Poppins',
              fontWeight: 400
            },
          },
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            colorStops: [
              // [
              //   {
              //     offset: 0,
              //     color: '#35c556',
              //     opacity: .2
              //   },
              //   {
              //     offset: 50,
              //     color: '#35c556',
              //     opacity: 0
              //   },
              //   {
              //     offset: 100,
              //     color: '#35c556',
              //     opacity: 0
              //   }
              // ],
              [
                {
                  offset: 0,
                  color: '#86E78A',
                  opacity: .2
                },
                {
                  offset: 50,
                  color: '#86E78A',
                  opacity: 0
                },
                {
                  offset: 100,
                  color: '#86E78A',
                  opacity: 0
                }
              ],
              [
                {
                  offset: 0,
                  color: '#fff',
                  opacity: .2
                },
                {
                  offset: 50,
                  color: '#fff',
                  opacity: 0
                },
                {
                  offset: 100,
                  color: '#fff',
                  opacity: 0
                }
              ]
            ]
          },
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        responsive: [{
          breakpoint: 575,
          options: {
            chart: {
              height: 200,
            },
            stroke: {
              width: 0.5,
            },
            yaxis: {
              labels: {
                style: {
                  fontSize: '10px',
                },
              },
            },
            xaxis: {
              labels: {
                style: {
                  fontSize: '10px',
                },
              },
            },
          },
        }]
      };

      var chart = new ApexCharts(document.querySelector("#vacancyChart"), options);
      chart.render();
    }






    var activityBar1 = function () {
      // Get the chart data from the HTML element
      const chartDataElement = document.getElementById('chart-data1');
      const labels = JSON.parse(chartDataElement.getAttribute('data-labels1'));
      const values = JSON.parse(chartDataElement.getAttribute('data-values1'));

      var options = {
        series: [{
          name: 'Bet Converted',
          data: values.map(value => value / 1000) // Convert values to thousands
        }],
        chart: {
          type: 'bar',
          height: 180,
          toolbar: {
            show: false
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '50%',
            endingShape: 'rounded',
            borderRadius: 6, // Add border radius to the bars
          },
        },
        dataLabels: {
          enabled: false
        },
        colors: ['#86E78A'],
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: labels,
          labels: {
            style: {
              colors: 'var(--text)',
              fontSize: '10px',
              fontFamily: 'Poppins',
              fontWeight: 400
            },
          },
          axisTicks: {
            show: false
          },
          axisBorder: {
            show: false
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: 'var(--text)',
              fontSize: '12px',
              fontFamily: 'Poppins',
              fontWeight: 400
            },
            formatter: function (value) {
              return value === 0 ? value : value + 'k'; // Add 'k' for thousands
            }
          },
          max: Math.ceil(Math.max(...values) / 1000), // Set the maximum value, adjusted to the nearest 10k
          min: 0,
          tickAmount: Math.ceil(Math.max(...values) / 10000) + 1, // Number of ticks based on the maximum value
          forceNiceScale: true, // Ensure ticks are evenly spaced
          tickSize: 5,
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          borderColor: 'var(--border)',
        },
        fill: {
          opacity: 1
        },
      };

      var chart = new ApexCharts(document.querySelector("#activity1"), options);
      chart.render();
    }



    var pieChart1 = function () {
      var options = {
        series: [90, 68, 85],
        chart: {
          type: 'donut',
          height: 220
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0,
        },
        colors: ['#1D92DF', '#4754CB', '#D55BC1'],
        legend: {
          position: 'bottom',
          show: false
        },
        responsive: [{
          breakpoint: 1400,
          options: {
            chart: {
              height: 200
            },
          }
        }]
      };

      var chart = new ApexCharts(document.querySelector("#pieChart1"), options);
      chart.render();

    }



    var donutChart = function () {
      $("span.donut").peity("donut", {
        width: "100",
        height: "100"
      });
    }


    /* Function ============ */
    return {
      init: function () {
      },


      load: function () {
        NewCustomers();
        NewCustomers1();
        NewCustomers2();
        NewCustomers3();
        activityChart();
        activityBar1();
        pieChart1();
        donutChart();

      },

      resize: function () {
      }
    }

  }();



  jQuery(window).on('load', function () {
    setTimeout(function () {
      dlabChartlist.load();
    }, 1000);

  });



})(jQuery);