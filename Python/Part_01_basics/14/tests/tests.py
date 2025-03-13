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
        results = callpython(cmdline_args=[], input='0\n').strip()
        #print (results)
        self.assertTrue("Error!" in results)
        
        # Ajetaan sitten ohjelma uudelleen ja katsotaan mitä se kirjoittaa stdoutiin

        number_frequency={}
        
        for N in range(1, 100):
            print(24*'-')
            print(f'Test {N} numbers')
            results = callpython(cmdline_args=[], input=f'{N}\n').strip()

            rivit = results.split("\n")
            #for r  in rivit:
            #    print(r)
            numerotStr = rivit[-1]

            # Tsekataan, että viimeinen merkki ei ole pilkku
            print('Check that there is no trailing comma - ', end='')
            viimeinen = numerotStr[-1]
            self.assertFalse(viimeinen  == ",")
            print('Passed')

            numerot = numerotStr.split(",")
            suurin = -1
            pienin = 21
            for n in numerot:
                n = int(n)

                if n not in number_frequency:
                    number_frequency[n]=1
                else:
                    number_frequency[n]+=1
                    
                
                if n > suurin:
                    suurin = n
                if n < pienin:
                    pienin = n

            print(f'Numbers were: {numerot}')
            expected_results = ["Min", "max", f"{pienin}", f"{suurin}"]

            for r in expected_results:
                print('Is ' + r + ' in output - ', end='')
                self.assertTrue(r in results)
                print('Passed')

        print('During tests count of each number was:')
        print(number_frequency)

        print('Check that no odd numbers were on numbers: ', end='')
        for n in range(1, 21, 2):
            print(n, end=' ')
            self.assertFalse(n in number_frequency)
        print('Passed')

        print('Check that all even numbers were on numbers: ', end='')
        for n in range(0, 21, 2):
            print(n, end=' ')
            self.assertTrue(n in number_frequency)
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

