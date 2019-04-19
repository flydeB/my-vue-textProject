<template>
    <div>
        <my-header />
        <div class='login-wrapper'>
            <div class='login-top'>
                登陆与注册
            </div>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                <FormItem prop="user" class='login-username'>
                    <Input type="text" v-model="formInline.user" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password" class='login-password'>
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem class='login-btn'>
                    <Button type="primary" @click="handleSubmit('formInline')">登陆</Button>
                    <Button type="primary" class='button-register' @click="registerBtn()">注册</Button>
                </FormItem>
            </Form>
        </div>

        <!-- 注册 -->
        <Modal v-model='register' title="注册">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <FormItem label='用户名' prop="userNamr">
                    <Input v-model="formValidate.userName" placeholder="用户名"></Input>
                </FormItem>
                <FormItem label='密码' prop="password">
                    <Input v-model="formValidate.password" placeholder="密码"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="mail">
                    <Input v-model="formValidate.mail" placeholder="邮箱"></Input>
                </FormItem>
                <FormItem label="电话" prop='phone'>
                        <Input v-model="formValidate.phone" placeholder="电话"></Input>
                    </FormItem>

                <FormItem label="简介" prop="desc">
                    <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
                        placeholder="简介"></Input>
                </FormItem>

            </Form>
        </Modal>

        <my-footer />
    </div>

</template>

<script>
    import myHeader from './common/header';
    import myFooter from './common/footer';
    import { userLogin } from '../api'
    export default {
        name: 'login',
        components: {
            myHeader,
            myFooter
        },
        data() {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                },
                register: false,
                formValidate: {
                    userName: '',
                    mail: '',
                    password: '',
                    desc: '',
                    phone:''
                },
                ruleValidate: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '请输入meail', trigger: 'blur' },
                        { type: 'email', message: '请输入meail', trigger: 'blur' }
                    ],
                    phone: [
                        { required: true, message: '请输入电话', trigger: 'blur' },
                        { type: 'email', message: '请输入电话', trigger: 'blur' }
                    ],
                    desc: [
                        { type: 'string', min: 20, message: '不超过20个字', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(async (valid) => {
                    if (valid) {
                        let response = await userLogin(this.formInline);
                        console.log('登陆', response);
                        if (response.data.status == 200) {
                            sessionStorage.setItem('userName', this.formInline.user)
                            this.$Message.success('登陆成功!');
                            this.$router.push('/home')

                        } else {
                            this.$Message.error('登陆失败，账号或密码错误！');
                        }

                    } else {
                        this.$Message.error('登陆失败');
                    }
                })
            },
            registerBtn(name) {
                this.register = true
                console.log(this.$refs[name])
            }
        }
    }
</script>

<style scoped>
    .login-wrapper {
        width: 400px;
        height: 300px;
        margin: 150px auto;
        border: 1px solid #b3b3b3;
        box-shadow: 2px 2px #b4d2f1
    }

    .login-wrapper .login-username {
        display: block;
        width: 70%;
        margin: 50px auto 30px;
        font-size: 16px
    }

    .login-wrapper .login-password {
        display: block;
        width: 70%;
        margin: 0 auto;
        font-size: 16px
    }

    .login-btn {
        margin: 40px;
        margin-left: 220px
    }

    .button-register {
        margin-left: 5px
    }

    .login-top {
        width: 100%;
        height: 50px;
        background: rgb(71, 134, 185);
        font-size: 16px;
        color: #fff;
        line-height: 50px;
        padding-left: 10px
    }
</style>