def collatz(number):
    if(number % 2 == 0):
        val = number//2
        print(val)
        return val
    elif (number % 2 ==1):
        val = (3*number+1)
        print(val)
        return val

def recursiveCollatz(number):
    if(number==1):
        print("Done")
    else:
        newNumber = collatz(number)
        recursiveCollatz(newNumber)

number = (input("Enter a number: "))
number = int(number)
recursiveCollatz(number)