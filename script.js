
let eklebuton = document.querySelector('#button-addon2')
eklebuton.addEventListener('click',eklefunction)


function eklefunction()
{
    let yaziInput = document.querySelector('#yazi')
    let liste = document.querySelector("#listgrup")
    let eleman = document.createElement('li')
    if(yaziInput.value !=0){
        eleman.innerHTML = yaziInput.value;
        eleman.classList.add('list-group-item');
        liste.appendChild(eleman);

        //alert("Yapılacaklar Listesine Ekleme Yapıldı")
        let toastEl = document.querySelector('.toast');
        let toast = new bootstrap.Toast(toastEl);
        toast.show();
    }
    
    eleman.addEventListener('click', function(){
        this.remove()
        let toastEl = document.querySelector('#liveToast2');
        let toast = new bootstrap.Toast(toastEl);
        toast.show();
        //alert("Yapılacaklar Listesinden Silme Yapıldı")
    })
}
