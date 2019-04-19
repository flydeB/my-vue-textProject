<template>
    <div class='header'>
       <div class='title'>
            <span class='name'>Flyde</span>
            <span @click='login_out_btn' style="font-size: 12px;color:#fff;font-weight:700;cursor: pointer;">登出</span>
       </div>
      
       <div  v-if='isLogin'>
            <div class='bread-header'>
                    <Breadcrumb>
                        <BreadcrumbItem to="/">
                            <Icon type="ios-home-outline"></Icon> Home
                        </BreadcrumbItem>
                        <BreadcrumbItem to="/components/breadcrumb">
                            <Icon type="logo-buffer"></Icon> Components
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <Icon type="ios-cafe"></Icon> Breadcrumb
                        </BreadcrumbItem>
                    </Breadcrumb>
                
               </div>
              <hr style="border:0;background-color:#f1ebeb;height:1px;">
       </div>
      
    </div>
</template>

<script>
  export default {
      name:'myHeader',
      data(){
          return{
              isLogin:false
          }
      },
      created(){
         if(sessionStorage.getItem('userName')){
             this.isLogin = true
         }
      },
      methods:{
        login_out_btn(){
           sessionStorage.setItem('userName','');
           this.$router.push('/login')
        }
      }
  }
</script>

<style>
.header{
    width:100%;
    height:80px;
    background:#000;
    line-height:80px;
    position: relative;
}
.title .name{
    font-size:18px;
    color:#fff;
    font-weight:700;
    margin-left:100px
}
.bread-header{
    width:80%;
    margin:0 auto;
    padding-left:18px;
}
.bread-header .ivu-breadcrumb{
    height:60px;
    line-height: 60px
};
</style>