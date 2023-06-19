<template>
    <div>
        <article>
            <div>
                <!--taking user input-->
                <input type="text" placeholder="username" ref="username">
                <input type="password" placeholder="password" ref="password">

                <button @click="login_form">Log In</button>
            </div>
        </article>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {
        
        data() {
            return {
                status: undefined
            }
        },

        methods:{

            //function call on button click

            login_form(){

                axios({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/login`,
                    method: 'POST',

                    data:{

                        //taking values input from input boxes using refs

                        username: this.$refs['username'].value,
                        password: this.$refs['password'].value


                    }


                }).then(res =>{

                    res;
                    //setting cookies from the response data
                    Cookies.set('login_token', `${res['data'][0]['token']}`);
                    //returning user to home page after login
                    this.$router.push('/')

                }).catch(err =>{

                    //error message on failure
                    err;
                    this.status = 'invalid login, try again.';


                })
            }

        },


        mounted(){


        }
    }
</script>

<style lang="scss" scoped>

</style>