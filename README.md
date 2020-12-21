# PasswordGenerator

This project creates a random password generator with input from the user. 

The process begins when the user clicks the "Generate Password" button. 

The user must provide the number of digits they would like for the password in a prompt box. If the number of digits entered is less than 8 or more than 128 the user is prompted to re-enter the length to a number within the range of 8 - 128. 

Once the number of digits/characters has been validated as within range the user sees a confirmation box asking if they would like the new password to contain special characters, an OK click includes special characters, a cancel click omits special characters. 

This is followed by a confirmation box asking if they would like numbers in their password, again an OK click includes numeric values in the password algorithim, cancel omits numeric values. 

The next confirmation is for upper case alpha characters, click OK to include upper case alpha and cancel omits upper case alpha.

The final confirmation box asks if lower case alpha characters are desired in the password. An OK click indicates yes, and cancel click is no. 

If cancel is clicked for all 4 password options the user sees an alert that informs them that they must select at least one special character, number, upper or lower case letter. After clicking OK on the alert the 4 password options are re-prompted.


Once the user has selected at least one option the new password is displayed in the text box.

## Possible Future Enhancements
1. Copy new password to clipboard.
2. Clear text box when Generate Password button is clicked. 


