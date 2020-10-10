<template>
  <div>
    <div class="searchBox">
      <div class="searchBorder">
        <div class="icon"></div>
        <input type="text" class="searchInp" placeholder="请输入标题" />
      </div>
    </div>
    <div class="content">
      <ul id="list" class="list"></ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
.searchBox {
  width: 100%;
  position: fixed;
  margin-top: 80px;
  height: 50px;
  background-color: #ebebeb;
  padding: 5px;
  box-sizing: border-box;
}
.searchBorder {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 20px;
  display: flex;
  padding: 5px;
  background-color: #f9f9f9;
}
.searchBorder > input {
  flex: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  margin-right: 5px;
  margin-left: 3px;
  border: none;
  outline: none;
  background-color: #f9f9f9;
}
.icon {
  width: 20px;
  height: 20px;
  align-self: center;
  border-radius: 50%;
  background-color: #c7c7c7;
}
.content {
  width: 100%;
  position: absolute;
  margin-top: 130px;
  margin-bottom: 60px;
  z-index: -1;
}
.content > ul > li {
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #d9d9d9;
  height: 60px;
}
.list > li {
  padding: 10px;
  background-color: #f7f7f7;
}

.list > li > .icon {
  position: absolute;
  right: 10px;
}
</style>
