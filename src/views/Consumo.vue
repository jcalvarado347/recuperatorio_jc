<template>
  <div class="Usuario">
     
    <div class="card-body">
      <div class="alert alert-primary" role="alert">
        <h1>Listado Consumo de Agua </h1>
      </div>
    </div>

    <div class="card-body">
      <form role="form">
          <div class="row">
            <div class="col-3">
              <label><h5>Seleccionar Usuario</h5></label>
              <select type="text" class="form-control" v-model="consumo.Usuario">
                <option :value="item.Nombre" v-for="item in datausuarios" v-bind:key="item.id">
                  {{ item.Nombre }} - {{ item.Ci }}
                </option>
              </select>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-2">
                <label ><h5>Fecha</h5></label>
                <input type="date" class="form-control" name="Fecha" v-model="consumo.Fecha"/>
            </div>
            <div class="col-2">
                <label ><h5>Cantidad m3</h5></label>
                <input type="text" class="form-control" name="Cantidad" v-model="consumo.Cantidad"/>
            </div>
            <div class="col-2">
                <label ><h5>Monto Total</h5></label>
                <input type="number" class="form-control" name="Total" v-model="consumo.Total"/>                
            </div>
            <div class="col-3 align-items-end d-flex">
              <a class="btn btn-primary" @click="saveConsumo" >Guardar</a>
            </div>
          </div>
      </form>
    </div>

    <div class="content mt-4 card-body">
      <table class="table table-dark">
        <thead>
          <tr>
            <th>Nro</th>
            <th>Usuario</th>
            <th>Cantidad m3</th>
            <th>Fecha</th>
            <th>Total (Bs)</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in dataconsumo" :key="item.id">
            <td>{{ item.id + 0 }}</td>
            <td>{{item.Usuario}}</td>
            <td>{{item.Cantidad}}</td>
            <td>{{item.Fecha}}</td>
            <td>{{item.Total}}</td>
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
			consumo: {},
      dataconsumo:[],
      datausuarios:[]
		}
	},
	methods: {
    async getUsuario(){
      const req = await fetch("http://localhost:3000/usuarios");
      this.datausuarios = await req.json();
    },
		async getConsumo(){
      const req = await fetch("http://localhost:3000/consumo");
      this.dataconsumo = await req.json();
    },
    async saveConsumo(e){
      console.log("agregar");
      e.preventDefault();

      const dataCon = JSON.stringify(this.consumo);
      const req = await fetch("http://localhost:3000/consumo",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: dataCon
      });

      const res = await req.json();
      console.log(res);
      this.consumo={};
      this.getConsumo();

    }
	},
   mounted () {
    this.getConsumo();
    this.getUsuario();
  },
}
</script>


