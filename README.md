# Forest - Tailwind CSS Project

![Forest Project](./src/img/cover.png)

## About the Project

Forest is a website developed during the Tailwind CSS course by [Origamid](https://www.origamid.com/). The project demonstrates the implementation of a modern design with a forest theme using Tailwind CSS utility classes.

## Technologies Used

- [Tailwind CSS](https://tailwindcss.com/) v3.4.17
- HTML5
- Vanilla JavaScript
- Fonts: DM Sans and DM Serif Text (Google Fonts)

## Features

- Responsive design
- Custom animations
- Custom theme with green color palette
- Custom components via `@layer components`
- Styled gradients

## Tailwind Customizations

The project includes advanced Tailwind CSS customizations:

- Custom colors in the green palette
- Custom fonts
- Custom animations and keyframes
- Custom plugins for animation delays
- Styled components like buttons, inputs, and neon effects

## Project Structure

```
forest/
├── src/
│   ├── img/           # Project images
│   ├── js/            # JavaScript scripts
│   ├── video/         # Video files
│   ├── input.css      # Tailwind input file
│   ├── output.css     # Compiled CSS
│   └── index.html     # Main page
├── tailwind.config.js # Tailwind configuration
└── package.json       # Dependencies
```

## How to Run the Project

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run Tailwind build:
   ```
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```
4. Open `src/index.html` in your browser

## Learnings

This project demonstrates various Tailwind CSS techniques:

- Utilization of utility classes system
- Theme and configuration customization
- Component creation with @layer
- Animations and transitions
- Responsive design with default breakpoints

## Author

Developed by Lyon Müller during the Tailwind CSS course by Origamid, taught by André Rafael.

## License

This project was developed for educational purposes. Original design by Origamid.

---

Project built as part of the Tailwind CSS course by [Origamid](https://www.origamid.com/).
