"""
27

Create a software to evaluate value of a stock portfolio. The main program contains list of stocks, where user can add new items. After adding each item, the software asks "More stocks (y/n)=?"? If user answers y the software asks data of a new stock and inserts the stock into the list. If the user answers n, the software asks expected return of investment-% (roi), and number od years to wait before selling the stocks. 

Create class Stock, which contains properties:
- name
- price (>0, price of one stock)
- quantity (>0, number of stocks)

Class Stock contains methods:
- print_value(roi, years), which prints current value and expected value increase (in this order)
- Static method compute_increase(roi, value), which computes increase of value in one year

In main program, compute expected value of the portfolio with given parametrers.

Example:
% python3 my_code.solution.py
Company name: Nokia
Price: 10
Amount: 1000
More stocks (y/n)? y

Company name: Fortum
Price: 0.9
Amount: 400 
More stocks (y/n)? n

Expected ROI-%: 4
Years: 3

Nokia 1000 10.0
Stock value will be 11248.64, and profit 1248.64

Fortum 400 0.9
Stock value will be 404.95, and profit 44.95

Portfolio value will be 11653.59
"""
#Write class and imports here!
class Stock:
    def __init__(self, name: str, price: float, quantity: int):
        if price <= 0:
            raise ValueError("Price must be greater than 0")
        if quantity <= 0:
            raise ValueError("Quantity must be greater than 0")
        
        self.name = name
        self.price = price
        self.quantity = quantity

    def print_value(self, roi: float, years: int):
        current_value = self.price * self.quantity
        future_value = current_value * (1 + roi / 100) ** years
        profit = future_value - current_value
        print(f"{self.name} {self.quantity} {self.price}")
        print(f"Stock value will be {future_value:.2f}, and profit {profit:.2f}")

    @staticmethod
    def compute_increase(roi: float, value: float) -> float:
        return value * (1 + roi / 100)
        
if __name__ == "__main__":
    #Write main program here
    portfolio = []
    
    while True:
        name = input("Company name: ")
        price = float(input("Price: "))
        quantity = int(input("Amount: "))
        
        stock = Stock(name, price, quantity)
        portfolio.append(stock)
        
        more = input("More stocks (y/n)? ")
        if more.lower() == 'n':
            break

    roi = float(input("Expected ROI-%: "))
    years = int(input("Years: "))
    
    total_value = 0

    for stock in portfolio:
        stock.print_value(roi, years)
        total_value += stock.price * stock.quantity * (1 + roi / 100) ** years

    print(f"Portfolio value will be {total_value:.2f}")