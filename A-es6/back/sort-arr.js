
function sort(element) {
  for (var i = 0; i < element.length - 1; i++) {
    for (var j = 0; j < element.length - i - 1; j++) {
      if (element[j] > element[j + 1]) {
        //把大的数字放到后面
        var swap = element[j];
        element[j] = element[j + 1];
        element[j + 1] = swap;
      }
    }
  }
  console.log(element, 'element')
  return element
}
var element = [3, 5, 1, 2, 7, 8, 4, 5, 3, 4];
sort(element, 'element')
//console.log("before:"+element);[3,5,1,2,7,8,4,5,3,4];