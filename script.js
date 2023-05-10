function newQuote() {
    let num = Math.random();
    let randomNumber = num * 5;
    let numberDown = Math.floor(randomNumber);

    if(numberDown === 0){
        console.log(numberDown);
        document.getElementById("quote").innerHTML = "“Life is what happens when you're busy making other plans.” </br> - John Lennon";
    }
    if(numberDown === 1){
        console.log(numberDown);
        document.getElementById("quote").innerHTML = "“When you reach the end of your rope, tie a knot in it and hang on.”</br>  -Franklin D. Roosevelt";
    }
    if(numberDown === 2){
        console.log(numberDown);
        document.getElementById("quote").innerHTML = "“Always remember that you are absolutely unique. Just like everyone else.” </br> -Margaret Mead";
    }
    if(numberDown === 3){
        console.log(numberDown);
        document.getElementById("quote").innerHTML = "“The way to get started is to quit talking and begin doing.” </br> -Walt Disney";
    }
    if(numberDown === 4){
        console.log(numberDown);
        document.getElementById("quote").innerHTML = "“Kung ikaw ay masaya tumawa ka! HA HA HA”</br> -Hampro";
    }
}
