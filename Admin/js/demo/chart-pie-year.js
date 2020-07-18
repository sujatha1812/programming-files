// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
var data = [{
  data: [1805875574,541875574],
  backgroundColor: [ '#1cc88a', '#7952b3'],
  borderColor: "#fff"
}];




// Pie Chart Example
var ctx = document.getElementById("myPieChartYear");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Deposit", "Expese", "payable"],
    datasets: [{
      data: [ 1805875574,541875574],
      backgroundColor: [ '#1cc88a', '#7952b3'],
    
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
    
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
  
});
