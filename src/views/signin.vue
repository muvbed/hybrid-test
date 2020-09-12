<template>
	<div class="wrapper" id="signin">
		<h1 class="caption">Sign In</h1>
		<form class="shell" @submit.prevent="signin(true)">
			<div class="group group_sign">
				<span class="group__name">Email</span>
				<input type="text" class="group__field" id="email" placeholder="Email" autocomplete="email" @input="signin()">
			</div>
			<div class="group group_sign">
				<span class="group__name">Password</span>
				<div class="group__inner">
					<button type="button" class="group__pass" :class="{ group__pass_hide: !pass1 }" @click="pass1 = !pass1" aria-label="Hide / Show"></button>
					<input :type="pass1 ? 'password' : 'text'" class="group__field" id="passwordOne" placeholder="Password" autocomplete="new-password" @input="signin()">
				</div>
			</div>
			<button class="rectangle rectangle_sign rectangle_incomplete">Sign In</button>
		</form>
		<p class="question question_sign">Don’t have an account yet?</p>
		<router-link class="link" to="/signup">Sign Up</router-link>
		<button class="rectangle rectangle_wrong">Wrong email or password</button>
	</div>
</template>

<script>
export default {
	name: 'signin',
	data() {
		return {
			pass1: true
		}
	},
	methods: {
		signin(onlySubmit = false) {
			let conditions = [
					document.getElementById("email").value.match(/^[\wа-яё]((-?[\wа-яё])?)+@[\wа-яё]+\.[a-zа-яё]{2,}$/i),
					document.getElementById("passwordOne").value.match(/(?=.*[^\w\sа-яёА-ЯЁ])(?=(.*[A-ZА-ЯЁ]){2,})[^\s]{8,}$/g)
				];

			if (!onlySubmit) {
				conditions.every(elem => elem) ? document.querySelector(".rectangle").classList.remove("rectangle_incomplete") : document.querySelector(".rectangle").classList.add("rectangle_incomplete");
			} else {
				let errorCount = conditions.reduce((result, elem, i) => {
					document.querySelectorAll(".group")[i].classList.remove("group_error");

					if (!elem) {
						document.querySelectorAll(".group")[i].classList.add("group_error");
						document.querySelector(".rectangle_wrong").classList.add("rectangle_show");
						result++;
					}

					return result;
				}, 0);

				if (errorCount == 0) {
					this.$store.dispatch('setData', { email: document.getElementById("email").value, password: document.getElementById("passwordOne").value });
					this.$router.push('/mainframe');
				}
			}
		}
	}
}
</script>
