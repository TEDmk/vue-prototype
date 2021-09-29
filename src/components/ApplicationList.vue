<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="9" xl="6">
      <BreadCrumb></BreadCrumb>
      <ApplicationCards
        v-if="!Object.keys(applications).length"
      ></ApplicationCards>
      <ApplicationCards
        :application="application"
        v-for="application in applications"
        :key="application.id"
      ></ApplicationCards>
    </v-col>
  </v-row>
</template>
<script>
//import axios from "axios";
import BreadCrumb from "./BreadCrumb";
import ApplicationCards from "./ApplicationCards.vue";
export default {
  components: {
    BreadCrumb,
    ApplicationCards,
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
    return { applications: [] };
  },
};
</script>
