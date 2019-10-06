<template>
    <div>
        {{username}}的首页
    </div>
</template>
<script>
export default{
   data(){
       return {
           username:''
       }
   },
   created(){
    //    console.log(this.$route);
       this.username = this.$route.params.username
   }
}
</script>