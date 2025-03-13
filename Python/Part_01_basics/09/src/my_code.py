# -*- coding: utf-8 -*-
"""
09

1) Create a function NUMBER_TO_GUESS, which returns always value 124.

2) Create a software that asks users guess. If the guess is
  - too big, the software prints "Your guess was too big", and asks a new guess.
  - too small, the software prints "Your guess was too small", and asks a new guess.
  - correct, the software prints "You guessed the value by NN guesses! Nice!", where NN is replaced by number of guesses used.

Example:

% python3 my_code.py
Give a positive integer: 12
Your guess was too small
Give a positive integer: 134
Your guess was too big
Give a positive integer: 100
Your guess was too small
Give a positive integer: 120
Your guess was too small
Give a positive integer: 130
Your guess was too big
Give a positive integer: 125
Your guess was too big
Give a positive integer: 124 
You guessed the value by 7 guesses! Nice!

"""

def NUMBER_TO_GUESS():
    return 124
i=1
ans=''
while ans!=NUMBER_TO_GUESS():
    ans=int(input('Give number: '))
    if ans<NUMBER_TO_GUESS():
        print('Your guess was too small')
        i+=1
    elif ans>NUMBER_TO_GUESS():
        print('Your guess was too big')
        i+=1
    else:
        print(f'You guessed the value by {i} guesses! Nice!')
        