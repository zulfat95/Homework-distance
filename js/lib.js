export function calculateDistance(amountOfFuel, consumptionOfHundredKm) {
    let distance = 100;
    let result = amountOfFuel / consumptionOfHundredKm * distance;
    return Math.round(result);
}