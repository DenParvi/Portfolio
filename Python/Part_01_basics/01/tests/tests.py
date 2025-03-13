import unittest
from helpers import *

# Remove if no python functions are not tested
#from my_code import *  # Jatetty tarkoituksella tässä tapauksessa

# HUOM! Tuo yllä oleva rivi ajaa my_code.py:n ja siellä tehdyt muuttujat jäävät
#      globaaleiksi muuttujiksi. test_Python-metodissa my_code.py:tä ei enää
#      ajeta, vaan siellä tarkastetaan vain vaaaditut globaalit muuttujat.


started_tests = 0
completed_tests = 0

code="""
if approx_pi < 3.2 and approx_pi > 3.1:
    print('pi value ok')

if temperature < 12.7 and temperature > 12.2:
    print('temperature value ok')

if name_first=='j':
    print('first letter ok')

if street_address=='Kauppakatu 12':
    print('address ok')

if social_security_number=='211278-234X':
    print('social security number ok')
"""

class TestCode(unittest.TestCase):

    def test_Python(self):
        # Test python program
        self.startTest()

        expected_results1=['pi value ok', 'temperature value ok', 'first letter ok', 'address ok', 'social security number ok']
        
        results = callpythonmaincode(code=code, cmdline_args=[], input='').strip()

        for r in expected_results1:
            print('Check if',r,'in results')
            self.assertTrue(r in results)
            
        # Ajetaan sitten ohjelma uudelleen ja katsotaan mitä se kirjoittaa stdoutiin
        results = callpython(cmdline_args=[], input='').strip()
        results = results.split('\n')

        expected_results2 = [str(3.14), str(12.5), 'j', 'Kauppakatu 12', '211278-234X']

        # Tarkastetan että tulostus oli oikein
        for r in results:
            print('Is ' + r + ' in expected output?')
            self.assertTrue(r in expected_results2)

        #Katsotaan etta ei ollut ylimaaraisia tulostuksia
        for r in expected_results2:
            print('Is ' + r + ' in output?')
            self.assertTrue(r in results)

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

