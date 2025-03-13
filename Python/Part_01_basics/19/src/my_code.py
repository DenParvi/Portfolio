"""
19

Create a function named check, which gets arbitrary number of arguments:
1) At first, the function prints number of arguments got.
2) If there are none parameters the function prints "Error!" and terminates
3) If the 1st argument is "teacher" the function prints "Teaching programming!"
4) If the 1st argument is "student" the function printf "Learning programming!"
5) If the 1st parameter is not "teacher" nor "student" the function prints "I don't understand!"
"""
#Write functions and define global variables here!
def check(*args):
    print(f"Number of arguments: {len(args)}")

    if len(args) == 0:
        print("Error!")
        return

    if args[0] == "teacher":
        print("Teaching programming!")
    elif args[0] == "student":
        print("Learning programming!")
    else:
        print("I don't understand!")


if __name__ == "__main__":
    #Write main program below this line
    check()  
    check("teacher", "extra", "arguments") 
    check("student")  
    check("random")  
