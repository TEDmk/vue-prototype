<script>
export default {};
</script>
<template>
  <v-app>
    <v-app-bar color="light-blue" app dark>
      <v-toolbar-title>CommonControlPlane</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>TRI_000000_DEV</v-btn>
      <v-btn icon color="grey darken-4">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="mt-10">
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> CommonControlPlane v1.2.3 </v-footer>
  </v-app>
</template>