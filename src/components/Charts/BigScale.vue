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
      option: {},
      dataCount: 10000,
      chartData: 0
    }
  },
  created() {
    this.chartData = this.generateData(this.dataCount)
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
        color: '#5470c6',
        title: {
          text: echarts.format.addCommas(this.dataCount) + ' Data',
          left: 10
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: false
            },
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          bottom: 90
        },
        dataZoom: [{
          type: 'inside'
        }, {
          type: 'slider'
        }],
        xAxis: {
          data: this.chartData.categoryData,
          silent: false,
          splitLine: {
            show: false
          },
          splitArea: {
            show: false
          }
        },
        yAxis: {
          splitArea: {
            show: false
          }
        },
        series: [{
          type: 'bar',
          data: this.chartData.valueData,
          // Set `large` for large data amount
          large: true
        }]
      }
      this.chart.setOption(this.option)
    },
    generateData(count) {
      var baseValue = Math.random() * 1000
      var time1 = +new Date(2021, 3, 15)
      var smallBaseValue
      function next(idx) {
        smallBaseValue = idx % 30 === 0 ? Math.random() * 700 : (smallBaseValue + Math.random() * 500 - 250)
        baseValue += Math.random() * 20 - 10
        return Math.max(0, Math.round(baseValue + smallBaseValue) + 3000)
      }
      var categoryData = []
      var valueData = []
      for (var i = 0; i < count; i++) {
        categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time1))
        valueData.push(next(i).toFixed(2))
        time1 += 1000
      }
      return {
        categoryData: categoryData,
        valueData: valueData
      }
    }
  }
}
</script>
