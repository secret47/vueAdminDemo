<template>
	<div class="new">
	<!-- 标题、内容、发表 -->
		<div class="title">
			<i-Input type="text" v-model="title" placeholder="请输入..." class='title-content' ></i-Input>
			<span class="more">还可以输入<span id="checklen">100</span>个字符</span>
		</div>
		<quill-editor></quill-editor>
		<div class="btn">
			<i-button type="success">发表文章</i-button>
			<i-button type="success">保存草稿</i-button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				title:''
			}
		},
		methods:{
			
		}
	}
</script>
<style scoped>
	.layout-content-main{
		height: 450px;
	}
	.new{
		width: 100%;
		height: 430px;
	}
	.title{
		height: 50px;
		line-height: 50px;
		width: 100%;
	}
	.title-content{
		float: left;
		width: 60%
	}
	.more{
		width: 30%;
		padding-left: 10px;
		float:left;
	}
	.quill-editor{
		height: 270px
	}
	.btn{
		width: 100%;
		height: 40px;
		margin-top: 80px;
	}
</style>