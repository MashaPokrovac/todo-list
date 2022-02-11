<template>
  <div>
    <header>
       <h3 ref="summary" tabindex="-1">Completed:{{completedItems}}/{{items.length}}</h3>
       <h2>Todos</h2>
    </header>
    <input-area @add-item="addItem"></input-area>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import uniqueId from 'lodash.uniqueid';
export default {
  components: { TodoList },
  data() {
    return {
      items: [],
    };
  },
  provide() {
    return {
      providedItems: () => this.items,
      providedDeleteItem: this.deleteItem,
      providedSaveItem: this.saveItem,
      providedToggleCompletedItem: this.toggleCompletedItem,
    };
  },
  computed: {
    completedItems() {
      let counter = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].completed === true) {
          counter++;
        }
      }
      return counter;
    },
  },
  methods: {
    addItem(title, text) {
      this.items.push({
        title: title,
        text: text,
        id: uniqueId('todo-'),
        completed: false,
      });
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
      this.$refs.summary.focus();
    },
    saveItem(id, title, text) {
      const editedItem = this.items.find((item) => item.id === id);
      editedItem.title = title;
      editedItem.text = text;
    },
    toggleCompletedItem(id) {
      const editedItem = this.items.find((item) => item.id === id);
      editedItem.completed = !editedItem.completed;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  color: #f0e3ca;
}
body {
  margin: 0;
  text-align: center;
  margin-top:2rem;
}
header {
  background-color: black;
   max-width: 40rem;
   margin: 0 auto;
   padding: 3rem;
  position: relative;
  background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
}
header h3 {
  position: absolute;
  right: 0.6rem;
  top: -0.3rem;
}
header h2 {
  text-transform: uppercase;
  font-size: 3rem;
  color: #4F84A8;
}
input {
  width: 70%;
  height: 2rem;
  outline: none;
  border-radius: 7px 7px 0px 0px;
  border: 1px solid #f0e3ca;
  border-bottom: none; 
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
input,
textarea {
  background-color: #232020b6;
  padding: 1rem;
  color: #f0e3ca;
}
button {
  font: inherit;
  border: 2px solid #a8734f;
  background-color: #a8734f ;
  color: black;
  padding: 0.3rem 0rem;
  margin: 0.4rem 0.4rem;
  width: 50%;
}
button:active {
  background-color: #a8734f;
  box-shadow: inset 0px 0px 9px black;
}
</style>
