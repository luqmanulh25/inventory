<template>
  <el-container>
    <el-header>
      <div class="d-flex justify-content-between ">
        <div class="logo">
          <i class="el-icon-eleme text-muted"></i> EVERGREEN
        </div>
        <div class="account">
          <i class="el-icon-user-solid"></i> <i class="el-icon-arrow-down"></i>
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu
          router=""
          :default-active="$route.path"
          class="el-menu-vertical-demo"
        >
          <el-menu-item
            v-for="(menu, i) in menus"
            :key="i"
            :index="menu.path"
          >
            <i :class="menu.icon"></i>
            {{ menu.label }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <Nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  middleware: ["auth"],
  data() {
    return {
      menus: [
        { label: "Admin", path: "/user", icon: "el-icon-user" },
        { label: "Daftar Barang", path: "/barang", icon: "el-icon-box" },
        { label: "Supplier", path: "/supplier", icon: "el-icon-truck" },
        {
          label: "Perushaan",
          path: "/perusahaan",
          icon: "el-icon-office-building",
        },
      ],
      subMenu: [],
    };
  },
};
</script>

<style >
.el-header {
  padding: 0;
  height: 60px;
  line-height: 60px;
  background-color: #545c64;
}

.logo,
.account {
  color: #fff;
  padding: 0 20px 0 20px;
}

.el-main {
  height: calc(100vh - 60px);
}

.el-aside .el-menu {
  height: calc(100vh - 60px);
}
</style>

