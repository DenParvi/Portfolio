import unittest
from helpers import *
from contextlib import redirect_stdout
from io import StringIO

#Comment out if no python functions are tested
#NOTE: If this is not commented out, src/my_code.py will be executed.
#(You can abuse this, for example, if you like to check global variables etc.)
#from my_code import *



started_tests = 0
completed_tests = 0

code1="""
import sys
sys.path.insert(0, '../src')
from my_code import *

myCarStorage = CarStorage()

volvo_v70 = CarModel("Volovo", "V70")
porsche_cyaenne = CarModel("porsse", "Cayanne")
datsun_100a = CarModel("Nissan", "100A")

car1 = Car(name="Kauppakassi",model=volvo_v70,
               bought=datetime.datetime(2020, 1,1),price= 1200, boughtplace="Kuopion tori")
service1 = Service(date = datetime.datetime(2021,1,11),operation="Renkaanvaihto", price= 400 )
service2 = Service(date = datetime.datetime(2019, 3,4),operation="Oljyvvaihto", price = 234 )
car1.addService(service1)
car1.addService(service2)
myCarStorage.addCar(car1)

car2 = Car(name="Porsse",model=porsche_cyaenne,
               bought=datetime.datetime(2021, 1,13),price= 11200, boughtplace="Ita-Auto, Helsinki")
service1 = Service(date = datetime.datetime(2021,3,11),operation="Renkaat vaihdettu", price= 1300 )
service2 = Service(date = datetime.datetime(2019, 12,4),operation="Jakopaan hihna vaihdettu", price = 2324 )
car2.addService(service1)
car2.addService(service2)
myCarStorage.addCar(car2)

car3 = Car(name="Amperi",model=datsun_100a,
               bought=datetime.datetime(1998, 11,13),price= 200, boughtplace="Auli Autoilija, Pori")
service1 = Service(date = datetime.datetime(1999,3,11),operation="Renkaat vaihdettu", price= 400 )
service2 = Service(date = datetime.datetime(2000,5,2),operation="Renkaat vaihdettu", price= 440 )
service3 = Service(date = datetime.datetime(2001, 12,4),operation="Jakopaan hihna vaihdettu", price = 1234 )
service4 = Service(date = datetime.datetime(2019, 12,4),operation="Pakoputki vaihdettu", price = 4321 )
car3.addService(service1)
car3.addService(service2)
car3.addService(service3)
car3.addService(service4)
myCarStorage.addCar(car3)
    
myCarStorage.print()

"""

code2="""
import sys
sys.path.insert(0, '../src')
from my_code import *

myCarStorage = CarStorage()

volvo_v70 = CarModel("Ruotsalainen", "V70")
porsche_cyaenne = CarModel("porsse", "Cayanne")
datsun_100a = CarModel("Nissan", "100A")

car1 = Car(name="Kaappakassi",model=volvo_v70,
               bought=datetime.datetime(2020, 1,1),price= 1400, boughtplace="Kuopion tori")
service1 = Service(date = datetime.datetime(2021,1,11),operation="Renkaanvaihto", price= 400 )
service2 = Service(date = datetime.datetime(2019, 4,4),operation="Oljyt vaihdettu", price = 2349 )
car1.addService(service1)
car1.addService(service2)
myCarStorage.addCar(car1)
    
myCarStorage.print()

"""


class TestCode(unittest.TestCase):
    def test_Python(self):
        #Test python program
        self.startTest()

        res=callpythoncode(code=code1)
        #print(res)

        print('Check output:')
        for eo in ['1234', '4321', 'Volovo', 'Porsse', '13.11.1998', '13.01.2021', 'Nissan' , 'Jakopaan hihna vaihdettu', 'Price:', 'Pori', 'Kauppakassi']:
            print('Is', eo, 'in output?')
            self.assertTrue(eo in res)


        print('1st test passed\n')
        res=callpythoncode(code=code2)
        #print(res)

        #print('Check output:')
        for eo in ['2349', 'Ruotsalainen', 'Oljyt vaihdettu', '04.04.2019']:
            print('Is', eo, 'in output?')
            self.assertTrue(eo in res)

        for neo in ['1234', 'Volovo', 'Porsse', 'Nissan' , 'Jakopaan hihna vaihdettu']:
            print('Is', neo, 'not in output?')
            self.assertFalse(neo in res)

        print('2nd test passed')
        print('Passed')
        self.endTest()

    def startTest(self):
        global started_tests
        started_tests=started_tests+1
        print('\nStart test', started_tests)

    def endTest(self):
        global completed_tests
        print('End test', started_tests)
        completed_tests=completed_tests+1


def completed():
    global completed_tests
    return completed_tests

def started():
    global started_tests
    return started_tests

