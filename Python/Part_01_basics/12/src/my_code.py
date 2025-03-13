# -*- coding: utf-8 -*-

"""
12


Suplementary benefit is a fiacial benefit for people with low income. Create a software that computes amount of the benefit for a single person for a given number of days.

Basis amount of the benefit:
16.18€ for a solitaire
17.80€ for a single parent
13.76€ for cohabit (each one)

The amount is increased by:
11.33€ by each children age 10-17 years
10.20€ by each childres age less than 10

The software ask information in order defined by the example.

Finally the software prints amount of the benefita and asks if the user wants to compute amount of the benefit with different data.

Example:
% python3 my_code.py

New data (y/n): y
Solitaire (1) or cohabit (2): 1
Any underage children (y/n): y
Children less than 10 years: 2
Children 10-17 years: 0
Days: 10
Amount of the benefit is 382.00 euro

New data (y/n): y
Solitaire (1) or cohabit (2): 1
Any underage children (y/n): n
Days: 10
Amount of the benefit is 161.80 euro

New data (y/n): y
Solitaire (1) or cohabit (2): 2
Any underage children (y/n): y
Children less than 10 years: 0
Children 10-17 years: 1
Days: 10
Amount of the benefit is 250.90 euro

New data (y/n): y
Solitaire (1) or cohabit (2): 2
Any underage children (y/n): n
Days: 10
Amount of the benefit is 137.60 euro

New data (y/n): n
"""

q1=0
q2=""
q3=0
q4=0
q5=0
basisSolitaire=16.18
basisSingle=17.80
basisCoh=13.76
AmountBigCh=11.33
AmountSmallCh=10.20
amount=0

def calculate(q1,q2,q3,q4,q5):
    if q1==1  and q2=='N':
        amount=basisSolitaire*q5
    elif q1==1 and q2=='Y':
        amount=basisSingle*q5+AmountBigCh*q4*q5+AmountSmallCh*q3*q5
    elif q1==2 and q2=='N':
        amount=basisCoh*q5
    elif q1==2 and q2=='Y':
        amount=basisCoh*q5+AmountBigCh*q4*q5+AmountSmallCh*q3*q5
    else:
        amount=1
    print(f'Amount of the benefit is {amount:1.2f} euro')

while True:
    start=input("New data (y/n): ").upper()
    if start=="Y":
        q1=int(input('Solitaire (1) or cohabit (2): '))
        q2=input('Any underage children (y/n): ').upper()
        if q2=='Y':
            q3=int(input('Children less than 10 years: '))
            q4=int(input('Children 10-17 years: '))
        q5=int(input('Days: '))
        calculate(q1,q2,q3,q4,q5)
    elif start=="N":
        break
    else:
        print('You need to write y or n')

