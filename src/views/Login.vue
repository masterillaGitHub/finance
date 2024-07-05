<script setup>
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.store.js";
import {useRouter} from "vue-router";
import {useSnackbarStore} from "@/stores/snackbar.store.js";

const authStore = useAuthStore()
const snackbarStore = useSnackbarStore()
const router = useRouter()

const loading = ref(false)
const email = ref('user1@test.com')
const password = ref('123123123')
const imgUrl = new URL('/assets/images/login.jpg', import.meta.url).href
const title = 'Login'
const desc = ''

async function login() {
  loading.value = true

  try {
    const isLogin = await authStore.login(email.value, password.value)

    if (isLogin) {
      await router.push({name: 'dashboard'})
    }
  }
  catch ($axiosError) {
    const response = $axiosError.response

    if (response.status === 422) {
      snackbarStore.show(response.data.message)
    }
    else {
      throw new Error($axiosError)
    }
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <v-card
      :loading="loading"
  >
    <v-img
        :src="imgUrl"
        height="200"
        cover
    >
      <div class="fill-height d-flex justify-center align-center">
        <div class="text-center">
          <h3 class="text-h5 text-white">{{ title }}</h3>
          <div v-show="!!desc" class="text-grey-lighten-1">{{ desc }}</div>
        </div>
      </div>
    </v-img>

    <v-form>
      <v-container>
        <v-row dense>
          <v-col cols="12">
            <v-text-field
                v-model="email"
                label="E-mail"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
                v-model="password"
                label="Password"
            ></v-text-field>
          </v-col>

        </v-row>
      </v-container>
    </v-form>

    <v-divider></v-divider>

    <v-card-actions class="justify-space-between">
      <v-btn :to="{name: 'main'}" text="Back"/>
      <v-btn
          text="Login"
          :loading="loading"
          @click="login"
      />
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
