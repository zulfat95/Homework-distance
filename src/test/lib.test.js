import {calculateDistance} from "../js/lib.js";

test("It should calculate amount of left fuel", () => {
    let result = calculateDistance(27, 5.3);
    expect(result).toBe(509);
});