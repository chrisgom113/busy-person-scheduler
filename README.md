# Busy Person Tool : A Third-Party API Challenge

## Description

The challenge is to use starter code HTML, CSS, Javascript, to create an unsophisticated calendar app for a 'busy' user. The intention is to allow the user to save events for each hour of the day, as needed, whereby their events saved would persist after refreshing the page.

Through implementing jQuery dynamic modifcation of HTML and CSS, the hour-blocks in the calendar are also color-coded based on the time of day to show whether the hour has passed, is now, or is in the future. This also entails the use of the Day.js API to have the app check the current time against the one stated in either hour-block.

The biggest take-aways from finishing this project were: practicing DOM traversal using jQuery/Javascript, getting accustomed to using the Day.js API, some practice with using bootstrap components, honing HTML and CSS developing, and, last but not least, getting more practice with browswer DevTools (e.g., console, application).

Great challenge!

See acceptance criteria below for details and specifics.


## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```




## Table of Contents

Not needed. Simple app

## Installation

None required. Live URL

## Usage

User can access the app using this url:



Once on the page, user will see hour blocks for regular business hours as well as the current date and time displayed on the top of the page. 

User can begin typing in any hour block. Input placeholder text will show '...current hour' for the hour block that corresponds to the current time.

Once entry is complete, user can click the blue icon to the right of each block to save the entry. When page is refreshed, the saved entry will persist on the page. 

If user tries to click the 'save' icon when no event has been entered, a window alert will appear advising user to enter event before saving.

If user wishes, they may scroll to the bottom of the page and click the 'reset' button to clear all inputs.

Save and Reset functions both use browser 'local.storage' functionality. This can be checked in the 'application' type of the devtools.

The following animation help demonstrate the application functionality:

Save Event
![](./assets/images/save_event.gif)

Clear Event(s)
![](./assets/images/events_cleared.gif)

Empty Input Alert
![](./assets/images/empty_input_alert.gif)

## Credits

## License

## Features

