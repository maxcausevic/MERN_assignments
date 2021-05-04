# https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/


def bubblesort(arr):
    x = len(arr)
    for i in range(x):
        for j in range(0, x-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

    print(arr)
bubblesort([4,7,2,3,1,9,8])

# OR

def bubblesort(arrInput):
    for j in range(len(arrInput)):
        for i in range(len(arrInput)-1-j):
            #if the value at current index is greaterr than value at next index, then its out of order and we swap
            if(arrInput[i]> arrInput[i+1]):
                arrInput[i], arrInput[i+1] = arrInput[i+1], arrInput[i]

    print(arrInput)




bubblesort([4,7,2,3,1,9,8])
