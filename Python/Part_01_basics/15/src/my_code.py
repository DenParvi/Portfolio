# -*- coding: utf-8 -*-

"""
15

1) Ask language to use.
  - 0=Finnish
  - 1=English
  - Default is Finnish -> If answer is not 0 or 1 Finnish will be used

2) Days of week in Finnish are: maanantai (=Monday), tiista, keskiviikko, torstai, perjantai, lauantai, and, sunnuntai (=Sunday)

3) Create a list containing days of week starting from Monday in both languages

4) Create a dictionary, where you store 4 measurements of amount of rain on each day between Monday and Friday.

5) Ask measurement data from the user, and fill dictionary

6) Finally, print average amount of the rain on each day 


Example:

Please choose language (0 = suomi, 1 = english): 1
Monday 1. : 3
Monday 2. : 2
Monday 3. : 4
... Cut rows ...
Friday 2. : 6
Friday 3. : 5
Friday 4. : 3

Monday 3.5 mm
Tuesday 3.2 mm
Wednesday 4.0 mm
Thursday 4.2 mm
Friday 4.8 mm
"""
days_fin = ["maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai", "sunnuntai"]
days_eng = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

choice=int(input('Please choose language (0 = suomi, 1 = english): '))

if choice==1:
    days=days_eng
else:
    days=days_fin

weather = {day: [] for day in days[:5]}
for day in weather:
    for i in range(4):
        rain = float(input(f"{day} {i + 1}. : "))
        weather[day].append(rain)

for day, measurements in weather.items():
    average_rain = sum(measurements) / len(measurements)
    print(f"{day}: {average_rain:.1f} mm")