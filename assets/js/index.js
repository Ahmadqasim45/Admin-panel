  // Payment Chart Initialization
  const ctx = document.getElementById('paymentChart').getContext('2d');
  const paymentChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['09 March', '10 March', '11 March', '12 March', '13 March', '14 March'],
          datasets: [
              {
                  label: 'Expensis',
                  data: [15, 20, 25, 30, 20, 25],
                  backgroundColor: '#00cc44',
              },
              {
                  label: 'Income',
                  data: [10, 15, 20, 25, 15, 20],
                  backgroundColor: '#ffe700',
              },
              {
                  label: 'Credit Limit',
                  data: [5, 10, 15, 20, 10, 15],
                  backgroundColor: '#cccccc',
              }
          ]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true,
                  grid: {
                      borderDash: [1, 1]
                  }
              },
              x: {
                  grid: {
                      borderDash: [1, 1]
                  }
              }
          }
      }
  });