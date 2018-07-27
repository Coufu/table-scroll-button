# Table Scroll Button
Tired of coding a custom table scroll buttons every time you need them? Use this feature-rich plugin which requires only one line of code!

## Usage

### HTML
```HTML
<div class="table--scroll-wrapper">
    <table>
        <!-- Put huge table here -->
    </table>
</div>
```

### JS
```
$('table').tableScrollButton();
```
or
```
$('.table--scroll-wrapper table').tableScrollButton();
```

## Features
- Shows/hides only if the table is larger than its container (even on window resize)
- Clicking it scrolls the table to the right exactly one width of the container.
- The button hides (via css class) when you can't scroll any further
- Vertical placement is based on table height or screen height (whichever is smaller)

## To Do
- Add basic CSS
- Minify JS
- Structure repo with package.json and gulpfile.js to continue development