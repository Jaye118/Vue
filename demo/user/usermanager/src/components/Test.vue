<template>
  <div class="test">
    <h1>{{title}}</h1>
    <p>{{user.firstName}}</p>
    <p v-text="user.lastName"></p>

    <!-- if -->
    <p v-if="showName">{{user.firstName}}</p>
    <p v-else>Nobody</p>

    <hr>
    <!--计算属性-->
    <label>First Name:</label>
    <input type="text" v-model="user.firstName">
    <br>
    <label>last Name:</label>
    <input type="text" v-model="user.lastName">

    <h3>{{fullName}}</h3>




    <!--属性props-->
    <h2>{{msg}}</h2>









  </div>
</template>

<script>
export default {
  name: 'test',
  props:{
    msg:{
      type:String,
      default:'默认的字'
    }
  },
  data(){
      return {
          title:"hellow vuejs",
          user:{
              firstName:"Hem",
              lastName:"wu"
          },
          showName:false
      }
  },
  computed:{
      fullName:function(){
        return this.user.firstName + "" + this.user.lastName
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
