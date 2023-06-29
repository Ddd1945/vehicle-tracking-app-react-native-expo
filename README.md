# “Vehicle Tracking (Vehicles)” in React Native using Google Maps API or equivalent to get an up-to-date fleet location.

### Application description:

▪ **Vehicle list screen**.

1. The user should be able to filter the vehicles by their categories by clicking the “Apply” button by category:
     1. Cargo;
     2. Passenger;
     3. Special transport.
2. The elements of the list must contain:
     1. Name of the TS - generated: TS # serial number in the database;
     2. Driver's name;
     3. Vehicle type.
3. The screen should be able to switch the view from the list mode to the map view, where the vehicle location will be displayed with different icons according to the vehicle type.

▪ **TS screen**.

1. By clicking on a vehicle, the user enters the Screen of a particular vehicle. This screen should contain:
     1. A map with the location of the driver;
     2. Vehicle category;
     3. Driver's name;
     4. Contact number of the driver;
     5. Button "Call". Opens the application with a dialer and the already substituted driver's number;
     6. Button "Message". Opens the whatsapp application with a driver chat and a pre-installed message: “Good afternoon, please tell me which order number you currently have in work.”

▪ **Screen with settings.** Should contain only the ability to switch languages from English to Russian and vice versa.

### Code requirements:

1. The application must be written in TypeScript;
2. Functional components and React hooks must be used;
3. Code should be clean and easy to read;

### INSTALLATION
1. Run npm <i>config set legacy-peer-deps true</i> to skip peer dependency conflict checks.
2. Run <i>npm install</i> to install all required dependencies.

### DEVELOPMENT
Run <i>npm start</i> to start a development server.

### DEPLOYMENT
1. Run <i>npm install -g eas-cli</i> to install the latest EAS CLI.
2. Run <i>eas login</i> to login to your Expo account.
3. Set Google API key in <i>app.json</i> file.
4. Set phone number in <i>InfoScreen.tsx</i> file.
5. Run <i>eas build -p android --profile preview</i> to build project for android.
6. Install released <i>.apk</i> on your phone.

<b>NOTE!</b> 
1. If <i>eas</i> commands don't work try to use them via <i>npx</i> e.g. <i>npx eas login</i>
2. In case of <i>"You need to configure Git with your username (user.name)"</i> error or something like that check this tutorial - <a href="https://www.youtube.com/watch?v=9aF_5eU14L4" target="_blank"><b><i>COWABUNGA!</i></b></a>
3. If you want to configure build project by yourself check the official documentation - <a href="https://docs.expo.dev/build/setup/" target="_blank"><b><i>EXPO DOCS</i></b></a>

### <i>P. S. Please, support me - https://ko-fi.com/dendyy1945, subscribe, and give a star to this project if it was helpful for you.</i>

License
----
MIT
