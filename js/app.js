let userAge = 20;
let isSubscribed = true;

if ((userAge < 18) && (isSubscribed = false)){
    console.log("User is younger than 18 and not subscribed");
} else if ((userAge >= 18) && (isSubscribed = false)){
    console.log("User is 18 or older and not subscribed");
} else if ((userAge < 18) && (isSubscribed = true)){
    console.log("User is younger than 18 and subscribed");
} else if ((userAge >=18) && (isSubscribed = true)){
    console.log("User is 18 or older and subscribed");
} else{
    console.log("User is unaffected by time and subscriptions");
}