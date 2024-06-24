
# kodey-toast-pos-sample

This repository is an example Kodey.ai Coding Agent Workflow

## Objectives

In this sample, we will explore how Kodey.ai can read external api documentation related to toast pos and create express typescript apps for them.

## Project Setup & Steps 

1. Signup for a new Kodey.ai account or login to your existing Kodey.ai environmenty (link-here)
2. Configure your Kodey.ai integrations to the desired issue tracker and cloud git provider.
3. Fork this repository, and clone it to the cloud git provider of your choosing (Github, Azure DevOps, Bitbucket)
4. Make sure you have dev branch. If not create one, kodey will be creating all the new branches against dev.
5. Create the sample issue / work item in your issue tracker. Copy and Paste the issue description from below.
6. Execute the below prompt in the Kodey.ai chat UI
7. Validate the commits and pull requests in your cloud git provider

### SAMPLE PROMPT - EPIC FHIR AllergyIntolerance.Search(R4) API Sample
```
    platform: github | bitbucket | azure | gitlab (choose one of yours)

    repository to work on: kodey-toast-sample

    branch name to create: feature/kodey-toast-sample-v1

    programming language: typescript

    Information to agent: Do as the steps below are defined one by one. You are working in <platform> repo so make sure to use tools related to <platform> repo.
    NOTE: You should write the actual implementation of code not just comments.

    Scenario: You are working to develop an express typescript app which will make methods which call apis which will request to an third party api url which you will be provided via documentation and get the response back. Make sure to use typescript, express and other necessary libraries if necessary.

    Steps:

    step 1: Create a new branch with name and then do the steps below.

    step 2: Using webcrawler tool, understand how to make authentication to toast apis from url https://doc.toasttab.com/doc/devguide/authentication.html. Understand what are the credentials needed, what is the url.

    step 3: Create the utils.ts file in app/ directory which will have a function that returns the access token required to call the api using the understanding from step 2. This function will be used later on which will give token to us.

    step 4: Using webcrawler tool, understand the order component of toast from url https://doc.toasttab.com/doc/devguide/portalOrdersApiOverview.html. Understand what it does, when it should be used and how.

    step 5: Using webcrawler tool, understand how to get the detail of a single order from https://doc.toasttab.com/doc/devguide/apiOrdersGetDetailedInfoAboutOneOrder.html and also details about multiple orders from https://doc.toasttab.com/doc/devguide/apiOrdersGetDetailedInfoAboutMultipleOrders.html

    step 6: Now create the express typescript file in app/ directory that will actually have the methods which will call the above endpoints which when requested makes call the above mentioned external api to get the single order data and multiple order data as well. Use axios library to make the request internally to the endpoint. Write properly formatted typescript code which is optimized and syntactically correct.
    FYI: Read the host url if needed from env variables. And import the function from utils to get the access token and use that in header.

    step 7: Also in the same file as above, create a simple /index endpoint which returns "hello world" as response.

    step 8: Create package.json in home directory file which should include all the dependencies required . For your information use ts-node 10.9.2.

    step 9: Create tsconfig.js in home directory file with all necessary required configurations.

    step 10: Also create .gitignore home directory file which will include the node_modules, env files and others.

    step 11: Update the readme file to include the detail about the app and also instruction on how to run the app.

    step 12: Create a new pull request from the above created branch with title "TOAST SAMPLE KODEY v1" and body "TOAST SAMPLE KODEY".

    step 13: Update this issue to closed status
```

## Once you have set the description of the issue in your relavant system. You need to use kodey UI Chat and execute below statement to get the work done. 

### Github Issue and Github Repo
```
   Get the issue with id <issue_id> from github repo and do as the description of the issue says step by step.
```

### Azure Repo Issue and Azure Repo
```
   Get the issue with id <issue_id> from azure repo and do as the description of the issue says step by step.
```

### Jira Issue and Bitbucket Repo
```
   Get the issue with id <issue_id> from jira and do as the description of the issue says step by step.
```

## Confirming Successful Sample Outputs

1. Confirm that the branch was created on the issue / work item
2. Confirm that the code created in the associated pull request contains the following
3. Confirm that the work item/issue/ticket in your relevant issue tracking platform is updated.
