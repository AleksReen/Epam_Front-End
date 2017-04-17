window.onload = function (e) {

    var input = document.querySelector(".datepicker__input");
    var calendar;
    var monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var dayOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    var today = new Date();
    var fullYear = today.getFullYear();
    var month = today.getMonth();
    var now = today.getMonth();

    var firstOpenCalendar = true;

    function CreateCalendar(month) {

        if (firstOpenCalendar) {

            firstOpenCalendar = false;

            var listDayWeek = document.querySelector(".calendar__days");

            for (var i = 0; i < 7; i++) {
                var nameDayWeek = dayOfWeek[i];
                listDayWeek.insertAdjacentHTML('beforeEnd', '<div class="calendar__day" >' + nameDayWeek + '</div>');
            }

            headCalendar(month);
            dateCalendar(month);

            calendar = document.querySelector('.datepicker__calendar');
        }
    }
    CreateCalendar(month);


    var nextMonth = document.querySelector(".buttonsConteiner__buttonNext");
    nextMonth.onclick = function () {
        ++month;
        if (month > 11) {
            month = 0;
        }
        UpdateCalendar(month);
    }

    var previusMonth = document.querySelector(".buttonsConteiner__buttonPrevius");
    previusMonth.onclick = function () {
        --month;
        if (month<0) {
            month = 11;
        }
        UpdateCalendar(month);
    }

    function UpdateCalendar(month) {

            headCalendar(month);
            
            var clearNotDate = document.querySelectorAll('.calendar__num-notDate');
            for (var i = 0; i < clearNotDate.length; i++) {
                clearNotDate[i].parentElement.removeChild(clearNotDate[i]);
            }           

            var clearDate = document.querySelectorAll('.calendar__num');
            for (var i = 0; i < clearDate.length; i++) {
                clearDate[i].parentElement.removeChild(clearDate[i]);
            }

            dateCalendar(month);    
        }

    function headCalendar(month) {

        document.querySelector('.calendar__month').innerText = monthNames[month] + " " + fullYear;
    }

    function dateCalendar() {

        var listDay = document.querySelector(".calendar__numbers");
        var startDay = new Date(fullYear, (month), 0).getDay();
        var daysInMonth = 33 - new Date(fullYear, month, 33).getDate();
        for (var i = 0; i < startDay; i++) {
            listDay.insertAdjacentHTML('beforeEnd', '<div class="calendar__num-notDate"></div>');
        }
        for (var i = 0; i < daysInMonth; i++) {
            listDay.insertAdjacentHTML('beforeEnd', '<div class="calendar__num">' + (i + 1) + '</div>');
            if (i + 1 == today.getDate() && month==now) {
                document.querySelectorAll(".calendar__num")[i].setAttribute("style", "background-color: rgb(77,144,254); color:white");
            }
        }
    }

    input.onclick = function () {
        calendar.style.display = "block";
    }

    var div = document.querySelector(".calendar__numbers");

    div.onclick = function (event) {
        var target = event.target.innerText;
        
        if (target == "" || event.target == div) {
            return false;
        }
        else {
            if (target < 10) {
                target = "0" + target;
            }
            input.value = target + " " + monthNames[month] + " " + fullYear;
            calendar.style.display = "none";
        }
    }
}