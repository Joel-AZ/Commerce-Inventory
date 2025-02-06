<script setup lang="ts">
import { ref } from 'vue'

const productData = ref({
  name: '',
  code: '',
  quantity: 0,
  purchasePrice: 0,
  salePrice: 0,
  location: '',
  description: '',
  category: '',
  sku: '',
  supplier: '',
  action: ''
})

const handleSubmit = () => {
  console.log('Producto agregado:', productData.value)
}
</script>

<template>
  <v-container class="sc-pa-8 sc-rounded-xl" max-width="600px">
    <div class="sc-flex sc-align-center sc-mb-6">
      <v-avatar size="50">
        <img src="https://via.placeholder.com/50" alt="Product">
      </v-avatar>
      <div class="ml-4">
        <h2 class="text-h6 font-weight-bold">
          Nuevo Producto
        </h2>
        <v-btn text color="primary">
          Agregar Imagen
        </v-btn>
      </div>
    </div>

    <v-form class="sc-flex sc-flex-col sc-gap-5" @submit.prevent="handleSubmit">
      <v-text-field v-model="productData.name" label="Name" hide-details="auto" />

      <v-text-field v-model="productData.code" label="Code" hide-details="auto" />

      <v-text-field
        v-model="productData.quantity"
        label="Cantidad"
        type="number"
        hide-details="auto"
      />

      <v-text-field
        v-model="productData.purchasePrice"
        label="Precio de Compra"
        type="number"
        hide-details="auto"
      />

      <v-text-field
        v-model="productData.salePrice"
        label="Precio de Venta"
        type="number"
        hide-details="auto"
      />

      <v-text-field v-model="productData.location" label="Location" hide-details="auto" />

      <v-textarea
        v-model="productData.description"
        label="Descripción"
        hide-details="auto"
      />

      <v-text-field
        v-model="productData.category"
        label="Categoría"
        hide-details="auto"
      />

      <v-text-field v-model="productData.sku" label="SKU" hide-details="auto" />

      <v-text-field
        v-model="productData.supplier"
        label="Proveedor"
        hide-details="auto"
      />

      <v-text-field v-model="productData.action" label="Action" hide-details="auto" />

      <v-btn class="mt-4" block color="primary" large type="submit">
        Guardar
      </v-btn>
    </v-form>
  </v-container>
</template>
