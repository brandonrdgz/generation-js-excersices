const secondsToMiliseconds = (seconds) => seconds * 1000;

const showAlarm = (seconds) => setTimeout(
    () => console.log(`Time for bed after ${seconds} seconds`),
    secondsToMiliseconds(seconds)
);

const seconds = parseInt(prompt("Type the number of seconds: "));
showAlarm(seconds);