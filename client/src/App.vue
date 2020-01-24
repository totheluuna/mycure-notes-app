<template>
  <div id="app">
    <h1 class="ui centered header">MyCURE Notes App</h1>
    <div>
      <list-notes v-bind:notes="notes"></list-notes>
      <!-- <list-notes></list-notes> -->
      <create-note v-on:create-note="createNote"></create-note>
    </div>
  </div>
</template>

<script>
  import bus from "./bus.js";
  import ListNotes from './components/ListNotes';
  import CreateNote from './components/CreateNotes';
  export default {
    name: 'app',
    components: {
      ListNotes,
      CreateNote,
    },
    // data() {
    //   return {
    //     notes: [{
    //       title: 'Lunch at 12PM',
    //       content: 'Call Robert to remember him.'
    //     }, {
    //       title: 'Gym with Jane',
    //       content: 'She is needing your motivation...'
    //     }, {
    //       title: 'Call mom',
    //       content: 'Ask her about the cats?'
    //     }],
    //   };
    // },
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
        this.$http.get("/").then(response => {
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