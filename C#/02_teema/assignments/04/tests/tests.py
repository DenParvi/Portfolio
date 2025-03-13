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
            ('12\n13\n+', '12 + 13 = 25'),
            ('30\n14\n'+neg, '30 '+neg+' 14 = 16'),
            ('5\n10\n*', '5 * 10 = 50'),
            ('10\n3\n/', '10 / 3 = 3'+sep+'33'),
            ('2\n0\n/', 'Nollalla jako, ei voida suorittaa'),
            ('2\n0\na', 'annoit operaation v'),
        ]

        build=True
        for input, eo in io_list:
            output=callDotNet(cmdline_args=[], input=input, timeout=3, build=build)
            print(input, output)
            build=False
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

