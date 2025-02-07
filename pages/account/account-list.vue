<script setup lang="ts">
const router = useRouter()

const users = [
  {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    rol: 'Admin',

    id: 1
  },
  {
    name: 'María González',
    email: 'maria.gonzalez@example.com',
    rol: 'Admin',
    id: 2
  },
  {
    name: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@example.com',
    rol: 'Vendedor',

    id: 3
  }
]

const editUser = (user: any) => {
  console.log('Edit:', user.name)
}

const deleteUser = (user: any) => {
  console.log('Delete:', user)
}
</script>

<template>
  <div>
    <div class="sc-flex sc-justify-between sc-py-6">
      <p class="sc-font-bold sc-text-lg">
        Lista de Usuarios
      </p>

      <v-btn size="small" rounded="lg" color="primary" @click="() => router.push('/account/new-account')">
        Agregar nuevo Usuario
      </v-btn>
    </div>
    <div class="sc-flex sc-flex-col sc-justify-center sc-py-6">
      <v-card class="sc-p-4 sc-w-full sc-rounded-sm">
        <v-list>
          <template v-for="(user, index) in users" :key="index">
            <v-list-item class="sc-flex sc-items-center">
              <div class="sc-flex sc-justify-between sc-gap-4 sc-w-full">
                <v-list-item-content>
                  <span class="sc-text-sm sc-font-semibold">{{ user.name }}</span>

                  <span>
                    -
                  </span>
                  <span class="sc-text-xs sc-text-gray-500">{{ user.email }}</span>
                  <span>
                    -
                  </span>
                  <span class="sc-text-xs sc-font-bold">{{ user.rol }}</span>
                </v-list-item-content>
                <v-list-item-actions class="sc-flex sc-gap-2">
                  <v-btn size="x-small" rounded="lg" variant="outlined" color="primary" @click="editUser(user)">
                    Editar
                  </v-btn>
                  <v-btn size="x-small" rounded="lg" variant="outlined" color="red" @click="deleteUser(user)">
                    Eliminar
                  </v-btn>
                </v-list-item-actions>
              </div>
            </v-list-item>
            <v-divider
              v-if="index < users.length - 1"
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
