<script setup lang="ts">
import TopHome from '~/components/Home/topHome.vue'

const router = useRouter()

const items = [
	{
		title: '8568522- Remera Basica',
		value: 1,
	},
	{
		title: '8568522- Remera Cuello',
		value: 2,
	},
	{
		title: '8568522- Remera Sport',

		value: 3,
	},
]

const items2 = [
	{
		title: 'Juan Perez',
		value: 1,
	},
	{
		title: 'Juan Perez',
		value: 2,
	},
	{
		title: 'Juan Perez',

		value: 3,
	},
]

const editItem = (item: any) => {
	console.log('Edit:', item)
}

const deleteItem = (item: any) => {
	console.log('Delete:', item)
}

const addNewItem = () => {
	console.log('Add New Item')
}
</script>

<template>
	<div class="sc-p-10">
		<h2 class="sc-text-2xl sc-font-light sc-mb-5">Buenas, Joel</h2>
		<div class="sc-flex sc-justify-between">
			<div class="sc-flex sc-items-stretch sc-gap-5 sc-justify-start sc-w-8/12">
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
			<div class="sc-flex sc-flex-col sc-w-4/12">
				<TopHome
					:items="items"
					:on-edit-item="editItem"
					:on-delete-item="deleteItem"
					:on-add-new-item="addNewItem"
					title="Prodcutos Destacados"
				/>
				<TopHome
					:items="items2"
					:on-edit-item="editItem"
					:on-delete-item="deleteItem"
					:on-add-new-item="addNewItem"
					title="Clientes Destacados"
				/>
			</div>
		</div>
		<h3 class="sc-text-xl sc-font-light sc-mt-10">Estadisticas</h3>
	</div>
</template>
