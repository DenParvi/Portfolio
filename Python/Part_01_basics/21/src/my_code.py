# -*- coding: utf-8 -*-

"""
21

1) Ask number of numbers (float) to draw, N, and draw N numbers in range 1...100 (1 and 100 included). If given N<1, then print "Error!" and terminate the software.

Use following code to draw the number:
    random_decimal = random.randint(100, 10000) / 100

2) Show the number drawn, all the numbers in same row. Separate the numbers by space.

3) Save all the numbers in file numbers.txt

4) Read all numbers from the file, and sort them from smallest to largest

5) Print the sorted numbers, all in one row.

6) Print N, mean, minimum, and maximum of the numbers, and write the same values to file results.txt

7) All float-type variables are printed/saved with 2 decimals, for example 10.10, not 10.1.

Example:
% python3 my_code.py
How many numbers? 5
Following numbers were drawn, and written to file numbers.txt:
84.32 34.41 25.22 94.88 14.45 
Following numbers were read, and sorted, from file numbers.txt:
14.45 25.22 34.41 84.32 94.88 
And finally at file results.txt we have:
Num: 5
Sum: 253.28
Avg: 50.66
Min: 14.45
Max: 94.88

The example generated file numbers.txt, containing:
84.32
34.41
25.22
94.88
14.45


In addition, the example generated, also, file results.txt, containing:
Num: 5
Sum: 253.28
Avg: 50.66
Min: 14.45
Max: 94.88
"""

import random

def main():
    try:
        N = int(input("How many numbers? "))
        
        if N < 1:
            print("Error!")
            return
        
        numbers = [random.randint(100, 10000) / 100 for _ in range(N)]
        
        print("Following numbers were drawn, and written to file numbers.txt:")
        print(" ".join(f"{num:.2f}" for num in numbers))
        
        with open("numbers.txt", "w") as f:
            for num in numbers:
                f.write(f"{num:.2f}\n")
        
        with open("numbers.txt", "r") as f:
            numbers_from_file = [float(line.strip()) for line in f]
        
        sorted_numbers = sorted(numbers_from_file)
        print("Following numbers were read, and sorted, from file numbers.txt:")
        print(" ".join(f"{num:.2f}" for num in sorted_numbers))
        
        total_sum = sum(sorted_numbers)
        mean = total_sum / N
        min_num = min(sorted_numbers)
        max_num = max(sorted_numbers)
        
        print(f"Num: {N}")
        print(f"Sum: {total_sum:.2f}")
        print(f"Avg: {mean:.2f}")
        print(f"Min: {min_num:.2f}")
        print(f"Max: {max_num:.2f}")
        
        with open("results.txt", "w") as f:
            f.write(f"Num: {N}\n")
            f.write(f"Sum: {total_sum:.2f}\n")
            f.write(f"Avg: {mean:.2f}\n")
            f.write(f"Min: {min_num:.2f}\n")
            f.write(f"Max: {max_num:.2f}\n")
    
    except ValueError:
        print("Invalid input. Please enter an integer.")

if __name__ == "__main__":
    main()
