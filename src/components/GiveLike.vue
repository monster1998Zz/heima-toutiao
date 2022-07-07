<template>
  <van-icon
    color="#777"
    :name="attitude === -1 ? 'good-job' : 'good-job-o'"
    @click="onLike"
  />
</template>

<script>
import { addLike, delLike } from '@/api/article'
export default {
  name: 'GiveLike',
  props: {
    attitude: {
      type: Number,
      required: true
    }
  },
  created () { },
  data () {
    return {}
  },
  methods: {
    async onLike () {
      const target = this.$route.params.article_id
      if (this.attitude === -1) {
        try {
          await addLike(target)
          this.$emit('update:attitude', this.attitude = 1)
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await delLike(target)
          this.$emit('update:attitude', this.attitude = -1)
        } catch (err) {
          console.log(err)
        }
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped>
</style>
