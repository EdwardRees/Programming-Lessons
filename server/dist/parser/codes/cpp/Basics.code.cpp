// start: include
#include <iostream>
// end: include

// start: namespace
using namespace std;
// end: namespace

// start: main
int main(void)
{
  // start: variables and types
  char name[20] = "Edward";
  int age = 20;
  bool is_student = true;
  // end: variables and types

  // start: printing variables
  cout << name << endl
       << age << endl
       << is_student << endl;
  // end: printing variables

  // start: math
  int sums = age + 20;
  int divs = age / 20;
  int mul = age * 20;
  int sub = age - 20;
  int mod = age % 3;

  cout << sums << endl
       << divs << endl
       << mul << endl
       << sub << endl
       << mod << endl;
  // end: math

  // start: conditional
  if (age % 2 == 0)
  {
    cout << "Even age" << endl;
  }
  else
  {
    cout << "Odd age" << endl;
  }
  // end: conditional

  // start: iteration
  int sum = 0;
  for (int i = 0; i < 11; i++)
  {
    sum += i;
  }
  cout << "Sum of 1 to 10 = " << sum << endl;
  // end: iteration

  return 0;
}
// end: main