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
        
        expected_output=['11\t10\n12\t9\n13\t8\n14\t7\n15\t6\n16\t5\n17\t4\n18\t3\n19\t2\n20\t1']
        output=callDotNet(cmdline_args=[], input='', timeout=3)
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

