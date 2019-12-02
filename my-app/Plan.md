## Planning your App

[x] - **App.js**
    Class Component (CC)
        Constructor 
            State
            Axios Calls
                User
                Friends
            React Timeline
                didMount
                didUpdate
                didUnMount
        Render/Return (R/R)
            User Card
            Friends

[x] - *UserCard*
    CC
        R/R
            cardHeader
            cardBody

[x] - `cardHeader`
    CC
        R/R
            props.name
            props.image
            ?props.other?
[x] - `cardBody`
    CC
        R/R
            props.github
            *props.email
            **props.followers
            ?props.other?
[x] - *Friends*
    CC
        R/R
            props.name
            props.image
            props.github

[x] - Structure
[x] - State and Axios
[x] - Rendering 
    [x] - Imports
    [x] - Render components
    [x] - Props
    [x] - '.map' statements etc.
[x] - Styling
[x] - Retrospective
[x] - MVP Requirements Review
[x] - Stretch Problem: Component did Update



## STEP 1 - Fetch the User Data

- When your component mounts, 
    send a GET request to the following URL: https://api.github.com/users/<your name>
- After you fetch your data, set it to state

## STEP 2 - Display the User Data

- Pass the data to the component that will be displaying it
- Build out a user card using the data that the Github API returns to you
  - You may reference your old project for this, or you may wish to build this from scratch yourself

## STEP 3 - Fetch the User's Followers

- When your component mounts, you will also fetch the user's followers using this endpoint:
  https://api.github.com/users/< Your github name >/followers
- Set that data to state as well, and display the data in your app

## STEP 4 - Style the User Card

- Now it's time to style up your app
- You are free to choose how you style your app, but make it look as presentable as you can
- Try something new here. Maybe that's a new CSS technique you haven't really practiced yet. Maybe it's using a styling library you haven't tried. Push yourself to get better in this area.

## STEP 5 - Project Retrospective

 Is there anything you wish you had planned better? 
    Styling
 Anything you would do differently?
    Learn more about state, life cycle, events, and props.
 How you would accomplish these same objectives with function components and hooks.
    In a similar way but probably using more hook statements.

## Minimum Viable Product

- [x] Fetch data from the Github API for a Github user
- [x] Display the user data on the DOM
- [x] Use class components when you need to hold any state or use any life cycle methods

## Stretch Problems

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on the following optional goals:

[x] - Build a form that allows you to search for different Github users. When the form is submitted, use `componentDidUpdate` to fetch the data for the user you typed in. Set that new user's data to state to trigger the component to re-render and display your new user. Don't forget to fetch their followers as well.

[ ] - Look into adding your GitHub contribution graph. There are a number of different ways of doing this, this Stack Overflow discussion will get you started: https://stackoverflow.com/questions/34516592/embed-github-contributions-graph-in-website
