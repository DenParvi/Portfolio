import unittest
from helpers import *
#import timeout_decorator

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
    #@timeout_decorator.timeout(30)
    def test_DotNetFunction(self):
        #Test C# program
        self.startTest()

        #Negative operator and decimal separator
        neg, sep = dotNetNumbersFormat()


        # io_list has values for: input, expected output, not expected output
        io_list=[
            ('100', ['Luku oli positiivinen'], ['Luku oli negatiivinen']),
            ('9', ['Luku oli positiivinen'], ['Luku oli negatiivinen']),
            (neg+'9', ['Luku oli negatiivinen'], ['Luku oli positiivinen']),
            (neg+'1', ['Luku oli negatiivinen'], ['Luku oli positiivinen', 'Luku oli nolla']),
            ('0', ['Luku oli nolla'], ['Luku oli negatiivinen']),
        ]

        build=True
        for input, eo, neo in io_list:
            output=callDotNetFunction(cmdline_args=[], input=input, timeout=3, build=build)
            print(input, output)
            build=False
            for e in eo:
                print('Check if "'+e+'" is in output')
                self.assertIn(e, output)
            for n in neo:
                print('Check if "'+n+'" is not in output')
                self.assertNotIn(n, output)

        my_code=loadmycode('src/my_code.cs')

        print('Check if used switch-case')
        self.assertTrue(my_code.count('switch')>=2)
        print('Check if KysyJaTestaaLuku implemented')
        self.assertTrue(my_code.count('KysyJaTestaaLuku')>=2)
            
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

