---
title: RainCrow
date: "2022-09-15"
coverImage: "blog/2022-09-15-raincrow/images/snowsage.jpeg"
---
Hello again.

A lot has happened since I last posted here. Also, here is different than when I last posted here. Long story short, I've been learning to code and I rebuilt this website. Welcome!

I also made a web app called [RainCrow](https://raincrow.netlify.app/). It automatically retrieves historical weather observations for eBird checklists. I've been tinkering with it on and off for a few months now, but I'm pretty pleased with where its at now. I recently shared it with the eBird community and was almost immediately hitting the free limit of 1000 weather API requests a day. I've gotten a lot of good feedback and it feels good to put something out there that people find useful. If you're interested in the more technical aspects of creating RainCrow you can read about it [over here](https://parkerdavis.dev/projects/ebird-weather/) (I made that website too!).

{% image "blog/2022-09-15-raincrow/images/raincrow.png", "RainCrow screenshot" %}

You may be asking: *Why would I make an app that gathers weather observations for eBird checklists?*

Mostly for fun. I like putting weather observations in my checklists and appreciate when others do too. Often the best birding outings are out of cellphone coverage so you can't just open your weather app to get the temperature. I wanted to be able to pull the weather stats after returning from far afield.

Weather observations help fill out the picture that a checklist conjures. I like knowing about the blistering heat or dank damp that the people and birds experienced during a checklist. As [Ted Floyd](https://www.aba.org/how-to-know-the-birds-by-ted-floyd/) says, every checklist is a story.

The weather observations have scientific value as well; it can help you suss out the reasons for peculiar abundance or absence of species.

A personal example to demonstrate: In late February 2020, I was visiting Nell in Laramie, WY. She was busy with grad school so I had plenty of time to bird, peruse eBird data, and try to build up my Albany county list. I noticed that Lapland Longspurs locally had a bump in detections around the time that I was there so I figured I'd look through previous eBird sightings to see where people were seeing them.

{% image "blog/2022-09-15-raincrow/images/lalo-barcharttrim.png", "Lapland Longspur bar chart for Laramie" %}

Of particular interest was a [2017 observation at **Beef Unit**](https://ebird.org/checklist/S34793813). 100(!) Lapland Longspurs, 750 Horned Larks and a Golden Eagle at a place called **Beef Unit**? Obviously I had to check this spot out.

Beef Unit was...not as exciting as I had hoped. I don't remember much, there were some buildings, barns and farm equipment. There may have been some cows but there weren't a memorable amount of cows. At other times of year this research branch of the University of Wyoming is probably bustling but in late February it was udderly lacking (*sorry*) in human, bovine, and bird activity. Our checklist over the course of 25 minutes was as follows:
[3 Rock Pigeon, 2 Common Raven, 1 Horned Lark, 6 House Sparrows](https://ebird.org/checklist/S64833277). It was hard to reconcile how these two lists could be so wildly different, same location, both in the final weeks of February. *What happened on February 25, 2017 at Beef Unit?*

<div class="full-width">
{% image "blog/2022-09-15-raincrow/images/beefunit.png", "University of Wyoming Beef Unit" %}
</div>

Turns out there was a snowstorm.

In asking around, we found out from the local keepers of bird knowledge that snowstorms were the best time to see Lapland Longspurs and in the case of the 2017 Beef Unit checklist there had been snow storms for the previous few days. Birds generally have high metabolisms and when it is cold and windy, especialy so. A <1oz bird needs to replenish its energy stores as their metabolism goes into furnace mode so when the grasslands surrounding Laramie are covered in snow, the seed eaters must go searching. Their numbers concentrate in areas with bare ground which, due to heat retention, snow plows, and salt, is often near human habitation. None of this was apparent from looking at this 2017 checklist. When you're the one living it, mentioning yet another February snowstorm in Laramie or yet another sweltering hot July day in Phoenix can feel obvious but it helps give those of us looking at checklists years later the necessary context.

After figuring out the weather piece of the puzzle, lucky us, there was a big snowstorm rolling in on the last day of my visit to Laramie. In the afternoon when the storm was kicking into high gear, Nell and I idled in low, heater on, cruising a dirt road on the north edge of town. Peering out the car windows at the edges of the road we found a flock of Horned Larks and picked through them until we found a bird that was not like the others.

<!-- ![Lapland Longspurs foraging](blog/2022-09-15-raincrow/images/lalo-snow.mov) -->
<div class="video-container full-width">
    <video controls autoplay muted loop loading="lazy">
        <source src="./images/lalo-snow.mov"
                    type="video/mp4">
    </video>
    <figcaption>Lapland Longspur (front) and Horned Lark (back) foraging in the blustery snow.</figcaption>
</div>

RainCrow helps make it super simple to add weather data even if you don't note it while in the field.

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
<figcaption>RainCrow weather return for <a href="https://ebird.org/checklist/S65342160">our checklist</a></figcaption>

You can see from the video that the wind was *a little* stronger than a "Gentle breeze". While weather APIs sort of feel like magic, you do have to treat the returned weather data with a bit of caution. They can't magically retrieve the exact micro weather conditions everywhere at all times. Recording your own coarse on-the-ground weather observations is probably your best bet but when you need a backup, RainCrow is there for you.

Thanks for checking back in! Sign up for email updates below if you're interested. There is no comment section anymore. Send me an email instead, I'd love to hear from you →
[parker@birdsmakesound.com](mailto:parker@birdsmakesound.com)
