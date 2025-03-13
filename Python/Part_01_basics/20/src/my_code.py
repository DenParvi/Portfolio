"""
20

Implement following functions to manage car registration data:

1) ask_cars()

- Reads registration number (key) and date of the registration (value), and saves the information information to dictionary.
- No parameters
- The function asks data until END is given as registration number.
- Date is saved as datetime.
- Input format of date is dd.mm.yyyy (for example 14.1.2023)
- If date is invalid, the software asks date again.
- Function returns the dictionary containing registration data

2) save_cars(d)

- Saves content of dictionary d to file cars.txt 
- In file, dates does not include time information
- Each row contains registration number and registration date separated by tabulator '\t'

3) read_cars()

- Reads registration data from cars.txt, and returns a dictionary containing registration data saved.

4) print_data(d)

- Prints registration data saved on dictionary d.


NOTE: If you utilize

for row in f:
   ...

to read the file, then row contains new line, also. You can use str.strip() to remove new line.

Create test software to test your solution, if needed.

Example:
% python3 my_code.py
Registration number : A-13
Registration date: 1.3.1923
Registration number : B-334
Registration date: 12.3.1945
Registration number : AAA-111
Registration date: 123.2.1928
Error: Give date in format dd.mm.yyyy : 12.3.1928
Registration number : END
A-13 01.03.1923
B-334 12.03.1945
AAA-111 12.03.1928

In addition, the test program created cars.txt file containing:
A-13    01.03.1923
B-334   12.03.1945
AAA-111 12.03.1928
"""
#Write functions, define global variables, and import modules here!
from datetime import datetime

def ask_cars():
    car_dict = {}
    
    while True:
        reg_num = input("Registration number: ")
        if reg_num == "END":
            break
        
        while True:
            reg_date_str = input("Registration date (dd.mm.yyyy): ")
            try:
                reg_date = datetime.strptime(reg_date_str, "%d.%m.%Y")
                car_dict[reg_num] = reg_date
                break
            except ValueError:
                print("Error: Give date in format dd.mm.yyyy")
    
    return car_dict

def save_cars(d):
    with open("cars.txt", "w") as f:
        for reg_num, reg_date in d.items():
            f.write(f"{reg_num}\t{reg_date.strftime('%d.%m.%Y')}\n")

def read_cars():
    car_dict = {}
    try:
        with open("cars.txt", "r") as f:
            for row in f:
                reg_num, reg_date_str = row.strip().split('\t')
                reg_date = datetime.strptime(reg_date_str, "%d.%m.%Y")
                car_dict[reg_num] = reg_date
    except FileNotFoundError:
        print("Error: cars.txt file not found.")
    
    return car_dict

def print_data(d):
    for reg_num, reg_date in d.items():
        print(f"{reg_num} {reg_date.strftime('%d.%m.%Y')}")


if __name__ == "__main__":
    #Write main program below this line
    cars = ask_cars()
    save_cars(cars)
    loaded_cars = read_cars()
    print_data(loaded_cars)
    


