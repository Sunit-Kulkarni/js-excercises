function hello(name) {
    //try out the prompt function for user raw input
    if (name == undefined) {
        console.log("Hello World!");
    } else {
        name.toString();
        var output = "hello" + ", " + name;
        return output;
    }
}

function madlib(name, subject) {
    if (name == undefined) {
        console.log("Type in a name and subject please");
    } else {
        //name.toString();
        var output = name + "'s" + " favorite subject in school is " + subject;
        return output;
    }
}

function tipAmount(dollarAmount, service) {
    if (service == 'good'){
        total = 0.20 * dollarAmount;
        return total;
    } else if (service == 'fair') {
        total = 0.15 * dollarAmount;
        return total;
    } else if (service == 'bad') {
        total = 0.10 * dollarAmount;
        return total;
    } else {
        console.log("type in valid parameters please!")
    }
}

function totalAmount(dollarAmount, service) {
    return dollarAmount + tipAmount(dollarAmount, service);
}

function splitAmount(dollarAmount, service, people) {
    return (dollarAmount + tipAmount(dollarAmount, service))/people;
}

function printNumbers(start, finish) {
    for (i = start; i <= finish; i++) {
        console.log(i);
    }
}

function printSquare(length)

//function positiveNum(numArray) {
//    length = numArray.length();
//    index = 0
//    if (index =< length){
//        
//    } else {
//        
//    }
//    
//}