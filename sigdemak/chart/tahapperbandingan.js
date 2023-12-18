const ctx = document.getElementById('barchartperbandingan');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Bonang', 'Demak', 'Dempet', 'Gajah', 'Guntur', 'Karanganyar','Karangawen','Karangtengah','Kebonagung', 'Mijen', 'Mranggen','Sayung' , 'Wedung', 'Wonosalam'],
    datasets: [{
      label: ' tahap 1',
      data: [7, 1, 4, 4, 6, 6, 4, 7, 6, 1, 6,21 ,16, 3], 
      borderWidth: 1
    },{
      label: ' tahap 2',
      data: [3, 17, 1, 1, 12, 0, 3, 2, 13, 0, 34,1 ,12, 13], 
      borderWidth: 1
    },{
      label: ' tahap 3',
      data: [6, 6, 21, 0, 15, 0, 11, 17, 10, 0, 2,1 , 49, 12], 
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
 