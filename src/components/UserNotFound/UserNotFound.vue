<template>
  <div id="user_not_found_body">
    <h1>Eu sei que dói :( Mas não consegui encontrar esse usuário :/</h1>
    <img src="../../assets/404.png" alt="imagem de usuário não encontrado" />
  </div>
</template>

<style scoped>
#user_not_found_body {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#user_bot_found_body h1 {
  font-size: 1em;
}

#user_not_found_body img {
  width: 50%;
}

@media screen and (max-width: 600px) {
  #user_not_found_body img {
    width: 100%;
  }
}
</style>
