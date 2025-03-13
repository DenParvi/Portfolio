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

class TestCode(unittest.TestCase):
    def test_Python(self):
        #Test python program
        self.startTest()

        expected_output=[
            "+35844126783", "+358406334523", "12.01.2021", "Osta makkaraa",
            "+35845678533", "+3584007243", "I Love You!!"
        ]

        not_expected_output=[
            "Kotiin", "Muistitko", "13.01.2021"
        ]
        

        code="""
from datetime import datetime
import sys
sys.path.insert(0, '../src')
from my_code import SMSMessage, SMSUtils

messages=[]
dateFormat='%d.%m.%Y'
timeFormat='%d.%m.%Y %H:%M:%S'
messages.append(SMSMessage('+35844123123', '+35840632123', datetime.strptime('02.11.2021 11:38:15', timeFormat), 'Kotiin ja heti'))
messages.append(SMSMessage('+35844126783', '+358406334523', datetime.strptime('12.01.2021 23:45:34', timeFormat), 'Osta makkaraa'))
messages.append(SMSMessage('+35845678533', '+3584007243', datetime.strptime('12.01.2021 22:33:44', timeFormat), 'I Love You!!'))
messages.append(SMSMessage('+35844126783', '+358406334523', datetime.strptime('13.01.2021 00:55:01', timeFormat), 'Muistitko makkaran?!?!'))

#print('All messages:')
#for v in messages:
#    print(v)

print()
dt=datetime.strptime('12.01.2021', dateFormat)
todays_messages=SMSUtils.find_messages_dt(messages, dt)
print(datetime.strftime(dt, '%d.%m.%Y'),'messages:')
for v in todays_messages:
    print(v)
    
#print()
#sender='+35844126783'
#print('Sender', sender, 'messages:')
#SMSUtils.find_messages_sender(messages, sender)
        """

        print('Test SMSUtils.find_messages_dt')
        res=callpythoncode(code=code)
        
        for eo in expected_output:
            print('Is "'+eo+'" in output?')
            self.assertTrue(eo in res)
        for neo in not_expected_output:
            print('Is "'+neo+'" in output?')
            self.assertTrue(neo not in res)



        expected_output=[
            "+35844126783", "+358406334523", "12.01.2021", "Osta makkaraa",
            "+35844126783", " +358406334523", "13.01.2021", "Muistitko makkaran?!?!"
        ]

        not_expected_output=[
            "Love", "Kotiin"
        ]
        

        code="""
from datetime import datetime
import sys
sys.path.insert(0, '../src')
from my_code import SMSMessage, SMSUtils

messages=[]
dateFormat='%d.%m.%Y'
timeFormat='%d.%m.%Y %H:%M:%S'
messages.append(SMSMessage('+35844123123', '+35840632123', datetime.strptime('02.11.2021 11:38:15', timeFormat), 'Kotiin ja heti'))
messages.append(SMSMessage('+35844126783', '+358406334523', datetime.strptime('12.01.2021 23:45:34', timeFormat), 'Osta makkaraa'))
messages.append(SMSMessage('+35845678533', '+3584007243', datetime.strptime('12.01.2021 22:33:44', timeFormat), 'I Love You!!'))
messages.append(SMSMessage('+35844126783', '+358406334523', datetime.strptime('13.01.2021 00:55:01', timeFormat), 'Muistitko makkaran?!?!'))

#print('All messages:')
#for v in messages:
#    print(v)

#print()
#dt=datetime.strptime('12.01.2021', dateFormat)
#todays_messages=SMSUtils.find_messages_dt(messages, dt)
#print(datetime.strftime(dt, '%d.%m.%Y'),'messages:')
#for v in todays_messages:
#    print(v)
    
print()
sender='+35844126783'
print('Sender', sender, 'messages:')
SMSUtils.find_messages_sender(messages, sender)
        """

        print('Test SMSUtils.find_messages_sender')
        res=callpythoncode(code=code)
        
        for eo in expected_output:
            print('Is "'+eo+'" in output?')
            self.assertTrue(eo in res)
        for neo in not_expected_output:
            print('Is "'+neo+'" in output?')
            self.assertTrue(neo not in res)

        print('Passed\n')
        
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

