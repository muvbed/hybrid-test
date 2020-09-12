<template>
	<div class="wrapper" id="signup">
		<h1 class="caption">Sign Up</h1>
		<form class="shell" @submit.prevent="signup(true)">
			<div class="group group_sign">
				<span class="group__name">Full name</span>
				<input type="text" class="group__field" id="name" placeholder="Full name" autocomplete="name" @input="signup()">
				<span class="group__error">Enter valid value</span>
			</div>
			<div class="group group_sign">
				<span class="group__name">Email</span>
				<input type="text" class="group__field" id="email" placeholder="Email" autocomplete="email" @input="signup()">
				<span class="group__error">Enter valid email</span>
			</div>
			<div class="group group_sign">
				<span class="group__name">Password</span>
				<div class="group__explain" :class="{ group__explain_show: info }">Password must contain 8+ symbols, 1 special and 2 capital letters</div>
				<button type="button" class="group__info" aria-label="Info" @click="info = !info"></button>
				<div class="group__inner">
					<button type="button" class="group__pass" :class="{ group__pass_hide: !pass1 }" @click="pass1 = !pass1" aria-label="Hide / Show"></button>
					<input :type="pass1 ? 'password' : 'text'" class="group__field" id="passwordOne" placeholder="Password" autocomplete="new-password" @input="signup()">
					<span class="group__error">Enter valid password</span>
				</div>
			</div>
			<div class="group group_sign">
				<span class="group__name">Repeat password</span>
				<div class="group__inner">
					<button type="button" class="group__pass" :class="{ group__pass_hide: !pass2 }" @click="pass2 = !pass2" aria-label="Hide / Show"></button>
					<input :type="pass2 ? 'password' : 'text'" class="group__field" id="passwordTwo" placeholder="Repeat password" autocomplete="new-password" @input="signup()">
					<span class="group__error">Enter valid password</span>
				</div>
			</div>
			<button class="rectangle rectangle_sign rectangle_incomplete">Sign Up</button>
		</form>
		<p class="question question_sign">Already have an account?</p>
		<router-link class="link" to="/signin">Sign In</router-link>
	</div>
</template>

<script>
export default {
	name: 'signup',
	data() {
		return {
			pass1: true,
			pass2: true,
			info: false
		}
	},
	methods: {
		signup(onlySubmit = false) {
			let conditions = [
					document.getElementById("name").value.match(/^[a-zа-яё]+((-[a-zа-яё]+)+)?(((\s[a-zа-яё]+)+((-[a-zа-яё]+)+)?)+)?$/i),
					document.getElementById("email").value.match(/^[\wа-яё]((-?[\wа-яё])?)+@[\wа-яё]+\.[a-zа-яё]{2,}$/i),
					document.getElementById("passwordOne").value.match(/(?=.*[^\w\sа-яёА-ЯЁ])(?=(.*[A-ZА-ЯЁ]){2,})[^\s]{8,}$/g),
					document.getElementById("passwordOne").value == document.getElementById("passwordTwo").value && document.getElementById("passwordTwo").value != ""
				];

			if (!onlySubmit) {
				conditions.every(elem => elem) ? document.querySelector(".rectangle").classList.remove("rectangle_incomplete") : document.querySelector(".rectangle").classList.add("rectangle_incomplete");
			} else {
				let errorCount = conditions.reduce((result, elem, i) => {
					document.querySelectorAll(".group")[i].classList.remove("group_error");

					if (!elem) {
						document.querySelectorAll(".group")[i].classList.add("group_error");
						result++;
					}

					return result;
				}, 0);

				if (errorCount == 0) {
					this.$store.dispatch('setData', { name: document.getElementById("name").value, email: document.getElementById("email").value, password: document.getElementById("passwordOne").value });
					this.$router.push('/mainframe');
				}
			}
		}
	},
	mounted() {
		window.addEventListener("mousedown", (e) => {
			e.target != document.querySelector(".group__explain") && e.target != document.querySelector(".group__info") && this.info ? this.info = false : '';
		})
	}
}
</script>
