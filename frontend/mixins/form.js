export default {
  data() {
    return {
      loading: false,
      errors: {}
    };
  },

  methods: {
    saveData() {
      this.loading = true;
      this.$confirm("Anda yakin?", "Konfirmasi", {
        type: "warning"
      }).then(() => {
        this.$axios({
          method: this.form.id ? "put" : "post",
          url: this.form.id ? `${this.url}/${this.form.id}` : this.url,
          data: this.form
        })
          .then(r => {
            this.$emit("refresh", r.data.data);
            this.closeForm();
            this.$message({
              message: r.data.message,
              type: "success",
              showClose: true
            });
          })
          .catch(e => {
            if (e.response.status == 422) {
              this.errors = e.response.data.errors;
            }
            this.$message({
              message: e.response.data.message,
              type: "error",
              showClose: true
            });
          })
          .finally(() => (this.loading = false));
      });
    },

    closeForm() {
      this.errors = {};
      this.$emit("close");
      this.$emit("refresh");
    },

    isNumber(e) {
      const char = String.fromCharCode(e.which);
      if (!/[0-9]/.test(char)) {
        e.preventDefault();
      }
    }
  }
};
