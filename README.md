##JS Animation Wrapper
JS Animation Wrapper is an IIFE function for showing a footer in web page with color switching animation

##Working
Animation is initialized inside a style tag and appeneded into DOM using JS.

User interactivity is tracked using visibilitychange event which has satus either hidden or visible, depending upon user's interaction with tab. 

The code is build using webpack in production mode and served on CDN.

The color of footer changes in span of 30 secs linearly.

Animation is paused if user has minimized or navigated away from browser tab and animation gets resumed if user arrives back to the web page.

URL for the hosted webpage : https://gregarious-unicorn-d9d87a.netlify.app/