def collatz(number):
    if(number%2==0):
        print(number/2)
    if(number%2!=1):
        print(3*number+1)

def recursiveCollatz(number):
    if(number==1):
        print("1")
    number = collatz(number)
    recursiveCollatz(number)

number = int(input("Enter a number: "))
recursiveCollatz(number)