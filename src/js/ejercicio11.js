function getCookies(){
    const cookiesAccepted = confirm('This site uses cookies to store information about your computer.');
    alert(cookiesAccepted);
    if(cookiesAccepted === true){
        document.getElementById('execute').addEventListener('click',()=>{
            const guardarNombre = document.getElementById('name').value;
            document.cookie = `nombrePersona=${guardarNombre}`;
        });
    }else{
        alert("Se utilizará el sitio sin cookies");
    }

}

getCookies();
