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

Key results
- Easy way to put an Obsidian note in a "public" folder
	-> Not perfect, but good enough for now. Ideally, I'd just be able to write #public in a note and that would do the trick, but I'll do it by hand until I figure out how to do that.
- [ ] Regularly commit and push this folder to GitHub [[How to use GitHub]]
	- Basically, "commit and push" are programmer speak for adding things into a digital project. For my purposes, what it means is that anything that changed about the specific stuff in the "public" folder will change on the web, and any changes will be made. Think of it as copy-pasting the "public" folder from my computer to wherever my digital garden is on the web

### 11-10-2020

**Now: trying to figure out how to achieve the second goal...**

Stuff I figured out today...

Started with:
1. Tutorial in GitHub software
	- Not super clear. Their website was more helpful, since it clarifies terms
2. [Flancia's guide for different Roam-likes](https://flancia.org/mine/roam-likes/)

Something that bugged me was that these guides are mostly made for people who are already literate in tech stuff. Unclear Parts of Reading to Learn from ...
- I'm not a programmer, so it would be really helpful for 1) & 2) to have options to figure out exactly what the different terms and things mean. Even if I was, it would be more helpful to have a feature on the site that allowed readers to filter out content based on what you do or don't know. (A kind of [[Audience-adapted content]]. Btw, those double brackets will eventually link to other stuff, but for now )


Cool, so I finished my first completion checkpoint for this. Now, to figure out how to make uploading this easier...
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


pro tip: you have to delete and read redirects in your htaccess file

yee


stuff I did
...Today, I setup the basic flow of Obsidian -> GitHub...



might need
- might need [this](https://gist.github.com/damc-dev/eb5e1aef001eef78c0f4#file-runbashscript-bat) later, but I'll come back if so...



---
Next goal: Feed in the GitHub garden to my personal site

---
tags: #garden, #activeProject, #publicBuild
