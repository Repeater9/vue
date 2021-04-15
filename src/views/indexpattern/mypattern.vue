<template>
  <div class="patternContainer">
    <h1 class="inlineBlock">索引模式</h1>
    <questionMark class="inlineBlock" />
    <el-button class="button" type="primary" @click="handleCreateClick">
      <svg-icon icon-class="plus" />
      创建索引模式
    </el-button>
    <el-input
      v-model="input"
      class="input"
      placeholder="Search..."
      prefix-icon="el-icon-search"
    />
    <p class="inlineBlock">Pattern</p> <i class="el-icon-top" />
    <el-divider class="divider" />
    <p class="pattern" @click="handleIndexClick">sample_data</p>
    <el-divider class="divider" />
    <p class="pattern" @click="handleIndexClick">data_flight</p>
    <el-divider class="divider" />
    <p class="pattern" @click="handleIndexClick">data_blade</p>
    <el-divider class="divider" />
    <p class="pattern" @click="handleIndexClick">data_sensor</p>
    <el-divider class="divider" />
    <p class="pattern" @click="handleIndexClick">data_shakespeare</p>
    <el-divider class="divider" />
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
    handleCreateClick() {
      this.$router.push('create')
    },
    handleIndexClick() {
      this.$router.push('create')
    }
  }
}
</script>

<style>
.patternContainer {
  margin-left: 2.5%;
}
.inlineBlock {
  display: inline-block;
  margin-left: 1%;
  margin-right: 1%;
}
.button {
  position: absolute;
  font-size: 1.3em;
  right: 0%;
  margin-right: 5%;
  margin-top: 1%
}
.input {
  width: 95%;
}

.divider {
  width: 95%;
  margin: 2px;
}

.pattern {
  margin-left: 1%;
  color: rgb(60, 171, 245);
  cursor: pointer;
}
</style>
