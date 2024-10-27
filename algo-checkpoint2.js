function InsertionSort(arr1) {
    for (var i = 1; i < arr1.length; i++) {
        var pivot = arr1[i];
        var j;
        for (j = i - 1; j >= 0 && arr1[j] > pivot; j--) {
            arr1[j + 1] = arr1[j];
        }
        arr1[j + 1] = pivot;
    }
    console.log(arr1);
}



InsertionSort([85, 5, 1, 96, 2, 45, 33, 8]);