<template>
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
            <Menu-item name="4-1"><router-link to='setting'>设置</router-link></Menu-item>
        </Submenu>
    </Menu>
</i-col>
</template>
<style scoped>
a:hover{
    color:white;
}
a.router-link-active{
    color:white;
}
</style>