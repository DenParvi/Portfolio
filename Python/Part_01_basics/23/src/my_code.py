"""
23

Implement two lambda functions:

- summation: Takes 2 parameters, x and y, and returns x+y
- multiplication: Takes 2 parameters, x and y, and returns x*y

In addition, create compute(f, numbers) function.
- f is either summation or multiplication.
- numbers is a list containing numbers fetch to f.
- numbers may contain 0...N numbers.
- If numbers is empty, then compute returns 0.
- If numbers contains more than 2 numbers you can utilize recursion:
  For example, if numbers=[1, 2, 3] then compute returns summation(summation(1, 2), 3) etc.

Main program is implemented below, don't modify it.

Example:
% python3 my_code.py
1320
28
4
4
0
0

"""
#Write lambdas and laske here

summation = lambda x, y: x + y
multiplication = lambda x, y: x * y

def compute(f, numbers):
    if not numbers:
        return 0
    elif len(numbers) == 1:
        return numbers[0]
    else:
        return f(compute(f, numbers[:-1]), numbers[-1])


#Don't touche lines below
if __name__ == "__main__":
    numbers = [1,5,8,11,3]
    print(compute(multiplication, numbers))
    print(compute(summation, numbers))

    numbers = [4]
    print(compute(multiplication, numbers))
    print(compute(summation, numbers))

    numbers = []
    print(compute(multiplication, numbers))
    print(compute(summation, numbers))
