<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="page">
      <!-- 현재 라우트에 맞는 컴포넌트가 렌더링됩니다. -->
      <router-view></router-view>
    </transition>
    
  </div>
</template>
<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
body{
  padding:0;
  margin:0;
}
a{
  color: #34495e;
  text-decoration: none;
}
a:hover{
  color:#42b883;
}
a.router-link-exact-active{
  text-decoration: underline;
}

.page-enter-active, .page-leave-active{
  transition: opacity .5s;
}
.page-enter, .page-leave-to{
  opacity: 0;
}
</style>
