window.addEventListener("DOMContentLoaded", function(){
    /**
     * 1) select all slider-item
     * 2) display:none all
     * 3) 
     */

    let slider = document.getElementById('slider'),
        indexShow = 1,
        sec = 5;
    
    if(slider){
        let slids  = slider.querySelectorAll('.slider-item'),
            num_slids = slids.length;
        console.log(slids);
        /* Скрываем все слайды */
        show(slids, indexShow);

        /**
         * Прокрутка слайдера с задержкой sec *1000
         */
        setInterval(()=>{
            show(slids,++indexShow);
        }, sec *1000); // устанавливаем интервал перелистывания в милисекундах
    }

    function hideSlids(slids){
        slids.forEach(slid => {
            slid.classList.remove("show");
        });
    }

    function showSlid(slid){
        console.log(slid);
        slid.classList.add("show");
    }

    function show(slids, index){
        
        /**
         * Проверка на первый и последний слайдер
         */
        if(indexShow > slids.length){
            indexShow = 1;
            index = indexShow;
        }
        if(indexShow < 1){
            indexShow = slids.length;
            index = indexShow;
        }

        console.log(slids[index-1]);

        /* Скрываем все слайды */
        hideSlids(slids);

        /* Показываем конкретный слайд*/
        showSlid(slids[index - 1]);
    }
});