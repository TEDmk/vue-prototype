<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="9" xl="6">
      <BreadCrumb></BreadCrumb>
      <ApplicationCard :application="application"></ApplicationCard>
      <v-row>
        <v-col sm="6" md="6" xl="6">
          <EnvironmentsCard :environments="environments"></EnvironmentsCard>
        </v-col>
        <v-col sm="6" md="6" xl="6">
          <ArtifactsCard :artifacts="artifacts"></ArtifactsCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import BreadCrumb from "../utils/BreadCrumb";
import ApplicationCard from "../cards/ApplicationCard.vue";
import EnvironmentsCard from "../cards/EnvironmentsCard.vue";
import ArtifactsCard from "../cards/ArtifactsCard.vue";
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
    ApplicationCard,
    EnvironmentsCard,
    ArtifactsCard,
  },
  props: ["ccpService"],
  data: function () {
    return { application: null, environments: null, artifacts: null };
  },
};
</script>