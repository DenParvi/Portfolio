import unittest
from helpers import *
#import timeout_decorator

#Never do following! The test process can be halted by student code!
#from my_code import *



started_tests = 0
completed_tests = 0

def rmoutput():
    for filename in []:
        try:
            os.remove(filename)
        except:
            pass


class TestCode(unittest.TestCase):
    #@timeout_decorator.timeout(30)
    def test_DotNetFunction(self):
        #Test C# program
        self.startTest()

        #Negative operator and decimal separator
        neg, sep = dotNetNumbersFormat()

        build=True

        for iter in range(2): 
            koko = 10+iter # koko eri eri kierroksilla

            output=callDotNetFunction(cmdline_args=[], input=str(koko), timeout=3, build=build)
            print(32*'-')
            print(output)
            print(32*'-')
            build=False

            #Poistetaan alusta ja lopusta whitespacet (tyhjät rivit)
            output=output.strip()
  
            #Jaetaan tulostus kahteen eri riviin
            output=output.splitlines()
            output0=output[0].strip().split(' ') # kuinka monta arvosanaa
            output1=output[1].strip().split(' ') # arvosanat
            output2=output[2].strip().split(' ') # hylättyjä arvosanoja

            print(output0)
            print(output1)
            print(output2)

            #tarkistetaan nollien määrä
            lkm = output1.count('0')
            print(lkm)
            print('Check if hylättyjä oikea määrä in output')
            self.assertIn(' arvosanoja oli : '+str(lkm)+ ' kpl', output[2])

            my_code=loadmycode('src/my_code.cs') #Muista muuttaa tiedoston nimi helpers.py:hyn

            print('Check if KysyKoko implemented')
            self.assertTrue(my_code.count('KysyKoko')>=2)
            print('Check if LuoTaulukko implemented')
            self.assertTrue(my_code.count('LuoTaulukko')>=2)
            print('Check if ArvoArvosanat implemented')
            self.assertTrue(my_code.count('ArvoArvosanat')>=2)
            print('Check if TutkiHylatyt implemented')
            self.assertTrue(my_code.count('TutkiHylatyt')>=2)
            print('Check if Tulosta implemented')
            self.assertTrue(my_code.count('Tulosta')>=2)

            if iter==0:
                first_output1=output1
                expected_output=['10']

                for eo in expected_output:
                    print('Check if "'+eo+'" is in output')
                    self.assertIn(eo, output0) #tutkitaan onko 10

                N=len(output1)
                self.assertEqual(N, 10)

            else:
                expected_output=['11']

                for eo in expected_output:
                    print('Check if "'+eo+'" is in output')
                    self.assertIn(eo, output0) #tutkitaan onko 10
                #Tarkastetaan että luvut vaihtuvat ajokertojen välillä
                allSame=True

                #Tarkastetaan että rivillä oli 11 lukua
                N=len(output1)
                self.assertEqual(N, 11)
                for i in range(N):
                    allSame=allSame and (first_output1[i]==output0[i])
                self.assertFalse(allSame)

        self.endTest()

    def startTest(self):
        global started_tests
        started_tests=started_tests+1
        print('\nStart test', started_tests)
        rmoutput()

    def endTest(self):
        global completed_tests
        print('End test', started_tests)
        completed_tests=completed_tests+1
        rmoutput()


def completed():
    global completed_tests
    return completed_tests

def started():
    global started_tests
    return started_tests

