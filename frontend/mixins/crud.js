export default {
  data() {
    return {
      tableData: [],
      loading: false,
      showForm: false,
      keyword: "",
      filters: {},
      selectedRow: {},
      form: {},
      errors: {},
      pagination: {
        from: 0,
        to: 0,
        total: 0,
        per_page: 10,
        current_page: 1
      }
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    getData() {
      const params = {
        keyword: this.keyword,
        page: this.pagination.current_page,
        per_page: this.pagination.per_page,
        paginated: true,
        ...this.filters
      };

      this.loading = true;

      this.$axios
        .$get(this.url, { params })
        .then(r => {
          this.tableData = r.data;
          const { from, to, total, per_page, current_page } = r;
          this.pagination = {
            from,
            to,
            total,
            per_page: Number(per_page),
            current_page
          };
        })
        .catch(e => {
          this.$message({
            message: e.reponse.data.message,
            type: "error",
            showClose: true
          });
        })
        .finally(() => (this.loading = false));
    },

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
            this.closeForm();
            this.$emit("refresh", r.data.data);
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

    deleteData(id) {
      this.loading = true;

      this.$confirm("Anda Yakin?", "Konfirmasi", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() =>
          this.$axios.$delete(`${this.url}/${id}`).then(() => {
            this.getData();
            this.closeForm();
            this.$message({
              type: "error",
              message: "Berhasil Dihapus"
            });
          })
        )
        .catch(e => {
          if (e.response.status == 5555) {
            this.$message({
              message: e.response.data.message,
              type: "error"
            });
          }
        })
        .finally(() => (this.loading = false));
    },

    refreshData() {
      this.keyword = "";
      this.pagination.current_page = 1;
      this.getData();
    },

    closeForm() {
      this.$emit("close");
      this.showForm = false;
      this.errors = {};
    },

    openForm(data) {
      this.form = JSON.parse(JSON.stringify(data)); // untuk form jadi 1 sama index
      this.selectedRow = JSON.parse(JSON.stringify(data)); // untuk form terpisah sama index
      this.showForm = true;
    },

    onCurrentChange(c) {
      this.pagination.current_page = c;
      this.getData();
    },

    onSizeChange(s) {
      this.pagination.per_page = s;
      this.getData();
    },

    onSelectionChange(selection) {
      this.selectedData = selection;
      // console.log(selection)
    },

    isNumber(e) {
      const char = String.fromCharCode(e.which);
      if (!/[0-9]/.test(char)) {
        e.preventDefault();
      }
    }
  }
};
