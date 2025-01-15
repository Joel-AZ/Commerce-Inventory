<script setup lang="ts">
import { defineProps } from 'vue'

interface cardProps {
	icon: String
	title: String
	description: String
}

const props = defineProps<cardProps>()
</script>

<template>
	<v-card v-ripple class="!sc-rounded-2xl">
		<v-card-actions class="sc-mx-2 sc-mt-2">
			<v-icon color="primary" size="40">{{ props.icon }}</v-icon>
		</v-card-actions>
		<v-card-item>
			<div>
				<div class="text-h6 mb-1">{{ props.title }}</div>
				<div class="text-caption">
					{{ props.description }}
				</div>
			</div>
		</v-card-item>
	</v-card>
</template>
