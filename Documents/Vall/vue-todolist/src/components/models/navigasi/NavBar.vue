<script>
    import "./index.css"
    import {logoDarkOff, logoDarkOn} from "../../../assets/logo.js"
    import { ref } from "vue"
    import Cookie from "js-cookie"

    export default {
        name: "NavBar",
        data() {
            return {
                logoDarkOff,
                logoDarkOn,
                dark: false
            }
        },
        watch: {
            dark(newValue) {
                if(newValue) {
                    document.documentElement.classList.add("dark")
                    Cookie.set("darkTodolist", true)
                } else {
                    document.documentElement.classList.remove("dark")
                    Cookie.remove("darkTodolist")
                }
            }
        },
        setup() {
            const setStatus = index => {
                listTombol.value.forEach((itemList, indexList) => {
                    if(index === indexList) {
                        listTombol.value[index].status = true
                        
                    } else {
                        listTombol.value[indexList].status = false
                    }
                    console.log(index)
                })
            }
            const list = [
                {name: "Proses", status: true, myFunction: () => setStatus(0)},
                {name: "Selesai", status: false, myFunction: () => setStatus(1)},
                {name: " ", status: false}
            ]
            const listTombol = ref(list)
            
            return {listTombol}
        },
        beforeMount() {
            const darkTodolist = Cookie.get("darkTodolist")
            this.dark = darkTodolist
        },
        methods: {
            handleDarkMode() {
                this.dark = !this.dark
            },
            
        }
    }
</script>

<template>
    <div class="navigasi">
        
        <div 
            class="headerNav"
        >
            <p 
                class="POPPINS judulNav"
            >
                Todo List
            </p>
            <button 
                class="offDark" 
                v-html="dark ? logoDarkOn : logoDarkOff" 
                @click="handleDarkMode">
            </button> 
        </div>

        <div 
            class="footerNav"
        >
            <button 
                v-for="(list, index) in listTombol"
                class="childNav" 
                :key="index"
                :class="list.status ? 'activeNav' : ''"
                @click="list.myFunction"
            >
                {{ list.name }}
            </button>
            
        </div>
        

    </div>

</template>