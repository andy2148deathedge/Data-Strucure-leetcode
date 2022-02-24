// 用stack實作迷宮問題
#include <stdio.h>
#include <stdlib.h>

// pre declare
typedef struct
{
  int ver;
  int hor;
} vector;

typedef struct
{
  int row;
  int col;
  int dir;
} route;

void path(void);
route pop(void);
void push(route postion);
void printPath(int row, int col);
void printMark();

// Data
#define FALSE 0
#define TRUE 1

#define EXIT_ROW 6
#define EXIT_COL 6

int maze[8][8] =
{{1,1,1,1,1,1,1,1},
 {1,0,0,0,0,0,1,1},
 {1,0,1,1,1,1,0,1},
 {1,0,1,1,1,1,0,1},
 {1,0,1,1,1,1,0,1},
 {1,0,1,1,1,1,0,1},
 {1,1,0,0,0,0,0,1},
 {1,1,1,1,1,1,1,1}};

int mark[8][8] =
{{1,1,1,1,1,1,1,1},
 {1,0,0,0,0,0,0,1},
 {1,0,0,0,0,0,0,1},
 {1,0,0,0,0,0,0,1},
 {1,0,0,0,0,0,0,1},
 {1,0,0,0,0,0,0,1},
 {1,0,0,0,0,0,0,1},
 {1,1,1,1,1,1,1,1}};

vector move[8] = 
{
  {-1,0}, //北
  {-1,1}, //東北
  {0,1},  //東
  {1,1},  //東南
  {1,0},  //南
  {1,-1}, //西南
  {0,-1}, //西
  {-1,-1} //西北
};

route stack[100];
int top = 0;

// main
void main(void)
{
  path();
}


//function
void path(void)
{
  int row, col, nextRow, nextCol, dir, found = FALSE;
  mark[1][1] = 1; stack[0].row = 1; stack[0].col = 1; stack[0].dir = 0;
  route nowPosition; // 用route資料型態變數nowPosition紀錄現在位置

  while (top > -1) 
  {
    nowPosition = pop();
    row = nowPosition.row; col = nowPosition.col; dir = nowPosition.dir;
    if (dir == 8)
      mark[row][col] = 0;

    while (dir < 8) 
    {// 以dir方向移動
      // 先以還沒有走過的dir來算出輪到要走的下一點
      nextRow = row + move[dir].ver; // 定義下一個row座標
      nextCol = col + move[dir].hor; // 定義下一個col座標

      if (nextRow == EXIT_ROW && nextCol == EXIT_COL)
        //到達終點,先加dir之後印路徑
        {
          ++dir;
          printPath(row, col);
        }
      else if (!maze[nextRow][nextCol] && !mark[nextRow][nextCol]) 
      { //下一點符合條件準備往前走，先記錄當前位置
        nowPosition.row = row; nowPosition.col = col; nowPosition.dir = ++dir;
        push(nowPosition);

        // 進到下一步，
        row = nextRow, col = nextCol; dir = 0;
        if (row == 2 && col == 1)
          printMark();
        mark[nextRow][nextCol] = 1;
      }
      else 
      {
        ++dir;
        // if (row == 1 && col == 1 && dir == 8)
        //   found = TRUE;
        if (dir == 8)
          mark[row][col] = 0;
      }; //若沒有到達終點；也沒有符合條件的下一點
    }
  }

  // if (found) 
  // {
  //   printPath(row, col);
  //   found = FALSE;
  // }
  // else printf("The maze doesn't exist a way out.\n");
}

route pop(void) //輸入一個目前stack 最上位址索引，返回該最上route資料, 之後top-1
{
 return stack[top--];
}

void push(route postion) //將top+1 並且用stack紀錄上一點的資料
{
  // stack[++top].row = postion.row;
  // stack[top].col = postion.col;
  // stack[top].dir = postion.dir;
  stack[++top] = postion;
}

void printPath(int row, int col) 
{
  printf("The way out is:\n");
  printf("Row Col\n");
  int i;
  for (i = 0; i <= top; i++)
    printf("%2d%5d\n", stack[i].row, stack[i].col);
  printf("%2d%5d\n", row, col);
  printf("%2d%5d\n", EXIT_ROW, EXIT_COL);
}

void printMark() 
{
  for (int i = 0; i < 8; i++)
  {
    for (int j = 0; j < 8; j++)
      printf("%2d", mark[i][j]);
    printf("\n");
  }
  printf("\n");
}