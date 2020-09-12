<template>
	<div class="wrapper" id="enter">
		<h1 class="caption">Ready for a great User experience?</h1>
		<p class="additive">Bring your media to the next level!</p>
		<div class="inner">
			<router-link tag="button" class="rectangle rectangle_enter" v-show="auth" to="/signup">Sign Up</router-link>
			<router-link tag="button" class="rectangle rectangle_enter" v-show="!auth" to="/signin">Sign In</router-link>
			<button class="round" @click="auth = !auth" aria-label="Change"></button>
		</div>
		<img src="../svg/enter-bg.svg" class="background" alt="background">
	</div>
</template>

<script>
export default {
	name: 'enter',
	data() {
		return {
			auth: true
		}
	}
}
</script>

<style lang="scss">
#enter {
	.round {
		margin-left: 16px;
	}
}
</style>
