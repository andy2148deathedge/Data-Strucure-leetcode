#include <stdio.h>
#include <stdlib.h>


//※ define & data
struct listNode 
{
  int data;
  struct listNode *link;
};

typedef struct listNode *listPtr;

listPtr createList(int array[], int n);
void printList(listPtr ptr);

// ※ main
void main(void)
{
  int data[10] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

  
  listPtr head = createList(data, 10);
  
  printList(head);
  
}


// ※ function
listPtr createList(int array[], int n)
{// 給定一個data value 矩陣 及該矩陣大小n 並且return回串列頭指標ptr
  listPtr ptr, temp;
  int i;

  ptr = NULL;
  for (i = n-1; i >= 0; i--)
  { 
    temp = (listPtr)malloc(sizeof(struct listNode));
    temp->data = array[i];
    temp->link = ptr;
    ptr = temp;
  }
  return ptr;
}

void printList(listPtr ptr)
{//給一個串列指標，會依序印出其後連結的所有的串列值
  printf("im in\n");
  listPtr nowPtr = ptr;
  while (nowPtr != NULL)
  {
    printf("%3d", nowPtr->data);
    nowPtr = nowPtr->link;
  }
  // for(int i = 1; i<11; i++)
  // {
  //   printf("%3d", nowPtr->data);
  //   nowPtr = nowPtr->link;
  // }
  // printf("im out\n");
  // printf("%p\n", nowPtr->link);
}
