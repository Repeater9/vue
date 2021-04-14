<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import * as echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null,
      option: {}
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.option = {
        legend: {},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['Blade', '2021-04-09', '2021-04-10', '2021-04-11', '2021-04-12', '2021-04-13', '2021-04-14'],
            ['blade1', 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
            ['blade2', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
            ['blade3', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
            ['blade4', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: { gridIndex: 0 },
        grid: { top: '55%' },
        series: [
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' }},
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' }},
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' }},
          { type: 'line', smooth: true, seriesLayoutBy: 'row', emphasis: { focus: 'series' }},
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: { focus: 'data' },
            label: {
              formatter: '{b}: {@2021-04-09} ({d}%)'
            },
            encode: {
              itemName: 'Blade',
              value: '2021-04-09',
              tooltip: '2021-04-09'
            }
          }
        ]
      }
      var theChart = this.chart
      this.chart.on('updateAxisPointer', function(event) {
        var xAxisInfo = event.axesInfo[0]
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1
          theChart.setOption({
            series: {
              id: 'pie',
              label: {
                formatter: '{b}: {@[' + dimension + ']} ({d}%)'
              },
              encode: {
                itemName: 'Blade',
                value: dimension,
                tooltip: dimension
              }
            }
          })
        }
      })
      this.chart.setOption(this.option)
    }
  }
}
</script>
