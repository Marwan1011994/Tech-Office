
// const ctx = document.getElementById('myChart');
// const ctn = document.getElementById('myChart2');

// كميات المياه المنتجه من جميع المحطات
const allStations = document.getElementById('myChart1');
new Chart(allStations, {
    type: 'bar',
    data: {
      labels: ['متوسط المحطات المرشحة الكبري','متوسط المحطات المرشحة الصغري والنقالى','متوسط المحطات الارتوازى'],
      datasets: [{
        label: 'متوسط كمية المياه المنتجه م3/يوم',
        data: [442403,64122,148068],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'متوسط انتاج المحطات',
          }
        }
      },
  });


// نسبة المياه المنتجه من جميع المحطات
const allStationsprcent = document.getElementById('myChart2');
new Chart(allStationsprcent, {
    type: 'pie',
    data: {
      labels: ['متوسط المحطات المرشحة الكبري','متوسط المحطات المرشحة الصغري والنقالى','متوسط المحطات الارتوازى'],
      datasets: [{
        label: "% Prcent",
        data: [67.58,9.80,22.62],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'النسبة المئوية لانتاج المحطات'
          }
        }
      },
  });


//كمية المياه المنتجه من الافرع والمباعه
// const branches = document.getElementById('myChart3');
// new Chart(branches, {
//     type: 'bar',
//     data: {
//       labels: ['مدينة بنها','مركز بنها'],
//       datasets: [{
//         label: 'كمية المياه المنتجه م3/يوم',
//         data: [{
//           data:[30,40],
//           borderColor: Utils.CHART_COLORS.red,
//           backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//           borderWidth: 2,
//         },{
//           data:[50,60],
//           borderColor: Utils.CHART_COLORS.red,
//           backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//           borderWidth: 2,
//         }],
//         backgroundColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(255, 205, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(100, 102, 255, 1)',
//         ],
//     options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           title: {
//             display: true,
//             text: 'المحطات المرشحة الكبري',
//           }
//         }
//       },
//   });
// المحطات المرشحة الكبري
const bigStations = document.getElementById('myChart3');
new Chart(bigStations, {
    type: 'bar',
    data: {
      labels: ['اتريب المرشحه', 'العبادله المرشحه', 'كوم اشفين المرشحه', 'شبين القناطر المرشحه', 'القناطر الخيرية المرشحه', 'ابو زعبل المرشحه', 'سرياقوس المرشحه'],
      datasets: [{
        label: 'كمية المياه المنتجه م3/يوم',
        data: [55213, 93110, 79096, 79469, 54199, 42011,48305],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(100, 102, 255, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'المحطات المرشحة الكبري',
          }
        }
      },
  });

// new Chart(ctn, {
//     type: 'line',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'top',
//           },
//           title: {
//             display: true,
//             text: 'Chart.js Line Chart'
//           }
//         }
//       },
//   });
// new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//       datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         borderWidth: 1
//       }]
//     },
//     options: {
//         responsive: true,
//         plugins: {
//           legend: {
//             position: 'bottom',
//           },
//           title: {
//             display: true,
//             text: 'Chart.js Pie Chart'
//           }
//         }
//       },
//   });



