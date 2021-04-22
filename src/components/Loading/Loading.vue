<template>
  <div id="body_loading">
    Buscando usuário...
    <font-awesome-icon
      icon="spinner"
      style="color: black"
      size="lg"
      id="spinner"
    />
  </div>
</template>

<style scoped>
#body_loading {
  width: 100%;
  height: 100vh;
  z-index: 100;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
}

#spinner {
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 600px) {
  #body_loading {
    font-size: 1.5em;
  }
}
</style>
