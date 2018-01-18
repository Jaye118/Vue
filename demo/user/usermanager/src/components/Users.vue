<template>
  <div class="users">
    <h1>users</h1>

    <!--添加用户信息-->
    <form v-on:submit="addUser">
        <input type="text" v-model="newUser.name" placeholder="Enter name">
        <input type="text" v-model="newUser.email" placeholder="Enter email">
        <input type="submit" value="Submit">
    </form>

    <!--展示用户信息-->

    <ul>
        <li v-for="user in users">
            <input type="checkbox" class="toggle" v-model="user.contacted">
            <span :class="{contacted:user.contacted}">
                {{user.name}}:{{user.email}}
                 <button v-on:click="deleteUser(user)">x</button>
            </span>

        </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'users',
  data(){
      return {
          newUser:{},
          users:[
              {
                  name:"hem",
                  email:"hem@gmail.com",
                  contacted:false
              },
              {
                  name:"wu",
                  email:"wu@gmail.com",
                  contacted:false
              },
              {
                  name:"fl",
                  email:"fl@gmail.com",
                  contacted:false
              }
          ]
      }
  },
  methods:{
    addUser:function(e){
        //console.log("hhhh");
        this.users.push({
          name:this.newUser.name,
          email:this.newUser.email,
          contacted:false
        });
        //取消默认事件
        e.preventDefault();
    },
    deleteUser:function(user){
        this.users.splice( this.users.indexOf(user),1 )
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
  margin-left:45%;
}
li{
  text-align:left;
}
a {
  color: #42b983;
}
.contacted{
  text-decoration:line-through;
}
</style>
