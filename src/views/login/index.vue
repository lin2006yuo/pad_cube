<template>
    <div class="p-login">
        <div class="ra-form">
            <cube-input v-model="form.account" placeholder="请输入账号">
                <i slot="prepend" class="icon-sm cubeic-person"></i>
            </cube-input>
            <cube-input v-model="form.password" placeholder="请输入密码">
                <i slot="prepend" class="icon-sm cubeic-lock"></i>
            </cube-input>
            <cube-input v-model="form.code" placeholder="请输入验证码">
                <i slot="prepend" class="icon-sm cubeic-info"></i>
                <span slot="append"><img :src="authCode" alt="" @click="getAuthCode"></span>
            </cube-input>
            <cube-button class="ra-btn">登陆</cube-button>
        </div>
    </div>
</template>

<script>
    import {getAuthCode} from '@/api/base'
    export default {
        name: "index",
        data() {
            return {
                form: {
                    account: '',
                    password: '',
                    code: ''
                },
                captcha: '',
                authCode: ''
            }
        },
        mounted() {
            this.getAuthCode()
        },
        methods: {
            getAuthCode() {
                getAuthCode().then(res => {
                    this.captcha = res.headers.get('Captcha')
                    res.blob().then(blob => {
                        this.authCode = URL.createObjectURL(blob)
                    })
                });
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
