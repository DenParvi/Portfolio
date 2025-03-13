import unittest
from helpers import *

# Remove if no python functions are not tested
#from my_code import *  # Jatetty tarkoituksella tässä tapauksessa

# HUOM! Tuo yllä oleva rivi ajaa my_code.py:n ja siellä tehdyt muuttujat jäävät
#      globaaleiksi muuttujiksi. test_Python-metodissa my_code.py:tä ei enää
#      ajeta, vaan siellä tarkastetaan vain vaaaditut globaalit muuttujat.


started_tests = 0
completed_tests = 0


class TestCode(unittest.TestCase):

    def test_Python(self):
        # Test python program
        self.startTest()

        test_data={
            '39.01': 'Too hot',
            '38.99': 'Warm',
            '10.01' : 'Warm',
            '9.99' : 'Moderate',
            '0.01' : 'Moderate',
            '-0.01': 'Freezing',
            '-29.99':'Freezing',
            '-30.01' : 'Too cold'
        }

        for i, r in test_data.items():
            print(24*'-')
            print('Input = "'+i+'"')
            results= callpython(cmdline_args=[], input=i+'\n').strip()
            print('Is "' + r + '" in output?')
            print('Output = "'+results+'"')
            self.assertTrue(r in results)

            #Check that there is no extra output
            for v in test_data.values():
                if v!=r:
                    print('"'+v+'" is not in output?')
                    self.assertFalse(v in results)
                    

        self.endTest()

    def startTest(self):
        global started_tests
        started_tests = started_tests + 1
        print('\nStart test', started_tests)

    def endTest(self):
        global completed_tests
        print('End test', started_tests)
        completed_tests = completed_tests + 1


def completed():
    global completed_tests
    return completed_tests


def started():
    global started_tests
    return started_tests
