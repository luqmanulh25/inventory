<template>
  <el-dialog
    :visible.sync="showForm"
    :before-close="closeForm"
    title="User Form"
    width="500px"
  >
    <el-form
      label-width="120px"
      label-position="left"
    >
      <el-form-item
        label="Nama"
        :class="{ 'is-error': errors.nama }"
      >
        <el-input
          v-model="form.nama"
          placeholder="Nama"
        ></el-input>
        <div
          v-if="errors.nama"
          class="el-form-item__error"
        >
          {{ errors.nama.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item
        label="Email"
        :class="{ 'is-error': errors.email }"
      >
        <el-input
          v-model="form.email"
          placeholder="Email"
        >
        </el-input>
        <div
          v-if="errors.email"
          class="el-form-item__error"
        >
          {{ errors.email.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item
        label="Password"
        :class="{'is-error' :errors.password}"
      >
        <el-input
          type="password"
          v-model="form.password"
          placeholder="Password"
        ></el-input>
        <div
          v-if="errors.password"
          class="el-form-item__error"
        >{{errors.password.join(', ')}}</div>
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
      url: "/api/user",
    };
  },
};
</script>
