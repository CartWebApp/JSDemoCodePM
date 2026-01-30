let tickets = 5;

do {
    choice = Number(prompt(`You have ${tickets} ticket(s)\nDo you want to use your ticket(s)?\n1. Yes\n2. No`));
    switch (choice) {
        case 1:
            do {
                ticketsUsed = Number(prompt(`You have ${tickets} ticket(s)\nHow many tickets would you like to use?`));
            } while(ticketsUsed > tickets || ticketsUsed < 0);
            tickets -= ticketsUsed;
            console.log(`You used ${ticketsUsed} ticket(s)\nYou now have ${tickets} ticket(s)`);
            break;
        case 2:
            break;
    }
} while(tickets > 0 && choice !== 2);
console.log("Bye bye!");