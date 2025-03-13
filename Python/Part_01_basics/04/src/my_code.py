# -*- coding: utf-8 -*-
"""
04

Ask name, height [m], and weight [kg] of person. Use variables named as name, height 
,and weight. Compute

bmi = weight/height^2

and save the value in variable bmi.

Print bmi with two decimals. See example below:


Give your name: Jussi Juonio
Give height in meters: 1.81
Give weight in kgs: 104

Your name is Jussi Juonio, and you are 1.81m tall, and your weight is 104 kg.
Your bmi is 31.75
"""
name=input('Give your name: ')
height=float(input('Give height in meters: '))
weight=float(input('Give weight in kgs: '))
bmi=weight/height**2
print(f'Your name is {name}, and you are {height}m tall, and your weight is {weight} kg.')
print(f'Your bmi is {bmi:1.2f}')
