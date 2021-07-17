<template>
  <el-container>
    <el-card>
      <el-form>
        <el-form-item label="Email">
          <el-input
            v-model="email"
            placeholder="Email"
            prefix-icon="el-icon-message"
          ></el-input>
        </el-form-item>
        <el-form-item label="Pasword">
          <el-input
            v-model="password"
            type="password"
            placeholder="Password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            class="btn-block"
            @click="login"
          >Login</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </el-container>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      this.$auth
        .loginWith("laravelSanctum", {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => {
          this.$route.push("/");
        })
        .catch((e) => {
          if (e.response.status) {
            this.$message({
              message: e.response.data.message,
              type: "error",
            });
          }
        });
    },
  },
};
</script>

<style scoped>
.el-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
