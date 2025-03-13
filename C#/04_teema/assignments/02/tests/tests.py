import unittest
from helpers import *

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

    def test_VS(self):
        #Test C# program
        self.startTest()

        #neg, sep = dotNetNumbersFormat()
        #print(neg, sep)

        build=True

        for iter in range(2): 
            output=callDotNet(cmdline_args=[], input='', timeout=3, build=build)
            print(32*'-')
            print(output)
            print(32*'-')
            build=False

            #Poistetaan alusta ja lopusta whitespacet (tyhjät rivit)
            output=output.strip()
            
            #Jaetaan tulostus kahteen eri riviin
            output=output.splitlines()

            #Jaetaan rivit tabien kohdalta listaksi (poistetaan lopusta viimeinen tab, että ei tule tyhjää alkiota)
            output0=output[0].strip().split('\t')
            output1=output[1].strip().split('\t')

            #Muutetaan merkkijonot kokonaisluvuiksi
            output0=[eval(i) for i in output0]
            output1=[eval(i) for i in output1]

            #Tarkastetaan että rivillä oli 10 lukua
            N=len(output0)
            self.assertEqual(N, 10)

            for i in range(N):
                #Tarkastetaan että rivit oli päinvastaisessa järjestyksessä
                self.assertEqual(output0[i], output1[N-1-i])
                #Tarkastetaan että on vain parillisia lukuja
                self.assertEqual(output0[i]%2, 0)

            #Tarkastetaan että kaikki luvut ei ole samoja
            n0=output0[0]
            allSame=True
            for o in output0:
                allSame=allSame and (o==n0)

            self.assertFalse(allSame)
                
            if iter==0:
                first_output0=output0
            else:
                #Tarkastetaan että luvut vaihtuvat ajokertojen välillä
                allSame=True
                for i in range(N):
                    allSame=allSame and (first_output0[i]==output0[i])
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

