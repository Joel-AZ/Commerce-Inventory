<script setup></script>

<template>
	<v-app>
		<nav-bar-container />
		<v-main class="sc-bg-[#F6F2FF]">
			<div class="sc-p-10">
				<slot />
			</div>
		</v-main>
	</v-app>
</template>
