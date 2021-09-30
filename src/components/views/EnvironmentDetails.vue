<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="9" xl="6">
      <BreadCrumb></BreadCrumb>
      <EnvironmentCard :environment="environment"></EnvironmentCard>
      <DeploymentsCard :deployments="deployments"></DeploymentsCard>
    </v-col>
  </v-row>
</template>

<script>
import BreadCrumb from "../utils/BreadCrumb";
import EnvironmentCard from "../cards/EnvironmentCard.vue";
import DeploymentsCard from "../cards/DeploymentsCard.vue";
export default {
  name: "ApplicationDetails",
  components: {
    BreadCrumb,
    EnvironmentCard,
    DeploymentsCard,
  },
  mounted() {
    this.ccpService
      .getEnvironment(this.$route.params.app_id, this.$route.params.env_id)
      .then((response) => (this.environment = response));
    this.ccpService
      .getDeployments(this.$route.params.app_id, this.$route.params.env_id)
      .then((response) => (this.deployments = response));
  },
  props: ["ccpService"],
  data: function () {
    return { environment: null, deployments: null };
  },
};
</script>