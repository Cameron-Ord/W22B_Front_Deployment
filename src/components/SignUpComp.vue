<template>
    <div>
        <article class="signup_article">
            <div>

                <!--user input-->

                <input type="text" placeholder="email" ref="email">

                <input type="text" placeholder="username" ref="user">
                
                <input type="password" placeholder="password" ref="pass">
                
                <input type="text" placeholder="bio" ref="bio">
                
                <input type="text" placeholder="profile image" ref="image_url">

                <button @click="usersignup">signup</button>

                <!--status display when needed-->

                <p v-if="status !== undefined">{{ status }}</p>
            </div>
        </article>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        
        data() {
            return {

                status: undefined

            }
        },

        methods:{

            //on click function
            usersignup(){


                axios({
                    url:`${process.env.VUE_APP_BASE_DOMAIN}/api/client`,

                    method: 'POST',

                    data:{

                        //sending data from user input

                        username: this.$refs['user'].value,
                        email: this.$refs['email'].value,
                        password: this.$refs['pass'].value,
                        bio: this.$refs['bio'].value,
                        image_url: this.$refs['image_url'].value

                    }
                }).then(response => {

                    //on success, pushes to the login page

                    this.status = 'success!';
                    response
                    this.$router.push(`/login`);

                }).catch(error => {

                    error;

                    this.status = 'something went wrong';
                })

            }


        },

        mounted(){


        }
    }
</script>

<style lang="scss" scoped>

</style>