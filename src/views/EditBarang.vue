<template lang="">
    <div>
        
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
created(){
    this.$store.dispatch('GET_DATA_ID_BARANG',this.$route.params.id)
}
}
</script>
<style lang="">
    
</style>