<template>
  <div
    class="mx-4 sm:mx-24 md:mx-34 lg:mx-56 mx-auto flex items-center space-y-4 py-16 font-semibold text-gray-500 flex-col"
  >
    <img src="../assets/img/marketmix.png" alt="MarketMix Logo" width="100" />
    <h1 class="text-white text-2xl">Inicio de sesión</h1>
    <select
      class="w-full p-2 bg-gray-900 rounded-md border border-gray-700 focus:border-blue-700"
      name="rol"
      v-model="input.rol"
    >
      <option disabled value="">Selecciona tu rol</option>
      <option value="admin">Administrador</option>
      <option value="secretary">Secretario/a</option>
      <option value="vendor">Vendedor/a</option>
      <option value="assembler">Ensamblador/a</option>
    </select>
    <input
      class="w-full p-2 bg-gray-900 rounded-md border border-gray-700"
      placeholder="PIN"
      type="password"
      name="pin"
      v-model="input.pin"
    />
    <button
      class="w-full p-2 bg-gray-50 rounded-lg font-bold text-gray-900 border border-gray-700"
      name="submit"
      @click="login"
    >
      <span>Enviar</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        rol: "",
        pin: "",
      },
      users: [
        {
          rol: "admin",
          pin: 9740,
        },
        {
          rol: "secretary",
          pin: 9741,
        },
        {
          rol: "vendor",
          pin: 9742,
        },
        {
          rol: "assembler",
          pin: 9743,
        },
      ],
    };
  },
  methods: {
    login() {
      if (this.input.rol != "" && this.input.pin != "") {
        // This should actually be an api call not a check against this.$parent.mockAccount
        const user = this.users.find(
          (user) => user.rol === this.input.rol && user.pin == this.input.pin
        );
        if (this.input.rol === user.rol && this.input.pin == user.pin) {
          this.$emit("authenticated", true);
          this.$parent.currentRol = this.input.rol;
          const userToStore = {
            rol: user.rol,
            pin: CryptoJS.SHA512(user.pin),
          };
          localStorage.setItem("user", JSON.stringify(userToStore));
          this.$router.replace({
            name:
              this.input.rol.charAt(0).toUpperCase() + this.input.rol.slice(1),
          });
        } else {
          console.log("The rol and / or pin is incorrect");
        }
      } else {
        console.log("A rol and pin must be present");
      }
    },
  },
  mounted() {
    if (!this.$parent.authenticated && this.$parent.currentRol) {
      this.$router
        .replace({
          name:
            this.$parent.currentRol.rol?.charAt(0).toUpperCase() +
            this.$parent.currentRol.rol?.slice(1),
        })
        .catch(() => {});
    }
  },
};
</script>

<style>
#login .form-inputs {
  padding-bottom: 10px;
}

#login .form-inputs label {
  padding-right: 10px;
}
</style>
