# -*- coding: utf-8 -*-

"""
03

Ask user two integer values into two variables named as first_alue and 
second_value.

Output:
- first_value+second_value
- first_value-second_value
- first_value*second_value

Each value shall be printed on separate row. Below is an eaxample:

Give 1st number: 10
Give 2nd number: 5

Sum:        10 + 5 = 15
Difference: 10 - 5 = 5
Product:    10 * 5 = 50
"""
first_value=int(input("Give 1st number: "))
second_value=int(input("Give 2nd number: "))
sum=first_value+second_value
dif=first_value-second_value
prod=first_value*second_value

print(f'Sum: {first_value:9} + {second_value} = {sum}')
print(f'Difference: {first_value:2} - {second_value} = {dif}')
print(f'Product: {first_value:5} * {second_value} = {prod}')