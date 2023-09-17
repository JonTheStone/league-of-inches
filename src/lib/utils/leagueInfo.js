/*   STEP 1   */
export const leagueID = "916164816564236288"; // your league ID
export const leagueName = "League of Inches"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables
export const startingFaab = 250; // set to null if league does not use FAAB, otherwise set your starting budget

/*   STEP 2   */
export const homepageText = `
  <section>
    <p>In the heartbeat of football fervor, amidst the electrifying thrills of the gridiron battles, lies the remarkable fraternity known as the League of Inches. Rooted deeply in the camaraderie of friendship and a shared love for the sport, this league embodies the spirit of competition at its finest. Founded in the historic 2009 season, what began as a small community of enthusiasts has flourished into a 12-team powerhouse, where the clash for fantasy football supremacy unfolds year after year.</p>
    
    <p>United by friendship and fueled by passion, participants in the League of Inches are not just ordinary fantasy football managers; they are the custodians of a tradition that has grown richer with every passing season. As the league has matured, so has the bond that brings everyone together, fostering not just a competitive spirit but a familial atmosphere that transcends the virtual gridiron. It's a league woven together by the threads of friendship, camaraderie, and the mutual respect that each member has for one another.</p>
  </section>

  <section>
    <p>Each season, twelve formidable teams take to the virtual field with dreams of glory, armed with strategy, skill, and a touch of luck. As the weeks unfold, managers navigate through the highs and lows, the triumphs and heartbreaks, all vying for the coveted championship that only one will claim but all aspire to seize. But beyond the rivalry and the chase for the title lies the heartbeat of the League of Inches - a bond that stands the test of time, surviving trade disputes, waiver wire battles, and nail-biting playoff showdowns.</p>

    <p>At its core, the League of Inches is more than just a fantasy football league. It is a living testament to the friendships forged and nurtured over a shared love for football. A celebration of the joy and exhilaration that comes from competing against friends, where every inch gained is a step towards bragging rights and where every season is a new chapter in the ever-evolving story of a league bound by friendship and love for the game.</p>
  </section>

  <section>
    <p>As you traverse through the annals of our league's history on this website, you will find more than just statistics and records. You will find stories of friendship, tales of rivalry, and chronicles of unforgettable moments that define the League of Inches. So, whether you're a seasoned veteran or a newcomer eager to make your mark, welcome to a league where every inch matters, where every play counts, and where friendships are forged in the fiery crucibles of competition.</p>

    <p>Welcome to the League of Inches, where friendships are tested, legends are born, and the spirit of football lives on!</p>
  </section>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

async function getUserAvatar(userId) {
  try {
    const userResponse = await fetch(`https://api.sleeper.app/v1/user/${userId}`);

    if (!userResponse.ok) {
      throw new Error('Network response was not ok ' + userResponse.statusText);
    }

    const userData = await userResponse.json();
    const avatarId = userData.avatar;

    if (!avatarId) {
      console.log('No avatar ID found for user. Using fallback image.');
      return "/managers/name.jpg";
    }

    return `https://sleepercdn.com/avatars/${avatarId}`;
  } catch (error) {
    console.error('Error fetching user avatar:', error);
    return "/managers/name.jpg";
  }
}

export const managers = [
  {
    "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "185602454543810560",
    "name": "Jon",
    // "tookOver": 2009, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Canton, GA", // (optional)
    "bio": "If I start someone, you probably shouldn't.",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2009, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Nick", // Can be anything (usually your rival's name)
      link: 4, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "If you ain't first, you're last!",
    "tradingScale": 8, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "607787317511409664",
    "name": "Tom",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "gb", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Ethan", // Can be anything (usually your rival's name)
      link: 8, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "303609667005730816",
    "name": "Matt",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Sandy", // Can be anything (usually your rival's name)
      link: 9, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 4,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "508126355881230336",
    "name": "Nick",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Rival", // Can be anything (usually your rival's name)
      link: 1, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 5,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "603135208430034944",
    "name": "Ben",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Missoula, MT", // (optional)
    "bio": "",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2011, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Chad", // Can be anything (usually your rival's name)
      link: 10, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 6797, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "K", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    // "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Have Justin Herbert lead me to the promised land",
    "tradingScale": 7, // 1 - 10
    "preferredContact": "Discord", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 6,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "987428865872064512",
    "name": "Mikey",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "no", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Drew", // Can be anything (usually your rival's name)
      link: 12, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 7,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "524798923762999296",
    "name": "Lee",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Jeremy", // Can be anything (usually your rival's name)
      link: 11, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 8,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "525408097339387904",
    "name": "Ethan",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Tom", // Can be anything (usually your rival's name)
      link: 2, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 9,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "558489318706499584",
    "name": "Sandy",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "mia", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Matt", // Can be anything (usually your rival's name)
      link: 3, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 10,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "507273347500560384",
    "name": "Chad",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "atl", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Ben", // Can be anything (usually your rival's name)
      link: 5, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 11,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "303734156062371840",
    "name": "Jeremy",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Brooklyn", // (optional)
    "bio": "Lorem ipsum...",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Lee", // Can be anything (usually your rival's name)
      link: 7, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "Your fantasy team's philosophy",
    "tradingScale": 10, // 1 - 10
    "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
  {
    "roster": 12,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    "managerID": "303742494204506112",
    "name": "Drew",
    // "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    "location": "Sanford Stadium", // (optional)
    "bio": "Not your fathers fantasy football adversary ",
    "photo": null, // this gets set via updateManagerPhotos()
    "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    // "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    "rival": {
      name: "Mikey", // Can be anything (usually your rival's name)
      link: 6, // manager array number within this array, or null to link back to all managers page
      image: null, // this gets set via updateManagerPhotos()
    },
    "favoritePlayer": 2315, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    // "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    "philosophy": "FTMF",
    "tradingScale": 1, // 1 - 10
    // "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
  },
]

async function updateManagerPhotos() {
  for (let manager of managers) {
    manager.photo = await getUserAvatar(manager.managerID);

    if (manager.rival.link !== null) {
      const rivalIndex = manager.rival.link - 1;  // Adjusting for 0-based indexing
      if (managers[rivalIndex]) {
        manager.rival.image = await getUserAvatar(managers[rivalIndex].managerID);
      } else {
        manager.rival.image = "/managers/rival.png"; // Fallback image if no manager is found at the linked index
      }
    }
  }
}

updateManagerPhotos().then(r => console.log("Manager photos updated"));


  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */

    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": null, // this gets set via updateManagerPhotos()
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: null, // this gets set via updateManagerPhotos()
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
