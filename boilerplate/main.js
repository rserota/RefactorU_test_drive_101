
var splice = function(arr, start, numToReplace, replace) {
	newArr = []
	for (var i = 0; i < arr.length; i++){
		console.log('i = ',i)
		console.log('start = ',start)
		if ((i===start) && arguments.length > 3){
			for (var j = 3; j < arguments.length; j++){
				newArr.push(arguments[j])
			}
		}
		if(!((start <= i) && (i < (start+numToReplace)))){
            newArr.push(arr[i])
        }    
	}
	if (start > arr.length){
		for (var j = 3; j < arguments.length; j++){
			newArr.push(arguments[j])
		}
	}
	return newArr;
};
	


