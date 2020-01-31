export default {
  // asyncUpdateInfo(context, payload) {
  //   // 使用setTimeout模拟异步操作，actions触发mutations里面对应的方法，再去改变state
  //   setTimeout(() => {
  //     context.commit({
  //       type: 'asyncChangeInfo',
  //       name: 'payload的name'
  //     })
  //     // 回调payload里传过来的success方法，达到通知修改信息的目的，但是这种做法不够优雅
  //     console.log(payload.height)
  //     payload.success()
  //   }, 3000)
  // },
  // 优雅的通知信息的方法：
  asyncUpdateInfo(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit({
          type: 'asyncChangeInfo',
          name: 'payload的name'
        })
      }, 3000);
      resolve('success message')
    })
  }
}