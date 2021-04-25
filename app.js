// ********************************** Chapter : 14-16 **********************************

// ********************************* Task : 01 ******************************

// var name = [];


// ********************************* Task : 03 ******************************

// var strigs = ['abdul', 'samad', 'shaikh']


// ********************************* Task : 04 ******************************

// var num = [10, 20, 30]


// ********************************* Task : 05 ******************************

// var boolean = [true, false]


// ********************************* Task : 06 ******************************

// var mixArry = ['abdul', 'samad',10, 20,true, false]


// ********************************* Task : 07 ******************************

// var edu = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

// document.write('<h1> Qualifications: </h1>')

// document.write('1) ' + edu[0] +'<br>' + '2) '+ edu[1] +'<br>' + '3) '+ edu[2] +'<br>' + '4) '+ edu[3] +'<br>' 
// + '5) '+ edu[4] +'<br>'+ '6) '+ edu[5] +'<br>' + '7) '+ edu[6] +'<br>' + '8) '+ edu[7])



// ********************************* Task : 08 ******************************

// var studentName = ['tahir', 'zahid', 'afaq'];
// var score = [350,400,450];
// var total = 500
// document.write('Score of ' + studentName[0] + ' is ' + score[0]+'.' + ' Percentage: '+ score[0]/total*100+ '%' + '<br>')
// document.write('Score of ' + studentName[1] + ' is ' + score[1]+'.' + ' Percentage: '+ score[1]/total*100+ '%' + '<br>')
// document.write('Score of ' + studentName[2] + ' is ' + score[2]+'.' + ' Percentage: '+ score[2]/total*100+ '%')


// ********************************* Task : 09 ******************************

// var myColor = ['red', 'blue', 'green', 'yellow', 'orange'];

// var userInput = prompt('Enter color you want to add as first');
// myColor.unshift(userInput);

// var userInput = prompt('Enter color you want to add as last');
// myColor.push(userInput);

// var userInput1 = prompt('Enter color you want to add as first');
// var userInput2 = prompt('Enter color you want to add as second');
// myColor.splice(0,0,userInput1,userInput2);

// myColor.shift();

// myColor.pop();

// var userInput1 = prompt('Enter color you want to add in array');
// var userInput2 = prompt('Enter index number in which you want to add');
// myColor.splice(userInput2,0,userInput1);

// document.write(myColor)

// var userInput1 = prompt('From which index you want to delete');
// var userInput2 = prompt('how many index to want to delete');
// var updateColor = myColor.slice(userInput1,userInput2);

// document.write(updateColor)


// ********************************* Task : 11 ******************************

// var cities = ['karachi', 'lahore', 'islamabad', 'quetta', 'peshawar']

// var newcities = cities.slice(2,4)

// document.write('cities = ' +cities+' <br>'+  "newcities = " + newcities)


// ********************************* Task : 15 ******************************

// var mobiles = ['Apple', 'Nokia', 'Samsung', 'Motorolla', 'Oppo']

// document.write('<select>' +
// '<option>'+'select mobile'+'</option>'+
// '<option>'+ mobiles[0]+'</option>'+
// '<option>'+ mobiles[1]+'</option>'+
// '<option>'+ mobiles[2]+'</option>'+
// '<option>'+ mobiles[3]+'</option>'+
// '<option>'+ mobiles[4]+'</option>'+
// +'</select>')