<template>
    <div class="p-login">
        <div class="ra-form">
            <cube-input v-model="form.username" placeholder="请输入账号">
                <i slot="prepend" class="icon-sm cubeic-person"></i>
            </cube-input>
            <cube-input type="password" :clearable="{visible: true,blurHidden: true}" v-model="form.password" placeholder="请输入密码">
                <i slot="prepend" class="icon-sm cubeic-lock"></i>
            </cube-input>
            <cube-input v-model="form.code" placeholder="请输入验证码">
                <i slot="prepend" class="icon-sm cubeic-info"></i>
                <span slot="append"><img :src="authCodeImg" alt="" @click="getAuthCode"></span>
            </cube-input>
            <cube-button class="ra-btn" @click="login">登陆</cube-button>
        </div>
    </div>
</template>

<script>
    import {getAuthCode, login} from '@/api/base'

    const AUTH_CODE_REGX = /^[0-9a-z]{2,4}$/i;

    export default {
        name: "login",
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                    code: ''
                },
                captcha: '',
                authCodeImg: ''
            }
        },
        mounted() {
            this.getAuthCode()
        },
        methods: {
            getAuthCode() {
                getAuthCode().then(res => {
                    this.captcha = res.headers.captch;
                    this.authCodeImg = URL.createObjectURL(res.data)
                });
            },
            login() {
                if(AUTH_CODE_REGX.test(this.form.code)) {
                    const loading = this.$createToast({txt: '正在登陆', mask:true});
                    loading.show();
                    login({...this.form, captcha: this.captcha}).then(res => {
                        this.showToast({txt: '登陆成功', type: 'Correct', time: 1000})
                        this.$router.push({ path: '/menu' })
                    }).catch(err => {
                        this.showToast({txt: err.message, type: 'Error'}).show()
                    })
                } else {
                    this.showToast({txt: '验证码格式不正确', type: 'Error'}).show()
                }
            },
            showToast(options) {
                return this.$createToast({...options})
            }
        }
    }
</script>

<style scoped lang="stylus">
    .ra-form {
        margin: 100px 60px
        .ra-btn {
            margin: 20px 0
        }
        >>> .cube-input {
            border: none
            &:after {
                border:none;
                border-bottom: 1px solid $input-border-color
            }
        }
        >>> .cube-input_active {
            &:after {
                border-color: $input-focus-border-color
            }
            .cubeic-person,  .cubeic-lock, cubeic-info{
                color: $input-focus-border-color
            }
        }
        >>> .cube-btn {
            padding: 10px 16px;
            border-radius 16px
        }
    }
</style>
