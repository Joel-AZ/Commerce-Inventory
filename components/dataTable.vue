<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

interface TableProps {
	title: string
	headers: { text: string; value: string }[]
	items: Record<string, any>[]
	itemsPerPage: number
	actionKey: string
	actionText: string
}

const props = defineProps<TableProps>()
const search = ref('')

const emit = defineEmits<{
	(e: 'action-click', item: Record<string, any>): void
}>()

const onAction = (item: Record<string, any>) => {
  emit('action-click', item)
}

// const filteredItems = computed(() =>
// 	props.items.filter((item: any) =>
// 		Object.values(item).some((value) => String(value).toLowerCase().includes(search.value.toLowerCase()))
// 	)
// )
</script>

<template>
  <v-card>
    <v-card-title>{{ props.title }}</v-card-title>
    <div class="sc-grid sc-grid-cols-3 sc-gap-6 sc-p-6 sc-w-full">
      <div class="sc-bg-white sc-rounded-xl sc-shadow-lg sc-p-6 sc-border-black sc-border-1 sc-w-[70%]">
        <h3 class="sc-text-lg sc-font-bold sc-text-gray-900 sc-mb-4">
          Deudas
        </h3>

        <div class="sc-space-y-2 sc-mb-6">
          <div class="sc-flex sc-items-center sc-text-sm sc-text-gray-600">
            <span class="mr-2">Cleintes en mora :</span>
            <span :class="'Active' === 'Active' ? 'sc-text-green-600' : 'sc-text-red-600'"> test </span>
          </div>

          <div class="sc-text-sm sc-text-gray-600">
            Deuda total: 60
          </div>
        </div>
      </div>
    </div>

    <v-data-table
      :headers="props.headers"
      :items="props.items"
      :items-per-page="props.itemsPerPage"
      :search="search"
      item-value="id"
      class="elevation-1 sc-bg-black"
    >
      <template #[`item.${props.actionKey}`]="{ item }">
        <v-btn size="x-small" rounded="lg" variant="outlined" color="primary" @click="onAction(item)">
          {{ props.actionText }}
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>
