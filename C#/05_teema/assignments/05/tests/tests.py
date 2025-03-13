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

        build=True

        # io_list has values for: input, expected output, not expected output
        io_list=[
            ('4\n'+neg+'5\nmoikka\n12\n###\n147\n77\n!!!\n76\ntere\n102', ['MIN : '+neg+'5','MAX : 147'], []),
        ]

        build=True
        for input, eo, neo in io_list:
            output=callDotNetFunction(cmdline_args=[], input=input, timeout=3, build=build)
            print(32*'-')
            print(input)
            print(output)
            print(32*'-')
            build=False
            for e in eo:
                print('Check if "'+e+'" is in output')
                self.assertIn(e, output)
            for n in neo:
                print('Check if "'+n+'" is not in output')
                self.assertNotIn(n, output)

        my_code=loadmycode('src/my_code.cs')

        print('Check if LuoTaulukko implemented')
        self.assertTrue(my_code.count('LuoTaulukko')>=2)
        print('Check if KysyArvotTaulukkoon implemented')
        self.assertTrue(my_code.count('KysyArvotTaulukkoon')>=2)
        print('Check if LajitteleTaulukko implemented')
        self.assertTrue(my_code.count('LajitteleTaulukko')>=2)
        print('Check if TulostaTiedot implemented')
        self.assertTrue(my_code.count('TulostaTiedot')>=2)
        print('Check if Array.Sort implemented')
        self.assertTrue(my_code.count('Array.Sort')>=1)
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

