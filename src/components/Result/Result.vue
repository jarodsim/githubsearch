<template>
  <div id="body">
    <Loading v-if="loading" />
    <Navbar v-if="!loading" @searchUser="searchUser" />
    <Informations
      :repos="repos"
      :login="info.login"
      :company="info.company"
      :name="info.name"
      :avatar_url="info.avatar_url"
      :location="info.location"
      :public_repos="info.public_repos"
      :followers="info.followers"
      :starred="starred"
      v-if="!loading && !not_found"
    />
    <UserNotFound v-if="!loading && not_found" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Informations from './components/Informations'
import Loading from '../Loading/Loading'
import UserNotFound from '../UserNotFound/UserNotFound'

import axios from 'axios'

export default {
  name: 'Result',
  props: {
    username: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      not_found: false,
      info: [{}],
      repos: [],
      starred: 0
    }
  },
  mounted() {
    this.searchUser()
  },
  methods: {
    searchUser() {
      this.loading = true
      // user
      axios
        .get(`https://api.github.com/users/${this.username}`)
        .then((response) => (this.info = response.data))
        .catch(() => (this.not_found = true))
        .finally(() => (this.loading = false))
      // repositories
      axios
        .get(`https://api.github.com/users/${this.username}/repos`)
        .then((response) => {
          const mapped = response.data.map(function(el, i) {
            return { index: i, value: el.stargazers_count, ...el }
          })

          mapped.sort(function(a, b) {
            return +(a.value < b.value) || +(a.value === b.value) - 1
          })
          this.repos = mapped
        })
        .catch(() => (this.not_found = true))

        //starred
        axios
        .get(`https://api.github.com/users/${this.username}/starred`)
        .then((response) => (this.starred = response.data.length))
    },
  },
  watch: {
    $route() {
      this.searchUser()
    },
  },
  components: {
    Navbar,
    Informations,
    Loading,
    UserNotFound,
  },
}
</script>

<style scoped>
#body {
  width: 100%;
}
</style>
