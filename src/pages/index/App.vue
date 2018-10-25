<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import checkToken from '@/plugins/check-token'
    export default {

        name: "app",
        data() {
            return {
            };
        },
        created() {
            // 刷新页面重置token
            checkToken.globalRefresh()
        },
        methods: {
        }
    };
</script>

<style lang="less">
</style>
