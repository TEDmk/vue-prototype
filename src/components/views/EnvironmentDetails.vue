<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="9" xl="6">
      <BreadCrumb></BreadCrumb>
      <EnvironmentCard :environment="environment"></EnvironmentCard>
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
        <v-list>
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
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import BreadCrumb from "../utils/BreadCrumb";
import EnvironmentCard from "../cards/EnvironmentCard.vue";
export default {
  name: "ApplicationDetails",
  components: {
    BreadCrumb,
    EnvironmentCard,
  },
  mounted() {
    this.ccpService
      .getEnvironment(this.$route.params.app_id, this.$route.params.env_id)
      .then((response) => (this.environment = response));
  },
  props: ["ccpService"],
  data: function () {
    return { environment: null };
  },
};
</script>