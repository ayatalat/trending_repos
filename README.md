***Trending Repositories*** 

REST Api  list the languages used by the 100 trending public repos on GitHub.

For every language, we get: 

1. Number of repos using this language.
2. The list of repos using the language.
  

***How to get Trending Repos from Github ?***

Fetching trending repositories simply translates to fetching the most starred repos created in the last 30 days ( from now ).

by calling the following endpoint : 

  `https://api.github.com/search/repositories?q=created:>{date}&sort=stars&order=desc`


***Prerequisites***
  `npm i -g @nestjs/cli`

***Installation***
  1. git clone .
  2. cd trending_repos
  3. run `npm install`
  4. then run `npm run start`.
  5. Now the server running 9000.

***Usage*** 

You can get List of languages by call the following endpoint :
    `GET : http://localhost:9000/languages`

***Example Response***

    {
        "Python": {
            "reposList" : [{
                "id": 31232,
                "name": "test-repo"
            }],
           "numOfRepo": 2
        }
    }

***Built With***
[nestjs](https://nestjs.com/)