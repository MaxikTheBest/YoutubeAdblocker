# 🥇 GoldenAdblocker

A simple, effective, and completely free YouTube ad blocker.

 This tool works differently than typical blockers. It doesn't just hide or skip ads — it stops them from loading entirely.

---

##  Features

- Removes all YouTube ads, including front page ads, search ads, in-video ads, shorts ads, and more!  
- Easy on CPU and memory.  
- No data collection or cross-origin fetching.  
- Works on all extension-supported browsers.

---

## How to Install

**1. Install Tampermonkey**  
Download Tampermonkey or ViolentMonkey via Google search for your browser.

**2. Enable Required Browser Settings (except Firefox)**  
Go to the `about://extensions` URL in your browser.  
At the very top, enable `Developer mode`.  
Click `Details` next to the Tampermonkey extension, then scroll down to `Allow user scripts` and turn it on.

**3. Install GoldenAdblocker**  
Visit this link and press `Install` on the userscript installation page:  
https://ilomero.com/goldenadblocker/download.user.js

**4. Restart your browser**  
Close your browser and reopen it.

**5. Turn off any other adblockers for YouTube**  
Turn off all adblockers on YouTube (you can leave them on for other websites).

**6. Done! Test it**  
Refresh the YouTube page using the refresh button or `F5`, and it should be working.

---

##  How It Works

This project skips the usual adblocker filter approach. Instead, it uses the 'embedded' player via a proxy iframe, which bypasses ad filters completely.  

It's fast, stable, and won't mess with your video playback.

---

##  FAQ

**Q: Do I need to update this?**  
A: No, this updates automatically. If you aren’t getting the latest version automatically, hold `Ctrl` and press `F5` to force-reload the page.

**Q: Playlist skipping a few seconds**  
A: This is usually caused by a conflicting extension. Disable all other extensions, then enable them one by one to find the conflict.

**Q: I can't watch a specific video**  
A: Some videos won’t work because embedding is disabled by the uploader, it is age-restricted, or similar. Turn the script off for that video.

**Q: Extension compatibility**  
A: Most YouTube-related extensions aren’t compatible. This uses the 'embedded' version of the YouTube player. Extensions that only modify page style may work.

**Q: Different problem**  
A: Likely caused by a conflicting extension. Turn off all extensions, then enable them one by one until you find the conflict.

**Q: How to make it work on mobile or tablet devices?**  
A: You need a browser that supports extensions (like Safari on tablet) and a userscript manager, or install the script as an extension manually. Tutorials are available online.

**Q: Why is the code obfuscated?**  
A: To protect my work and prevent others from copying it. Obfuscation allows the project to safely grow on its main page.

**Q: I don't see the mini-player icon**  
A: The mini-player is not supported. Instead, it uses the 'picture-in-picture' browser API, which works even better.

**Q: Some functionalities are missing**  
A: Not all YouTube functionalities are included in the 'embedded' player version, but almost all have been remade. Exceptions include:  
- Autoplay plays the next video immediately, not after 8 seconds  
- No Sleep Timer option  
- No Ambient Mode option  
- No Next Video preview when hovering over the 'Next' button  
- No Mini-Player  
- Possibly more features

---

##  License

All rights reserved.  

You may not copy, modify, distribute, or use any part of this codebase or its contents without explicit permission.  

More details in the LICENSE file in this repository.

---

## Project Layout

- **README.md** - this file with project information  
- **LICENSE** - project’s license  
- **goldenadblocker/** - folder with all main files  
  - `active.txt` - defines if it is active (`yes`/`no`)  
  - `favicon.ico` - project’s icon  
  - `download.user.js` - the userscript itself  
  - `main.js` - the Ad-Blocker main logic
