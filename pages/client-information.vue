<script setup lang="ts">
interface Plan {
	name: string
	status: 'Active' | 'Expired'
	renewalDate: string
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
		<div class="sc-py-6">
			<div class="sc-flex">
				<manage-client-form />
			</div>
		</div>
	</div>
</template>
