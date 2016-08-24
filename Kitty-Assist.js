/*Version d018*/

var nextBuildingArrayID = 0; /*array number for a specific building in the nextBuilding array*/
var autoBuildingID = 0; /*actual building ID according to Kittens*/
var nextSpaceBuildingArrayID = 0;
var nextGroundControlArrayID = 0;

var nextScienceArrayID = 0; /*array number for a specific science in the scienceList array*/
var scienceResourcesArrayID = 0; /*array number for the resource required for a specific science in the scienceList*/
var scienceResourceID = 0;
var scienceProgress = 0;

var resourceArrayID = 0; /*array number for a specific building and a specific resource in the nextBuilding array*/
var sequesterRate = 0;
var maxEstimatedTime = 0;
var maxAllowedTime = 600; /*if a building will require more than this number of seconds then the building will not be attempted*/

var intervalCraftControl = 0; /*start and stop resource sequester*/
var intervalBuildControl = 0; /*start and stop autoBuild*/

var kittyAssistStatus = 1; /*1=run, 0=stop*/

var nextTabArrayID = 0;
var nextTabOrderID = 0;
var nextTabImmediately = 0;

var autoMsg = 0;

var tabArray = [ ];
var resourceList = [ ];
var jobList = [ ];
var optionsKittyAssist = [ ];
var buildingList = [ ];
var groundControlList = [ ];
var planetList = [ ];
var spaceBuildingList = [ ];
var scienceList = [ ];
var workshopList = [ ];
var resourceList = [ ];
var resourceRequired = [ ];
var crftResourceList = [ ];

var resourceStockpiled0 = 0;
var resourceStockpiled1 = 0;
var resourceStockpiled2 = 0;
var resourceStockpiled3 = 0;
var craftID = 0;
var adjustRefineRate = 0;
var craftResourceID = 0;
var craftResourceSubID = 0;
var bypassFurs = 0;

var buildingCount = 0;
var planetID = 0;

var resourceID = 0;
var estimatedTime = 0;
var maxEstimatedTime = 0;
var resourcesExceeded = 0;
var resourcesUsed = 0;
var progress = 0;
var resourceTypesSequestered = 0;
var refiningCatnip = 0;
var adjustRefineRate = 0;
var craftingStatus = 0;
var currentBuildingCount = 0;
var planetPanelsID = 0;
var planetPanelsChildrenID = 0;
var groundControlActive = 0;
var spaceBuildingActive = 0;
var earthBuildingActive = 0;
var noMoreMissions = 0;
var noMoreScience = 0;

var activateSmelter = 0;

var stages = 0;
var stageUnlocked = 0;
var currentStage = 0;
var hasStages = 0;

var jobID = 0;
var jobNeedingKittens = 0;
var totalRatio = 0;
var maxKittensToAdd = 0;
var freeKittenCount = 0;
var freeKitten = 0;
var jobNumber = 0;
var reassignAllJobs = 0;
var craftingKittens = 0;
var identifiedKittens = 0;

var currentlyCraftingID = 0;

var civID = 0;
var hunterProgress = 0;

var nextJobArrayID = 0;
var jobWoodBase = 0;
var jobCatnipBase = 0;
var jobScienceBase = 0;
var jobStarchartsBase = 0;
var jobManpowerBase = 0;
var minerIDalsBase = 0;
var jobFaithBase = 0;
var jobCoalBase = 0;
var jobCoalModifier = 0;
var jobGoldModifier = 0;

var noMoreUpgrades = 0;
var allCraftsAvailable = 0;
var allProducedAvailable = 0;
var allRareAvailable = 0;

/*in order to remove hardcoding, I needed to create variables for almost everything in the game*/
var catnipProduction = 0;
var catnipVillage = 0;
var catnipValueModifierPerSkill = 0;
var happiness = 0;
var catnipWeather = 0;
var catnipTools = 0;
var catnipBuildings = 0;
var catnipFaith = 1;
var catnipMagneto = 0;
var catnipReactor = 0;
var catnipParagon = 0;
var catnipDemand = 0;
var catnipMaxDemand = 0;
var catnipPerSecondBadWinter = 0;
var currentCatnipProduction = 0;

var lastRank = 0;
var currentRank = 0;

var seasonBuild = "0-0";
var seasonScience = "0-0";
var seasonWorkshop = "0-0";
var seasonJob = "0-0";
var seasonHunt = "0-0";
var seasonPraise = "0-0";
var seasonSequester = "0-0";
var seasonGroundControl = "0-0";
var seasonSpaceBuildings = "0-0";

var woodcutterID = 0;
var farmerID = 0;
var scholarID = 0;
var hunterID = 0;
var minerID = 0;
var priestID = 0;
var geologistID = 0;

var catnipID = 0;
var woodID = 0;
var mineralsID = 0;
var coalID = 0;
var ironID = 0;
var titaniumID = 0;
var goldID = 0;
var oilID = 0;
var uraniumID = 0;
var unobtainiumID = 0;
var catpowerID = 0;
var scienceID = 0;
var cultureID = 0;
var faithID = 0;
var kittensID = 0;
var zebrasID = 0;
var starchartID = 0;
var antimatterID = 0;
var fursID = 0;
var ivoryID = 0;
var spiceID = 0;
var unicornsID = 0;
var alicornID = 0;
var necrocornID = 0;
var tearsID = 0;
var karmaID = 0;
var paragonID = 0;
var timeCrystalID = 0;
var sorrowID = 0;
var beamID = 0;
var slabID = 0;
var concreteID = 0;
var plateID = 0;
var steelID = 0;
var alloyID = 0;
var eludiumID = 0;
var gearID = 0;
var scaffoldID = 0;
var shipID = 0;
var tankerID = 0;
var parchmentID = 0;
var manuscriptID = 0;
var compendiumID = 0;
var relicID = 0;
var elderBoxID = 0;
var blueprintID = 0;
var megalithID = 0;
var keroseneID = 0;

var woodCraftID = 0;
var beamCraftID = 0;
var scaffoldCraftID = 0;
var slabCraftID = 0;
var steelCraftID = 0;
var alloyCraftID = 0;
var gearCraftID = 0;
var shipCraftID = 0;
var parchmentCraftID = 0;
var manuscriptCraftID = 0;
var compendiumCraftID = 0;
var blueprintCraftID = 0;
var megalithCraftID = 0;
var plateCraftID = 0;
var concreteCraftID = 0;
var eludiumCraftID = 0;
var tankerCraftID = 0;
var keroseneCraftID = 0;

var fieldID = 0;
var pastureID = 0;
var aqueductID = 0;
var hutID = 0;
var logHouseID = 0;
var mansionID = 0;
var libraryID = 0;
var academyID = 0;
var observatoryID = 0;
var biolabID = 0;
var barnID = 0;
var warehouseID = 0;
var harborID = 0;
var mineID = 0;
var quarryID = 0;
var smelterID = 0;
var calcinerID = 0;
var steamworksID = 0;
var magnetoID = 0;
var lumberMillID = 0;
var oilWellID = 0;
var workshopID = 0;
var factoryID = 0;
var reactorID = 0;
var acceleratorID = 0;
var tradepostID = 0;
var mintID = 0;
var amphitheatreID = 0;
var chapelID = 0;
var templeID = 0;
var unicornPastureID = 0;
var zigguratID = 0;
var chronosphereID = 0;

var orbitalLaunchID = 0;
var moonID = 0;
var duneID = 0;
var piscineID = 0;
var heliosID = 0;
var terminusID = 0;
var kairoID = 0;
var rorschachID = 0;
var yarnID = 0;

var spaceElevatorID = 0;
var satteliteID = 0;
var spaceStationID = 0;
var moonOutpostID = 0;
var moonBaseID = 0;
var planetCrackerID = 0;
var hydrofracturerID = 0;
var researchVesselID = 0;
var orbitalArrayID = 0;
var sunlifterID = 0;
var cryostationID = 0;
var spaceBeaconID = 0;
var terraformingStationID = 0;
var hydroponicsID = 0;

var solarRevolutionID = 0;

var constructionID = 0;
var nuclearFissionID = 0;

var coalFurnaceID = 0;
var goldOreID = 0;
var nuclearSmeltersID = 0;
var astrophysicistsID = 0;
var miningDrillID = 0;
var unobtainiumDrillID = 0;
var geodesyID = 0;
var printingPressID = 0;

var earthBuildID = 0;
var assignJobsID = 1;
var researchScienceID = 2;
var workshopUpgradesID = 3;
var huntExploreTradeID = 4;
var religionID = 5;
var findPlanetsID = 6;
var spaceBuildID = 7;

var i = 0;
var ii = 0;
var iii = 0;
var x = 0;
var xx = 0;
var yy = 0;
var zz = 0;

var delayVariable;
var delayProcedure;
var delayInterval = 0;

var scienceID = 0;
var kittensID = 0;


/*finding commonly used IDs and assigning them variables*/
for( i = 0; i < game.resPool.resources.length; i++ )
{
	if( game.resPool.resources[i].name == "catnip" ) { catnipID = i; };
	if( game.resPool.resources[i].name == "wood" ) { woodID = i; };
	if( game.resPool.resources[i].name == "minerals" ) { mineralsID = i; };
	if( game.resPool.resources[i].name == "coal" ) { coalID = i; };
	if( game.resPool.resources[i].name == "iron" ) { ironID = i; };
	if( game.resPool.resources[i].name == "titanium" ) { titaniumID = i; };
	if( game.resPool.resources[i].name == "gold" ) { goldID = i; };
	if( game.resPool.resources[i].name == "oil" ) { oilID = i; };
	if( game.resPool.resources[i].name == "uranium" ) { uraniumID = i; };
	if( game.resPool.resources[i].name == "unobtainium" ) { unobtainiumID = i; };
	if( game.resPool.resources[i].name == "manpower" ) { catpowerID = i; };
	if( game.resPool.resources[i].name == "science" ) { scienceID = i; };
	if( game.resPool.resources[i].name == "culture" ) { cultureID = i; };
	if( game.resPool.resources[i].name == "faith" ) { faithID = i; };
	if( game.resPool.resources[i].name == "kittens" ) { kittensID = i; };
	if( game.resPool.resources[i].name == "zebras" ) { zebrasID = i; };
	if( game.resPool.resources[i].name == "starchart" ) { starchartID = i; };
	if( game.resPool.resources[i].name == "antimatter" ) { antimatterID = i; };
	if( game.resPool.resources[i].name == "furs" ) { fursID = i; };
	if( game.resPool.resources[i].name == "ivory" ) { ivoryID = i; };
	if( game.resPool.resources[i].name == "spice" ) { spiceID = i; };
	if( game.resPool.resources[i].name == "unicorns" ) { unicornsID = i; };
	if( game.resPool.resources[i].name == "alicorn" ) { alicornID = i; };
	if( game.resPool.resources[i].name == "necrocorn" ) { necrocornID = i; };
	if( game.resPool.resources[i].name == "tears" ) { tearsID = i; };
	if( game.resPool.resources[i].name == "karma" ) { karmaID = i; };
	if( game.resPool.resources[i].name == "paragon" ) { paragonID = i; };
	if( game.resPool.resources[i].name == "timeCrystal" ) { timeCrystalID = i; };
	if( game.resPool.resources[i].name == "sorrow" ) { sorrowID = i; };
	if( game.resPool.resources[i].name == "beam" ) { beamID = i; };
	if( game.resPool.resources[i].name == "slab" ) { slabID = i; };
	if( game.resPool.resources[i].name == "concrate" ) { concreteID = i; };
	if( game.resPool.resources[i].name == "plate" ) { plateID = i; };
	if( game.resPool.resources[i].name == "steel" ) { steelID = i; };
	if( game.resPool.resources[i].name == "alloy" ) { alloyID = i; };
	if( game.resPool.resources[i].name == "eludium" ) { eludiumID = i; };
	if( game.resPool.resources[i].name == "gear" ) { gearID = i; };
	if( game.resPool.resources[i].name == "scaffold" ) { scaffoldID = i; };
	if( game.resPool.resources[i].name == "ship" ) { shipID = i; };
	if( game.resPool.resources[i].name == "tanker" ) { tankerID = i; };
	if( game.resPool.resources[i].name == "parchment" ) { parchmentID = i; };
	if( game.resPool.resources[i].name == "manuscript" ) { manuscriptID = i; };
	if( game.resPool.resources[i].name == "compedium" ) { compendiumID = i; };
	if( game.resPool.resources[i].name == "relic" ) { relicID = i; };
	if( game.resPool.resources[i].name == "elderBox" ) { elderBoxID = i; };
	if( game.resPool.resources[i].name == "blueprint" ) { blueprintID = i; };
	if( game.resPool.resources[i].name == "megalith" ) { megalithID = i; };
	if( game.resPool.resources[i].name == "kerosene" ) { keroseneID = i; };
};
for( i = 0; i < game.craftTable.resRows.length; i++ )
{
	if( game.craftTable.resRows[i].recipeRef.name == "wood" ) { woodCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "beam" ) { beamCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "scaffold" ) { scaffoldCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "slab" ) { slabCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "steel" ) { steelCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "alloy" ) { alloyCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "gear" ) { gearCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "ship" ) { shipCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "parchment" ) { parchmentCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "manuscript" ) { manuscriptCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "compedium" ) { compendiumCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "blueprint" ) { blueprintCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "megalith" ) { megalithCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "plate" ) { plateCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "concrate" ) { concreteCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "eludium" ) { eludiumCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "tanker" ) { tankerCraftID = i; };
	if( game.craftTable.resRows[i].recipeRef.name == "kerosene" ) { keroseneCraftID = i; };
};
for( i = 0; i < game.bld.buildingsData.length; i++ )
{
	if( game.bld.buildingsData[i].name == "field" ) { fieldID = i; };
	if( game.bld.buildingsData[i].name == "pasture" ) { pastureID = i; };
	if( game.bld.buildingsData[i].name == "aqueduct" ) { aqueductID = i; };
	if( game.bld.buildingsData[i].name == "hut" ) { hutID = i; };
	if( game.bld.buildingsData[i].name == "logHouse" ) { logHouseID = i; };
	if( game.bld.buildingsData[i].name == "mansion" ) { mansionID = i; };
	if( game.bld.buildingsData[i].name == "library" ) { libraryID = i; };
	if( game.bld.buildingsData[i].name == "academy" ) { academyID = i; };
	if( game.bld.buildingsData[i].name == "observatory" ) { observatoryID = i; };
	if( game.bld.buildingsData[i].name == "biolab" ) { biolabID = i; };
	if( game.bld.buildingsData[i].name == "barn" ) { barnID = i; };
	if( game.bld.buildingsData[i].name == "warehouse" ) { warehouseID = i; };
	if( game.bld.buildingsData[i].name == "harbor" ) { harborID = i; };
	if( game.bld.buildingsData[i].name == "mine" ) { mineID = i; };
	if( game.bld.buildingsData[i].name == "quarry" ) { quarryID = i; };
	if( game.bld.buildingsData[i].name == "smelter" ) { smelterID = i; };
	if( game.bld.buildingsData[i].name == "calciner" ) { calcinerID = i; };
	if( game.bld.buildingsData[i].name == "steamworks" ) { steamworksID = i; };
	if( game.bld.buildingsData[i].name == "magneto" ) { magnetoID = i; };
	if( game.bld.buildingsData[i].name == "lumberMill" ) { lumberMillID = i; };
	if( game.bld.buildingsData[i].name == "oilWell" ) { oilWellID = i; };
	if( game.bld.buildingsData[i].name == "workshop" ) { workshopID = i; };
	if( game.bld.buildingsData[i].name == "factory" ) { factoryID = i; };
	if( game.bld.buildingsData[i].name == "reactor" ) { reactorID = i; };
	if( game.bld.buildingsData[i].name == "accelerator" ) { acceleratorID = i; };
	if( game.bld.buildingsData[i].name == "tradepost" ) { tradepostID = i; };
	if( game.bld.buildingsData[i].name == "mint" ) { mintID = i; };
	if( game.bld.buildingsData[i].name == "amphitheatre" ) { amphitheatreID = i; };
	if( game.bld.buildingsData[i].name == "chapel" ) { chapelID = i; };
	if( game.bld.buildingsData[i].name == "temple" ) { templeID = i; };
	if( game.bld.buildingsData[i].name == "unicornPasture" ) { unicornPastureID = i; };
	if( game.bld.buildingsData[i].name == "ziggurat" ) { zigguratID = i; };
	if( game.bld.buildingsData[i].name == "chronosphere" ) { chronosphereID = i; };
};
for( i = 0; i < game.village.jobs.length; i++ )
{
	if( game.village.jobs[i].name == "woodcutter" ) { woodcutterID = i; };
	if( game.village.jobs[i].name == "farmer" ) { farmerID = i; };
	if( game.village.jobs[i].name == "scholar" ) { scholarID = i; };
	if( game.village.jobs[i].name == "hunter" ) { hunterID = i; };
	if( game.village.jobs[i].name == "miner" ) { minerID = i; };
	if( game.village.jobs[i].name == "priest" ) { priestID = i; };
	if( game.village.jobs[i].name == "geologist" ) { geologistID = i; };
};
for( i = 0; i < game.religion.meta[2].meta.length; i++ )
{
	if( game.religion.meta[2].meta[i].name == "solarRevolution" ) { solarRevolutionID = i; };
};
for( i = 0; i < game.science.techs.length; i++ )
{
	if( game.science.techs[i].name == "construction" ) { constructionID = i; };
	if( game.science.techs[i].name == "nuclearFission" ) { nuclearFissionID = i; };
};
for( i = 0; i < game.workshop.meta[0].meta.length; i++ )
{
	if( game.workshop.meta[0].meta[i].name == "coalFurnace" ) { coalFurnaceID = i; };
	if( game.workshop.meta[0].meta[i].name == "goldOre" ) { goldOreID = i; };
	if( game.workshop.meta[0].meta[i].name == "nuclearSmelters" ) { nuclearSmeltersID = i; };
	if( game.workshop.meta[0].meta[i].name == "astrophysicists" ) { astrophysicistsID = i; };
	if( game.workshop.meta[0].meta[i].name == "miningDrill" ) { miningDrillID = i; };
	if( game.workshop.meta[0].meta[i].name == "unobtainiumDrill" ) { unobtainiumDrillID = i; };
	if( game.workshop.meta[0].meta[i].name == "geodesy" ) { geodesyID = i; };
	if( game.workshop.meta[0].meta[i].name == "printingPress" ) { printingPressID = i; };
};
for( i = 0; i < game.space.programs.length; i++ )
{
	if( game.space.programs[i].name == "orbitalLaunch" ) { orbitalLaunchID = i; };
	if( game.space.programs[i].name == "moonMission" ) { moonID = i; };
	if( game.space.programs[i].name == "duneMission" ) { duneID = i; };
	if( game.space.programs[i].name == "piscineMission" ) { piscineID = i; };
	if( game.space.programs[i].name == "heliosMission" ) { heliosID = i; };
	if( game.space.programs[i].name == "terminusMission" ) { terminusID = i; };
	if( game.space.programs[i].name == "kairoMission" ) { kairoID = i; };
	if( game.space.programs[i].name == "rorschachMission" ) { rorschachID = i; };
	if( game.space.programs[i].name == "yarnMission" ) { yarnID = i; };
};

jobWoodBase = game.village.jobs[woodcutterID].modifiers.wood;
jobCatnipBase = game.village.jobs[farmerID].modifiers.catnip;
jobScienceBase = game.village.jobs[scholarID].modifiers.science;
jobManpowerBase = game.village.jobs[hunterID].modifiers.manpower;
minerIDalsBase = game.village.jobs[minerID].modifiers.minerals;
jobFaithBase = game.village.jobs[priestID].modifiers.faith;
/*the coal base had to be hardcoded because there is no way to get the original base if the auto-clicker is started in the middle of a game*/
jobCoalBase = .015;


/*the order in which kittens are assigned to jobs and the maximum kittens allowed per job*/
/*The default Job order is based upon what is needed fully automate the beginning of the game*/
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

/*the order in which buildings are tested to see if they can be built - lodgings are last*/
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

/*the order in which ground control missions are attempted*/
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

/*the order in which space buildings are tested to see if they can be built*/
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

/*the order in which Kitty Assist will attempt each of the activities*/
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

/*the activities assigned to the auto-clicker*/
tabArray[0] = { name: autoBuild, activity: "Build Earth Buildings" };
tabArray[1] = { name: autoJobs, activity: "Assign Kittens Jobs" };
tabArray[2] = { name: autoScience, activity: "Research Science" };
tabArray[3] = { name: autoWorkshop, activity: "Workshop Upgrades" };
tabArray[4] = { name: autoHuntTrade, activity: "Hunt, Explore, and Trade" };
tabArray[5] = { name: autoReligion, activity: "Praise" };
tabArray[6] = { name: autoGroundControl, activity: "Find Planets" };
tabArray[7] = { name: autoSpaceBuildings, activity: "Build Space Buildings" };

/*the options which you can turn on or off*/
optionsKittyAssist[0] = { activity: "Auto-Promote Leader", allowed: 1 };
optionsKittyAssist[1] = { activity: "Auto-Craft Resources", allowed: 1 };
optionsKittyAssist[2] = { activity: "Auto-Trade With Other Civilizations", allowed: 1 };
optionsKittyAssist[3] = { activity: "Auto-Control Smelter", allowed: 1 };
optionsKittyAssist[4] = { activity: "Leader Rank Increases Kitten Efficiency", allowed: 0 };
optionsKittyAssist[5] = { activity: "Auto-Control Steamworks", allowed: 1 };
optionsKittyAssist[6] = { activity: "Auto-Build 1st Calciner", allowed: 1 };
optionsKittyAssist[7] = { activity: "Auto-Build 2nd Hut", allowed: 1 };
optionsKittyAssist[8] = { activity: "Alternate crafting of Parchments & Manuscripts", allowed: 1 };

/*the array that allows the player to set job ratios and max kittens allowed in each job*/
jobList[woodcutterID] = { name: "woodcutter", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };
jobList[farmerID] = { name: "farmer", maxKittens: 10, playerEnteredRatio: 14, kittensToAdd: 0 };
jobList[scholarID] = { name: "scholar", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };
jobList[hunterID] = { name: "hunter", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };
jobList[minerID] = { name: "miner", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };
jobList[priestID] = { name: "priest", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };
jobList[geologistID] = { name: "geologist", maxKittens: 50000, playerEnteredRatio: 14, kittensToAdd: 0 };



game.science.hideResearched = true;
game.workshop.hideResearched = true;
game.space.hideResearched = true;
game.colorScheme = "dark";
game.ui.updateOptions();
game.render();



/*create Earth building list*/
for( i = 0; i < game.bld.buildingsData.length; i++ )
{
	stages = 0;
	buildingList[i] =
	{
		buildingGroup: 0,
		stages: 0,
		hasStages: 0
	};
	
	for ( x in game.bld.buildingsData[i] )
	{
		if( x == "stages" ) { stages = 1; };
	};
	
	if( stages == 1 )
	{
		buildingList[i].hasStages = 1;
		buildingList[i].stages = [ ];
		buildingList[i].stages[0] = { label: 0, prices: 0 };
		buildingList[i].stages[0].prices = [ ];
		buildingList[i].stages[1] = { label: 0, prices: 0 };
		buildingList[i].stages[1].prices = [ ];
		xx = 0;
		yy = 0;
		zz = 0;

		for( xx = 0; xx < game.bld.buildingsData[i].stages.length; xx++ )
		{
			buildingList[i].stages[xx].label = game.bld.buildingsData[i].stages[xx].label;
			for( yy = 0; yy < game.bld.buildingsData[i].stages[xx].prices.length; yy++ )
			{
				for( zz = 0; zz < game.resPool.resources.length; zz++ )
				{
					if( game.bld.buildingsData[i].stages[xx].prices[yy].name == game.resPool.resources[zz].name )
					{
						buildingList[i].stages[xx].prices[yy] = { resourceID: zz, name: game.resPool.resources[zz].name, val: game.bld.buildingsData[i].stages[xx].prices[yy].val };
					};
				};
			};
		};
	} else
	{
		buildingList[i].stages = [ ];
		buildingList[i].stages[0] = { label: 0, prices: 0 };
		buildingList[i].stages[0].prices = [ ];
		yy = 0;
		zz = 0;
		
		buildingList[i].stages[0].label = game.bld.buildingsData[i].label;
		for( yy = 0; yy < game.bld.buildingsData[i].prices.length; yy++ )
		{
			for( zz = 0; zz < game.resPool.resources.length; zz++ )
			{
				if( game.bld.buildingsData[i].prices[yy].name == game.resPool.resources[zz].name )
				{
					buildingList[i].stages[0].prices[yy] = { resourceID: zz, name: game.resPool.resources[zz].name, val: game.bld.buildingsData[i].prices[yy].val };
				};
			};
		};
	};
};
for( i = 0; i < game.bld.buildingsData.length; i++ )
{
	for( ii = 0; ii < game.bld.buildingGroups.length; ii++ )
	{
		for( iii = 0; iii < game.bld.buildingGroups[ii].buildings.length; iii++ )
		{
			if( game.bld.buildingsData[i].name == game.bld.buildingGroups[ii].buildings[iii] )
			{ buildingList[i].buildingGroup = game.bld.buildingGroups[ii].name; };
		};
	};
};


/*create ground control list*/
for( i = 0; i < game.space.programs.length; i++ )
{
	groundControlList[groundControlList.length] =
	{
		name: game.space.programs[i].name,
		title: game.space.programs[i].title,
		prices: 0
	};
	groundControlList[i].prices = [ ];
	for( yy = 0; yy < game.space.programs[i].prices.length; yy++ )
	{
		for( zz = 0; zz < game.resPool.resources.length; zz++ )
		{
			if( game.space.programs[i].prices[yy].name == game.resPool.resources[zz].name )
			{
				groundControlList[i].prices[yy] = { resourceID: zz, name: game.resPool.resources[zz].name, val: game.space.programs[i].prices[yy].val };
			};
		};
	};
};


/*create planet list*/
for( i = 0; i < game.space.planets.length; i++ )
{
	planetList[i] = { name: game.space.planets[i].title, building: [] };
	for( ii = 0; ii < game.space.planets[i].buildings.length; ii++ )
	{
		planetList[i].building[ii] =
		{
			name: game.space.planets[i].buildings[ii].name,
			title: game.space.planets[i].buildings[ii].title,
			requiredTech: [ ],
			prices: [ ]
		};
		
		for ( x in game.space.planets[i].buildings[ii] )
		{
			if( x == "requiredTech" )
			{
				for( xx = 0; xx < game.space.planets[i].buildings[ii].requiredTech.length; xx++ )
				{
					for( yy = 0; yy < game.science.techs.length; yy++ )
					{
						if( game.space.planets[i].buildings[ii].requiredTech[xx] == game.science.techs[yy].name )
						{ planetList[i].building[ii].requiredTech[xx] = { scienceListID: yy }; };
					};
				};
			};
		};
		
		planetList[i].building[ii].prices = [ ];
		for( yy = 0; yy < game.space.planets[i].buildings[ii].prices.length; yy++ )
		{
			for( iii = 0; iii < game.resPool.resources.length; iii++ )
			{
				if( game.space.planets[i].buildings[ii].prices[yy].name == game.resPool.resources[iii].name )
				{
					planetList[i].building[ii].prices[yy] = { resourceID: iii, name: game.resPool.resources[iii].name, val: game.space.planets[i].buildings[ii].prices[yy].val };
				};
			};
		};
	};
};


/*create space buildings list*/
for( i = 0; i < planetList.length; i++ )
{
	for( ii = 0; ii < planetList[i].building.length; ii++ )
	{
		spaceBuildingList[spaceBuildingList.length] =
			{
				planet: i,
				building: ii,
				name: planetList[i].building[ii].name,
				title: planetList[i].building[ii].title
			};
	};
};
for( i = 0; i < spaceBuildingList.length; i++ )
{
	if( spaceBuildingList[i].name == "spaceElevator" ) { spaceElevatorID = i; };
	if( spaceBuildingList[i].name == "sattelite" ) { satteliteID = i; };
	if( spaceBuildingList[i].name == "spaceStation" ) { spaceStationID = i; };
	if( spaceBuildingList[i].name == "moonOutpost" ) { moonOutpostID = i; };
	if( spaceBuildingList[i].name == "moonBase" ) { moonBaseID = i; };
	if( spaceBuildingList[i].name == "planetCracker" ) { planetCrackerID = i; };
	if( spaceBuildingList[i].name == "hydrofracturer" ) { hydrofracturerID = i; };
	if( spaceBuildingList[i].name == "researchVessel" ) { researchVesselID = i; };
	if( spaceBuildingList[i].name == "orbitalArray" ) { orbitalArrayID = i; };
	if( spaceBuildingList[i].name == "sunlifter" ) { sunlifterID = i; };
	if( spaceBuildingList[i].name == "cryostation" ) { cryostationID = i; };
	if( spaceBuildingList[i].name == "spaceBeacon" ) { spaceBeaconID = i; };
	if( spaceBuildingList[i].name == "terraformingStation" ) { terraformingStationID = i; };
	if( spaceBuildingList[i].name == "hydroponics" ) { hydroponicsID = i; };
};


/*get science list*/
for( i = 0; i < game.science.techs.length; i++ )
{
	stages = 0; /*not really stages...just using a variable that is currently not being used*/
	scienceList[i] =
	{
		name: game.science.techs[i].name,
		label: game.science.techs[i].title,
		unlocked: 0,
		researched: 0,
		resources: 0
	};
	
	scienceList[i].resources = [ ];
	if( game.science.techs[i].unlocked == true ) { scienceList[i].unlocked = 1 } else { scienceList[i].unlocked = 0 };
	if( game.science.techs[i].researched == true ) { scienceList[i].researched = 1 } else { scienceList[i].researched = 0 };
	
	for ( x in game.science.techs[i] )
	{
		if( x == "prices" ) { stages = 1; };
	};
	
	if( stages == 1 )
	{
		yy = 0;
		zz = 0;

		for( yy = 0; yy < game.science.techs[i].prices.length; yy++ )
		{
			for( zz = 0; zz < game.resPool.resources.length; zz++ )
			{
				if( game.science.techs[i].prices[yy].name == game.resPool.resources[zz].name )
				{
					scienceList[i].resources[yy] = { resourceID: zz, name: game.resPool.resources[zz].name, val: game.science.techs[i].prices[yy].val };
				};
			};
		};
	} else
	{
		scienceList[i].resources[0] = { resourceID: scienceID, name: game.resPool.resources[scienceID].name, val: game.science.techs[i].cost };
	};
};

/*get workshop list*/
for( i = 0; i < game.workshop.meta[0].meta.length; i++ )
{
	workshopList[i] =
	{
		label: game.workshop.meta[0].meta[i].title,
		unlocked: 0,
		researched: 0,
		resources: 0
	};
	
	workshopList[i].resources = [ ];
	if( game.workshop.meta[0].meta[i].unlocked == true ) { workshopList[i].unlocked = 1 } else { workshopList[i].unlocked = 0 };
	if( game.workshop.meta[0].meta[i].researched == true ) { workshopList[i].researched = 1 } else { workshopList[i].researched = 0 };
	
	yy = 0;
	zz = 0;

	for( yy = 0; yy < game.workshop.meta[0].meta[i].prices.length; yy++ )
	{
		for( zz = 0; zz < game.resPool.resources.length; zz++ )
		{
			if( game.workshop.meta[0].meta[i].prices[yy].name == game.resPool.resources[zz].name )
			{
				workshopList[i].resources[yy] = { resourceID: zz, name: game.resPool.resources[zz].name, val: game.workshop.meta[0].meta[i].prices[yy].val };
			};
		};
	};
};


/*create resource list*/
for( i = 0; i < game.resPool.resources.length; i++ )
{		
	resourceList[i] =
	{
		resourceID: i,
		name: game.resPool.resources[i].name,
		type: 0, /*0=produced, 1=crafted, 2=not used by auto-clicker*/
		price: [ ],
		requiredScienceID: 0,
		visible: 0,
		available: 0,
		perSecProduction: 0,
		productionShares: 0,
		craftingAllowed: 0
	};
};

/*tag the craftable resources (type=1) and the resources which won't be used by the auto-clicker (type=2)*/
for( i = 0; i < game.resPool.resources.length; i++ )
{
	for( x in game.resPool.resources[i] )
	{
		if( x == "craftable" ) { resourceList[i].type = 1; };
	};
	if( game.resPool.resources[i].name == "blueprint" ) { resourceList[i].type = 1; };
	if
	(
		game.resPool.resources[i].transient == true &&
		game.resPool.resources[i].name != "blueprint" &&
		game.resPool.resources[i].name != "manpower" &&
		game.resPool.resources[i].name != "science" &&
		game.resPool.resources[i].name != "culture" &&
		game.resPool.resources[i].name != "faith"
	) { resourceList[i].type = 2; };
	if( game.resPool.resources[i].type != "common" && resourceList[i].type == 0 ) { resourceList[i].type = 2; };
	if
	(
		game.resPool.resources[i].name == "paragon" ||
		game.resPool.resources[i].name == "timeCrystal" ||
		game.resPool.resources[i].name == "sorrow" ||
		game.resPool.resources[i].name == "relic" ||
		game.resPool.resources[i].name == "elderBox"
	) { resourceList[i].type = 2; };
	
	/*wood is being set to produced because crafted resources are ignored until the workshop is built...and it can't be built without wood*/
	if( game.resPool.resources[i].name == "wood" ) { resourceList[i].type = 0; };

	/*starcharts are being set as produced instead of uncommon. Otherwise the auto-clicker would ignore everything in space*/
	if( game.resPool.resources[i].name == "starchart" ) { resourceList[i].type = 0; };

	/*furs and ivory are being set as produced instead of rare. Otherwise the auto-clicker would ignore religion, culture, and parchment related activities*/
	if( game.resPool.resources[i].name == "furs" ) { resourceList[i].type = 0; };
	if( game.resPool.resources[i].name == "ivory" ) { resourceList[i].type = 0; };

	/*starcharts are being (temporarily) set as craftable and the required science is added*/
	/*if( game.resPool.resources[i].name == "starchart" ) { resourceList[i].type = 1; resourceList[i].requiredScienceID = 17; };*/
};

/*get required resources to craft resources*/
if( game.activeTabId != "Workshop") { game.workshopTab.render(); };
for( i = 0; i < game.workshopTab.craftBtns.length; i++ )
{
	for( x = 0; x < game.resPool.resources.length; x++ )
	{
		if( game.workshopTab.craftBtns[i].craftName == game.resPool.resources[x].name ) { xx = x };
	};
	
	for( ii = 0; ii < game.workshopTab.craftBtns[i].prices.length; ii++ )
	{
		for( iii = 0; iii < game.resPool.resources.length; iii++ )
		{
			if( game.workshopTab.craftBtns[i].prices[ii].name == game.resPool.resources[iii].name )
			{
				resourceList[xx].price[ii] = { resourceID: 0, name: "", val: 0 };

				resourceList[xx].price[ii].resourceID = iii;
				resourceList[xx].price[ii].name = game.resPool.resources[iii].name;
				resourceList[xx].price[ii].val = game.workshopTab.craftBtns[i].prices[ii].val;
			};
		};
	};
};

/*get required science to craft resources*/
if( game.activeTabId != "Science") { game.render(); };
for( i = 0; i < game.science.techs.length; i++ )
{
	if( game.science.techs[i].unlocks != null )
	{
		if( game.science.techs[i].unlocks.crafts != null )
		{
			for( x = 0; x < resourceList.length; x++ )
			{
				if( game.science.techs[i].unlocks.crafts[0] == resourceList[x].name )
				{
					resourceList[x].requiredScienceID = i;
				};
			};
		};
	};
};
	
/*some produced resources are visible at the beginning of the game*/
for( i = 0; i < resourceList.length; i++ )
{
	if( game.resPool.resources[i].unlocked == true )
	{
		resourceList[i].visible = 1;
	};
};

/*some crafted resources are visible at the beginning of the game*/
for( i = 0; i < game.craftTable.resRows.length; i++ )
{
	for( ii = 0; ii < resourceList.length; ii++ )
	{
		if( game.craftTable.resRows[i].recipeRef.name == resourceList[ii].name )
		{
			if( game.craftTable.resRows[i].recipeRef.unlocked == true ) { resourceList[ii].visible = 1 };
		};
	};
};


/*create crafting resource list*/
/*this is not currently used, but I'm leaving it in because it was a pain to make and I don't want to do it again*/
crftResourceList[0] = { resourceID: woodID, name: "wood", craftResources: [ ] };
crftResourceList[0].craftResources[0] = { resourceID: catnipID, name: "catnip" };
crftResourceList[1] = { resourceID: beamID, name: "beam", craftResources: [ ] };
crftResourceList[1].craftResources[0] = { resourceID: woodID, name: "wood" };
crftResourceList[1].craftResources[1] = { resourceID: catnipID, name: "catnip" };
crftResourceList[2] = { resourceID: slabID, name: "slab", craftResources: [ ] };
crftResourceList[2].craftResources[0] = { resourceID: mineralsID, name: "minerals" };
crftResourceList[3] = { resourceID: concreteID, name: "concrate", craftResources: [ ] };
crftResourceList[3].craftResources[0] = { resourceID: slabID, name: "slab" };
crftResourceList[3].craftResources[1] = { resourceID: mineralsID, name: "minerals" };
crftResourceList[3].craftResources[2] = { resourceID: steelID, name: "steel" };
crftResourceList[3].craftResources[3] = { resourceID: ironID, name: "iron" };
crftResourceList[3].craftResources[4] = { resourceID: coalID, name: "coal" };
crftResourceList[4] = { resourceID: plateID, name: "plate", craftResources: [ ] };
crftResourceList[4].craftResources[0] = { resourceID: ironID, name: "iron" };
crftResourceList[5] = { resourceID: steelID, name: "steel", craftResources: [ ] };
crftResourceList[5].craftResources[0] = { resourceID: ironID, name: "iron" };
crftResourceList[5].craftResources[1] = { resourceID: coalID, name: "coal" };
crftResourceList[6] = { resourceID: alloyID, name: "alloy", craftResources: [ ] };
crftResourceList[6].craftResources[0] = { resourceID: steelID, name: "steel" };
crftResourceList[6].craftResources[1] = { resourceID: ironID, name: "iron" };
crftResourceList[6].craftResources[2] = { resourceID: coalID, name: "coal" };
crftResourceList[6].craftResources[3] = { resourceID: titaniumID, name: "titanium" };
crftResourceList[7] = { resourceID: eludiumID, name: "eludium", craftResources: [ ] };
crftResourceList[7].craftResources[0] = { resourceID: alloyID, name: "alloy" };
crftResourceList[7].craftResources[1] = { resourceID: steelID, name: "steel" };
crftResourceList[7].craftResources[2] = { resourceID: ironID, name: "iron" };
crftResourceList[7].craftResources[3] = { resourceID: coalID, name: "coal" };
crftResourceList[7].craftResources[4] = { resourceID: titaniumID, name: "titanium" };
crftResourceList[7].craftResources[5] = { resourceID: unobtainiumID, name: "unobtanium" };
crftResourceList[8] = { resourceID: gearID, name: "gear", craftResources: [ ] };
crftResourceList[8].craftResources[0] = { resourceID: steelID, name: "steel" };
crftResourceList[8].craftResources[1] = { resourceID: ironID, name: "iron" };
crftResourceList[8].craftResources[2] = { resourceID: coalID, name: "coal" };
crftResourceList[9] = { resourceID: scaffoldID, name: "scaffold", craftResources: [ ] };
crftResourceList[9].craftResources[0] = { resourceID: beamID, name: "beam" };
crftResourceList[9].craftResources[1] = { resourceID: woodID, name: "wood" };
crftResourceList[9].craftResources[2] = { resourceID: catnipID, name: "catnip" };
crftResourceList[10] = { resourceID: shipID, name: "ship", craftResources: [ ] };
crftResourceList[10].craftResources[0] = { resourceID: scaffoldID, name: "scaffold" };
crftResourceList[10].craftResources[1] = { resourceID: beamID, name: "beam" };
crftResourceList[10].craftResources[2] = { resourceID: woodID, name: "wood" };
crftResourceList[10].craftResources[3] = { resourceID: catnipID, name: "catnip" };
crftResourceList[10].craftResources[4] = { resourceID: plateID, name: "plate" };
crftResourceList[10].craftResources[5] = { resourceID: ironID, name: "iron" };
crftResourceList[10].craftResources[6] = { resourceID: starchartID, name: "starchart" };
crftResourceList[11] = { resourceID: tankerID, name: "tanker", craftResources: [ ] };
crftResourceList[11].craftResources[0] = { resourceID: shipID, name: "ship" };
crftResourceList[11].craftResources[1] = { resourceID: scaffoldID, name: "scaffold" };
crftResourceList[11].craftResources[2] = { resourceID: beamID, name: "beam" };
crftResourceList[11].craftResources[3] = { resourceID: woodID, name: "wood" };
crftResourceList[11].craftResources[4] = { resourceID: catnipID, name: "catnip" };
crftResourceList[11].craftResources[5] = { resourceID: plateID, name: "plate" };
crftResourceList[11].craftResources[6] = { resourceID: ironID, name: "iron" };
crftResourceList[11].craftResources[7] = { resourceID: starchartID, name: "starchart" };
crftResourceList[11].craftResources[8] = { resourceID: alloyID, name: "alloy" };
crftResourceList[11].craftResources[9] = { resourceID: steelID, name: "steel" };
crftResourceList[11].craftResources[10] = { resourceID: ironID, name: "iron" };
crftResourceList[11].craftResources[11] = { resourceID: coalID, name: "coal" };
crftResourceList[11].craftResources[12] = { resourceID: titaniumID, name: "titanium" };
crftResourceList[11].craftResources[13] = { resourceID: blueprintID, name: "blueprint" };
crftResourceList[11].craftResources[14] = { resourceID: compendiumID, name: "compendium" };
crftResourceList[11].craftResources[15] = { resourceID: manuscriptID, name: "manuscript" };
crftResourceList[11].craftResources[16] = { resourceID: parchmentID, name: "parchment" };
crftResourceList[11].craftResources[17] = { resourceID: fursID, name: "furs" };
crftResourceList[11].craftResources[18] = { resourceID: cultureID, name: "culture" };
crftResourceList[11].craftResources[19] = { resourceID: scienceID, name: "science" };
crftResourceList[11].craftResources[20] = { resourceID: scienceID, name: "science" };
crftResourceList[12] = { resourceID: parchmentID, name: "parchment", craftResources: [ ] };
crftResourceList[12].craftResources[0] = { resourceID: fursID, name: "furs" };
crftResourceList[13] = { resourceID: manuscriptID, name: "manuscript", craftResources: [ ] };
crftResourceList[13].craftResources[0] = { resourceID: parchmentID, name: "parchment" };
crftResourceList[13].craftResources[1] = { resourceID: fursID, name: "furs" };
crftResourceList[13].craftResources[2] = { resourceID: cultureID, name: "culture" };
crftResourceList[14] = { resourceID: compendiumID, name: "compendium", craftResources: [ ] };
crftResourceList[14].craftResources[0] = { resourceID: manuscriptID, name: "manuscript" };
crftResourceList[14].craftResources[1] = { resourceID: parchmentID, name: "parchment" };
crftResourceList[14].craftResources[2] = { resourceID: fursID, name: "furs" };
crftResourceList[14].craftResources[3] = { resourceID: cultureID, name: "culture" };
crftResourceList[14].craftResources[4] = { resourceID: scienceID, name: "science" };
crftResourceList[15] = { resourceID: blueprintID, name: "blueprint", craftResources: [ ] };
crftResourceList[15].craftResources[0] = { resourceID: compendiumID, name: "compendium" };
crftResourceList[15].craftResources[1] = { resourceID: manuscriptID, name: "manuscript" };
crftResourceList[15].craftResources[2] = { resourceID: parchmentID, name: "parchment" };
crftResourceList[15].craftResources[3] = { resourceID: fursID, name: "furs" };
crftResourceList[15].craftResources[4] = { resourceID: cultureID, name: "culture" };
crftResourceList[15].craftResources[5] = { resourceID: scienceID, name: "science" };
crftResourceList[15].craftResources[6] = { resourceID: scienceID, name: "science" };
crftResourceList[16] = { resourceID: megalithID, name: "megalith", craftResources: [ ] };
crftResourceList[16].craftResources[0] = { resourceID: slabID, name: "slab" };
crftResourceList[16].craftResources[1] = { resourceID: mineralsID, name: "minerals" };
crftResourceList[16].craftResources[2] = { resourceID: beamID, name: "beam" };
crftResourceList[16].craftResources[3] = { resourceID: woodID, name: "wood" };
crftResourceList[16].craftResources[4] = { resourceID: catnipID, name: "catnip" };
crftResourceList[16].craftResources[5] = { resourceID: plateID, name: "plate" };
crftResourceList[16].craftResources[6] = { resourceID: ironID, name: "iron" };
crftResourceList[17] = { resourceID: keroseneID, name: "kerosene", craftResources: [ ] };
crftResourceList[17].craftResources[0] = { resourceID: oilID, name: "oil" };



function delayFunction()
{
	delayVariable = setTimeout( delayProcedure, delayInterval );
};


function startKittyAssist()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Stopping Kitty Assist", "building" );
		clearInterval( intervalCraftControl );
		clearInterval( intervalBuildControl );
	} else
	{
		if( optionsKittyAssist[1].allowed == 1 && craftingStatus == 0 )
		{
			game.msg( "Starting crafting", "building" );
			craftingStatus = 1;
			beginCraftingResources();
		};
		
		if( tabOrder.length > 0 )
		{
			if( nextTabArrayID >= tabOrder.length ) { nextTabArrayID = 0; };
			delayProcedure = 0;
			for( i = 0; i < tabOrder.length && delayProcedure == 0; i++ )
			{
				delayProcedure = 0;
				if( i >= nextTabArrayID ) { delayProcedure = tabArray[tabOrder[i]].name; };
			};
		
			if( nextTabImmediately == 0 ) { delayInterval = 10000 } else { delayInterval = 0 };
		
			if( delayProcedure == 0 )
			{
				nextTabArrayID = 0;
				startKittyAssist();
			} else
			{
				delayFunction();
			};
		};
	};
};



function updateCatnipVariables()
{
	catnipProduction = game.bld.buildingsData[fieldID].effects.catnipPerTickBase * game.bld.buildingsData[fieldID].val * 5;
	
	if( game.calendar.weather == "warm" ) { catnipWeather = game.calendar.seasons[game.calendar.season].modifiers.catnip + .15 };
	if( game.calendar.weather == "cold" ) { catnipWeather = game.calendar.seasons[game.calendar.season].modifiers.catnip - .15 };
	if( game.calendar.weather == null ) { catnipWeather = game.calendar.seasons[game.calendar.season].modifiers.catnip };
	
	catnipValueModifierPerSkill = 0;
	for( i = 0; i < game.village.sim.kittens.length; i++ )
	{
		if( game.village.sim.kittens[i].job == "farmer" )
		{
			catnipValueModifierPerSkill +=
				( 1 + (game.villageTab.getValueModifierPerSkill(game.village.sim.kittens[i].skills[game.village.sim.kittens[i].job])-1)*((1 + game.workshop.getEffect("skillMultiplier")) / 4))
		};
	};
	happiness = 1 - ( Math.abs( game.village.maxKittens - 5 ) * .02 ) * ( 1 + game.bld.getEffect("unhappinessRatio", true) )
	if( game.resPool.resources[fursID].value > 0 ) { happiness += .1 };
	if( game.resPool.resources[ivoryID].value > 0 ) { happiness += .1 };
	if( game.resPool.resources[spiceID].value > 0 ) { happiness += .1 };
	if( game.resPool.resources[unicornsID].value > 0 ) { happiness += .1 };
	happiness += .1 + ((Math.sqrt(1 + 8 * game.karmaKittens / 5) - 1) / 2) / 100;
	catnipVillage = game.village.jobs[farmerID].modifiers.catnip * catnipValueModifierPerSkill * happiness * 5;
	
	catnipTools = 0;
	for( i = 0; i < game.workshop.meta[0].meta.length; i++ )
	{
		if( game.workshop.meta[0].meta[i].effects != null )
		{
			if( game.workshop.meta[0].meta[i].effects.catnipJobRatio != null && game.workshop.meta[0].meta[i].researched == true )
			{
				catnipTools += game.workshop.meta[0].meta[i].effects.catnipJobRatio
			};
		};
	};
	catnipTools += 1;
	
	catnipBuildings = 1 + ( game.bld.buildingsData[aqueductID].stages[0].effects.catnipRatio * game.bld.buildingsData[aqueductID].val );
	
	catnipParagon = 1 + ( game.bld.getHyperbolicEffect( game.resPool.resources[paragonID].value * .01 * ( 1 + game.getEffect("paragonRatio") ), 2 * ( 1 + game.getEffect("paragonRatio") ) ) );
	
	catnipMagneto =
		1 +
		(
			( game.bld.buildingsData[magnetoID].effects.magnetoRatio * game.bld.buildingsData[magnetoID].on ) *
			( 1 + ( game.bld.buildingsData[steamworksID].effects.magnetoBoostRatio * game.bld.buildingsData[steamworksID].on ) )
		);
	
	catnipReactor = 1 + ( ( game.bld.buildingsData[reactorID].effects.productionRatio * game.bld.buildingsData[reactorID].on ) );
	
	if( game.religion.meta[2].meta[solarRevolutionID].researched == true )
	{
		catnipFaith = 1 + ( ( ( Math.sqrt( 1 + 8 * game.religion.faith / 1000 ) - 1 ) / 2 ) / 100 );
	} else
	{
		catnipFaith = 1;
	};
	
	catnipMaxDemand = game.village.sim.maxKittens * .85;
	if( game.bld.buildingsData[pastureID].stage == 1 )
	{
		catnipMaxDemand = -( catnipMaxDemand - ( catnipMaxDemand * ( game.bld.buildingsData[unicornPastureID].val * .0015 ) ) ) * 5;
	} else
	{
		catnipMaxDemand = -( catnipMaxDemand - ( catnipMaxDemand * ( game.bld.buildingsData[pastureID].val * .005 ) ) - ( catnipMaxDemand * ( game.bld.buildingsData[unicornPastureID].val * .0015 ) ) ) * 5;
	};
	
	catnipDemand = game.village.sim.maxKittens * .85;
	if( game.bld.buildingsData[pastureID].stage == 1 )
	{
		catnipDemand = -( catnipDemand - ( catnipDemand * ( game.bld.buildingsData[unicornPastureID].val * .0015 ) ) ) * 5;
	} else
	{
		catnipDemand = -( catnipDemand - ( catnipDemand * ( game.bld.buildingsData[pastureID].val * .005 ) ) - ( catnipDemand * ( game.bld.buildingsData[unicornPastureID].val * .0015 ) ) ) * 5;
	};
	
	catnipPerSecondBadWinter =
		( catnipProduction * .1 * catnipBuildings * catnipFaith * catnipMagneto * catnipReactor * catnipParagon ) +
		( catnipVillage * catnipTools * catnipBuildings * catnipFaith * catnipMagneto * catnipReactor * catnipParagon ) +
		catnipMaxDemand;
	
	catnipCurrentProduction =
		( catnipProduction * catnipWeather * catnipBuildings * catnipFaith * catnipMagneto * catnipReactor * catnipParagon ) +
		( catnipVillage * catnipTools * catnipBuildings * catnipFaith * catnipMagneto * catnipReactor * catnipParagon ) +
		catnipDemand;
};



function recalculateVariables()
{
	/*check to see if produced resources are available*/
	if( allProducedAvailable == 0 )
	{
		for( i = 0; i < resourceList.length; i++ )
		{
			if( game.resPool.resources[i].visible == true && resourceList[i].visible == 0 && resourceList[i].type == 0 )
			{
				resourceList[i].visible = 1;
			};
			if( game.resPool.resources[i].value > 0 && resourceList[i].available == 0 && resourceList[i].type == 0 )
			{
				resourceList[i].visible = 1;
				resourceList[i].available = 1;
			};
		};
		yy = 0;
		zz = 0;
		for( i = 0; i < resourceList.length; i++ )
		{
			if( resourceList[i].type == 0 ) { zz++; };
			if( resourceList[i].available == 1 && resourceList[i].type == 0 ) { yy++; };
		};
		if( yy == zz ) { allProducedAvailable = 1 };
	};
	
	/*check to see if crafted resources are available*/
	if( allCraftsAvailable == 0 )
	{
		if( game.tabs[3].visible == true )
		{
			for( i = 0; i < resourceList.length; i++ )
			{
				if( resourceList[i].type == 1 && resourceList[i].available == 0 )
				{
					xx = 0;
					
					if( game.resPool.resources[i].value > 0 )
					{
						resourceList[i].visible = 1;
						resourceList[i].available = 1;
					} else
					{
						for( ii = 0; ii < resourceList[i].price.length; ii++ )
						{
							if
							(
								resourceList[resourceList[i].price[ii].resourceID].visible == 1 &&
								game.resPool.resources[resourceList[i].price[ii].resourceID].value >= resourceList[i].price[ii].val
							)
							{ xx++ };
						};
					
						if( game.science.techs[resourceList[i].requiredScienceID].researched == true )
						{
							if( xx == resourceList[i].price.length )
							{
								resourceList[i].visible = 1;
								resourceList[i].available = 1;
							} else
							{
								resourceList[i].visible = 1;
							};
						};
					};
				};
			};
		};
		yy = 0;
		zz = 0;
		for( i = 0; i < resourceList.length; i++ )
		{
			if( resourceList[i].type == 1 ) { zz++; };
			if( resourceList[i].available == 1 && resourceList[i].type == 1 ) { yy++; };
		};
		if( yy == zz ) { allCraftsAvailable = 1 };
	};
	
	/*check to see if rare resources are available*/
	if( allRareAvailable == 0 )
	{
		for( i = 0; i < resourceList.length; i++ )
		{
			if( game.resPool.resources[i].visible == true && resourceList[i].visible == 0 && resourceList[i].type == 2 )
			{
				resourceList[i].visible = 1;
			};
			if( game.resPool.resources[i].value > 0 && resourceList[i].available == 0 && resourceList[i].type == 2 )
			{
				resourceList[i].visible = 1;
				resourceList[i].available = 1;
			};
		};
		yy = 0;
		zz = 0;
		for( i = 0; i < resourceList.length; i++ )
		{
			if( resourceList[i].type == 2 ) { zz++; };
			if( resourceList[i].available == 1 && resourceList[i].type == 2 ) { yy++; };
		};
		if( yy == zz ) { allRareAvailable = 1 };
	};
};



function autoBuild()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Auto-Build (Earth) stopping", "building" );
		startKittyAssist();
	} else
	{
		if( nextBuildingArrayID >= autoBuildingOrder.length )
		{
			earthBuildingActive = 0;
			nextBuildingArrayID = 0;
			if( seasonBuild != game.calendar.year + "-" + game.calendar.season )
			{
				game.msg( "Auto-Build has nothing to build", "building" );
				seasonBuild = game.calendar.year + "-" + game.calendar.season;
			};
			if( optionsKittyAssist[3].allowed == 1 ) { activateBuildings(); };
			nextTabImmediately = 0;
			nextTabArrayID++;
			startKittyAssist();
		} else
		{
			earthBuildingActive = 1;
			resourcesExceeded = 0;
			maxEstimatedTime = 0;
			autoBuildingID = autoBuildingOrder[nextBuildingArrayID];
			buildingCount = game.bld.buildingsData[autoBuildingID].val;
			priceRatio = game.bld.getPriceRatio(game.bld.buildingsData[autoBuildingID].name);
			if( game.bld.buildingsData[autoBuildingID].unlocked == true )
			{
				/*the first calciner needs to be either manually built or hard-coded to be built when the resources are available*/
				/*this is a catch-22 created by this script requiring resources to have a positive perTick in order to be used*/
				/*calciner produces titanium and requires titanium to be built.  Without a calciner there is no positive perTick of titanium...so it won't be built*/
				if
				(
					optionsKittyAssist[6].allowed == 1 &&
					autoBuildingID == calcinerID &&
					game.bld.buildingsData[calcinerID].val == 0 &&
					game.resPool.resources[titaniumID].perTickUI == 0
				)
				{
					if
					(
						game.resPool.resources[steelID].value >= 120 &&
						game.resPool.resources[titaniumID].value >= 15 &&
						game.resPool.resources[blueprintID].value >= 5 &&
						game.resPool.resources[oilID].value >= 500
					)
					{
						game.msg( "Auto-Building 1st Calciner", "notice" );
						game.bld.buildingsData[calcinerID].val++;
						game.bld.buildingsData[calcinerID].enabled = true;
						game.bld.buildingsData[calcinerID].on = 1;
					};
				};
				
				if( buildingList[autoBuildingID].hasStages == 1 ) { currentStage = game.bld.buildingsData[autoBuildingID].stage; } else { currentStage = 0; };
			
				for( resourcesArrayID = 0; resourcesArrayID < buildingList[autoBuildingID].stages[currentStage].prices.length; resourcesArrayID++ )
				{
					resourceID = buildingList[autoBuildingID].stages[currentStage].prices[resourcesArrayID].resourceID;
					
					resourceRequired = buildingList[autoBuildingID].stages[currentStage].prices[resourcesArrayID].val * Math.pow( priceRatio, buildingCount );
				
					if( resourceList[resourceID].available == 0 )
					{
						resourcesExceeded = 1;
					} else
					{
						if( resourceList[resourceID].type == 0 )
						{
							if( resourceRequired > game.resPool.resources[resourceID].maxValue || game.resPool.resources[resourceID].perTickUI <= 0 )
							{
								resourcesExceeded = 1;
							};
						}
						if( resourceList[resourceID].type == 1 )
						{
							if( resourceRequired > game.resPool.resources[kittensID].value * 1000 )
							{
								resourcesExceeded = 1;
							};
						};
						if( resourceList[resourceID].type == 2 )
						{
							resourcesExceeded = 1;
						};
					};
				
					/*don't attempt to build something that will require more than 10 minutes*/
					if( resourcesExceeded == 0 )
					{
						if( resourceList[resourceID].type == 0 )
						{
							estimatedTime = ( resourceRequired - game.resPool.resources[resourceID].value ) / ( game.resPool.resources[resourceID].perTickUI * 5 );
						} else
						{
							estimatedTime = ( resourceRequired - game.resPool.resources[resourceID].value ) / resourceList[resourceID].perSecProduction;
						};
						if( maxEstimatedTime < estimatedTime ) { maxEstimatedTime = estimatedTime };
						/*removing the line below removes the 10 minute limitation*/
						if( maxEstimatedTime >= maxAllowedTime ) { resourcesExceeded = 1 };
					};
				
					/*don't build lodgings if you can't substain a positive catnip production even during the worst winter*/
					if( buildingList[autoBuildingID].buildingGroup == "population" && resourcesExceeded == 0 )
					{
						updateCatnipVariables();
						if
						(
							catnipPerSecondBadWinter <= ( Math.abs( catnipMaxDemand ) / game.village.sim.maxKittens ) * game.bld.buildingsData[autoBuildingID].effects.maxKittens
						)
						{
							resourcesExceeded = 1;
						};
						/*don't build lodgings if happiness is already down to 80% or less*/
						happiness = 1 - ( Math.abs( game.village.maxKittens + game.bld.buildingsData[autoBuildingID].effects.maxKittens - 5 ) * .02 ) * ( 1 + game.bld.getEffect("unhappinessRatio", true) )
						if( game.resPool.resources[fursID].value > 0 ) { happiness += .1 };
						if( game.resPool.resources[ivoryID].value > 0 ) { happiness += .1 };
						if( game.resPool.resources[spiceID].value > 0 ) { happiness += .1 };
						if( game.resPool.resources[unicornsID].value > 0 ) { happiness += .1 };
						if( happiness <= .8 ) { resourcesExceeded = 1; };
				
						/*if you own at least one mine and fifteen pastures, then it is okay to build a total of two huts...this allows auto-jobs to assign a miner*/
						if( optionsKittyAssist[7].allowed == 1 )
						{
							if( game.bld.buildingsData[mineID].val >= 1 && game.bld.buildingsData[pastureID].val >= 15 && game.bld.buildingsData[hutID].val == 1 )
							{
								resourcesExceeded = 0;
							};
						};
					};
				
					/*if you can't feed yourself during a bad winter then don't build catnip fields except during spring*/
					if( autoBuildingID == fieldID && resourcesExceeded == 0 )
					{
						updateCatnipVariables();
						if( catnipPerSecondBadWinter <= 0 && game.calendar.season >= 1 ) { resourcesExceeded = 1 };
					};
				
					/*if you can't feed yourself during a bad winter then don't build pastures except during spring*/
					if( autoBuildingID == pastureID && game.bld.buildingsData[pastureID].stage == 0 && resourcesExceeded == 0 )
					{
						updateCatnipVariables();
						if( catnipPerSecondBadWinter <= 0 && game.calendar.season >= 1 ) { resourcesExceeded = 1 };
					};
				};
				if( resourcesExceeded == 0 )
				{
					if( maxEstimatedTime <= 5 ) { progress = 4 } else { progress = 1 };
					autoBuildMessage();
					game.msg( autoMsg, "notice" );
					loopBuildBuilding();
				} else
				{
					nextBuildingArrayID++;
					autoBuild();
				};
			} else
			{
				nextBuildingArrayID++;
				autoBuild();
			};
		};
	};
};


function autoGroundControl()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Auto-Build (Missions) stopping", "building" );
		startKittyAssist();
	} else
	{
		if( game.spaceTab.visible == true && noMoreMissions == 0 )
		{
			game.render(); game.spaceTab.render();
			if( nextGroundControlArrayID >= groundControlOrder.length )
			{
				yy = 0;
				for( i = 0; i < game.space.programs.length; i++ )
				{
					if( game.space.programs[i].unlocked == true && game.space.programs[i].researched == true ) { yy++ };
				};
				if( yy == game.space.programs.length )
				{
					noMoreMissions = 1;
					groundControlActive = 0;
					game.msg( "Ground Control has no more missions.", "building" );
					nextTabImmediately = 0;
					nextTabArrayID++;
					startKittyAssist();
				} else
				{
					nextGroundControlArrayID = 0;
					groundControlActive = 0;
					if( seasonGroundControl != game.calendar.year + "-" + game.calendar.season )
					{
						game.msg( "Auto-GroundControl has nothing to build", "building" );
						seasonGroundControl = game.calendar.year + "-" + game.calendar.season;
					};
					nextTabImmediately = 0;
					nextTabArrayID++;
					startKittyAssist();
				};
			} else
			{
				resourcesExceeded = 0;
				maxEstimatedTime = 0;
				groundControlActive = 1;
				buildingID = groundControlOrder[nextGroundControlArrayID];
				if( game.space.programs[buildingID].unlocked == true )
				{
					if( game.space.programs[buildingID].researched == false )
					{
						yy++;
				
						for( resourcesArrayID = 0; resourcesArrayID < groundControlList[buildingID].prices.length; resourcesArrayID++ )
						{
							resourceID = groundControlList[buildingID].prices[resourcesArrayID].resourceID;
					
							resourceRequired = groundControlList[buildingID].prices[resourcesArrayID].val;
				
							if( resourceList[resourceID].available == 0 )
							{
								resourcesExceeded = 1;
							} else
							{
								if( resourceList[resourceID].type == 0 )
								{
									if( resourceList[resourceID].name == "starchart" )
									{
										if( game.resPool.resources[resourceID].perTickUI <= 0 )
										{
											resourcesExceeded = 1;
										};
									} else
									{
										if( resourceRequired > game.resPool.resources[resourceID].maxValue || game.resPool.resources[resourceID].perTickUI <= 0 )
										{
											resourcesExceeded = 1;
										};
									};
								} else
								{
									if( resourceRequired > game.resPool.resources[kittensID].value * 1000 )
									{
										resourcesExceeded = 1;
									};
								};
								if( resourceList[resourceID].type == 2 )
								{
									resourcesExceeded = 1;
								};
							};				
							/*don't attempt to build something that will require more than 10 minutes*/
							if( resourceList[resourceID].type == 0 )
							{
								estimatedTime = ( resourceRequired - game.resPool.resources[resourceID].value ) / ( game.resPool.resources[resourceID].perTickUI * 5 );
							} else
							{
								estimatedTime = ( resourceRequired - game.resPool.resources[resourceID].value ) / resourceList[resourceID].perSecProduction;
							};
							if( maxEstimatedTime < estimatedTime ) { maxEstimatedTime = estimatedTime };
							/*removing the line below removes the 10 minute limitation*/
							if( maxEstimatedTime >= maxAllowedTime ) { resourcesExceeded = 1 };
						};
						if( resourcesExceeded == 0 )
						{
							if( maxEstimatedTime <= 5 ) { progress = 4 } else { progress = 1 };
							autoBuildMessage();
							game.msg( autoMsg, "notice" );
							loopBuildBuilding();
						} else
						{
							nextGroundControlArrayID++;
							autoGroundControl();
						};
					} else
					{
						nextGroundControlArrayID++;
						autoGroundControl();
					};
				} else
				{
					nextGroundControlArrayID++;
					autoGroundControl();
				};
			};
		} else
		{
			nextTabImmediately = 1;
			nextTabArrayID++;
			startKittyAssist();
		};
	};
};

function autoSpaceBuildings()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Auto-Build (Space) stopping", "building" );
		startKittyAssist();
	} else
	{
		if( game.spaceTab.visible == true )
		{
			game.render(); game.spaceTab.render();
			if( nextSpaceBuildingArrayID >= spaceBuildingsOrder.length )
			{
				nextSpaceBuildingArrayID = 0;
				spaceBuildingActive = 0;
				if( seasonSpaceBuildings != game.calendar.year + "-" + game.calendar.season )
				{
					game.msg( "Auto-SpaceBuild has nothing to build", "building" );
					seasonSpaceBuildings = game.calendar.year + "-" + game.calendar.season;
				};
				nextTabImmediately = 0;
				nextTabArrayID++;
				startKittyAssist();
			} else
			{
				spaceBuildingActive = 1;
				resourcesExceeded = 0;
				maxEstimatedTime = 0;
				planetID = spaceBuildingList[nextSpaceBuildingArrayID].planet;
				for( i = 0; i < game.spaceTab.planetPanels.length; i++ )
				{
					if( planetList[planetID].name == game.spaceTab.planetPanels[i].name ) { planetPanelsID = i; };
				}
				buildingID = spaceBuildingList[nextSpaceBuildingArrayID].building;
				for( i = 0; i < game.spaceTab.planetPanels[planetPanelsID].children.length; i++ )
				{
					if( planetList[planetID].building[buildingID].title == game.spaceTab.planetPanels[planetPanelsID].children[i].name ) { planetPanelsChildrenID = i; };
				}
				buildingCount = game.space.planets[planetID].buildings[buildingID].val;
				for( i = 0; i < planetList[planetID].building[buildingID].requiredTech.length; i++ )
				{
					if( scienceList[planetList[planetID].building[buildingID].requiredTech[i].scienceListID].researched == 0 ) { resourcesExceeded = 1; };
				};
				if
				(
					game.space.programs[planetID].unlocked == true &&
					game.space.programs[planetID].researched == true &&
					game.space.planets[planetID].buildings[buildingID].unlocked == true &&
					resourcesExceeded == 0
				)
				{	
					resourceRequired = [ ];
					for( resourcesArrayID = 0; resourcesArrayID < planetList[planetID].building[buildingID].prices.length; resourcesArrayID++ )
					{
						resourceID = planetList[planetID].building[buildingID].prices[resourcesArrayID].resourceID;
					
						resourceRequired = game.spaceTab.planetPanels[planetPanelsID].children[planetPanelsChildrenID].prices[resourcesArrayID].val;
				
						if( resourceList[resourceID].available == 0 )
						{
							resourcesExceeded = 1;
						} else
						{
							if( resourceList[resourceID].type == 0 )
							{
								if( resourceID == starchartID )
								{
									if( game.resPool.resources[resourceID].perTickUI <= 0 )
									{
										resourcesExceeded = 1;
									};
								} else
								{
									if( resourceRequired > game.resPool.resources[resourceID].maxValue || game.resPool.resources[resourceID].perTickUI <= 0 )
									{
										resourcesExceeded = 1;
									};
								};
							} else
							{
								if( resourceRequired > game.resPool.resources[kittensID].value * 1000 )
								{
									resourcesExceeded = 1;
								};
							};
							if( resourceList[resourceID].type == 2 )
							{
								resourcesExceeded = 1;
							};
						};				
						/*don't attempt to build something that will require more than 10 minutes*/
						if( resourceList[resourceID].type == 0 )
						{
							estimatedTime = ( resourceRequired - game.resPool.resources[resourceID].value ) / ( game.resPool.resources[resourceID].perTickUI * 5 );
						} else
						{
							estimatedTime = ( resourceRequired - game.resPool.resources[resourceID].value ) / resourceList[resourceID].perSecProduction;
						};
						if( maxEstimatedTime < estimatedTime ) { maxEstimatedTime = estimatedTime };
						/*removing the line below removes the 10 minute limitation*/
						if( maxEstimatedTime >= maxAllowedTime ) { resourcesExceeded = 1 };
					};
					if( resourcesExceeded == 0 )
					{
						if( maxEstimatedTime <= 5 ) { progress = 4 } else { progress = 1 };
						autoBuildMessage();
						game.msg( autoMsg, "notice" );
						loopBuildBuilding();
					} else
					{
						nextSpaceBuildingArrayID++;
						autoSpaceBuildings();
					};
				} else
				{
					nextSpaceBuildingArrayID++;
					autoSpaceBuildings();
				};
			};
		} else
		{
			nextTabImmediately = 1;
			nextTabArrayID++;
			startKittyAssist();
		};
	};
};


function activateBuildings()
{
	/*smelter*/
	if( optionsKittyAssist[3].allowed == 1 )
	{
		if( game.bld.buildingsData[smelterID].val > 0 )
		{
			game.bld.buildingsData[smelterID].on =
			Math.min
			(
				game.bld.buildingsData[smelterID].val,
				Math.max
				(
					0,
					Math.floor
					(
						(
							( game.getResourcePerTickStack("wood")[2][0].value ) *
							( 1 + game.getResourcePerTickStack("wood")[2][1].value ) *
							( 1 + game.bld.buildingsData[lumberMillID].effects.woodRatio * game.bld.buildingsData[lumberMillID].val ) *
							catnipFaith
						) /
						Math.abs( game.bld.buildingsData[smelterID].effects.woodPerTick )
					)
				),
				Math.max
				(
					0,
					Math.floor
					(
						(
							( game.getResourcePerTickStack("minerals")[2][0].value ) *
							( 1 + game.getResourcePerTickStack("minerals")[2][1].value ) *
							(
								1 +
								( game.bld.buildingsData[mineID].effects.mineralsRatio * game.bld.buildingsData[mineID].val ) +
								( game.bld.buildingsData[quarryID].effects.mineralsRatio * game.bld.buildingsData[quarryID].val )
							) *
							catnipFaith
						) /
						Math.abs( game.bld.buildingsData[smelterID].effects.mineralsPerTick )
					)
				)
			);
		};
	};

	/*steamworks*/
	if( optionsKittyAssist[5].allowed == 1 )
	{
		if
		(
			game.bld.buildingsData[steamworksID].val > 0 &&
			game.bld.buildingsData[steamworksID].enabled == false &&
			game.resPool.resources[coalID].perTickUI > 0
		)
		{
			game.bld.buildingsData[steamworksID].enabled = true;
			game.bld.buildingsData[steamworksID].isAutomationEnabled = false;
			game.bld.buildingsData[steamworksID].on = game.bld.buildingsData[steamworksID].val;
		};
	};
};


function autoJobs()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Auto-Jobs stopping", "building" );
		startKittyAssist();
	} else
	{
		if( game.villageTab.visible == true )
		{
			var i = 0;
			
			if( game.activeTabId != "Small village" ) { game.render(); game.villageTab.render(); };
		
			/*auto-promote leader*/
			if( game.village.leader != null && optionsKittyAssist[0].allowed == 1 )
			{
				if
				(
					game.village.leader.exp >= 500 * Math.pow( 1.75, game.village.leader.rank ) &&
					game.resPool.resources[goldID].value > ( 25 * ( game.village.leader.rank + 1 ) )
				)
				{
					game.village.leader.exp -= 500 * Math.pow( 1.75, game.village.leader.rank );
					/*cheat - removing the line below will make promoting your leader not consume resources*/
					game.resPool.resources[goldID].value -= ( 25 * ( game.village.leader.rank + 1 ) );
					game.village.leader.rank++;
					game.msg( "Your leader increased in rank.", "notice" );
				};
			};


			/*job skills are boosted by 10% per leader rank*/
			if( optionsKittyAssist[4].allowed == 1 )
			{
				if( game.village.leader != null )
				{
					currentRank = game.village.leader.rank;
					if( lastRank != currentRank )
					{
						game.village.jobs[woodcutterID].modifiers.wood = jobWoodBase + ( jobWoodBase * ( currentRank / 10 ) );
				
						game.village.jobs[farmerID].modifiers.catnip = jobCatnipBase + ( jobCatnipBase * ( currentRank / 10 ) );
				
						game.village.jobs[scholarID].modifiers.science = jobScienceBase + ( jobScienceBase * ( currentRank / 10 ) );
						if( game.workshop.meta[0].meta[astrophysicistsID].researched == true )
						{
							if( jobStarchartsBase == 0 ) { jobStarchartsBase = game.village.jobs[scholarID].modifiers.starchart; };
							game.village.jobs[scholarID].modifiers.starchart = jobStarchartsBase + ( jobStarchartsBase * ( currentRank / 10 ) );
						};
				
						game.village.jobs[hunterID].modifiers.manpower = jobManpowerBase + ( jobManpowerBase * ( currentRank / 10 ) );
				
						game.village.jobs[minerID].modifiers.minerals = minerIDalsBase + ( minerIDalsBase * ( currentRank / 10 ) );
				
						game.village.jobs[priestID].modifiers.faith = jobFaithBase + ( jobFaithBase * ( currentRank / 10 ) );
				
						/*the coal base had to be hardcoded because there is no way to get the original base if the auto-clicker is started in the middle of a game*/
						jobCoalModifier = 0;
						jobGoldModifier = 0;
						if( game.workshop.meta[0].meta[miningDrillID].researched == true )
						{
							jobCoalModifier += .010;
							jobGoldModifier += .0005;
						};
						if( game.workshop.meta[0].meta[unobtainiumDrillID].researched == true )
						{
							jobCoalModifier += .015;
							jobGoldModifier += .0005;
						};
						if( game.workshop.meta[0].meta[geodesyID].researched == true )
						{
							jobCoalModifier += .0075;
							jobGoldModifier += .0008;
						} else
						{
							jobGoldModifier = 0;
						};
						game.village.jobs[geologistID].modifiers.coal = ( jobCoalBase + jobCoalModifier ) + ( ( jobCoalBase + jobCoalModifier ) * ( currentRank / 10 ) );
						game.village.jobs[geologistID].modifiers.gold = jobGoldModifier + ( jobGoldModifier * ( currentRank / 10 ) );
				
						lastRank = game.village.leader.rank;
					};
				};
			};
			
			/*check if the player want to reassign all jobs*/
			if( reassignAllJobs == 1 ) { game.village.clearJobs(); reassignAllJobs = 0; };

			/*assign jobs*/
			if( game.village.getFreeKittens() > 0 )
			{
				freeKittenCount = game.village.getFreeKittens();
			
				totalRatio = 0;
				for( i = 0; i < jobList.length; i++ )
				{
					if( game.village.jobs[i].value < jobList[i].maxKittens ) { totalRatio += jobList[i].playerEnteredRatio };
				};
				for( i = 0; i < jobList.length; i++ )
				{
					if( game.village.jobs[i].value < jobList[i].maxKittens )
					{
						jobList[i].kittensToAdd = Math.floor( ( game.village.maxKittens * ( jobList[i].playerEnteredRatio / totalRatio ) ) - game.village.jobs[i].value );
					};
				};
				for( freeKitten = 0; freeKitten < freeKittenCount; freeKitten++ )
				{
					jobNeedingKittens = 0;
					maxKittensToAdd = -50000;
				
					for( nextJobArrayID = 0; nextJobArrayID < autoJobOrder.length; nextJobArrayID++ )
					{
						jobID = autoJobOrder[nextJobArrayID];
						if( game.village.jobs[jobID].unlocked == 1 )
						{
							if( game.village.jobs[jobID].value < jobList[jobID].maxKittens )
							{
								if( maxKittensToAdd < jobList[jobID].kittensToAdd )
								{
									maxKittensToAdd = jobList[jobID].kittensToAdd;
									jobNeedingKittens = game.village.jobs[jobID].name;
									jobNumber = jobID;
								};
							};
						};
					};
					jobList[jobNumber].kittensToAdd--;
					game.msg( "New " + jobNeedingKittens + ".", "notice" );
					game.village.assignJob(game.village.getJob(jobNeedingKittens));
				};
				if( game.activeTabId != "Small village" ) { game.render(); game.villageTab.render(); };
				game.msg( "All kittens have jobs.", "building" );
				nextTabImmediately = 0;
				nextTabArrayID++;
				startKittyAssist();
			} else
			{
				nextTabImmediately = 1;
				nextTabArrayID++;
				startKittyAssist();
			}
		} else
		{
			nextTabImmediately = 1;
			nextTabArrayID++;
			startKittyAssist();
		};
	};
};


function autoScience()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Auto-Science stopping", "building" );
		startKittyAssist();
	} else
	{
		if( game.libraryTab.visible == true && noMoreScience == 0 )
		{
			if( game.activeTabId != "Science" ) { game.render(); game.libraryTab.render(); };
			nextScienceArrayID = 0;
			xx = 0;
			yy = 0;
		
			for( nextScienceArrayID = 0; nextScienceArrayID < scienceList.length; nextScienceArrayID++ )
			{
				if( game.science.techs[nextScienceArrayID].unlocked == true && scienceList[nextScienceArrayID].unlocked == 0 ) { scienceList[nextScienceArrayID].unlocked = 1 };
				if( game.science.techs[nextScienceArrayID].researched == true && scienceList[nextScienceArrayID].researched == 0 ) { scienceList[nextScienceArrayID].researched = 1 };
				if( scienceList[nextScienceArrayID].unlocked == 1 )
				{
					if( scienceList[nextScienceArrayID].researched == 0 )
					{
						progress = 0;
						resourcesArrayID = 0;
						yy++;
				
						for( resourcesArrayID = 0; resourcesArrayID < scienceList[nextScienceArrayID].resources.length; resourcesArrayID++ )
						{
							resourceID = scienceList[nextScienceArrayID].resources[resourcesArrayID].resourceID;
						
							if( scienceList[nextScienceArrayID].resources[resourcesArrayID].val <= game.resPool.resources[resourceID].value ) { progress++ };
						};
				
						if( progress == scienceList[nextScienceArrayID].resources.length )
						{
							resourcesArrayID = 0;
						
							for( resourcesArrayID = 0; resourcesArrayID < scienceList[nextScienceArrayID].resources.length; resourcesArrayID++ )
							{
								resourceID = scienceList[nextScienceArrayID].resources[resourcesArrayID].resourceID;
								/*cheat - removing the line below will make researching science not consume resources*/
								game.resPool.resources[resourceID].value -= scienceList[nextScienceArrayID].resources[resourcesArrayID].val;
							};
						
							game.msg( "Finishing: " + scienceList[nextScienceArrayID].label, "notice" );
							game.science.techs[nextScienceArrayID].researched = true;
							xx = 1;
			
							for( x in game.science.techs[nextScienceArrayID] )
							{
								if( x == "unlocks" ) { game.unlock(game.science.techs[nextScienceArrayID].unlocks); };
				
								if( x == "upgrades" ) { game.upgrade(game.science.techs[nextScienceArrayID].upgrades); };
							};
						};
					};
				};
			};
			if( yy == 0 )
			{
				noMoreScience = 1;
				game.msg( "There is nothing more to research.", "building" );
				nextTabImmediately = 0;
				nextTabArrayID++;
				startKittyAssist();
			} else
			{
				if( xx == 0 )
				{
					if( seasonScience != game.calendar.year + "-" + game.calendar.season )
					{
						game.msg( "Science takes time ... be patient.", "building" );
						seasonScience = game.calendar.year + "-" + game.calendar.season;
					};
					nextTabImmediately = 0;
					nextTabArrayID++;
					startKittyAssist();
				} else
				{
					if( game.activeTabId != "Science" ) { game.render(); game.libraryTab.render(); };
					game.msg( "The scientists have finished for today.", "building" );
					nextTabImmediately = 0;
					nextTabArrayID++;
					startKittyAssist();
				};
			};
		} else
		{
			nextTabImmediately = 1;
			nextTabArrayID++;
			startKittyAssist();
		};
	};
};


function autoWorkshop()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Auto-Workshop stopping", "building" );
		startKittyAssist();
	} else
	{
		if( game.workshopTab.visible == true && noMoreUpgrades == 0 )
		{
			if( game.activeTabId != "Workshop" ) { game.render(); game.workshopTab.render(); game.workshopTab.update(); };
			nextWorkshopArrayID = 0;
			xx = 0;
			yy = 0;
		
			for( nextWorkshopArrayID = 0; nextWorkshopArrayID < workshopList.length; nextWorkshopArrayID++ )
			{
				if( game.workshop.meta[0].meta[nextWorkshopArrayID].unlocked == true && workshopList[nextWorkshopArrayID].unlocked == 0 ) { workshopList[nextWorkshopArrayID].unlocked = 1 };
				if( game.workshop.meta[0].meta[nextWorkshopArrayID].researched == true && workshopList[nextWorkshopArrayID].researched == 0 ) { workshopList[nextWorkshopArrayID].researched = 1 };
				if( workshopList[nextWorkshopArrayID].unlocked == 1 )
				{
					if( workshopList[nextWorkshopArrayID].researched == 0 )
					{
						progress = 0;
						resourcesArrayID = 0;
						yy++;
				
						for( resourcesArrayID = 0; resourcesArrayID < workshopList[nextWorkshopArrayID].resources.length; resourcesArrayID++ )
						{						
							resourceID = workshopList[nextWorkshopArrayID].resources[resourcesArrayID].resourceID;
						
							if( workshopList[nextWorkshopArrayID].resources[resourcesArrayID].val <= game.resPool.resources[resourceID].value ) { progress++ };
						};
				
						if( progress == workshopList[nextWorkshopArrayID].resources.length )
						{
							resourcesArrayID = 0;
						
							for( resourcesArrayID = 0; resourcesArrayID < workshopList[nextWorkshopArrayID].resources.length; resourcesArrayID++ )
							{
								resourceID = workshopList[nextWorkshopArrayID].resources[resourcesArrayID].resourceID;
								/*cheat - removing the line below will make researching upgrades not consume resources*/
								game.resPool.resources[resourceID].value -= workshopList[nextWorkshopArrayID].resources[resourcesArrayID].val;
							};
						
							game.workshop.meta[0].meta[nextWorkshopArrayID].researched = true;
							game.msg( "Finishing: " + workshopList[nextWorkshopArrayID].label + ".", "notice" );
							xx = 1;
			
							for( x in game.workshop.meta[0].meta[nextWorkshopArrayID] )
							{
								if( x == "unlocks" ) { game.unlock(game.workshop.meta[0].meta[nextWorkshopArrayID].unlocks); };
				
								if( x == "upgrades" ) { game.upgrade(game.workshop.meta[0].meta[nextWorkshopArrayID].upgrades); };
							};
						};
					};
				};
			};
			if( yy == 0 )
			{
				noMoreUpgrades = 1;
				game.msg( "There are no more upgrades.", "building" );
				nextTabImmediately = 0;
				nextTabArrayID++;
				startKittyAssist();
			} else
			{
				if( xx == 0 )
				{
					if( seasonWorkshop != game.calendar.year + "-" + game.calendar.season )
					{
						game.msg( "Upgrades cost money ... get some.", "building" );
						seasonWorkshop = game.calendar.year + "-" + game.calendar.season;
					};
					nextTabImmediately = 0;
					nextTabArrayID++;
					startKittyAssist();
				} else
				{
					if( game.activeTabId != "Workshop" ) { game.render(); game.workshopTab.render(); game.workshopTab.update(); };
					game.msg( "Finished upgrading ... for now.", "building" );
					nextTabImmediately = 0;
					nextTabArrayID++;
					startKittyAssist();
				};
			};
		} else
		{
			nextTabImmediately = 1;
			nextTabArrayID++;
			startKittyAssist();
		};
	};
};


function autoHuntTrade()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Auto-Hunt stopping", "building" );
		startKittyAssist();
	} else
	{
		if( game.diplomacyTab.visible == true && game.village.jobs[hunterID].value > 0 )
		{
			if( game.activeTabId != "Trade" ) { game.render(); game.diplomacyTab.render(); game.diplomacyTab.update(); };
			if( game.resPool.resources[catpowerID].value >= 50 )
			{
				hunterProgress = 0;
			
				for( civID = 0; civID < game.diplomacyTab.racePanels.length; civID++ )
				{
					if( game.diplomacyTab.racePanels[civID].race.name == "zebras" )
					{
						hunterProgress = 1;
						if
						(
							game.resPool.resources[titaniumID].perTickUI == 0 &&
							Math.floor( game.resPool.resources[titaniumID].maxValue ) - Math.floor( game.resPool.resources[titaniumID].value ) > Math.floor( game.resPool.resources[titaniumID].perTickUI ) &&
							game.diplomacyTab.racePanels[civID].tradeBtn.enabled == true &&
							optionsKittyAssist[2].allowed == 1
						)
						{
							game.diplomacyTab.racePanels[civID].tradeBtn.onClick();
						};
					};
				
					if( game.diplomacyTab.racePanels[civID].race.name == "dragons" )
					{
						hunterProgress = 2;
						if
						(
							game.resPool.resources[uraniumID].perTickUI == 0 &&
							Math.floor( game.resPool.resources[uraniumID].maxValue ) - Math.floor( game.resPool.resources[uraniumID].value ) > Math.floor( game.resPool.resources[uraniumID].perTickUI ) &&
							game.diplomacyTab.racePanels[civID].tradeBtn.enabled == true &&
							optionsKittyAssist[2].allowed == 1
						)
						{
							game.diplomacyTab.racePanels[civID].tradeBtn.onClick();
						};
					};
				};
				if
				(
					hunterProgress == 0 &&
					game.diplomacyTab.exploreBtn.enabled == true &&
					game.resPool.resources[shipID].value > 0
				)
				{ game.diplomacyTab.exploreBtn.onClick() };
				if
				(
					hunterProgress == 1 &&
					game.diplomacyTab.exploreBtn.enabled == true &&
					game.science.techs[nuclearFissionID].researched == true
				)
				{ game.diplomacyTab.exploreBtn.onClick() };
			};
		
			if( Math.floor( game.resPool.resources[catpowerID].maxValue ) - Math.floor( game.resPool.resources[catpowerID].value ) <= Math.floor( game.resPool.resources[catpowerID].perTickUI ) )
			{
				game.msg( "Stalking the wild catnip.", "notice" );
				civID = 1;
				game.village.huntAll();
				nextTabImmediately = 0;
				nextTabArrayID++;
				startKittyAssist();
			} else
			{
				if( seasonHunt != game.calendar.year + "-" + game.calendar.season )
				{
					game.msg( "All hunters are busy", "building" );
					seasonHunt = game.calendar.year + "-" + game.calendar.season;
				};
				nextTabImmediately = 0;
				nextTabArrayID++;
				startKittyAssist();
			};
		} else
		{
			if
			(
				game.village.jobs[hunterID].value > 0 &&
				Math.floor( game.resPool.resources[catpowerID].maxValue ) - Math.floor( game.resPool.resources[catpowerID].value ) <= Math.floor( game.resPool.resources[catpowerID].perTickUI )
			)
			{
				game.msg( "Stalking the wild catnip.", "notice" );
				civID = 1;
				game.village.huntAll();
				nextTabImmediately = 0;
				nextTabArrayID++;
				startKittyAssist();
			} else
			{
				nextTabImmediately = 1;
				nextTabArrayID++;
				startKittyAssist();
			};
		};
	};
};


function autoReligion()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "Auto-Religion stopping", "building" );
		startKittyAssist();
	} else
	{
		if( game.religionTab.visible == true && game.village.jobs[priestID].value > 0 )
		{
			civID = 0;
			if( Math.floor( game.resPool.resources[faithID].maxValue ) - Math.floor( game.resPool.resources[faithID].value ) <= Math.floor( game.resPool.resources[faithID].perTickUI ) )
			{
				game.msg( "Priests gave thanks.", "notice" );
				civID = 1;
				game.religion.praise();
			};
			if( civID == 0 )
			{
				if( seasonPraise != game.calendar.year + "-" + game.calendar.season )
				{
					game.msg( "The priests are busy", "building" );
					seasonPraise = game.calendar.year + "-" + game.calendar.season;
				};
			};
			nextTabImmediately = 0;
			nextTabArrayID++;
			startKittyAssist();
		} else
		{
			nextTabImmediately = 1;
			nextTabArrayID++;
			startKittyAssist();
		};
	};
};


function loopBuildBuilding()
{
	if( earthBuildingActive == 1 ) { buildProcedure = autoBuildEarth; };
	if( groundControlActive == 1 ) { buildProcedure = autoBuildMissions; };
	if( spaceBuildingActive == 1 ) { buildProcedure = autoBuildSpace; };
	intervalBuildControl = setInterval( buildProcedure, 1000 );
};


function autoBuildEarth()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "AutoBuild (Earth) stopping", "building" );
		clearInterval( intervalBuildControl );
		startKittyAssist();
	} else
	{
		resourcesAcquired = 0;
		
		returnProcedure = autoBuild;
		currentBuildingCount = game.bld.buildingsData[autoBuildingID].val;
		
		if( buildingCount != currentBuildingCount )
		{
			progress = 2;
			autoBuildMessage();
			game.msg( autoMsg, "building" );
			clearInterval( intervalBuildControl );
			returnProcedure();
		} else
		{
			for( resourcesArrayID = 0; resourcesArrayID < buildingList[autoBuildingID].stages[currentStage].prices.length; resourcesArrayID++ )
			{
				resourceID = buildingList[autoBuildingID].stages[currentStage].prices[resourcesArrayID].resourceID;
				resourceRequired = buildingList[autoBuildingID].stages[currentStage].prices[resourcesArrayID].val * Math.pow( priceRatio, buildingCount );
				
				/*a cheat to immediately build*/
				/*if( game.resPool.resources[resourceID].value < resourceRequired ) { game.resPool.resources[resourceID].value = resourceRequired };*/
				
				if( resourceRequired <= game.resPool.resources[resourceID].value ) { resourcesAcquired++ }
			};
				
			if( resourcesAcquired == buildingList[autoBuildingID].stages[currentStage].prices.length )
			{
				for( resourcesArrayID = 0; resourcesArrayID < buildingList[autoBuildingID].stages[currentStage].prices.length; resourcesArrayID++ )
				{
					resourceID = buildingList[autoBuildingID].stages[currentStage].prices[resourcesArrayID].resourceID;
					resourceRequired = buildingList[autoBuildingID].stages[currentStage].prices[resourcesArrayID].val * Math.pow( priceRatio, buildingCount );
						
					/*removing the line below will make building not consume resources*/
					game.resPool.resources[resourceID].value -= resourceRequired;
				};
						
				game.bld.buildingsData[autoBuildingID].val++;
							
				if( game.bld.buildingsData[autoBuildingID].val == 1 )
				{		
					civID = 0;	
					for( x in game.bld.buildingsData[autoBuildingID] )
					{
						if( x == "unlocks" )
						{
							game.unlock(game.bld.buildingsData[autoBuildingID].unlocks);
							civID = 1;
						};
				
						if( x == "upgrades" )
						{
							game.upgrade(game.bld.buildingsData[autoBuildingID].upgrades);
							civID = 1;
						};
					};
					if( civID == 1 ) { game.render(); };
				};
						
				progress = 3;
				autoBuildMessage();
				game.msg( autoMsg, "building" );
				clearInterval( intervalBuildControl );
				/*I had to add in a delay because the resource tracker in the auto-crafting function only runs once per second*/
				delayInterval = 2000;
				delayProcedure = returnProcedure;
				delayFunction();
				/*returnProcedure();*/
			};
		};
	};
};


function autoBuildMissions()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "AutoBuild (Missions) stopping", "building" );
		clearInterval( intervalBuildControl );
		startKittyAssist();
	} else
	{
		returnProcedure = autoGroundControl;
		resourcesAcquired = 0;
		
		for( resourcesArrayID = 0; resourcesArrayID < groundControlList[buildingID].prices.length; resourcesArrayID++ )
		{
			resourceID = groundControlList[buildingID].prices[resourcesArrayID].resourceID;
			resourceRequired = groundControlList[buildingID].prices[resourcesArrayID].val;
				
			/*a cheat to immediately build*/
			/*if( Math.floor( game.resPool.resources[resourceID].value ) < Math.floor( resourceRequired ) )
			{ game.resPool.resources[resourceID].value = resourceRequired; };*/
						
			if( resourceRequired <= game.resPool.resources[resourceID].value ) { resourcesAcquired++; }
		};
				
		if( resourcesAcquired == groundControlList[buildingID].prices.length )
		{
			for( resourcesArrayID = 0; resourcesArrayID < groundControlList[buildingID].prices.length; resourcesArrayID++ )
			{
				resourceID = groundControlList[buildingID].prices[resourcesArrayID].resourceID;
				resourceRequired = groundControlList[buildingID].prices[resourcesArrayID].val;
				
				/*removing the line below will make building not consume resources*/
				game.resPool.resources[resourceID].value -= resourceRequired;
			};
						
			game.space.programs[buildingID].researched = true;
			for( i = 0; i < game.space.planets.length; i++ )
			{
				if( game.space.planets[i].name == game.space.programs[buildingID].unlocks.planet ) { game.space.planets[i].unlocked = true; };
			};
			if( game.space.programs[buildingID].handler != null ) { game.space.programs[buildingID].handler( this.game, game.space.programs[buildingID] ); };
			if( game.space.programs[buildingID].unlocks.programs != null )
			{
				for( i = 0; i < game.space.programs.length; i++ )
				{
					for( ii = 0; ii < game.space.programs.length; ii++ )
					{
						if( game.space.programs[buildingID].unlocks.programs[i] == game.space.programs[ii].name ) { game.space.programs[ii].unlocked = true; };
					};
				};
			};
			game.render(); game.spaceTab.render();						
			progress = 3;
			autoBuildMessage();
			game.msg( autoMsg, "building" );
			clearInterval( intervalBuildControl );
			/*I had to add in a delay because the resource tracker in the auto-crafting function only runs once per second*/
			delayInterval = 2000;
			delayProcedure = returnProcedure;
			delayFunction();
			/*returnProcedure();*/
		};
	};
};


function autoBuildSpace()
{
	if( kittyAssistStatus == 0 )
	{
		game.msg( "AutoBuild (Space) stopping", "building" );
		clearInterval( intervalBuildControl );
		startKittyAssist();
	} else
	{
		returnProcedure = autoSpaceBuildings;
		resourcesAcquired = 0;
		currentBuildingCount = game.space.planets[planetID].buildings[buildingID].val;
		
		if( buildingCount != currentBuildingCount )
		{
			progress = 2;
			autoBuildMessage();
			game.msg( autoMsg, "building" );
			clearInterval( intervalBuildControl );
			returnProcedure();
		} else
		{
			for( resourcesArrayID = 0; resourcesArrayID < planetList[planetID].building[buildingID].prices.length; resourcesArrayID++ )
			{
				resourceID = planetList[planetID].building[buildingID].prices[resourcesArrayID].resourceID;
					
				resourceRequired = game.spaceTab.planetPanels[planetPanelsID].children[planetPanelsChildrenID].prices[resourcesArrayID].val;
						
				/*a cheat to immediately build*/
				/*if( Math.floor( game.resPool.resources[resourceID].value ) < Math.floor( resourceRequired ) )
				{ game.resPool.resources[resourceID].value = resourceRequired; };*/
						
				if( resourceRequired <= game.resPool.resources[resourceID].value ) { resourcesAcquired++; }
			};
				
			if( resourcesAcquired == planetList[planetID].building[buildingID].prices.length )
			{
				for( resourcesArrayID = 0; resourcesArrayID < planetList[planetID].building[buildingID].prices.length; resourcesArrayID++ )
				{
					resourceID = planetList[planetID].building[buildingID].prices[resourcesArrayID].resourceID;
				
					resourceRequired = game.spaceTab.planetPanels[planetPanelsID].children[planetPanelsChildrenID].prices[resourcesArrayID].val;
						
					/*removing the line below will make building not consume resources*/
					game.resPool.resources[resourceID].value -= resourceRequired;
				};
						
				game.space.planets[planetID].buildings[buildingID].val++;						
				progress = 3;
				autoBuildMessage();
				game.msg( autoMsg, "building" );
				clearInterval( intervalBuildControl );
				/*I had to add in a delay because the resource tracker in the auto-crafting function only runs once per second*/
				delayInterval = 2000;
				delayProcedure = returnProcedure;
				delayFunction();
				/*returnProcedure();*/
			};
		};
	};
};




function autoBuildMessage()
{
	if( earthBuildingActive == 1 ) { messageAbout = buildingList[autoBuildingID].stages[currentStage].label; currentBuildingCount = game.bld.buildingsData[autoBuildingID].val; };
	if( groundControlActive == 1 ) { messageAbout = groundControlList[buildingID].title; currentBuildingCount = 0; };
	if( spaceBuildingActive == 1 ) { messageAbout = planetList[planetID].building[buildingID].title; currentBuildingCount = game.space.planets[planetID].buildings[buildingID].val; };
		
	if(progress == 1 ) /*sequester then build*/
	{
		if( maxEstimatedTime > 172800 )
		{
			maxEstimatedTime = ( Math.ceil(( maxEstimatedTime / 86400 ) * 100 ) / 100 ) + " days (current estimate).";
		} else
		{
			if( maxEstimatedTime > 7200 )
			{
				maxEstimatedTime = ( Math.ceil(( maxEstimatedTime / 3600 ) * 100 ) / 100 ) + " hours (current estimate).";
			} else
			{
				if( maxEstimatedTime > 120 )
				{
					maxEstimatedTime = ( Math.ceil(( maxEstimatedTime / 60 ) * 100 ) / 100 ) + " minutes (current estimate).";
				} else
				{
					maxEstimatedTime = Math.ceil( maxEstimatedTime ) + " seconds (current estimate).";
				};
			};
		};
		
		if( earthBuildingActive == 1 || spaceBuildingActive == 1 )
		{ autoMsg = "Building " + messageAbout + " #" + ( currentBuildingCount + 1 ) + " in " + maxEstimatedTime; };
		
		if( groundControlActive == 1 )
		{ autoMsg = "Building " + messageAbout + " in " + maxEstimatedTime; };
	};
	
	if( progress == 2 ) /*cancel*/
	{
		if( earthBuildingActive == 1 || spaceBuildingActive == 1 )
		{ autoMsg = "Auto-build canceled - " + messageAbout + " #" + ( buildingCount + 1 ) + "."; };
		
		if( groundControlActive == 1 )
		{ autoMsg = "Auto-build canceled - " + messageAbout + "."; };
	};
	
	if( progress == 3 ) /*completed*/
	{
		if( earthBuildingActive == 1 || spaceBuildingActive == 1 )
		{ autoMsg = "Completed " + messageAbout + " #" + ( currentBuildingCount ) + "."; };
		
		if( groundControlActive == 1 )
		{ autoMsg = "Completed " + messageAbout + "."; };
	};
	
	if( progress == 4 ) /*immediately build*/
	{
		if( earthBuildingActive == 1 || spaceBuildingActive == 1 )
		{ autoMsg = "Building " + messageAbout + " #" + ( currentBuildingCount + 1 ) + "."; };
		
		if( groundControlActive == 1 )
		{ autoMsg = "Building " + messageAbout + "."; };
	};
	
	if( progress == 5 ) /*stop*/
	{
		if( earthBuildingActive == 1 ) { autoMsg = "Auto-Build has nothing to build."; };
		if( groundControlActive == 1 ) { autoMsg = "Auto-GroundControl has nothing to build."; };
		if( spaceBuildingActive == 1 ) { autoMsg = "Auto-SpaceBuildings has nothing to build."; };
	};
};

function beginCraftingResources()
{
	intervalCraftControl = setInterval( craftResources, 1000 );
};


function craftResources()
{
	if( optionsKittyAssist[1].allowed == 0 || kittyAssistStatus == 0 )
	{
		game.msg( "Crafting stopping", "building" );
		clearInterval( intervalCraftControl );
		craftingStatus = 0;
	} else
	{
		recalculateVariables();
		if( game.workshopTab.visible == true && game.science.techs[constructionID].researched == true )
		{
			resourceList[woodID].productionShares = 0;
			resourceList[beamID].productionShares = 0;
			resourceList[scaffoldID].productionShares = 0;
			resourceList[mineralsID].productionShares = 0;
			resourceList[slabID].productionShares = 0;
			resourceList[ironID].productionShares = 0;
			resourceList[coalID].productionShares = 0;
			resourceList[steelID].productionShares = 0;
			resourceList[titaniumID].productionShares = 0;
			resourceList[alloyID].productionShares = 0;
			resourceList[unobtainiumID].productionShares = 0;
			resourceList[starchartID].productionShares = 0;
			resourceList[cultureID].productionShares = 0;
			resourceList[scienceID].productionShares = 0;
			resourceList[fursID].productionShares = 0;
			resourceList[parchmentID].productionShares = 0;
			resourceList[manuscriptID].productionShares = 0;
			resourceList[compendiumID].productionShares = 0;
			resourceList[blueprintID].productionShares = 0;
			resourceList[shipID].productionShares = 0;
			resourceList[plateID].productionShares = 0;
			resourceList[oilID].productionShares = 0;
			
			/*wood*/
			if
			(
				game.resPool.resources[catnipID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[catnipID].maxValue ) - Math.floor( game.resPool.resources[catnipID].value ) <= Math.floor( game.resPool.resources[catnipID].perTickUI ) &&
				Math.floor( game.resPool.resources[woodID].maxValue ) - Math.floor( game.resPool.resources[woodID].value ) >= Math.floor( game.resPool.resources[woodID].perTickUI )
			)
			{
				resourceList[woodID].craftingAllowed = 1;
			} else
			{
				if
				(
					game.resPool.resources[woodID].perTickUI > 0 &&
					Math.floor( game.resPool.resources[woodID].maxValue ) - Math.floor( game.resPool.resources[woodID].value ) <= Math.floor( game.resPool.resources[woodID].perTickUI )
				)
				{
					resourceList[woodID].craftingAllowed = 1;
				} else
				{
					resourceList[woodID].craftingAllowed = 0;
				};
			};
			
			/*beam*/
			if
			(
				resourceList[woodID].craftingAllowed == 1 &&
				resourceList[beamID].available == 1
			)
			{
				resourceList[woodID].productionShares++;
				resourceList[beamID].craftingAllowed = 1;
			} else
			{
				resourceList[beamID].craftingAllowed = 0;
			};
			
			/*scaffold*/
			if
			(
				resourceList[beamID].craftingAllowed == 1 &&
				resourceList[scaffoldID].available == 1
			)
			{
				resourceList[woodID].productionShares++;
				resourceList[beamID].productionShares++;
				resourceList[scaffoldID].craftingAllowed = 1;
			} else
			{
				resourceList[scaffoldID].craftingAllowed = 0;
			};
			
			/*slab*/
			if
			(
				game.resPool.resources[mineralsID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[mineralsID].maxValue ) - Math.floor( game.resPool.resources[mineralsID].value ) <= Math.floor( game.resPool.resources[mineralsID].perTickUI ) &&
				resourceList[slabID].available == 1
			)
			{
				resourceList[mineralsID].productionShares++;
				resourceList[slabID].craftingAllowed = 1;
			} else
			{
				resourceList[slabID].craftingAllowed = 0;
			};
			
			/*steel*/
			if
			(
				game.resPool.resources[ironID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[ironID].maxValue ) - Math.floor( game.resPool.resources[ironID].value ) <= Math.floor( game.resPool.resources[ironID].perTickUI ) &&
				game.resPool.resources[coalID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[coalID].maxValue ) - Math.floor( game.resPool.resources[coalID].value ) <= Math.floor( game.resPool.resources[coalID].perTickUI ) &&
				resourceList[steelID].available == 1
			)
			{
				resourceList[ironID].productionShares++;
				resourceList[coalID].productionShares++;
				resourceList[steelID].craftingAllowed = 1;
			} else
			{
				resourceList[steelID].craftingAllowed = 0;
			};
			
			/*concrete*/
			if
			(
				resourceList[slabID].craftingAllowed == 1 &&
				resourceList[steelID].craftingAllowed == 1 &&
				resourceList[concreteID].available == 1
			)
			{
				resourceList[slabID].productionShares++;
				resourceList[mineralsID].productionShares++;
				resourceList[steelID].productionShares++;
				resourceList[ironID].productionShares++;
				resourceList[coalID].productionShares++;
				resourceList[concreteID].craftingAllowed = 1;
			} else
			{
				resourceList[concreteID].craftingAllowed = 0;
			};
			
			/*plate*/
			if
			(
				game.resPool.resources[ironID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[ironID].maxValue ) - Math.floor( game.resPool.resources[ironID].value ) <= Math.floor( game.resPool.resources[ironID].perTickUI ) &&
				resourceList[plateID].available == 1
			)
			{
				resourceList[ironID].productionShares++;
				resourceList[plateID].craftingAllowed = 1;
			} else
			{
				resourceList[plateID].craftingAllowed = 0;
			};
			
			/*alloy*/
			if
			(
				resourceList[steelID].craftingAllowed == 1 &&
				game.resPool.resources[titaniumID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[titaniumID].maxValue ) - Math.floor( game.resPool.resources[titaniumID].value ) <= Math.floor( game.resPool.resources[titaniumID].perTickUI ) &&
				resourceList[alloyID].available == 1
			)
			{
				resourceList[steelID].productionShares++;
				resourceList[ironID].productionShares++;
				resourceList[coalID].productionShares++;
				resourceList[titaniumID].productionShares++;
				resourceList[alloyID].craftingAllowed = 1;
			} else
			{
				resourceList[alloyID].craftingAllowed = 0;
			};
			
			/*eludium*/
			if
			(
				resourceList[alloyID].craftingAllowed == 1 &&
				game.resPool.resources[unobtainiumID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[unobtainiumID].maxValue ) - Math.floor( game.resPool.resources[unobtainiumID].value ) <= Math.floor( game.resPool.resources[unobtainiumID].perTickUI ) &&
				resourceList[eludiumID].available == 1
			)
			{
				resourceList[alloyID].productionShares++;
				resourceList[steelID].productionShares++;
				resourceList[ironID].productionShares++;
				resourceList[coalID].productionShares++;
				resourceList[titaniumID].productionShares++;
				resourceList[unobtainiumID].productionShares++;
				resourceList[eludiumID].craftingAllowed = 1;
			} else
			{
				resourceList[eludiumID].craftingAllowed = 0;
			};
			
			/*gear*/
			if
			(
				resourceList[steelID].craftingAllowed == 1 &&
				resourceList[gearID].available == 1
			)
			{
				resourceList[steelID].productionShares++;
				resourceList[ironID].productionShares++;
				resourceList[coalID].productionShares++;
				resourceList[gearID].craftingAllowed = 1;
			} else
			{
				resourceList[gearID].craftingAllowed = 0;
			};
			
			/*ship*/
			if
			(
				resourceList[scaffoldID].craftingAllowed == 1 &&
				resourceList[plateID].craftingAllowed == 1 &&
				game.resPool.resources[starchartID].perTickUI > 0 &&
				resourceList[shipID].available == 1
			)
			{
				resourceList[scaffoldID].productionShares++;
				resourceList[beamID].productionShares++;
				resourceList[woodID].productionShares++;
				resourceList[plateID].productionShares++;
				resourceList[ironID].productionShares++;
				resourceList[starchartID].productionShares++;
				resourceList[shipID].craftingAllowed = 1;
			} else
			{
				resourceList[shipID].craftingAllowed = 0;
			};
			
			/*parchment*/
			if
			(
				game.resPool.resources[fursID].perTickUI > 0 &&
				resourceList[parchmentID].available == 1
			)
			{
				resourceList[fursID].productionShares++;
				resourceList[parchmentID].craftingAllowed = 1;
			} else
			{
				resourceList[parchmentID].craftingAllowed = 0;
			};
			
			/*manuscript*/
			if
			(
				resourceList[parchmentID].craftingAllowed == 1 &&
				game.resPool.resources[cultureID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[cultureID].maxValue ) - Math.floor( game.resPool.resources[cultureID].value ) <= Math.floor( game.resPool.resources[cultureID].perTickUI ) &&
				resourceList[manuscriptID].available == 1
			)
			{
				resourceList[parchmentID].productionShares++;
				resourceList[fursID].productionShares++;
				resourceList[cultureID].productionShares++;
				resourceList[manuscriptID].craftingAllowed = 1;
			} else
			{
				if
				(
					game.resPool.resources[manuscriptID].perTickUI > 0
				)
				{
					resourceList[manuscriptID].craftingAllowed = 1;
				} else
				{
					resourceList[manuscriptID].craftingAllowed = 0;
				};
			};
			
			/*compendium*/
			if
			(
				resourceList[manuscriptID].craftingAllowed == 1 &&
				game.resPool.resources[scienceID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[scienceID].maxValue ) - Math.floor( game.resPool.resources[scienceID].value ) <= Math.floor( game.resPool.resources[scienceID].perTickUI ) &&
				resourceList[compendiumID].available == 1
			)
			{
				resourceList[manuscriptID].productionShares++;
				resourceList[parchmentID].productionShares++;
				resourceList[fursID].productionShares++;
				resourceList[cultureID].productionShares++;
				resourceList[scienceID].productionShares++;
				resourceList[compendiumID].craftingAllowed = 1;
			} else
			{
				resourceList[compendiumID].craftingAllowed = 0;
			};
			
			/*blueprint*/
			if
			(
				resourceList[compendiumID].craftingAllowed == 1 &&
				resourceList[blueprintID].available == 1
			)
			{
				resourceList[compendiumID].productionShares++;
				resourceList[manuscriptID].productionShares++;
				resourceList[parchmentID].productionShares++;
				resourceList[fursID].productionShares++;
				resourceList[cultureID].productionShares++;
				resourceList[scienceID].productionShares++;
				resourceList[scienceID].productionShares++;
				resourceList[blueprintID].craftingAllowed = 1;
			} else
			{
				resourceList[blueprintID].craftingAllowed = 0;
			};
			
			/*tanker*/
			if
			(
				resourceList[shipID].craftingAllowed == 1 &&
				resourceList[alloyID].craftingAllowed == 1 &&
				resourceList[blueprintID].craftingAllowed == 1 &&
				resourceList[tankerID].available == 1
			)
			{
				resourceList[shipID].productionShares++;
				resourceList[scaffoldID].productionShares++;
				resourceList[beamID].productionShares++;
				resourceList[woodID].productionShares++;
				resourceList[plateID].productionShares++;
				resourceList[ironID].productionShares++;
				resourceList[starchartID].productionShares++;
				resourceList[alloyID].productionShares++;
				resourceList[steelID].productionShares++;
				resourceList[ironID].productionShares++;
				resourceList[coalID].productionShares++;
				resourceList[titaniumID].productionShares++;
				resourceList[blueprintID].productionShares++;
				resourceList[compendiumID].productionShares++;
				resourceList[manuscriptID].productionShares++;
				resourceList[parchmentID].productionShares++;
				resourceList[fursID].productionShares++;
				resourceList[cultureID].productionShares++;
				resourceList[scienceID].productionShares++;
				resourceList[scienceID].productionShares++;
				resourceList[tankerID].craftingAllowed = 1;
			} else
			{
				resourceList[tankerID].craftingAllowed = 0;
			};
			
			/*megalith*/
			if
			(
				resourceList[slabID].craftingAllowed == 1 &&
				resourceList[beamID].craftingAllowed == 1 &&
				resourceList[plateID].craftingAllowed == 1 &&
				resourceList[megalithID].available == 1
			)
			{
				resourceList[slabID].productionShares++;
				resourceList[mineralsID].productionShares++;
				resourceList[beamID].productionShares++;
				resourceList[woodID].productionShares++;
				resourceList[plateID].productionShares++;
				resourceList[ironID].productionShares++;
				resourceList[megalithID].craftingAllowed = 1;
			} else
			{
				resourceList[megalithID].craftingAllowed = 0;
			};
			
			/*kerosene*/
			if
			(
				game.resPool.resources[oilID].perTickUI > 0 &&
				Math.floor( game.resPool.resources[oilID].maxValue ) - Math.floor( game.resPool.resources[oilID].value ) <= Math.floor( game.resPool.resources[oilID].perTickUI ) &&
				resourceList[keroseneID].available == 1
			)
			{
				resourceList[oilID].productionShares++;
				resourceList[keroseneID].craftingAllowed = 1;
			} else
			{
				resourceList[keroseneID].craftingAllowed = 0;
			};
			
			
			adjustRefineRate = game.bld.buildingsData[workshopID].effects.craftRatio * game.bld.buildingsData[workshopID].val;
			if( game.village.leader != null && game.village.leader.trait.name == "engineer" ) { adjustRefineRate += 0.05; };
			

			/*wood*/
			/*catnip is only used as a resource for wood...so it doesn't have production shares*/
			if( resourceList[woodID].craftingAllowed == 1 )
			{
				/*calculate the amount of wood refined from catnip*/
				resourceList[woodID].perSecProduction = ( ( ( game.resPool.resources[catnipID].perTickUI * 5 ) / game.craftTable.resRows[woodCraftID].recipeRef.prices[0].val ) * ( 1 + adjustRefineRate ) );
					
				/*add the refined catnip to stockpile...if the stockpile is not already full*/
				if( game.resPool.resources[woodID].value + resourceList[woodID].perSecProduction < game.resPool.resources[woodID].maxValue )
				{ game.resPool.resources[woodID].value += resourceList[woodID].perSecProduction; };
				
				/*add the wood production to the refined catnip production so that the correct total wood production is used for the rest of the craftable resources*/
				if( game.resPool.resources[woodID].perTickUI > 0 )
				{ resourceList[woodID].perSecProduction += ( ( game.resPool.resources[woodID].perTickUI * 5 ) / resourceList[woodID].productionShares ); };
			} else
			{
				resourceList[woodID].perSecProduction = 0;
			};
			
			/*beam*/
			if( resourceList[beamID].craftingAllowed == 1 )
			{
				resourceList[beamID].perSecProduction =
					( ( ( resourceList[woodID].perSecProduction / resourceList[woodID].productionShares ) / game.craftTable.resRows[beamCraftID].recipeRef.prices[0].val ) * ( 1 + adjustRefineRate ) );
					/*adding NaN to a value results in NaN...so change NaN to 0*/
				if( isNaN( resourceList[beamID].perSecProduction ) == true ) { resourceList[beamID].perSecProduction = 0 };
				game.resPool.resources[beamID].value += resourceList[beamID].perSecProduction;
				resourceList[beamID].perSecProduction += game.resPool.resources[beamID].perTickUI * 5;
			} else
			{
				resourceList[beamID].perSecProduction = game.resPool.resources[beamID].perTickUI * 5;
			};
			
			/*scaffold*/
			if( resourceList[scaffoldID].craftingAllowed == 1 )
			{
				resourceList[scaffoldID].perSecProduction =
					( ( ( resourceList[beamID].perSecProduction / resourceList[beamID].productionShares ) / game.craftTable.resRows[scaffoldCraftID].recipeRef.prices[0].val ) * ( 1 + adjustRefineRate ) );
				if( isNaN( resourceList[scaffoldID].perSecProduction ) == true ) { resourceList[scaffoldID].perSecProduction = 0 };
				game.resPool.resources[scaffoldID].value += resourceList[scaffoldID].perSecProduction;
				resourceList[scaffoldID].perSecProduction += game.resPool.resources[scaffoldID].perTickUI * 5;
			} else
			{
				resourceList[scaffoldID].perSecProduction = game.resPool.resources[scaffoldID].perTickUI * 5;
			};
			
			/*slab*/
			if( resourceList[slabID].craftingAllowed == 1 )
			{
				resourceList[slabID].perSecProduction =
					( ( ( ( game.resPool.resources[mineralsID].perTickUI * 5 ) / resourceList[mineralsID].productionShares ) / game.craftTable.resRows[slabCraftID].recipeRef.prices[0].val ) * ( 1 + adjustRefineRate ) );
				if( isNaN( resourceList[slabID].perSecProduction ) == true ) { resourceList[slabID].perSecProduction = 0 };
				game.resPool.resources[slabID].value += resourceList[slabID].perSecProduction;
				resourceList[slabID].perSecProduction += game.resPool.resources[slabID].perTickUI * 5;
			} else
			{
				resourceList[slabID].perSecProduction = game.resPool.resources[slabID].perTickUI * 5;
			};
			
			/*steel*/
			if( resourceList[steelID].craftingAllowed == 1 )
			{
				resourceList[steelID].perSecProduction =
					Math.min
					(
						( ( ( game.resPool.resources[ironID].perTickUI * 5 ) / resourceList[ironID].productionShares ) / game.craftTable.resRows[steelCraftID].recipeRef.prices[0].val ),
						( ( ( game.resPool.resources[coalID].perTickUI * 5 ) / resourceList[coalID].productionShares ) / game.craftTable.resRows[steelCraftID].recipeRef.prices[1].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[steelID].perSecProduction ) == true ) { resourceList[steelID].perSecProduction = 0 };
				game.resPool.resources[steelID].value += resourceList[steelID].perSecProduction;
				resourceList[steelID].perSecProduction += game.resPool.resources[steelID].perTickUI * 5;
			} else
			{
				resourceList[steelID].perSecProduction = game.resPool.resources[steelID].perTickUI * 5;
			};
			
			/*concrete*/
			if( resourceList[concreteID].craftingAllowed == 1 )
			{
				resourceList[concreteID].perSecProduction =
					Math.min
					(
						( ( resourceList[slabID].perSecProduction / resourceList[slabID].productionShares ) / game.craftTable.resRows[concreteCraftID].recipeRef.prices[0].val ),
						( ( resourceList[steelID].perSecProduction / resourceList[steelID].productionShares ) / game.craftTable.resRows[concreteCraftID].recipeRef.prices[1].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[concreteID].perSecProduction ) == true ) { resourceList[concreteID].perSecProduction = 0 };
				game.resPool.resources[concreteID].value += resourceList[concreteID].perSecProduction;
				resourceList[concreteID].perSecProduction += game.resPool.resources[steelID].perTickUI * 5;
			} else
			{
				resourceList[concreteID].perSecProduction = game.resPool.resources[concreteID].perTickUI * 5;
			};
			
			/*plate*/
			if( resourceList[plateID].craftingAllowed == 1 )
			{
				resourceList[plateID].perSecProduction =
					( ( ( ( game.resPool.resources[ironID].perTickUI * 5 ) / resourceList[ironID].productionShares ) / game.craftTable.resRows[plateCraftID].recipeRef.prices[0].val ) * ( 1 + adjustRefineRate ) );
				if( isNaN( resourceList[plateID].perSecProduction ) == true ) { resourceList[plateID].perSecProduction = 0 };
				game.resPool.resources[plateID].value += resourceList[plateID].perSecProduction;
				resourceList[plateID].perSecProduction += game.resPool.resources[plateID].perTickUI * 5;
			} else
			{
				resourceList[plateID].perSecProduction = game.resPool.resources[plateID].perTickUI * 5;
			};
			
			/*alloy*/
			if( resourceList[alloyID].craftingAllowed == 1 )
			{
				resourceList[alloyID].perSecProduction =
					Math.min
					(
						( ( resourceList[steelID].perSecProduction / resourceList[steelID].productionShares ) / game.craftTable.resRows[alloyCraftID].recipeRef.prices[0].val ),
						( ( ( game.resPool.resources[titaniumID].perTickUI * 5 ) / resourceList[titaniumID].productionShares ) / game.craftTable.resRows[alloyCraftID].recipeRef.prices[1].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[alloyID].perSecProduction ) == true ) { resourceList[alloyID].perSecProduction = 0 };
				game.resPool.resources[alloyID].value += resourceList[alloyID].perSecProduction;
				resourceList[alloyID].perSecProduction += game.resPool.resources[alloyID].perTickUI * 5;
			} else
			{
				resourceList[alloyID].perSecProduction = game.resPool.resources[alloyID].perTickUI * 5;
			};
			
			/*eludium*/
			if( resourceList[eludiumID].craftingAllowed == 1 )
			{
				resourceList[eludiumID].perSecProduction =
					Math.min
					(
						( ( resourceList[alloyID].perSecProduction / resourceList[alloyID].productionShares ) / game.craftTable.resRows[eludiumCraftID].recipeRef.prices[0].val ),
						( ( ( game.resPool.resources[unobtainiumID].perTickUI * 5 ) / resourceList[unobtainiumID].productionShares ) / game.craftTable.resRows[eludiumCraftID].recipeRef.prices[1].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[eludiumID].perSecProduction ) == true ) { resourceList[eludiumID].perSecProduction = 0 };
				game.resPool.resources[eludiumID].value += resourceList[eludiumID].perSecProduction;
				resourceList[eludiumID].perSecProduction += game.resPool.resources[eludiumID].perTickUI * 5;
			} else
			{
				resourceList[eludiumID].perSecProduction = game.resPool.resources[eludiumID].perTickUI * 5;
			};
			
			/*gear*/
			if( resourceList[gearID].craftingAllowed == 1 )
			{
				resourceList[gearID].perSecProduction =
					( ( ( resourceList[steelID].perSecProduction / resourceList[steelID].productionShares ) / game.craftTable.resRows[gearCraftID].recipeRef.prices[0].val ) * ( 1 + adjustRefineRate ) );
				if( isNaN( resourceList[gearID].perSecProduction ) == true ) { resourceList[gearID].perSecProduction = 0 };
				game.resPool.resources[gearID].value += resourceList[gearID].perSecProduction;
				resourceList[gearID].perSecProduction += game.resPool.resources[gearID].perTickUI * 5;
			} else
			{
				resourceList[gearID].perSecProduction = game.resPool.resources[gearID].perTickUI * 5;
			};
			
			/*ship*/
			if( resourceList[shipID].craftingAllowed == 1 )
			{
				resourceList[shipID].perSecProduction =
					Math.min
					(
						( ( resourceList[scaffoldID].perSecProduction / resourceList[scaffoldID].productionShares ) / game.craftTable.resRows[shipCraftID].recipeRef.prices[0].val ),
						( ( resourceList[plateID].perSecProduction / resourceList[plateID].productionShares ) / game.craftTable.resRows[shipCraftID].recipeRef.prices[1].val ),
						( ( ( game.resPool.resources[starchartID].perTickUI * 5 ) / resourceList[starchartID].productionShares ) / game.craftTable.resRows[shipCraftID].recipeRef.prices[2].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[shipID].perSecProduction ) == true ) { resourceList[shipID].perSecProduction = 0 };
				game.resPool.resources[shipID].value += resourceList[shipID].perSecProduction;
				resourceList[shipID].perSecProduction += game.resPool.resources[shipID].perTickUI * 5;
			} else
			{
				resourceList[shipID].perSecProduction = game.resPool.resources[shipID].perTickUI * 5;
			};
			
			/*parchment*/
			if( resourceList[parchmentID].craftingAllowed == 1 )
			{
				resourceList[parchmentID].perSecProduction =
					( ( ( ( game.resPool.resources[fursID].perTickUI * 5 ) / resourceList[fursID].productionShares ) / game.craftTable.resRows[parchmentCraftID].recipeRef.prices[0].val ) * ( 1 + adjustRefineRate ) );
				if( isNaN( resourceList[parchmentID].perSecProduction ) == true ) { resourceList[parchmentID].perSecProduction = 0 };
				game.resPool.resources[parchmentID].value += resourceList[parchmentID].perSecProduction;
				resourceList[parchmentID].perSecProduction += game.resPool.resources[parchmentID].perTickUI * 5;
			} else
			{
				if
				(
					optionsKittyAssist[8].allowed == 1 &&
					game.resPool.resources[fursID].perTickUI <= 0 &&
					resourceList[parchmentID].available == 1 &&
					workshopList[printingPressID].researched == 0 &&
					game.resPool.resources[fursID].value > 0
				)
				{
					game.workshop.craft( "parchment", game.resPool.resources[fursID].value / game.craftTable.resRows[parchmentCraftID].recipeRef.prices[0].val );
				} else
				{
					resourceList[parchmentID].perSecProduction = game.resPool.resources[parchmentID].perTickUI * 5;
				};
			};
			
			/*manuscript*/
			if( resourceList[manuscriptID].craftingAllowed == 1 )
			{
				resourceList[manuscriptID].perSecProduction =
					Math.min
					(
						( ( resourceList[parchmentID].perSecProduction / resourceList[parchmentID].productionShares ) / game.craftTable.resRows[manuscriptCraftID].recipeRef.prices[0].val ),
						( ( ( game.resPool.resources[cultureID].perTickUI * 5 ) / resourceList[cultureID].productionShares ) / game.craftTable.resRows[manuscriptCraftID].recipeRef.prices[1].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[manuscriptID].perSecProduction ) == true ) { resourceList[manuscriptID].perSecProduction = 0 };
				game.resPool.resources[manuscriptID].value += resourceList[manuscriptID].perSecProduction;
				resourceList[manuscriptID].perSecProduction += game.resPool.resources[manuscriptID].perTickUI * 5;
			} else
			{
				if
				(
					optionsKittyAssist[8].allowed == 1 &&
					game.resPool.resources[parchmentID].perTickUI == 0 &&
					resourceList[manuscriptID].available == 1 &&
					workshopList[printingPressID].researched == 0 &&
					game.resPool.resources[parchmentID].value > 0 &&
					game.resPool.resources[cultureID].value > 0
				)
				{
					game.workshop.craft
					(
						"manuscript",
						Math.min
						(
							game.resPool.resources[parchmentID].value / game.craftTable.resRows[manuscriptCraftID].recipeRef.prices[0].val,
							game.resPool.resources[cultureID].value / game.craftTable.resRows[manuscriptCraftID].recipeRef.prices[1].val
						)
					);
				} else
				{
					resourceList[manuscriptID].perSecProduction = game.resPool.resources[manuscriptID].perTickUI * 5;
				};
			};
			
			/*compendium*/
			if( resourceList[compendiumID].craftingAllowed == 1 )
			{
				resourceList[compendiumID].perSecProduction =
					Math.min
					(
						( ( resourceList[manuscriptID].perSecProduction / resourceList[manuscriptID].productionShares ) / game.craftTable.resRows[compendiumCraftID].recipeRef.prices[0].val ),
						( ( ( game.resPool.resources[scienceID].perTickUI * 5 ) / resourceList[scienceID].productionShares ) / game.craftTable.resRows[compendiumCraftID].recipeRef.prices[1].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[compendiumID].perSecProduction ) == true ) { resourceList[compendiumID].perSecProduction = 0 };
				game.resPool.resources[compendiumID].value += resourceList[compendiumID].perSecProduction;
				resourceList[compendiumID].perSecProduction += game.resPool.resources[compendiumID].perTickUI * 5;
			} else
			{
				resourceList[compendiumID].perSecProduction = game.resPool.resources[compendiumID].perTickUI * 5;
			};
			
			/*blueprint*/
			if( resourceList[blueprintID].craftingAllowed == 1 )
			{
				resourceList[blueprintID].perSecProduction =
					Math.min
					(
						( ( resourceList[compendiumID].perSecProduction / resourceList[compendiumID].productionShares ) / game.craftTable.resRows[blueprintCraftID].recipeRef.prices[0].val ),
						( ( ( game.resPool.resources[scienceID].perTickUI * 5 ) / resourceList[scienceID].productionShares ) / game.craftTable.resRows[blueprintCraftID].recipeRef.prices[1].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[blueprintID].perSecProduction ) == true ) { resourceList[blueprintID].perSecProduction = 0 };
				game.resPool.resources[blueprintID].value += resourceList[blueprintID].perSecProduction;
				resourceList[blueprintID].perSecProduction += game.resPool.resources[blueprintID].perTickUI * 5;
			} else
			{
				resourceList[blueprintID].perSecProduction = game.resPool.resources[blueprintID].perTickUI * 5;
			};
			
			/*tanker*/
			if( resourceList[tankerID].craftingAllowed == 1 )
			{
				resourceList[tankerID].perSecProduction =
					Math.min
					(
						( ( resourceList[shipID].perSecProduction / resourceList[shipID].productionShares ) / game.craftTable.resRows[tankerCraftID].recipeRef.prices[0].val ),
						( ( resourceList[alloyID].perSecProduction / resourceList[alloyID].productionShares ) / game.craftTable.resRows[tankerCraftID].recipeRef.prices[1].val ),
						( ( resourceList[blueprintID].perSecProduction / resourceList[blueprintID].productionShares ) / game.craftTable.resRows[tankerCraftID].recipeRef.prices[2].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[tankerID].perSecProduction ) == true ) { resourceList[tankerID].perSecProduction = 0 };
				game.resPool.resources[tankerID].value += resourceList[tankerID].perSecProduction;
				resourceList[tankerID].perSecProduction += game.resPool.resources[tankerID].perTickUI * 5;
			} else
			{
				resourceList[tankerID].perSecProduction = game.resPool.resources[tankerID].perTickUI * 5;
			};
			
			/*megalith*/
			if( resourceList[megalithID].craftingAllowed == 1 )
			{
				resourceList[megalithID].perSecProduction =
					Math.min
					(
						( ( resourceList[slabID].perSecProduction / resourceList[slabID].productionShares ) / game.craftTable.resRows[megalithCraftID].recipeRef.prices[0].val ),
						( ( resourceList[beamID].perSecProduction / resourceList[beamID].productionShares ) / game.craftTable.resRows[megalithCraftID].recipeRef.prices[1].val ),
						( ( resourceList[plateID].perSecProduction / resourceList[plateID].productionShares ) / game.craftTable.resRows[megalithCraftID].recipeRef.prices[2].val )
					) *
					( 1 + adjustRefineRate );
				if( isNaN( resourceList[megalithID].perSecProduction ) == true ) { resourceList[megalithID].perSecProduction = 0 };
				game.resPool.resources[megalithID].value += resourceList[megalithID].perSecProduction;
				resourceList[megalithID].perSecProduction += game.resPool.resources[megalithID].perTickUI * 5;
			} else
			{
				resourceList[megalithID].perSecProduction = game.resPool.resources[megalithID].perTickUI * 5;
			};
			
			/*kerosene*/
			if( resourceList[keroseneID].craftingAllowed == 1 )
			{
				resourceList[keroseneID].perSecProduction =
					( ( ( ( game.resPool.resources[oilID].perTickUI * 5 ) / resourceList[oilID].productionShares ) / game.craftTable.resRows[keroseneCraftID].recipeRef.prices[0].val ) * ( 1 + adjustRefineRate ) );
				if( isNaN( resourceList[keroseneID].perSecProduction ) == true ) { resourceList[keroseneID].perSecProduction = 0 };
				game.resPool.resources[keroseneID].value += resourceList[keroseneID].perSecProduction;
				resourceList[keroseneID].perSecProduction += game.resPool.resources[keroseneID].perTickUI * 5;
			} else
			{
				resourceList[keroseneID].perSecProduction = game.resPool.resources[keroseneID].perTickUI * 5;
			};
		};
	};
};
