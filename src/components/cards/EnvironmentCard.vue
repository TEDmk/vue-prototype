<template>
  <v-card elevation="2" class="pa-2 mb-6" shaped>
    <v-skeleton-loader type="article" v-if="!environment"></v-skeleton-loader>
    <v-card-text v-if="environment">
      <p>
        <span class="text-h4 text--primary pa-2">{{ environment.name }}</span>
        <span>{{ environment.id }}</span>
      </p>
      <p>
        <v-icon color="green">mdi-checkbox-blank-circle</v-icon>
        <span> {{ environment.status }}</span>
      </p>
    </v-card-text>
    <v-card-actions v-if="environment">
      <v-btn text color="red accent-4">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "EnvironmentCard",
  props: {
    environment: {
      type: Object,
      required: false,
    },
  },
};
</script>
