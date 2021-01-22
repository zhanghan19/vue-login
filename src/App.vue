<template>
  <div id="app">
	<!-- <AppLogin/> -->
	<QrCode/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AppLogin from './components/AppLogin.vue'
import QrCode from './components/QrCode.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
	AppLogin,
	QrCode
  }
}
</script>

<style>

</style>
