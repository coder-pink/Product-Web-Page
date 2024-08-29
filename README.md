# React Product Comparison WebPage

This project is a React-based application that allows users to view product details and compare selected products. It includes a dark mode toggle, responsive design, and uses modern React features such as hooks, effects and lazy loading. The UI is enhanced with Ant Design components and icons from `react-icons`.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Routing](#routing)

## Features

- **Product Details:** View a list of products with pagination, sorting, and actions.
- **Product Comparison:** Select products to compare and view them side-by-side.
- **Responsive Design:** Adjusts to different screen sizes.
- **Lazy Loading:** Load components only when needed, improving performance.


## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/coder-pink/Product-Web-Page.git
    cd product-web-page
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```



## Usage

### Product Details

- Visit the `/products` page to view a list of products.
- Use the sorting options available in the table headers to sort products by ID, Name, or Price.
- Select products to compare using the 'Compare' button.
- Click the 'Compare Product' button to navigate to the comparison page.

### Product Comparison

- On the `/compare` page, view selected products side-by-side.
- Remove products from the comparison or add more products using the modal.

### `ProductDetails`

- Displays a table of products with sorting and comparison options.
- Uses Ant Design's `Table` component for displaying products.

### `CompareProducts`

- Shows a side-by-side comparison of selected products.
- Allows adding more products to the comparison using a modal.

### `Sidebar` and `Navbar`

- Common navigation components that help navigate between different pages of the application.

## Routing

- The project uses `react-router-dom` for routing.
- Routes are defined in the `App.js` file.
    - `/products`: Displays the product details.
    - `/compare`: Displays the comparison page.


## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing.
- **Ant Design**: UI library for React components.
- **Tailwind CSS**: Utility-first CSS framework.
- **Axios**: Promise-based HTTP client for API requests.
- **React Icons**: Popular icons for React projects.
- **React Suspense and Lazy**: For lazy loading components.