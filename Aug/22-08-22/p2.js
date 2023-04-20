var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
        for(let j=i+1;j<nums.length;j++)
            if(nums[i]+nums[j] == target)
                return [i,j]
}
console.log(twoSum([10,20,10,40,50,70],50));