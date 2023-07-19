import investmentData from '../investment';

export default {
    height: 480,
    type: 'pie',
    options: {
        chart: {
            id: 'pie',
            type: 'pie'
        },
        labels: ['Investment', 'Loss'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        ]
    },
    series: investmentData.investmentVsLoss
}