# -*- coding: utf-8 -*-

"""
05

Create variable pi, and initialize the variable by value 3.141593.
Read diameter of a circle, and print circumreference and area of the circle, 
both with two decimals.

Example:

Give diameter: 12
Circumreference is 37.70
Area is 113.10

"""
pi=3.141593
dia=float(input('Give diameter: '))
cirRef=dia*pi
area=(pi*dia**2)/4
print(f'Circumreference is {cirRef:1.2f}')
print(f'Area is {area:1.2f}')


