<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <list-item  :title="item.title" :text="item.text" :id="item.id" :completed="item.completed"></list-item>
    </li>
  </ul>
</template>

<script>
    import ListItem from './ListItem.vue'
  export default {
    components: { ListItem },
    inject: ["providedItems"],
    computed: {
      items() {
        return this.providedItems();
      }
    },
  }
</script>

<style scoped>
ul {
  list-style: none;
  max-width: 40rem;
  background-color: rgba(0, 0, 0);
  text-align: center;
  font: inherit;
  margin: 0 auto;
  padding-left: 0px;
}
li {
  border-bottom: 1px solid #f0e3ca;
  padding: 1rem 2rem;
}
</style>