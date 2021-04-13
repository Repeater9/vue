<template>
  <div>
    <svg-icon icon-class="question" style="cursor: pointer; fontSize: 2em" @click="handleClick" />
    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :with-header="false"
      font
    >
      <div style="fontSize: 1.3em">
        <h1> 关于索引模式 </h1>
        <el-divider />
        <p style="fontSize: 20px;"> 索引模式允许您将数据源装入存储桶，从而可以查询数据源的字段 </p>
        <el-divider />
        <h2> 索引模式示例 </h2>
        <br>
        <strong>单数据源 </strong>
        <p> 索引单个称作log-west-001的数据源，以便可以快速的构建图表和查询数据 </p>
        <strong> 多数据源 </strong>
        <p> 索引多个以log-west开头的log-west-*数据源, 以便快速分析所有西海岸的日志数据</p>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Pattern',
  data() {
    return {
      drawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    handleClick() {
      this.drawer = true
    }
  }
}
</script>
