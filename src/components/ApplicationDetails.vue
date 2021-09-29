<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="9" xl="6">
      <BreadCrumb></BreadCrumb>
      <ApplicationCards :application="application"></ApplicationCards>
      <v-row>
        <v-col sm="6" md="6" xl="6">
          <EnvironmentsCards :environments="environments"></EnvironmentsCards>
        </v-col>
        <v-col sm="6" md="6" xl="6">
          <ArtifactsCards :artifacts="artifacts"></ArtifactsCards>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import BreadCrumb from "./BreadCrumb";
import ApplicationCards from "./ApplicationCards.vue";
import EnvironmentsCards from "./EnvironmentsCards.vue";
import ArtifactsCards from "./ArtifactsCards.vue";
export default {
  name: "ApplicationDetails",
  mounted() {
    this.ccpService
      .getApplication(this.$route.params.app_id)
      .then((response) => (this.application = response));
    this.ccpService
      .getEnvironments(this.$route.params.app_id)
      .then((response) => (this.environments = response));
    this.ccpService
      .getArtifacts(this.$route.params.app_id)
      .then((response) => (this.artifacts = response));
  },
  components: {
    BreadCrumb,
    ApplicationCards,
    EnvironmentsCards,
    ArtifactsCards,
  },
  props: ["ccpService"],
  data: function () {
    return { application: null, environments: [], artifacts: [] };
  },
};
</script>