google.charts.load('current', {
    'packages': ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table.
function drawChart() {
    var pamtChart = parseInt(document.getElementById('plAmount').value);
    var interestPara = document.getElementById('totalInterest').innerText;
    var newChart = parseInt(interestPara);

    // Create the data table.

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Principal amount', pamtChart],
        ['Total interest amount', newChart]
    ]);

    // Set chart options
    var options = {
        'title': '',
        'width': 300,
        'height': 240, pieSliceText: 'none',
        colors: ['#294E9B', '#FF7000'],
        legend: {
            position: 'none',
        },
        backgroundColor: {
            fill: 'transparent'
        },
        'tooltip' : {
            trigger: 'none'}
    };

    // Instantiate and draw our chart, passing in some options.
    var oldChart = document.getElementById('chart_div');
    oldChart.innerHTML = "";
    var chart = new google.visualization.PieChart(oldChart);
    chart.draw(data, options);
}