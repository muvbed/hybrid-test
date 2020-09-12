<template>
	<div class="wrapper" id="mainframe">
		<h1 class="caption">Hello, {{ getData }}!</h1>
		<img src="../svg/mainframe-bg.svg" class="background" alt="background">
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'mainframe',
	computed: {
		...mapGetters([
			'getData'
		])
	}
}
</script>

<style lang="scss">
#mainframe {
	.caption {
		margin-top: 158px;
	}
}
</style>
