<template>
  <div>

    <div class="d-flex justify-content-between mb-3">
      <h3>Perusahaan</h3>
      <el-form
        inline
        @submit.prevent.native
      >
        <el-form-item>
          <el-button
            type="primary"
            @click.prevent.native="openForm({})"
            size="medium"
          >+ Tambah Perusahaan</el-button>
        </el-form-item>
        <el-form-item>
          <el-input
            size="small"
            v-model="keyword"
            placeholder="Search"
            prefix-icon="el-icon-search"
            clearable
            @change="
							pagination.current_page = 1
							getData()
						"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>

    <el-card>
      <el-table
        :data="tableData"
        v-loading="loading"
        stripe
        @selection-change="onSelectionChange"
      >
        <el-table-column
          type="index"
          label="#"
          :index="pagination.from"
        ></el-table-column>
        <el-table-column
          prop="nama_perusahaan"
          label="Nama Perusahaan"
        ></el-table-column>
        <el-table-column
          prop="alamat"
          label="Alamat"
        > </el-table-column>
        <el-table-column
          prop="pemilik"
          label="Pemilik"
        > </el-table-column>
        <el-table-column
          prop="kota"
          label="Kota"
        > </el-table-column>
        <el-table-column
          fixed="right"
          width="100"
          header-align="center"
          align="center"
        >
          <template slot="header">
            <el-button
              @click="refreshData"
              type="text"
              icon="el-icon-refresh"
            ></el-button>
          </template>
          <template slot-scope="scope">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-more el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  icon="el-icon-edit"
                  @click.native.prevent="openForm(scope.row)"
                >Edit</el-dropdown-item>
                <el-dropdown-item
                  icon="el-icon-delete"
                  @click.native.prevent="deleteData(scope.row.id)"
                >Delete</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <br />
    <el-pagination
      :total="pagination.total"
      :current-page.sync="pagination.current_page"
      @current-change="onCurrentChange"
      @size-change="onSizeChange"
      :page-sizes="[10, 50, 100]"
      :page-size="pagination.per_page"
      layout="total, prev, pager, next, sizes"
    ></el-pagination>

    <FormPerusahaan
      :showForm="showForm"
      :form="selectedRow"
      @close="showForm = false"
      @refresh="getData"
    />

  </div>
</template>

<script>
import crud from "~/mixins/crud";
export default {
  mixins: [crud],
  data() {
    return {
      url: "/api/perusahaan",
    };
  },
};
</script>
