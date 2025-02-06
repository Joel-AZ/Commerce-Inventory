<script setup lang="ts">
const headers = [
  { title: 'Nombre', key: 'name' },
  { title: 'Código', key: 'code' },
  { title: 'Cantidad', key: 'quantity' },
  { title: 'Precio de Compra', key: 'purchasePrice' },
  { title: 'Precio de Venta', key: 'salePrice' },
  { title: 'Ubicación', key: 'location' },
  { title: 'Descripción', key: 'description' },
  { title: 'Categoría', key: 'category' },
  { title: 'SKU', key: 'sku' },
  { title: 'Proveedor', key: 'supplier' },
  { title: 'Acción', key: 'action', sortable: false }
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
    description: 'Auriculares inalámbricos con cancelación de ruido',
    category: 'Electrónica',
    sku: 'SKU-WH-001',
    supplier: 'Proveedor A'
  },
  {
    id: 2,
    name: 'Bluetooth Speaker',
    code: 'BS-002',
    quantity: 40,
    purchasePrice: 30,
    salePrice: 45,
    location: 'Aisle 1, Shelf C',
    description: 'Altavoz bluetooth portátil',
    category: 'Electrónica',
    sku: 'SKU-BS-002',
    supplier: 'Proveedor B'
  },
  {
    id: 3,
    name: 'USB-C Charger',
    code: 'UC-003',
    quantity: 60,
    purchasePrice: 10,
    salePrice: 15,
    location: 'Aisle 2, Shelf A',
    description: 'Cargador USB-C rápido',
    category: 'Accesorios',
    sku: 'SKU-UC-003',
    supplier: 'Proveedor C'
  },
  {
    id: 4,
    name: 'Smartwatch Band',
    code: 'SB-004',
    quantity: 100,
    purchasePrice: 5,
    salePrice: 10,
    location: 'Aisle 4, Shelf D',
    description: 'Correa para smartwatch, material flexible',
    category: 'Accesorios',
    sku: 'SKU-SB-004',
    supplier: 'Proveedor D'
  },
  {
    id: 5,
    name: 'Gaming Mouse',
    code: 'GM-005',
    quantity: 15,
    purchasePrice: 25,
    salePrice: 40,
    location: 'Aisle 5, Shelf E',
    description: 'Ratón para juegos con alta precisión',
    category: 'Periféricos',
    sku: 'SKU-GM-005',
    supplier: 'Proveedor E'
  }
]

const handleActionClick = (item: any) => {
  console.log('Elemento seleccionado:', item)
}
</script>

<template>
  <DataTable
    title="Productos"
    :headers="headers"
    :items="items"
    :items-per-page="5"
    action-key="action"
    action-text="Ver Detalles"
    @action-click="handleActionClick"
  />
</template>
