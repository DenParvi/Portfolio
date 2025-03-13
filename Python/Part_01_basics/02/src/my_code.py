# -*- coding: utf-8 -*-

"""
02

1) Introduce variables first_name, last_name, and whole_name. 
Initialize first_name  and last_name by value "??", and, in addition, 
initialize whole_name variable by value "?? ??".

2) Print value of whole_name variable

3) Ask users first name and last name to correspondind varibles. 

4) Use first_name and last_name to create value of whole_name variable.

5) Print users whole name as presented below.

Example:

?? ??

What is your first name : Jussi
What is your last name : Juonio

Your name is Jussi Juonio
"""

first_name="??"
last_name="??"
whole_name="?? ??"

print(whole_name)

first_name=input("What is your first name? ")
last_name=input("What is your last name? ")
whole_name=first_name+" "+last_name
print("Your name is " + whole_name)