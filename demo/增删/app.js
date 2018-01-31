var list = [
	{
		title:"当然是的法定",
		isChecked:false //状态为false，为不选中  任务未完成
	},
	{
		title:"手动改水电费跟帅哥",
		isChecked:true   //状态为true，为选中    任务完成
	}
];

new Vue({
	el:".main",
	data:{
		list:list,
		todo:"",
		edtorTodos:''//记录正在编辑的数据
	},
	methods:{
		addTodo:function(){
			//向list中添加一项任务
			//if(ev.keyCode === 13){  用enter修饰符代替了
				this.list.push({
					//title:ev.target.value
					title:this.todo,
					isChecked:false
				});
				this.todo = "";
			//}
		},
		deleteTodo:function(todo){
			var index = this.list.indexOf(todo);
			this.list.splice(index,1)
		},
		edtorTodo:function(todo){
			this.edtorTodos = todo;
		}
	}
});