import random
number = random.randint(-10, 10)
if number < 0:
    print(" {} is Negative".format(number))
elif number == 0:
    print(" {} is Zero".format(number))
else:
    print(" {} is Positive".format(number))
