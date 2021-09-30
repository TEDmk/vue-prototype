<template>
  <v-card elevation="2" class="pa-2 mb-6" shaped>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <span class="text-h5 text--primary">Environments</span>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="blue-grey" class="ma-2 white--text">
            New
            <v-icon right dark> mdi-plus </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-skeleton-loader
      type="article"
      v-if="!environments.length"
    ></v-skeleton-loader>
    <v-list v-if="environments.length">
      <v-list-item :key="environment.name" v-for="environment in environments">
        <v-list-item-content>
          <v-list-item-title>
            <span class="mr-3">{{ environment.name }}</span>
            <v-badge color="green" :content="environment.type"></v-badge
          ></v-list-item-title>
          <v-list-item-subtitle
            ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
            <span> {{ environment.status }}</span></v-list-item-subtitle
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon :to="'environments/' + environment.id" append>
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
  name: "EnvironmentsCards",
  props: {
    environments: {
      type: Array,
    },
  },
};
</script>
