 ***Notes for audio endpoint (used Merriam Webster Dictionary API)***

# Shape of JSON
hwi:
hw: "Mi*chael"
prs: Array(1)
0:
mw: "ˈmī-kəl"
sound:
audio: "bixmic01"
ref: "c"
stat: "1"

 An audio reference URL should be in the following form: https://media.merriam-webster.com/soundc11/[subdirectory]/[base filename].wav where [base filename] equals the value of audio, and [subdirectory] is determined as follows:

if audio begins with "bix", the subdirectory should be "bix",
if audio begins with "gg", the subdirectory should be "gg",
if audio begins with a number or punctuation (eg, "_"), the subdirectory should be "number",
otherwise, the subdirectory is equal to the first letter of audio.
// For example, the URL for the object {"audio":"3d000001","ref":"c","stat":"1"} in the entry "3-D" would be: https://media.merriam-webster.com/soundc11/number/3d000001.wav


# My endpoint 
https://media.merriam-webster.com/soundc11/bix/bixmic01.wav

***COLOR SCHEME***

- poppy #E63629 
- yarrow #EBB604 
- fawn #B3A190 
- teal #008080 