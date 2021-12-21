window.onload = function () {
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    // let modo = confirm('Desea modo oscuro');
    // if(modo){
    //     body.style.backgroundColor = '#7f7f7f'
    //     body.classList.add('fondoMoviesList');
    // }


    let $imgList = document.querySelector(".imgList")

    $imgList.addEventListener("mouseover", () => {
        // alert("piumba")
        let modo = confirm('Desea modo oscuro');
        if (modo) {
            body.style.backgroundColor = '#000000'
            body.classList.add('fondoMoviesList');
        }

        // this.preventDefault()

        // let claro = confirm("Desea modo claro?")
        // if(claro){
        //     body.style.backgroundColor = '#fff'
        //     body.classList.add('fondoMoviesList');
        // }


    })

    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color = 'white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}