
# Getting Started
1. Clone repo
2. Run `docker-compose up`
3. Navigate to `http://localhost/wp-admin` > user & pass: admin
4. Run `npm install` > install all npm packages necessary for themes
5. Run `gulp build` > compiles css, minifies js/css/images

# Architecture
## JS/JQuery
I utilized Javascript for the location functionality that hits the `ipapi` API and returns the user's city and state information. This data is then used to populate the location in the header if the request was successful and will otherwise have default text. I used JQuery to help determine when the DOM is loaded so the header element on the page would exist for the location data injection to occur. I also used JS when setting up my Gulp file.

## SASS
I decided to use SASS for styling mainly for the nesting capabilities it offers among other features it has like variables, mixins, functions, etc. that regular CSS doesn't offer. I kept the overall styling fairly simple and followed the mocks, ensuring that it was responsive throughout.

## Gulp
I used Gulp for my build process to compile my SASS to CSS as well as minify my JS/CSS/images. I found Gulp particularly helpful in watching my CSS files for updates and would recompile as necessary. Though I didn't use any images directly from the repo, I added minification for images for any future cases where that would be applicable.

## WordPress
The home page and gutter product pages are all customizeable via the admin panel. I used blocks throughout the pages to simplify and make the development process more efficient. I'm still fairly new to using blocks within WordPress, so given more time I would have liked to use more of the advanced built in functionality like patterns/query loops/filters based on taxonomies and the customizations you can do with blocks.

# Challenges and Improvements
- Due to the time constraints I was not able to successfully implement a carousel and lightbox for the individual gutter products. My ideal implementation would have been to use an existing plugin for both the carousel and lightbox functionality. My first attempt at the carousel was using MetaSlider which ended up only showing one image. 
- I don't believe a SQL DB was set up with this site, so I didn't have a dump to export.
- To further optimize the CSS, I would have liked to make use of more of the SASS capabilities like variables and mixins. I also would have liked to use SASS modules to ensure less classname conflicts with locally scoped classnames, but hadn't used modular CSS for Wordpress before and didn't want to sink too much time into more marginal benefits.
- I would have also liked to include some sort of Browsersync capability with my Gulp build process to automatically reload and update the site as CSS changes are made to make the development process more efficient.