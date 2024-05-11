<template>
  <div class="container-body">
    <div class="card-login">
      <v-icon class="mt-6" icon="$logo-peniel-full-icon" size="130"></v-icon>
      <span class="card-text">Administração</span>
      <div class="card-login-form">
        <v-text-field
          class="input-form"
          label="Email"
          model-value="admin@compeninel.com"
          variant="outlined"
          base-color="#131313"
          color="#131313"
          density="compact"
        ></v-text-field>
        <v-text-field
          class="input-form"
          label="Senha"
          type="password"
          model-value="compeniel123"
          variant="outlined"
          base-color="#131313"
          color="#131313"
          density="compact"
        ></v-text-field>
      </div>
      <v-btn @click="login">
        Entrar
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/dashboardAdmin')
    }
  }
}
  //
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Aclonica&family=Advent+Pro:ital,wght@0,100..900;1,100..900&family=Keania+One&family=Lilita+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Tac+One&family=Tilt+Neon&display=swap');

.container-body {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #131313;
  justify-content: center;
  align-items: center;
  .card-login {
    width: 22%;
    max-width: 420px;
    min-width: 400px;

    height: 50%;
    max-height: 470px;
    min-height: 420px;

    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    .card-text {
      color: #000;
      font-weight: bold;
      font-family: "Montserrat", sans-serif;
      font-size: 18px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .card-login-form {
      width: 80%;
    }
  }
}

.input-form {
  color: #131313 !important;
  margin-top: 16px;
}
</style>