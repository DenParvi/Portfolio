import unittest
from helpers import *

# Remove if no python functions are not tested
# from my_code import *

# HUOM! Tuo yllä oleva rivi ajaa my_code.py:n ja siellä tehdyt muuttujat jäävät
#      globaaleiksi muuttujiksi. test_Python-metodissa my_code.py:tä ei enää
#      ajeta, vaan siellä tarkastetaan vain vaaaditut globaalit muuttujat.


started_tests = 0
completed_tests = 0


code="""
print('V bmi type is '+str(type(bmi))+'B')
print('V name type is '+str(type(name))+'B')
print('V weight type is '+str(type(weight))+'B')
print('A'+name+'B')
print('C'+'%.1f'%(weight+100)+'D')
print('E'+'%.3f'%(height+1)+'F')
print('G'+'%.3f'%(11*bmi)+'H9238479823')
"""


class TestCode(unittest.TestCase):

    def test_Python(self):
        # Test python program
        self.startTest()

        results = callpythonmaincode(code=code, cmdline_args=[], input='Jussi Juonio\n1.81\n104\n').strip()
        #results = results.split('\n')
        print (results)
        #expected_results = ["V bmi type is <class 'float'>B", "V name type is <class 'str'>B", "V weight type is <class 'float'>B",
        #    "Your name is Jussi Juonio, and you are", "1.81", "m",
        #    "your weight is", "104", "kg", "Your bmi is 31.75", "AJussi JuonioB", "C204.0D", "E2.810F", "H9238479823"]
        expected_results = ["V bmi type is <class 'float'>B", "V name type is <class 'str'>B",
            "Your name is Jussi Juonio, and you are", "1.81", "m",
            "your weight is", "104", "kg", "Your bmi is 31.75", "AJussi JuonioB", "C204.0D", "E2.810F", "H9238479823"]
        for er in expected_results:
            #print (er)
            print('Is "' + er + '" in output?')
            self.assertTrue(er in results)

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

