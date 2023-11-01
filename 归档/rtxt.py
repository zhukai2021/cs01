with open("test.txt", "r") as f:
    nr=f.readlines()
for n1 in nr:
    n1=n1.strip('\n')
    print(n1)