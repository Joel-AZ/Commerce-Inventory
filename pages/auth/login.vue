<script setup lang="ts">
import { useToast } from 'vue-toastification'

const toast = useToast()
const authStore = useAuthStore()

definePageMeta({
  layout: 'auth'
})

const type = ref<string>('password')
const fields = ref({
  email: '',
  password: ''
})

const changePasswordType = () => {
  if (type.value === 'password') { type.value = 'text' } else { type.value = 'password' }
}

const login = async () => {
  try {
    await authStore.login(fields.value.email, fields.value.password)
  } catch (error: any) {
    toast.error(error.toString())
  }
}

const registerOwner = () => {
  return navigateTo({ name: 'auth-register-owner' })
}
</script>

<template>
  <div class="sc-flex sc-w-full">
    <div class="sc-w-8/12 sc-p-5">
      <v-card class="!sc-rounded-3xl sc-mt-5 sc-p-5 sc-w-full">
        <div class="!sc-px-10 sc-mx-10 sc-my-2">
          <div class="sc-flex sc-items-end sc-justify-end" />
          <v-form class="sc-p-5" @submit.prevent="login">
            <label class="sc-text-black">Correo electrónico</label>
            <v-text-field
              v-model="fields.email"
              variant="solo"
              color="primary"
              prepend-inner-icon="mdi-email-outline"
              class="sc-mt-2"
              type="email"
              placeholder="Correo electrónico"
            />
            <label class="sc-text-black">Contraseña</label>
            <v-text-field

              v-model="fields.password"
              :type="type"
              variant="solo"
              color="primary"
              prepend-inner-icon="mdi-lock-outline"
              class="sc-mt-2"
              placeholder="Contraseña"
              append-inner-icon="mdi-eye-outline"
              @click:append-inner="changePasswordType"
            />
            <v-btn type="submit" block class="sc-my-5 !sc-rounded-lg !sc-py-6" color="primary">
              Iniciar Sesión
            </v-btn>
          </v-form>

          <div class="sc-flex sc-flex-col sc-items-center sc-py-3">
            <p class="sc-text-black sc-text-center sc-mt-5 sc-leading-7">
              ¿Has olvidado tu contraseña? <br>
            </p>
            <div class="sc-text-primary sc-font-bold sc-cursor-pointer">
              Recuperar contraseña
            </div>
            <p class="sc-text-black sc-text-center sc-mt-5 sc-leading-7">
              ¿Aún no te has registrado?
              <br>
            </p>
            <div class="sc-text-primary sc-font-bold sc-cursor-pointer" @click="registerOwner">
              Crea tu cuenta aquí
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>
