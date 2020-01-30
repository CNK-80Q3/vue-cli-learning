<template>
  <div>
    <h1>个人信息</h1>
    <p>这里是个人信息。。。</p>
    <ul>
      <li>姓名：{{$route.query.name}}</li>
      <li>年龄：{{$route.query.age}}</li>
      <li>身高：{{$route.query.height}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Profile',
  created () {
    console.log('Profile created')
  },
  destroyed () {
    console.log('Profile destroyed')
  }
}
</script>
