<template>
  <div>
    <h1 class="inlineBlock">索引模式</h1>
    <questionMark class="inlineBlock" />
    <el-button class="button" type="primary" @click="handleClick">
      <svg-icon icon-class="plus" />
      创建索引模式
    </el-button>
    <el-input
      v-model="input"
      placeholder="Search..."
      prefix-icon="el-icon-search"
    />
  </div>
</template>

<script>
import questionMark from './components/questionMark'
export default {
  name: 'Create',
  components: { questionMark },
  data() {
    return {
      input: '',
      pattern: []
    }
  },
  methods: {
    handleClick() {
      this.$router.push('create')
    }
  }
}
</script>

<style scoped>
.inlineBlock {
  display: inline-block;
  margin: 1%
}
.button {
  position: absolute;
  font-size: 1.3em;
  right: 0%;
  margin: 1%
}
</style>
