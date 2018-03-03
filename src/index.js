module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0){
    return 0;
  }
  if(array.length == 1){
    return 1;
  }

  if (array.length <= 10) {
    for (var i = 0; i < array.length-1; i++) {
      for (var j = i+1; j < array.length; j++) {
        if (array[i] > array[j]) {
          var buf = array[i];
          array[i] = array[j];
          array[j] = buf;
        }
      }
    }
  } else {
    mergeSort(array);
  }
 

  var result = 0;
  var count = 1;

  for(var i = 1;i < array.length; i++){
    if(array[i] == array[i - 1] + 1){
      count++;
    }
  else
    if(array[i] > array[i - 1] + 1){ 
      if (result < count) {
        result = count;
      }

      count = 1;
    }
  }

  return result;
}

function mergeSort(arr){
  var len = arr.length;
  if(len <2)
     return arr;
  var mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right =arr.slice(mid);

  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  

  return result.concat(left.slice(l)).concat(right.slice(r));
}
