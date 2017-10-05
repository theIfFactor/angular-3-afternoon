<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll make use of Angular components and routing to complete a website that sells swag. The file structure has already been setup for you and should feel very familiar to the mini project. There are also two services that have been built out for you. One is the swag service, it holds all the data for swag that is available for purchase. The other service holds all the cart functionality. Take a minute to understand how the cart works before beginning the project.

In addition to the services, the Angular application has routing pre-built for you as well. This should be very similiar to the routing you've already practiced earlier in the course. The only difference here is in the router's configuration. When dealing with components you can actually provide the component's name in the router's configuration and it will automagically know which HTML to render.

It is imperative to feel comfortable with the existing code base before attempting this project. If you are having trouble, feel free to ask a fellow classmate or one of your mentors. 

Live Example: <a href="https://devmountain.github.io/angular-3-afternoon/#!/">Click Me!</a>

<img src="https://github.com/DevMountain/angular-3-afternoon/blob/solution/readme-assets/1.png" />

## Setup

* Run `npm i`.
* Run `npm run dev` to start the development server.

<img src="https://github.com/DevMountain/angular-3-afternoon/blob/solution/readme-assets/2.png" />

## Step 1

### Summary

In this step, we'll build out the swag component. The swag component is responsible for displaying information about swag, such as price, color, size, etc. The swag component will act as a re-usable component and will be used in both the list and cart component.

In the swag component, there is a button available that a user can click. That button's action and label will have to be dynamic. When on the list view, we want that button to say 'details' and take a user to the detailed view of that swag. When on the cart view, we want that button to say 'remove' and remove the swag from the cart. Remember the title we passed down in the mini project? You can do the same for functions. When binding a function in the controller you use the `&` symbol. The other binding you haven't seen yet is `<` which is used for `one-way` data binding. We'll use this `binding symbol` for when we bind `item` ( `item` will be the swag object ).

### Instructions

* Open `app/swag/swag.component.js`.
* Create the skeleton of an Angular component:
  * Use `swagShop` as the application name.
  * Use `swag` as the component name.
* Link the template into the component and set the component's controller as `swagCtrl`.
* Add bindings for the following:
  * A `<` binding for `item`. `item` will be the swag object.
  * A `&` binding for `action`. `action` will be the dynamic action that was explained in the summary.
  * A `@` binding for `actionLabel`. `actionLabel` will be the dynamic label that was explained in the summary.

### Solution

<details>

<summary> <code> app/swag/swap.component.js </code> </summary>

```js
angular.module('swagShop').component('swag', {
  templateUrl: 'app/swag/swag.template.html',
  controllerAs: 'swagCtrl',
  bindings: {
    item: '<',
    action: '&',
    actionLabel: '@'
  }
});
```

</details>

## Step 2

### Summary

In this step, we'll complete the template for the `swag.template.html` and link the swag component using a `script` tag in `index.html`.

### Instructions

* Open `app/services/swag.service.js` for a reference of what properties exist on a `swag object`.
* Open `app/swag/swag.template.html`.
* Update the commented out sections to use the correct property from a `swag object`.
  * Hint: remember we bound the swag object on the controller property called `item`.
* Update the button at the bottom of the template to use the `action` and `action label`.
  * Hint: remember we bound the `action` function and `action label` string in `action` and `actionLabel`.
* Open `index.html`.
* Add a new `script` tag for the `swag` component.

### Solution

<details>

<summary> <code> app/swag/swag.template.html </code> </summary>

```html
<div class="swag-list__container">
  <div class="swag-list__content">

    <div class="swag-list__content-top">
      <h4>{{ swagCtrl.item.title }}</h4>
      <span>{{ swagCtrl.item.size }}</span>
    </div>

    <div class="swag-list__content-bottom">
      <span>{{ swagCtrl.item.color }}</span>
      <span>${{ swagCtrl.item.price}}</span>
    </div>

    <button class="swag__btn" 
            ng-click="swagCtrl.action()" >
      {{swagCtrl.actionLabel}}
    </button>
  </div>
</div>
```

</details>

<details>

<summary> <code> index.html ( script section only ) </code> </summary>

```html
<!--Our Custom Script Files-->
<script src="app/app.js"></script>
<script src="app/services/swag.service.js"></script>
<script src="app/services/cart.service.js"></script>
<script src="app/swag/swag.component.js"></script>
```

</details>

## Step 2

### Summary

In this step, we'll build out the list component. The list component is responsible for displaying a list of swag that is available for purchase. In order to know which swag to list, we'll need to import the swag service into this component's controller.

At the end of this step, we should see both the list and swag component in action.

### Instructions

* Open `app/list/list.component.js`.
* Create a component skeleton:
  * Use `swagShop` as the application name.
  * Call the component `list`.
* Link the list template and call your controller `listCtrl`.
* Create a component controller function:
  * This controller should have the swag service injected into it.
  * This controller should have `$state` injected into it.
  * Assign an array called `swag` that equals the `swag` array in the swag service.

### Solution


## Step 3

### Summary

In this step, we'll create the details component. The details component is responsible for displaying all information about one piece of swag and also providing an option to add the swag to the user's cart.

### Instructions


### Solution


## Step 4

### Summary

In this step, we'll build out the cart component. The cart component is responsible for displaying all swag that is currently in the cart. It will also provide a user with the option to checkout, which in this case should empty the user's cart. This component will make use of the swag component to display the swag that is in the cart.

### Instructions



### Solution
























## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>

