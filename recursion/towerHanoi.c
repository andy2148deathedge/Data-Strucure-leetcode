#include <stdio.h>
#include <stdlib.h>
#define CIRCLE_NOW 3

int everyMove (int, char, char, char);

// main
int main(void) 
{
  everyMove(CIRCLE_NOW, 'A', 'B', 'C');
  
  return 0;
}

// function  input: 初始起點 s 初始中途點 m 終點 t 愈排的環數 circleNum
int everyMove (int circleNum, char s, char m, char t) 
{
  if (circleNum == 1) 
  { //剩最後一環情況下當前起始柱直接到目標柱
    printf("move circle 1 from %c to %c\n", s, t);
  }

  else 
  { //(1)先把n-1個搬到中途柱
    everyMove(circleNum - 1, s, t, m);
    
    //(2)該n盤(目前最大盤)搬至終點
    printf("move circle %d from %c to %c\n", circleNum, s, t);

    //(3)放在中途柱的n-1盤搬至初始點
    everyMove(circleNum - 1, m, s, t);
  }

  return 0;
}
