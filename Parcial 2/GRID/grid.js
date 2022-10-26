new gridjs.Grid({
    columns: ['idUsuario','Nombre', 'Apellido', 'Usuario'],
    server: {
      url: 'http://localhost:8082/usuario',
      then: data => data.map(usua => 
        [usua.idUsuario, usua.Nombre, usua.ApPat, usua.Usuario]
      )
    } 
}).render(document.getElementById("wrapper"));