import {useAuthStore} from "@/stores/auth.store.js";
import {LAYOUT_AUTH} from "@/helpers/constants.js";

export default async function (to, from) {
    const isPagePublic = to.meta.isPublic ?? false
    const isUserAuth = await checkAuthUser()

    if (!isPagePublic && !isUserAuth) {
        return {name: 'login'}
    }
    else if (isUserAuth && to.meta.layout === LAYOUT_AUTH) {
        return {name: 'dashboard'}
    }
}

async function checkAuthUser() {
    const authStore = useAuthStore()

    if (!authStore.isInitial) {
        try {
            await authStore.loadUser()
        }
        catch (e) {
            return false
        }
        finally {
            authStore.initial = true
        }
    }

    return authStore.isAuth
}
