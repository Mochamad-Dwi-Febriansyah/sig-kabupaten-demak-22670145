const ctx2 = document.getElementById('doughnut'); 

new Chart(ctx2, {
  type: 'doughnut',
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