angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/Aliados/aliados.html","<section class=\"Aliados\">\n    <h4 class=\"Titulo-Aliados\">Nuestros Alidos...</h4>\n    <div class=\"Empresas1\">\n      <img class=\"Imagen-Empresa\" width=\"450px\" height=\"450px\" src=\"/img/Nav/ArteColombia.jpg\">\n      <p class=\"TextoEmpresa\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>\n      <a class=\"Link-Nav\" href=\"https://www.youtube.com/\"> Visitar Empresa 1</a>\n    </div>\n    <div class=\"Empresas2\">\n      <img class=\"Imagen-Empresa\" width=\"450px\" height=\"450px\" src=\"/img/Nav/ArteColombia.png\">\n      <p class=\"TextoEmpresa\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>\n      <a class=\"Link-Nav\" href=\"https://www.youtube.com/\"> Visitar Empresa 2</a>\n    </div>\n    <div class=\"Empresas3\">\n      <img class=\"Imagen-Empresa\" width=\"450px\" height=\"450px\" src=\"/img/Nav/Hera.jpg\">\n      <p class=\"TextoEmpresa\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>\n      <a class=\"Link-Nav\" href=\"https://www.youtube.com/\"> Visitar Empresa 3</a>\n    </div>\n    <div class=\"Empresas4\">\n      <img class=\"Imagen-Empresa\" width=\"450px\" height=\"450px\" src=\"/img/Nav/LogoGef.png\">\n      <p class=\"TextoEmpresa\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>\n      <a class=\"Link-Nav\" href=\"https://www.youtube.com/\"> Visitar Empresa 4</a>\n    </div>\n    <div class=\"Empresas5\">\n      <img class=\"Imagen-Empresa\" width=\"450px\" height=\"450px\" src=\"/img/Nav/ModaColombiana.jpg\">\n      <p class=\"TextoEmpresa\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>\n      <a class=\"Link-Nav\" href=\"https://www.youtube.com/\"> Visitar Empresa 5</a>\n    </div>\n    <div class=\"Empresas6\">\n      <img class=\"Imagen-Empresa\" width=\"450px\" height=\"450px\" src=\"/img/Nav/ViveColombia.jpg\">\n      <p class=\"TextoEmpresa\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>\n      <a class=\"Link-Nav\" href=\"https://www.youtube.com/\"> Visitar Empresa 6</a>\n    </div>\n  <a href=\"/#/\" class=\"Boton-inicio\">Ir a inicio</a>\n</section>\n");
$templateCache.put("app/admin/lista.html","<a class=\"atras\" href=\"#/\">Ir A Inicio</a>\n<a class=\"usuarios\" href=\"#/usuarios\">Ir A Usuarios</a>\n<h3 class=\"titulo-admin\"> Lista Administradores</h3>\n<div ng-repeat=\"usuario in vm.usuarios\">\n    <li class=\"campos\">{{usuario.nombre}}</li>\n</div>\n");
$templateCache.put("app/beneficios/beneficios.html","<section class=\"Beneficios\">\r\n<h3 class=\"Titulo-beneficios\" > PREGUNTAS FRECUENTES </h3>\r\n  <div class=\"Body-Preguntas\">\r\n    <h4 class=\"Preguntas\">¿Como Me Registro?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Buscar Empresas?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Contactar Empresas?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Comprar?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Busco Una Empresa En El Mapa?</h4>\r\n  </div>\r\n  <a href=\"/#/\" class=\"Boton-inicio\">Ir a inicio</a>\r\n</section>\r\n");
$templateCache.put("app/empresario/list.html","");
<<<<<<< HEAD
$templateCache.put("app/faq/faq.html","</div>\r\n<section class=\"Faq\">\r\n<h3 class=\"Titulo-Faq\" > PREGUNTAS FRECUENTES </h3>\r\n  <div class=\"Body-Preguntas\">\r\n    <h4  onclick=\"respuesta()\" class=\"Preguntas\" >¿Como Me Registro?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Buscar Empresas?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Contactar Empresas?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Comprar?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Busco Una Empresa En El Mapa?</h4>\r\n  </div>\r\n  <a id=\"mirems\" onclick=\"respuesta()\" href=\"\" class=\"Boton-inicio\">Ir a Inicio</a>\r\n\r\n</section>\r\n");
$templateCache.put("app/footer/footer.html","<footer class=\"Footer\">\r\n	<h1 class=\"Footer-copyright\">Copyright 2016</h1>\r\n	<div class=\"Footer-cajaimg\">\r\n		<img src=\"../img/face.png\" alt=\"\" class=\"Footer-img\">\r\n		<img src=\"../img/insta.png\" alt=\"\" class=\"Footer-img\">\r\n		<img src=\"../img/twi.png\" alt=\"\" class=\"Footer-img\">\r\n	</div>\r\n</footer>\r\n<div class=\"cajafooter\">\r\n	\r\n</div>");
$templateCache.put("app/formulario/formulario.html","<div class=\"Barra-navegacion\">\r\n<header>\r\n    <nav>\r\n    <ul>\r\n      <a href=\"http://www.google.com\"><li>Faq</li></a>\r\n      <a href=\"http://www.google.com\"><li>Aliados</li></a>\r\n      <a href=\"http://www.google.com\"><li>Planes</li></a>\r\n    </ul>\r\n\r\n    <ul>\r\n      <a href=\"http://www.google.com\"><li>Beneficios</li></a>\r\n      <a href=\"#/inicio\"><li>inicio</li></a>\r\n      <a onclick=\"Salir()\"><li>Ingresar</li></a>\r\n    </ul>\r\n  </nav>\r\n      \r\n</header>\r\n</div>\r\n\r\n\r\n          <div class=\"Formulario\">\r\n\r\n          <img class=\"imagen-form\" src=\"../../img/form.jpg\" alt=\"\">\r\n\r\n            <h1 class=\"Titulo-form\">Formulario</h1>\r\n            <form class=\"registro\" enctype=\"multipart/form-data\">\r\n           \r\n\r\n                <select class=\"Select\"  \r\n                        required=\"false\" \r\n                        size=\"1\">\r\n\r\n                </select>\r\n\r\n                <select class=\"Select\" \r\n                        required=\"true\"\r\n                        size=\"1\">\r\n               </select>\r\n\r\n                <input class=\"Form-input\" \r\n                       required=\"true\" \r\n                       placeholder=\"Numero de documento\">\r\n                </input>\r\n\r\n\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Nombre\">\r\n                </input>\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Apellido\">\r\n                </input>\r\n\r\n\r\n                <select class=\"Select\"\r\n                        size=\"1\">\r\n                </select>\r\n\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Dirección\">\r\n                </input>\r\n\r\n\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Telefono\">\r\n                </input> \r\n\r\n\r\n\r\n\r\n                <input class=\"Form-input\" type=\"email\"\r\n                       placeholder=\"Email\"\r\n                       id=\"email\">\r\n                </input>\r\n\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Razon social\"\r\n                       id=\"razonSocial\">\r\n                </input>\r\n\r\n                <input class=\"Form-input\" type=\"text\" \r\n                       placeholder=\"Nit de empresa\">                       \r\n                </input>\r\n\r\n                <input class=\"Form-input\" type=\"password\"\r\n                       placeholder=\"Contraseña\">\r\n               </input>\r\n\r\n\r\n                <button class=\"guardar\"\r\n                        type=\"submit\">\r\n                    Aceptar\r\n                </button>\r\n\r\n                <input class=\"guardar\" \r\n                       type=\"reset\">\r\n                </input>\r\n\r\n                </div>");
$templateCache.put("app/header/header.html","<div class=\"Barra-navegacion\">\n<header>\n		<nav>\n		<ul>\n			<a href=\"#/faq\"><li>Faq</li></a>\n			<a href=\"#/planes\"><li>Planes</li></a>\n			<a href=\"#/aliados\"><li>Aliados</li></a>\n		</ul>\n\n		<img class=\"Logo\" id=\'logo\' src=\"../../img/colshop2.PNG\" alt=\"\" height=\"250px\" width=\"250px\">\n\n		<ul>\n			<a href=\"#/beneficios\"><li>Beneficios</li></a>\n			<a href=\"#/inicio\"><li>Inicio</li></a>\n			\n		</ul>\n			\n		<ul>\n			 \n			<a href=\"#/formulario\"><li>Registrarse</li></a>\n			<a onclick=\"Salir()\"><li>Ingresar</li></a>\n\n		</ul>\n\n	</nav>\n  		\n</header>\n</div>\n");
=======
$templateCache.put("app/faq/faq.html","<section class=\"Faq\">\r\n<h3 class=\"Titulo-Faq\" > PREGUNTAS FRECUENTES </h3>\r\n  <div class=\"Body-Preguntas\">\r\n    <h4 class=\"Preguntas\" >¿Como Me Registro?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Buscar Empresas?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Contactar Empresas?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Comprar?</h4>\r\n    <h4 class=\"Preguntas\">¿Como Busco Una Empresa En El Mapa?</h4>\r\n  </div>\r\n  <a href=\"/#/\" class=\"Boton-inicio\">Ir a Inicio</a>\r\n\r\n</section>\r\n");
$templateCache.put("app/footer/footer.html","<footer class=\"Footer\">\r\n	<h1 class=\"Footer-copyright\">Copyright 2016</h1>\r\n	<div class=\"Footer-cajaimg\">\r\n		<img src=\"../img/face.png\" alt=\"\" class=\"Footer-img\">\r\n		<img src=\"../img/insta.png\" alt=\"\" class=\"Footer-img\">\r\n		<img src=\"../img/twi.png\" alt=\"\" class=\"Footer-img\">\r\n	</div>\r\n</footer>\r\n<div class=\"cajafooter\">\r\n	\r\n</div>");
$templateCache.put("app/formulario/formulario.html","<div class=\"Barra-navegacion\">\r\n<header>\r\n    <nav>\r\n    <ul>\r\n      <a href=\"http://www.google.com\"><li>Faq</li></a>\r\n      <a href=\"http://www.google.com\"><li>Galeria</li></a>\r\n      <a href=\"http://www.google.com\"><li>Planes</li></a>\r\n    </ul>\r\n\r\n    <ul>\r\n      <a href=\"http://www.google.com\"><li>Beneficios</li></a>\r\n      <a href=\"#/inicio\"><li>inicio</li></a>\r\n      <a onclick=\"Salir()\"><li>Ingresar</li></a>\r\n    </ul>\r\n  </nav>\r\n      \r\n</header>\r\n</div>\r\n\r\n\r\n          <div class=\"Formulario\">\r\n\r\n          <img class=\"imagen-form\" src=\"../../img/form.jpg\" alt=\"\">\r\n\r\n            <h1 class=\"Titulo-form\">Formulario</h1>\r\n            <form class=\"registro\" enctype=\"multipart/form-data\">\r\n           \r\n\r\n                <select class=\"Select\"  \r\n                        required=\"false\" \r\n                        size=\"1\">\r\n\r\n                </select>\r\n\r\n                <select class=\"Select\" \r\n                        required=\"true\"\r\n                        size=\"1\">\r\n               </select>\r\n\r\n                <input class=\"Form-input\" \r\n                       required=\"true\" \r\n                       placeholder=\"Numero de documento\">\r\n                </input>\r\n\r\n\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Nombre\">\r\n                </input>\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Apellido\">\r\n                </input>\r\n\r\n\r\n                <select class=\"Select\"\r\n                        size=\"1\">\r\n                </select>\r\n\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Dirección\">\r\n                </input>\r\n\r\n\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Telefono\">\r\n                </input> \r\n\r\n\r\n\r\n\r\n                <input class=\"Form-input\" type=\"email\"\r\n                       placeholder=\"Email\"\r\n                       id=\"email\">\r\n                </input>\r\n\r\n\r\n                <input class=\"Form-input\" type=\"text\"\r\n                       placeholder=\"Razon social\"\r\n                       id=\"razonSocial\">\r\n                </input>\r\n\r\n                <input class=\"Form-input\" type=\"text\" \r\n                       placeholder=\"Nit de empresa\">                       \r\n                </input>\r\n\r\n                <input class=\"Form-input\" type=\"password\"\r\n                       placeholder=\"Contraseña\">\r\n               </input>\r\n\r\n\r\n                <button class=\"guardar\"\r\n                        type=\"submit\">\r\n                    Aceptar\r\n                </button>\r\n\r\n                <input class=\"guardar\" \r\n                       type=\"reset\">\r\n                </input>\r\n\r\n                </div>");
$templateCache.put("app/header/header.html","<div class=\"Barra-navegacion\">\n<header>\n		<nav>\n		<ul>\n			<a href=\"#/faq\"><li>Faq</li></a>\n			<a href=\"#/planes\"><li>Planes</li></a>\n			<a href=\"#/aliados\"><li>Aliados</li></a>\n		</ul>\n\n		<img class=\"Logo\" id=\'logo\' src=\"../../img/logo.png\" alt=\"\" height=\"250px\" width=\"250px\">\n\n		<ul>\n			<a href=\"#/beneficios\"><li>Beneficios</li></a>\n			<a href=\"#/inicio\"><li>Inicio</li></a>\n			\n		</ul>\n			\n		<ul>\n			 \n			<a href=\"#/formulario\"><li>Registrarse</li></a>\n			<a onclick=\"Salir()\"><li>Ingresar</li></a>\n\n		</ul>\n\n	</nav>\n  		\n</header>\n</div>\n");
>>>>>>> 5e2e772dfce36a8986a792aabc01b7c04455a62a
$templateCache.put("app/inicio/inicio.html","<div class=\"Cuerpo\">\n<video class=\"Video\" autoplay  poster=\"img/poster.png\" loop>\n  <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the \"Pause\" button  -->\n<source src=\"http://demosthenes.info/assets/videos/polina.webm\" type=\"video/webm\">\n<source src=\"http://demosthenes.info/assets/videos/polina.mp4\" type=\"video/mp4\">\n</video>\n\n<section class=\"contenido1\">\n<div id=\'body2\'>\n    	\n		<img id=\'imagen1\' src=\"../../img/compras.png\" alt=\"\">\n</div>\n\n\n<div class=\"texto1\" id=\"polina\">\n<h1>Polina</h1>\n<p>filmed by Alexander Wagner 2011\n<p><a href=\"http://demosthenes.info/blog/777/Create-Fullscreen-HTML5-Page-Background-Video\">original article</a>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta dictum turpis, eu mollis justo gravida ac. Proin non eros blandit, rutrum est a, cursus quam. Nam ultricies, velit ac suscipit vehicula, turpis eros sollicitudin lacus, at convallis mauris magna non justo. Etiam et suscipit elit. Morbi eu ornare nulla, sit amet ornare est. Sed vehicula ipsum a mattis dapibus. Etiam volutpat vel enim at auctor.</p>\n<p>Aenean pharetra convallis pellentesque. Vestibulum et metus lectus. Nunc consectetur, ipsum in viverra eleifend, erat erat ultricies felis, at ultricies mi massa eu ligula. Suspendisse in justo dapibus metus sollicitudin ultrices id sed nisl.</p>\n<button>Pause</button>\n</div>\n</section>\n\n<section class=\"contenido2\" id=\'banner\'>\n	\n\n</section>\n\n<section class=\"contenido3\"> \n<div id=\'body2\'>\n    	\n		<img id=\'imagen2\' src=\"../../img/compras2.png\" alt=\"\">\n</div>\n\n<div class=\"texto2\">\n\n<h1>Polina</h1>\n<p>filmed by Alexander Wagner 2011\n<p><a href=\"http://demosthenes.info/blog/777/Create-Fullscreen-HTML5-Page-Background-Video\">original article</a>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta dictum turpis, eu mollis justo gravida ac. Proin non eros blandit, rutrum est a, cursus quam. Nam ultricies, velit ac suscipit vehicula, turpis eros sollicitudin lacus, at convallis mauris magna non justo. Etiam et suscipit elit. Morbi eu ornare nulla, sit amet ornare est. Sed vehicula ipsum a mattis dapibus. Etiam volutpat vel enim at auctor.</p>\n<p>Aenean pharetra convallis pellentesque. Vestibulum et metus lectus. Nunc consectetur, ipsum in viverra eleifend, erat erat ultricies felis, at ultricies mi massa eu ligula. Suspendisse in justo dapibus metus sollicitudin ultrices id sed nisl.</p>\n<button>Pause</button>\n</div>\n</section>  \n\n</div>\n\n    \n");
$templateCache.put("app/login/login.html","\r\n<form id=\'formulario\' class=\"formularioIngreso\">\r\n                   <h1 class=\"titluloLogin\">Iniciar sesión</h1>\r\n                    <input type=\"text\"\r\n                           class=\"inputUsuario\" \r\n                           placeholder=\"Usuario\"\r\n                           required=\"true\">\r\n                    </input>\r\n\r\n                    <input type=\"password\"\r\n                           class=\"inputContraseña\" \r\n                           placeholder=\"Contraseña\">                       \r\n                    </input>\r\n\r\n                    <button class=\"ingresar\"\r\n                            type=\"submit\">\r\n                        Aceptar\r\n                    </button>\r\n                    \r\n\r\n                </form>\r\n                    ");
$templateCache.put("app/planes/planes.html","<section class=\"Planes\">\r\n<h3 class=\"Titulo-Planes\"> Nuestros Paquetes...</h3>\r\n	<div class=\"Oro\">\r\n		<img class=\"MedallaOro\" src=\"img/Nav/Plan Oro.png\">\r\n		<p class=\"Descripcion-Oro\">\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		</p>\r\n	</div>\r\n	<div class=\"Plata\">\r\n		<img class=\"MedallaPlata\" src=\"img/Nav/Plan Plata.png\">\r\n		<p class=\"Descripcion-Plata\">\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		</p>\r\n	</div>\r\n	<div class=\"Bronce\">\r\n		<img class=\"MedallaBronce\" src=\"img/Nav/Plan Bronce.png\">\r\n		<p class=\"Descripcion-Bronce\">\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, labore, doloremque. At, saepe, rem! Pariatur dignissimos quos deleniti tempore, nisi dolorem libero delectus totam est necessitatibus blanditiis maiores, explicabo labore!\r\n		</p>\r\n	</div>\r\n</section>\r\n");
$templateCache.put("app/usuarios/list.html","<div class=\"Header-user\"></div>\r\n<a href=\"#/\" class=\"Boton-inico\">Ir a inicio</a>\r\n<h3> Hola  desde list usuario</h3>\r\n<div ng-repeat=\"usuario in vm.usuarios\">\r\n\r\n	<table summary=\"Tabla con los datos de los resultados de la búsqueda\" width=\"50%\" class=\"tabla-users\">\r\n  <tr>\r\n    <th abbr=\"Imagen del producto\" scope=\"col\" >Nombres</th>\r\n    <th abbr=\"Datos del producto\" scope=\"col\">Apellidos</th>\r\n    <th abbr=\"Datos del producto\" scope=\"col\">Telefonos</th>\r\n    <th abbr=\"Datos del producto\" scope=\"col\">Email</th>\r\n  </tr>\r\n\r\n  <tr>\r\n    <td >\r\n	  {{usuario.nombre}}\r\n    </td>\r\n    <td class=\"Columna-apellido\">\r\n     {{usuario.apellido}}\r\n    </td>\r\n    <td class=\"Columna-telefono\">\r\n     {{usuario.telefono}}\r\n    </td>\r\n    <td class=\"Columna-email\">\r\n     {{usuario.email}}\r\n    </td>\r\n  </tr>\r\n</table>\r\n</div>\r\n\r\n");}]);