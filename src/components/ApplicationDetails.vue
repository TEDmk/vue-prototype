<template>
  <v-row justify="center">
    <v-col cols="12" sm="12" md="12" lg="9" xl="6">
      <BreadCrumb></BreadCrumb>
      <v-card elevation="2" class="pa-2 mb-6" shaped>
        <v-card-text>
          <p>
            <span class="text-h4 text--primary pa-2">{{
              $route.params.app_id
            }}</span>
            <span>edd1c473-94d3-470f-a5c7-09fa2e8ae5c4</span>
          </p>
          <p>
            <v-icon color="green">mdi-checkbox-blank-circle</v-icon>
            <span> ACTIVE</span>
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="deep-purple accent-3">Update</v-btn>
          <v-btn text color="deep-purple accent-3">Show logs</v-btn>
          <v-btn text color="red accent-4">Delete</v-btn>
        </v-card-actions>
      </v-card>
      <v-row>
        <v-col sm="6" md="6" xl="6">
          <v-card elevation="2" class="pa-2 mb-6" shaped>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <span class="text-h5 text--primary">Environments</span>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    :loading="loading3"
                    :disabled="loading3"
                    color="blue-grey"
                    class="ma-2 white--text"
                    @click="loader = 'loading3'"
                  >
                    New
                    <v-icon right dark> mdi-plus </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item key="DEV">
                <v-list-item-content>
                  <v-list-item-title>
                    <span class="mr-3">DEV</span>
                    <v-badge color="green" content="non-prd"></v-badge
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
                    <span> ACTIVE</span></v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon to="environments/DEV" append>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item key="UAT">
                <v-list-item-content>
                  <v-list-item-title
                    ><span class="mr-3">UAT</span>
                    <v-badge color="green" content="non-prd"></v-badge
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
                    <span> ACTIVE</span></v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon to="environments/UAT" append>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item key="PRD">
                <v-list-item-content>
                  <v-list-item-title
                    ><span class="mr-3">PRD</span>
                    <v-badge color="red accent-2" content="prd"></v-badge
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
                    <span> ACTIVE</span></v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon to="environments/PRD" append>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col sm="6" md="6" xl="6">
          <v-card elevation="2" class="pa-2 mb-6" shaped>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <span class="text-h5 text--primary">Artifacts</span>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn
                    :loading="loading3"
                    :disabled="loading3"
                    color="blue-grey"
                    class="ma-2 white--text"
                    @click="loader = 'loading3'"
                  >
                    New
                    <v-icon right dark> mdi-plus </v-icon>
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
                    <span> AVAILABLE</span></v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item key="v1.3.5">
                <v-list-item-content>
                  <v-list-item-title>v1.3.5</v-list-item-title>
                  <v-list-item-subtitle
                    ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
                    <span> AVAILABLE</span></v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-list-item key="v1.3.4">
                <v-list-item-content>
                  <v-list-item-title>v1.3.4</v-list-item-title>
                  <v-list-item-subtitle
                    ><v-icon color="green">mdi-checkbox-blank-circle</v-icon>
                    <span> AVAILABLE</span></v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                  </v-btn>
                </v-list-item-action>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import BreadCrumb from "./BreadCrumb";
export default {
  name: "EnvironmentDetails",
  components: {
    BreadCrumb,
  },
};
</script>