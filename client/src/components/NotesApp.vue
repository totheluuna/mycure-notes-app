<template>
  <div id="container">
    <div>
      <list-notes v-bind:notes="notes"></list-notes>
      <list-notes></list-notes>
      <create-note v-on:create-note="createNote"></create-note>
    </div>
  </div>
</template>

<script>
  import bus from "./../bus.js";
  import ListNotes from './ListNotes';
  import CreateNote from './CreateNotes';
  export default {
    name: 'app',
    components: {
      ListNotes,
      CreateNote,
    },
    data() {
      return {
        notes: [],
        doneLoading: false
      };
    },
    created: function() {
      this.fetchNote();
      this.listenToEvents();
    },
    watch: {
      $route: function() {
        let self = this;
        self.doneLoading = false;
        self.fetchNote().then(function() {
          self.doneLoading = true
        });
      }
    },
    methods: {
      fetchNote() {
        this.$http.get("/notes").then(response => {
          this.notes = response.data;
        });
      },

      listenToEvents() {
        bus.$on("refreshNote", () => {
        this.fetchNote();
        });
      },

      createNote(note) {
        this.notes.push(note);
        // alert('Note created!');
      },
    },
  };
</script>