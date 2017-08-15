<template>
<div class="log-form">
    <div class="logo">
        <h2>后台登录</h2>
    </div>
    <i-form ref="formInline" :model="formInline" :rules="ruleInline">
        <Form-item prop="user">
            <i-input type="text" class="text" v-model="formInline.user" placeholder="用户名">
            </i-input>
        </Form-item>
        <Form-item prop="password">
            <i-input type="password" class="text" v-model="formInline.password" placeholder="密码">
            </i-input>
        </Form-item>
        <Form-item>
            <i-button type="success" class="log-btn" @click="handleSubmit('formInline')">登录</i-button>
        </Form-item>
    </i-form>
</div>

</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        var data = {
                            username:this.formInline.user,
                            password:this.formInline.password
                        }
                        sessionStorage.setItem("user",this.formInline.user);
                        this.$Message.success('提交成功!');
                        this.$router.push({path:'/'})
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>
<style>
.log-form{
    width: 300px;
    height: 220px;
    margin: 0 auto;
    box-shadow: 0px 3px 2px #B2B2B2;
    background-color: #fff;
    position: relative;
    top: 200px;
    text-align: center;
}
.logo{
    height: 50px;
}
.text{
    width: 250px;
    margin: 0 auto;
}
.ivu-form-item-error-tip{
    padding-left: 30px;
}
.log-btn{
    width: 250px;
}

</style>