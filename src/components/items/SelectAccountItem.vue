<template>
  <div justify="left">
    <v-btn @click="dialog = true">TRI_0000d00_DEV</v-btn>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="text-h5"> Select an account </v-card-title>

        <v-list v-if="applications">
          <v-list-item
            :key="application.accountName"
            v-for="application in applications"
          >
            <v-list-item-content>
              <v-list-item-title>
                <span class="mr-3">{{
                  application.accountName
                }}</span></v-list-item-title
              >
              <v-list-item-subtitle>
                <span> {{ application.id }}</span></v-list-item-subtitle
              >
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon :to="'applications/' + application.id" append>
                <v-icon color="grey lighten-1">mdi-login-variant</v-icon>
              </v-btn>
            </v-list-item-action>
            <v-list-item-action>
              <v-btn icon :to="'applications/' + application.id" append>
                <v-icon color="grey lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
        <v-card-actions>
          <v-text-field
            v-model="accountId"
            label="Accound ID"
            required
          ></v-text-field
        ></v-card-actions>
        <v-card-actions>
          <v-btn class="ma-2">
            Add Account
            <v-icon right dark> mdi-plus </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "SelectAccountItem",
  methods: {
    deleteAction: function () {},
  },
  data: function () {
    return {
      dialog: false,
      applications: [
        { id: "123123-123-4234234-234242424", accountName: "TRI_123392_DEV" },
        { id: "535342-123-4234234-234242424", accountName: "TRI_123392_PRD" },
      ],
    };
  },
};
</script>