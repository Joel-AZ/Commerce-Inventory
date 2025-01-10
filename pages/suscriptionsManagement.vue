<script setup lang="ts">
interface Plan {
	name: string
	status: 'Active' | 'Expired'
	renewalDate: string
}

const plans: Plan[] = [
	{
		name: 'Premium Plan',
		status: 'Active',
		renewalDate: '2023-12-01',
	},
	{
		name: 'Basic Plan',
		status: 'Expired',
		renewalDate: '2023-11-15',
	},
	{
		name: 'Enterprise Plan',
		status: 'Active',
		renewalDate: '2024-01-05',
	},
	{
		name: 'Enterprise Plan',
		status: 'Active',
		renewalDate: '2024-01-05',
	},
]

const formatDate = (date: string) => {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	})
}

const handleDetails = (plan: Plan) => {
	console.log('View details for:', plan.name)
}

const handleModify = (plan: Plan) => {
	console.log('Modify:', plan.name)
}

const handleCancel = (plan: Plan) => {
	console.log('Cancel:', plan.name)
}
</script>

<template>
	<div>
		<div class="sc-flex sc-justify-between sc-py-6">
			<P class="sc-font-bold sc-text-lg"> Manage Subscriptions </P>

			<v-btn size="small" rounded="lg" color="primary" @click="deleteItem(item)"> Add New Subscription </v-btn>
		</div>
		<div class="sc-flex sc-justify-center sc-py-6">
			<suscription-plans
				:plans="plans"
				:formatDate="formatDate"
				:handleDetails="handleDetails"
				:handleModify="handleModify"
				:handleCancel="handleCancel"
			/>
		</div>
	</div>
</template>
