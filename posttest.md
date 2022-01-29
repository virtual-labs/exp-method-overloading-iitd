## Post Test

Q1. To succesfully overload a method in java, the method names must be_____.<br>
A Same or different <br>
**B Different**<br>
C Encapsulation<br>
D None<br>

Q2. Which of the following statements is false regarding method overloading?<br>
**A static**<br>
B private<br>
C final<br>
D None of the above<br>

Q3. Java method overloading implements the OOPS concept ___.<br>
A Inheritance<br>
**B Polymorphism**<br>
C Encapsulation<br>
D None<br>

Q4.  What is the output of the following program?<br>

```

public class Test
{
    public int getData() //getdata() 1
    {
        return 0;
    }
    public long getData() //getdata 2
    {
        return 1;
    }
    public static void main(String[] args)
    {
        Test obj = new Test();
        System.out.println(obj.getData());   
    }
}
```
A 1<br>
B 0<br>
C Runtime error <br>
**D Compilation error**<br>

Q5. Java method overloading implements the OOPS concept ___.<br>
```
public class Test
{
    private String function(float i, int f)
    {
        return ("gfg");
    }
    private String function(double i, double f)
    {
        return ("GFG");
    }
    public static void main(String[] args)
    {
        Test obj = new Test();
        System.out.println(obj.function(1., 20));    
    }
}
```
**A GFG** <br>
B Compilation error<br>
C Runtime error <br>
D gfg<br>
