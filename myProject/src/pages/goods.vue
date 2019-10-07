<template>
  <div>
    <el-image style="width: 300px;" :src="goodsInfo.goods_image" fit="contain"></el-image>
    <h4>{{goodsInfo.goods_name}}</h4>
    <p class="price">
      <del>{{goodsInfo.goods_marketprice}}</del>
      <span>{{goodsInfo.goods_price}}</span>
    </p>
    <el-button-group>
      <el-button type="warning" icon="el-icon-shopping-bag-1">立即购买</el-button>
      <el-button type="danger" icon="el-icon-shopping-cart-1">加入购物车</el-button>
    </el-button-group>
    <h5 style="color:orange">类似商品推荐</h5>
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="item in goodsInfo.goods_commend_list"
        :key="item.goods_id"
        style="height:380px"
        @click.native="goto(item.goods_id)"
      >
        <el-image style="width: 100%;" :src="item.goods_image_url" fit="contain"></el-image>
        <p class="gName">{{item.goods_name}}</p>
        <p class="price">
          <del>{{item.goods_promotion_price}}</del>
          <span>{{(item.goods_promotion_price*0.7).toFixed(2)}}</span>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import axios from "axios";现在不用引入axios因为在main.js里面将axios已经挂载在了Vue的原型链上面，直接通过this.$axios.get获取,首页上的axios也是可以不用引入了
export default {
  data() {
    return {
      //   id: "",
      goodsInfo: {}
    };
  },
  watch: {
    //监听实例下的所有属性
    //当实例下的$router属性发生变化时，执行函数中的代码
    $route: function(val, oldVal) {
      //   console.log(val, oldVal); //打印的是变化前和变化后的$router
      //判断id变化时执行ajax请求
      if (val.params.id != oldVal.params.id) {
        this.getData(val.params.id);//重新发送一次ajax请求
      }
    }
  },
  created() {
    let { id } = this.$route.params;
    this.getData(id);
  },
  methods: {
    goto(id) {
      this.$router.push("/goods/" + id);
    },
    async getData(id) {
      //axios返回的数据格式是{headers,status,data:接口返回的数据},所以下面直接解构的data
      let {
        data: { datas }
      } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
        params: {
          act: "goods",
          op: "goods_detail",
          goods_id: id,
          key: ""
        }
      });
      // console.log("datas", datas);
      this.goodsInfo = {
        ...datas.goods_info,
        goods_commend_list: datas.goods_commend_list,
        goods_image: datas.goods_image
      };
    }
  }
};
</script>
<style lang="scss">
.price {
  del {
    &::before {
      content: "￥";
    }
    color: #ddd;
    font-size: 10px;
    padding-right: 5px;
  }
  span {
    &::before {
      content: "￥";
    }
    color: red;
    font-size: 14px;
    padding-left: 15px;
  }
}
</style>