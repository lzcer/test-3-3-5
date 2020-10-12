<template>
  <div>
    <div class="container">
      <div class="title">文章管理</div>
      <ul class="tab">
        <li @click="goTab('list')" :class="{ active: active === 'list' }">
          文章列表
        </li>
        <li @click="goTab('edit')" :class="{ active: active === 'edit' }">
          文章编写
        </li>
        <li>文章分类</li>
      </ul>
      <router-view @editTab="editTab" :data="data"></router-view>
      <ul class="footer">
        <li>
          <div class="icon"></div>
          <div>文章管理</div>
        </li>
        <li>
          <div class="icon"></div>
          <span> 系统消息</span>
        </li>
        <li>
          <div class="icon"></div>
          <span> 系统设置</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 'list',
      data: [
        {
          id: 1,
          author: '测试1',
          title: '标题1',
          content: '内容内容内容内容内容内容内容内容内容内容内容',
          time: '2019-05-01:17:05:02'
        },
        {
          id: 2,
          author: '测试2',
          title: '标题2',
          content: '内容内容内容内容内容内容内容内容内容内容内容',
          time: '2019-05-01:17:05:02'
        },
        {
          id: 3,
          author: '测试3',
          title: '标题3',
          content: '内容内容内容内容内容内容内容内容内容内容内容',
          time: '2019-05-01:17:05:02'
        },
        {
          id: 4,
          author: '测试4',
          title: '标题4',
          content: '内容内容内容内容内容内容内容内容内容内容内容',
          time: '2019-05-01:17:05:02'
        },
        {
          id: 5,
          author: '测试5',
          title: '标题5',
          content: '内容内容内容内容内容内容内容内容内容内容内容',
          time: '2019-05-01:17:05:02'
        },
        {
          id: 6,
          author: '测试6',
          title: '标题6',
          content: '内容内容内容内容内容内容内容内容内容内容内容',
          time: '2019-05-01:17:05:02'
        },
        {
          id: 7,
          author: '测试7',
          title: '标题7',
          content: '内容内容内容内容内容内容内容内容内容内容内容',
          time: '2019-05-01:17:05:02'
        }
      ]
    }
  },
  methods: {
    goTab(tab) {
      this.active = tab
      this.$router.push('/' + tab)
    },
    editTab() {
      this.active = 'edit'
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #f1f1f1;
  z-index: -2;
}

.container .title {
  font-weight: bold;
  position: fixed;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  background-color: #659fcb;
}
.container .tab {
  position: fixed;
  text-align: center;
  line-height: 40px;
  margin: 0;
  margin-top: 40px;
  padding: 0;
  height: 40px;
  width: 100%;

  list-style: none;
  background-color: #f8f8f8;
  display: flex;
}
.container > .tab > li {
  flex: 1;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid #f8f8f8;
}

.container > .tab > li:nth-child(2) {
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.container > .searchBox {
  width: 100%;
  position: fixed;
  margin-top: 80px;
  height: 50px;
  background-color: #ebebeb;
  padding: 5px;
  box-sizing: border-box;
}
.icon {
  width: 20px;
  height: 20px;
  align-self: center;
  border-radius: 50%;
  background-color: #c7c7c7;
}

.footer {
  width: 100%;
  position: fixed;
  display: flex;
  background-color: #659fcb;
  height: 60px;
  bottom: 0;
  text-align: center;
}

.footer > li > .icon {
  margin: 0 auto;
  /* position: absolute; */
  /* top: 0;
    left: 50%;
    transform: translate(-50%,0); */
}
.footer > li {
  position: relative;
  color: white;
  font-size: 10px;
  position: relative;
  font-weight: bold;
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.footer > li:nth-child(2) {
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.list > li > .icon {
  position: absolute;
  right: 10px;
}
.active {
  background-color: #659fcb;
}
</style>
