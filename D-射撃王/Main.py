# https://atcoder.jp/contests/abc023/tasks/abc023_d

N = int(input())
balloon_list = [tuple(map(int, input().split())) for _ in range(N)]

def can_break_all_balloons(score):
  time_list = []
  for H, S in balloon_list:
    if(score < H):
      return False
    time_list.append((score-H)//S)
  
  time_list.sort()

  for i in range(N):
    if(i > time_list[i]):
      return False
  return True


def binary_search(low, high):
  while (high - low > 1):
    mid = (high + low) // 2
    if(can_break_all_balloons(mid)):
      high = mid
    else:
      low = mid
  return high

print(binary_search(0, int(1e+15)))
