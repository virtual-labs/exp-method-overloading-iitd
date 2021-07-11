## Pre Test

Q1. Compile time polymorphism is also known as_____.<br>
A Method Overriding<br>
**B Method Overloading**<br>
C Method Rewriting<br>
D None of these<br>

Q2. What is the output of the below Java program with multiple methods?<br>

```
public class MethodOverloading2
{
  int info()
  {
    System.out.println("PLANE");
    return 0;
  }

  void info()
  {
    System.out.println("AIRPORT");
  }

  public static void main(String[] args)
  {
    MethodOverloading2 m = new MethodOverloading2();
    int a = m.info();
  }
}
```
A. PLANE<br>
B. AIRPORT<br> 
**C. Compiler error**<br>
D. None<br>


Q3. Can we overload the constructor of a class?<br>
**A Yes**<br>
B No<br>

Q4. To successfully overload a method in Java, the return types must be _____.<br>
A Same<br>
B Different<br>
**C Same but using superclass or subclass types also work**<br>
D None<br>

Q5. To successfully overload a method in Java, the argument-list or parameter-list must be _____.<br>
A Same<br>
**B Different**<br>
