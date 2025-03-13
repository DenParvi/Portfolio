"""
16

1) Create function AskAndTest, which asks an integer from the user.
   The function returns
   * 1, if the integer was positive
   * 0, if the integert was 0
   * -1, if the integer was negative

2) Create a main program that utilizes AskAndTest function. The main program
   prints message "Positive", "Zero", or "Negative" corresponding return
   value of the function.

Example:
 % python3 my_code.py
Give an integer: 21
Positive

% python3 my_code.py
Give an integer: 1
Positive

% python3 my_code.py
Give an integer: 0
Zero

% python3 my_code.py
Give an integer: -1
Negative

% python3 my_code.py
Give an integer: -100
Negative
"""

#Implement AskAndTest function here!
def AskAndTest():
    num=int(input("Give an integer: "))
    if num>0:
        return 1
    elif num==0:
        return 0
    elif num<0:
        return -1
    else:
        print("Wrong")


if __name__ == "__main__":
    #Write main program below this line
   i=AskAndTest()
   if i==1:
       print("Positive")
   elif i==0:
       print("Zero")
   elif i==-1:
       print("Negative")
   
