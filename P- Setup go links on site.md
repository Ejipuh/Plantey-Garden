# P- Setup go links on site
`DB: once you're here, let me know...`

---
Objective: make a list of live go links that my site uses that regularly updates to my site

Key Results:
- [ ] easily edit go links
- [ ] make live list in Obsidian of go links you have ([vault]/go-links-list)
	- [ ] and on site (under /go/?)
- [ ] create go link when you upload digital garden

Relevance:
- if I can't do this, then the links in my posts will be limited and cut off from the rest of my digital garden
- lets me cite my garden spots...

---
## Log
22:14 -- Started.
Downloaded WinSCP as the software that can interact with files on my site.

23:01 -- Figured out how to edit .htaccess file from WinSCP to add a new redirect from /go/. (actually, that's where I set up the go link in my tweet for this)

(I'm tracking time as I go to document my efficiency.)

23:09 -- So I need to run WinSCP from the command line. Gladly, [this site](https://winscp.net/eng/docs/commandline) tells me how to do so.
It looks like what I need to do is start `C:\Program Files (x86)\WinSCP\WinSCP.exe` in the command line.

It's not letting me run that exe file in cmd. Time to review [the basics](https://www.digitalcitizen.life/command-prompt-how-use-basic-commands/)...

23:21 -- So the start (stuff above) didn't quite work. I think there's a way to open it in cmd...

23:26 -- Yes, alright. So, putting `start [the stuff from above]` doesn't actually do anything. I need to just put `winscp.exe [thing]`

23:42 -- This is some pretty cool stuff. I just learned that you can hold shift while right clicking on a file to copy its file path. Super helpful.

Here's the file path for WinSCP: `"C:\Program Files (x86)\WinSCP\WinSCP.exe"`

When I want to run the WinSCP console, I need to put `"C:\Program Files (x86)\WinSCP\WinSCP.exe" /console` in the command line. From there, I apply [this stuff](https://winscp.net/eng/docs/commandline).


Soon enough, I'll be able to edit my go link redirects from the command line...

...

23:57 -- I've been logging this on a text file as I'm going. I think you can run scripts from it. Speaking of scripts, I just moved on from the commandline article to [this one on scripting](https://winscp.net/eng/docs/scripting), since the first told me to.

So the first order of business is to use the bit of code I had above, and make a script from it...

Is `"C:\Program Files (x86)\WinSCP\WinSCP.com"` the same thing? The site describes them similarly...

---
Current Focus: Edit .htaccess with command line...

---
...
*Maybe it would be better to put the total time elapsed instead of the current time... I'll edit it afterwards.*