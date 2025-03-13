"""
25

MyCarStorage is an application which you can use to store vintage car collection data.

1) You can insert and delete cars
2) class Car contains data of a car
2) CarModel
3) class CarStorage contains Car objects

class Car properties:
- nickname 
- car model
- date of purchase
- list of services completed
- price
- place of acquisition

class CarModel properties:
- brand
- model

Example:
% python3 my_code.py 
The list of my sweet cars:

Name:  Old faithful
Brand: Volvo Model: V70 Bought: 01.01.2020
Service history: 
	Date: 11.01.2021 Operation: New tyres Price: 300
	Date: 04.03.2019 Operation: Oils changed Price: 234
Bought place:  Don't remember

Name:  Porky
Brand: Porsche Model: Cayanne Bought: 13.01.2021
Service history: 
	Date: 11.03.2021 Operation: New tyres Price: 1300
	Date: 04.12.2019 Operation: Exhaust pipe changed Price: 2324
Bought place:  Porche Center, Helsinki

Name:  A
Brand: Datsun Model: 100A Bought: 13.11.1991
Service history: 
	Date: 11.03.1992 Operation: New tyres Price: 400
	Date: 02.05.1995 Operation: New tyres Price: 440
	Date: 04.12.2001 Operation: Timing belt replaced Price: 500
	Date: 04.12.2019 Operation: Exhaust pipe repaired Price: 324
Bought place:  Auli Autoilija, Pori


You have to decide what type of checks properties need. Implement getters and setters.

"""

import datetime

#Insert your classes here

class CarModel:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

class Service:
    def __init__(self, date, operation, price):
        self.date = date
        self.operation = operation
        self.price = price

class Car:
    def __init__(self, name, model, bought, price, boughtplace):
        self.name = name
        self.model = model
        self.bought = bought
        self.price = price
        self.boughtplace = boughtplace
        self.service = []  

    def addService(self, service):
        self.service.append(service)

    def printInfo(self):
        print(f"Name: {self.name}")
        print(f"Brand: {self.model.brand} Model: {self.model.model} Bought: {self.bought.strftime('%d.%m.%Y')}")
        print("Service history:")
        for service in self.service:
            print(f"\tDate: {service.date.strftime('%d.%m.%Y')} Operation: {service.operation} Price: {service.price}")
        print(f"Bought place: {self.boughtplace}")
        print()

class CarStorage:
    def __init__(self):
        self.cars = []

    def addCar(self, car):
        self.cars.append(car)

    def removeCar(self, car):
        self.cars.remove(car)

    def print(self):
        print("The list of my sweet cars:\n")
        for car in self.cars:
            car.printInfo()


        

if __name__ == '__main__':
    #Main program, dont modify!
    myCarStorage = CarStorage()

    volvo_v70 = CarModel("Volvo", "V70")
    porsche_cyaenne = CarModel("Porsche", "Cayanne")
    datsun_100a = CarModel("Datsun", "100A")

    car1 = Car(name="Old faithful",model=volvo_v70,
               bought=datetime.datetime(2020, 1,1),price= 1200, boughtplace="Don't remember")
    service1 = Service(date = datetime.datetime(2021,1,11),operation="New tyres", price= 300 )
    service2 = Service(date = datetime.datetime(2019, 3,4),operation="Oils changed", price = 234 )
    car1.addService(service1)
    car1.addService(service2)
    myCarStorage.addCar(car1)

    car2 = Car(name="Porky",model=porsche_cyaenne,
               bought=datetime.datetime(2021, 1,13),price= 11200, boughtplace="Porche Center, Helsinki")
    service1 = Service(date = datetime.datetime(2021,3,11),operation="New tyres", price= 1300 )
    service2 = Service(date = datetime.datetime(2019, 12,4),operation="Exhaust pipe changed", price = 2324 )
    car2.addService(service1)
    car2.addService(service2)
    myCarStorage.addCar(car2)

    car3 = Car(name="A",model=datsun_100a,
               bought=datetime.datetime(1991, 11,13),price= 200, boughtplace="Auli Autoilija, Pori")
    service1 = Service(date = datetime.datetime(1992,3,11),operation="New tyres", price= 400 )
    service2 = Service(date = datetime.datetime(1995,5,2),operation="New tyres", price= 440 )
    service3 = Service(date = datetime.datetime(2001, 12,4),operation="Timing belt replaced", price = 500 )
    service4 = Service(date = datetime.datetime(2019, 12,4),operation="Exhaust pipe repaired", price = 324 )
    car3.addService(service1)
    car3.addService(service2)
    car3.addService(service3)
    car3.addService(service4)
    myCarStorage.addCar(car3)

    #Print all cars with information
    myCarStorage.print()
