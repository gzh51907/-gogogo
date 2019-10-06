<template>
    <div>
        {{id}}商品页
    </div>
</template>
<script>
export default{
    data(){
        return {
            id:''
        }
    },
    created(){
        this.id = this.$route.params.id;
    }
}
</script>