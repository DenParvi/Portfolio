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

        build=True

        expected_output=['Tulos : 13'+sep+'19','Tulos : 13'+sep+'19']
        output=callDotNet(cmdline_args=[], input='2'+sep+'1\n1', timeout=3, build=build)
        print(output)
        for eo in expected_output:
            print('Check if "'+eo+'" is in output')
            self.assertIn(eo, output)
        
        build=False
        expected_output=['Tulos : 56'+sep+'21','Tulos : 56'+sep+'21']
        output=callDotNet(cmdline_args=[], input='4'+sep+'23\n2', timeout=3, build=build)
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

