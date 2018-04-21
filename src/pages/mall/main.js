import Vue from 'vue'
import App from './mall'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        navigationBarTitleText: '严选圈'
    }
}