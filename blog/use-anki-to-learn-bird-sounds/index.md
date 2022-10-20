---
title: How to learn bird sounds with Anki
date: "2022-10-09"
coverImage: "images/anki/hero-grackle.jpg"
description: "Using batch media imports, you can quickly create custom Anki decks to efficiently learn bird sounds."
---

<a href="#howto"><button>Skip to "How To" section</button></a>

<br>

There are [many resources](/blog/2020-09-16-getting-started-merlin#recs) available for those interested in ear birding and learning bird sounds. I really like [Larkwire](https://www.larkwire.com/) but you are limited to the built-in sounds. Shuffling mp3s works for some people but I have never had much lasting success with this method.

Enter [Anki](https://apps.ankiweb.net/). Anki is free flashcard software that is built around the concept of spaced repetition – basically an efficient way of spacing active recall to aid in memory retention.

One of the best features of Anki, for our purposes, is the ability to embed media into your flash cards, specifically sound files. The "front" of the card can be an audio file that automatically plays while the "back" of the card would be the name of the bird. You can create "decks" of specific species you want to study and, for example, finally nail down all the different calls of western hummingbirds.

My initial excitement at the discovery of Anki was tempered by the tedious process of having to create an individual flashcard for every sound file you want to include in your deck. For example: to study a group of four species, each with 5 sound files, would mean creating 20 individual cards. Imagine having to study 100 species...

**BUT!** as I recently found out, the Anki community has created [numerous "add-ons"](https://ankiweb.net/shared/addons/2.1) that add functionality to Anki. The [Media Import](https://ankiweb.net/shared/info/1531997860) add-on allows you to automatically create a deck of flashcards from a folder of sound files. By default it creates a card for each sound file, with the audio on the front and the file name on the back, so if your sound files have the bird's name in the title, you're good to go!

Anki is apparently pretty popular with medical and law students, but I've never heard of birders using it for learning bird sounds. For when you want to use your own sound files, I think it is a solid option for the ear birder to have in their arsenal. 

So lets get to it!

<br>

<h2 id="howto">How to batch import bird sounds into Anki</h2>

Here are the steps we'll be covering:
- [Installing Anki](#installing-anki)
- [Installing Media Import Add-on](#media-import)
- [Gathering sound files](#sound-files)
- [Batch import files to create a study deck](#batch-import)
- [Anki basics](#anki-basics)
- [Onward!](#onward)

<br>

<h3 id="installing-anki">Installing Anki</h3>

First [download Anki](https://apps.ankiweb.net/) from their website by clicking on the big blue download button.

{% image "images/anki/anki-download1.png", "Anki Homepage Screenshot", "small-image img-center" %}

This scoots you down to where you choose your operating system and start the actual download.

{% image "images/anki/anki-download2.png", "Anki Download Screenshot", "small-image img-center" %}

Installation will vary by operating system but on Mac you just drag the app into your applications folder.

{% image "images/anki/anki-install2.png", "Anki Mac Installation Screenshot", "small-image img-center" %}

When you open Anki, it will look something like this:

{% image "images/anki/anki-home2.png", "Anki Homescreen Screenshot", "small-image img-center" %}

<br>

<h3 id="media-import">Installing Media Import Add-on</h3>

Now we need to install the Media Import Add-on, which can be found [here](https://ankiweb.net/shared/info/1531997860). In the **Download** section there is a download code box which at the time of writing is:  1531997860

{% image "images/anki/batch-media-download.png", "Add-on Download Screenshot", "small-image img-center" %}

In Anki, go to the **Tools** menu -> **Add-ons** -> **Get Add-ons...** paste in the code and click **OK**.

{% image "images/anki/install-add-on.png", "Install Add-on Screenshot", "small-image img-center" %}

After it installs you'll need to close and reopen Anki for the add-on to be enabled.

<br>

<h3 id="sound-files">Gathering Sound Files</h3>

You can use whatever sound files you want! Personally, I like using the [Cornell Guide to Bird Sounds](https://www.macaulaylibrary.org/guide-to-bird-sounds/) as a starting point which can then be supplemented with sounds from [Xeno-Canto](https://xeno-canto.org/).

Once you have the sound files you want to study together, gather them into a folder on your computer.

{% image "images/anki/sound-files.png", "File List Screenshot", "small-image img-center" %}

<!-- <aside>

**A note about file names**: When you import a media file into Anki it is copied into Anki's media folder (for Mac this is in ~/Library/Application Support/Anki2/*(username such as "User 1")*/collections.media). Because all of the media for the entire app is in a single folder, you need to make sure that every sound file you import has unique file name from all other files you've imported into Anki before.

</aside> -->

<br>

<h3 id="batch-import">Batch import files to create a study deck</h3>

Now when you go to the **Tools** menu in Anki, click on the new option **Media Import...**

For **Media directory**, click on **browse** and select the folder with your sound files. There are some options you can explore but I use the default *Basic* note type with Front: *Media* and Back: *File Name*. Click **OK** to create the new deck.

{% image "images/anki/import-sounds.png", "Import Sound Files Screenshot", "small-image img-center" %}

A message pops up explaining that it created a new deck from your files. There will be a new deck named **MediaImport** on the Anki home screen. You can then rename the deck by clicking the cog button to the right of the name, and **rename**.

{% image "images/anki/rename-deck.png", "Anki Rename Deck Screenshot", "small-image img-center" %}

Also in the cog button, you should select **Options** and select *Random* for **Insertion Order**.

{% image "images/anki/deck-options.png", "Anki Deck Options Screenshot", "small-image img-center" %}

<br>

<h3 id="anki-basics">Anki basics</h3>

Now you are ready to study some bird sounds! 

From the home screen click on the name of the deck you want to study, then click the **Study Now** button. 

It should start playing a random sound. Once you think you know what it is, press **spacebar** to show the back of the card which should be the sound file name.

{% image "images/anki/back-card.png", "Example back of card screenshot", "small-image img-center" %}

You can then choose how confident you are that you know that sound by clicking one of the four buttons at the bottom. If you did not know the sound, you can click **Again** (or press **1** on your keyboard) and Anki will play the sound for you again in less than a minute. If you got it right but don't feel confident you can click **Hard** (or press **2** on the keyboard). If you got it right but wouldn't mind being tested again soon you can click **Good** (or press **3** on your keyboard). If you feel like you know it really well, you can click **Easy** (or press **4** on your keyboard) and Anki will not test you on that sound for 4 days.

As you keep working with the deck, it will test you more often on the sounds that you are less confident about. This way you will spend much more time working on sounds that you don't yet know instead of confirming easy sounds that you do know.

<br>

<h2 id="onward">Onward!</h2>

Other ideas for enhancing the Anki card experience would be to install the [Batch Editing](https://ankiweb.net/shared/info/291119185) add-on then add images and spectrograms to your cards.

I've got project ideas on the backburner that would optimize the learning of bird sounds even more but I'll leave that for another post.

Happy Birding!