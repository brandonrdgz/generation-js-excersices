function onlineStatus(users) {
    let maxUsersDisplay = 2;
    let usersString = "";

    for (let i = 0; i < maxUsersDisplay; i++) {
        usersString += users[i];

        if (i !== maxUsersDisplay - 1) {
            usersString += ",";
        }
    }

    usersString += " and " + (users.length - maxUsersDisplay) + " more online";

    return usersString;
}

const testUsers = ['mockIng99', 'J0eyPunch', 'glassedFer'];

console.log(onlineStatus(testUsers));