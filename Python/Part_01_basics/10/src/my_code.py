# -*- coding: utf-8 -*-

"""
10

The software asks two integers, S and N, from the user.
The program prints N rows containing two comma sparated numbers. The 1st
row contains two values S, the next line contains S+1 and S-1, the next one
containd S+1 and S-2 and so on.

Example:
% python3 my_code.py 
Start: 14
Steps: 6
14,14
15,13
16,12
17,11
18,10
19,9
"""

S=int(input('Start: '))
N=int(input('Steps: '))

for i in range(N):
    print(f'{S+(i)},{S-(i)}')


