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

        #expected_output=['Annoit liian ison luvun','Annoit liian ison luvun','Annoit liian ison luvun','Annoit liian pienen luvun','Annoit liian pienen luvun','Oikein, arvasit luvun 6 kerralla!']
        output=callDotNet(cmdline_args=[], input='500\n400\n350\n300\n305\n308', timeout=3)
        print(output)
        #Poistetaan alusta ja lopusta whitespacet (tyhjät rivit)
        output=output.strip()
            
        #Jaetaan tulostus kahteen eri riviin
        output=output.splitlines()
        
        print('Check if "'+'Annoit liian ison luvun'+'" is in output')
        self.assertIn('Annoit liian ison luvun', output[0])
        print('Check if "'+'Annoit liian ison luvun'+'" is in output')
        self.assertIn('Annoit liian ison luvun', output[1])
        print('Check if "'+'Annoit liian ison luvun'+'" is in output')
        self.assertIn('Annoit liian ison luvun', output[2])
        print('Check if "'+'Annoit liian pienen luvun'+'" is in output')
        self.assertIn('Annoit liian pienen luvun', output[3])
        print('Check if "'+'Annoit liian pienen luvun'+'" is in output')
        self.assertIn('Annoit liian pienen luvun', output[4])
        print('Check if "'+'Oikein, arvasit luvun 6 kerralla!'+'" is in output')
        self.assertIn('Oikein, arvasit luvun 6 kerralla!', output[5])

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

