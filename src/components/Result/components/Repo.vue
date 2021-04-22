<template>
  <div id="body_repo">
    <h3 id="title">
      {{ title }}
    </h3>
    <p id="about">
      {{ about }}
    </p>
    <div id="stars_body">
      <div id="stars_icon">
        <font-awesome-icon icon="star" style="color: black" size="lg" />
        {{ stars }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    about: String,
    stars: Number,
  },
}
</script>

<style scoped>
#body_repo {
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  font-family: 'Rubik', 'Roboto Mono', Helvetica, Arial, sans-serif;
}

#body_repo h3,
p {
  margin: 2px;
  text-align: left;
  font-weight: 300;
}

#body_repo p {
  color: #757575;
}

#stars_body {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#stars_icon {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
</style>
