# Assigning design
1, class="" - using class makakagawa na tayo ng designing sa loob ng element tag natin.

2, npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

3, para makapaglagay tayo ng icon sa loob ng input type need lang natin gumawa ng div then mag assign tayo ng relative postion then sa paglagay ng icon gamit lang tayo ng i then maglkagay tayo ng position then na absolute saka natin mamanipulahin yung position ng icon natin using top, bottom, left, and right.

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

fas fa-envelope - email
fas fa-lock - password
fas fa-user - username
fas fa-phone - phone
fas fa-search - search



# Text (50 to 900 - shade colors)
1, text-color - syntax:(text-color-shade) - para malagyan natin ng color yung text natin need lang natin ng text minus sign color minus sign ulit then yung shade na natin example green meron tayong (50 to 900) shade of colors

2, text-align - syntax:(text-property) sa properties natin we have 4: left, right, center, and justify.

3, text-size - syntax:(text-size) properties 
sm, base, lg, and xl. Sm natin is small, base is meduim, lg is large, and xl extra large with the property of 1 to 9 sizing.

4, leading - syntax:(leading-numbers) funtion naman neto is spacing ng height between texts natin

# Background Color
1, bg - syntaxt(bg-color-shade) same lang with text color 

# Padding and Margin
Sa padding and margin need lang natin gumamit ng p and m.

Padding - py and px (funtion ng py padding height and px padding width)
1, pt, pb, pr, pl, and p. Dito yung p natin is padding na sya sa buong box natin top, bottom, left, and right mat padding na. Then kung gusto naman natin gumamit ng certain padding like left meron taoyng pt, pb, pl, and pr.

Margin - my and mx (function ng my padding height and mx margin width)
2, mt, mb, ml, mr, and m. Dito yung m natin is margin nasya nung buong border and body spacing natin pero kung gusto natin na gumamit ng certain margin like left meron tayong mt, mb, ml, and mr.

# Flex and Grid
Yung flex and grid is variant ng display natin.

1, flex - sa flex meron tayong:

- flex-cols or rows - function neto is pag gusto natin na set up yung pwesto ng mga boxes or ng mga items natin sa loob ng flex contianer naka column ba or naka row. 

- basis-numbers - funtion neto is width size ng box na nasa loob ng boxes container natin.

- space-x or y-numbers - funtion neto is spacing ng mga texts natin space-x is para sa width spacing and space-y para sa height spacing natin.

- justify-between, around, and center - funtion neto is yung boxes natin mababago ng position, example sa between ang function neto is may dalawa tayong boxes sa loob ng container mapupunta sila sa right and left. Sa around naman is yung 2 boxes natin magkakroon ng spacing sa left, center, and right. And last sa center yung 2 boxes natin mapupunta sa center kung gano kalaki yung container natin don magdedepende.

- items-between, around, and center - ganon lang din dito, same with justify

2, grid - sa grid meron tayong:

- grid-cols or rows grid-flow-cols or rows - function neto is pano gagwing nating pwesto sa mga boxes natin na nasa loob ng contianer. Ngayon pag yung contianer grid natin se-set daw natin sya into cols dapat meron tayong backup na grid-flow-rows ganon din sa pag rows naman yug position ng mga boxes natin mag grid-flowcols anman tayo para masunod natin yung exact position na gusto natin kalabasan ng mga boxes natin.

- cols-span-numbers - function neto kung may 3 boxes tayo sa loob then gusto natin sakupin yung 3 columns natin ng isang box nato gagmit lang tayo ng cols-span-3 para masakop nya yung buong 3 columns natin and 1 row.

- rows-span-numbers - funtion neto same with cols span sasakop din sya ng space depende sa ilalgay natin since may natitira pa tayong 2 rows sasakupin nanatin yon gagmit lang tayo ng rows-span-2 then masaskop na natin yung dalawang rows na natitira sa loob ng grid contianer natin.

# Borders and Rounded
Sa border and rounded deretsyo na nati sila gagamitin wala silang shortcut example need natin lagayan ng raduis box natin deretsyo na tayo sa rounded.

1, border-numbers - para malagyan natin ng border yung box natin lagay lang tayo ng border and number which is yung kapal ng border natin pwede rin tay omaglagay ng color usig border-color-number.

2, rounded-sm, base, lg, and xl 1-9. - heto naman para malagyan natin ng raduis yung border natin para magka-shape na parang pa circle need lang natin gumamit netong rounded sya yung mag sisilbing raduis natin

3, shadow - kung maglalagay tayo ng shadow deretsyo na rin natin ilalagay yung word na shadow para makapaglagay tayo ng shadow sa div natin or kung san man nati nsya ilalagay.

syntax:(shadow-sm, md, lg, and xl from 1-9)

4, animate - animate heto naman magkakroon tayo ng animation sa boxes natin or kung san man natin sya gustong gamitin.
Meron tayong 4 animate: spin, ping, bounce, and pulse.

# Positions 
Kung maglalagay tayo ng position ng div natin deretsyo nanatin gagamitin yung fixed, absolute, or relative.
1, fixed 
2, absolute
3, relative
4, Meron tayong pang ayos using: top, bottom, left, and right.


# Responsive
1, 
