var barsArray = [];
var arrayToSort = [];
var currentArray = [];
var arrayLength = 10;
var count = 0;

randomize();

function randomize() {
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

randomizeBtn.addEventListener('mousedown', function() {
	randomize();
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
	selectionSort(arrayToSort);
	updateBars();
});

function swap(array, firstIndex, secondIndex) {
	let temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

function indexOfMinimum(array, startIndex) {
	let minValue = array[startIndex];
	let minIndex = startIndex;

	for (let i = minIndex + 1; i < array.length; i++) {
		if (array[i] < minValue) {
			minIndex = i;
			minValue = array[i];
		}
	}

	return minIndex;
}

function selectionSort(array) {
	for (let startIndex = 0; startIndex < array.length; startIndex++) {
		let minIndex = indexOfMinimum(array, startIndex);
		swap(array, startIndex, minIndex);
	}
}
/*********************************************************************************************/

// Insertion sort button and functions

insertionSortBtn.addEventListener('mousedown', function() {
	insertionSort(arrayToSort);
	updateBars();
});

function insert(array, rightIndex, value) {
	for (var i = rightIndex; i >= 0 && array[i] > value; i--) {
		array[i + 1] = array[i];
	}
	array[i + 1] = value;
}

function insertionSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		insert(array, i, array[i + 1]);
	}
}

/*********************************************************************************************/

// Merge sort button and functions
mergeSortBtn.addEventListener('mousedown', function() {
	mergeSort(arrayToSort, 0, arrayToSort.length - 1);

	updateBars();
});

function merge(array, p, q, r) {
	let lowHalf = [];
	let highHalf = [];

	let k = p;
	let i = 0;
	let j = 0;

	for (i = 0; k <= q; i++, k++) {
		lowHalf[i] = array[k];
	}
	for (j = 0; k <= r; j++, k++) {
		highHalf[j] = array[k];
	}

	k = p;
	i = 0;
	j = 0;

	while (i < lowHalf.length && j < highHalf.length) {
		if (lowHalf[i] <= highHalf[j]) {
			array[k] = lowHalf[i];
			i++;
		} else {
			array[k] = highHalf[j];
			j++;
		}
		k++;
	}

	while (i < lowHalf.length) {
		array[k] = lowHalf[i];
		k++;
		i++;
	}
	while (j < highHalf.length) {
		array[k] = highHalf[j];
		k++;
		j++;
	}

	return array;
}

function mergeSort(array, p, r) {
	if (p < r) {
		let q = Math.floor((p + r) / 2);
		mergeSort(array, p, q);
		mergeSort(array, q + 1, r);
		merge(array, p, q, r);
	}
}

/*********************************************************************************************/

// Quick sort button and functions

quickSortBtn.addEventListener('mousedown', function() {
	quickSort(arrayToSort, 0, arrayToSort.length - 1);

	updateBars();
});

// Uses swap() function from Selection sort functions

function partition(array, p, r) {
	let q = p;
	for (let i = p; i < r; i++) {
		if (array[i] <= array[r]) {
			swap(array, q, i);
			q++;
		}
	}
	swap(array, q, r);
	return q;
}

function quickSort(array, p, r) {
	if (p < r) {
		let indexOfPivot = partition(array, p, r);
		quickSort(array, p, indexOfPivot - 1);
		quickSort(array, indexOfPivot + 1, r);
	}
}
