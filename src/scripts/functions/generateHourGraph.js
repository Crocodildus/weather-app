import chartLabels from './chartLabels';
import chartData from './chartData';

const generateChart = (datasetFull) => {
  const dataset24h = datasetFull.splice(24, 24);
  const hours = Object.keys(dataset24h);
  const labelArr = [];
  chartLabels(hours, labelArr);
  const dataArr = chartData(dataset24h);
  const ctx = document.getElementById('myChart').getContext('2d');
  const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: labelArr,
      datasets: [{
        label: 'Hourly temperature',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dataArr,
        fill: 'false'
      }]
    },

    // Configuration options go here
    options: {
      display: true,
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    }
  });
};

export default generateChart;