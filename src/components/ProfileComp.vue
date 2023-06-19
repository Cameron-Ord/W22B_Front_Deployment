<template>
    <!--checking if prof_data is defined, protects HTML-->
    <div v-if="prof_data !==undefined">

        <!--displaying data gathered from the DB though api interaction-->

        <h2>Welcome, {{ prof_data['username'] }}</h2>

        <img v-bind:src="prof_data['image_url']" alt="an image">

        <h3>Email: {{ prof_data['email'] }}</h3>

        <h3>Bio: {{ prof_data['bio'] }}</h3>

    </div>
</template>

<script>
import Cookies from 'vue-cookies';
import axios from 'axios';
    export default {
        
        data() {
            return {
                status: undefined,
                token_var: undefined,
                prof_data: undefined
            }
        },

        methods:{

            //on mount function
            on_mount(){

                axios({

                    url: `${process.env.VUE_APP_BASE_DOMAIN}/api/client`,
                    method: 'GET',

                    params:{

                        token: this.token_var
                    }
                }).then(res =>{

                    //gets data and stores it inside a variable on api success
                    this.prof_data = res['data'][0];
                    res;


                }).catch(err =>{

                    //error message on failure
                    this.status = 'something went wrong, try again.';
                    err;
                })

            }
        },

        mounted(){

            //storing login cookie inside variable before calling the axios request

            this.token_var = Cookies.get('login_token');
            this.on_mount();

          
        }
    }
</script>

<style lang="scss" scoped>

img{
    width: 30%;
}

</style>