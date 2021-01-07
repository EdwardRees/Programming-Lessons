#include <iostream>

using namespace std;

int sum(int a, int b)
{
  return a + b;
}
// function sum(a, b){}
// const sum = (a,b) => {}

// Method overloading
int sum(int a){
  int s = 0;
  for(int i=0; i<a; i++){
    s += i;
  }
  return s;
}


int main(void)
{
  int a = 10, b = 20;
  cout << a << "+" << b << "=" << sum(a, b) << endl;
  cout << "Summation of " << a << "=" << sum(a) << endl;
  return 0;
}