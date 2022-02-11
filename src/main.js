import { createApp } from 'vue';

import App from './App.vue';
import InputArea from './components/InputArea.vue';
import TodoList from './components/TodoList.vue';
import ListItem from './components/ListItem.vue';
// import './assets/reset.css'

const app = createApp(App);

app.component('input-area', InputArea);
app.component('todo-list', TodoList);
app.component('list-item', ListItem);


app.mount('#app');
