<script>
    import {ref} from "vue";
    import InputTodo from "../models/inputTodo/InputTodo.vue";

    export default {
        name:"NavbarHP",
        data() {
            return {
                data: []
            }
        },
        watch: {
            data(newValue) {
                this.$emit("setData", newValue)
            }
        },
        setup() {
            const navbarHP = ref([
                {id: 0, name: "proses", status: true},
                {id: 1, name: "selesai", status: false}
            ])
            const status = ref(true)
            const setStatus = index => {
                navbarHP.value.map((item, indexMap) => {
                    if(item.id === index) {
                        navbarHP.value[indexMap].status = true
                        status.value = false
                    }  else {
                        navbarHP.value[indexMap].status = false
                        status.value = true
                    }
                })
                
            }
            return {navbarHP, setStatus, status}
        },
        components: {
            InputTodo
        },
        emits: ["deleteData", "selesai", "setData"],
        methods: {
            
            setData(res) {
                this.data = res
            },
            deleteData(id) {
                this.$emit("deleteData". id)
            },
            selesai(id) {
                this.$emit("selesai". id)
            }
        }
    }

</script>

<template>
    <div class="block sm:hidden">
        <div class="navbarHP w-full">
            <div class="containerNavbarHP flex w-full justify-center mt-[1vh]">
                <button 
                    v-for="item in navbarHP"
                    :key="item.id"
                    class="text-dark dark:text-light   w-1/2 py-[1vh] pb-[2vh] border-dark dark:border-light "
                    :class="item.status ? 'border-b' : ''"
                    @click="() => {
                        setStatus(item.id)
                    }"
                >
                    {{ item.name }}
                </button>
                
            </div>
        </div>
        <InputTodo v-if="status" class="w-5/6" :class="status ? 'flex sm:hidden' : ''" @setData="setData" @deleteData="deleteData" @selesai="selesai"/>
    </div>
    

</template>