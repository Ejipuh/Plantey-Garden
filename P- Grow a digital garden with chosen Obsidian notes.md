# Project: Grow a digital garden with chosen Obsidian notes
Hello! If you're here, it means you're interested in my project. In essence, I'm trying to make a fairly easy way to sync my Obsidian notes to [my website](ethanplante.org). This is part of my goal to teach as I learn.

If you see anything confusing here, or things that I'm not giving enough context for, I would really appreciate it if you let me know. I want to make this easy to read and understand so that it can be useful to others. Shoot me a Tweet or DM at [@plantey_tools](https://twitter.com/plantey_tools)

---
## How to Make Obsidian Sync to a GitHub-Based Digital Garden
*A work-in-progress section for how you can do this. The result of my labors that you can benefit from.*

The Folder Thing
1. Make a folder in Obsidian called "Garden" (or whatever you want to call it).

The Tech Upload Thing
3. Download a hefty handful of software
	- VS Code -- for writing code... (is this even necessary?)
	- Git -- for doing the upload thing
	- ...
4. figure out how to use it...
5. Download this or that a code snippet...
6. Windows task scheduler...




## How It's Going
This is where I'm publicly logging things.

---
*These were my general goals and completion criteria for this project.*

Objective: Craft a digital garden that syncs to my website from a folder in Obsidian.

Key results (KR)
1. Easy way to put an Obsidian note in a "public" folder
	-> Not perfect, but good enough for now. Ideally, I'd just be able to write #public in a note and that would do the trick, but I'll do it by hand until I figure out how to do that.
2. Regularly commit and push this folder to GitHub [[How to use GitHub]]
	- Basically, "commit and push" are programmer speak for adding things into a digital project. For my purposes, what it means is that anything that changed about the specific stuff in the "public" folder will change on the web, and any changes will be made. Think of it as copy-pasting the "public" folder from my computer to wherever my digital garden is on the web
	- For now, I got


### 11-10-2020

**Now: trying to figure out how to achieve the second goal...**

Stuff I figured out today...

Started with:
1. Tutorial in GitHub software
	- Not super clear. Their website was more helpful, since it clarifies terms
2. [Flancia's guide for different Roam-likes](https://flancia.org/mine/roam-likes/)

Something that bugged me was that these guides are mostly made for people who are already literate in tech stuff. Unclear Parts of Reading to Learn from ...
- I'm not a programmer, so it would be really helpful for 1) & 2) to have options to figure out exactly what the different terms and things mean. Even if I was, it would be more helpful to have a feature on the site that allowed readers to filter out content based on what you do or don't know. (A kind of [[Audience-adapted content]]. Btw, those double brackets will eventually link to other stuff, but for now )


Cool, so I finished my first completion checkpoint (KR1) for this. Now, to figure out how to make uploading this easier...
Maybe I should make an [AHK](https://www.autohotkey.com/) script to run this more easily, or  regularly: 


Basically, I'll be adapting this code [from Flancia](https://flancia.org/mine/roam-likes/)) to my own needs:
` 
	$ cd garden
	$ git commit -a -m "Some message saying what's in this commit."
	$ git push
	`

Ight, sweet. [Someone else has done this before](https://medium.com/@psicliffs/how-to-automate-your-git-workflow-97cbaae596a8). I love finding out that other people have already asked and thought about questions that I've come up with. Part of my goal with this is to make that more accessible--to bridge the gap between learning from others, thinking, and teaching. (more on that another time)


Anyways, back to it...

So my difficulty right now is that I'm trying to run a git bash script from the windows cmd line. nice. I need a break.

[vscode extension for ahk](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-autohotkey-plus)
my edits:
- removed git add --all
-

commentary:
`#!/bin/sh
cd 'C:\Users\eplan\Google Drive\3 - Resources\Obsidian Vaults\The Treehouse Network\Plantey-Garden'

timestamp() {
  date +"at %H:%M:%S on %d/%m/%Y"
}
git commit -a -m "Regular auto-commit $(timestamp)"
git push`

pro tip: you have to delete and read redirects in your htaccess file

yeehee

niiiiiiiiiice. I did it! I can commit and push from the command line now!

now for the hotkey. that's the big one for now. I'm using [this](https://www.autohotkey.com/docs/commands/Run.htm) guide to figure this out...

sick. nice. sweet. it had given me an error in vs code that the hotkey was invalid, but that was only because I put `#t ::` instead of `#t::`. (that means win-t does the stuff after ::, btw)	

oh wait. it conflicts with another shortcut. [back to the basics](https://www.autohotkey.com/docs/Hotkeys.htm) made it win-ctrl-c, since that's harder to hit accidentally.

woo! semi-automatic!

this. is. so. fun!

Now that I think of it, I could probably make an AHK script to tag the current note as `#public` and 

idk if I'll even need the automatic commit and push, but I'll leave it open. the manual tool is frictionless enough for now. (KR2 is good for now)

I'll call that a wrap for the day.

Bug: if you change the title, it breaks the go link from my site, since ethanplante.org/go/garden-progress is based on the name that the GitHub link has...

demonstration: I can edit this note, hit a little buttony thing, and sha-boom: there we are.

---
Next goal: Make my site editable on my local side (aka laptop) and to update when I commit and push so that I can avoid the problem of naming that I encountered. (Besides, I've been wanting to figure this out since I read about [Flancian's take on go links](https://flancia.org/mine/go-links/))

---
tags: #garden, #activeProject, #publicBuild

