var chart_csv = Highcharts.chart('csv', {
    chart: {
        type: 'column',
        zoomType: 'x',
    },
    title: {
        text: 'Airline Safety CSV'
    },
    data: {
        csvURL: window.location.origin + "/data/airline-safety.csv"
    },
    yAxis: {
        title: 'Passengers',
    }
})


var $button = $('#km-per-week');
$button.click(function () {
    var series = chart_csv.series[0];
    console.log(series);
    if(series.visible){
        series.hide();
    } 
    else {
        series.show();
    }
});