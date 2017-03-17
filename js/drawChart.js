$(document).ready(function () {
    var male, female;
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['male',  male],
            ['female', female],
        ]);
        var options = {
            title: 'Gender of users',
            width: 740,
            height: 500,
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
    $('button').click(function(){
        male = +$('td #male').length;
        female = +$('td #female').length;
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);
    })

});


