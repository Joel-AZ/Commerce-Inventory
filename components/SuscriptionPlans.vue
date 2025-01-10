<script setup lang="ts">
import { defineProps } from 'vue'

interface Plan {
	name: string
	status: 'Active' | 'Expired'
	renewalDate: string
}

const props = defineProps<{
	plans: Plan[]
	formatDate: (date: string) => string
	handleDetails: (plan: Plan) => void
	handleModify: (plan: Plan) => void
	handleCancel: (plan: Plan) => void
}>()
</script>

<template>
	<div class="sc-grid sc-grid-cols-3 sc-gap-6 sc-p-6 sc-w-full">
		<div v-for="plan in plans" :key="plan.name" class="sc-bg-white sc-rounded-xl sc-shadow-lg sc-p-6">
			<h3 class="sc-text-lg sc-font-bold sc-text-gray-900 sc-mb-4">
				{{ plan.name }}
			</h3>

			<div class="sc-space-y-2 sc-mb-6">
				<div class="sc-flex sc-items-center sc-text-sm sc-text-gray-600">
					<span class="mr-2">Status:</span>
					<span :class="plan.status === 'Active' ? 'sc-text-green-600' : 'sc-text-red-600'">
						{{ plan.status }}
					</span>
				</div>

				<div class="sc-text-sm sc-text-gray-600">Renews on: {{ formatDate(plan.renewalDate) }}</div>
			</div>

			<div class="sc-flex sc-gap-6">
				<v-btn size="small" rounded="lg" variant="text" color="primary" @click="handleDetails(item)"> Details </v-btn
				><v-btn size="small" rounded="lg" variant="text" color="primary" @click="handleModify(item)"> Modify </v-btn
				><v-btn size="small" rounded="lg" variant="text" color="primary" @click="handleCancel(item)"> Cancel </v-btn>
			</div>
		</div>
	</div>
</template>
