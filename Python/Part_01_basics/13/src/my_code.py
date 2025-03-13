# -*- coding: utf-8 -*-


"""
13

1) Create an empty list named as numbers
2) Read 5 integers from the user, and insert them to numbers list
3) Print sum of the integers
4) Print average of the integers with 3 digits after decimal point
5) Print the numbers space separated, all in one row

Example:

% python3 my_code.py
Give a number: 1
Give a number: 0
Give a number: -5
Give a number: 3
Give a number: -66
Sum is: -67
Average is : -13.400
Numbers: 1 0 -5 3 -66 


"""

numbers=[]
sum=0
for i in range(5):
    a=int(input('Give a number: '))
    numbers.append(a)

for i in range(len(numbers)):
    sum=sum+numbers[i]
print(f'Sum is: {sum}')
average=(sum/len(numbers))
print(f'Average is : {"%.3f" % average}')
result = ' '.join(str(item) for item in numbers)
print(f'Numbers: {result}')