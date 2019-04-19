<template>
  <div class="hello">
    <Button @click='toTalk'>跳转</Button>
  </div>
</template>

<script>
  import {toTalk} from '../api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
   let isLogin = sessionStorage.getItem('userName');
   if(isLogin){
      console.log('登陆了');
      this.$router.push('/home')
   }else{
     this.$router.push('/login')
   }
  },
  methods:{ 
    clickRouter(){
      this.$router.push('/home')
    },
   async toTalk(){
        let res =await toTalk();
        console.log(res);
        window.open('http://localhost:3000/users/talk')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
