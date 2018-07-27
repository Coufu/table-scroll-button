# Table Scroll Button
Ever wanted an easy to add a dynamic table scroll button to your table? Now you can really easily!

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
$('table').tableScrollWrapper();
```
or
```
$('.table--scroll-wrapper table').tableScrollWrapper();
```

## Features
- Shows/hides only if the table is larger than its container (even on window resize)
- Clicking it scrolls the table to the right exactly one width of the container.
- The button hides (via css class) when you can't scroll any further
- Placement is based on table height or screen height (whichever is smaller)

## To Do
- Add basic CSS
- Minify JS
- Structure repo with package.json and gulpfile.js to continue development