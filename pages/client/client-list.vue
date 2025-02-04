<script setup lang="ts">
const headers = [
  { title: 'Id', key: 'id' },
  { title: 'Nombre', key: 'fullName' },
  { title: 'Numero de celular', vakeylue: 'phoneNumber' },
  { title: 'Deuda Total', key: 'test1' },
  { title: 'Pagos', key: 'test2' },
  { title: 'Correo', key: 'email' },

  { title: 'Acción', key: 'action', sortable: false }
]

const items = [
  { id: 1, fullName: 'Juan Pérez', email: 'juan@example.com', phoneNumber: 98655622 },
  { id: 2, fullName: 'María López', email: 'maria@example.com', phoneNumber: 98655622 }
]

const handleActionClick = (item: any) => {
  console.log('Elemento seleccionado:', item)
}

const plans: Plan[] = [
  {
    name: 'Premium Plan',
    status: 'Active',
    renewalDate: '2023-12-01'
  },
  {
    name: 'Basic Plan',
    status: 'Expired',
    renewalDate: '2023-11-15'
  }
]
</script>

<template>
  <DataTable
    title="Clientes"
    :headers="headers"
    :items="items"
    :items-per-page="5"
    action-key="action"
    action-text="Ver Detalles"
    @action-click="handleActionClick"
  />
</template>
