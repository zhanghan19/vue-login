<template>
	<div>
		<div class="qrcode" ref="qrCodeUrl"></div>
	</div>
</template>

<script>
	import QRCode from 'qrcodejs2'
	export default {
		methods: {
			creatQrCode() {
			  var qrcode = new QRCode(this.$refs.qrCodeUrl, {
			      text: 'http://nanozh.com/',
			      width: 100,
			      height: 100,
			      // correctLevel: QRCode.CorrectLevel.H
			 })
			} 
		},
		mounted() {
			this.creatQrCode()
		}
	}
</script>

<style>
</style>
