<script>
    import "./index.css"
    import {logoSilang} from "../../../../assets/logo.js"
    import { urlAPI } from "../../../../../config/instance"
    import axios from "axios"
    
    export default {
        name: "RegisterToDo",
        data(){
            return {
                logoSilang,
                namaLengkap: "",
                ID: "",
                password: "",
                isError: false,
                pesanError: "   "
            }
        },
        methods: {
            async handleRegister() {
                
                try {
                    const {namaLengkap, ID, password} = this
                    const formData = new FormData()
                    formData.append("namaLengkap", namaLengkap)
                    formData.append("username", ID)
                    formData.append("password", password)
                    const result = await axios.post(`${urlAPI}/client/register`, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                    if(result) {
                        this.isError = false
                        console.log({result})
                        alert("daftar berhasil")
                        location.reload()
                        
                    }
                    
                } catch (error) {
                    const {status} = error.response.data
                    if(status === 409) {
                        this.isError = true
                        this.pesanError = "email telah ada"
                    }
                    console.log({error})
                }
            }
        }
    }
</script>

<template>
    <div class="containerRegister">
        <div class="register">
            <button class="tombolHapus absolute right-0 top-0" v-html="logoSilang" @click="() => $emit('setPosisi', 'account')"></button>
            <p class="judulRegister ROBOTO">Register</p>
            <p v-if="isError" class="POPPINS mb-[3vh] text-red-500 text-sm mx-auto">{{ pesanError }}</p>
            <form 
                method="POST" 
                @submit.prevent="handleRegister"
            >
                <div class="containerInput">
                    <p class="judulInput POPPINS">Nama Lengkap</p>
                    <input class="INTER" type="text" required autocomplete v-model.trim="namaLengkap" />
                </div>
                <div class="containerInput">
                    <p class="judulInput POPPINS" required autocomplete>Username</p>
                    <input class="INTER"  type="text" v-model.trim="ID" />
                </div>
                <div class="containerInput">
                    <p class="judulInput POPPINS">Password</p>
                    <input class="INTER"  type="password" required autocomplete v-model.trim="password"/>
                </div>
                <button type="submit" class="ROBOTO">Registrasi</button>
            </form>
            
        </div>
    </div>
</template>