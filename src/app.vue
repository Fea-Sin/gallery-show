<style scoped>
	@import 'styles/common.css';
</style>
<template>
	<div>
		<h1 class="test">HELLO WORLD</h1>
		<div class="main">
			<img src="/src/images/hsf.png">
			<h5 id="test">{{message}}</h5>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				message: 'he sheng fu'
			}
		},
		mounted () {

		},
		beforeDestroy () {

		},
		methods: {

		}
	}
</script>