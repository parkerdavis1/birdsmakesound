---
title: 'How to use Anki to learn bird sounds'
date: '2022-10-25'
coverImage: 'images/anki/hero-grackle.jpg'
description: 'Using batch media imports, you can quickly create custom Anki decks to efficiently learn any bird sound.'
---

<a href="#how-to-install-anki-and-batch-import-sound-files"><button style="padding: 5px 15px;">Skip to "How To" section</button></a>

Maybe you're new to birding or traveling somewhere with unfamiliar birds. Maybe you have a season of point counts coming up. Maybe you're just tired of all your ear birder pals finding all the birds before you do.

You've just gotta learn those bird sounds.

[As I've written before](/blog/2020-09-16-getting-started-merlin#recs), there are many resources available to learn bird vocalizations. When you want to test yourself using your own sound files, however, it seems the options are limited. Shuffling mp3s _works_ but I've always found the experience wanting and haven't had much lasting success.

Enter [Anki](https://apps.ankiweb.net/). Anki is free flashcard software that is built around the concept of [spaced repetition](https://en.wikipedia.org/wiki/Spaced_repetition). Basically, as you keep working with it, you'll be tested more often on things you are less confident about instead of endlessly confirming things that you do. Efficiency!

For our purposes, one of the best features of Anki is the ability to embed media into your flash cards. The "front" of the card can be an audio file (or photo or video) while the "back" can be the name of the bird. You can create "decks" of specific species you want to study.

My initial excitement at the discovery of Anki was tempered by the tedious process of having to create an individual flashcard for every sound you want to include in your deck. To study a group of four species, each with 5 sounds, would mean manually creating 20 individual cards. And if you have to study 100 species . . .<span style="font-size: 1.5rem">🫠</span>

...**_BUT!_** I recently found out the Anki community has created [numerous "add-ons"](https://ankiweb.net/shared/addons/2.1) that add functionality to Anki. The [Media Import](https://ankiweb.net/shared/info/1531997860) add-on allows you to automatically create a deck of flashcards from a folder of sound files. By default it creates a card for each sound file with audio on the front and the file name on the back, so as long as your sound files have the bird's name in the title, you're good to go!

Anki is popular for language learning, med/law school, and other memorization-intensive activities, but I've never heard of birders using it for learning bird sounds. The interface doesn't _wow_ you and it takes a bit of setting up (hence this walk-through), but once you start using it to study sounds it has an uncluttered look and feel with a nice keyboard interface. There are also mobile versions of the app with the ability to sync your data across devices.

With a winning combination of flexibility and efficiency, birders of any experience level would benefit from having Anki in their toolbox.

So lets get to it!

## How to install Anki and batch import sound files

<section class="nav-box">

<!-- prettier-ignore-start -->

-   [How to install Anki and batch import sound files](#how-to-install-anki-and-batch-import-sound-files)
    -   [Installing Anki](#installing-anki)
    -   [Installing Media Import Add-on](#installing-media-import-add-on)
    -   [Gathering Sound Files](#gathering-sound-files)
    -   [Batch import files to create a study deck](#batch-import-files-to-create-a-study-deck)
    -   [Anki basics](#anki-basics)
-   [Onward](#onward)

</section>

### Installing Anki

First go to [https://apps.ankiweb.net/](https://apps.ankiweb.net/) and click on the big blue download button.

{% image "images/anki/anki-download.png", "Anki Homepage Screenshot", "small-image img-center" %}

This scoots you down to where you choose your operating system and start the actual download.

{% image "images/anki/anki-download2.png", "Anki Download Screenshot", "small-image img-center" %}

Installation will vary by operating system but on Mac you just drag the app into your applications folder.

{% image "images/anki/anki-install2.png", "Anki Mac Installation Screenshot", "small-image img-center" %}

When you open Anki, it will look something like this:

{% image "images/anki/anki-home2.png", "Anki Homescreen Screenshot", "small-image img-center" %}

### Installing Media Import Add-on

Now we need to install the **Media Import** Add-on which can be found [here](https://ankiweb.net/shared/info/1531997860). After perusing the introduction, scroll down to the **Download** section and copy the given download code.

> Update from 2025: there is now [Media Import 2](https://ankiweb.net/shared/info/129299120) for more recent versions of Anki

{% image "images/anki/batch-media-download.png", "Add-on Download Screenshot", "small-image img-center" %}

In Anki, go to the **Tools** menu → **Add-ons** → **Get Add-ons...** paste in the code and click **OK**.

{% image "images/anki/install-add-on.png", "Install Add-on Screenshot", "small-image img-center" %}

After it installs you'll need to close and reopen Anki for the add-on to be enabled.

### Gathering Sound Files

You can use whatever sound files you want – that's the beauty! Personally, I like using the [Cornell Guide to Bird Sounds](https://www.macaulaylibrary.org/product/the-cornell-guide-to-bird-sounds-us-and-canada/) as a starting point which you can then supplement with sounds from [Xeno-Canto](https://xeno-canto.org/) and your own personal stash.

Once you have the sound files you want to study, copy them into a folder on your computer.

{% image "images/anki/sound-files.png", "File List Screenshot", "small-image img-center" %}

### Batch import files to create a study deck

Go to the **Tools** menu in Anki, click on the newly added **Media Import...**

For **Media directory** click on **browse** and select the folder with your sound files. There are some options you can explore but I use the default _Basic_ note type with _Media_ on the front and _File Name_ on the back. Click **OK** to create the new deck.

{% image "images/anki/import-sounds.png", "Import Sound Files Screenshot", "small-image img-center" %}

A message pops up letting you know it created a new deck. The deck will be named **MediaImport** on the Anki home screen. You can rename the deck by clicking the cog button to the right of the name, then **rename**.

{% image "images/anki/rename-deck.png", "Anki Rename Deck Screenshot", "small-image img-center" %}

Also in the cog button, you should select **Options** and select _Random_ for **Insertion Order**.

{% image "images/anki/deck-options.png", "Anki Deck Options Screenshot", "small-image img-center" %}

<aside>

Note: All media is copied into a single master Anki media folder which means two things:

1. You don't need to keep the original folder of sounds after importing.
2. All files you import into Anki should have unique filenames.

</aside>

### Anki basics

Now you are ready to study some bird sounds!

From the home screen, click on the name of the deck you want to study, then click the **Study Now** button.

It should start playing a random sound. Once you think you know what it is, press **space bar** to show the back of the card which will be the sound file name.

{% image "images/anki/back-card.png", "Example back of card screenshot", "small-image img-center" %}

After you reveal the answer there are four buttons to indicate your confidence for that sound. There are times above each button indicating how long before Anki will test you on the sound again. You can click them or use your keyboard to press **1-4** for **Again, Hard, Good,** and **Easy**. Then on to the next sound!

## Onward

You can create as many decks as you want with any variation of sounds you can dream up, whether it be groups of similar sounding calls, overviews of specific habitats, or loudest shriekers only.

To enhance the Anki card experience you could install the [Batch Editing](https://ankiweb.net/shared/info/291119185) add-on to quickly add images and spectrograms to your audio cards. You could use Anki to test yourself on visual identification e.g. import a set of photos of hawks in flight.

Anki is a good free tool with a lot of flexibility. That being said, for the task of learning bird sounds there is still room for improvement and I've got project ideas simmering that would optimize learning bird sounds even more but... I'll leave that for another post.

Let me know your favorite ways to learn bird sounds → [parker@birdsmakesound.com](mailto:parker@birdsmakesound.com)
