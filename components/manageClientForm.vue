<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
	displayName: '',
	businessEmail: '',
	contactNumber: '',
	birthdate: '',
	countryOfOrigin: '',
	languages: '',
	address: '',
	emergencyContact: '',
	medicalConditions: '',
	specialAccommodations: '',
})

const rules = {
	required: (value: string) => !!value || 'This field is required',
	email: (value: string) => {
		const pattern = /^[^@]+@[^@]+\.[^@]+$/
		return pattern.test(value) || 'Invalid email address'
	},
	phone: (value: string) => {
		const pattern = /^[+]*[0-9]{1,4}[\s0-9]*$/
		return pattern.test(value) || 'Invalid phone number'
	},
}

const handleSubmit = () => {
	console.log('Form submitted:', formData.value)
}
</script>

<template>
	<v-container class="sc-pa-8 sc-rounded-xl" max-width="600px">
		<div class="sc-flex sc-align-center sc-mb-6">
			<v-avatar size="50">
				<img src="https://via.placeholder.com/50" alt="Profile" />
			</v-avatar>
			<div class="ml-4">
				<h2 class="text-h6 font-weight-bold">Nuevo Client</h2>
				<v-btn text color="primary">Cargar Foto</v-btn>
			</div>
		</div>

		<v-form class="sc-flex sc-flex-col sc-gap-5" @submit.prevent="handleSubmit">
			<v-text-field
				v-model="formData.displayName"
				:rules="[rules.required]"
				label="Change Display Name"
				hide-details="auto"
			></v-text-field>

			<v-text-field
				v-model="formData.businessEmail"
				:rules="[rules.required, rules.email]"
				label="Business Email"
				hide-details="auto"
			></v-text-field>

			<v-text-field
				v-model="formData.contactNumber"
				:rules="[rules.required, rules.phone]"
				label="Contact Number"
				hide-details="auto"
			></v-text-field>

			<v-text-field v-model="formData.birthdate" label="Birthdate" type="date" hide-details="auto"></v-text-field>

			<v-text-field v-model="formData.address" label="Address" hide-details="auto"></v-text-field>

			<v-text-field
				v-model="formData.emergencyContact"
				:rules="[rules.required, rules.phone]"
				label="Emergency Contact"
				hide-details="auto"
			></v-text-field>

			<v-row>
				<v-col cols="12" md="6">
					<v-text-field
						v-model="formData.medicalConditions"
						label="Medical Conditions"
						hide-details="auto"
					></v-text-field>
				</v-col>
				<v-col cols="12" md="6">
					<v-text-field
						v-model="formData.specialAccommodations"
						label="Special Accommodations"
						hide-details="auto"
					></v-text-field>
				</v-col>
			</v-row>

			<!-- Submit Button -->
			<v-btn class="mt-4" block color="primary" large type="submit"> Save </v-btn>
		</v-form>
	</v-container>
</template>
