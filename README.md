## Rails 5.1 skeleton project with React and a lot of stuff included.


### Short overview

- Ruby 2.4.1
- Rails 5.1.4
- DB: MySQL
  
   
- React 16.0 (via webpacker gem)
- MDC for Web components 
- Bootstrap 4.0.0.beta 
- HAML templates (for static pages)
- jQuery v.3


  
- Base controllers:


- Basic user model
- Device auth via:
    - username/password
    - facebook
    - github
    - etc
    
    
- Basic admin model



- Default layout (header, footer, etc)


## Setup process

- Run `yarn install` to download remote packages
- .......


## How to...

....


## Styles

#### Material Design Color Palette

`material-design-colors` npm lib: https://www.npmjs.com/package/material-design-colors
 
 Usage:
 
 ```scss
 .btn {
     color: $white-color;
     background-color: $red-500-color;
 }
```

#### Custom Commons

Folder `app/assets/stylesheets` contains useful css classes, like padding and margin commons
flex grid, etc.  
You can explore `commons` folder to see all available classes. Please, consider don't edit
files from this directory. 


Example:

```html

<div class="fl-cont fl-center padd-top-big marg-bott-md">
    <div class="red-bg marg-left-md">
        <h3 class="uppercase "> test </h3>
    </div>
    <div class="red-bg marg-left-md">
        <h3 class="uppercase "> test </h3>
    </div>
</div>

```

......


## React

Available components:

- react-router-v4
- ...
