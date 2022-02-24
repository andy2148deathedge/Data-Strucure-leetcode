#include <stdio.h>

#define COMPARE(x,y) (((x) < (y)) ? -1: ((x) == (y) ? 0: 1))

// main
int main(void)
{
  int data[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  printf("target value is %d\n", data[binSearchRecursive(data, 7, 0, 9)]);

  return 0;
}

// function area
int binSearchRecursive (int list[], int targetNum, int left, int right) 
{
  int mid;

  if (left <= right) 
  {
    mid = (left + right)/2;
    printf("now search num is : %d\n", list[mid]);
    switch(COMPARE(list[mid], targetNum))
    {
      case -1: return binSearchRecursive(list, targetNum, mid+1, right);
      case  0: return mid;
      case  1: return binSearchRecursive(list, targetNum, left, mid-1);
    }
  }
  return -1;
}