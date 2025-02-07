<template>
  <div>
    <h2 class="sc-text-xl sc-font-bold sc-mb-10 sc-text-gray-500">
      Editar Datos Personales
    </h2>
    <v-form>
      <div class="md:sc-grid md:sc-grid-cols-2 md:sc-gap-5 sc-gap-2">
        <v-text-field variant="outlined" label="Nombre" required />
        <v-text-field variant="outlined" label="Apellido" required />
        <v-text-field variant="outlined" label="Email" required />
        <v-select
          label="Sexo"
          :items="['Masculino', 'Femenino', 'Otro']"
          variant="outlined"
        />
        <div class="sc-flex sc-items-center sc-justify-between">
          <v-autocomplete
            variant="outlined"
            label="Código de País"
            class="sc-w-4/12"
          />
          <v-text-field
            variant="outlined"
            label="Número"
            required
            class="sc-w-8/12"
          />
        </div>
      </div>
    </v-form>
    <v-btn color="primary" variant="outlined">
      GUARDAR CAMBIOS
    </v-btn>
  </div>
</template>
