# -*- coding: utf-8 -*-
"""
06

Ask two numbers from the user. Print the larger one. Use if-else statement.

Example:

% python3 my_code.py 
Give first number: 3.4
Give second number: -3.4
3.4

% python3 my_code.py
Give first number: 3.4
Give second number: 1 
3.4

% python3 my_code.py
Give first number: 1
Give second number: 2
2.0
"""
    
num1=float(input('Give first number: '))
num2=float(input('Give second number: '))

if num1<num2:
    print(f'{num2}')
else:
    print(f'{num1}')

