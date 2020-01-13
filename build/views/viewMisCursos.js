function inicializarVistaMisCursos(usuario){

    getViewMisCursos();
    //getCursosUsuario(usuario);
};

function getViewMisCursos(){
    let view ={
        sectionListado: ()=>{
            return `
                <div class="card-deck">

                    <div class="card">
                        <div class="card-header bg-success">
                            <h2>CURSO I</h2>
                        </div>
                        <div class="card-body">
                            <label>Descripción del Curso</label>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header bg-success">
                            <h2>CURSO I</h2>
                        </div>
                        <div class="card-body">
                            <label>Descripción del Curso</label>
                        </div>
                    </div>

                </div>
            `
        }
    };
        
    root.innerHTML ='';
    root.innerHTML = view.sectionListado();
};

function getCursosUsuario(usuario,idcontainer){
    let contenedor = '';
    let str = '';
    axios.get('/clientes/miscurso?usuario=' + usuario)
    .then((response) => {
        const data = response.data;        
        data.map((rows)=>{
            
            str += ``

        })
        contenedor = str;
        
    }, (error) => {
        console.log(error);
    });
}