// Function for Converting String to Array
function stringToArray(string) {
    var word = '';
    var array = [];
    for (var i=0; i<string.length; i++) {
        if (string[i] != ' ' && string[i] != ',') {
            word = word + string[i];
        }
        else if (word != '') {
            array.push(word);
            word = '';
        }
    }
    if (word != '') {
        array.push(word);
    }
    return array;    
}

// Function to sort an Array
function sortElements(array, order) {
    var temp;
    if (order == 'dsc') {
        for (i=0; i<array.length; i++) {
            for (j=0; j<array.length; j++) {
                if (parseFloat(array[j]) < parseFloat(array[i])) {
                    temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }
    }
    else {
        for (i=0; i<array.length; i++) {
            for (j=0; j<array.length; j++) {
                if (parseFloat(array[j]) > parseFloat(array[i])) {
                    temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;
                }
            }
        }
    }
    return array;
}

// Program # 01: Read and Print Elements of an Array
function printArrayElements() {
    var string = document.getElementById('printArray').value;
    var alert = document.getElementById('alert01');
    var message = '';
    var classes = '';
    if (!string) {
        message = '<strong>Please enter an array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        message = `<strong>String: ${string} <br>Array: [${array}]</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 02: Print all negative elements in an Array
function negElementsArray() {
    var string = document.getElementById('negativeArray').value;
    var alert = document.getElementById('alert02');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        var negElements = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        for (var j=0; j<array.length; j++) {
            if (array[j] < 0) {
                negElements.push(array[j]);
            }
        }
        message = `<strong>Array: [${array}] <br>Negative Elements: [${negElements}]</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 03: Sum of all Array Elements
function sumElements () {
    var string = document.getElementById('sumArray').value;
    var alert = document.getElementById('alert03');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        var sumElements = 0;
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                sumElements = sumElements + parseFloat(word);
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            sumElements = sumElements + parseFloat(word);
        }
        message = `<strong>Array: [${array}] <br>Sum of Elemens: "${sumElements}"</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 04 - Maximum and Minimum Element
function maxMinElement() {
    var string = document.getElementById('maxMinArray').value;
    var alert = document.getElementById('alert04');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(parseFloat(word));
                word = '';
            }
        }
        if (word != '') {
            array.push(parseFloat(word));
        }
        
        var larElement = 0;
        var smaElement = 0;
        for (var j=0; j<array.length; j++) {
            if (array[j] > larElement) {
                larElement = array[j];
            }
            if (array[j] < smaElement) {
                smaElement = array[j];
            }
        }
        message = `<strong>Array: [${array}] <br>Largest Element: "${larElement}" <br>Smallest Element: "${smaElement}"</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;   
}

// Program # 05 - Second Largest Element
function secLarElement() {
    var string = document.getElementById('secLarArray').value;
    var alert = document.getElementById('alert05');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        var sortedArray = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(parseFloat(word));
                sortedArray.push(parseFloat(word));
                word = '';
            }
        }
        if (word != '') {
            array.push(parseFloat(word));
            sortedArray.push(parseFloat(word));
        }

        var tempElement = 0;
        for (var j=0; j<sortedArray.length; j++) {
            for (var k=0; k<sortedArray.length; k++) {
                if (sortedArray[j]>sortedArray[k]) {
                    tempElement = sortedArray[j];
                    sortedArray[j] = sortedArray[k];
                    sortedArray[k] = tempElement;
                }
            }
        }
        message = `<strong>Array: [${array}] <br>Sorted Array: [${sortedArray}] <br>2nd Largest Element: "${sortedArray[1]}"</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;       
}

// Program # 06 - Total Even and Odd Elements
function evenOddElements() {
    var string = document.getElementById('evenOddArray').value;
    var alert = document.getElementById('alert06');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-z!@#$%^&*()_+=`~:.;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        
        var evenElements = 0;
        var oddElements = 0;
        var tempElement = '';
        for (var j=0; j<array.length; j++) {
            if (parseFloat(array[j])%2 == 0) {
                evenElements++;
            }
            else {
                oddElements++;
            }
        }
        message = `<strong>Array: [${array}] <br>Even Elements: "${evenElements}" <br>Odd Element: "${oddElements}"</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;    
}

// Program # 07 - Delete Element from Array at Specified Position
function deleteElement() {
    var string = document.getElementById('deleteEleArray').value;
    var element = document.getElementById('deleteElePosition').value;
    var alert = document.getElementById('alert10');
    var message = '';
    var classes = '';
    if (!string || string.match(/[!@#$%^&*()_+=`~:;"'<>?/|]/g) || !element || element.match(/[^0-9]/g)) {
        message = '<strong>Please enter position of element and array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        var array2 = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                array2.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            array2.push(word);
        }

        array2.splice(element, 1);

        message = `<strong>Original Array: [${array}] <br>Entered Position "${element}" <br>New Array: [${array2}]</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 08 - Copy elements of an array to another array
function copyElements() {
    var string = document.getElementById('copyEleArray01').value;
    var string2 = document.getElementById('copyEleArray02').value;
    var alert = document.getElementById('alert08');
    var message = '';
    var classes = '';
    if (!string || !string2) {
        message = '<strong>Please enter both arrays separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }

        var word2 = '';
        var array2 = [];
        for (var i=0; i<string2.length; i++) {
            if (string2[i] != ' ' && string2[i] != ',') {
                word2 = word2 + string2[i];
            }
            else if (word2 != '') {
                array2.push(word2);
                word2 = '';
            }
        }
        if (word2 != '') {
            array2.push(word2);
        }
        
        for (var j=0; j<array.length; j++) {
            array2.push(array[j]);
        }
        message = `<strong>1st Array: [${array}] <br>2nd Array: [${array2}]</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 09 - Insert an Element in an Array
function insertEleArray() {
    var string = document.getElementById('insertArray').value;
    var element = document.getElementById('insertElement').value;
    var alert = document.getElementById('alert09');
    var message = '';
    var classes = '';
    if (!string || !element || element.match(/\W|_/g)) {
        message = '<strong>Please enter both single element and array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        var array2 = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                array2.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
            array2.push(word);
        }
        array2.push(element);
        message = `<strong>Original Array: [${array}] <br>Element "${element}" <br>New Array: [${array2}]</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 10 - Count total number of negative elements
function totalNegElements() {
    var string = document.getElementById('totalNegArray').value;
    var alert = document.getElementById('alert07');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(parseFloat(word));
                word = '';
            }
        }
        if (word != '') {
            array.push(parseFloat(word));
        }
        
        var negElements = 0;
        for (var j=0; j<array.length; j++) {
            if (array[j] < 0) {
                negElements++;
            }
        }
        message = `<strong>Array: [${array}] <br>Negative Elements: "${negElements}"</strong>`
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;    
}

// Program # 11 - Frequency of each Element in Array
function frequencyOfElements() {
    var string = document.getElementById('frequencyArray').value;
    var alert = document.getElementById('alert11');
    var message = '';
    var classes = '';
    if (!string || !string.match(/[a-zA-z0-9,-]|\s/g)) {
        message = '<strong>Please enter array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        
        var charArray = [];
        var freqArray = [];
        var index;
        for (var j=0; j<array.length; j++) {
            if (charArray.includes(array[j].toLowerCase())) {
                index = charArray.indexOf(array[j].toLowerCase());
                freqArray[index]++;
            }
            else {
                charArray.push(array[j]);
                freqArray.push(1);
            }
        }
        message = `<strong>Array: [${array}] <br>Frequency of Elements: <br>`;
        for (var k=0; k<charArray.length; k++) {
            message = `${message}${charArray[k]} : ${freqArray[k]}<br>`;
        }
        message = `${message}</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes; 
}

// Program # 12 - Print Unique Elements in Array
function uniqueElement() {
    var string = document.getElementById('uniqueEleArray').value;
    var alert = document.getElementById('alert12');
    var message = '';
    var classes = '';
    if (!string || !string.match(/[a-zA-z0-9,-]|\s/g)) {
        message = '<strong>Please enter array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        
        var charArray = [];
        var freqArray = [];
        var index;
        for (var j=0; j<array.length; j++) {
            if (charArray.includes(array[j].toLowerCase())) {
                index = charArray.indexOf(array[j].toLowerCase());
                freqArray[index]++;
            }
            else {
                charArray.push(array[j]);
                freqArray.push(1);
            }
        }
        var uniqueElements = [];
        for (var k=0; k<freqArray.length; k++) {
            if (freqArray[k] == 1) {
                uniqueElements.push(charArray[k]);
            }
        }
        message = `<strong>Array: [${array}] <br>Unique Elements: "${uniqueElements}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;     
}

// Program # 13 - Count Total Number of Duplicate Elements in Array
function totalDupElements() {
    var string = document.getElementById('totalDupEleArray').value;
    var alert = document.getElementById('alert13');
    var message = '';
    var classes = '';
    if (!string) {
        message = '<strong>Please enter array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var word = '';
        var array = [];
        for (var i=0; i<string.length; i++) {
            if (string[i] != ' ' && string[i] != ',') {
                word = word + string[i];
            }
            else if (word != '') {
                array.push(word);
                word = '';
            }
        }
        if (word != '') {
            array.push(word);
        }
        
        var charArray = [];
        var freqArray = [];
        var index;
        for (var j=0; j<array.length; j++) {
            if (charArray.includes(array[j].toLowerCase())) {
                index = charArray.indexOf(array[j].toLowerCase());
                freqArray[index]++;
            }
            else {
                charArray.push(array[j]);
                freqArray.push(1);
            }
        }
        var duplicateElements = 0;
        for (var k=0; k<freqArray.length; k++) {
            if (freqArray[k] > 1) {
                duplicateElements++;
            }
        }
        message = `<strong>Array: [${array}] <br>Duplicate Elements: "${duplicateElements}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes; 
}

// Program # 14 - Delete all Duplicate Elements from Array
function deleteDupElements() {
    var string = document.getElementById('deleteDupArray').value;
    var alert = document.getElementById('alert14');
    var message = '';
    var classes = '';
    if (!string) {
        message = '<strong>Please enter array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var charArray = [];
        var freqArray = [];
        var index;
        for (var j=0; j<array.length; j++) {
            if (charArray.includes(array[j].toLowerCase())) {
                index = charArray.indexOf(array[j].toLowerCase());
                freqArray[index]++;
            }
            else {
                charArray.push(array[j]);
                freqArray.push(1);
            }
        }

        message = `<strong>Duplicate Array: [${array}] <br>Unique Array: [${charArray}]</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes; 
}

// Program # 15 - Program to Find reverse of an Array
function reverseElements() {
    var string = document.getElementById('reverseArray').value;
    var alert = document.getElementById('alert15');
    var message = '';
    var classes = '';
    if (!string) {
        message = '<strong>Please enter array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var reverseArray = [];
        for (var i=0; i<array.length; i++) {
            reverseArray.unshift(array[i]);
        }

        message = `<strong>Original Array: [${array}] <br>Reversed Array: [${reverseArray}]</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes; 
}

// Program # 16 - Separate Odd and Even Elements
function sepOddEvenElements() {
    var string = document.getElementById('sepOddEvenArray').value;
    var alert = document.getElementById('alert16');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-Z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var oddArray = [];
        var evenArray = [];
        for (var i=0; i<array.length; i++) {
            if (array[i]%2 == 0) {
                evenArray.push(array[i]);
            }
            else {
                oddArray.push(array[i]);
            }
        }

        message = `<strong>Original Array: [${array}] <br>Even Array: [${evenArray}] <br>Odd Array: [${oddArray}]</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes; 
}

// Program # 17 - Sort Elements in Ascending and Descending Order
function sortAscDscElements() {
    var string = document.getElementById('sortAscDscArray').value;
    var alert = document.getElementById('alert17');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-Z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var ascArray = sortElements(stringToArray(string));
        var dscArray = sortElements(stringToArray(string), 'dsc');

        message = `<strong>Original Array: [${array}] <br>Ascending Array: [${ascArray}] <br>Descending Array: [${dscArray}]</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes; 
}
// Program # 18 - Sort Odd and Even Elements Separately
function sortOddEvenElements() {
    var string = document.getElementById('sortOddEvenArray').value;
    var alert = document.getElementById('alert18');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-Z!@#$%^&*()_+=`~:;"'<>?/|]/g)) {
        message = '<strong>Please enter numeric array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var sortedArray = stringToArray(string);
        sortElements(sortedArray);
        var oddArray = [];
        var evenArray = [];
        for (var i=0; i<sortedArray.length; i++) {
            if (sortedArray[i]%2 == 0) {
                evenArray.push(sortedArray[i]);
            }
            else {
                oddArray.push(sortedArray[i]);
            }
        }

        message = `<strong>Original Array: [${array}] <br>Odd Array: [${oddArray}] <br>Even Array: [${evenArray}]</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes; 
}

// Program # 19 - Left Rotate an Array
function leftRotateElements() {
    var string = document.getElementById('leftRotateArray').value;
    var alert = document.getElementById('alert19');
    var message = '';
    var classes = '';
    if (!string) {
        message = '<strong>Please enter array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var rotateArray = stringToArray(string);
        var tempElement = rotateArray[0];
        rotateArray.shift();
        rotateArray.push(tempElement);

        message = `<strong>Original Array: [${array}] <br>Rotated Array: [${rotateArray}]</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 20 - Right Rotate an Array
function rightRotateElements() {
    var string = document.getElementById('rightRotateArray').value;
    var alert = document.getElementById('alert20');
    var message = '';
    var classes = '';
    if (!string) {
        message = '<strong>Please enter array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var rotateArray = stringToArray(string);
        var tempElement = rotateArray[rotateArray.length-1];
        rotateArray.pop();
        rotateArray.unshift(tempElement);

        message = `<strong>Original Array: [${array}] <br>Rotated Array: [${rotateArray}]</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 21 - Merge two Arrays to Third Array
function mergeTwoArrays() {
    var string = document.getElementById('mergeArray1').value;
    var string2 = document.getElementById('mergeArray2').value;
    var alert = document.getElementById('alert21');
    var message = '';
    var classes = '';
    if (!string || !string2) {
        message = '<strong>Please enter array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var array2 = stringToArray(string2);
        var mergedArray = [];
        for (var i=0; i<array.length; i++) {
            mergedArray.push(array[i]);
        }
        for (var j=0; j<array2.length; j++) {
            mergedArray.push(array2[j]);
        }

        message = `<strong>Original Array: [${array}] <br>Merged Array: [${mergedArray}]</strong>`;
        classes = 'alert alert-success text-center overflow-auto';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 22 - Search an element in Array
function searchElement() {
    var string = document.getElementById('searchEleArray').value;
    var element = document.getElementById('searchEleWord').value;
    var alert = document.getElementById('alert22');
    var message = '';
    var classes = '';
    if (!string || !element) {
        message = '<strong>Please enter both single element and array separated by space or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else if (element.match(/\s|,/g)) {
        message = '<strong>Please enter a single element without spacing or comma(,)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var array = stringToArray(string);
        var index = array.indexOf(element);
        if (index == -1) {
            message = `<strong>Original Array: [${array}] <br>Element "${element}" not found!</strong>`;
            classes = 'alert alert-danger text-center';
        }
        else {
            message = `<strong>Original Array: [${array}] <br>Element "${element}" found at "${index}"</strong>`;
            classes = 'alert alert-success text-center';
        }
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 23 - Print Day of Week using Switch Case
function dayOfWeek() {
    var string = document.getElementById('dayOfWeekDigit').value;
    var alert = document.getElementById('alert23');
    var message = '';
    var classes = '';
    if (!string || !string.match(/[1234567]/g) || string.length != 1) {
        message = '<strong>Please enter a single digit between 1 and 7</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var day = '';
        switch (parseInt(string)) {
            case 1 : day = 'Monday'; break;
            case 2 : day = 'Tuesday'; break;
            case 3 : day = 'Wednesday'; break;
            case 4 : day = 'Thursday'; break;
            case 5 : day = 'Friday'; break;
            case 6 : day = 'Saturday'; break;
            case 7 : day = 'Sunday'; break;
            default : day = 'not a day';
        }

        message = `<strong>Entered Number: "${string}" <br>Day of Week: "${day}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 24 - Numbers of Day in a Month using Switch Case
function numberOfDays() {
    var string = document.getElementById('numberOfDaysDigit').value;
    var alert = document.getElementById('alert24');
    var message = '';
    var classes = '';
    if (!string || string.match(/\D/g) || string < 1 || string > 12) {
        message = '<strong>Please enter a single digit between 1 and 12</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var month = '';
        var days = '';
        switch (parseInt(string)) {
            case 1 : month = 'January'; days = '31'; break;
            case 2 : month = 'February'; days = '28 or 29'; break;
            case 3 : month = 'March'; days = '31'; break;
            case 4 : month = 'April'; days = '30'; break;
            case 5 : month = 'May'; days = '31'; break;
            case 6 : month = 'June'; days = '30'; break;
            case 7 : month = 'July'; days = '31'; break;
            case 8 : month = 'August'; days = '31'; break;
            case 9 : month = 'September'; days = '30'; break;
            case 10 : month = 'October'; days = '31'; break;
            case 11 : month = 'November'; days = '30'; break;
            case 12 : month = 'December'; days = '31'; break;
            default : month = 'not a month'; days = '00';
        }

        message = `<strong>Entered Number: "${string}" <br>Month: "${month}" <br>Days: "${days}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 25 - Check whether an Alphabet is Vowel or Consonant
function checkAlphabet() {
    var string = document.getElementById('checkAlphabetDigit').value;
    var alert = document.getElementById('alert25');
    var message = '';
    var classes = '';
    if (!string || !string.match(/[a-zA-Z]/g)) {
        message = '<strong>Please enter a single alphabet</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var status = '';
        switch (string.toLowerCase()) {
            case 'a' : status = 'vowel'; break;
            case 'e' : status = 'vowel'; break;
            case 'i' : status = 'vowel'; break;
            case 'o' : status = 'vowel'; break;
            case 'u' : status = 'vowel'; break;
            default : status = 'consonant';
        }

        message = `<strong>Entered Number "${string}" is a "${status}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 26 - Check whether a Number is Even or Odd
function evenOddSwitch() {
    var string = document.getElementById('evenOddSwitchDigit').value;
    var alert = document.getElementById('alert26');
    var message = '';
    var classes = '';
    if (!string || !string.match(/\d/g)) {
        message = '<strong>Please enter a number without spacing</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        string = parseFloat(string);
        var status = '';
        switch (true) {
            case (string%2 == 0) : status = 'Even'; break;
            case (string%2 != 0) : status = 'Odd'; break;
            default : status = '';
        }

        message = `<strong>Entered Number "${string}" is "${status}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 27 - Check whether a Number is Positive, Negative or Zero
function checkNumSwitch() {
    var string = document.getElementById('checkNumSwitchDigit').value;
    var alert = document.getElementById('alert27');
    var message = '';
    var classes = '';
    if (!string || !string.match(/\d/g)) {
        message = '<strong>Please enter a number without spacing</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        string = parseFloat(string);
        var status = '';
        switch (true) {
            case (string == 0) : status = 'Zero'; break;
            case (string < 0) : status = 'Negative'; break;
            case (string > 0) : status = 'Positive'; break;
            default : status = '';
        }

        message = `<strong>Entered Number "${string}" is "${status}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 28 - Roots of Quadratic Equation using Switch Case 
function rootsQuadraticEquation() {
    var string = document.getElementById('rootsQuaEquDigit').value;
    var array = stringToArray(string);
    var alert = document.getElementById('alert28');
    var message = '';
    var classes = '';
    if (!string || string.match(/[a-zA-Z!@#$%^&*()_+=`~:;"'<>?/|]/g) || array.length != 3) {
        message = '<strong>Please enter three numeric values for (a,b,c)</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        var squareRoot;
        var firstRoot;
        var secondRoot;
        var innerEquation = (array[1]*array[1]) - (4*array[0]*array[2]);
        if (innerEquation < 0) {
            squareRoot = Math.sqrt(-innerEquation);
            firstRoot = `${-(array[1]/(2*array[0]))} + ${(squareRoot/(2*array[0])).toFixed(5)}i`;
            secondRoot = `${-(array[1]/(2*array[0]))} - ${(squareRoot/(2*array[0])).toFixed(5)}i`;
        } else {
            squareRoot = Math.sqrt(innerEquation);
            firstRoot = ((squareRoot - array[1])/(2*array[0])).toFixed(5);
            secondRoot = ((-squareRoot - array[1])/(2*array[0])).toFixed(5);
        }
        message = `<strong>Entered Values: a:${array[0]} b:${array[1]} c:${array[2]} <br>First Root: ${firstRoot} <br>Second Root: ${secondRoot}</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}

// Program # 29 - Maximum between two Numbers using Switch Case
function maxNumSwitch() {
    var string = document.getElementById('maxNumDigit1').value;
    var string2 = document.getElementById('maxNumDigit2').value;
    var alert = document.getElementById('alert29');
    var message = '';
    var classes = '';
    if (!string || !string.match(/\d/g) || !string2 || !string2.match(/\d/g)) {
        message = '<strong>Please enter both numbers</strong>';
        classes = 'alert alert-danger text-center';
    }
    else {
        string = parseFloat(string);
        string2 = parseFloat(string2);
        var operator = '';
        switch (true) {
            case (string == string2) : operator = '='; break;
            case (string > string2) : operator = '>'; break;
            case (string < string2) : operator = '<'; break;
            default : operator = '';
        }

        message = `<strong>Result: "${string} ${operator} ${string2}"</strong>`;
        classes = 'alert alert-success text-center';
    }
    alert.innerHTML = message;
    alert.className = classes;
}