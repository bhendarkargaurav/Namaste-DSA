let nums = [0, 1, 0, 2, 0, 3];

let x = 0;
for(let i=0; i< nums.length; i++) {
    if(nums[i] !==0) {
        nums[x] = nums[i];
        x++;
    }
}
for(let i=x; i<nums.length; i++) {
    nums[i] = 0;
}
console.log(nums)