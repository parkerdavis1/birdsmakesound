---
title: "Slow Doves (and updates)"
date: "2023-03-22"
description: "Slow motion bird recordings and updates from the past few months"
---
<style>
    .marquee-container {
        display: inline-block;
        height: 1.2em;
        width: fit-content;
        overflow: hidden;
        position: relative;
    }

    .hidden {
        visibility: hidden;
    }

    .marquee-text {
        position: absolute;
        left: 0;
        width: 100%;
        line-height: 1em;
        animation: marquee 3s linear infinite;
    }

    @keyframes marquee {
        from {
            transform: translateY(100%);
        }
        to {
            transform: translateY(-100%);
        }
    }

    .globe::after {
        content: ' 🌎';
        animation: globe 2s linear infinite;
    }

    @keyframes globe {
        0% {
            content: ' 🌎';
        }
        33% {
            content: ' 🌍';
        }
        66% {
            content: ' 🌏';
        }
    }
</style>

Spring has sprung in Phoenix so I wanted to share a quick recording to mark the occasion, but first, a few updates on some things I've been working on the past few months.

### RainCrow

[RainCrow](https://raincrow.netlify.app/) is humming along. If you don't know what the heck I'm talking about or what that even is, I did a [Q&A with Jason Crotty of 10,000 Birds](https://www.10000birds.com/ebird-weather-raincrow.htm) that should clear things up. You might be saying, yes this sounds great but I want it to be in French and Spanish. Great news! Marie-Andreée Boucher-Beaulieu, an Ontario birder/developer, helped add internationalization and translated RainCrow into French while JC Paniagua from Spain contributed the Spanish translation. Many thanks to them! If you want to translate RainCrow into another language, [email me](mailto:parker@birdsmakesound.com). RainCrow across the <span class="globe">globe!</span>

### Rare Bird Alert

In other web development news, I made a [Rare Bird Alert](https://rarebird.parkerdavis.dev/) web app that builds on eBird’s API to allow you to peruse notable eBird sightings at a glance. *Parker, why? eBird already does this.* Yes, but not very efficiently, at least not in counties like Maricopa where birds flagged as "rare" are constant and plentiful. My app groups sightings by species or location, allowing you to get a general overview, then view details for the birds you're interested in. No more endless <span class="marquee-container"><span class="hidden" title="scrolling">scrolling</span><span class="marquee-text">scrolling</span></span> through the morning RBA emails. Bonus, it looks good, has a responsive dark mode for late night bird browsing, and I learned a lot making it.

### Birds making sound!

As I mentioned, spring has certainly sprung around these parts. Wildflowers are going off and the birds have a lot to say. A few days ago I recorded some binaural audio that capture a bit of the boisterousness.

The recording doesn’t capture an “untouched” “pristine” “natural” soundscape, it sounds like Phoenix – but in some ways an older, less developed Phoenix.  I was in the Chandler Heights neighborhood doing a CAP-LTER point count, surrounded by homes, a dirt lot, and a citrus orchard across the street. The general lack of traffic, airplanes, and (God help me) leaf blowers, evokes a time when the suburbs of Phoenix were separate towns and orchards and farms mixed with homes, before the great sprawling homogenization into sterile tan subdivisions.

There’s decent diversity in these three minutes. Gambel’s Quail, Eurasian Collared-Dove, Inca Dove, Mourning Dove, Gila Woodpecker, Verdin, Curve-billed Thrasher, Northern Mockingbird, House Finch, Lesser Goldfinch, Abert’s Towhee, Brown-headed Cowbird, Great-tailed Grackle, and Orange-crowned Warbler are all heard from. I especially love the sounds of the Inca Doves. Their *“no hope”* song evokes pleasant memories of summer visits to friend's houses as a child. Dig out your earphones (for the full binaural experience) and enjoy.

<figure>
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1472621623&color=%2386a1b0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    <figcaption>Recorded with Sennheiser AMBEO Smart Headset</figcaption>
</figure>

### Postlude: Chopped and Screwed

Sometimes my computer will unexpectedly play sounds at the wrong bit rate, slowing them down. This happened while I was preparing this post and I couldn’t resist sharing. Actually, I'm surprised I haven't shared any slowed down recordings yet because they are one of my favorite things. The familiar becomes strange and otherworldly. It can help tap into that mode of listening where every sound is a tactile and fascinating delight. Also, I like to imagine it gets us closer to hearing bird sounds as the birds hear them, more able to hear the minute details and intricacies. Keep an ear out for the Eurasian Collared-Dove wheezes around the 3:17 mark, they are impressive and hilarious.

<figure>
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1472630236&color=%2386a1b0&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
</figure>

If you want more slow birds in your life, Brad Balliett has a great [twitter account](https://twitter.com/BalliettBrad) dedicated to slow motion videos of birds. You’re welcome.
