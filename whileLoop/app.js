let value;
let binaryCounter = "";

console.log("start");

value = 40;
// The starting value that you want to be turned into binary
let n = 32;
// The amount of bits you want to use (in this case 32 bits)
while (n !== -1)
    // Stops when it checks all 32 bits
{
    if (2 ** n > value) {
        // Checks if the value of the bit is bigger tha your inputed value
        if (binaryCounter.replaceAll('0', '1').length !== 0) {
            // Removes all of the leading zeros that aren't necessary
            binaryCounter += 0;
            // If the bit (say bit 32) is bigger than the value use a zero
        }
    } else {
        binaryCounter += 1;
        // This means that the bit fits into the value
        value -= 2 ** n;
        // Subtracts the bit to the power of two because of how bits start at one then square every consecutive bit
        // Ex. 1 - 2 - 4 - 8 - 16 - 32 - 64 - 128
    }
    n -= 1;
    // Drops down to the next bit down then runs everything all over again
    console.log({ n, value, binaryCounter });
    // Just stuff to check values every loop that runs everything all over again
}
console.log(binaryCounter);
// Prints the finished binary value
console.log('done');
// Shows that the program finished running