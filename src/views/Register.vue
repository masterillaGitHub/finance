<script setup>
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.store.js";
import {useRouter} from "vue-router";

const authStore = useAuthStore()
const router = useRouter()

const loading = ref(false)
const name = ref('User 1')
const email = ref('user1@test.com')
const password = ref('123123123')
const imgUrl = new URL('/public/images/login.jpg', import.meta.url).href
const title = 'Register'
const desc = ''


async function register() {
  loading.value = true

  try {
    const isRegister = await authStore.register(name.value, email.value, password.value)

    if (isRegister) {
      await router.push({name: 'dashboard'})
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
                v-model="name"
                label="Name"
            ></v-text-field>
          </v-col>
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
          text="Register"
          :loading="loading"
          @click="register"
      />
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
