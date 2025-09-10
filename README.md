# Welcome to FlashCard Quiz App 👋

## Get started

The first for installing this app was
1. Create REACT Native App with expo

   ```bash
   npx create-expo-app@latest flashcard_quiz_app
   ```
   -> To Start the app:

      ```bash
      npx expo start
      ```

2. After installing the app, I added configuration for NativeWind to run TailwindCSS in REACT Native.
   
   - Ran command:
        ```bash
         npm install nativewind tailwindcss@^3.4.17
         ```
   - Ran command to add `tailwind.config.js`:
      ```bash
         npx tailwindcss init
      ```
   - Added the configuration in `tailwind.config.js` from the (NativeWind)[https://www.nativewind.dev/docs/getting-started/installation] documentation:
   - Added the `global.css` file in app folder for running TailwindCSS classes.
   - Added the `babel.config.js` and `metro.config.js` in the root of App.
   - Added `nativewind-env.d.ts` to set up the type definitions for TypeScript. 
