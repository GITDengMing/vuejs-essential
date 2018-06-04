import Vue from 'vue';
import validator from './validator';
import dropdown from './dropdown'
// 引入 title.js 的默认值
import title from './title'

const directives = {
    validator,
    title,
    dropdown
}
for (const [key,value] of Object.entries(directives)) {
    Vue.directive(key, value);//注册全局指令
}