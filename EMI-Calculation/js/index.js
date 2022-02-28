google.charts.load('current', {
    'packages': ['corechart']
});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var pamtChart = parseInt(document.getElementById('plAmount').value);
    var interestPara = document.getElementById('totalInterest').innerText;
    var newChart = parseInt(interestPara);

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Principal amount', pamtChart],
        ['Total interest amount', newChart]
    ]);

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

    var oldChart = document.getElementById('chart_div');
    oldChart.innerHTML = "";
    var chart = new google.visualization.PieChart(oldChart);
    chart.draw(data, options);

    var xmlHttpRequest = new xmlHttpRequest();
    xmlHttpRequest.open('post', 'http://localhost:8080/v1/amounts', false);
    xmlHttpRequest.send();
}