<template>
  <div id="body">
    <h1 id="title"><strong>Github</strong> <i>Search</i></h1>

    <form id="div_search_bar" @submit="redirectToResult" v-on:submit.prevent>
      <input
        type="search"
        name="search_box"
        title="search_box"
        id="search_box"
        v-model="username"
        required
      />
      <button id="button_search" type="submit">
        <font-awesome-icon icon="search" style="color: white" size="lg" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    redirectToResult: function() {
      this.$router.push({ name: 'result', params: { username: this.username } })
    },
  },
}
</script>

<style scoped>
#body {
  width: 50%;
  height: 50%;
  margin: auto;
}

#title {
  font-size: 3em;
}

#title strong {
  font-weight: 800;
}

#title i {
  font-weight: 400;
}

#div_search_bar {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
}

#search_box {
  width: 80%;
  border: 1px solid black;
  border-radius: 2px;
}

#button_search {
  width: 20%;
  background-color: black;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 2px;
}

#button_search:hover {
  background-color: #757575;
}

@media screen and (max-width: 600px) {
  #body {
    width: 90%;
  }

  #title {
    font-size: 2em;
  }
}
</style>
