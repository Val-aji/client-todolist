<script>
    import "./index.css"
    import { logoSilang } from "../../../../assets/logo";

    import axios from "axios";
    import Cookies from "js-cookie"
import { urlAPI } from "../../../../../config/instance";

    export default {
        name: "LoginToDo",
        data() {
            return {
                logoSilang,
                username: "",
                password: ""
            }
        },
        methods: {
            async handleLogin() {
                const {username, password} = this
                const formData = new FormData()
                formData.append("username", username)
                formData.append("password", password)
                try {
                    
                    const result = await axios.post(`${urlAPI}/client/login`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    if(result) {
                        const {username, token} = result.data.data
                        Cookies.set("token", token)
                        this.$emit("setIsLogin", true)
                        Cookies.set("username", username)
                        location.reload()
                    }
                    
                } catch (error) {
                    console.log({error})
                }
                

            }

        }
    }

</script>

<template>
    <div class="loginTodo">
        <form method="POST" @submit.prevent="handleLogin">
            <button type="button" class="logoSilang" v-html="logoSilang" @click="() => $emit('setPosisi', 'account')"></button>
            <p class="judulFormLogin ROBOTO">Login</p>

            <div class="containerInput">
                <p class="judulInput INTER">username</p>
                <input type="text" v-model.trim="username" />
            </div>

            <div class="containerInput">
                <p class="judulInput POPPINS">Password</p>
                <input type="password" required autocomplete v-model.trim="password"/>
            </div>

            <button type="submit" class="tombolSubmit ROBOTO" >Login</button>
        </form>
    </div>
</template>