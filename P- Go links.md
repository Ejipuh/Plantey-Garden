# Making a list of go links

## Current Focus: Updating Redirect List from Text File
Working on updating implicit redirect list...
- Learning JavaScript templating with [this tutorial](https://medium.com/@1sherlynn/javascript-templating-language-and-engine-mustache-js-with-node-and-express-f4c2530e73b2).

Where I left off last / Current holdup: try running `node app.js` from garden/hello. It says the mustache thing is missing, so check the code for app.js and hello.html. Also, check the documentation that you have saved to make sure you setup the library correctly.
- also, check this out for phase 2: [For - Looping commands - Windows CMD - SS64.com](https://ss64.com/nt/for.html)
---
## Objective: 
Make a live list of go links from my site uses that regularly updates to https://ethanplante.org/go. (If you don't know what a go link is, check that link out. They're pretty much like social bookmarks from my site to somewhere on the web.)


## Relevance
- Reduces friction to setting up go links
	- Enables me to share go links to my evergreens right after uploading them to the garden
- Enables a good index for my [[Go links]](https://ethanplante.org/go)
	- See [this page](https://flancia.org/mine/go-links/) for what makes go links powerful

---
## Key Results (KR):
1. A go link exists for each note in [Obsidian Database]/Plantey-Garden (subfolder for where I hold my Obsidian notes) based on title unless otherwise specified
2. New go link destinations are automatically updated...
3. Wikilinks on site are represented by go links, to allow me to change where things are hosted
4. Make a list of where I've used the go links? (If outside of digital greenhouse/garden)

## Flexible Strategy (FS)
I. For updating implicit redirect list...
- [ ] Learn how to edit text files with code and templating...
- [ ] Figure out how to run this from cmd
- [ ] Add the start of this to AHK

II. For making live list of go links...
- [ ] Use STH to upload the text file
- [ ] figure out how to delete .htaccess from cmd
- [ ] figure out how to upload that text file as .htaccess

III. For updating the go link destination...
- [ ] Whenever a new github link is updated:
	- [ ] a redirect is created in the text file
	- [x] GitHub note for this is updated	
	- [ ] Site is updated

IV. For making wikilinks clickable...
- [ ] Edit a text file with a script to add a new go link based on markdown format





# Additional Goals
- [ ] Auto-convert wikilinks in Obsidian to good URIs on site (go link conversion from title)
- [ ] Old titles should redirect to new go links (double bounce... but will this be bad for optimization? maybe file them all as equal variables or update all to the newest one or something...)
	- [Cool URIs don't change](https://www.w3.org/Provider/Style/URI) (thanks, @Flancia for putting this on your garden) 
	- [Evergreen note titles are like APIs](https://notes.andymatuschak.org/Evergreen_note_titles_are_like_APIs)
		- actually, meshes the metaphor! I need a name for this system...
	- [ ] Each wikilink page has a go link for it






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

## [[December 3rd, 2020]]
Arya from the Interhackt Discord server helped with my issues and sent me [this tutorial](https://medium.com/@1sherlynn/javascript-templating-language-and-engine-mustache-js-with-node-and-express-f4c2530e73b2). Learning JS will help me with other projects, but if this is too complex, I'll just use Python, seeing that I have some experience with it.

Downloaded [[Node.js]], which I learned allows you to run JavaScript without using the web. Sweet.

Downloading npm, which lets me download packages with Node.js.

Alright, after going over that tutorial slowly about 4 times now and intermittently searching up confusing words on Google, I've determined that I need someone else to explain things to me. 

## [[December 4th, 2020]]
Consulting Discord once more.

I might be able to figure this out. Following [this tutorial for setting up an app using VS Code and Node JS](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial), I managed to make a little snippet that can run from cmd. In other words: *I can run javascript scripts from the command line now.* Time to learn JS basics...

So Leonard Pauli helped me out a bit. He made an html file that walked me through the basics of replacing things in JS.

### 21:05
- I'm finding that HTML isn't super hard to pick up. It's like markdown, but more complicated.
- I'm trying to figure out how to actually get the page to display the replacement with the mustache template setup.

### 21:58
- Apparently you can run shortcuts to the Windows command line. If you hit Win-R, type cmd, and hit enter, it opens the command line. But if you put `cmd /k [command]`, it opens the command line after invisibly running that command with it. Pretty cool. So what I setup is a command called `doskey` that lets you make shortcuts to run commands from smaller words or phrases in the command line. What I did is set one up to navigate to my Plantey-Garden file from where cmd normally opens. The command looks like this: `'doskey garden=cd "C:\Users\[rest of the path to my Obsidian database]\Plantey-Garden"'`. The final result is for me to run `cmd /k [that long thing]` from the Win-R box.
	- Of course, I realized afterward that I could've just typed this into the Win-R box: `cmd /k cd "C:\Users\[rest of the path to my Obsidian database]\Plantey-Garden"`, which would put me at the same spot. Nice, self.

### 10:18
- That's a day.



---
tags: #publicBuild, #activeProject, #public 

go link: https://ethanplante.org/go/go-links-setup