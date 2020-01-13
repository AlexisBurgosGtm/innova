let socket = io();

// ROOTS DE LAS SECCIONES
let root = document.getElementById('root');
let intro = document.getElementById('introcontainer');
let contact = document.getElementById('contact');
let btnMenu = document.getElementById('btnMenu');
btnMenu.style = "visibility:hidden";

let menuContainer = document.getElementById('menuContainer');
let navbar = document.getElementById('nav-menu-container');


// SECTIONS VIEW
function getNavbar(logged){
  let getMenu = {
    menucliente: ()=>{
      return `<div class="row">

                <div class="col-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Opcion 1</h5>
                    </div>
                    <div class="card-body">
                      Descripción de la opción
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-info">Seleccionar</button>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Opcion 1</h5>
                    </div>
                    <div class="card-body">
                      Descripción de la opción
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-info">Seleccionar</button>
                    </div>
                  </div>
                </div>

              </div>`
    }
  };

 if(logged==true){
  btnMenu.style = "visibility:visible";
 }else{
  btnMenu.style = "visibility:hidden";
  menuContainer.innerHTML = getMenu.menucliente();
 }
};

function getSectionIntro(show){
  if(show==true){
    let sectionIntro = `
  <section id="intro">
    <div class="intro-text">
        <h2>Bienvenido !!</h2>
        <p>Qué bueno tenerte aquí !!</p>
        <a href="#" id="btnMenuLogin" class="btn-get-started scrollto">Iniciar</a>
    </div>

    <div class="product-screens">

        <div class="product-screen-1 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.6s">
            <img src="img/product-screen-1.png" alt="">
        </div>

        <div class="product-screen-2 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.6s">
            <img src="img/product-screen-2.png" alt="">
        </div>

        <div class="product-screen-3 wow fadeInUp" data-wow-duration="0.6s">
            <img src="img/product-screen-3.png" alt="">
        </div>
    </div>
  </section>
    `;

    intro.innerHTML = sectionIntro;
  }else{
    intro.innerHTML = '';
  }  

    
};

function getSectionRoot(view){
  
  switch (view) {
    case 'CURSOS':
      let strRoot = `
      <section id="features">
        <div class="container">
  
          <div class="row">
  
            <div class="col-lg-8 offset-lg-4">
              <div class="section-header wow fadeIn" data-wow-duration="1s">
                <h3 class="section-title">Product Featuress</h3>
                <span class="section-divider"></span>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-5 features-img">
              <img src="img/product-features.png" alt="" class="wow fadeInLeft">
            </div>
  
            <div class="col-lg-8 col-md-7 ">
  
              <div class="row">
  
                <div class="col-lg-6 col-md-6 box wow fadeInRight">
                  <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                  <h4 class="title"><a href="">SERVICIO AL CLIENTE</a></h4>
                  <p class="description">Este curso te enseñará las técnicas adecuadas para el servicio eficiente.</p>
                </div>
                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.1s">
                  <div class="icon"><i class="ion-ios-flask-outline"></i></div>
                  <h4 class="title"><a href="">FARMACOLOGIA I</a></h4>
                  <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata noble dynala mark.</p>
                </div>
                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.2s">
                  <div class="icon"><i class="ion-social-buffer-outline"></i></div>
                  <h4 class="title"><a href="">FARMACOLOGIA II</a></h4>
                  <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur teleca starter sinode park ledo.</p>
                </div>
                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.3s">
                  <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
                  <h4 class="title"><a href="">FARMACOLOGIA II</a></h4>
                  <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum dinoun trade capsule.</p>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
      `
      root.innerHTML = strRoot;      
      break;

      case "":

        break;
  
    default:
      break;
  }
  
};

function getSectionContacto(show){
  if(show==true){
    let str = `
    <div class="container">
      <div class="row wow fadeInUp">

        <div class="col-lg-4 col-md-4">
          <div class="contact-about">
            <h3>Onne-Innova</h3>
            <p>Academia de cursos online para el sector farmacéutico en Guatemala</p>
            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>  
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="info">
            <div>
              <i class="ion-ios-location-outline"></i>
              <p>Ciudad de Guatemala<br>Guatemala</p>
            </div>

            <div>
              <i class="ion-ios-email-outline"></i>
              <p>info.onne-innova@gmail.com</p>
            </div>

            <div>
              <i class="ion-ios-telephone-outline"></i>
              <p>+502 5555-5555</p>
            </div>

          </div>
        </div>

        <div class="col-lg-5 col-md-8">
          <div class="form">
            <div id="sendmessage">
              Tu mensaje ha sido enviado!!
            </div>
            <div id="errormessage"></div>
            <form role="form" class="contactForm" id="frmContacto">
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Su nombre" data-rule="minlen:4" data-msg="Por favor ingrese su nombre" />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-lg-6">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Su Email" data-rule="email" data-msg="Por favor ingrese su Email" />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" value="Información de los Cursos" id="subject" placeholder="Motivo" data-rule="minlen:4" data-msg="Por favor escríbanos sus dudas" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Por favor escríbanos su mensaje" placeholder="Escríbanos un mensaje..."></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center"><button type="submit" title="Enviar Mensaje">Enviar Mensaje</button></div>
            </form>
          </div>
        </div>

      </div>

    </div>
`
contact.innerHTML = str;
  }else{
    contact.innerHTML = '';
  }

};


// SECTION LISTENERS
function getIndexListeners(){
    
    let btnMenuCursos = document.getElementById('btnMenuCursos');
    let btnMenuContacto = document.getElementById('btnMenuContacto');
    
    btnMenu.addEventListener('click',()=>{
      $('#modalMenu').modal('show');
    });

    //LOGIN DE USUARIO
    let frmLogin = document.getElementById('frmLogin');
    frmLogin.addEventListener('submit',(e)=>{
      e.preventDefault();
      
      classNavegar.login(frmLogin.txtUser.value,frmLogin.txtPass.value);
      $('#modalLogin').modal('hide');
    });

    let btnMenuLogin = document.getElementById('btnMenuLogin');
    btnMenuLogin.addEventListener('click',()=>{
      $('#modalLogin').modal('show');
    });



    // CONTACTO
    let frmContacto = document.getElementById('frmContacto');
    frmContacto.addEventListener('submit',(e)=>{
      e.preventDefault();
      sendContactMsn(frmContacto)
    });
};



// FUNCIONES
function sendContactMsn(data){
  axios.post('/clientes/contacto', {
      nombre:data.name.value,
      email:data.email.value,
      motivo:data.subject.value,
      mensaje:data.message.value
  })
  .then(async(response) => {
      const data = response.data;
      $("#sendmessage").addClass("show");
      $("#errormessage").removeClass("show");
      $('.contactForm').find("input, textarea").val("");  

      setInterval(() => {
        $("#sendmessage").removeClass("show");
      }, 2000);

    }, (error) => {
      $("#sendmessage").removeClass("show");
      $("#errormessage").addClass("show");
      $('#errormessage').html(msg);
  });

}

getNavbar(false);

getSectionIntro(true);
getSectionRoot('CURSOS');
getSectionContacto(true);


getIndexListeners();