import {useAuthStore} from "@/stores/auth.store.js";
import router from '@/router'

export default function ($axiosError) {
    const authStore = useAuthStore()

    if ($axiosError.response.status === 401 || $axiosError.response.status === 419) {
        authStore.resetUser()
        router.push({name: 'login'})
    }

    return Promise.reject($axiosError)
}
