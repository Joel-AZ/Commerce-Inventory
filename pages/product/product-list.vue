<script setup lang="ts">
const headers = [
	{ title: 'Name', key: 'name' },
	{ title: 'Code', key: 'code' },
	{ title: 'Quantity', key: 'quantity' },
	{ title: 'Purchase Price', key: 'purchasePrice' },
	{ title: 'Sale Price', key: 'salePrice' },
	{ title: 'Location', key: 'location' },
	{ title: 'Action', key: 'action', sortable: false },
]

const items = [
	{
		id: 1,
		name: 'Wireless Headphones',
		code: 'WH-001',
		quantity: 25,
		purchasePrice: 50,
		salePrice: 75,
		location: 'Aisle 3, Shelf B',
	},
	{
		id: 2,
		name: 'Bluetooth Speaker',
		code: 'BS-002',
		quantity: 40,
		purchasePrice: 30,
		salePrice: 45,
		location: 'Aisle 1, Shelf C',
	},
	{
		id: 3,
		name: 'USB-C Charger',
		code: 'UC-003',
		quantity: 60,
		purchasePrice: 10,
		salePrice: 15,
		location: 'Aisle 2, Shelf A',
	},
	{
		id: 4,
		name: 'Smartwatch Band',
		code: 'SB-004',
		quantity: 100,
		purchasePrice: 5,
		salePrice: 10,
		location: 'Aisle 4, Shelf D',
	},
	{
		id: 5,
		name: 'Gaming Mouse',
		code: 'GM-005',
		quantity: 15,
		purchasePrice: 25,
		salePrice: 40,
		location: 'Aisle 5, Shelf E',
	},
]

const handleActionClick = (item: any) => {
	console.log('Selected item:', item)
}
</script>

<template>
	<DataTable
		title="Products"
		:headers="headers"
		:items="items"
		:items-per-page="5"
		action-key="action"
		action-text="View Details"
		@action-click="handleActionClick"
	/>
</template>
