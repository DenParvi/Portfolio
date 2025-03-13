import unittest
from helpers import *

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

        input='0\n'
        print(f'Test with input="{input}"')
        results = callpython(cmdline_args=[], input=input).strip()
        print('Expecting "Error" - ', end='')
        self.assertTrue('Error' in results)
        print('Passed')

        print(24*'-')
        
        input='7\n'
        print(f'Test with input="{input}"')
        results = callpython(cmdline_args=[], input=input).strip()
        rivit = results.split("\n")
        #for r  in rivit:
        #    print(r)
        
        arvotstr1 = rivit[1].strip().split(" ") # Lajittelematon
        arvot1 = list()
        for a in arvotstr1:
            arvot1.append(float(a))
        arvot1.sort()
        #print(arvot1)

        arvotstr2 = rivit[3].strip().split(" ") # Lajiteltu
        arvot2= list()

        for a in arvotstr2:
            arvot2.append(float(a))
        #print(arvot2)

        self.assertTrue(arvot1 == arvot2)

        l = len(arvot2)
        #print("kpl =" + str(l))
        s = sum(arvot2)
        #print("Summa = " + str(s))
        mi = min(arvot2)
        ma = max(arvot2)
        ka = s / l
        #Tsekataan, että tiedosto arvot.txt on olemassa
        content_ok=False
        fileopen_ok=False
        try:
            print('Test content of numbers.txt - ', end='')
            with open('./src/numbers.txt', 'rt') as f:
                fileopen_ok=True
                arvotStr = f.read().strip()
                a1=arvotStr.split('\n')
                a2=arvotstr1
                for n1, n2 in zip(a1, a2):
                    if float(n1)==float(n2):
                        content_ok=True
                    else:
                        content_ok=False
                        break
        except:
            self.fail("Unknown error in testing numbers.txt!")

        if not fileopen_ok:
            self.fail("Can't open numbers.txt!")
                    
        if not content_ok:
            self.fail("Content of numbers.txt is invalid!")
                
        print('Passed')
        # Tsekataan, että tiedosto tulokset.txt on olemassa
        try:
            content_ok=True
            fileopen_ok=False
            print('Test content of resultss.txt - ', end='')
            with open('./src/results.txt', 'rt') as f:
                fileopen_ok=True
                tulokset = f.read()
                content_ok=content_ok and ("{0:d}".format(l) in tulokset)
                content_ok=content_ok and ("{0:.2f}".format(s) in tulokset)
                content_ok=content_ok and ("{0:.2f}".format(mi) in tulokset)
                content_ok=content_ok and ("{0:.2f}".format(ma) in tulokset)
                content_ok=content_ok and ("{0:.2f}".format(ka) in tulokset)
                """
                self.assertTrue("{0:d}".format(l) in tulokset)
                self.assertTrue("{0:.2f}".format(s) in tulokset)
                self.assertTrue("{0:.2f}".format(mi) in tulokset)
                self.assertTrue("{0:.2f}".format(ma) in tulokset)
                self.assertTrue("{0:.2f}".format(ka) in tulokset)
                """

        except:
            self.fail("Unknown error in testing results.txt!")

        if not fileopen_ok:
            self.fail("Can't open results.txt!")
                    
        if not content_ok:
            self.fail("Content of results.txt is invalid!")
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

