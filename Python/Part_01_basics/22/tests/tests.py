import unittest
from helpers import *
import os

# Remove if no python functions are not tested
# from my_code import *  # Jatetty tarkoituksella tässä tapauksessa

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
        results = callpython(cmdline_args=[], input='Tää on kivaa, tahtoo lisää\n').strip()
        self.assertTrue(results.count("Error!")== 1)
        
        results = callpython(cmdline_args=[], input='Jukka\n\n').strip()
        rivit = results.split("\n")
        
        self.assertTrue(rivit[0].count("        a") == 1)
        self.assertTrue("J" == rivit[-1])


        # to get the current working directory
        #directory = os.getcwd()

        #print(directory)

        # Tsekataan, että tiedosto nimi.txt on olemassa
        last_ok=False
        first_ok=False
        fileopenok=False
        try:
            with open('src/name.txt') as f:
                fileopenok=True
                nimitulostus = f.read()
                rivit = nimitulostus.split("\n")
                first_ok=(rivit[0].count("        a") == 1)
                #self.assertTrue(rivit[0].count("        a") == 1)
                if (len(rivit[-1].strip()) == 0): # Jos viimeinen rivi on tyhjä, niin katsellaan onko toiseksi viimeisellä rivillä
                    last_ok=(rivit[-2] == "J")
                    #self.assertTrue(rivit[-2] == "J")
                else:
                    last_ok=(rivit[-1] == "J")
                    #self.assertTrue(rivit[-1] == "J")
        except:
            self.fail("Unknown error in testing name.txt")

        if not fileopenok:
            self.fail("Can't open name.txt")

        if (not last_ok) or (not first_ok):
            self.fail("Error in formatting of name.txt")


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

