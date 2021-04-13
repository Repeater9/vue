/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/visualize',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Visualize',
  meta: {
    title: 'Visualize',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/visualize/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/visualize/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/visualize/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    },
    {
      path: 'share',
      component: () => import('@/views/visualize/share'),
      name: 'ShareChart',
      meta: { title: 'Share Chart', noCache: true }
    },
    {
      path: 'bigscale',
      component: () => import('@/views/visualize/bigscale'),
      name: 'BigScaleChart',
      meta: { title: 'Big Scale Chart', noCache: true }
    },
    {
      path: 'stacked',
      component: () => import('@/views/visualize/stacked'),
      name: 'StackedChart',
      meta: { title: 'Stacked Chart', noCache: true }
    },
    {
      path: 'scatter',
      component: () => import('@/views/visualize/scatter'),
      name: 'ScatterChart',
      meta: { title: 'Scatter Chart', noCache: true }
    }
  ]
}

export default chartsRouter
