<template>
	<div class="index">
			<Alert type='warning'  show-icon>
				警告：本次更新将在12：00准时更新，请到时关闭本后台。
			</Alert>
		<div class="welcome">
			欢迎 {{name}},现在是{{time}},星期五。天气晴
		</div>
		<Row>
	        <Col span="8">
	        	<Card class="card_list">
			        <div style="text-align:center">
			            <h3>增加用户数</h3>
			            <h6>3</h6>
			        </div>
			    </Card>
	        </Col>
	        <Col span="8">
	        	<Card class="card_list">
			        <div style="text-align:center">
			            <h3>增加文章数</h3>
			            <h6>5</h6>
			        </div>
			    </Card>
	        </Col>
	        <Col span="8">
				<Card class="card_list">
			        <div style="text-align:center">
			            <h3>本周浏览量</h3>
			            <h6>1000</h6>
			        </div>
			    </Card>
	       </Col>
	    </Row>
	    <div id="myChart" style="width:400px;height:300px;float:left;"></div>
	    <div id="myChart1" style="width:400px;height:300px;float:left;"></div>
	</div>
</template>
<script>
import axios from 'axios'
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
    export default {
        data () {
            return {
            	name:"",
            	time:""
            }
        },
	 	created() {
	      // this.getData();
	      this.getInit();
	    },
		 mounted(){
		    this.drawLine();
		    this.drawPie();
		  },
		methods: {
			// 得到用户名
			getInit(){
				var username = sessionStorage.getItem("user");
                this.name = username;
                var myDate = new Date();
				var time = myDate.toLocaleTimeString();
				this.time = time
			},

			drawPie(){
				var myChart1 = echarts.init(document.getElementById('myChart1'))
		      	// 绘制图表
		      	myChart1.setOption({
		      		title : {
				        text: '某站点用户访问来源',
				        subtext: '纯属虚构',
				        x:'center'
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient : 'vertical',
				        x : 'left',
				        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            mark : {show: true},
				            dataView : {show: true, readOnly: false},
				            magicType : {
				                show: true, 
				                type: ['pie', 'funnel'],
				                option: {
				                    funnel: {
				                        x: '25%',
				                        width: '50%',
				                        funnelAlign: 'left',
				                        max: 1548
				                    }
				                }
				            },
				            restore : {show: true},
				            saveAsImage : {show: true}
				        }
				    },
				    calculable : true,
				    series : [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:335, name:'直接访问'},
				                {value:310, name:'邮件营销'},
				                {value:234, name:'联盟广告'},
				                {value:135, name:'视频广告'},
				                {value:1548, name:'搜索引擎'}
				            ]
				        }
				    ]
		      	})
			},
		    drawLine(){
		       	// 基于准备好的dom，初始化echarts实例
		      	var myChart = echarts.init(document.getElementById('myChart'))
		      	// 绘制图表
		      	myChart.setOption({
			        title: { text: '粉丝数量' },
			        tooltip: {},
			        xAxis: {
			          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
			        },
			        yAxis: {},
			        series: [{
			          name: '销量',
			          type: 'bar',
			          data: [5, 20, 36, 10, 10, 20]
			        }]
	      		});
		    }
		}
    }
</script>
<style scoped>
	.welcome{
		height: 50px;
		line-height: 50px;
	}
	.index{
		height: auto;
	}
</style>