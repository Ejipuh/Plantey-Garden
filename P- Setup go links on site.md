# P- Setup go links on site
Objective: make a list of live go links that my site uses that regularly updates to my site

Key Results:
- easily edit go links
- make live list of go links you have
- create go link on upload of digital garden

Relevance:
- if I can't do this, then the links in my posts will be limited and cut off from the rest of my digital garden
- lets me cite them off-hand

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

...
*Maybe it would be better to put the total time elapsed instead of the current time... I'll edit it afterwards.*