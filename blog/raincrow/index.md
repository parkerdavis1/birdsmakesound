---
title: RainCrow
date: "2022-09-17"
coverImage: "blog/raincrow/images/snowsage.jpeg"
description: "RainCrow is a web app to retrieve historical weather observations"
---
Hello again.

A lot has happened since I last posted here. Also, *here* is different than when I last posted here. Long story short, I've been learning to code and I rebuilt this website. Welcome!

I also made a web app called [RainCrow](https://raincrow.netlify.app/). It automatically retrieves historical weather observations for eBird checklists. After tinkering with it on and off for a few months, I recently shared it with the eBird community and I've gotten a lot of good feedback. And a lot of users. It was almost immediately hitting the limit of 1000 free weather API requests a day.  It feels good to put something out there that people find useful. If you're interested in the more technical aspects of creating RainCrow you can read about it [over here](https://parkerdavis.dev/projects/ebird-weather/) (*I made that website too!*).

{% image "blog/raincrow/images/raincrow.png", "RainCrow screenshot" %}

You may be asking: *Why would I make an app that gathers weather observations for eBird checklists?*

Mostly for fun. I like putting weather observations in my checklists and appreciate when others do too. Some of the best birding outings are out of cellphone coverage so you can't just open your weather app to get the temperature. I wanted to be able to pull the weather stats after returning from the field.

Weather observations help fill out the picture that a checklist conjures. I like knowing about the blistering heat or dank damp that the people and birds experienced during a checklist. To paraphrase [Ted Floyd](https://www.aba.org/how-to-know-the-birds-by-ted-floyd/), every checklist is an opportunity for storytelling.

The weather observations have practical value as well; it can help you suss out the reasons for peculiar abundance or absence of species.

A personal example to demonstrate: In late February 2020, I was visiting Nell in Laramie, WY. She was busy with grad school so I had plenty of time to bird, peruse eBird data, and try to build up my Albany county list. I noticed that Lapland Longspurs had a bump in local detections around that time of year so I figured I'd look through previous eBird records to see where people had found them.

{% image "blog/raincrow/images/lalo-barcharttrim.png", "Lapland Longspur bar chart for Laramie" %}

Of particular interest was a [2017 observation at Beef Unit](https://ebird.org/checklist/S34793813). 100 Lapland Longspurs(!), 750 Horned Larks and a Golden Eagle at a place called **Beef Unit**? Obviously I had to check this spot out.

Beef Unit was...not as exciting as I had hoped. I don't remember much; there were some buildings, barns and farm equipment. There may have been some cows but there weren't a memorable amount of cows. At the time of our visit this University of Wyoming facility appeared udderly (*sorry*) lacking in activity – bird, bovine, or otherwise. Our checklist over the course of 25 minutes was as follows:
[3 Rock Pigeon, 2 Common Raven, 1 Horned Lark, 6 House Sparrows](https://ebird.org/checklist/S64833277). It was hard to reconcile how these two lists could be so wildly different, same location, both in the final weeks of February. *What happened on February 25, 2017 at Beef Unit?*

<div class="med-width">
{% image "blog/raincrow/images/beefunit.png", "University of Wyoming Beef Unit" %}
</div>

Turns out there was a snowstorm.

Asking around, we found out from the local keepers of bird knowledge (aka friendly birders) that during and after snowstorms were the best times to look for Lapland Longspurs. Birds generally have high metabolisms and when it is cold and windy, especialy so. A <1oz bird needs to replenish its energy stores as their metabolism goes into furnace mode so when the grasslands surrounding Laramie are covered in snow, the seed eaters must go searching. Their numbers concentrate in areas with bare ground which, due to heat retention, snow plows, and salt, is often near human habitation. The stark difference between our experience of Beef Unit and the 2017 checklist made sense once we knew the context.

After figuring out the weather piece of the puzzle, there was, lucky us, a big snowstorm rolling in on the last day of my visit to Laramie. In the afternoon when the storm was kicking into high gear, Nell and I idled in low, heater on, cruising a dirt road on the north edge of town. Peering out the car windows we found a flock of Horned Larks and picked through them until we found a bird that was not like the others.

<div class="video-container med-width fade-in">
    <video controls autoplay muted loop loading="lazy">
        <source src="../../videos/lalo-snow.mov"
                    type="video/mp4">
    </video>
    <figcaption>Lapland Longspur (front) and Horned Lark (back) foraging in the blustery snow.</figcaption>
</div>

The contextual weather information helped us prioritize when and where to search for Lapland Longspurs and resulted in seeing a new Life Bird for both of us. Hooray!

If we had tried to piece it together without the help of the local birding community, looking up historical weather records for eBird checklists would have been a cumbersome process. Well hey, now there is RainCrow which makes it super simple. It also makes adding these observations to your own checklists easy.

<div class="quote-largetext">
❄️<br>
Light snow - snow<br>
Temperature: 22°F<br>
Wind: Gentle breeze<br>
Wind Direction: E-NE<br>
Cloud Cover: 98-100<br>
Humidity: 81-83<br>
Sunrise: 6:36am<br>
Sunset: 5:53pm<br>
Weather generated by <a href="https://raincrow.netlify.app/" target="_blank">RainCrow</a>
</div>
<figcaption style="margin-top: 0;">RainCrow weather return for <a href="https://ebird.org/checklist/S65342160">our checklist</a></figcaption>


You can see (and hear) from the video that the wind was *a little* stronger than a "Gentle breeze". When you paste the RainCrow results in your checklists they're easy to tweak. While weather APIs feel like magic, you have to treat the returned weather data with a bit of caution. They can't retrieve the *exact* local weather conditions everywhere at all times. Recording your own coarse on-the-ground weather observations is still valuable but when you need a backup, RainCrow is there for you.

Thanks for checking back in! You can sign up for email updates below. There is no comment section anymore – send me an email instead, I'd love to hear from you →
[parker@birdsmakesound.com](mailto:parker@birdsmakesound.com)
