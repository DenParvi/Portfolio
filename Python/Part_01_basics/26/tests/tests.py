import unittest
from helpers import *
from contextlib import redirect_stdout
from io import StringIO

#Comment out if no python functions are tested
#NOTE: If this is not commented out, src/my_code.py will be executed.
#(You can abuse this, for example, if you like to check global variables etc.)
from my_code import *



started_tests = 0
completed_tests = 0



#Test program
code="""
import sys
sys.path.insert(0, '../src')
from my_code import Observation
from datetime import datetime

dt=datetime.strptime('1.1.2021', '%d.%m.%Y')
a=Observation('Tikka', 32, dt, 'Kiuruvesi', 'Tornissa oli kylma')
print(a)
a.species='varis'
a.number_of_birds=8237
a.position='Kallansillat'
dt=datetime.strptime('17.1.1999', '%d.%m.%Y')
a.observation_time=dt
for i in range(11):
    a.additional_info=a.additional_info
    a.observation_time=a.observation_time
    a.species=a.species
    a.number_of_birds=a.number_of_birds
print(a)
a.number_of_birds=-1
if a.number_of_birds==0:
    print('JHGSaDJHGa')

b=Observation('Negative amount test, shall be 0 ->', -1, dt, 'Kanala', 'Kettu oli taalla')
print(b)
"""


class TestCode(unittest.TestCase):
    def test_Python(self):
        #Test python program
        self.startTest()

        expected_output=['Tikka', '32', '21', '1', '99', '17', 'Kiuruvesi', 'Tornissa oli kylma', 'varis', '8237', 'Kallansillat', 'Negative amount test, shall be 0 -> 0']

        res=callpythoncode(code=code, cmdline_args=[], input='\n\n').strip()

        for eo in expected_output:
            print('Is "'+ eo+'" in output?')
            self.assertTrue(eo in res)


        mycode=loadmycode()
        print('Test setters - ', end='')
        #print(res.count('setter'))
        self.assertTrue(res.count('setter')>=45)
        print('Passed')

        print('Test getters - ', end='')
        self.assertTrue(res.count('getter')>=35)
        print('Passed')

        print('Test negative number_of_birds - ', end='')
        self.assertTrue('JHGSaDJHGa' in res)
        print('Passed')
        
        self.endTest()


    def startTest(self):
        global started_tests
        started_tests=started_tests+1
        print('\nStart test', started_tests)

    def endTest(self):
        global completed_tests
        print('End test', started_tests)
        completed_tests=completed_tests+1


def completed():
    global completed_tests
    return completed_tests

def started():
    global started_tests
    return started_tests

