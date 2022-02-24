#include <stdio.h>

#define COMPARE(x,y) (((x) < (y)) ? -1: ((x) == (y) ? 0: 1))

int main(void)
{
  int data[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  printf("target value is %d\n", data[binSearch(data, 7, 0, 9)]);

  return 0; 
}

int binSearch (int list[], int targetNum, int left, int right)
{
  int mid;
  while (left <= right)
  {
    mid = (left + right)/2;
    printf("now search num is : %d\n", list[mid]);
    switch (COMPARE(list[mid], targetNum))
    {
      case -1: left = mid + 1;
              break;
      case  0: return mid;
      case  1: right = mid - 1;
              break;
    }
  }
  return -1;
}
