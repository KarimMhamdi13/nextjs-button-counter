# Next.js Button Counter
A simple Next.js web app that renders an interactive reusable button counter component.

# How to run locally
Within your terminal run:
cd nextjs-button-counter
npm install
npm run dev
then open "http://localhost:3000 within your browser of choice

# How to Build
Follow the previous steps but insead of npm install run:
npm run build
npm start
then open localhost like before

# Features Implemented
- Reusable Counter Component
- Displays current count
- Increment (+) and decrement (-) buttons
- Reset button that resets Counter to 0
- Step input to change the increment/decrement amount
- Uses aria-live="polite" for count updates
- Measures to prevent Counter from going into negatives
- Second Counter that starts at a custom step and counter value

# Known Issues/Limitations
- UI not optimized for mobile viewports
- Counter and step are not persistant, resetting on page reload
- Step input is limited to whole numbers
- Generic Tab Title