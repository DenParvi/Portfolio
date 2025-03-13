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
            ('3\n5\n5\n6\n12\n9\n8\n10\n0\n0\n1\n0\n2\n4\n3\n2\n0\n0\n0\n5', ['Maanantai   : 4'+sep+'8','Tiistai     : 9'+sep+'8','Keskiviikko : 0'+sep+'2','Torstai     : 2'+sep+'8','Perjantai   : 1'+sep+'2']),
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

