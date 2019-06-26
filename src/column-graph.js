/**
 * Displays a graph of the specified data in a CSV format
 * using Highcharts.
 * 
 * @author: Michael Quinn
 * @date    June 25, 2019
 */

const CSVURL = window.location.origin + "/data/airline-safety.csv";

var chart_csv = Highcharts.chart('csv', {
    chart: {
        type: 'bar',
        zoomType: 'x',
    },
    title: {
        text: 'Available km Per Seat Per Week'
    },
    data: {
        csvURL: CSVURL
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Airlines',
        }
    },
    yAxis: {
        title: {
            text: "Kilometers (km)",
            units: "km",
        },
    },
})

var chart = $('#csv').highcharts(),
    $kmbutton = $('#km-per-week'),
    $incbutton = $('#incidents'),
    $fatbutton = $('#fatalities');

/**
 * Hides all series in the chart.
 * 
 * @param {Array} series        An array of the chart.series data.
 * @param {ArrayItem} this      The series data to be hidden.
 * @param {Highcharts} chart    The chart being displayed.
 */
function clearChart() {
    var series = chart.series[0];
    $(chart.series).each(function(){
        this.setVisible(false, false);
    });
    chart.redraw();
}

/**
 * Show only the available km per seat series.
 * 
 * @see clearChart()            Clears the graph of current series.
 * @param {Highcharts} chart    The chart being displayed.
 */
$kmbutton.click(function(){
    clearChart();
    chart.series[0].setVisible(true,true);
    chart.update({
        chart: {
            type: "bar",
        },
        title: {
            text: 'Available km Per Seat Per Week'
        },
        yAxis: {
            title: {
                text: "Kilometers (km)",
                units: "km",
            },
        },
    })
    chart.redraw();
});

/**
 * Show only the incidents per airline.
 * 
 * @see clearChart()            Clears the graph of current series.
 * @param {Highcharts} chart    The chart being displayed.
 */
$incbutton.click(function(){
    clearChart();
    chart.series[2].setVisible(true,true);
    chart.series[1].setVisible(true,true);
    chart.series[4].setVisible(true,true);
    chart.series[5].setVisible(true,true);
    chart.update({
        chart: {
            type: "bar",
        },
        title: {
            text: 'Incidents Per Airline'
        },
        yAxis: {
            title: {
                text: "Incidents",
                units: "",
            },
        },
    })
    chart.redraw();
});

/**
 * Show only the fatalities per airline.
 * 
 * @see clearChart()            Clears the graph of current series.
 * @param {Highcharts} chart    The chart being displayed.
 */
$fatbutton.click(function(){
    clearChart();
    chart.series[3].setVisible(true,true);
    chart.series[6].setVisible(true,true);
    chart.update({
        chart: {
            type: "bar",
        },
        title: {
            text: 'Fatalities Per Airline'
        },
        yAxis: {
            title: {
                text: "Fatalities",
                units: "",
            },
        },
    });
    chart.redraw();
});