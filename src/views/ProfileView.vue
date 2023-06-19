<template>
    <div>
        <page-header></page-header>

        <profile-comp></profile-comp>

    </div>
</template>

<script>
import ProfileComp from '@/components/ProfileComp.vue';
import PageHeader from '@/components/PageHeader.vue';
    export default {
        components:{
            ProfileComp,
            PageHeader
        }
    }
</script>

<style lang="scss" scoped>

</style>