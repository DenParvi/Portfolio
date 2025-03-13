import unittest
from helpers import *

# Remove if no python functions are not tested
#from my_code import *  # Jatetty tarkoituksella tässä tapauksessa


started_tests = 0
completed_tests = 0

class TestCode(unittest.TestCase):

    def test_Python(self):
        # Test python program
        self.startTest()

        input='1\n2\n3\n4\n5\n'
        print('input="'+input+'"')
        results = callpython(cmdline_args=[], input=input).strip()

        expected_results = ["15", "3.000", '1 2 3 4 5' ]

        print('output="'+results+'"')
        
        for r in expected_results:
            print('Is "' + r + '" in output?')
            self.assertTrue(r in results)



        input='1383\n2837\n-2823\n41\n115\n'
        print('input="'+input+'"')
        results = callpython(cmdline_args=[], input=input).strip()

        expected_results = ["1553", "310.600", '1383 2837 -2823 41 115']

        print('output="'+results+'"')
        
        for r in expected_results:
            print('Is "' + r + '" in output?')
            self.assertTrue(r in results)


        input='83\n287\n-283\n-4444\n1215\n'
        print('input="'+input+'"')
        results = callpython(cmdline_args=[], input=input).strip()

        expected_results = ["-3142", "-628.400", '83 287 -283 -4444 1215']

        print('output="'+results+'"')
        
        for r in expected_results:
            print('Is "' + r + '" in output?')
            self.assertTrue(r in results)

        self.endTest()


    def startTest(self):
        global started_tests
        started_tests = started_tests + 1
        print('\nStart test', started_tests)

    def endTest(self):
        global completed_tests
        print('End test', started_tests)
        completed_tests = completed_tests + 1


def completed():
    global completed_tests
    return completed_tests


def started():
    global started_tests
    return started_tests

