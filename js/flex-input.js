/*изменяем длинну инпута в зависимости от введенных симвоов*/
window.addEventListener("DOMContentLoaded", function(){

    let inputs = document.querySelectorAll('.input-flex');
    /**
     * навешиваем слушателя для каждого найденого инпута
     */
        for(let input of inputs){
            input.oninput = function(){
                let size = input.value.length + 2;
                if(10 > size) size = 10;
                input.setAttribute('size', size);
            }
    }
});