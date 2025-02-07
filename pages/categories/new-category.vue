<script setup lang="ts">
import { ref } from 'vue'

const router = useRouter()
const newCategory = ref('')
const categories = ref<{ title: string; value: number }[]>([])
let categoryId = 1

const addCategory = () => {
  if (newCategory.value.trim() === '') { return }
  categories.value.push({
    title: newCategory.value,
    value: categoryId++
  })
  newCategory.value = ''
}

const editItem = (item: any) => {
  const newTitle = prompt('Editar categoría:', item.title)
  if (newTitle) {
    const index = categories.value.findIndex(cat => cat.value === item.value)
    if (index !== -1) { categories.value[index].title = newTitle }
  }
}

const deleteItem = (item: any) => {
  categories.value = categories.value.filter(cat => cat.value !== item.value)
}

const goBack = () => {
  router.push('/categories/categories-list')
}
</script>

<template>
  <div class="sc-container sc-mx-auto sc-py-10 sc-max-w-lg">
    <div class="sc-flex sc-justify-between sc-items-center sc-mb-6">
      <p class="sc-font-bold sc-text-lg">
        Nueva Categoría
      </p>
      <v-btn size="small" rounded="lg" color="secondary" @click="goBack">
        Volver
      </v-btn>
    </div>

    <v-text-field
      v-model="newCategory"
      label="Nombre de la categoría"
      variant="outlined"
      class="sc-mb-4"
    />

    <v-btn block rounded="lg" color="primary" @click="addCategory">
      Agregar Categoría
    </v-btn>

    <div v-if="categories.length" class="sc-mt-6">
      <p class="sc-font-semibold sc-mb-2">
        Categorías agregadas:
      </p>
      <v-card class="sc-p-4 sc-w-full sc-rounded-sm">
        <v-list>
          <template v-for="(item, index) in categories" :key="index">
            <v-list-item class="sc-flex sc-items-center">
              <div class="sc-flex sc-justify-between sc-gap-4">
                <v-list-item-content>
                  <span class="sc-text-sm">{{ item.title }}</span>
                </v-list-item-content>
                <v-list-item-actions class="sc-flex sc-gap-2">
                  <v-btn size="x-small" rounded="lg" variant="outlined" color="primary" @click="editItem(item)">
                    Editar
                  </v-btn>
                  <v-btn size="x-small" rounded="lg" variant="outlined" color="red" @click="deleteItem(item)">
                    Eliminar
                  </v-btn>
                </v-list-item-actions>
              </div>
            </v-list-item>
            <v-divider v-if="index < categories.length - 1" :thickness="5" color="primary" class="!border-opacity-60" inset />
          </template>
        </v-list>
      </v-card>
    </div>
  </div>
</template>
