<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" xl="6">
      <BreadCrumb></BreadCrumb>
      <v-card elevation="2" class="pa-2 mb-6" shaped>
        <v-card-text>
          <p>
            <span class="text-h4 text--primary pa-2">{{
              $route.params.env_id
            }}</span>
            <span>edd1c473-94d3-470f-a5c7-09fa2e8ae5c4</span>
          </p>
          <p>
            <v-icon color="green">mdi-checkbox-blank-circle</v-icon>
            <span> ACTIVE</span>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="red accent-4">Delete</v-btn>
        </v-card-actions>
      </v-card>
      <v-card elevation="2" class="pa-2 mb-6" shaped>
        <v-card-text>
          <p>
            <span class="text-h5 text--primary pa-2">Deployments</span>
          </p> </v-card-text
        ><v-list>
          <v-list-item key="v1.4.2">
            <v-list-item-content>
              <v-list-item-title>v1.4.2</v-list-item-title>
              <v-list-item-subtitle
                ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
                <span> ACTIVE</span></v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-list-item key="v1.3.5">
            <v-list-item-content>
              <v-list-item-title>v1.3.5</v-list-item-title>
              <v-list-item-subtitle
                ><v-icon color="grey darken-2"
                  >mdi-checkbox-blank-circle</v-icon
                >
                <span> DELETED</span></v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-rotate-left</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-list-item key="v1.3.4">
            <v-list-item-content>
              <v-list-item-title>v1.3.4</v-list-item-title>
              <v-list-item-subtitle
                ><v-icon color="grey darken-2"
                  >mdi-checkbox-blank-circle</v-icon
                >
                <span> DELETED</span></v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-rotate-left</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BreadCrumb from "./BreadCrumb";
export default {
  name: "ApplicationDetails",
  components: {
    BreadCrumb,
  },
};
</script>