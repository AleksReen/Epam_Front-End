window.onload = function (e) {

    var input = document.querySelector(".datepicker__input");
    var calendar;
    var monthNames = ["Янарь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    var dayOfWeek = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
    var today = new Date();
    var fullYear = today.getFullYear();
    var month = today.getMonth();

    var firstOpenCalendar = true;

      function CreateCalendar() {
        if (firstOpenCalendar) {
            firstOpenCalendar = false;

            document.querySelector('.calendar__month').innerText = monthNames[month] + " " + fullYear;

            var daysInMonth = 33 - new Date(fullYear, month, 33).getDate();
            var startDay = new Date(fullYear, (month), 0).getDay();
            var listDayWeek = document.querySelector(".calendar__days");
            for (var i = 0; i < 7; i++) {
                var nameDayWeek = dayOfWeek[i];
                listDayWeek.insertAdjacentHTML('beforeEnd', '<div class="calendar__day" >' + nameDayWeek + '</div>');
            }
            var listDay = document.querySelector(".calendar__numbers");
            for (var i = 0; i < startDay; i++) {
                listDay.insertAdjacentHTML('beforeEnd', '<div class="calendar__num-notDate"></div>');
            }
            for (var i = 0; i < daysInMonth; i++) {
                listDay.insertAdjacentHTML('beforeEnd', '<button class="calendar__num" onclick="currentDate(this)">' + (i + 1) + '</button>');
                if (i + 1 == today.getDate()) {
                    document.querySelectorAll(".calendar__num")[i].setAttribute("style", "background-color: rgb(77,144,254); color:white");
                }
            }
            calendar = document.querySelector('.datepicker__calendar');
        }
    }
    CreateCalendar();

    input.onclick = function () {
        calendar.style.display = "block";
    }
    this.currentDate = function (e) {
        var d = e.innerText;
        if (d < 10)
            d = "0" + d;
        input.value = d + " " + monthNames[month] + " " + fullYear;
        calendar.style.display = "none";   
    }
    this.color = function (e) {
    }
}