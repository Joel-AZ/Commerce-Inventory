<script setup lang="ts"></script>
<template>
	<div
		class="sc-flex sc-gap-5 sc-flex-col-reverse sc-justify-center sc-items-center sc-content-center sc-mb-5 md:sc-gap-5 md:sc-flex md:sc-flex-row"
	>
		<div class="sc-w-full sc-justify-center sc-items-center sc-content-center md:sc-w-8/12">
			<form>
				<label for="default-search" class="sc-mb-2 sc-text-sm sc-font-medium sc-text-gray-900 sc-sr-only">
					Buscar
				</label>
				<div class="sc-relative">
					<div class="sc-absolute sc-inset-y-0 left-0 sc-flex sc-items-center sc-pl-3 sc-pointer-events-none">
						<svg
							class="sc-w-4 sc-h-4 sc-text-gray-500"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</div>
					<input
						id="default-search"
						type="search"
						class="block sc-w-full sc-p-4 sc-pl-10 sc-text-sm sc-text-gray-900 sc-border sc-border-primary sc-rounded-lg sc-bg-gray-50 sc-focus:primary sc-focus:primary"
						placeholder="Buscar"
						required
					/>
				</div>
			</form>
		</div>
		<div class="sc-flex sc-gap-5 md:sc-gap-5">
			<div class="sc-flex sc-items-center sc-content-center sc-justify-center sc-gap-4 sc-mr-4">
				<v-img
					src="https://i.pinimg.com/originals/a1/5f/51/a15f5117759cd710fae6ab2461250f4a.png"
					width="75"
					height="50"
					contain
				/>
			</div>

			<div class="sc-flex sc-justify-center sc-items-center sc-content-end sc-gap-2 md:sc-items-center">
				<v-divider class="border-opacity-100" vertical />

				<v-avatar
					image="https://i.pinimg.com/originals/a1/5f/51/a15f5117759cd710fae6ab2461250f4a.png"
					color="primary"
				/>

				<p>Juan Perez</p>
				<v-icon size="30"> mdi-menu </v-icon>
			</div>
		</div>
	</div>
</template>
