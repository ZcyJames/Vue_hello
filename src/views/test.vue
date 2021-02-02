<template>
  <div>
    <PaoMaDeng hello="这是登录页面"/><br>

    <input type="text" v-model="userName" placeholder="用户名"/><br>
    <input type="password" v-model="passWord" placeholder="密码"/><br>
    <button @click="logCheck();">登录</button>
    <Button1/>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
import PaoMaDeng from "@/components/PaoMaDeng";
import Button1 from "@/components/Button1";
export default {
  name: "test",
  components: {Button1, PaoMaDeng},
  data(){
    return{
      userName:'',
      passWord:'',
    }
  },
  methods:{
    logCheck:function (){
      if(this.userName.trim()===""||this.passWord.trim()===""){
        alert("请输入有效信息！")
      }else{
        Cookies.set("user",this.userName);
        this.$router.push('/about');
      }
    }
  }
}
</script>

<style scoped>

</style>