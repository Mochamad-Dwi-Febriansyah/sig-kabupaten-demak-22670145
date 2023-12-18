const ctx3 = document.getElementById('linechart');

new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Bonang', 'Demak', 'Dempet', 'Gajah', 'Guntur', 'Karanganyar','Karangawen','Karangtengah','Kebonagung', 'Mijen', 'Mranggen','Sayung' , 'Wedung', 'Wonosalam'],
    datasets: [{
      label: ' total',
      data: [6, 6, 21, 0, 15, 0, 11, 17, 10, 0, 2,1 ,49, 12],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
 