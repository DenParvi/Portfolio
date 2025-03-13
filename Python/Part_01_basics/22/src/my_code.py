# -*- coding: utf-8 -*-

"""
22

1) Create a software, which asks users name.
2) If the name contains more than 18 characters, show message "Error",
   and terminate the program
3) Show the name diagonally (see example below). The 1st letter of the name is
   on column 1, the 2nd letter on column 3 etc.
4) Print the name diagonally, similar to earlier, to file name.txt

Example:
% python3 my_code.py 
Give your name : Janne Koponen
                        n
                      e
                    n
                  o
                p
              o
            K
           
        e
      n
    n
  a
J

Example with too long name:
% python3 my_code.py
Give your name : This is my very long name
Error!
"""
def print_name_diagonally(name):
    length = len(name)
    for i, letter in enumerate(reversed(name)):
        print("  " * (length - i - 1) + letter)

def write_name_diagonally_to_fil(name):
    length = len(name)
    with open("name.txt", "w") as f:
        for i, letter in enumerate(reversed(name)):
            f.write("  " * (length - i - 1) + letter + "\n")

def main():
    name = input("Give your name: ")

    if len(name) > 18:
        print("Error!")
        return
    
    print_name_diagonally(name)
    
    write_name_diagonally_to_fil(name)

if __name__ == "__main__":
    main()
