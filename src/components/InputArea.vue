<template>
  <div class="input-area">
    <div v-if="stateOfInputArea">
      <div>
        <input type="text" placeholder="Title..." v-model.lazy.trim="title" />
      </div>
      <div>
        <textarea
          rows="4"
          placeholder="Add new todo..."
          v-model.lazy.trim="text"
        ></textarea>
      </div>
      <button @click="onSubmit">Add</button>
    </div>
    <div v-else>
      <button class="addBtn" @click="visibilityInputArea">Add new task</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["add-item"],
  data() {
    return {
      title: "",
      text: "",
      stateOfInputArea: false,
    };
  },
  methods: {
    visibilityInputArea() {
      this.stateOfInputArea = !this.stateOfInputArea;
    },
    onSubmit() {
      if (this.title === "" && this.text === "") {
        return;
      }
      this.$emit("add-item", this.title, this.text);
      this.title = this.text = "";
      this.visibilityInputArea();
    },
  },
};
</script>

<style scoped>
.input-area {
  margin: 0 auto;
  max-width: 40rem;
  background-color: rgb(0, 0, 0);
  padding: 1rem;
}
input {
  width: 70%;
  height: 2rem;
  border-bottom: none;
  outline: none;
  border-top: 1px solid #f0e3ca;
  border-left: 1px solid #f0e3ca;
  border-right: 1px solid #f0e3ca;
  border-radius: 7px 7px 0px 0px;
}
textarea {
  width: 70%;
  border-top: none;
  outline: none;
  border-bottom: 1px solid #f0e3ca;
  border-left: 1px solid #f0e3ca;
  border-right: 1px solid #f0e3ca;
  border-radius: 0px 0px 7px 7px;
  resize: none;
}
</style>