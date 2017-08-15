<template>
	<div class="article">
		<div class="title">
            <i-input style="width:400px" v-model="searchText"></i-input>
            <!-- <i-button @click="searchArt">查询</i-button> -->
        </div>
		<i-table  :columns="tablename" :data="article_list" size="small">
        </i-table>
	</div>
</template>
<script>
import axios from 'axios'
	export default {
        data () {
            return {
                searchText:"",
                article_list:[],
                tablename: [
                    {
                        title: 'id',
                        key: 'id',
                        width: 50,
                    },
                    {
                        title: '用户',
                        key: 'athor',
                        width: 100,
                    },
                    {
                    	title:'标题',
                    	key:'title',
                    },
                    {
                        title: '地址',
                        key: 'url',
                        width: 240,
                    },
                    {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 150,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
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
                ],

            }
        },
        created() {
          this.fetchData();
        },
        computed:{
            // filterAticle:function(){
            //     var searchText = this.searchText;
            //     var article_list = this.article_list;
            //     return article_list.filter(function(item) {
            //         return item.toLowerCase().indexOf(searchText.toLowerCase()) != -1
            //     });
            // }
        },
        methods: {
            fetchData() {
                axios.get('../../static/db.json').then((response) => {
                    var data = response.data.article;
                    console.log(data);
                    var article_list = [];
                    for (var i in data) {
                        article_list.push(data[i]);
                    }
                    this.article_list = article_list;
                })
            },
            show (index) {
                var article_list = this.article_list
                console.log(index);
                this.$Modal.info({
                    title: '文章信息',
                    content:"标题："+article_list[index].title+"<br>"
                })
            },
            remove (index) {
                this.article_list.splice(index, 1);
            }
        }
    }
</script>
<style scoped>
    .title{
        height: 50px;
    }
</style>