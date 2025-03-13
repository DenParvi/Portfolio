# -*- coding: utf-8 -*-


"""
07

Read grade of an exam (0, 1, 2, 3, 4, or 5). 
If the user gives invalid value, not in valid range, the software prints message "Invalid grade!". 
Othervise the software prints following message:

Excellent   (if grade was 4 or 5)
Good        (if grade was 3)
Passed      (if grade was 1 or 2)
Not passed  (if grade was 0)

Example:
% python3 my_code.py
Give grade (0-5): 0
Not passed

% python3 my_code.py
Give grade (0-5): 6
Invalid grade!

% python3 my_code.py
Give grade (0-5): 5
Excellent
"""
grade=int(input('Give grade (0-5): '))

if grade==4 or grade==5:
    print('Excellent')
elif grade==3:
    print('Good')
elif grade==1 or grade==2:
    print('Passed')
elif grade==0:
    print('Not passed')
else:
    print('Invalid grade!')


