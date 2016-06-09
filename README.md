# Wordspaces


This repository contains the code for our masters project.

# Requirements

- Node from [node.org](https://nodejs.org/en/download/)
- Meteor from [meteor.com](https://www.meteor.com/install)

# Installing  

Run the command `npm install` from project root.

# Running

Create a file named settings.json in project root directory. Use the following template for your settings file:

```
{
  "public": {
    "accessToken": "YOUR MAPBOX TOKEN HERE"
  },
  "facebook": {
  	"appId" : "YOUR FACEBOOK APP ID HERE",
  	"secret" : "YOUR FACEBOOK APP SECRET HERE"
  }
}
```

Start Meteor by running the command `meteor run --settings settings.json` from project root. This will install additional dependencies and build the application as well as starting a local MongoDB instance for development purposes.

# Licence

