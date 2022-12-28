"print stock prices as a csv string. see https://github.com/ranaroussi/yfinance for disclaimers"
import datetime
import sys
import yfinance as yf

def get_last_stock_price(stock, before):
    "get the last price of the stock before the given date"

    start = before - datetime.timedelta(days=7)
    tick = yf.Ticker(stock)
    history = tick.history(start=start, end=before)
    last_history = list(history.Close.items())[-1]

    last_date = last_history[0]
    last_price = last_history[1]

    return {
        'stock': stock,
        'date': last_date,
        'price': last_price,
    }

def main():
    "prints the last price in previous month for given stocks (from CLI arguments) as a csv string"

    first_day_of_current_month = datetime.datetime.now().date().replace(day=1)
    stocks = sys.argv[1:]
    print('date,stock,price')
    for stock in stocks:
        last = get_last_stock_price(stock, before=first_day_of_current_month)
        print(f'{last["date"].isoformat()},{stock},{last["price"]}')

if __name__ == '__main__':
    main()
