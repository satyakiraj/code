let students = ["john", "patrick", "jack"];
students.forEach((element, index, arr) => arr[index] = element[0].toUpperCase() + element.slice(1));
students.forEach((element) => console.log(element));