This is a BETA version.  
There is no GUI and it requires at least a basic understanding of entering commands in the browser console.  
In order to use the script you will need to copy-and-paste it into the browser console.  
  
If you want an auto-clicker, I recommend that you use Kitten Scientists  
( https://github.com/cameroncondry/cbc-kitten-scientists )  
It is bug free, guaranteed to do everything correctly, and a lot less likely to break when there is a new version of Kittens.  
  
The reasons I use my auto-clicker instead of Kitten Scientists:  
My auto-clicker tells you what it is building next and how long it is estimated to take. It also allows you to set the maximum allowed time...the project will be skipped if it's estimated to take longer.  
  
This auto-clicker can also be used as a learning tool (which is how I used it). I tried to use very basic code and stayed as granular as possible with my formulas. If you are interested in how Kittens works, reading through my code could provide insight. The function updateCatnipVariables() is a good example. It should be able to walk you through all of the aspects that determine Catnip production. Just keep in mind that I did use this as a learning tool and my code does not follow the standard programming formatting rules (i.e. - it's somewhat messy).  
  
Almost everything in this auto-clicker is optional and can be enabled/disabled on the fly.  
  
**Automation**  
* Allows you to select the order that you would prefer to build Earth buildings, Space missions, and Space buildings.

* Allows you to select the ratios for Jobs, the maximum kittens working each Job, and the order you want Jobs filled.

* Science researching and Workshop upgrading.

* Praising.

* Hunting and some Trading/Exploring.

* Crafting.

* Leader promoting.

Housing will only be built if it won't cause your kittens to starve and it won't cause happiness to fall below 80%.

Catnip Fields and Pastures will only be built during Spring if you could not feed youself during a cold Winter.

**The command to start Kitty-Assist.**  
startKittyAssist()  
  
**The options which you can turn on or off.**  
**(Leader Rank Increases Kitten Efficiency is disabled by default)**  
    optionsKittyAssist[0] = { activity: "Auto-Promote Leader", allowed: 1 };  
    optionsKittyAssist[1] = { activity: "Auto-Craft Resources", allowed: 1 };  
    optionsKittyAssist[2] = { activity: "Auto-Trade With Other Civilizations", allowed: 1 };  
    optionsKittyAssist[3] = { activity: "Auto-Control Smelter", allowed: 1 };  
    optionsKittyAssist[4] = { activity: "Leader Rank Increases Kitten Efficiency", allowed: 0 };  
    optionsKittyAssist[5] = { activity: "Auto-Control Steamworks", allowed: 1 };  
    optionsKittyAssist[6] = { activity: "Auto-Build 1st Calciner", allowed: 1 };  
    optionsKittyAssist[7] = { activity: "Auto-Build 2nd Hut", allowed: 1 };  
  
**The order in which Kitty Assist will attempt each of the activities.**  
**To disable an activity you must remove it from this array.**  
    var tabOrder =  
    	[  
    		earthBuildID,  
    		religionID,  
    		huntExploreTradeID,  
    		assignJobsID,  
    		researchScienceID,  
    		workshopUpgradesID,  
    		findPlanetsID,  
    		spaceBuildID  
    	];  
  
**The order in which kittens are assigned to jobs.**  
    var autoJobOrder =  
    	[  
    		scholarID,  
    		woodcutterID,  
    		farmerID,  
    		minerID,  
    		hunterID,  
    		priestID,  
    		geologistID  
    	];  
  
**The array that allows the player to set job ratios and max kittens allowed in each job.**  
    jobList[woodcutterID] = { name: "woodcutter", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };  
    jobList[farmerID] = { name: "farmer", maxKittens: 10, playerEnteredRatio: 14, kittensToAdd: 0 };  
    jobList[scholarID] = { name: "scholar", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };  
    jobList[hunterID] = { name: "hunter", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };  
    jobList[minerID] = { name: "miner", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };  
    jobList[priestID] = { name: "priest", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };  
    jobList[geologistID] = { name: "geologist", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };  
  
**The command that will re-assign all of the kittens (in case you changed the job ratios or made manual adjustments).**  
    reassignAllJobs = 1  
  
**The order in which buildings are tested to see if they can be built (lodgings are last by default).**  
    var autoBuildingOrder =  
    	[  
    		fieldID,  
    		pastureID,  
    		aqueductID,  
    		libraryID,  
    		academyID,  
    		observatoryID,  
    		biolabID,  
    		barnID,  
    		warehouseID,  
    		harborID,  
    		mineID,  
    		quarryID,  
    		smelterID,  
    		calcinerID,  
    		steamworksID,  
    		magnetoID,  
    		lumberMillID,  
    		oilWellID,  
    		workshopID,  
    		factoryID,  
    		reactorID,  
    		acceleratorID,  
    		tradepostID,  
    		mintID,  
    		amphitheatreID,  
    		chapelID,  
    		templeID,  
    		unicornPastureID,  
    		zigguratID,  
    		chronosphereID,  
    		hutID,  
    		logHouseID,  
    		mansionID  
    	];  
  	
**The order in which ground control missions are attempted.**  
    var groundControlOrder =  
    	[  
    		orbitalLaunchID,  
    		moonID,  
    		duneID,  
    		piscineID,  
    		heliosID,  
    		terminusID,  
    		kairoID,  
    		rorschachID,  
    		yarnID  
    	];  
  
**The order in which space buildings are tested to see if they can be built.**  
    var spaceBuildingsOrder =  
    [  
        spaceElevatorID,  
        satteliteID,  
        spaceStationID,  
        moonOutpostID,  
        moonBaseID,  
        planetCrackerID,  
        hydrofracturerID,  
        researchVesselID,  
        orbitalArrayID,  
        sunlifterID,  
        cryostationID,  
        spaceBeaconID,  
        terraformingStationID,  
        hydroponicsID  
    ];  
  
**If a building will require more than this number of seconds then the building will not be attempted.**  
    maxAllowedTime = 600;  
  
**Auto-crafting uses the following rules:**  
1) A resource can only be auto-crafted if its primary resources are fully stockpiled (You can only craft wood if the catnip stockpile is full...this reduces double-dipping).  
  
2) The rate at which resources are auto-crafted is based upon the production rate of the resources in its supply chain (the rate at which scaffolds are auto-crafted is based upon the production rates of catnip, wood, and beams).  
  
3) Since all of the crafted resources are made simultaneously, all of the required resources are evenly divided between each of the resources being crafted (e.g. - half of the wood is put towards beams and half towards scaffolds). This means that each individual resource is crafted more slowly than if the player crafted manually, however because all of the resources are being auto-crafted simultaneously a similar quantity should be crafted in a similar amount of time. The amount of time won't be exactly the same because the resources are divided evenly instead of according to what is required.  
  
**Issues/Problems:**  
1) I was able to NOT use hardcoding through most of the auto-clicker, however I was not able to figure out a way to do the auto-crafting without making the formulas hardcoded...the variables are NOT hardcoded (sounds strange but it's true). This is because the Kittens source code was not designed for the rules I was using for auto-crafting. I was able to make auto-crafting only 50% hardcoded, but it was a mess and I decided it was better to hardcode everything.  This expanded what I was able to do and also makes the script more likely to break as changes are made to the Kittens source code.  
  
2) There is a rarely occuring bug that I might or might not have already fixed (it's difficult to tell because it rarely occurs and seems random). It seems to occur if the player manually hires/fires kittens from jobs or assigns/removes a kitten as leader, while the auto-clicker is building. The Kittens game will continue with no problems, but the auto-clicker will stop. I think it has something to do with bad timing between my script and game.village.sim.kittens[x].exp and render().  
  
3) I did not include any religion activities, except for Praising, because I have not played the game enough to know what I am messing with.  
  
4) The auto-clicker will ignore: Zebras, Antimatter, Unicorns, Alicorns, Necrocorns, Tears, Time Crystals, Sorrow, Relics, and Elder Boxes. I don't want to accidently ruin the game by meddling with things that I have never encountered.  
