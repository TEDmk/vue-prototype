<template>
  <v-card elevation="2" class="pa-2 mb-6" shaped>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <span class="text-h5 text--primary">Deployments</span>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="blue-grey" class="ma-2 white--text">
            Deploy
            <v-icon right dark> mdi-cloud-upload </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-skeleton-loader type="article" v-if="!deployments"></v-skeleton-loader>
    <v-list v-if="deployments">
      <v-list-item :key="deployment.name" v-for="deployment in deployments">
        <v-list-item-content>
          <v-list-item-title>
            <span class="mr-3">{{ deployment.name }}</span></v-list-item-title
          >
          <v-list-item-subtitle
            ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
            <span> {{ deployment.status }}</span></v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "DeploymentsCard",
  props: {
    deployments: {
      type: Array,
    },
  },
};
</script>
