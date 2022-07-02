<template>
  <div>
    <van-cell
      icon="search"
      v-for="(item, index) in list"
      :key="index"
      @click="$emit('search', item)"
    >
      <template #title>
        <span v-html="highligth(item)"></span>
      </template>
    </van-cell>
  </div>
</template>

<script>
// 响应式数据写在data，非响应式写在export default
import { getSuggestList } from '@/api/search'
let timer = null
export default {
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  created () { },
  data () {
    return {
      list: []
    }
  },
  methods: {
    highligth (str) {
      const reg = new RegExp(this.searchText, 'g')
      return str.replace(reg, `<span style="color:red">${this.searchText}</span>`)
    }
  },
  computed: {},
  watch: {
    searchText: {
      handler (newVal) {
        clearTimeout(timer)
        timer = setTimeout(async () => {
          try {
            const res = await getSuggestList(newVal)
            console.log(res)
            this.list = res.data.data.options
          } catch (err) {
            console.log(err)
          }
        }, 900)
      },
      immediate: true // 立即监听 组件在创建的时候就会监听一次
    }
  },
  beforeDestroy () {
    clearTimeout(timer)
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
