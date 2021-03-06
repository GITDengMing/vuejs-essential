import swal from 'sweetalert2'

export default {
  install: (Vue) => {
    // sweetalert2 的设置默认配置的方法
    swal.setDefaults({
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(140,212,245)',
      cancelButtonColor: 'rgb(193,193,193)'
    })

    // 添加全局方法
    Vue.swal = swal
    // 添加实例方法
    //添加实例方法时，方法名前面的 $ 不是必须的，但我们推荐加上它，以避免和组件定义的属性和方法产生冲突。
    Vue.prototype.$swal = swal
  }
}