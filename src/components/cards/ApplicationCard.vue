<template>
  <v-card elevation="2" class="pa-2 mb-6" shaped>
    <v-skeleton-loader type="article" v-if="!application"></v-skeleton-loader>
    <v-card-text v-if="application">
      <p>
        <span class="text-h4 text--primary pa-2">{{ application.name }}</span>
        <span>{{ application.id }}</span>
      </p>
      <p>
        <v-icon color="green">mdi-checkbox-blank-circle</v-icon>
        <span> {{ application.status }}</span>
      </p>
    </v-card-text>
    <v-card-actions v-if="application">
      <v-btn
        text
        color="deep-purple accent-3"
        :to="'applications/' + application.id"
        append
        >Manage</v-btn
      >
      <v-btn text color="red accent-4">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "ApplicationCard",
  props: {
    application: {
      type: Object,
      required: false,
    },
  },
};
</script>
