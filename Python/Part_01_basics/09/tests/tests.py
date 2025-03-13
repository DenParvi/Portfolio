import unittest
from helpers import *

# Remove if no python functions are not tested
#from my_code import NUMBER_TO_GUESS  # Jatetty tarkoituksella tässä tapauksessa

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
        input='124\n'
        results = callpython(cmdline_args=[], input=input).strip()

        print("Input =", input)
        print("Output =", results)
        
        expected_results = ['You guessed', "by 1 guesses"]

        for r in expected_results:
            print('Is ' + r + ' in output?')
            self.assertTrue(r in results)

        print(24*'-')
        input='12\n14\n232\n1140\n124\n'
        results = callpython(cmdline_args=[], input=input).strip()


        print("Input =", input)
        print("Output =", results)

        self.assertTrue(results.count("small") == 2)
        self.assertTrue(results.count("big") == 2)
        self.assertTrue(results.count("by 5 guesses") == 1)

        mycode = loadmycode()

        print('Check if NUMBER_TO_GUESS is defined!')
        self.assertTrue(mycode.count('NUMBER_TO_GUESS()') >= 1)

       
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
