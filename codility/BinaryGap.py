import math

def solution(N):
  binary = []
  binary.append([])
  preRemainder = 0
  encounterOne = False
  while(True):
    if(N % 2 == 0):
      if(encounterOne):
        binary[len(binary)-1].append(0)
    else:
      encounterOne=True
      if preRemainder == 0:
        binary.append([])
    preRemainder = N % 2

    N = N // 2
    if N/2 == 0:
      break

  return len(max(binary))

print(solution(15))
