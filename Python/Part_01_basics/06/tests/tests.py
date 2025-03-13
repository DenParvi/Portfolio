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
        input='12\n11\n'
        print(f'Call program with input "{input}"')
        results = callpython(cmdline_args=[], input=input).strip()

        expected_results = ['12']

        for r in expected_results:
            print('Is ' + r + ' in output?')
            self.assertTrue(r in results)

        print('Passed')
        print(24*'-')
        
        input='11\n555\n'
        print(f'Call program with input "{input}"')
        results = callpython(cmdline_args=[], input=input).strip()

        expected_results = ['555']

        for r in expected_results:
            print('Is ' + r + ' in output?')
            self.assertTrue(r in results)

        print('Passed')
        print(24*'-')

        input='123.3\n123.3\n'
        print(f'Call program with input "{input}"')
        results = callpython(cmdline_args=[], input=input).strip()

        expected_results = ['123.3']

        for r in expected_results:
            print('Is ' + r + ' in output?')
            self.assertTrue(r in results)

        print('Passed')
        print(24*'-')

        print('Test if if-else is used')
        mycode = loadmycode()
        #print(mycode)
        self.assertTrue(mycode.count('if ') >= 1) # Koska if ja else ovat tehtävänannossa
        self.assertTrue(mycode.count('else') >= 1)
        print('Passed')
        print(24*'-')

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

