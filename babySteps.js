var nums = process.argv.slice(2);

console.log(nums.reduce(function(prev, curr){
	return prev + Number(curr);
}, 0));