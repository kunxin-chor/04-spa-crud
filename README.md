# Walkthrough

## Setup the pages and routing
1. Create the empty pages: ShowReviews, EditReview and AddReview
2. Setup the React Router DOM
  - import the dependencies
  - import in the pages
  - in the App component, in its JSX set up the routing

  ## Branch 01: Show all the reviews
  1. We add mock reviews in the state for the ShowReview.jsx (later we refactor to use a context api)
  2. Do list rendering
    - we can use a function that returns an array of jsx elements
    - we can use .map directly in the jsx
  3. Optional: install bootstrap with `npm install bootstrap`

  ## Branch 02: Creating a Review component
  1. Create a `Review` component that will just display the review

  ## Branch 03: Adding a new review
  1. Create the context
  2. Create a provider
  3. Shift all the data into the provider
  4. Give the `ShowReviews.jsx` access to the context and display the reviews from there
  5. Allow `AddReview.jsx` access to the context`