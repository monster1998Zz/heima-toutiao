<template>
  <div>
    <van-field
      v-model.trim="message"
      rows="2"
      autosize
      type="textarea"
      maxlength="50"
      placeholder="请输入留言"
      show-word-limit
      class="add-field"
      ref="field"
    >
      <template #extra>
        <!-- 输入框没有内容，按钮被禁用 -->
        <van-button
          type="default"
          class="btn"
          :disabled="message.length === 0"
          @click="onClick"
          >发布</van-button
        >
      </template>
    </van-field>
  </div>
</template>

<script>
import { addComment } from '@/api/comment'
export default {
  name: 'addComment',
  props: {
    target: {
      type: [String, Number],
      required: true
    },
    // 如果是对文章进行评论不用传，对评论评论要穿
    art_id: {
      type: [String, Number]
    }
  },
  created () { },
  data () {
    return {
      message: ''
    }
  },
  methods: {
    async onClick () {
      try {
        const res = await addComment({
          target: this.target,
          content: this.message,
          art_id: this.art_id
        })
        console.log(res)
        this.$emit('add-comment', res.data.data.new_obj)
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {},
  mounted () {
    // 找到field这个dom元素的根标签，在找到它的儿子textarea进行聚焦
    this.$refs.field.$el.querySelector('textarea').focus()
  }
}
</script>

<style scoped lang='less'>
.add-field {
  align-items: center;
  button {
    border: none;
  }
}
</style>
