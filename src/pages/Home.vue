<style>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #dedede;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 450px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
        height: 450px;
        overflow-y: auto;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .right-content{
       /* width:80%;*/
        height: 450px;
    }
    .user_nav{
        width: 200px;
        height: 60px;
        float: right;
    }
    .user_nav .icon{
        width:60px;
        height: 60px;
        margin: 5px;
        float: left;
    }
    .user_nav .icon img{
        border-radius: 50%;
    }
    .user_nav .user{
        width: 100px;
        height: 60px;
        float: left;

    }
    .router-link-exact-active{
        color:#dedede;
    }
</style>
<template>
    <div id="app">
        <div class="layout">
        <Menu mode="horizontal" theme="light" active-name="1">
            <div class="layout-logo">
                <img :src="logo" alt="" width="100" height="30">
            </div>
            <div class="user_nav">
                <div class="icon">
                    <img :src="imgUrl" alt="" width="50" height="50">
                </div>
                <div class="user">
                    <Dropdown>
                        <a href="javascript:void(0)">
                            {{name}}
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <Dropdown-menu slot="list">
                            <Dropdown-item><router-link to="setting">设置</router-link></Dropdown-item>
                            <Dropdown-item>退出</Dropdown-item>
                        </Dropdown-menu>
                    </Dropdown>
                </div>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <i-col span="4">
                    <Menu active-name="1-1" width="auto" style='height:450px;' :open-names="['1']" theme='dark'>
                        <Submenu name="1" open-names >
                            <template slot="title" >
                                <Icon type="ios-navigate"></Icon>
                                首页
                            </template>
                            <Menu-item name="1-1" open-names><router-link to='/'>控制中心</router-link></Menu-item>

                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                文章中心
                            </template>
                            <Menu-item name="2-1"><router-link to='new'>文章发布</router-link></Menu-item>
                            <Menu-item name="2-2"><router-link to='article'>文章列表</router-link></Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                用户中心
                            </template>
                            <Menu-item name="3-1"><router-link to='user'>用户列表</router-link></Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                个人中心
                            </template>
                            <Menu-item name="4-1"><router-link to='message' class="mess">信息</router-link></Menu-item>
                            <Menu-item name="4-2"><router-link to='setting'>设置</router-link></Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="20" class="right-content">
                    <div class="layout-content-main">
                        <router-view></router-view>
                    </div>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; let's study vuejs
        </div>
    </div>
    </div>
</template>
<script>
    // import leftnav from '../components/LeftNav'
    // import myheader from '../components/MyHeader'
    export default {
        // name: 'app',
        // components:{
        //     leftnav:leftnav,
        //     myheader:myheader
        // },
        data(){
            return{
                imgUrl:'../../static/images/avatar.jpg',
                logo:'../../static/images/logo.png',
                name:""
            }
        },
        created(){
            this.getUser();
        },
        methods:{
            getUser(){
                var username = sessionStorage.getItem("user");
                console.log(username);
                this.name = username;
            }
        }

    }
</script>