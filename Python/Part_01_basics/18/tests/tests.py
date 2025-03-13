import unittest
from helpers import *
from contextlib import redirect_stdout
from io import StringIO

#Comment out if no python functions are tested
#NOTE: If this is not commented out, src/my_code.py will be executed.
#(You can abuse this, for example, if you like to check global variables etc.)
#from my_code import *



started_tests = 0
completed_tests = 0



#Test program
code="""
import sys
sys.path.insert(0, '../src')
from my_code import *

print(K_point+9)

pituus=ask_jump_length()
tyylipisteet=ask_style_points()
kokonaispisteet=compute_points(pituus, tyylipisteet)

print(pituus, kokonaispisteet)
"""


class TestCode(unittest.TestCase):
    def test_Python(self):
        #Test python program
        self.startTest()

        test_input=['120\n10\n0\n11\n20\n9\n\n\n', '90\n20\n20\n20\n20\n20\n\n\n']
        expected_output=[['120', '144'], ['90', '120']]

        for n, eo in zip(test_input, expected_output):
            print('Test main with input : \n"""')
            print(n)
            print('"""')
            res=callpython(cmdline_args=[], input=n+'\n').strip()
            #print(res)
            for e in eo:
                self.assertTrue(e in res)

            print('Passed\n')

        expected_output=[['120', '144', '99'], ['90', '120', '99']]
        for n, eo in zip(test_input, expected_output):
            print('Test functions with input : \n"""')
            print(n)
            print('"""')
            res=callpythoncode(code=code, cmdline_args=[], input=n+'\n').strip()
            #print(res)
            for e in eo:
                self.assertTrue(e in res)


            print('Passed\n')
            
        self.endTest()

    """
    #Call function and capture stdout
    def captureFunctionStdout(f_name, parameters='()'):
        f = StringIO()
        with redirect_stdout(f):
            eval(f_name+parameters)

        return f.getvalue().strip()
    
    def test_PythonFunction(self):
        #Test python function (in this case function name is combine)
        #my_code must be imported
        self.startTest()

        print(32*'*')
        print('Test Tulosta')
        
        expected=['Teuvo Testaaja','32','111151-1234']
        par='('
        for p in expected:
            par=par+'"'+p+'",'
        par=par.strip(',')
        par=par+')'
        ret=TestCode.captureFunctionStdout('Tulosta', par)
        ret=ret.split('\n')

        for s in expected:
            self.assertTrue(s in ret)
        
        print('Accepted\n')

        
        print('Test main program')
        expected=['Kaisa Testaaja','31','111151-1244']
        par=''
        for p in expected:
            par=par+p+'\n'
        par=par.strip('\n')

        ret=callpython(cmdline_args=[], input=par).strip()
        ret=ret.split('\n')

        for s in expected:
            self.assertTrue(s in ret)

        
        print('Accepted\n')
        
        
        print(32*'*')
        self.endTest()
    """

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

