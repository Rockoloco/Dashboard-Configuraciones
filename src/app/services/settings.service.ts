import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  //1.Esto es un selector entonces la idea es saltar al Dom las menos veces posible por eso se 
  //saco esta propiedad de la función.
  //2.Este dato viene del link seleccionado #esto es id del elemento y lo extraes del Dom
  //3.Estoy seleccionando el elemento y guardando la referencia al elemento seleccionado en la variable.
  //4.En esta sentencia estoy tomando el thema o color seleccionado en el link y guardandolo en 
  // en la constante linkTheme
  //5. Nota Importante: Esta sentencia estaba en la función changeTheme(theme: string);
  public linkTheme = document.querySelector('#theme');
  
  
  constructor() { 
     console.log('Settings Service Constructor');

     //Aqui en esta linea va y consulta a local-storage si el tema esta guardado ahi
    //Nota Importante si no esta guardado va a venir vacio establece un color por defecto == './assets/css/colors/purple-dark.css';
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';
    
    //Aui setea a la url de referencia el nuevo color
    this.linkTheme.setAttribute('href', url);
    
    //Aqui setea el nuevo color en local storage
    //localStorage.setItem('theme', url);

  }

  //Función 1
  changeTheme(theme: string) {

   





    console.log(theme);

    //Forma de hacer la selección al elemento
    //Cuando necesito traer algo por el id utilizo #theme
    

    console.log(this.linkTheme);
    
    //Aqui cambiamos el url que esta en el  index.html que es: 'assets/css/colors/purple-dark.css'
    //por el nuevo
    //Este theme es el link seleccionado en la pagina "dashboard/account-settings" que trae el 
    //nuevo thema
    const url = `./assets/css/colors/${ theme }.css`;

    //Imprimimos el tema
    console.log(url);


    //En esta sentencia
    //Remplazamos el href original que se encuentra en la página index.html en el 
    //link 'assets/css/colors/purple-dark.css' por el
    //Nuevo link construido: 
    this.linkTheme.setAttribute('href', url);

    //Aqui vamos a guardar la preferencia del tema en el local storage
    //para que no se pierda el thema seleccionado cuando se recarga la pagina
    localStorage.setItem('theme', url);
    

    //Se manda a llamar la función 2
    this.checkCurrentTheme();

 }

 //Función 2
 checkCurrentTheme(): void {

  //En esta función estamos utilizando vanilla Java Script es java script puro
  //para seleccionar todos lo elementos
  const  links = document.querySelectorAll('.selector');
  
      
  console.log(links);
  links.forEach(elem => {
    //Recorro tofos los links y los remuevo la clase "working" con java script y
    //quito la selección.
    elem.classList.remove('working');


    //Necesito saber cual es el url del tema actual y cual es el url del tema de boton que quiero evaluar
    //si los dos hacen match ase le quiero poner la clase: working
    
    //Estoy trallendo el valor del link seleccionado por medio del valor data-theme
    const btnTheme = elem.getAttribute('data-theme');


    //Necesito compararlo contra el url que va estar almacenado en el linkTheme
    //Aqui armamos el url
    const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;

    
    //Este el thema actual
    const currentTheme = this.linkTheme.getAttribute('href');

    if(btnThemeUrl === currentTheme) {
      elem.classList.add('working');
    }
  })
}

}
