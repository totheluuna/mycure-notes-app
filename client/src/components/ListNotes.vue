<template>
  <div>
    <note
      v-on:delete-note="deleteNote"
      v-on:update-note="updateNote"
      v-for="note in notes"
      :note.sync="note"
      v-bind:key="note"
    ></note>
  </div>
</template>

<script type = "text/javascript" >
import bus from "./../bus.js"
import Note from "./Note";
export default {
  props: ["notes"],

  components: {
    Note
  },
  methods: {
    updateNote(note) {
      let id = note._id;
      this.$http
        .put(`/notes/${id}`, note)
        .catch(error => {
          alert(error);
        });
    },
    deleteNote(note) {
      var removeIt = confirm("Do you really wanna remove it?");
      if (removeIt) {
        let id = note._id;
        this.$http.delete(`/notes/${id}`).then(() => {
          bus.$emit('refreshNote');
        });
        const noteIndex = this.notes.indexOf(note);
        this.notes.splice(noteIndex, 1);
        // alert("Note deleted!");
      }
    }
  }
};
</script>