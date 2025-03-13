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

        expected_output=['aAbBohJELmoinTI']
        
        output=callDotNet(cmdline_args=[], kbhit='AaBb)%#123OHjelMOINti\n', timeout=5)
        print(32*'=')
        print(output)
        print(32*'=')
        
        output="".join(output.split()) #Remove all whitespaces on output, see https://stackoverflow.com/questions/3739909/how-to-strip-all-whitespace-from-string
        for eo in expected_output:
            print('Check if "'+str(list(eo))+'" is in output')
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

