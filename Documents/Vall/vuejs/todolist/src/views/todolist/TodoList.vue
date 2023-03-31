<script>
    
    import "./index.css";
    import AccountVue from "../../components/Account/AccountVue.vue";
    import InputTodo from "../../components/InputTodo/InputTodo.vue";
    import NavbarHP from "../../components/NavbarHP/NavbarHP.vue";
    import NavigasiVue from "../../components/Navigasi/NavigasiVue.vue"
    import CardTodolist from "./CardTodolist.vue";

    export default {
        name: "TodoList",
        components: {
            AccountVue,
            InputTodo,
            NavbarHP,
            NavigasiVue,
            CardTodolist
        }
    }

</script>

<template>
  <div>
      <AccountVue>
            <InputTodo />
      </AccountVue>

      <NavbarHP>
            <InputTodo class="w-[85%]" />
      </NavbarHP>

      <CardTodolist />
  </div>
</template>
