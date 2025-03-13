# -*- coding: utf-8 -*-

"""
08

Create a software that asks temperature from the user. The value is stored on variable which name is temperature.

Depending on temperature the software prints a message:

Too hot    (if temperature>39)
Warm       (if 10<temperature<=39)
Moderate   (if 0<=temperature<=10)
Freezing   (if -30<=temperature<0)
Too cold   (if temperatire<-30)

Example:

% python3 my_code.py
Give temparature: 39.5
Too hot

% python3 my_code.py
Give temparature: -31
Too cold

% python3 my_code.py
Give temparature: 10
Moderate

% python3 my_code.py
Give temparature: 9.9
Moderate

% python3 my_code.py
Give temparature: 10.1
Warm

"""

temperature=float(input('Give temparature: '))

if temperature>39:
    print('Too hot')
elif 10<temperature<=39:
    print('Warm')
elif 0<=temperature<=10:
    print('Moderate')
elif -30<=temperature<0:
    print('Freezing')
elif temperature<-30:
    print('Too cold')
else:
    print('wrong')