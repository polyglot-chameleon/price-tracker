import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.html',
})
export class ChartComponent implements OnInit, AfterViewInit {
  chartInstance: any;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('chart')!;

    this.chartInstance = echarts.init(chartDom);

    const option = {
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E'],
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: 'line',
          smooth: true,
        },
        {
          data: [5, 10, 50, 60, 49],
          type: 'line',
          smooth: true,
        },
      ],
    };

    this.chartInstance.setOption(option);
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      this.chartInstance.dispose();
    }
  }
}
