<template>
  <v-row justify="center">
    <v-btn @click="dialog = true" icon>
      <v-icon color="grey lighten-1">mdi-delete</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5"> Delete? </v-card-title>

        <v-card-text>
          Do you want to delete the {{ resourceType }} '{{ resourceName }}'
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            cancel
          </v-btn>

          <v-btn color="red darken-1" @click="deleteAction" dark>
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: "deleteItem",
  methods: {
    deleteAction: function () {
      this.deleteFunc();
      this.dialog = false;
    },
  },
  props: {
    deleteFunc: {
      type: Function,
      required: true,
    },
    resourceType: {
      type: String,
      required: true,
    },
    resourceName: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      dialog: false,
    };
  },
};
</script>