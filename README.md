# sphinx

Made for a friend, sphinx allows the website maker to have a scroll effect on images that can only be described as "the Star Wars intro, but towards you."

The system could be described as a front-end API, similar to jQuery. It uses jQuery, but if you have a pure-JavaScript way to do it, by all means fork the project, make it, and make a pull request!

### [License](https://github.com/soccerJoshNumberNine/sphinx/License.md)
___
### Usage

To use sphinx in your own project, put the following code in the `head` section of your HTML/PHP document. Check out [this template](https://github.com/soccerJoshNumberNine/sphinx/blob/master/template.md) for an idea of how it works.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link rel="stylesheet" href="https://soccerJoshNumberNine.github.io/sphinx/main.css"/>
```

Attach the following code to the bottom of the `body` section of your document.

```html
<script src="https://soccerJoshNumberNine.github.io/sphinx/sphinx.js"></script>
```

To indicate a section in which the actual effect [\(demo\)](https://soccerjoshnumbernine.github.io/sphinx/), create a `div` tag with `id="page" class="frame"`. Put in as many `div`'s with `class="phade"` as you want. These will phade in as the user scrolls down. After each of the `phade`'s, insert a `div` with `class="spacer"`. __The spacer is essential to the scroller working. *Do not forget to insert it!*__

Anyway, I hope the description made sense. Maybe a video on it coming soon?
