<template>
  <el-dialog
    :visible.sync="showForm"
    :before-close="closeForm"
    title="Form Perusahaan"
    width="500px"
  >
    <el-form
      label-width="130px"
      label-position="left"
    >
      <el-form-item
        label="Nama Perusahaan"
        :class="{ 'is-error': errors.nama_perusahaan }"
      >
        <el-input
          v-model="form.nama_perusahaan"
          placeholder="Nama Perusahaan"
        ></el-input>
        <div
          v-if="errors.nama_perusahaan"
          class="el-form-item__error"
        >
          {{ errors.nama_perusahaan.join(', ') }}
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
      <el-form-item
        label="Pemilik"
        :class="{ 'is-error': errors.pemilik }"
      >
        <el-input
          v-model="form.pemilik"
          placeholder="Pemilik"
        ></el-input>
        <div
          v-if="errors.pemilik"
          class="el-form-item__error"
        >
          {{ errors.pemilik.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item
        label="Kota"
        :class="{ 'is-error': errors.kota }"
      >
        <el-input
          v-model="form.kota"
          placeholder="Kota"
        ></el-input>
        <div
          v-if="errors.kota"
          class="el-form-item__error"
        >
          {{ errors.kota.join(', ') }}
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
      url: "/api/perusahaan",
    };
  },
};
</script>
