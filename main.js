var barsArray = [];
var arrayToSort = [];
var currentArray = [];
var arrayLength = 10;

for (let i = 0; i < arrayLength; i++) {
	arrayToSort.push(Math.floor(Math.random() * displayChart.clientHeight * 0.9 + 30));
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

shuffle.addEventListener('mousedown', function() {
	arrayToSort = [];
	for (let i = 0; i < arrayLength; i++) {
		arrayToSort.push(Math.floor(Math.random() * displayChart.clientHeight * 0.9 + 30));
	}
	currentArray = arrayToSort;
	updateBars();
});

reset.addEventListener('mousedown', function() {
	arrayToSort = currentArray;
	updateBars();
});
