# Making a list of go links
## Objective: 
Make a live list of go links that my site uses that regularly updates to my site.
## Key Results:
- [ ] AutoHotKey shortcut can add a go link for an uploaded note
- [ ] Functionally edit .htaccess from command line
- [ ] Each note title in a folder (plantey-garden)
- [ ] make live list in Obsidian of go links to garden posts
	- [ ] and on site (under /go/)
- [ ] create go link when you upload digital garden

## Relevance
- Enables me to share go links to my evergreens right after uploading them to the garden
- Enables a good index for my [[Go links]](https://ethanplante.org/go)
	- See [this page](https://flancia.org/mine/go-links/) for what makes go links powerful
- if I can't do this, then the links in my posts will be limited and cut off from the rest of my digital garden

## Current Focus:
- [ ] Figure out how to edit a text file from cmd
	- [ ] Probably will need Python or other language
	- [ ] 
- [ ] figure out how to delete .htaccess from cmd
- [ ] figure out how to upload that text file as .htaccess



---
# Log
- [ ] Make a separate note for this
## 11-11-2020
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

Yes, but this one actually stays within a single cmd window, so that's nice.

00:18 -- Aaaaaaand, I found the meat of the matter. [This article covers automation](https://winscp.net/eng/docs/guide_automation).

00:25 -- How do I edit the .htaccess file? Do I need to download it, edit, then reupload?

*I realize that this is kind of like a more removed version of live-streaming. Interesting. Perhaps I could make another twitter account for project updates / garden updates*

00:37 -- Alright. {Bite-sized goal: *find* the .htaccess file with cmd.

00:54 -- Since the last update, a friendly fellow named Alex P. gave me a notification on [one of the tabs I had open](https://www.hostwinds.com/guide/creating-editing-htaccess-file/).

1:04 -- So it turns out that the next step was typing in `cd /public_html` and then 'get  .htaccess'. } (<-- this means that I figured out my bite-sized goal.) {My problem now is figuring out where it's downloaded and how to edit it with a script...

1:20 -- Alex says that I might need to extend this to a .NET assembly. I assume this is so that it can run files in a more complex programming language than just command line.

1:33 -- Alex: "After reviewing all the relevant information, I would suggest writing a PowerShell script, that incorporates the WinSCP executable to download the remote file, then remove. Afterwards, edit the file from shell with another command like Add-Content, then pass the file through to WinSCP once more for the upload. I would be interested in further research for this project, I will contact you later tonight possibly."

2:20 -- I'm ending work here for today. Alex mentioned other possibilities than PowerShell (like using the server's Linux capabilities), but I'll look at those tomorrow. This is still an important project (see [Relevance](https://ethanplante.org/go/go-links-setup#relevance)), and I'm not sure how much progress I've actually made toward the goal. Still enjoyed figuring this out, though.

## [[November 25th, 2020]]
ilmeschinocalunniato on the Athens Discord server warned me against making the .htaccess file public. Instead, I should make a list that uploads as .htaccess. This clarifies my goals a bit...



---
*Maybe it would be better to put the total time elapsed instead of the current time. Next time, I might just have a start and end time.*

---
tags: #publicBuild, #activeProject 
go link: https://ethanplante.org/go/go-links-setup