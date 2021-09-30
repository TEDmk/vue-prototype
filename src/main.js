import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'

import ApplicationList from './components/views/ApplicationList'
import EnvironmentDetails from './components/views/EnvironmentDetails'
import ApplicationDetails from './components/views/ApplicationDetails'
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: ApplicationList,
    meta: {
      breadCrumb: [
        {
          text: "Applications",
        },
      ],
    },
  },
  {
    path: '/applications/:app_id', component: ApplicationDetails,
    meta: {
      breadCrumb(route) {
        const app_id = route.params.app_id;
        return [
          {
            text: 'Applications',
            to: { path: '/' }
          },
          {
            text: app_id,
          }

        ]
      }
    },
  },
  {
    path: '/applications/:app_id/environments/:env_id', component: EnvironmentDetails,
    meta: {
      breadCrumb(route) {
        const app_id = route.params.app_id;
        const env_id = route.params.env_id;
        return [
          {
            text: 'Applications',
            to: { path: '/' }
          },
          {
            text: app_id,
            to: { path: '/applications/' + route.params.app_id }
          },
          {
            text: 'Environments',
          },
          {
            text: env_id,
            to: { path: '/applications/' + route.params.app_id + '/environments/' + route.params.env_id }
          },

        ]
      }
    },
  }
];

const router = new VueRouter({ routes });


new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
