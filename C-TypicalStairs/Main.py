from functools import reduce
import decimal

mod = 1000000007


def fibonacci(n):
  decimal.getcontext().prec = 31898
  return round(
      (
          decimal.Decimal(((1 + 5 ** 0.5) / 2)) ** n
          - decimal.Decimal(((1 - 5 ** 0.5) / 2)) ** n
      )
      / decimal.Decimal(5 ** 0.5)
  ) % mod


def Main():
  stepCount, brokenCnt = map(int, input().split())
  brokenStepList = [int(input()) for _ in range(brokenCnt)]

  # print(stepCount)
  # print(brokenStepList)

  if (len(brokenStepList) == 0):
    print(fibonacci(stepCount+1) % mod)
    return

  caseList = []
  for i in range(len(brokenStepList)):
    stepLength = 0
    if i == 0:
      stepLength = brokenStepList[i]
    else:
      stepLength = brokenStepList[i]-brokenStepList[i-1] - 1
      if stepLength == 0:
        return print(0)
    caseList.append(fibonacci(stepLength))
  caseList.append(fibonacci(stepCount-brokenStepList[-1]))
  print(reduce(lambda x, y: x*y % mod, caseList) % mod)


Main()

