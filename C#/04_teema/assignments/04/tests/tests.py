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

            #Jaetaan rivit välilyöntien kohdalta listaksi )
            output0=output[0].strip().split(' ')
            output1=output[1].strip().split(' ')

            print(output0)
            print(output1)

            #katsotaan että ARVOTTU ja LAJITELTU löytyy
            self.assertEqual('ARVOTTU',output0[0])
            self.assertEqual('LAJITELTU',output1[0])
            self.assertEqual('+',output1[9])

            del output0[0:4]
            del output1[0:2]
            del output1[7]
            print(output0)
            print(output1)

            #Muutetaan merkkijonot kokonaisluvuiksi
            output0=[eval(i) for i in output0]
            output1=[eval(i) for i in output1]


            #Tarkastetaan että ekalla rivillä oli 8 lukua
            N=len(output0)
            print('Check if numeroita oikea määrä')
            self.assertEqual(N, 8)

            #tarkistetaan, että lisänumero on oikealla paikalla
            print('Check if lisänumero oikealla paikalla')
            self.assertEqual(output0[7], output1[7])

            print('Check if sorted')
            for i in range(N-2):
                #Tarkastetaan että numerot lajiteltu, ja oikeasta välistä
                print(output1[i],output1[i+1])
                self.assertTrue(output1[i] < output1[i+1])

            print('Check that numbers are between 1-40')
            for i in range(N):
                #Tarkastetaan että numerot on 1-40
                self.assertTrue(output1[i] >= 1 and output1[i] <= 40)
                
                
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

