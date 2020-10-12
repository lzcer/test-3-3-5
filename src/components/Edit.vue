<template>
  <div>
    <div class="content">
      <div class="author">
        <span>作者:</span>
        <input v-model="item.author" id="author" type="text" />
      </div>
      <div class="title_">
        <span>标题:</span>
        <input v-model="item.title" id="title_" type="text" />
      </div>
      <div class="content_">
        <span>内容:</span>
        <textarea v-model="item.content" name="" id="content_" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data'],
  data() {
    return {
      item: {}
    }
  },
  mounted() {
    let id = Number(this.$route.query.id)
    this.item = this.data.filter(item => {
      console.log(item.id, id)
      return item.id === id
    })[0]
  }
}
</script>
<style scoped>
* {
  text-align: start;
}
.content {
  margin-top: 80px;
  margin-bottom: 60px;
  padding: 10px;
  background-color: #f7f7f7;
  border-top: 1px solid #456f9a;
}
.content > div {
  display: flex;
  flex-direction: column;
}
.content > div > input,
.content > div > textarea {
  outline: none;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}
.content > div > input {
  height: 30px;
}
.title {
  display: flex;
  justify-content: space-between;
}
.title > button {
  outline: none;
  border: 1px solid #2373a5;
  background-color: #4f87b5;
  width: 60px;
  border-radius: 15px;
  margin: 5px;
  color: white;
}
.title > button:active {
  background-color: #6ba9d3;
}
</style>
