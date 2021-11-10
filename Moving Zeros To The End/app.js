// Write an algorithm that takes an array and moves
// all of the zeros to the end, preserving the order
// of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = function (arr) {
    const length = arr.length;
    const temp = arr.filter((el) => el !== 0);

    for (let i = temp.length - 1; i < length - 1; i++) {
        temp.push(0);
    }
    return temp;
};
console.dir(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));