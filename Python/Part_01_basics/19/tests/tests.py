import unittest
from helpers import *
#from contextlib import redirect_stdout
#from io import StringIO

#Comment out if no python functions are tested
#NOTE: If this is not commented out, src/my_code.py will be executed.
#(You can abuse this, for example, if you like to check global variables etc.)
#from my_code import *



started_tests = 0
completed_tests = 0



class TestCode(unittest.TestCase):
    def test_PythonFunction(self):
        #Test python function (in this case function name is combine)
        #my_code must be imported
        self.startTest()

        code_main="""
import sys
sys.path.insert(0, '../src')
from my_code import check

        """
        
        parameters=["'teacher'",
                    "'student'",
                    "'student', 1, 2, 3, 4, 'teacher'",
                    "'opisk', 1, 2,3",
                    ""
                    ]

        expected_output=[
            ["Teaching programming!", "1"],
            ["Learning programming!", "1"],
            ["Learning programming!", "6"],
            ["I don't understand!", "4"],
            ["Error!"]
        ]

        not_expected_output=[
            ["Learning programming!", "2"],
            ["Teaching programming!", "6"],
            ["I don't understand!", "1"],
            ["Error!", "2"],
            ["Learning programming!"]
        ]

        for par,eo, neo in zip(parameters, expected_output, not_expected_output):
            print(f'Test check({par}) - ', end='')
            res=callpythoncode(code=code_main+'\ncheck('+par+')\n')
            #print(res)
            for e in eo:
                #print('in', e)
                self.assertTrue(e in res)
            for ne in neo:
                #print('not', ne)
                self.assertFalse(ne in res)
                
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

