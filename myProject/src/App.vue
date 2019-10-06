<template>
  <div>
    <h3>男士潮流旗舰店</h3>
    <!-- <ul>
      <li v-for="item in menus" :key="item.name"></li>
    </ul>-->
      <header>
        <el-row>
          <el-col :span="16">
            <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" router>
              <el-menu-item :index="item.path" v-for="item in menus" :key="item.name">
                <!--el-menu这个菜单集成了跳转，所以可以不写router-link，只需要加一个属性router就可以了 -->
                <!-- <router-link :to="item.path" active-class="current"> -->
                {{item.text}}
                <!-- </router-link> -->
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="8">
            <!-- <el-button-group> -->
            <el-button type="text" @click="goto('/reg')">注册</el-button>
            <el-button type="text" @click="goto('/login')">登录</el-button>
            <!-- </el-button-group> -->
          </el-col>
        </el-row>
      </header>
    <router-view />
    <!--路由的内容在这儿显示-->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "",
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车页"
        },
        {
          name: "discover",
          path: "/discover",
          text: "发现"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    //index: 选中菜单项的 index; indexPath: 选中菜单项的 index path
    handleSelect(index, activeIndex) {
      this.activeIndex = index;
    },
    goto(path) {
      this.$router.push(path);
    }
  },
  created() {
    this.activeIndex = this.$route.path;
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.current {
  color: #f00;
  font-weight: bold;
}
.txt-right {
  margin-top: 15px;
}
</style>