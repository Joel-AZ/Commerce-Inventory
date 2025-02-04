<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

defineProps({
  title: { type: String },
  items: {
    type: Array,
    default: () => []
  },
  onEditItem: {
    type: Function
  },
  onDeleteItem: {
    type: Function
  },
  onAddNewItem: {
    type: Function
  }
})

// Emitir eventos si es necesario
defineEmits(['edit', 'delete', 'add'])
</script>

<template>
  <div class="sc-flex sc-flex-col sc-justify-center sc-py-6 sc-w-full">
    <div class="sc-flex sc-justify-between">
      <p class="sc-font-bold sc-text-lg">
        {{ title }}
      </p>
      <!-- <v-btn size="small" rounded="lg" color="primary" @click="onAddNewItem()">Nuevo Producto</v-btn> -->
    </div>

    <div class="sc-flex sc-flex-col sc-justify-center sc-py-6 sc-w-full">
      <v-card class="sc-p-4 sc-w-full sc-rounded-sm">
        <v-list>
          <template v-for="(item, index) in items" :key="index">
            <v-list-item class="sc-flex sc-items-center">
              <div class="sc-flex sc-justify-between sc-gap-4">
                <v-list-item-content>
                  <span class="sc-text-sm">{{ item.title }}</span>
                </v-list-item-content>
                <v-list-item-actions class="sc-flex sc-gap-2">
                  <v-btn size="x-small" rounded="lg" variant="outlined" color="primary" @click="onEditItem(item)">
                    Edit
                  </v-btn>

                  <v-btn size="x-small" rounded="lg" variant="outlined" color="primary" @click="onDeleteItem(item)">
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
