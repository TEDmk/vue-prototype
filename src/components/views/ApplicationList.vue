<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="9" xl="6">
      <BreadCrumb></BreadCrumb>

      <ApplicationCard v-if="!applications"></ApplicationCard>
      <div v-if="applications">
        <ApplicationCard
          :application="application"
          v-for="application in applications"
          :key="application.id"
        ></ApplicationCard>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import BreadCrumb from "../utils/BreadCrumb";
import ApplicationCard from "../cards/ApplicationCard.vue";
export default {
  components: {
    BreadCrumb,
    ApplicationCard,
  },
  mounted() {
    this.ccpService
      .getApplications()
      .then((response) => (this.applications = response));
  },
  methods: {
    color: function (status) {
      if (status == "ACTIVE") {
        return "green";
      } else if (status == "CREATING") {
        return "yellow";
      }
    },
  },
  props: ["ccpService"],
  data: function () {
    return { applications: null };
  },
};
</script>
