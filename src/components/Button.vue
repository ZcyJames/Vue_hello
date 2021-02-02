<template>
  <div>
    <button @click="doCheck();">
      <span> {{ text }} </span>
      <span>{{ icon }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      isLiked: false,
      text: '点赞',
      icon: '👍'
    }
  },
  methods:{
    doCheck:function (){
      this.isLiked = !this.isLiked
      if (this.isLiked) {
        this.text='取消'
        this.icon='💖'
      } else {
        this.text='点赞'
        this.icon='👍'
      }
    }
  }

}
</script>

<style scoped>

</style>