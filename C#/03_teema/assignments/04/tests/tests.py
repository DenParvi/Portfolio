import unittest
from helpers import *

#Never do following! The test process can be halted by student code!
#from my_code import *



started_tests = 0
completed_tests = 0

def rmoutput():
    for filename in []:
        try:
            os.remove(filename)
        except:
            pass


class TestCode(unittest.TestCase):

    def test_VS(self):
        #Test C# program
        self.startTest()
        neg, sep = dotNetNumbersFormat()

        expected_output=['WHILE:\n5  7  9  11','DO-WHILE:\n5  7  9  11','FOR:\n5  7  9  11']
        output=callDotNet(cmdline_args=[], input='11\n5\n2\n5\n11\n0\n5\n11\n2', timeout=3)
        print(output)
        for eo in expected_output:
            print('Check if "'+eo+'" is in output')
            self.assertIn(eo, output)
        self.endTest()

    def startTest(self):
        global started_tests
        started_tests=started_tests+1
        print('\nStart test', started_tests)
        rmoutput()

    def endTest(self):
        global completed_tests
        print('End test', started_tests)
        completed_tests=completed_tests+1
        rmoutput()


def completed():
    global completed_tests
    return completed_tests

def started():
    global started_tests
    return started_tests

