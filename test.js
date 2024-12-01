function google(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        return "google";
    } else if (number % 3 == 0) {
        return "goo";
    } else if (number % 5 == 0) {
        return "gle";
    } else {
        return number;
    }
 }
 
 console.log (google (6));
 console.log (google (10));
 console.log (google (15));
 console.log (google (7));
 