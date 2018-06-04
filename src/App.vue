<template>
  <div id="wrap">
    <TheHeader/>
    <div id="main-container" class="container main-container">
      <router-view/><!-- <router-view> 是一个功能组件，它会渲染路径匹配到的视图组件 -->
    </div>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
import TheFooter from '@/components/layouts/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
//这些变量用于替换bootstrap的默认样式值
$container-large-desktop: 1200px;
$btn-primary-bg: #00b5ad;
$btn-primary-border: #00b5ad;
$label-primary-bg: #00b5ad;
$pagination-active-bg: #00b5ad;
$pagination-active-border: #00b5ad;
$pagination-color: #00b5ad;
$input-border-focus: #00b5ad;
$link-color: #12c4c5;
$link-hover-color: #22ddde;

$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
$fa-font-path: "~font-awesome/fonts/";
@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
@import "~font-awesome/scss/font-awesome";
@import "./styles/main";
@import "./styles/extra";
@import 'simplemde/dist/simplemde.min.css';
@import 'highlight.js/styles/paraiso-dark.css';
@import "animate.css/animate.min.css";

body > .container { margin-top: 15px;}
</style>