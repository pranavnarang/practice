import random

number = random.randrange(10)
guess = input("Guess a number between 1 and 10: ")
guess = int(guess)

while (guess != number):
    if(guess<number):
        print("Your guess was too low!")
    if(guess>number):
        print("Your guess was too high!")
    guess = input("Guess again: ")
    guess = int(guess)

if (guess == number):
    print("Yes! The number was: " + str(number))