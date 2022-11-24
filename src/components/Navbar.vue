<template>

    <div class="card-body" >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            
            <router-link to="/" class="btn btn-primary px-5 mr-2">
                Usuarios
            </router-link>

            <router-link to="Consumo" class="btn btn-success px-5">
                Registro de Consumo
            </router-link>
            
        </nav>
    </div>

</template>

<script>
export default{
    name: "Navbar-nav"
}
</script>
