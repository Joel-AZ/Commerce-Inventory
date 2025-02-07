<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  birthdate: '',
  address: '',
  role: '',
  password: '',
  confirmPassword: '',
  emergencyContact: '',
  medicalConditions: '',
  specialAccommodations: ''
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const passwordError = ref('')

const handleSubmit = () => {
  if (formData.value.password !== formData.value.confirmPassword) {
    passwordError.value = 'Las contraseñas no coinciden'
    return
  }
  passwordError.value = ''
  console.log('Usuario creado:', formData.value)
}
</script>

<template>
  <v-container class="sc-pa-8 sc-rounded-xl" max-width="600px">
    <div class="sc-flex sc-align-center sc-mb-6">
      <v-avatar size="50">
        <img src="https://via.placeholder.com/50" alt="Profile">
      </v-avatar>
      <div class="ml-4">
        <h2 class="text-h6 font-weight-bold">
          Nuevo Usuario
        </h2>
        <v-btn text color="primary">
          Cargar Foto
        </v-btn>
      </div>
    </div>

    <v-form class="sc-flex sc-flex-col sc-gap-5" @submit.prevent="handleSubmit">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.firstName" label="Nombre" hide-details="auto" required />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.lastName" label="Apellido" hide-details="auto" required />
        </v-col>
      </v-row>

      <v-text-field v-model="formData.email" label="Correo Electrónico" type="email" hide-details="auto" required />
      <v-text-field v-model="formData.phone" label="Teléfono" type="tel" hide-details="auto" />

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.birthdate" label="Fecha de Nacimiento" type="date" hide-details="auto" />
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="formData.role"
            :items="['Administrador', 'Editor', 'Usuario']"
            label="Rol"
            hide-details="auto"
            required
          />
        </v-col>
      </v-row>

      <v-text-field v-model="formData.address" label="Dirección" hide-details="auto" />

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.password"
            label="Contraseña"
            :type="showPassword ? 'text' : 'password'"
            hide-details="auto"
            required
            :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append-inner="showPassword = !showPassword"
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="formData.confirmPassword"
            label="Confirmar Contraseña"
            :type="showConfirmPassword ? 'text' : 'password'"
            hide-details="auto"
            required
            :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :error="!!passwordError"
            :error-messages="passwordError"
            @click:append-inner="showConfirmPassword = !showConfirmPassword"
          />
        </v-col>
      </v-row>

      <v-text-field v-model="formData.emergencyContact" label="Contacto de Emergencia" hide-details="auto" />

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.medicalConditions" label="Condiciones Médicas" hide-details="auto" />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field v-model="formData.specialAccommodations" label="Acomodaciones Especiales" hide-details="auto" />
        </v-col>
      </v-row>

      <v-btn class="mt-4" block color="primary" large type="submit">
        Guardar Usuario
      </v-btn>
    </v-form>
  </v-container>
</template>
