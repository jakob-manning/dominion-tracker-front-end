import React from 'react'
import classes from "./download.module.css"

const Download = () => {

    return (
        <div className={classes.download}>
            <h2>A Chromium Extension for Extending Dominion in Chrome</h2>
            <p>This is a chrome extensions, like the others you have downloaded, it extends the features of chrome with pleasant additions to chrome's natural features. Unlike other extensions, however, this extension is meant to extend Dominion online! </p>
            <p>You are a Dominion player, like other players around you, you enjoying playing dominion online with a small pleasant group of online dominion playing friends. Unlike your friends, however, you have hopes and dreams! You want a bigger and more pleasant Dominion experience, with more glorious victories and a wider variety of statistics. You want a Dominion Chrome Extension for tracking your games of dominion on chrome! In all directions lie new dominion statistics, dominion leaderboards, monthly tournaments, and arbitrary points. All are small bits of glory, controlled by petty dominion players and verging on anarchy. You will bring a chrome extension to your gaming experience, uniting your victories into larger victories which will be tallied up and counted into larger victories and then dissecting into smaller victories which can be tallied and added up again.</p>
            <p>But wait! It must be something in the air; several other dominion players have had the exact same idea. You must race to get as much of the dominion leaderboard as possible, fending them off along the way. To do this you will download our chromium extension, upload your game results, spruce up your playing style, and fill your coffers with bragging rights. Your parents wouldn’t be proud, but your friends who play dominion online, would be delighted.</p>
            <p><i>This is not a stand-alone game, you must own a copy of Dominion to use this extension</i></p>

            <h2>Download the Critically Acclaimed Extension Today</h2>
            <ol>
                <li>Download the <a target={"_blank"} rel="noreferrer noopener" href={"https://drive.google.com/file/d/16Od5t2ine9bnGXJUzIQZjAWzk0SBzfg-/view?usp=sharing"}>DominionWorld Chromium Extension</a></li>
                <li>Unzip the extension</li>
                <li>Open your favourite Chromium browser (Google Chrome, or Microsoft Edge Chromium)</li>
                <li>Go to chrome://extensions</li>
                <li>Select "Developer Mode" in the top right corner</li>
                <li>Select "Load unpacked"</li>
                <li>Select the "dist" folder from your unzipped file</li>
                <li>Dance and make merry, you have installed a sketchy extension!</li>
            </ol>
            <p>🏰🏰🏰</p>
        </div>
    )
}

export default Download
