def fibo(limit):
 num1=1
 num2=1
 temp=0
 sum=0

while sum<=4000000:
    temp=num1
    num1=num2
    num2=temp

    if temp %2 ==0:
        sum=sum+temp

        print(sum)
        
print(fibo(4000000))     
