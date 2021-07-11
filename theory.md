### Java Method Overloading

- If a class has multiple methods having same name but different in parameters, it is known as Method Overloading.
- If we have to perform only one operation, having same name of the methods increases the readability of the program.
- Suppose you have to perform addition of the given numbers but there can be any number of arguments, if you write the method such as a(int,int) for two parameters, and b(int,int,int) for three parameters then it may be difficult for you as well as other programmers to understand the behavior of the method because its name differs.

#### You can create same method name with different argument list example:

```
voidfunc() { ... }
voidfunc(int a) { ... }
floatfunc(double a) { ... }
floatfunc(int a, float b) { ... }

```
---

### Why method overloading?

Suppose, you have to perform the addition of given numbers but there can be any number of arguments (let’s say either 2 or 3 arguments for simplicity).
In order to accomplish the task, you can create two methods sum2num(int, int) and sum3num(int, int, int) for two and three parameters respectively. 
The better way to accomplish this task is by overloading methods. And, depending upon the argument passed, one of the overloaded methods is called. This helps to increase the readability of the program.

---


### Advantage of method overloading
- Method overloading increases the readability of the program.
- We don’t have to create and remember different names for functions doing the same thing.

---

### How to perform method overloading in Java?
-	Overloading by changing the number of arguments
-	By changing the datatype of parameters

#### 1. Overloading by changing the number of arguments
Java program to demonstrate working of method overloading in Java. If overloading was not supported by Java, we would have to create method names like sum1, sum2, … or sum2Int, sum3Int, … etc.


```
public class Sum {

	// Overloaded sum(). This sum takes two int parameters
	public int sum(int x, int y)
	{
		return (x + y);
	}

	// Overloaded sum(). This sum takes three int parameters
	public int sum(int x, int y, int z)
	{
		return (x + y + z);
	}

	// Overloaded sum(). This sum takes two double parameters
	public double sum(double x, double y)
	{
		return (x + y);
	}

	// Driver code
	public static void main(String args[])
	{
		Sum s = new Sum();
		System.out.println(s.sum(10, 20));
		System.out.println(s.sum(10, 20, 30));
		System.out.println(s.sum(10.5, 20.5));
	}
}
```

#### OUTPUT

```
30
60
31.0
```

#### 2.  By changing the datatype of parameters

```
classMethodOverloading 
{
    // this method accepts int
private static void display(int a)
{
System.out.println("Got Integer data.");
}

// this method  accepts String object
private static void display(String a)
{
System.out.println("Got String object.");
}

```

#### OUTPUT

```
Got Integer data.
Got String object.
```
---

### Can we overload java main() method?
Yes, by method overloading. You can have any number of main methods in a class by method overloading. But JVM calls main() method which receives string array as arguments only. Let's see the simple example:

```
class TestOverloading4
{  
public static void main(String[] args)
{
System.out.println("main with String[]");
}  
public static void main(String args)
{
System.out.println("main with String");
}  
public static void main()
{
System.out.println("main without args");
}  
}  
```

#### OUTPUT

```
main with String[]
```







