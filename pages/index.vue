<script setup lang="ts">
const router = useRouter()
</script>

<template>
	<div class="sc-p-10">
		<h2 class="sc-text-2xl sc-font-light sc-mb-5">Buenas, Joel</h2>
		<div class="sc-flex sc-items-stretch sc-gap-5 sc-justify-start">
			<HomeCard
				icon="mdi-plus-circle-outline"
				title="Productos"
				description="Puedes agregar Productos aqui"
				@click="router.push('/profile')"
			/>
			<HomeCard
				icon="mdi-plus-circle-outline"
				title="Clientes"
				description="Agregar nuevo cliente"
				@click="router.push('/profile')"
			/>
		</div>
		<h3 class="sc-text-xl sc-font-light sc-mt-10">Estadisticas</h3>
	</div>
</template>
