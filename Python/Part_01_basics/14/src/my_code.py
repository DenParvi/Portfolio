# -*- coding: utf-8 -*-

"""
14

1) The software asks number N from the user. If N<1 then print "Error!"
2) Create a list containing N even random integers at range 0-20 (0 and 20 included)
3) Print maximum and minumum of the integers in list comma separated on one line
4) Print content of the list comma separated in one line

NOTE: After the last number there shall be no comma!

How to generate list containing random numbers:
---------------------------------

from random import choice

#Generates a list containing N values in range 0...20
numbers=[choice(range(0, 21, 2)) for _ in range(N)]



---------------------------------



Examples:
% python3 my_code.py
How many numbers? 4
Min and max: 0,20
0,16,16,20

% python3 my_code.py
How many numbers? 13
Min and max: 2,20
6,20,2,10,16,6,20,4,4,20,6,4,12

% python3 my_code.py
How many numbers? 0
Error!

% python3 my_code.py
How many numbers? 1
Min and max: 4,4
4

"""
import random

while True:
    num=int(input('How many numbers? '))
    if num>0:
        numbers=[random.choice(range(0, 21, 2)) for _ in range(num)]
        print(f'Min and max: {max(numbers)},{min(numbers)}')
        print(*numbers, sep=',')
        break
    else:
        print("Error!")
        continue


