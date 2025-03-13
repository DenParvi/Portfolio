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
        
        io_list=[
            ('4'+sep+'02\n3'+sep+'98\n4'+sep+'23', ['SUMMA :     12'+sep+'23', 'KESKIARVO : 4'+sep+'08']),
            ('54'+sep+'664\n23'+sep+'12\n'+neg+'44'+sep+'22', ['SUMMA :     33'+sep+'56', 'KESKIARVO : 11'+sep+'19']),
        ]

        build=True
        for input, eo in io_list:
            output=callDotNet(cmdline_args=[], input=input, timeout=3, build=build)
            print(input, output)
            build=False
            #self.assertIn(eo, output)
            for e in eo:
                print('Check if "'+e+'" is in output')
                self.assertIn(e, output)

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

