<script>
    import "./index.css"
    import RegisterToDo from "./register/RegisterToDo.vue";
    import LoginToDo from "./login/LoginToDo.vue"
    import InputTodo from "../inputTodo/InputTodo.vue";
    import { cekLogin } from "../../../../config/instance";
    import Cookies from "js-cookie";

    export default {
        name: "AccountTodo",
        data() {
            return {
                isLogin: false,
                posisi: "account",
                namaLengkap: "Guest",
                bio: "Bot Computer"
            }

        },
        async created() {
            try {
                const result = await cekLogin()
                if(result && result.data.status === 200) {
                    const {namaLengkap, bio} = result.data.data
                    this.isLogin = true
                    this.namaLengkap = namaLengkap
                    this.bio = bio || ""
                } 
            } catch (error) {
                this.isLogin = false
                console.log({error})
            }
        },
        components: {
            RegisterToDo,
            LoginToDo,
            InputTodo
        },
        methods: {  
            setIsLogin(res) {
                this.isLogin = res
            },
            setPosisi(res) {
                this.posisi = res
            },
            handleLogout() {
                Cookies.remove("username")
                Cookies.remove("token")
                location.reload()
            },
        }
    }

</script>

<template>
    <div class="border-b w-full border-green-500 ">
        <LoginToDo v-if="posisi === 'login'" @setPosisi="setPosisi"  @setIsLogin="setIsLogin"/>

        <RegisterToDo v-else-if="posisi === 'register'" @setPosisi="setPosisi"/>
            

        <div class="containerAccount" v-else>
            <div class="containerInputTodoAccount w-[40%] hidden sm:block mx-auto">
                <InputTodo class="w-full flex  h-max" />
            </div>
            
            <div class="Account" >
                <img 
                    class="gambarProfile" 
                    src="../../../../public/Asset/gambarProfile.png" 
                    alt="my profile"
                >
                
                <div class="identitas">
                    <p 
                        class="INTER namaProfile"
                    >   
                        {{ namaLengkap }}
                    </p>
                    <p 
                        class="OPENSANS bioProfile w-max mx-auto text-center"
                    >
                        {{ bio }}
                    </p>
                    <div class="tombol w-full">
                        <div class="login" v-if="isLogin">
                            <button class="POPPINS tombolLogin bg-dark dark:bg-white text-light dark:text-dark mt-4 mb-2">
                                ubah profile
                            </button>
                            <button 

                                class="tombolLogin bg-green-500 POPPINS "
                                @click="handleLogout"
                                >  
                                Logout
                            </button>
                        </div>
                        
                        
                        <div 
                            v-if="!isLogin" 
                            class="noLogin"
                        >
                            <button 
                                class="daftar POPPINS bg-dark dark:bg-light dark:text-black text-light"
                                @click="() => setPosisi('register')"
                            >
                                Daftar Baru
                            </button>
                            <button 
                                class="login POPPINS bg-green-500 text-light dark:text-dark "
                                @click="() => setPosisi('login')"
                            >
                                Login
                            </button>
                        </div>
                        
                    </div>       

                </div>
            </div>
        </div>
        
    </div>
    

</template>