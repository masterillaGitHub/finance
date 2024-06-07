import {useAuthStore} from "@/stores/auth.store.js";
import {useRouter} from "vue-router";

export default function ($axiosError) {
    const authStore = useAuthStore()
    const router = useRouter()

    if ($axiosError.response.status === 401 || $axiosError.response.status === 419) {
        authStore.resetUser()
    }

    return Promise.reject($axiosError)
}
