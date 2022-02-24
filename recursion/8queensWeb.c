#include <stdio.h>

int Queenes[8]={0},Counts=0;

int Check(int line,int list){
    int index;
    for (index=0; index<line; index++) {
        int data = Queenes[index];
        if (list==data) 
            return 0;
        else if ((index+data)==(line+list))
            return 0;
        else if ((index-data)==(line-list))
            return 0;
    }
    return 1;
}

void print(){
    int line;
    for (line = 0; line < 8; line++){
        int list;
        for (list = 0; list < Queenes[line]; list++)
            printf("0");
        printf("#");
        for (list = Queenes[line] + 1; list < 8; list++){
            printf("0");
        }
        printf("\n");
    }
    printf("================\n");
}

void eight_queen(int line){//line表示從第line行開始放棋子
    int list;//list表示放在該行的第list格
    for (list=0; list<8; list++) {//對於該line行的每個list都要做的list++迴圈
        if (Check(line, list)) {//用check函式檢查該line的list是否符合題目設定(直行橫列及對角不能也有棋)
            Queenes[line]=list;//若符合check會return1導致此行觸發，並將紀錄Queens的第line行元素value紀錄為list，表示該line行的棋子放在第list格
            if (line==7) {//若是此時line放到第7個了，表示已8個queen都放完
                Counts++; //則表示完成一種放法，將方法計數器 count +1
                print(); // 並且印出該種放法
                Queenes[line]=0; //將當前擺放棋盤清空
                return; //跳出if結構
            }
            eight_queen(line+1);//(遞迴呼叫自己)並且針對下一個line先擺放的方式來做同樣的步驟
            Queenes[line]=0;//?
        }
    }
}

int main() {
    eight_queen(0);
    printf("Eight Queens has %d Solutions!",Counts);
    return 0;
}