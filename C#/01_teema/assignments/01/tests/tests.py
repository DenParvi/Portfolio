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
        #print(neg, sep)

        expected_output=[
            '3'+sep+'14159',
            'Munkkikuja 3', 
            '121299A1234', 
            'S',
            neg+'12'+sep+'4'
        ]

        output=callDotNet(cmdline_args=[], input='', timeout=3)
        print(output)
        for eo in expected_output:
            print('Check if "'+eo+'" is in output')
            self.assertIn(eo, output)
        
        #toinen testi tarvittaessa
        #expected_output=['12','1', 'c', 'terve']
        #output=callDotNet(cmdline_args=[], input='12,1\nc\nterve', timeout=3)
        #print(output)
        #for eo in expected_output:
        #    print('Check if "'+eo+'" is in output')
        #    self.assertIn(eo, output)

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

