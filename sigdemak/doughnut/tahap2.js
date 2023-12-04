const ctx2 = document.getElementById('doughnut'); 

new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Bonang', 'Demak', 'Dempet', 'Gajah', 'Guntur', 'Karanganyar','Karangawen','Karangtengah','Kebonagung', 'Mijen', 'Mranggen','Sayung' , 'Wedung', 'Wonosalam'],
    datasets: [{
      label: ' total',
      data: [3, 17, 1, 1, 12, 0, 3, 2, 13, 0, 34,1 ,13, 15],
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