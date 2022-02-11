<template>
  <div class="container" v-if="toggleFlag" :class="isCompleted">
    <div>
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
    <div class="btn-wrapper">
      <button @click="providedDeleteItem(id)">Delete</button>
      <button :ref="id" @click="itemEdited" :disabled="completed">Edit</button>
      <button @click="providedToggleCompletedItem(id)">Done</button>
    </div>
  </div>
  <div class="container" v-else>
    <div>
      <input v-model.lazy.trim="newTitle" :ref="id" />
      <textarea v-model.lazy.trim="newText"></textarea>
    </div>
    <div class="btn-wrapper">
      <button @click="itemCanceled">Cancel</button>
      <button @click="saveNewItem">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  inject: [
    "providedDeleteItem",
    "providedSaveItem",
    "providedToggleCompletedItem",
  ],
  props: ["title", "text", "id", "completed"],
  data() {
    return {
      toggleFlag: true,
      newTitle: this.title,
      newText: this.text,
    };
  },
  computed: {
    isCompleted() {
      return this.completed && "completed";
    },
  },
  methods: {
    inputFocus() {
      this.$nextTick(() => {
        const inputRef = this.$refs[this.id];
        inputRef.focus();
      });
    },
    editFocus() {
      this.$nextTick(() => {
        const editBtnRef = this.$refs[this.id];
        editBtnRef.focus();
      });
    },
    toggleState() {
      this.toggleFlag = !this.toggleFlag;
    },
    saveNewItem() {
      if (this.newTitle !== this.title || this.newText !== this.text) {
        this.providedSaveItem(this.id, this.newTitle, this.newText);
      }
      this.toggleState();
      this.editFocus();
    },
    itemCanceled() {
      this.toggleState();
      this.editFocus();
    },
    itemEdited() {
      this.toggleState();
      this.inputFocus();
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through red;
  text-decoration-thickness: 3px;
}
.container {
  position: relative;
  min-height: 8rem;
}
.container h2 {
  margin-top: 0px;
}
.container p {
  width: 70%;
}
.container div:first-child {
  text-align: left;
}
.btn-wrapper {
  position: absolute;
  right: 0px;
  top: 0rem;
}
.btn-wrapper button {
  display: block;
}
button {
  font: inherit;
  border: 2px solid #a8734f ;
  background-color: transparent;
  color: #f0e3ca;
  padding: 0.3rem 0rem;
  margin: 0.4rem 0.4rem;
  width: 5rem;
}
button:active {
  background-color: #a8734f ;
  box-shadow: inset 0px 0px 9px black;
}
:disabled:active {
  background-color: grey;
}
.addBtn {
  background-color: transparent;
  width: calc(100% - 15rem);
  border: 1px solid #a8734f ;
}
</style>

