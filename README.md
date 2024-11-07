This is an example repository for creating Data Stories with [Nomic Atlas](https://atlas.nomic.ai)

This creates folios that can step & scroll through different views of your Atlas data maps.

Here's how to do this:

1) Explore your data in Atlas & generate a share link:


https://github.com/user-attachments/assets/25c39445-f9b1-4607-964b-ef1966443956


2) Create a Folio item with the `hash` parameter set to the four-item #XXXX code at the end of the share link, e.g.:

```markdown

<Folio
hash="vYoe"
duration={3000}
>

Education is...

</Folio>

<Folio
hash="oZyE"
duration={3000}
>

Tax policy...

</Folio>

```

3) On page load you will then see each Atlas map state to the side of your Folio text:


https://github.com/user-attachments/assets/25578584-6e16-4589-a461-3561a7826dca

