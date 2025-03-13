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

        print(24*'-')
        # Ajetaan sitten ohjelma uudelleen ja katsotaan mitä se kirjoittaa stdoutiin
        input='0\n'
        print('input = "'+input+'"')
        results = callpython(cmdline_args=[], input=input).strip()
        print('output = "'+results+'"')
        
        results = results.upper()
        expected_results = ['GIVE RADIUS', 'EXIT', 'CIRCUMFERENCE', 'AREA']
        for r in expected_results:
            print('Is "' + r.upper() + '" in output?')
            self.assertTrue(r in results)

        print(24*'-')
        input='1\n3.2\n2\n3\n0\n\n'
        print('input = "'+input+'"')
        results = callpython(cmdline_args=[], input=input).strip()
        print('output = "'+results+'"')

        results = results.upper()
        expected_results = ['0.1', '32', 'CIRCUMFERENCE', '2.1', '20', 'AREA']
        for r in expected_results:
            print('Is "' + r.upper() + '" in output?')
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


