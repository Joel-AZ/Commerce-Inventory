<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
	name: '',
	lastName: '',
	email: '',
	phoneNumber: '',
	password: '',
})

const handleSubmit = () => {
	console.log('Form submitted:', form.value)
}
</script>

<template>
	<div class="sc-flex sc-items-center sc-justify-center sc-from-teal-400">
		<v-container class="sc-max-w-4xl sc-w-full sc-flex sc-rounded-l sc-overflow-hidden">
			<div
				md="6"
				class="sc-bg-gradient-to-br sc-from-teal-400 sc-to-teal-500 sc-p-12 sc-text-white sc-flex sc-flex-col sc-items-center sc-justify-center sc-w-full"
			>
				<div class="sc-text-center">
					<h1 class="sc-text-4xl sc-font-bold sc-mb-4">Bienvenido!</h1>
					<v-img src="https://i.pinimg.com/originals/a1/5f/51/a15f5117759cd710fae6ab2461250f4a.png" />
				</div>
			</div>

			<div class="sc-w-full">
				<h2 class="sc-text-3xl sc-font-bold sc-text-center sc-text-gray-800 sc-mb-10">Crea tu cuenta</h2>

				<v-form @submit.prevent="handleSubmit">
					<div class="sc-flex sc-flex-col sc-space-y-6">
						<div class="sc-flex sc-gap-5 sc-mt-10">
							<v-text-field
								v-model="form.name"
								label="Nombre"
								placeholder="Nombre"
								outlined
								prepend-inner-icon="mdi-account"
								class="sc-w-full sc-rounded-lg"
								required
							/><v-text-field
								v-model="form.lastName"
								label="Apellido"
								placeholder="Apellido"
								outlined
								prepend-inner-icon="mdi-account"
								class="sc-w-full sc-rounded-lg"
								required
							/>
						</div>
						<v-text-field
							v-model="form.email"
							label="Email"
							placeholder="juanperez@gmail.com"
							outlined
							prepend-inner-icon="mdi-email"
							class="sc-w-full sc-rounded-lg"
							type="email"
							required
						/><v-text-field
							v-model="form.phoneNumber"
							label="Celular"
							placeholder="ej:0981 000 000"
							outlined
							prepend-inner-icon="mdi-phone"
							class="sc-w-full sc-rounded-lg"
							required
						/>
						<v-text-field
							v-model="form.password"
							label="Password"
							placeholder="Enter your password"
							outlined
							prepend-inner-icon="mdi-lock"
							class="sc-w-full sc-rounded-lg"
							type="password"
							required
						/>
					</div>
					<v-btn
						type="submit"
						color="teal"
						class="sc-w-full sc-py-3 sc-text-white sc-rounded-lg sc-hover-bg-teal-600 sc-transition-colors sc-duration-300"
					>
						SIGN UP
					</v-btn>
				</v-form>
			</div>
		</v-container>
	</div>
</template>
