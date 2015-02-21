# Romans

## Convert a roman numeral to a number

Write this function:

    function fromRomanNumeral(str) { }

Such that when called like this:

    fromRomanNumeral('VII'); // it returns 7
    fromRomanNumeral('IV'); // it returns 4


## Convert a numer to roman numeral

Convert a number from a roman numeral

    function toRomanNumeral(num) { }

Such that when called like this:

    toRomanNumeral(3); // returns 'III'
    toRomanNumeral(756); // returns 'DCCLVI'


## Here are the rules for roman numerals

This assignment was tots stolen from the ACM highschool problem sets, 2012
found here: http://users.cis.fiu.edu/~irvinek/hscomp/2012/

I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

Numbers are formed by combining the symbols and adding their values.
III is 3 or three ones; XII is ten followed by 2 ones or 12;
CCCVIII would be 308.

Note that you cannot have more than three identical letters in a row (unless
that letter is M). Four (4) is not represented by IIII, instead, you
represent it by IV, which is more literally read as five subtracted by 1.
This greatly simplifies large numerical expressions. To elaborate:

- I can be placed before V and X to form 4 and 9 respectively (i.e. IV = 4 and IX = 9)
- X can be placed before L to form 40 (XL) and before C to form 90 (XC)
- C can be placed before D to form 400 (CD) and before M to form 900 (CM)
- There is nothing higher represented than M, so something like 4000 would be MMMM
