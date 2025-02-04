<script setup>
const route = useRouter()

const drawer = ref(true)
const rail = ref(true)

const items = [
  { text: 'Links Management', icon: 'mdi-link', link: '/home' },
  {
    text: 'Listar Clientes',
    icon: 'mdi-text-account',
    link: 'client/client-list'
  },
  {
    text: 'Nuevo Cliente',
    icon: 'mdi-account-plus-outline',
    link: 'client/new-client'
  },
  {
    text: 'Productos',
    icon: 'mdi-clipboard-list-outline',
    link: 'product/product-list'
  },
  {
    text: 'Nuevo Productos',
    icon: 'mdi-tag-plus',
    link: 'product/new-procuct'
  },

  { text: 'Settings', icon: 'mdi-cog', notifications: 8, link: '/subastas' }
]
</script>

<template>
  <v-navigation-drawer
    :model-value="true"
    app
    color="#f8f9fa"
    :rail="rail"
    width="300"
    :mini-variant="true"
    @click="rail = false"
  >
    <div class="sc-flex sc-flex-col sc-justify-between sc-h-full">
      <div>
        <v-img
          src="https://i.pinimg.com/originals/a1/5f/51/a15f5117759cd710fae6ab2461250f4a.png"
          width="150"
          height="100"
          contain
          :class="[rail ? 'gp-h-14 gp-ml-1 ' : 'gp-mx-auto gp-my-5']"
          @click="route.push('/')"
        />

        <v-list density="compact">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            active-class="sc-bg-primary sc-rounded"
            :to="item.link"
          >
            <template #prepend>
              <v-icon :icon="item.icon" />
            </template>

            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>

      <v-spacer />
    </div>

    <template #append>
      <v-btn variant="text" icon class="nb-float-right" @click.stop="rail = !rail">
        <v-icon :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'" />
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>
