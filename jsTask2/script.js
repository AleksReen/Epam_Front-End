window.onload = function () {

    if (performance.navigation.type == 1) {
        document.forms[0].reset();
        localStorage.clear();
    }

    var inputFormAction = document.querySelectorAll("input");

    function Load() {

        for (var i = 0; i < inputFormAction.length; i++) {

            if (inputFormAction[i].type == "checkbox" || inputFormAction[i].type == "radio") {

                var checkedCkB = window.localStorage.getItem(inputFormAction[i].id);
                if (checkedCkB === "true") {
                    inputFormAction[i].checked = "checked";
                }             
            }
            else if (inputFormAction[i].type == "text" || inputFormAction[i].type == "search") {

                var value = window.localStorage.getItem(inputFormAction[i].id);
                inputFormAction[i].value = value;
            }
        }
    }
    Load();

    window.onbeforeunload = function () {

        for (var i = 0; i < inputFormAction.length; i++) {

            if (inputFormAction[i].type == "text" || inputFormAction[i].type == "search") {
                window.localStorage.setItem(inputFormAction[i].id, inputFormAction[i].value);
            }
            else if (inputFormAction[i].type == "checkbox" || inputFormAction[i].type == "radio") {
                window.localStorage.setItem(inputFormAction[i].id, inputFormAction[i].checked);
            }
        }
    }
}




