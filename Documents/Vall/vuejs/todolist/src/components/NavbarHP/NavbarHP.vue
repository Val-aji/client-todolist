<script>
    
    import { useStoreTodolist } from '../../stores/todolist/store.js'

    export default {
        name:"NavbarHP",
        data() {
            return {
                navbarHP: [
                    {id: 0, name: "proses", status: true},
                    {id: 1, name: "selesai", status: false}
                ],
                
                posisi: "proses"
            }
        },
        watch: {
            posisi(newValue) {
                const storeTodolist = useStoreTodolist()
                storeTodolist.setPosisi(newValue)
            }
        },
        methods: {
            setStatus(index) {
                this.navbarHP.map(item => {
                    if(item.id === index) {
                        item.status = true
                        this.posisi = item.name
                    } else {
                        item.status = false
                    }
                })
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

        <!-- diisi  parent -->
        <slot></slot>
    </div>
    

</template>
