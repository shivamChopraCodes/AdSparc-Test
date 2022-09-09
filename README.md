##JS Animation Wrapper
JS Animation Wrapper is an IIFE function for showing a footer in web page with color switching animation

##Working
CSS for classes are declared inside a style tag and this style tag is appeneded into DOM using JS.

User interactivity is tracked using visibilitychange event which has status either hidden or visible, depending upon user's interaction with browser's tab. 

The code is build using webpack in production mode and served on CDN.

The color of footer is changed using an interval for one second initalized on page mount.

Interval is cleared if user has minimized or navigated away from browser tab, but timer values is saved and a new interval gets initialized if user arrives back to the web page, hence increasing value of timer.

Timer is rest to 0, once it's value crosses 30. As timer resets, active color is also changed.

URL for the hosted webpage : https://631b7e99ce733f009466e09e--melodic-cupcake-e153ac.netlify.app/