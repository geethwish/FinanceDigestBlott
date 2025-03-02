# FinanceDigestBlott

This guide provides a step-by-step setup for the Finance Digest app, including project installation, folder structure, technology stack, best practices, and detailed explanations of the libraries used.

## Project Setup

### Prerequisites

- Node.js installed (Recommended: LTS version) [Download Here](https://nodejs.org/)
- npm or yarn
- Expo CLI installed globally

```sh
npm install -g expo-cli
```

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/FinanceDigestBlott.git
   cd FinanceDigestBlott
   ```

2. Create a `.env` file in the root directory and add your API URL and secret:

   ```sh
   touch .env
   ```

   Add the following lines to the `.env` file:

   ```env
   EXPO_PUBLIC_API_URL=https://your-api-url.com
   EXPO_PUBLIC_API_SECRET=your-api-secret
   ```

3. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

4. Start the development server:
   ```sh
   npm start
   # or
   yarn start
   ```

### Running on Android/iOS/Web

- To run on Android:

  ```sh
  npm run android
  # or
  yarn android
  ```

- To run on iOS:

  ```sh
  npm run ios
  # or
  yarn ios
  ```

- To run on Web:
  ```sh
  npm run web
  # or
  yarn web
  ```

## Folder Structure

```
FinanceDigestBlott/
├── app/                    # Application screens and navigation
│   ├── (auth)/             # Authentication related screens
│   ├── (dashboard)/        # Dashboard related screens
│   └── ...                 # Other screens
├── assets/                 # Static assets like images, fonts, etc.
├── components/             # Reusable components
│   ├── shared/             # Shared components
│   ├── splashScreen/       # Custom splash screen component
│   └── ...                 # Other components
├── config/                 # Configuration files
├── store/                  # Redux store and slices
│   ├── slices/             # Redux slices
│   └── ...                 # Other store related files
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Project metadata and dependencies
└── ...                     # Other project files
```

## Used Libraries and Technologies

- **React Native**: For building the mobile application.
- **Expo**: For development and building the app.
- **Redux Toolkit**: For state management.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: For styling the application.
- **Formik**: For handling forms.
- **Yup**: For form validation.
- **React Native Async Storage**: For local storage.
- **Jest**: For testing.

## Best Practices

- **Component Reusability**: Create reusable components to avoid code duplication.
- **State Management**: Use Redux Toolkit for managing the application state.
- **Styling**: Use Tailwind CSS for consistent and maintainable styling.
- **API Integration**: Use Axios for making API requests and handle errors gracefully.
- **Form Handling**: Use Formik and Yup for form handling and validation.
- **Testing**: Write unit tests using Jest to ensure code quality.
- **Code Organization**: Follow a consistent folder structure to keep the codebase organized and maintainable.
