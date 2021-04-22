<template>
  <div id="body">
    <h1 id="title">
      <strong><router-link to="/">Github </router-link></strong> <i>Search</i>
    </h1>

    <form id="div_search_bar" @submit="searchUser" v-on:submit.prevent>
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
      username: this.$route.params.username,
    }
  },
  methods: {
    searchUser: function() {
      this.$router
        .push({ name: 'result', params: { username: this.username } })
        .catch(() => {})
    },
  },
}
</script>

<style scoped>
#body {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

#title {
  font-size: 2em;
  width: 40%;
  text-align: left;
}

#title strong {
  font-weight: 800;
}

#title strong a {
  text-decoration: none;
  color: black;
}

#title i {
  font-weight: 400;
}

#div_search_bar {
  width: 40%;
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
  #title {
    font-size: 1em;
    width: 30%;
  }

  #div_search_bar {
    width: 60%;
  }
}
</style>
