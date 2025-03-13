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
        output=callDotNet(cmdline_args=[], input='', timeout=3, build=build)
        build=False
        print(output)

        my_data=loadmycode('src/parametrit.txt') 
        print('parametrit.txt sisältö')
        print(my_data);
        print('Check if file and console outputs are same')
        self.assertEqual(my_data, output)


        output=callDotNet(cmdline_args=['1','kaksi','parametreja','tulee'], input='', timeout=3, build=build)
        print(output)
        my_data=loadmycode('src/parametrit.txt') 
        print('parametrit.txt sisältö')
        print(my_data);
        print('Check if file and console outputs are same')
        self.assertEqual(my_data, output)

        my_code=loadmycode('src/my_code.cs')

        print('Check if Tallenna implemented')
        self.assertTrue(my_code.count('Tallenna')>=2)
        print('Check if LueJaTulosta implemented')
        self.assertTrue(my_code.count('LueJaTulosta')>=2)
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

