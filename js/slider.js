window.addEventListener("DOMContentLoaded", function(){
    /**
     * 1) select all slider-item
     * 2) display:none all
     * 3) 
     */
    
    let slider = document.getElementById('slider'),
        indexShow = 1;
    
    if(slider){
        let slids       = slider.querySelectorAll('.slider-item'),
            dotWraper   = slider.querySelector('.dots'),
            dots        = dotWraper.querySelectorAll('.dot'),
            num_slids   = slids.length,
            prev        = slider.querySelector('.prev'),
            next        = slider.querySelector('.next'),
            sec = 10;
        /* Скрываем все слайды */
        show(indexShow);

        /*кнопка назад , индекс -1*/
        prev.addEventListener('click', ()=>{
            moveSlide(-1);
        });

        /* кнопка вперед, индекс + 1 */
        next.addEventListener('click', ()=>{
            moveSlide(1);
        });

        /* Нажатие на точки */
        dotWraper.addEventListener('click', (event)=>{
            for(let i=0; i<dots.length + 1; i++){
                console.log(event);
                if(event.target.classList.contains('dot') && event.target == dots[i-1]){
                    currentSlider(i);
                }
            }
        });

        /**
        * перелистывание , увеличиваем индекс на единицу
        */
        function moveSlide(n){
            show(indexShow += n);
        }
            
        /**
         * отображение указанного слайда
         */
        function currentSlider(n){
            show(indexShow = n);
        }

        function show(index){
        
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
    
            /* Скрываем все слайды */
            hideSlids(slids);
            /* Отключаем активную точку */
            hideActionDot(dots);
    
            /* Показываем конкретный слайд */
            showSlid(index - 1);
            /* Ставим активную точку для него */
            showDotAction(index - 1);
        }


        /**
         * Скрыть все ьлоки слайдеров
         */
        function hideSlids(slids){
            slids.forEach(slid => {
                slid.classList.remove("show");
            });
        }
    
        /**
         * Отключить выделение у активной точки
         * @param {*} dots 
         */
        function hideActionDot(dots){
            dots.forEach(dot => {
                dot.classList.remove("action");
            });
        }

        function showSlid(i){
            slids[i].classList.add("show");
        }

        function showDotAction(i){
            dots[i].classList.add("action");
        }

        /**
         * Прокрутка слайдера с задержкой sec *1000
         */
        setInterval(()=>{
            show(++indexShow);
        }, sec * 1000); // устанавливаем интервал перелистывания в милисекундах
    }

});