# My WordPress Site Setup

## What We Have

Our website is like a big house with special rooms. Each room has special parts that work together.

### The Big Parts

1. **WordPress**: This is our main house. It holds everything.
2. **Blocksy Theme**: This is how our house looks. It makes things pretty.
3. **Carbon Fields**: These are like magic boxes that hold special information.
4. **Timber and Twig**: These are special tools that help us build rooms faster.
5. **Tailwind CSS**: This is like a paint set that makes things look nice.

## How We Organize Things

### Folders

Our house has special folders to keep things neat:

```
blocksy-child/
├── blocks/           # Special boxes we can add to pages
├── views/            # How things look
│   ├── blocks/       # How blocks look
│   ├── components/   # Small parts we use a lot
│   └── templates/    # Big page designs
├── inc/              # Helper tools
└── assets/           # Pictures and colors
```

### Special Content Types

We have different types of things in our house:

1. **Properties**: Houses and apartments for sale
2. **Businesses**: Stores and companies
3. **Articles**: Stories and news
4. **User Profiles**: Information about people

## How Things Work Together

### Step 1: Carbon Fields Collects Data

- Carbon Fields makes special boxes in WordPress
- These boxes let us add information like:
  - How many bedrooms a house has
  - How much a house costs
  - Where the house is located

### Step 2: Blocks Display the Data

- We made special blocks like "MI Card"
- These blocks show information in a pretty way
- Each block has:
  - PHP file (index.php): Gets the information
  - Twig files: Makes it look pretty

### Step 3: Timber Connects Everything

- Timber is like a bridge between PHP and Twig
- It takes information from Carbon Fields
- It sends it to Twig templates to make it pretty

## Our Special Blocks

### MI Card Block

This block shows property cards. Here's how it works:

1. **index.php**: Gets property information from Carbon Fields
2. **views/blocks/mi-card.twig**: The main design
3. **views/blocks/mi-card-property.twig**: Special design for properties
4. **views/components/property-card.twig**: The card design we use

## How to Add New Things

### To Add a New Property:

1. Go to WordPress admin
2. Click "Properties" → "Add New"
3. Fill in all the boxes (Carbon Fields)
4. Click "Publish"

### To Add a Property Card to a Page:

1. Edit a page
2. Click the "+" button
3. Find "MI Card" block
4. Add it to the page
5. Pick settings like how many properties to show

## Important Rules

1. **Keep HTML in Twig Files**: All pretty stuff goes in Twig
2. **Keep Data in PHP**: All information goes in PHP
3. **Use Components**: Make small parts that can be used again
4. **Use Tailwind Classes**: Use Tailwind to make things pretty

## Troubleshooting

If something breaks:

1. Check if Timber is working
2. Make sure Carbon Fields is getting information
3. Check if Twig templates are in the right place
4. Look for missing files

## Where to Find Help

- Timber Docs: https://timber.github.io/docs/
- Carbon Fields Docs: https://docs.carbonfields.net/
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Blocksy Docs: https://docs.creativethemes.com/blocksy/

Remember: PHP gets the data, Twig makes it pretty, and Tailwind makes it colorful!
