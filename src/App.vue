<template>
  <v-app>
    <v-app-bar color="light-blue" app dark>
      <v-toolbar-title>CommonControlPlane</v-toolbar-title>
      <v-spacer></v-spacer>
      <SelectAccountItem />
      <v-btn icon color="grey darken-4">
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid class="mt-10">
        <!-- If using vue-router -->
        <router-view :ccp-service="ccpService"></router-view>
      </v-container>
    </v-main>

    <v-footer app> CommonControlPlane v1.2.3 </v-footer>
  </v-app>
</template>
<script>
import CCPService from "./services/CCPService";
import SelectAccountItem from "./components/items/SelectAccountItem.vue";
export default {
  components: {
    SelectAccountItem,
  },
  data() {
    return {
      ccpService: new CCPService(),
    };
  },
};
</script>