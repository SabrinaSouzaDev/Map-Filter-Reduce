const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

const testmapComThis = (arr, thisArg) => arr.map(function(item) {
    return item * this.value;

}, thisArg);

const nums = [1, 2];

console.log('this -> laranja', testmapComThis(nums, laranja));

console.log('this -> maca', testmapComThis(nums, maca));