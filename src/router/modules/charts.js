/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    },
    {
      path: 'share',
      component: () => import('@/views/charts/share'),
      name: 'ShareChart',
      meta: { title: 'Share Chart', noCache: true }
    },
    {
      path: 'bigscale',
      component: () => import('@/views/charts/bigscale'),
      name: 'BigScaleChart',
      meta: { title: 'Big Scale Chart', noCache: true }
    },
    {
      path: 'stacked',
      component: () => import('@/views/charts/stacked'),
      name: 'StackedChart',
      meta: { title: 'Stacked Chart', noCache: true }
    },
    {
      path: 'scatter',
      component: () => import('@/views/charts/scatter'),
      name: 'ScatterChart',
      meta: { title: 'Scatter Chart', noCache: true }
    }
  ]
}

export default chartsRouter
