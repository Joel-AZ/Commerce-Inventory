<script setup lang="ts">
const router = useRouter()

const items = [
  {
    title: 'Link 1 - https://example.com',
    value: 1
  },
  {
    title: 'Link 2 - https://another-example.com',
    value: 2
  },
  {

    title: 'Link 3 - https://yetanotherexample.com',
    value: 3
  }
]

const editItem = (item: any) => {
  console.log('Edit:', item.title)
}

const deleteItem = (item: any) => {
  console.log('Delete:', item)
}
</script>

<template>
  <div>
    <div class="sc-flex sc-justify-between sc-py-6">
      <P class="sc-font-bold sc-text-lg">
        Lista de Categorias
      </P>

      <v-btn size="small" rounded="lg" color="primary" @click="() => router.push('/categories/new-category')">
        Agregar nueva Categoria
      </v-btn>
    </div>
    <div class="sc-flex sc-flex-col sc-justify-center sc-py-6">
      <v-card class="sc-p-4 sc-w-full sc-rounded-sm">
        <v-list>
          <template v-for="(item, index) in items" :key="index">
            <v-list-item class="sc-flex sc-items-center">
              <div class="sc-flex sc-justify-between sc-gap-4">
                <v-list-item-content>
                  <span class="sc-text-sm">{{ item.title }}</span>
                </v-list-item-content>
                <v-list-item-actions class="sc-flex sc-gap-2">
                  <v-btn size="x-small" rounded="lg" variant="outlined" color="primary" @click="editItem(item)">
                    Edit
                  </v-btn>
                  <v-btn size="x-small" rounded="lg" variant="outlined" color="primary" @click="deleteItem(item)">
                    Delete
                  </v-btn>
                </v-list-item-actions>
              </div>
            </v-list-item>
            <v-divider
              v-if="index < items.length - 1"
              :thickness="5"
              color="primary"
              class="!border-opacity-60"
              inset
            />
          </template>
        </v-list>
      </v-card>
    </div>
  </div>
</template>
