new gridjs.Grid({
    columns: ['idUsuario','Nombre', 'Apellido', 'Usuario'],
    server: {
      url: 'http://localhost:8082/usuario',
      then: data => data.map(usuario => 
        [usuario.idUsuario, usuario.Nombre, usuario.ApPat, usuario.Usuario]
      )
    } 
}).render(document.getElementById("wrapper"));