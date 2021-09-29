<template>
  <v-card elevation="2" class="pa-2 mb-6" shaped>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <span class="text-h5 text--primary">Artifact</span>
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
      v-if="!artifacts.length"
    ></v-skeleton-loader>
    <v-list v-if="artifacts.length">
      <v-list-item :key="artifact.name" v-for="artifact in artifacts">
        <v-list-item-content>
          <v-list-item-title>
            <span class="mr-3">{{ artifact.name }}</span></v-list-item-title
          >
          <v-list-item-subtitle
            ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
            <span> {{ artifact.status }}</span></v-list-item-subtitle
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
  name: "ArtifactsCards",
  props: {
    artifacts: {
      type: Array,
    },
  },
};
</script>
