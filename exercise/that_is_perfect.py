'''
# Sample code to perform I/O:

name = input()                  # Reading input from STDIN
print('Hi, %s.' % name)         # Writing output to STDOUT

# Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
'''

# 1 !=0 NO prime
# 2 !=1 NO prime
# 3 != 1 NO prime
# 4 != 1+2 NO not prime
# 5 !=1 NO prime
# 6 = 1+2+3 YES not prime
# 7 != 1 NO prime
# 8 != 1+2+4 NO not prime
# 9 != 1+3 NO not prime
# 10 != 1+2+5 not prime
# 11 != 1 NO prime

# primeはかならずNO
# primeじゃなくてもNOのやつがある
# 約数を列挙して総和をもとめればいい？

# Write your code here
T = int(input())
N_list = []


import math


def sum_of_divisors(n):
    divisors = []
    sum_divisors = 0

    for k in range(1, int(math.sqrt(n)) + 1):
        if n % k == 0:
            sum_divisors += k
            divisors.append(k)
            if(n/k!=k) and (n/k!=n):
                sum_divisors+=int(n/k)
                divisors.append(int(n/k))
    # print(divisors)
    # print("sum:",sum_divisors)
    return sum_divisors
             
def is_prime(n):
    if n == 1:
        return True

    for k in range(2, int(math.sqrt(n)) + 1):
        if n % k == 0:
            return False

    return True

for i in range(T):
    N = int(input())
    # print(N," is prime?:", is_prime(N))
    
    if(is_prime(N)):
        print("NO")
    elif(sum_of_divisors(N) == N):
        print("YES")
    else:
        print("NO")


