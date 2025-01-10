<script setup lang="ts">
import { ref } from 'vue'

const form = ref()
const username = ref('')
const password = ref('')

const handleSubmit = async () => {
	const { valid } = await form.value.validate()
	if (valid) {
		// Handle login logic here
		console.log('Login attempted with:', { username: username.value, password: password.value })
	}
}
</script>

<template>
	<v-container class="sc-flex sc-items-center sc-justify-center sc-min-h-screen sc-px-10">
		<v-card elevation="3" class="sc-px-6 sc-py-8 sc-w-6/12 sc-max-w-md">
			<div class="sc-flex sc-items-center sc-justify-center sc-mb-6">
				<v-icon icon="mdi-cog" class="sc-mr-2" />
				<h3 class="sc-text-center sc-mb-0">AdminEase</h3>
			</div>

			<v-form ref="form" @submit.prevent="handleSubmit">
				<div class="sc-flex sc-flex-col sc-px-5 sc-mx-6">
					<v-text-field
						v-model="username"
						label="Username"
						placeholder="Enter your username"
						variant="outlined"
						density="comfortable"
						class="sc-mb-4"
						color="primary"
						:rules="[(v) => !!v || 'Username is required']"
					/>

					<v-text-field
						v-model="password"
						label="Password"
						placeholder="Enter your password"
						variant="outlined"
						type="password"
						density="comfortable"
						class="sc-mb-6"
						color="primary"
						:rules="[(v) => !!v || 'Password is required']"
					/>
				</div>

				<v-btn type="submit" block color="black" class="sc-text-none sc-py-2 !sc-w-5">Sign In</v-btn>
			</v-form>
		</v-card>
	</v-container>
</template>
