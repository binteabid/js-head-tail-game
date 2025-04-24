// Head and Tail Gussesing Game


let input = prompt("Write Head / Tail") // variable to take user input
console.log(input.toLowerCase());

let announce = input.toLowerCase();  //variable to change user input to lowercase



if (announce == "head" || input == "tail") {        //if input is head or tail then it returns the if block



    if (announce == "head") {                        //nested if block returns when head is input
        let win = Math.ceil(Math.random())

        console.log("Congratulations! You Win this game")
        document.write("Congratulations! You Win this game")
    }

    else {                                         //nested else block when input id tail
        
        if (announce == "tail") {                     // nested if in else block

            let winLoose = Math.ceil(Math.random() * 3)  //variable to set condition using Math.ceil and Math.random Methods
            
            if (winLoose > 1) {                              //if blocks return if the value of variable is Greater than 1
                console.log("Congratulations! You Win this game")
                document.write("Congratulations! You Win this game")
            }
            else {                                             //else blocks return if the value of variable is less than 1

                console.log("Sorry! You have lost this game")
                document.write("Sorry! You have lost this game")
            }

        }


    }
}

else {                                   

    console.log("Cheater! Cheater! Cheater!");             //if input is not head or tail then it returns the else block
    document.write("Cheater! Cheater! Cheater!")
}


