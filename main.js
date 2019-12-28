var barsArray = [];
var arrayToSort = [];
var currentArray = [];
var arrayLength = 10;
var count = 0;

randomizeArray();

function randomizeArray() {
	arrayToSort = [];

	for (let i = 0; i < arrayLength; i++) {
		arrayToSort.push(Math.floor(Math.random() * displayChart.clientHeight * 0.9 + 30));
	}

	currentArray = [];
	for (let i = 0; i < arrayToSort.length; i++) {
		currentArray.push(arrayToSort[i]);
	}
}

for (let i = 0; i < arrayToSort.length; i++) {
	barsArray[i] = document.createElement('div');
	barsArray[i].classList.add('bars');
	barsArray[i].style.left = displayChart.clientWidth / 10 * i + 'px';
	barsArray[i].style.height = arrayToSort[i] + 'px';
	barsArray[i].style.width = displayChart.clientWidth / 10 - 10 + 'px';
	barsArray[i].textContent = arrayToSort[i];
	displayChart.appendChild(barsArray[i]);
}

function updateBars() {
	for (let i = 0; i < arrayToSort.length; i++) {
		barsArray[i].style.height = arrayToSort[i] + 'px';
		barsArray[i].textContent = arrayToSort[i];
	}
}

randomizeArrayBtn.addEventListener('mousedown', function() {
	randomizeArray();
	updateBars();
});

resetBtn.addEventListener('mousedown', function() {
	arrayToSort = [];
	for (let i = 0; i < currentArray.length; i++) {
		arrayToSort.push(currentArray[i]);
	}

	updateBars();
});

/*********************************************************************************************/

// Selection sort button and functions

selectionSortBtn.addEventListener('mousedown', function() {
	count = 0;
	selectionSort(arrayToSort);
	count++;
	updateBars();
	console.log(count);
});

function swap(array, firstIndex, secondIndex) {
	let temp = array[firstIndex];
	count++;
	array[firstIndex] = array[secondIndex];
	count++;
	array[secondIndex] = temp;
	count++;
}

function indexOfMinimum(array, startIndex) {
	let minValue = array[startIndex];
	count++;
	let minIndex = startIndex;
	count++;

	for (let i = minIndex + 1; i < array.length; i++) {
		if (array[i] < minValue) {
			minIndex = i;
			count++;
			minValue = array[i];
			count++;
		}
	}

	return minIndex;
}

function selectionSort(array) {
	for (let startIndex = 0; startIndex < array.length; startIndex++) {
		let minIndex = indexOfMinimum(array, startIndex);
		count++;
		swap(array, startIndex, minIndex);
		count++;
	}
}
/*********************************************************************************************/

// Insertion sort button and functions

insertionSortBtn.addEventListener('mousedown', function() {
	count = 0;
	insertionSort(arrayToSort);
	count++;
	updateBars();
	console.log(count);
});

function insert(array, rightIndex, value) {
	for (var i = rightIndex; i >= 0 && array[i] > value; i--) {
		array[i + 1] = array[i];
		count++;
	}
	array[i + 1] = value;
	count++;
}

function insertionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		insert(array, i, array[i + 1]);
		count++;
	}
}

/*********************************************************************************************/

// Merge sort button and functions
mergeSortBtn.addEventListener('mousedown', function() {
	count = 0;
	mergeSort(arrayToSort, 0, arrayToSort.length - 1);
	count++;
	updateBars();
	console.log(count);
});

function merge(array, p, q, r) {
	let lowHalf = [];
	count++;
	let highHalf = [];
	count++;

	let k = p;
	count++;
	let i = 0;
	count++;
	let j = 0;
	count++;

	for (i = 0; k <= q; i++, k++) {
		lowHalf[i] = array[k];
		count++;
	}
	for (j = 0; k <= r; j++, k++) {
		highHalf[j] = array[k];
		count++;
	}

	k = p;
	count++;
	i = 0;
	count++;
	j = 0;
	count++;

	while (i < lowHalf.length && j < highHalf.length) {
		if (lowHalf[i] <= highHalf[j]) {
			array[k] = lowHalf[i];
			count++;
			i++;
			count++;
		} else {
			array[k] = highHalf[j];
			count++;
			j++;
			count++;
		}
		k++;
		count++;
	}

	while (i < lowHalf.length) {
		array[k] = lowHalf[i];
		count++;
		k++;
		count++;
		i++;
		count++;
	}
	while (j < highHalf.length) {
		array[k] = highHalf[j];
		count++;
		k++;
		count++;
		j++;
		count++;
	}

	return array;
}

function mergeSort(array, p, r) {
	if (p < r) {
		let q = Math.floor((p + r) / 2);
		count++;
		mergeSort(array, p, q);
		count++;
		mergeSort(array, q + 1, r);
		count++;
		merge(array, p, q, r);
		count++;
	}
}

/*********************************************************************************************/

// Quick sort button and functions

quickSortBtn.addEventListener('mousedown', function() {
	count = 0;
	quickSort(arrayToSort, 0, arrayToSort.length - 1);
	count++;
	updateBars();
	console.log(count);
});

// Uses swap() function from Selection sort functions

function partition(array, p, r) {
	let q = p;
	count++;
	for (let i = p; i < r; i++) {
		if (array[i] <= array[r]) {
			swap(array, q, i);
			count++;
			q++;
			count++;
		}
	}
	swap(array, q, r);
	count++;
	return q;
}

function quickSort(array, p, r) {
	if (p < r) {
		let indexOfPivot = partition(array, p, r);
		count++;
		quickSort(array, p, indexOfPivot - 1);
		count++;
		quickSort(array, indexOfPivot + 1, r);
		count++;
	}
}
