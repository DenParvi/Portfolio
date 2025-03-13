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
        results = callpython(cmdline_args=[], input='10\n5\n')
        print()
        print('Output =',results)
        print()
        results=results.replace(" ", "")
        expected_results = ['10,10', "11,9", '12,8','13,7', "14,6"]
        for r in expected_results:
            print('Is ' + r + ' in output?')
            self.assertTrue(r in results)

        results = callpython(cmdline_args=[], input='1\n3\n')
        print(results)
        results=results.replace(" ", "")
        expected_results = ['1,1', "2,0", "3,-1"]
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


