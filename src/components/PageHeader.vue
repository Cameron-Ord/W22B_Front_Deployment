<template>
    <div>
        <header class="page_header">
            <div class="header_div">
                <h1>DEV.</h1>

                <!--navigation-->

                <span>
                    <router-link to="/login">Log In</router-link>
                    <router-link to="/signup">Sign Up</router-link>
            
                </span>

                <!--displays account options if logged in-->

                <span v-if="current_token !== null">
                    <button @click="log_out">Log Out</button>
                    <p v-if="status !== undefined">{{ status }}</p>
                    <router-link to="/profile">Profile</router-link>
                </span>
            </div>
        </header>
    </div>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {
        
        data() {
            return {
                current_token: undefined,
                status: undefined
            }
        },

        methods:{

            //on click function
            log_out(){

            
                axios({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/login`,
                    method:'DELETE',

                    data:{

                        //sending delete with cookie variable, deletes information in DB

                        token: this.current_token

                    }
                }).then(res =>{

                    //removes cookie and refreshes page

                    Cookies.remove('login_token')
                    this.$router.go('/')
                    res;

                }).catch(err =>{

                    //error message on failure
                    
                    this.status = "Something went wrong, try again."
                    err;

                });
            }

        },

        mounted(){

            //grabs login cookie and stores it

            this.current_token = Cookies.get('login_token');
        }

    }
</script>

<style lang="scss" scoped>

</style>