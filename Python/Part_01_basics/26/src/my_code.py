"""
26

Kuopio Birdwatchers needs a new monitoring database software. Your task is to implement class Observation.

class Observation contains following properties:
- species               - string
- number_of_birds       - integer (set 0 if <0)
- observation_time      - datetime
- position              - string
- additional_info       - string

The class contains a constructor, which sets values of all data members of the class.

Create getters and setters for each data members. Each getter prints message "getter", and each setter prints message "setter".

Implement __str__ method. The method outputs string containing class data fields space separated. For example string "crow 32 31.01.2020 Savilahti 'Wind, north 5m/s'" is created with following data:
- species="crow"
- number_of_birds=32
- observation_time=31st Janyary 2020
- position="Savilahti"
- additional_information="Wind, north 5m/s"

There are no requirements for the main program. You can, for example, create a test software to test functionality of the class.



"""
#Write class and imports here!
from datetime import datetime

class Observation:
    def __init__(self, species: str, number_of_birds: int, observation_time: datetime, position: str, additional_info: str):
        self._species = species
        self._number_of_birds = max(0, number_of_birds)  
        self._observation_time = observation_time
        self._position = position
        self._additional_info = additional_info

    @property
    def species(self):
        print("getter")
        return self._species

    @property
    def number_of_birds(self):
        print("getter")
        return self._number_of_birds

    @property
    def observation_time(self):
        print("getter")
        return self._observation_time

    @property
    def position(self):
        print("getter")
        return self._position

    @property
    def additional_info(self):
        print("getter")
        return self._additional_info

    @species.setter
    def species(self, value):
        print("setter")
        self._species = value

    @number_of_birds.setter
    def number_of_birds(self, value):
        print("setter")
        self._number_of_birds = max(0, value)

    @observation_time.setter
    def observation_time(self, value):
        print("setter")
        self._observation_time = value

    @position.setter
    def position(self, value):
        print("setter")
        self._position = value

    @additional_info.setter
    def additional_info(self, value):
        print("setter")
        self._additional_info = value

    def __str__(self):
        return f"{self._species} {self._number_of_birds} {self._observation_time.strftime('%d.%m.%Y')} {self._position} '{self._additional_info}'"

 




if __name__ == "__main__":
    #Write main program below this line
    observation = Observation("crow", 32, datetime(2020, 1, 31), "Savilahti", "Wind, north 5m/s")
    print(observation)

    observation.species = "korppi"
    print(observation.species)
    observation.number_of_birds = -5
    print(observation.number_of_birds)
    observation.position = "Helsinki"
    print(observation)