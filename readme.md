## Overview

Cypress is a dApp that we have developed with Vechain that utilizes cryptocurrency to incentivize users to make sustainable travel choices. Our project aims to be a part of the solution to the environmental degradation that is caused by urbanization and the increasing levels of carbon emissions in cities. Consumers may not produce the majority of pollution but they are the majority of the population– Cypress allows conscious consumers to be a part of a community that values sustainability on every level. On Cypress users can build their own virtual garden for simply traveling sustainably. Cypress uses 3 party integrations from sustainable transportation companies such as Uber, MBTA, and BlueBike in order to verify that users have taken one of those forms of transportation. From there, Cypress uses Vechain technology to distribute VET to those users. This VET can then be used within the app to purchase flowers for a virtual garden. Users can expand their gardens, unlock new flowers, complete challenges, and compare their impact with friends. We use Vechain to distribute the incentive in cryptocurrency which is highly secure and promotes a system with low carbon emissions. 

![Cypress](https://copper-dirty-goose-489.mypinata.cloud/ipfs/QmVTzU7E6rsjL68p9KDj8vnC69CzY6xXoLBHaoMZ7UNyGG/6.png)

![Cypress Icons](https://copper-dirty-goose-489.mypinata.cloud/ipfs/QmVTzU7E6rsjL68p9KDj8vnC69CzY6xXoLBHaoMZ7UNyGG/7.png)

![Cypress UI](https://copper-dirty-goose-489.mypinata.cloud/ipfs/QmVTzU7E6rsjL68p9KDj8vnC69CzY6xXoLBHaoMZ7UNyGG/9.png)

![Cypress SC](https://copper-dirty-goose-489.mypinata.cloud/ipfs/QmVTzU7E6rsjL68p9KDj8vnC69CzY6xXoLBHaoMZ7UNyGG/10.png)

![Cypress Team](https://copper-dirty-goose-489.mypinata.cloud/ipfs/QmVTzU7E6rsjL68p9KDj8vnC69CzY6xXoLBHaoMZ7UNyGG/Meet%20the%20Team.png)


---

## Tech Stack

We built a Progressive Web App (PWA) optimized for mobile users with React, Next.js. This is the same framework that Friend.tech was built with! Because we used the web app design, we can utilize the VechainThor Wallet as our Web3 Provider on mobile and access a URL of our app (that looks like its a mobile app). We then wrote our smart contracts using Solidity on Remix, and deployed them to the Vechain Testnet using an app called https://inspector.vecha.in. Finally, we used the @vechain.energy/use-vechain SDK to index Vechain block information and access functions in our smart contract ABI. 

We enjoyed working with Vechain tokenomics and transaction speeds. Because our app was heavily based on user gamification and usage of $VET for rebates and transactions, Vechain’s two token system was a perfect fit. In this sense, we do not have to deploy and create liquidity for our own fungible tokens and instead tap into the rich ecosystem for $VET, the native token itself. On the other hand, since $VTHO gas token is cheap and composable, users can freely interact with our app, buy many items, and book many trips without worrying about inccuring crazy additional costs. Finally, we tap into the sustainable partnership ecosystem that Vechain has created, and we will get more direct access to bigger public transportation companies for partnership and integration into our platform!
