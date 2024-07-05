
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VPullToRefresh } from 'vuetify/labs/VPullToRefresh'
import ua from './locales/ua'

import '@mdi/font/css/materialdesignicons.css'

const com = Object.assign({...components}, {VPullToRefresh})

const vuetify = createVuetify({
    components: com,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
    locale: {
        locale: 'ua',
        fallback: 'ua',
        messages: {ua}
    }
})

export default vuetify
