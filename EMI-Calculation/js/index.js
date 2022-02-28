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

}
document.addEventListener('DOMContentLoaded', function () {

    var tableBody = document.getElementById('my-table-data');
    var xmlHttpRequest = new xmlHttpRequest();

    xmlHttpRequest.onreadystatechange = function () {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var data = JSON.parse(xmlHttpRequest.responseText);
            var newContent = '';
            for (let i = 0; i < data.length; i++) {
                newContent += `<tr>
                <td>${data[i].loan}</td>
                <td>${data[i].interest}</td>
                <td>${data[i].tenure}</td>
                </tr>`;
            }
            tableBody.innerHTML = newContent;
        }
    }
    xmlHttpRequest.open('get','http://localhost:8080/v1/amounts', false);
    xmlHttpRequest.send();
})