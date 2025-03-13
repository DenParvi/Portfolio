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

        output=callDotNetFunction(cmdline_args=[], input='', timeout=3, build=build)
        build=False
        print(output)


        my_data=loadmycode('src/datat.txt') 
        print('datat.txt sisältö')
        print(my_data);
        my_data=my_data.splitlines()
        print('Check if 40 numbers')
        self.assertTrue(len(my_data) == 40)
        print('Check that all values between 1.4-5.8')
        for eo in my_data:
            fval=float(eo.replace(',','.'))
            self.assertTrue(fval >= 1.4 and fval <= 5.8)

        output2=callDotNetFunction(cmdline_args=[], input='', timeout=3, build=build)
        my_data2=loadmycode('src/datat.txt')
        print('datat.txt sisältö 2nd run')
        print(my_data2);
        my_data2=my_data2.splitlines()
        print('Check if 2nd run numbers differs from 1st run numbers')
        allSame=True
        for i in range(40):
            allSame=allSame and (my_data[i] == my_data2[i])

        self.assertFalse(allSame)



        my_code=loadmycode('src/my_code.cs')

        print('Check if ArvoJaTallennaTiedostoon implemented')
        self.assertTrue(my_code.count('ArvoJaTallennaTiedostoon')>=2)
        print('Check if LueTiedostosta implemented')
        self.assertTrue(my_code.count('LueTiedostosta')>=2)
        print('Check if TulostaTiedot implemented')
        self.assertTrue(my_code.count('TulostaTiedot')>=2)
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

