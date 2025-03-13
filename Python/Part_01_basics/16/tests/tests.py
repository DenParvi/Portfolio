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
from my_code import *

tulos=AskAndTest()
print()
print(tulos+11)
"""


class TestCode(unittest.TestCase):
    def test_Python(self):
        #Test python program
        self.startTest()

        test_input=['-1', '1', '-100', '100', '0']
        expected_output=[-1, 1, -1, 1, 0]

        for n, eo in zip(test_input, expected_output):
            print(f'Test main with input {n} - ', end='')
            res=callpython(cmdline_args=[], input=n+'\n').strip()
            if eo==1:
                self.assertTrue('Positive' in res)
                self.assertFalse('Negative' in res)
                self.assertFalse('Zero' in res)
            elif eo==-1:
                self.assertTrue('Negative' in res)
                self.assertFalse('Positive' in res)
                self.assertFalse('Zero' in res)
            else:
                self.assertTrue('Zero' in res)
                self.assertFalse('Positive' in res)
                self.assertFalse('Negative' in res)
                
            print('Passed\n')
        
        for n, eo in zip(test_input, expected_output):
            print(f'Test AskAndTest() with input {n} - ', end='')
            res=callpythoncode(code=code, cmdline_args=[], input=str(n)+'\n').strip()
            self.assertTrue(str(eo+11) in res)
            print('Passed\n')
        #print(res)

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

