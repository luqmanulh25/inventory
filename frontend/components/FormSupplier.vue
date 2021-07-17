<template>
  <el-dialog
    :visible.sync="showForm"
    :before-close="closeForm"
    title="Form Supplier"
    width="500px"
  >
    <el-form
      label-width="120px"
      label-position="left"
    >
      <el-form-item
        label="Nama Supplier"
        :class="{ 'is-error': errors.nama_supplier }"
      >
        <el-input
          v-model="form.nama_supplier"
          placeholder="Nama Supplier"
        ></el-input>
        <div
          v-if="errors.nama_supplier"
          class="el-form-item__error"
        >
          {{ errors.nama_supplier.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item
        label="Alamat"
        :class="{ 'is-error': errors.alamat }"
      >
        <el-input
          type="textarea"
          v-model="form.alamat"
          placeholder="Alamat"
          rows="3"
        >
        </el-input>
        <div
          v-if="errors.alamat"
          class="el-form-item__error"
        >
          {{ errors.alamat.join(', ') }}
        </div>
      </el-form-item>
    </el-form>
    <template slot="footer">
      <el-button @click="closeForm">Batal</el-button>
      <el-button
        type="primary"
        @click="saveData"
      >Simpan</el-button>
    </template>
  </el-dialog>
</template>

<script>
import formMixins from "~/mixins/form";
export default {
  props: ["showForm", "form"],
  mixins: [formMixins],
  data() {
    return {
      url: "/api/supplier",
    };
  },
};
</script>
