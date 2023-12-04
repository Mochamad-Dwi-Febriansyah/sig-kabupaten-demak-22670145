const ctx = document.getElementById('barchart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Bonang', 'Demak', 'Dempet', 'Gajah', 'Guntur', 'Karanganyar','Karangawen','Karangtengah','Kebonagung', 'Mijen', 'Mranggen','Sayung' , 'Wedung', 'Wonosalam'],
    datasets: [{
      label: ' total',
      data: [7, 1, 4, 4, 7, 6, 4, 7, 6, 1, 6,21 ,16, 3],
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
 