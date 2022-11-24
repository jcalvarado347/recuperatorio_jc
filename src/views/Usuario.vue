<template>
    <div class="Usuario">
      <div class="card-body">
      <div class="alert alert-primary" role="alert">
        <h1>Registro de Usuarios </h1>
      </div>
    </div>
    
    <div class="mt-5">
      <form role="form">
        <div class="row mx-5">
            <div class="col-3">
                <label ><h5>Nombre</h5></label>
                <input type="text" class="form-control" name="Nombre" v-model="usuario.Nombre"/>
            </div>
            <div class="col-3">
                <label ><h5>Carnet</h5></label>
                <input type="text" class="form-control" name="Direccion" v-model="usuario.Ci"/>
            </div>
            <div class="col-3">
                <label ><h5>Direccion</h5></label>
                <input type="text" class="form-control" name="Direccion" v-model="usuario.Direccion"/>
            </div>
            <div class="col-3">
                <label ><h5>Celular</h5></label>
                <input type="text" class="form-control" name="Celular" v-model="usuario.Celular"/>
              
            </div>
            <div class="col-3 align-items-end d-flex ">
              <a class="btn btn-primary mt-2" @click="saveUsuario" >Guardar</a>
            </div>
        </div>
      </form>
    </div>

    <div class="mt-4 card-body">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Nro</th>
            <th>Nombre</th>
            <th>CI</th>
            <th>Direccion</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in listausuarios" :key="item.id">
            <th>{{ item.id + 0 }}</th>
            <td>{{item.Nombre}}</td>
            <td>{{item.Ci}}</td>
            <td>{{item.Direccion}}</td>
            <td>{{item.Celular}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default{
    name: "Usuario-page",
    data() {
		return {
			usuario: {},
      listausuarios:[]
		}
	},
	methods: {
		async getUsuario(){
      const req = await fetch("http://localhost:3000/usuarios");
      this.listausuarios = await req.json();
    },
    async saveUsuario(e){
      e.preventDefault();
      const data = JSON.stringify(this.usuario);
      const req = await fetch("http://localhost:3000/usuarios",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: data
      });

      const res = await req.json();
      console.log(res);
      this.usuario={};
      this.getUsuario();
    }
	},
   mounted () {
    this.getUsuario();
  },
}
</script>


