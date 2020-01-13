let classNavegar = {
    login: (usuario,pass)=>{
        getSectionIntro(false);
        getSectionContacto(false);
        getNavbar(true);
        classNavegar.miscursos(usuario);

    },
    miscursos: (usuario)=>{
        funciones.loadScript('./views/viewMisCursos.js','root')
        .then(()=>{
            inicializarVistaMisCursos(usuario);
        })
    },
    curso: (idcurso,usuario)=>{}
};