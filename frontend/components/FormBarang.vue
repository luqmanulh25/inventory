<template>
  <el-dialog
    :visible.sync="showForm"
    :before-close="closeForm"
    :close-on-click-modal="true"
    title="Form Barang"
    width="500px"
  >
    <el-form
      label-position="left"
      label-width="120px"
    >
      <el-form-item
        label="Nama Barang"
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
        label="Satuan"
        :class="{ 'is-error': errors.satuan }"
      >
        <el-input
          @keypress.native="isNumber"
          placeholder="Satuan"
          v-model="form.satuan"
        >
        </el-input>
        <div
          v-if="errors.satuan"
          class="el-form-item__error"
        >
          {{ errors.satuan.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item
        label="Harga Jual"
        :class="{ 'is-error': errors.harga_jual }"
      >
        <el-input
          @keypress.native="isNumber"
          v-model="form.harga_jual"
          placeholder="Harga Jual"
        >
          <template slot="prefix">
            Rp
          </template>
        </el-input>
        <div
          v-if="errors.harga_jual"
          class="el-form-item__error"
        >
          {{ errors.harga_jual.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item
        label="Harga Beli"
        :class="{ 'is-error': errors.harga_beli }"
      >
        <el-input
          @keypress.native="isNumber"
          v-model="form.harga_beli"
          placeholder="Harga Beli"
        >
          <template slot="prefix">Rp</template>
        </el-input>
        <div
          v-if="errors.harga_beli"
          class="el-form-item__error"
        >
          {{ errors.harga_beli.join(', ') }}
        </div>
      </el-form-item>
      <el-form-item
        label="Stok"
        :class="{ 'is-error': errors.stok }"
      >
        <el-input
          @keypress.native="isNumber"
          v-model="form.stok"
          placeholder="Stock"
        >
        </el-input>
        <div
          v-if="errors.stok"
          class="el-form-item__error"
        >
          {{ errors.stok.join(', ') }}
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
      url: "/api/barang",
    };
  },
};
</script>
