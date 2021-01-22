import numpy as np 

# print('See what 2021 has for you :)')
# print()
# print()
# li_en = [b'\xc8\x81\x97\x97\x89\x95\x85\xa2\xa2',
#  b'\xe6\x85\x81\x93\xa3\x88',
#  b'\xd4\x81\x99\x99\x89\x81\x87\x85',
#  b'\xd5\x85\xa6@\xc3\x81\x99',
#  b'\xd5\x85\xa6@\xc8\x96\xa4\xa2\x85']


# print(b'\xc8\x81\x97\x97\x89\x95\x85\xa2\xa2'.decode(encoding='cp037'))
# print(b'\xe6\x85\x81\x93\xa3\x88'.decode(encoding='cp037'))
# print(b'\xd4\x81\x99\x99\x89\x81\x87\x85'.decode(encoding='cp037'))
# print(b'\xd5\x85\xa6@\xc8\x96\xa4\xa2\x85'.decode(encoding='cp037'))

# x = '2020 are you serious'.encode('utf-8')
# #x= int('2020',base=8)
# print(x)

x = list(range(10))
y = list(range(10,20))
z = ((a,b) for a in x for b in y)
print(z.next())