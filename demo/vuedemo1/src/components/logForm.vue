<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText:''
    }
  },
  computed: {
      userErrors(){
          let status,errorText;
          if(!/@/g.test(this.usernameModel)){
              status = false;
              errorText = '不包含@'
          }else{
              status = true;
              errorText = ''
          };

          //首次进入，userFlag是undefined，!undefined == true;手动输入时则是第二次进入，此时userFlag已赋值为true
          if( !this.userFlag ){
              errorText = '';
              this.userFlag = true;
          };

          return {
              status,
              errorText
          };


      },
      passwordErrors(){
          let status,errorText;
              if(!/^\w{1,6}$/g.test(this.passwordModel)){
                  status = false;
                  errorText = '密码不是1-6位'
              }else{
                  status = true;
                  errorText = ''
              };
              if( !this.passwordFlag ){
                  errorText = '';
                  this.passwordFlag = true;
              };
              return {
                  status,
                  errorText
              }
      }
  },
  methods: {
      onLogin () {
          if( !this.userErrors.status || !this.passwordErrors.status ){
              this.errorText = '部分选项未通过'
          }else{
              this.errorText = '';
              console.log("logging");

              //因未走后台请求，正确写法如下
              /*this.$http.post('api/login')
                  .then( (res) => {
                      res.username = "yi";
                      res.userId = "123456";
                      this.$emit('has-log',res)
                  }, (error) => {
                      console.log(error)
                  })
              */
              this.$emit('has-log');
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
