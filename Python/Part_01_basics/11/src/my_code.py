# -*- coding: utf-8 -*-

"""
11

Main menu of the software looks like:

0 = Exit
1 = Give radius
2 = Compute circumference of the circle
3 = Compute area of the circle

- Default radius is 0.
- 0 terminates the software
- 1 asks radius from the user
- 2 prints circumference of the circle with given radius
- 3 prints area of the circle with given radius
- Other than 0, 1, 2, or 3 terminates the software
- After 1, 2, or 3 the menu is printed again
- Print all non-integers with 2 digits after decimal point
- Use math.pi as pi

Example:

% python3 my_code.py


0 = Exit
1 = Give radius
2 = Compute circumference of the circle
3 = Compute area of the circle
Select: 1
Give radius: 2.1


0 = Exit
1 = Give radius
2 = Compute circumference of the circle
3 = Compute area of the circle
Select: 2
Circumference is 13.19


0 = Exit
1 = Give radius
2 = Compute circumference of the circle
3 = Compute area of the circle
Select: 3
Area is 13.85


0 = Exit
1 = Give radius
2 = Compute circumference of the circle
3 = Compute area of the circle
Select: 0
"""
from math import pi
print('0 = Exit')
print('1 = Give radius')
print('2 = Compute circumference of the circle')
print('3 = Compute area of the circle')
choice=int(input('Select: '))
radius=0

while True:
    if choice==0:
        break
    elif choice==1:
        radius=float(input('Give radius: '))
        choice=int(input('Select: '))
    elif choice==2:
        print(f'Circumference is {round((2*pi*radius),2)}')
        choice=int(input('Select: '))
    elif choice==3:
        print(f'Area is {round((pi*radius**2),2)}')
        choice=int(input('Select: '))
    else:
        break



