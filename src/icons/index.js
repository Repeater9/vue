import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/) // 引入以.svg结尾的所有文件,'/\.svg$/'是正则表达式
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
