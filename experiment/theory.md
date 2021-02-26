## Java Method Overloading
In Java, two or more methods can have same name if they differ in parameters (different number of parameters, different types of parameters, or both). These methods are called overloaded methods and this feature is called method overloading. For example:

```sh
voidfunc() { ... }
voidfunc(int a) { ... }
floatfunc(double a) { ... }
floatfunc(int a, float b) { ... }

```

#### Why method overloading?
Suppose, you have to perform the addition of given numbers but there can be any number of arguments (let’s say either 2 or 3 arguments for simplicity).
In order to accomplish the task, you can create two methods sum2num(int, int) and sum3num(int, int, int) for two and three parameters respectively. 
The better way to accomplish this task is by overloading methods. And, depending upon the argument passed, one of the overloaded methods is called. This helps to increase the readability of the program.
#### How to perform method overloading in Java?
-	Overloading by changing the number of arguments
-	By changing the datatype of parameters

## Overloading by changing the number of arguments

```sh
classMethodOverloading {
private static void display(int a){
System.out.println("Arguments: " + a);
    }

private static void display(int a, int b){
System.out.println("Arguments: " + a + " and " + b);
    }

public static void main(String[] args) {
display(1);
display(1, 4);
    }
}

```

#### OUTPUT

```sh
Arguments: 1
Arguments: 1 and 4

```

##  By changing the datatype of parameters

```sh
classMethodOverloading {
    // this method accepts int
private static void display(int a){
System.out.println("Got Integer data.");
    }

    // this method  accepts String object
private static void display(String a){
System.out.println("Got String object.");
    }

```

#### OUTPUT

```sh
Got Integer data.
Got String object.

```
