<template>
    <div id="project-contrain">
            <headers></headers>
            <nav-bar></nav-bar>
            <footer-bar></footer-bar>
    </div>
</template>

<script>
    import headers from './common/header'
    import navBar from './common/nav'
    import footerBar from './common/footer'
    export default {
        name: 'home',
        components: {
            headers,
            navBar,
            footerBar
        },
        data() {
            return {
            }
        },
        created(){
            let isLogin = sessionStorage.getItem('userName');
            if(isLogin == 'null' || isLogin == ''){
                this.$router.push('/login')
            }
        }
    }
</script>

<style scoped>
    .project-contrain {
        width: 100%;
        height: 100%;
        margin: 0 ;
        position:relative
    }
</style>