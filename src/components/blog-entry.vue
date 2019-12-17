<template>
  <div class="entry">
    <p>{{ title }}</p>
    <p>{{ date }}</p>
    <p>{{ author }}</p>
  </div>
  </template>

  <script>
  export default {
    data() {
    return {
      title: 'Tytuł',
      date: 'Data',
      author: 'Mirek'
    }
  },
  }
  </script>