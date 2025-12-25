let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;   

        if (value == "AC") {
            string = "";
            input.value = "";
        }

        else if (value == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }

        else if (value == "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
            }
        }

        else {
            string += value;
            input.value = string;
        }
    })
})