<template>
	<div class="user">
        <div class="search">
            <i-button type="info" @click="addUser = true">添加用户</i-button>
        </div>
		 <i-Table border size="small" :columns="columns1" :data="users" ></i-Table>
         <Modal
            v-model="addUser"
            title="添加用户"
            @on-ok="ok"
            @on-cancel="cancel" class="addUsers">
            <ul>
                <li><span>姓名:</span><i-input v-model="users.name" style="width:300px"></i-input></li>
                <li><span>年龄:</span><i-input v-model="users.age" style="width:300px"></i-input></li>
                <li><span>星座:</span><i-input v-model="users.constellation" style="width:300px"></i-input></li>
                <li><span>地址:</span><i-input v-model="users.address" style="width:300px"></i-input></li>
            </ul>
        </Modal>
	</div>
</template>
<script>
import axios from 'axios'
	export default {
        data () {
            return {
                users:[
                    {
                        name:"",
                        age:"",
                        constellation:"",
                        address:""
                    }
                ],
                addUser:false,
                columns1: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 120,
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 70,
                    },
                    {
                    	title:'星座',
                    	key:'constellation',
                    	width: 120,
                    },
                    {
                        title: '地址',
                        key: 'address',
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on:{
                                        click:() =>{
                                             this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')

                            ]);
                        }
                    }
                ]
            }
        },
        created() {
          this.fetchData();
        },
        methods: {
            fetchData() {
                axios.get('../../static/db.json').then((response) => {
                    var data = response.data.people;
                    console.log(data);
                    var users = [];
                    for (var i in data) {
                        users.push(data[i]);
                    }
                    this.users = users;
                })
            },
            show (index) {
                var users = this.users;

                this.$Modal.info({
                    title: '用户信息',
                    content:"姓名："+this.users[index].name+"<br>"+"年龄："+this.users[index].age+"<br>"+"星座："+this.users[index].constellation+"<br>"+"地址："+this.users[index].address+"<br>"
                })
            },
            remove (index) {
                this.users.splice(index, 1);
            },
            ok() {

            },
            cancel () {
            }
        }
    }
</script>
<style>
	.search{
        height: 70px;
    }
    .addUsers{
        text-align: center;
    }
    .addUsers span{
        width: 70px;
        display: inline-block;
    }
    .addUsers ul li{
        height: 50px;
    }
</style>