<template>
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
			            yang47
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

</template>
<script>
	export default{
		data(){
			return{
				imgUrl:'../../static/images/avatar.jpg',
				logo:'../../static/images/logo.png'
			}
		}
	}
</script>
<style>
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
</style>
