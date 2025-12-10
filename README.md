# SSD2850 - Assignment 04

### Group Members
* Ethan
* Pawel
* Poul

## Project folder Structure

```text
assets/
styles/
    components/
      _button.css
      _card.css
      _navbar.css
    utilities/
    base.css
scripts/
index.html
```

---

# Branching policy

Create branches from the latest commit on the `main` branch. (remember to `git pull`)\
Name branches in this pattern `<your name>/<feature-fix-or-change>`.

ex. `pawel/add-button-styles`

The branch name after the first `/` should generally convey what you want to 
change when the branch is merged with `main`.

Once you have completed work on the branch, submit a pull request for review.

# Semantic commit messages
Try writing your commit messages according to [this specification](https://www.conventionalcommits.org/en/v1.0.0/).
This is an industry standard specification for commit messages used by many
organizations.

ex. `feat: add button to CTA`\
ex. `fix(nav): link not clickable`\
ex. `chore: rewrite article copy`

# Style Guide

Use [BEM](https://en.bem.info/methodology) when styling components.

For colours, pick from [TailwindCSS Colors](https://tailwindcss.com/docs/colors#Colors),
find the corresponding CSS variable in [styles/colours.css](styles/colours.css) and use that.
```css
<selector> {
  color: var(--color-red-500);
}
```
Use specific, one-off colour values sparingly. If you need to use a custom colour value
in multiple places, append a new CSS variable to [styles/colours.css](styles/colours.css) in the `:root` block.

```css
:root {
    /* ... */
    --color-something: #aaff00;
}
```

## Examples

### Example: Button Component

```html
...
<button class="button button--primary">
  Submit
</button>
...
```

```css
/* _button.css */
.button {
  display: inline-flex;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
}

.button--primary {
  font-weight: bold;
  background-color: var(--color-primary);
}
```
