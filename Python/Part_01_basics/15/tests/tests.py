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
        print('Test Finnish language - ', end='')
        results = callpython(cmdline_args=[], input='0\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n1\n').strip().upper()
        self.assertTrue(results.count("MAANANTAI") == 5)
        self.assertTrue(results.count("TORSTAI") == 5)
        self.assertTrue(results.count("1.0") == 5)
        print('Passed')

        print('Test English language - ', end='')
        results = callpython(cmdline_args=[], input='1\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n2\n').strip().upper()
        self.assertTrue(results.count("TUESDAY") == 5)
        self.assertTrue(results.count("WEDNESDAY") == 5)
        self.assertTrue(results.count("FRIDAY") == 5)
        self.assertTrue(results.count("2.0") == 5)
        print('Passed')

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

