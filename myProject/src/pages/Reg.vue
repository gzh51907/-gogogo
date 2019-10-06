<template>
  <div>
    <h1>亲，请注册</h1>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交注册信息</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//上面的数据在下面要导出
export default {
  data() {
    const validatePass = (rule, value, callback) => {
      // if (value === '') {
      //   callback(new Error('请再次输入密码'));
      // } else
      if (value !== this.ruleForm.password) {
        //验证两次不一致
        callback(new Error("两次输入密码不一致!"));
      } else {
        //验证两次一致
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        ckeckPass: ""
      },
      rules: {
        password: [
          { required: true, message: "你没输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        checkPass: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请确认密码", trigger: "blur" }
        ],
        username: [
          { required: true, message: "你没输入用户名", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
          //valid:所有验证都通过得到true，否则得到的是false
        if (valid) {
          alert("恭喜你,验证全部通过");
          //然后跳转到"我的"页面
          //这里只能用编程式导航
        //   this.$router.replace('/mine');
          //还可以用对象的形式跳转
        //   this.$router.replace({path:'/mine'})或
        //解构
        let {username} =this.ruleForm;
        this.$router.replace({name:'mine',params:{username}})
        // this.$router.replace({name:'mine',query:{username}})
        } else {
        //   console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>