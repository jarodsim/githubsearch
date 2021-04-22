<template>
  <div id="body">
    <!-- details/avatar/left-site -->
    <div id="details">
      <div id="details_header">
        <img :src="avatar_url" alt="github avatar" />
        <h3>{{ name }}</h3>
        <p>{{ login }}</p>
      </div>

      <div id="details_infos">
        <ul>
          <li>
            <div class="details_info_icon">
              <font-awesome-icon
                icon="briefcase"
                style="color: black"
                size="lg"
              />
            </div>
            {{ company === null ? 'Não encontrado' : company }}
          </li>
          <li>
            <div class="details_info_icon">
              <font-awesome-icon
                icon="map-pin"
                style="color: black"
                size="lg"
              />
            </div>
            {{ location === null ? 'Não encontrado' : location }}
          </li>
          <li>
            <div class="details_info_icon">
              <font-awesome-icon icon="star" style="color: black" size="lg" />
            </div>
            {{starred}}
          </li>
          <li>
            <div class="details_info_icon">
              <font-awesome-icon
                icon="archive"
                style="color: black"
                size="lg"
              />
            </div>
            {{ public_repos }}
          </li>
          <li>
            <div class="details_info_icon">
              <font-awesome-icon
                icon="user-friends"
                style="color: black"
                size="lg"
              />
            </div>
            {{ followers }}
          </li>
        </ul>
      </div>
    </div>

    <!-- repositories/right-side -->
    <div id="repos">
      <div v-for="repo in repos" :key="repo.name">
        <Repo
          :title="repo.name"
          :about="repo.description"
          :stars="repo.stargazers_count"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Repo from './Repo'

export default {
  props: {
    repos: Array,
    avatar_url: String,
    login: String,
    name: String,
    location: String,
    public_repos: Number,
    followers: Number,
    company: String,
    starred: Number
  },
    components: {
    Repo,
  },
}
</script>

<style scoped>
#body {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: 'Rubik', 'Roboto Mono', Helvetica, Arial, sans-serif;
}

#details {
  display: flex;
  flex-direction: column;
  width: 20%;
}

#details img {
  width: 100%;
}

#details_header {
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

#details_header h3,
p {
  margin: 0;
}

#details_header p {
  color: #757575;
}

#details_infos {
  width: 100%;
  margin-top: 7%;
}

#details_infos ul {
  list-style: none;
  text-align: left;
  padding: 0;
}

#details_infos ul li {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;
  color: #757575;
}

.details_info_icon {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
}

#repos {
  width: 60%;
}

@media screen and (max-width: 600px) {
  #body {
    flex-direction: column;
  }

  #details {
    width: 90%;
    margin: auto;
  }

  #repos {
    width: 90%;
    margin: auto;
  }
}
</style>
