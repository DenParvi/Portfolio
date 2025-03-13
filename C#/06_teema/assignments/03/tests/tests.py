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
            ('TiiSTAInA', ['t\ni\nt\ni\na\n'], []),
            ('123 TUOSSApa ### NUMEROITa', ['1\n3\nt\no\ns\np\n \n#\n \nu\ne\no\nt\n'], []),
        ]

        build=True
        for input, eo, neo in io_list:
            output=callDotNet(cmdline_args=[], input=input, timeout=3, build=build)
            my_data=loadmycode('src/kirjaimet.txt') 
            print(32*'-')
            print(input)
            print(output)
            print(my_data)
            print(32*'-')
            build=False
            for e in eo:
                print('Check if "'+e+'" is kirjaimet.txt content')
                self.assertEqual(e, my_data)
            for n in neo:
                print('Check if "'+n+'" is not in kirjaimet.txt content')
                self.assertNotIn(n, my_data)

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

