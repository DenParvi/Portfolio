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
            ('0\n'+neg+'1\n120'+sep+'2\n115'+sep+'5\n19\n17\n18\n19'+sep+'2\n19'+sep+'5\n18'+sep+'4\n'+neg+'2\n18'+sep+'5', ['PITUUS  : 115'+sep+'5 m','PISTEET : 161'+sep+'4'], []),
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

        print('Check if KR_PISTE implemented')
        self.assertTrue(my_code.count('KR_PISTE')>=2)
        self.assertTrue(my_code.count('const')>=1)
        print('Check if KysyHypynPituus implemented')
        self.assertTrue(my_code.count('KysyHypynPituus')>=2)
        print('Check if KysyTuomareidenPisteet implemented')
        self.assertTrue(my_code.count('KysyTuomareidenPisteet')>=2)
        print('Check if LaskeHypynPisteet implemented')
        self.assertTrue(my_code.count('LaskeHypynPisteet')>=2)
        print('Check if Tulosta implemented')
        self.assertTrue(my_code.count('Tulosta')>=2)
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

