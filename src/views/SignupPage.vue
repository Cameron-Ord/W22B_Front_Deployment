<template>
    <div>
        <page-header></page-header>

        <sign-up-comp></sign-up-comp>

        
    </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';
import SignUpComp from '@/components/SignUpComp.vue';


    export default {
        components:{
            PageHeader,
            SignUpComp
        },

    }
</script>

<style lang="scss" scoped>

</style>