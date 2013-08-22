Use this tool to find your top 25 Facebook friends!

NOTE: This only works in chrome!

1. Be logged into facebook. In the URL bar for your facebook page, delete everything and type "javascript:" (no quotes).

2. Copy/paste this:
```
script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'https://dl.dropbox.com/u/17903009/topfriends.js';
document.head.appendChild(script);
```

3. Hit enter, and wait 30 seconds. A list should pop up with their names.

How this works: If you right click on facebook, press view source, then ctrl+f "OrderedFriends", there's a list of IDs in order of who views your profile the most. If you take that ID, then paste it on the end of "http://www.facebook.com/", thats the person with that ID. This just automates the process and creates a list.

Unfortunately:

It's very slow, since it has to load 25 facebook pages to get their names.

Doesn't work in firefox, since they don't allow javascript in the URL bar. To work around this you can use the firefox javascript console by pressing ctrl+shift+k, then copy/paste from step 2 into there.

This might not be who views your profile the most. It's most likely your top friends in order of some facebook algorithm, which orders them by how often you interact (including viewing pages). Still, it's very interesting. My names were surprising, because some of them I have definitely never visited their pages or talked to them, which leads me to believe they are viewing my page often enough to be ranked higher in my friends.


Nothing malicious. Only gets JQuery from google and loads facebook pages.