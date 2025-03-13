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

        # Ajetaan sitten ohjelma uudelleen ja katsotaan mitä se kirjoittaa stdoutiin
        print('Test: Single with 3 children; 1 less than 1 and 2 older, 10 days ')
        results = callpython(cmdline_args=[], input='y\n1\ny\n1\n2\n10\nn\n').strip()
        print(results)
        expected_results = ["506", "60"]
        for r in expected_results:
            print('Is ' + r + ' in output?')
            self.assertTrue(r in results)

        # Ajetaan sitten ohjelma uudelleen ja katsotaan mitä se kirjoittaa stdoutiin
        print('Test: Single with no  children, 10 days ')
        results = callpython(cmdline_args=[], input='y\n1\nn\n1\nn\n').strip()
        print(results)
        expected_results = ['16', "18"]
        for r in expected_results:
            print('Is ' + r + ' in output?')
            self.assertTrue(r in results)

        # Ajetaan sitten ohjelma uudelleen ja katsotaan mitä se kirjoittaa stdoutiin
        print('Test: Cohabit with a children age 10-17, 10 days ')
        results = callpython(cmdline_args=[], input='y\n2\ny\n0\n1\n10\nn\n').strip()
        print(results)
        expected_results = ['250', "90"]
        for r in expected_results:
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


