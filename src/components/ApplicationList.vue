<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="9" xl="6">
      <BreadCrumb></BreadCrumb>
      <v-card elevation="2" class="pa-2 mb-6" shaped>
        <v-card-text>
          <p>
            <span class="text-h4 text--primary pa-2">OSF</span>
            <span>edd1c473-94d3-470f-a5c7-09fa2e8ae5c4</span>
          </p>
          <p>
            <v-icon color="green">mdi-checkbox-blank-circle</v-icon>
            <span> ACTIVE</span>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-3" to="applications/OSF" append
            >Manage</v-btn
          >
          <v-btn text color="red accent-4">Delete</v-btn>
        </v-card-actions>
      </v-card>
      <v-card elevation="2" class="pa-2 mb-6" shaped>
        <v-card-text>
          <p>
            <span class="text-h4 text--primary pa-2">OSC</span>
            <span>edd1c473-94d3-470f-a5c7-09fa2e8ae5c4</span>
          </p>
          <p>
            <v-icon color="green">mdi-checkbox-blank-circle</v-icon>
            <span> ACTIVE</span>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-3" to="applications/OSC" append
            >Manage</v-btn
          >
          <v-btn text color="red accent-4">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import BreadCrumb from "./BreadCrumb";
export default {
  components: {
    BreadCrumb,
  },
};
</script>