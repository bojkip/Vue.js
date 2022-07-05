<template>
  <div class="text-center">
    <v-bottom-sheet
      v-model="sheet"
      inset
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="orange"
          dark
          v-bind="attrs"
          v-on="on"
          class="success"
        >
          Add new project
        </v-btn>
      </template>
      <v-sheet
        class="text-center"
        height="580"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          <v-icon large>mdi-close-circle</v-icon>
        </v-btn>
        <v-form class="px-12 py-5">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
            <!-- calendar -->
            <div class="my-10">
                <div class="mb-6"></div>
                <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                    v-model="date"
                    label="Birthday date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    :active-picker.sync="activePicker"
                    :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                ></v-date-picker>
                </v-menu>
            </div>

            <!-- ---- -->
            <v-btn class="success mx-0 mt-3">Add Project</v-btn>
        </v-form>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      title: '',
      content: '',
      activePicker: null,
      date: null,
      menu: false,
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
  }
</script>