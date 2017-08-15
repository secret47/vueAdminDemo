<template>
	<div class="setting">
		<Card :bordered="true" class='user'>
            <p slot="title" style='text-align:center'>个人信息</p>
			<ol>
				<ul v-for="item in items" class="user_intro">
					<li class='user_icon'>
						<img :src="'./../static/'+item.imgUrl" alt="" width="70" height="70">
					</li>
					<li class="user_list">姓名：{{item.nickname}}</li>
					<li class="user_list">性别：{{item.sex}}</li>
					<li class="user_list">生日：{{item.birthday}}</li>
					<li class="user_list">地址：{{item.address}}</li>
					<li class="user_list">简介：{{item.introduce}}</li>
					<li>
						<i-button type="success" @click="modal1 = true">编辑</i-button>
					</li>
				</ul>
			</ol>
        </Card>
<!-- 		<div class="timeline">
			<span class="title">文章排序</span>
        	<Timeline>
		        <Timeline-item  v-for="time in timelines">
		        	<p>{{time.date}}</p>
					{{time.title}}
		        </Timeline-item>
		    </Timeline>
		</div> -->
        <Modal
	        v-model="modal1"
	        title="资料更改"
	        @on-ok="ok"
	        @on-cancel="cancel" v-for="item in items">
	        <ul>
	        	<li class='user_icon_change'>
					<img :src="'./../static/'+item.imgUrl" alt="" width="80" height="80"/>
				</li>
		        <li class="user_change">
		        姓名：
		        <i-input type="text" name="" v-model="item.nickname" style="width:300px"></i-input>
		        </li>
				<li class="user_change">
				性别：
				<Radio-group v-model="sex">
					<Radio label="男">
			            <span>男</span>
			        </Radio>
			        <Radio label="女">
			            <span>女</span>
			        </Radio>
				</Radio-group>
				</li>
				<li class="user_change">
					生日：
					<Date-picker type="date" placeholder="选择日期" style="width: 300px"></Date-picker>
				</li>
				<li class="user_change">
				地址：
					<i-input type="text" name="" v-model="item.address" style="width:300px"></i-input>
				</li>
				<li class="user_change">
				简介：
				<i-input type="text" name="" v-model="item.introduce" style="width:300px"></i-input></li>
			</ul>
	    </Modal>
	</div>
</template>
<script>
import axios from 'axios'
	export default{
		data() {
	      return {
	        items:[],
	        modal1: false,
	        sex:"女"
	      }
	    },
	 	created() {
	      this.fetchData();
	    },
		methods: {
		    fetchData() {
		        axios.get('../../static/db.json').then((response) => {
		          	var data = response.data.user;
		          	var items = [];
		          	for (var i in data) {
		              	items.push(data[i]);
		          	}
		          	this.items = items;
		        })
		    },
	       	ok() {
	            console.log("oj")
	        },
	        cancel () {
	        }
	    }
}
</script>
<style scoped>
	.setting{
		width: 100%;
	}
	.user{
		width: 40%;
		float: left;
	}
	.user_intro{
		width: 100%;
	}
	.user_intro li.user_list{
		height: 30px
	}
	.user_icon{
		height: 80pxl
	}
	.user_icon_change{
		height: 100px;
	}
	.user_change{
		height: 50px;
	}
	.timeline{
		width: 40%;
		float: right;
	}
	.timeline .title{
		height: 50px;
		display: block;
		line-height: 50px;
		font-size:20x;
		font-weight: 600;
	}
	.times1:nth-child(2n+1){
		color:yellow;
	}
</style>>