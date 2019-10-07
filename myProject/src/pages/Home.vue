<template>
  <div>
    <el-carousel height="120px">
      <el-carousel-item v-for="item in adlist" :key="item.image">
        <img :src="item.image" style="width:100%" />
      </el-carousel-item>
    </el-carousel>
    <!-- <el-button @click="gotos">点击跳转详情页</el-button> -->
    <p class="tit">{{recommed.title}}</p>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in recommed.item" :key="item.goods_id" style="height:380px" @click.native="goto(item.goods_id)">
        <el-image style="width: 100%;" :src="item.goods_image" fit="contain"></el-image>
        <p class="gName">{{item.goods_name}}</p>
        <p class="price">
          <del>{{item.goods_price}}</del>
          <span>{{(item.goods_promotion_price*0.7).toFixed(2)}}</span>
        </p>
      </el-col>
    </el-row>
    <p class="news">{{newClo.title}}</p>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in newClo.item" :key="item.goods_id" style="height:380px" @click.native="goto(item.goods_id)">
        <el-image style="width: 100%;" :src="item.goods_image" fit="contain"></el-image>
        <p class="gName">{{item.goods_name}}</p>
        <p class="price">
          <del>{{item.goods_price}}</del>
          <span>{{(item.goods_promotion_price*0.7).toFixed(2)}}</span>
        </p>
      </el-col>
    </el-row>
    <p class="underwear">{{underWear.title}}</p>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in underWear.item" :key="item.goods_id" style="height:380px"  @click.native="goto(item.goods_id)">
        <el-image style="width: 100%;" :src="item.goods_image" fit="contain"></el-image>
        <p class="gName">{{item.goods_name}}</p>
        <p class="price">
          <del>{{item.goods_price}}</del>
          <span>{{(item.goods_promotion_price*0.7).toFixed(2)}}</span>
        </p>
      </el-col>
    </el-row>
    <p class="shoe">{{manshoe.title}}</p>
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in manshoe.item" :key="item.goods_id" style="height:380px"  @click.native="goto(item.goods_id)">
        <el-image style="width: 100%;" :src="item.goods_image" fit="contain"></el-image>
        <p class="gName">{{item.goods_name}}</p>
        <p class="price">
          <del>{{item.goods_price}}</del>
          <span>{{(item.goods_promotion_price*0.7).toFixed(2)}}</span>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import axios from "axios"; //引入第三方模块axios
export default {
  data() {
    return {
      adlist: [], //轮播图
      recommed: [], //新品推荐数据
      newClo: [], //全新裤子上市
      underWear: [], //男士内裤
      manshoe:[] //男士鞋
    };
  },
  methods: {
    goto(id) {
      // this.$router.push( `/goods/${id}`);或者下面的这种方式
      //现在点击不能跳转，因为点击事件绑在了组件上，不能监听这个点击事件，所以要手动加一个native属性给click
      this.$router.push({ name: "goods", params: {id}});
    }
  },
  async created() {
    //发起ajax请求,axios返回的是一个promise对象，
    let {
      data: { datas }
    } = await this.$axios.get("https://www.nanshig.com/mobile/index.php", {
      params: {
        act: "index"
      }
    });
    //   .then(res => {
    //     console.log("res:" , res);
    //   });
    // console.log(datas);
    //轮播图的数据
    this.adlist = datas[0].adv_list.item;

    //新品推荐数据
    this.recommed = datas[1].goods;
    //全新上市
    this.newClo = datas[2].goods;
    //男士小内裤
    this.underWear = datas[3].goods;
    //男士鞋子
    this.manshoe = datas[4].goods;
  }
};
</script>

<style lang="scss" scoped>
.price {
  del {
    &::before {
      content: "￥";
    }
    color: #ddd;
    font-size: 10px;
    padding-right:5px;
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
.tit {
  font-size: 18px;
  color: #f90;
}
.gName {
  font-size: 12px;
  color: #aaa;
}

.news {
  font-size: 18px;
  color: orangered;
}
.underwear {
  font-size: 18px;
  color: orange;
}
.shoe{
    font-size: 18px;
    color:tomato;
}
</style>