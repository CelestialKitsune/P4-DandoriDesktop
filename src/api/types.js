// EPikminColor enum
// According to DT_PikminProperty, bean is 8
export const PikminTypes = {
    0: "PikminRed",
    1: "PikminBlue",
    2: "PikminYellow",
    3: "PikminRock",
    4: "PikminWing",
    5: "PikminPurple",
    6: "PikminWhite",
    7: "PikminIce",
    9: "PikminPhoton",
    16: "Not set (PongashiColor only)"
};

export const TeamIDs = {
    A: "ETeamIdEditor::A",
    B: "ETeamIdEditor::B",
    No: "ETeamIdEditor::No"
};

export const PortalTypes = {
    2: "DungeonExit",
    3: "UpPortal",
    4: "DownPortal (cave)",
    6: "DownPortal (overworld)",
    9: "MadoriHome",
    10: "InitialPortalMove",
    12: "ExtraCavePortal"
};

export const DemoPlayParamEnter = [
    "DPP_EnterCave",
    "DPP_Challenge_EnterCave",
    "DPP_MoveCave",
    "DPPEnterCave_GasCooker"
];

export const DemoPlayParamExit = [
    "DPP_FloorCourseInCave",
    "DPP_FloorCourseInCave_Separation",
    "DPP_EscapeCave",
    "None"
];

// EPikminIdlePlayType enum
export const PikminPlayType = {
    0: "None",
    2: "Guidance",
    3: "GatherInCircle",
    // RideAndJump, RunAroundHappy and AmazeByHappySneeze are also in this enum, values unknown    
};

export const ValveWorkType = {
    2: "Once",
    6: "Build"
};

export const DropConditions = {
    NO_SALVAGE_ITEM: 5,
    SALVAGE_ITEM: 6,
    PLAYED_DEMO: 7
};

export const DropConditions_Named = {
    4: "SalvageOtakara",
    5: "NoSalvageItem",
    6: "SalvageItem",
    7: "PlayedDemo",
    0: "None"
};

export const GameRulePermissionFlags = [
    0,
    2,
    7,
    15,
    269,
    271
];
export const ActorSpawnerCustomParameter = ["None", "BasedOnSpawner", "ShoulderBomb", "UseSpawnerTerritory", "Bomb", "SVSleep000", "LFSleep003"];

export const PikminColor = {
    Red: "red",
    Yellow: "yellow",
    Blue: "blue",
    Purple: "purple",
    White: "white",
    Rock: "rock",
    Wing: "wing",
    Ice: "ice",
    Glow: "glow",
};

export const PikminSpawnState = {
    Sprouts: "sprouts",
    Fighting: "fighting",
    Idle: "idle",
};

export const RebirthTypes = {
    NoRebirth: "ERebirthType::NoRebirth",
    AlwaysRebirth: "ERebirthType::AlwaysRebirth",
    RebirthFullExplore: "ERebirthType::RebirthFullExplore",
    RebirthLater: "ERebirthType::RebirthLater"
};

export const ActivityTimes = {
    Allday: "EActivityTime::Allday",
    Daytime: "EActivityTime::Daytime",
    Nighttime: "EActivityTime::Nighttime",
};

//EActorPlacementCondition
export const ActorPlacementCondition = {
    ExploreRateNotLessThen: "EActorPlacementCondition::ExploreRateNotLessThen",
    LessMaxPikminLimit: "EActorPlacementCondition::LessMaxPikminLimit",
    MoreRescuerLeafNumber: "EActorPlacementCondition::MoreRescuerLeafNumber",
    MoreRescuerNpcNumber: "EActorPlacementCondition::MoreRescuerNpcNumber",
    MoreRescuerNumber: "EActorPlacementCondition::MoreRescuerNumber",
    NightAdventurePattern: "EActorPlacementCondition::NightAdventurePattern",
    QuestClear: "EActorPlacementCondition::QuestClear",
    RescueSurvivor: "EActorPlacementCondition::RescueSurvivor",
    ResistActorGlobalId: "EActorPlacementCondition::ResistActorGlobalId",
    UnclearCaveAfterEnding: "EActorPlacementCondition::UnclearCaveAfterEnding",
    UnionPikmin: "EActorPlacementCondition::UnionPikmin",
};

export const ExploreRateTargetType = {
    Kinkai: "EExploreRateTargetType::Kinkai",
    None: "EExploreRateTargetType::None",
    Otakara: "EExploreRateTargetType::Otakara",
    OnyonCarry: "EExploreRateTargetType::OnyonCarry",
    ShizaiStation: "EExploreRateTargetType::ShizaiStation",
    ShizaiTateana: "EExploreRateTargetType::ShizaiTateana",
    Survivor: "EExploreRateTargetType::Survivor",
    SurvivorLeaf: "EExploreRateTargetType::SurvivorLeaf",
    TekiDay: "EExploreRateTargetType::TekiDay"
};

//#region UI element controllers
export const editableNumberFields = [
    "CondInt",
    "Life",
    "W",
    "X",
    "Y",
    "Z",
    "angle",
    "baseCampId",
    "birthDay",
    "deadDay",
    "demoID",
    "dropOption",
    "flatEffectOffsetZ",
    "generateNum",
    "generateRadius",
    "groupingRadius",
    "halfHeight",
    "invasionStartTimeRatio",
    "leftProjectHeight",
    "mabikiNumFromFollow",
    "maxFallDownLength",
    "noSpawnRadius",
    "openTime",
    "panzakuPriority",
    "pieceNum",
    "piecePutNum",
    "playAnimDist",
    "pongashiChangeColorFollowNum",
    "portalNumber",
    "radius",
    "rebirthInterval",
    "searchAreaOtakaraCarryRadius",
    "snapHeight",
    "snapRadius",
    "spawnNum",
    "spawnRadius",
    "stopQueenDistXY",
    "toPortalId",
    "unknownInt",
    "waterRange",
    "weight"
];

export const editableBools = [
    "bAutoSpawnMush",
    "bDeactivateByExit",
    "bDisableIsFlareGuard",
    "bDisableSoftEdge",
    "bEnableFreezeBothDrop",
    "bEnableCustomSoftEdge",
    "bEnableOptionalPoint",
    "bInitialPortalMove",
    "bMabikiPongashi",
    "bOverrideInitLocation",
    "bRotateDefault",
    "bSetCrystal",
    "bSprinklerOnly",
    "bUseSnapHeight",
    "bWindLong"
];

export const ignoreFields = [
    "drops",
    "type",
    "infoType",
    "ddId",
    "outlineFolderPath",
    "spareBytes"
];

export const editableStrings = [
    "CIDList",
    "CondName",
    "CondPikminColor",
    "boneName",
    "demoBindName",
    "ignoreList",
    "navMeshTriggerID",
    "switchID",
    "toLevelName",
    "toSubLevelName",
    "valveID",
    "warpID"
];

export const arrayStrings = [
    "ignoreList",
    "CIDList"
];

export const selectFields = {
    pongashiChangeColorFromFollow: Object.values(PikminTypes),
    pikminType: Object.values(PikminTypes),
    groupIdlingType: Object.values(PikminPlayType),
    rebirthType: Object.values(RebirthTypes),
    portalType: Object.values(PortalTypes),
    demoPlayParamEnter: DemoPlayParamEnter,
    demoPlayParamExit: DemoPlayParamExit,
    workType: Object.values(ValveWorkType),
    activityTime: Object.values(ActivityTimes),
    Condition: Object.values(ActorPlacementCondition),
    exploreRateType: Object.values(ExploreRateTargetType)
};

export const NightMaps = {
    Area001: [
        "Night001-1",
        "Night001-2",
        "Night001-3",
    ],
    Area002: [
        "Night002-1",
        "Night002-2",
        "Night002-3",
    ],
    Area003: [
        "Night003-1",
        "Night003-2",
        "Night003-3",
    ],
    Area004: [
        "Night004-1",
        "Night004-2"
    ],
    Area006: [
        "Night006-1",
        "Night006-2"
    ],
    Area010: [
        "Night010-1",
        "Night010-2",
        "Night010-3"
    ]
};

//#region InfoTypes
export const InfoType = {
    Treasure: "treasure",
    Creature: "creature",
    Onion: "onion",
    Pikmin: "pikmin",
    Hazard: "hazard",
    Water: "water",
    Night: "night",
    Gimmick: "gimmick",
    Object: "object",
    WorkObject: "workobject",
    Pikmin: "pikmin",
    Base: "base",
    Onion: "onion",
    Hazard: "hazard",
    Portal: "portal",
    Item: "item",
    WaterWater: "water-water",
    WaterSwamp: "water-swamp",
};

export const isTreasure = (marker) => {
    return marker.infoType === InfoType.Treasure;
};

export const isCreature = (marker) => {
    return marker.infoType === InfoType.Creature;
};

export const isGimmick = (marker) => {
    return marker.infoType === InfoType.Gimmick;
};

export const Legends = [
    InfoType.Creature,
    InfoType.Treasure,
    InfoType.Gimmick,
    InfoType.Object,
    InfoType.WorkObject,
    InfoType.Pikmin,
    InfoType.Base,
    InfoType.Onion,
    InfoType.Hazard,
    InfoType.Portal,
    InfoType.Item
];

export const Categories = [
    {
        label: "Creatures",
        markers: [
            InfoType.Creature
        ]
    },
    {
        label: "Treasure",
        markers: [
            InfoType.Treasure
        ]
    },
    {
        label: "Gimmicks",
        markers: [
            InfoType.Gimmick
        ]
    },
    {
        label: "Objects",
        markers: [
            InfoType.Object,
            InfoType.WorkObject
        ]
    },
    {
        label: "Hazards",
        markers: [
            InfoType.Hazard
        ]
    },
    {
        label: "Portals",
        markers: [
            InfoType.Portal
        ]
    },
    {
        label: "Onions",
        markers: [
            InfoType.Onion
        ]
    },
    {
        label: "Base",
        markers: [
            InfoType.Base
        ]
    },
    {
        label: "Pikmin",
        markers: [
            InfoType.Pikmin
        ]
    }
];

//#region Defaults
export const exposedGenVars = ["AttackAffordance", "AI", "CarrotMove", "Life", "PointerAssist", "CarryAffordance"];

export const DefaultDrop = {
    id: 1,
    bRegistGenerator: 0,
    dropChance: 1,
    dropCondition: 0,
    flags: [1, 8, 16, 64],
    customFloatParam: 0.0,
    bSetTerritory: false,
    maxDrops: 1,
    minDrops: 1,
    assetName: "/Game/Carrot4/Placeables/Teki/GKochappy.GKochappy_C"
};

export const defaultVector = {
    X: 0.0,
    Y: 0.0,
    Z: 0.0
};

export const DefaultActorSpawnerDrop = {
    assetName: "/Game/Carrot4/Placeables/Teki/GKochappy.GKochappy_C",
    bGenseiControl: 0,
    halfHeight: 100,
    infiniteSpawn: 0,
    avatar: 1,
    pikmin: 1,
    avatarAndPikmin: 1,
    carry: 1,
    bNotOverlap: 1,
    noDropItem: 0,
    overlapCenterX: 0,
    overlapCenterY: 0,
    overlapCenterZ: 0,
    radius: 350,
    angle: 180,
    sphereRadius: 500,
    randomRotation: 0,
    spareBytes: [5, 0, 0, 0, 78, 111, 110, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 63],
    spawnInterval: 1,
    spawnLimit: 10,
    spawnLocationX: 0,
    spawnLocationY: 0,
    spawnLocationZ: 0,
    customParameter: "None",
    fallStart: 0,
    spawnAng: 0.0,
    spawnVelX: 0.0,
    spawnVelY: 0.0,
    customFloatParameter: 0.0,
    bSetTerritory: 0.0,
    invasionStartTimeRatio: 0.0
};

export const DefaultPortalTrigger = {
    portalType: PortalTypes[6],
    portalNumber: 0,
    toLevelName: "Cave001_F00",
    toSubLevelName: "None",
    toPortalId: 0,
    demoPlayParamEnter: DemoPlayParamEnter[0],
    demoPlayParamExit: DemoPlayParamExit[0],
    toBaseCampId: -1,
    bInitialPortalMove: false,
    bDeactivateByExit: false,
    playAnimDist: 300,
    panzakuPriority: 0,
    disablePikminFlags: Object.fromEntries(Array.from({ length: 16 }, (_, i) => [i, false])),
    bDisableIsFlareGuard: false,
};

// used for constructing, and displaying swaps to NoraSpawner
// fix that and split them up later, between a superset for construction and the NS defaults
export const defaultAIProperties = {
    spawnNum: 1,
    spawnRadius: 50,
    noSpawnRadius: 35,
    pikminType: PikminTypes[0],
    mabikiNumFromFollow: 50,
    bMabikiPongashi: true,
    pongashiChangeColorFollowNum: -1,
    pongashiChangeColorFromFollow: PikminTypes[0],
    noraIdlingPreset: "NoraDefault01",
    groupIdlingType: PikminPlayType[2],
    mabikiPongashiOffset: {
        X: 0.0,
        Y: 0.0,
        Z: 0.0
    }
};

export const defaultCreatureAI = {
    territory: {
        ...defaultVector,
        halfHeight: 300.0,
        radius: 350.0
    },
    boneName: "None",
    localOffset: {
        X: 0.0,
        Y: 0.0,
        Z: 0.0
    },
    vel: {
        X: 0.0,
        Y: 0.0,
        Z: 0.0
    },
    randVel: {
        X: 0.0,
        Y: 0.0,
        Z: 0.0
    },
    dropOption: 6,
    bOverrideInitLocation: false,
    overrideInitLocation: {
        X: 0.0,
        Y: 0.0,
        Z: 0.0
    },
    bEnableFreezeBothDrop: false,
    searchAreaOtakaraCarryRadius: 1000.0,
    invasionStartTimeRatio: 0.0,
    bEnableOptionalPoint: false,
    optionalPointOffsets: [{
        X: 0.0,
        Y: 0.0,
        Z: 0.0
    }],
};

export const defaultTriggerAI = {
    switchID: "switch00",
    CIDList: "[]"
};

export const defaultSprinklerAI = {
    navMeshTriggerID: "NavMeshTrigger00",
    valveID: "valve0",
    waterRange: 365,
    openTime: 10,
    flatEffectOffsetZ: -30,
    bSprinklerOnly: false
};

export const defaultValveAI = {
    valveID: "valve0",
    workType: ValveWorkType[6],
    demoID: 0,
    piecePutNum: 4
};

export const defaultBaseAIProperties = {
    baseCampId: 1,
    bDeactivateByExit: false,
    safeRadius: 150,
    safeAreaOffsetX: 0,
    safeAreaOffsetY: 0,
    safeAreaOffsetZ: 0,
    searchBoundX: 0.0,
    searchBoundY: 0.0,
    searchBoundZ: 0.0,
    stateChangeDelayTime: 0.699999988079071,
    guruguruDist: 0,
    CIDList: ["Enemy"]
};

export const defaultPlacementCond = {
    Condition: ActorPlacementCondition.ExploreRateNotLessThen,
    CondInt: 0,
    CondName: "None",
    CondPikminColor: "EPikminColor::Undef"
};

export const GateMiddleBytes = [5, 0, 0, 0, 78, 111, 110, 101, 0, 205, 204, 204, 61, 0, 0, 32, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 66, 0, 0, 122, 67, 0, 0, 200, 66, 0, 0, 150, 66, 0, 0, 150, 66, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
export const TriggerDoorAIBytes = [13, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 63, 0, 0, 87, 195, 0, 128, 110, 68, 0, 0, 0, 0, 0, 0, 128, 63, 0, 0, 128, 63, 0, 0, 128, 63, 0, 0, 122, 68, 0, 0, 122, 68, 0, 0, 72, 67];
export const ValveAPBytes = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 0, 0, 0, 0, 0, 0, 128, 191, 0, 0, 128, 191, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 128, 191];
// Does not contain the mystery extra 4 bytes
export const ObjectAIParameter = [0, 0, 0, 0, 255, 255, 255, 255, 5, 0, 0, 0, 78, 111, 110, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 66, 0, 128, 187, 67, 0, 0, 0, 0, 0, 0, 112, 65, 0, 0, 240, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//#region Creature Names
export const CreatureNames = {
    ActorSpawner: "Actor Spawner",
    AmeBozu: "Waterwraith",
    Amembo: "Skeeterskate",
    Arikui: "Whiptongue Bulborb",
    Awadako: "Waddlepus",
    Baby: "Bulborb Larva",
    BabyCrow: "Downy Snagret",
    BigChappy: "Jumbo Bulborb",
    BigFireTank: "Titan Blowhog",
    BigFrog: "Masterhop",
    BigEgg: "Big Egg",
    BigIceTank: "Titan Blizzarding Blowhog",
    BigKingChappy: "Sovereign Bulblax",
    BigUjinko: "Mama Sheargrub",
    BikkuriGiku: "Creeping Chrysanthemum",
    BikkuriKinoko: "Startle Spore",
    Billy: "Bearded Amprat",
    BokeNameko: "Puffstool",
    BossInu: "Ancient Sirehound",
    BossInu2: "Ancient Sirehound", // idk why this is
    Chappy: "Red Bulborb",
    Chaser: "Moss",
    DamagumoCannon: "Man-At-Legs",
    Demejako: "Bug-Eyed Crawmad",
    DiscoDamagumo: "Groovy Long Legs",
    Dodoro: "Smoky Progg",
    DodoroEgg: "Smoky Progg",
    DokuNameko: "Toxstool",
    Dorombo: "Muckerskate",
    Egg: "Egg",
    ElecMushi: "Anode Beetle",
    ElecOtakara: "Anode Dweevil",
    ElecSenbei: "Shockcake",
    FireChappy: "Fiery Bulblax",
    FireOtakara: "Fiery Dweevil",
    FireTank: "Fiery Blowhog",
    Frog: "Yellow Wollyhop",
    Futakuchi: "Armored Cannon Larva",
    FutakuchiAdult: "Horned Cannon Beetle",
    GasKogane: "Doodlebug",
    GasOtakara: "Venom Dweevil",
    GroupDropManager: "GroupDropManager",
    HageDamagumo: "Baldy Long Legs",
    Hambo: "Skitter Leaf",
    Hanachirashi: "Withering Blowhog",
    Hari: "Porquillion",
    Hariuo: "Pricklepuff",
    IceChappy: "Frosty Bulborb",
    IceFrog: "Chillyhop",
    IceKochappy: "Frosty Dwarf Bulborb",
    IceMar: "Icy Blowhog",
    IceOtakara: "Iceblown Dweevil",
    IceSenbei: "Freezecake",
    IceTank: "Snowy Blowhog",
    Iwakko: "Skutterchuck",
    Kaburi: "Joustmite",
    Kajiokoshi: "Pyroclasmic Slooch",
    Kanitama: "Peckish Aristocrab",
    KareHambo: "Desiccated Skitter Leaf",
    Kemekuji: "Toady Bloyster",
    KingChappy: "Emperor Bulblax",
    KinoKajiokoshi: "Moldy Slooch",
    KinoKochappy: "Moldy Dwarf Bulborb",
    Kochappy: "Dwarf Red Bulborb",
    Kogane: "Iridescent Flint Beetle",
    Kogani: "Aristocrab Offspring",
    KumaChappy: "Spotty Bulbear",
    KumaKochappy: "Dwarf Bulbear",
    Kurage: "Lesser Spotted Jellyfloat",
    Kurione: "Honeywisp",
    Mar: "Puffy Blowhog",
    Marigumo: "Arachnode",
    MaroFrog: "Wollyhop",
    MiniMochi: "Sunsquish",
    MitsuMochi: "Foolix",
    Miulin: "Mamuta",
    Namazu: "Water Dumple",
    NightBaby: "Bulborb Larva (Night)",
    NightChappy: "Red Bulborb (Night)",
    NightFireChappy: "Fiery Bulblax (Night)",
    NightFrog: "Yellow Wollyhop (Night)",
    NightKaburi: "Joustmite (Night)",
    NightKareHambo: "Dessicated Skitterleaf (Night)",
    NightKochappy: "Dwarf Bulborb (Night)",
    NightMar: "Puffy Blowhog (Night)",
    NightTobiKaburi: "Flying Joustmite (Night)",
    NightTobinko: "Shearwig (Night)",
    NiseBoss: "Gildemander",
    NiseZako: "Gildemandwee",
    Nomi: "Shearflea",
    NumaSuitori: "Bogswallow",
    OoKogane: "Iridescent Glint Beetle",
    OoKurage: "Greater Spotted Jellyfloat",
    OoPanModoki: "Giant Breadbug",
    Otama: "Wolpole",
    PanModoki: "Breadbug",
    Patroller: "Bloomcap Bloyster",
    PikminYellow: "Yellow Pikmin",
    PikminRed: "Red Pikmin",
    PikminBlue: "Blue Pikmin",
    PikminRock: "Rock Pikmin",
    PikminWing: "Wing Pikmin",
    PikminPurple: "Purple Pikmin",
    PikminWhite: "White Pikmin",
    PikminGlow: "Glow Pikmin",
    PikminIce: "Ice Pikmin",
    Queen: "Empress Bulblax",
    RedShijimi: "Red Spectralids",
    Rusher: "Tusked Blowhog",
    Sakadachi: "Crusted Rumpup",
    Sarai: "Swooping Snitchbug",
    Shako: "Hermit Crawmad",
    Shippo: "Mammoth Snootwhacker",
    ShippoZako: "Miniature Snootwhacker",
    SnakeCrow: "Burrowing Snagret",
    Suitori: "Waddlequaff",
    TamagoMushi: "Mitite",
    TenKochappy: "Orange Dwarf Bulborb",
    TentenChappy: "Orange Bulborb",
    ThrowEater: "Grubchucker",
    TobiKaburi: "Flighty Joustmite",
    Tobinko: "Shearwig",
    Tobiuo: "Puckering Blinnow",
    UjinkoA: "Female Sheargrub",
    UjinkoB: "Male Sheargrub",
    WaterOtakara: "Hydro Dweevil",
    WaterTank: "Watery Blowhog",
    WhiteShijimi: "White Spectralids",
    YakiSenbei: "Scorchcake",
    Yamashinju: "Pearly Clamcamp",
    YellowShijimi: "Yellow Spectralids",
    YukiFutakuchi: "Arctic Cannon Larva",
    YukiFutakuchiAdult: "Arctic Cannon Beetle",
    Yukimushi: "Snowfake Fluttertail"
};

//#region Treasure Names
export const TreasureNames = {
    Ota3DMegane: "Dimension Converter",
    OtaAmmolite: "Newtolite Shell",
    OtaApricot: "Searing Acidshock",
    OtaAvocado: "Scaly Custard",
    OtaBanana: "Slapstick Crescent",
    OtaBankCardA: "Courage Emblem",
    OtaBankCardB: "Power Emblem",
    OtaBankCardBlank: "Deity's Portrait",
    OtaBankCardBlank2: "Devil's Portrait",
    OtaBankCardC: "Wisdom Emblem",
    OtaBankCardD: "Love Emblem",
    OtaBankCardE: "Money Emblem",
    OtaBankCardF: "Work Emblem",
    OtaBilliardBall1: "Sphere of Desire",
    OtaBilliardBall2: "Sphere of Family",
    OtaBilliardBall3: "Sphere of Heart",
    OtaBilliardBall4: "Sphere of Beginnings",
    OtaBilliardBall5: "Sphere of Vitality",
    OtaBilliardBall6: "Sphere of Calm",
    OtaBilliardBall7: "Sphere of Good Fortune",
    OtaBilliardBall8: "Sphere of Trust",
    OtaBilliardBall9: "Sphere of Support",
    OtaBilliardBallCue: "Sphere of Truth",
    OtaBiwa: "Velvety Dreamdrop",
    OtaBoardEraser: "Dusty Bed",
    OtaBoat: "Unfloatable Boat",
    OtaBottle: "Maternal Sculpture",
    OtaBrushA: "Brush of Wisdom",
    OtaBrushB: "Brush of Foolishness",
    OtaButtonMetal: "Trap Lid",
    OtaButtonPlastic: "Fastening Item",
    OtaButtonWood: "Perforated Raft",
    OtaCandle: "Olfactory Sculpture",
    OtaCandyStick: "Sweet Stumble-Not",
    OtaCardDentaku: "Solar-Powered Computing Machine",
    OtaCasinoChip1: "Disk of Joyous Wisdom",
    OtaCasinoChip10: "Disk of Angry Wisdom",
    OtaCasinoChip100: "Disk of Surprising Wisdom",
    OtaCasinoChip25: "Disk of Sorrowful Wisdom",
    OtaCasinoChip50: "Disk of Amusing Wisdom",
    OtaCastanets: "Harmonic Synthesizer",
    OtaCherry: "Cupid's Grenade",
    OtaCollar: "Gift of Friendship",
    OtaCompass: "Director of Destiny",
    OtaCounter: "Internal-Clock Measurer",
    OtaCroissant: "Flaky Temptation",
    OtaDarts: "Relentless Spear",
    OtaDaruma: "Persistence Machine",
    OtaDekopon: "Pocked Airhead",
    OtaDentaku: "Number Jumper",
    OtaDice12: "Long-Shot Totem",
    OtaDice20: "Go-with-the-Flow Totem",
    OtaDice4Sided: "Difficult-Choice Totem",
    OtaDice6WHT: "Chance Totem",
    OtaDisc: "Glinty Circular Disc",
    OtaDoguHead: "Ancient Statue Head",
    OtaDragonFruit: "Fire-Breathing Feast",
    OtaDuckL: "Universal Rubber Cutie",
    OtaDuckM: "Planetary Rubber Cutie",
    OtaDuckS: "Stately Rubber Cutie",
    OtaEclair: "Sweet Torrent",
    OtaEffectsUnit: "Soul Reverberator",
    OtaEggplant: "Foolish Fruit",
    OtaEngageRing: "Unbreakable Promise",
    OtaFeeddish: "Bathing Pool",
    OtaFieldGlass: "Double Dragon-Eyed Scope",
    OtaFingerBoard: "Personal-Injury Plank",
    OtaFishCruet: "Mystery Squish Fish",
    OtaFruitsPickBLU: "Ice Sword",
    OtaFruitsPickGRN: "Spirit Sword",
    OtaFruitsPickORN: "Heroic Sword",
    OtaFruitsPickPNK: "Heart Sword",
    OtaFruitsPickYEL: "Bright Sword",
    OtaGamaguchi: "Greed-Inducement Device",
    OtaGaragara: "Shake-a-Smile",
    OtaGBARomBLK: "Spinning Memories Plank",
    OtaGBARomYEL: "Masterpiece Plank",
    OtaGBASP: "Stone of Advancement",
    OtaGBMicroFC: "Micromanagement Station",
    OtaGCConWb: "Winged Freedom Sculpture",
    OtaGoddess: "Lamp of Inspiration",
    OtaGoldBar: "Golden Vaulting Table",
    OtaGoldfish: "Faux Fishy",
    OtaGolfBall: "Orbital Communication Sphere",
    OtaGrape: "Dusk Pustules",
    OtaGrapefruit: "Astringent Clump",
    OtaGripper: "Tandem Trainer",
    OtaHairPin: "Floral Instigator",
    OtaHam: "King of Meats",
    OtaHanafudaA: "Talisman of Life (Crane)",
    OtaHanafudaB: "Talisman of Life (Cherry Blossom)",
    OtaHanafudaC: "Talisman of Life (Moon)",
    OtaHanafudaD: "Talisman of Life (Rain)",
    OtaHanafudaE: "Talisman of Life (Phoenix)",
    OtaHandbell: "Time Marker",
    OtaHandSpinner: "Space Spinner",
    OtaHardBall: "Orb of Destruction",
    OtaHarmonica: "Wind Detector",
    OtaHeroPartsA: "Whimsical Radar",
    OtaHeroPartsAA: "Automatic Gear",
    OtaHeroPartsAB: "Automatic Gear",
    OtaHeroPartsAC: "Secret Safe",
    OtaHeroPartsAD: "Pilot's Seat",
    OtaHeroPartsB: "Ionium Jet",
    OtaHeroPartsC: "Ionium Jet",
    OtaHeroPartsD: "Radiation Canopy",
    OtaHeroPartsE: "Sagittarius",
    OtaHeroPartsF: "Libra",
    OtaHeroPartsG: "Chronos Reactor",
    OtaHeroPartsH: "Geiger Counter",
    OtaHeroPartsI: "Bowsprit",
    OtaHeroPartsJ: "Omega Stabilizer",
    OtaHeroPartsK: "Repair-Type Bolt",
    OtaHeroPartsL: "Repair-Type Bolt",
    OtaHeroPartsM: "Repair-Type Bolt",
    OtaHeroPartsN: "Repair-Type Bolt",
    OtaHeroPartsO: "Nova Blaster",
    OtaHeroPartsP: "Interstellar Radio",
    OtaHeroPartsQ: "Extraordinary Bolt",
    OtaHeroPartsR: "Extraordinary Bolt",
    OtaHeroPartsS: "Extraordinary Bolt",
    OtaHeroPartsT: "Extraordinary Bolt",
    OtaHeroPartsU: "Extraordinary Bolt",
    OtaHeroPartsV: "Extraordinary Bolt",
    OtaHeroPartsW: "Automatic Gear",
    OtaHeroPartsX: "Automatic Gear",
    OtaHeroPartsY: "Automatic Gear",
    OtaHeroPartsZ: "Automatic Gear",
    OtaHimeFork: "Noble Bident",
    OtaHornBell: "Path Creator",
    OtaIcePick: "Shattering Lance",
    OtaIchigo: "Sunseed Berry",
    OtaIchijiku: "Delectable Bouquet",
    OtaIsobeyaki: "Deceptive Snack",
    OtaJamIchigo: "Condensed Sunshine",
    OtaJoyConL: "Telekinesis Detector",
    OtaJoyConR: "Connection Detector",
    OtaKaki: "Portable Sunset",
    OtaKendamaA: "Aspiration-Ritual Ball",
    OtaKendamaB: "Aspiration-Ritual Pole",
    OtaKiwi: "Disguised Delicacy",
    OtaKiwiGLD: "Blonde Impostor",
    OtaKushiyaki: "The Four Grill Brothers",
    OtaLaFrance: "Tremendous Sniffer",
    OtaLemon: "Face Wrinkler",
    OtaLightUpRingBLU: "Hoop of Healing",
    OtaLightUpRingRED: "Hoop of Passion",
    OtaLightUpRingYEL: "Hoop of Fortune",
    OtaLime: "Zest Bomb",
    OtaLoupe: "Detective's Truth Seeker",
    OtaMacaronA: "S.S. Berry",
    OtaMacaronB: "S.S. Peppermint",
    OtaMacaronC: "S.S. Chocolate",
    OtaManekiNeko: "Beckoning Mannequin",
    OtaMango: "Heroine's Tear",
    OtaMangosteen: "Dapper Blob",
    OtaMask: "Expression Hider",
    OtaMatDollLA: "Mama Doll Head",
    OtaMatDollLB: "Empty Vase",
    OtaMatDollMA: "Daughter Doll Head",
    OtaMatDollMB: "Mooching Vase",
    OtaMatDollSA: "Granddaughter Doll Head",
    OtaMatDollSB: "Gifting Vase",
    OtaMelon: "Wayward Moon",
    OtaMikan: "Citrus Lump",
    OtaMoai: "Giant's Fossil",
    OtaMuscat: "Dawn Pustules",
    OtaMusicBoxA: "Mechanical Harp (Memory Song)",
    OtaMusicBoxB: "Mechanical Harp (Lullabies)",
    OtaMusicBoxC: "Mechanical Harp (Windmills)",
    OtaNashi: "Crunchy Deluge",
    OtaNESClassicMini: "Life Controller",
    OtaOcarinaBRN: "Ambiguous Hostel",
    OtaOshaburiBLU: "False Lollipop",
    OtaPadlock: "Secured Satchel",
    OtaPaintsAQU: "Refreshing Goo",
    OtaPaintsBLK: "Ambiguous Goo",
    OtaPaintsBLU: "Decorative Goo",
    OtaPaintsGRN: "Neon Goo",
    OtaPaintsPNK: "Captivation Goo",
    OtaPaintsPPL: "Noble Goo",
    OtaPaintsRED: "Uniquely You Goo",
    OtaPaintsWHT: "True Goo",
    OtaPaintsYEL: "Illumination Goo",
    OtaPapaya: "Seed Hive",
    OtaPaperballoon: "Divine Balloon",
    OtaPaperCraneBLU: "Sweat-Soaked Blue Bird",
    OtaPaperCraneGLD: "Priceless Bird",
    OtaPaperCraneRED: "Skin of the Phoenix",
    OtaPeach: "Mock Bottom",
    OtaPeanut: "Snack Bean",
    OtaPhotoframe: "Buddy Display",
    OtaPinBadgeA: "Blast Shield",
    OtaPinBadgeB: "Ring-of-Return Shield",
    OtaPinBadgeC: "Satellite Shield",
    OtaPinBadgeD: "Heroic Shield",
    OtaPinBadgeE: "Shooting-Star Shield",
    OtaPlum: "Lesser Mock Bottom",
    OtaPocketWatch: "Temporal Mechanism",
    OtaPotato: "Child of the Earth",
    OtaPretzel: "Puzzle Snack",
    OtaPudding: "Jiggle-Jiggle",
    OtaPumpkin: "Mysterious Carriage",
    OtaPuzzleA: "Memory Fragment (Top Left)",
    OtaPuzzleB: "Memory Fragment (Top-ish)",
    OtaPuzzleC: "Memory Fragment (Top...Probably?)",
    OtaPuzzleD: "Memory Fragment (Top Right)",
    OtaPuzzleE: "Memory Fragment (Left Edge)",
    OtaPuzzleF: "Memory Fragment (Center Left)",
    OtaPuzzleG: "Memory Fragment (Center Right)",
    OtaPuzzleH: "Memory Fragment (Right Edge)",
    OtaPuzzleI: "Memory Fragment (Bottom Left)",
    OtaPuzzleJ: "Memory Fragment (Bottom-ish)",
    OtaPuzzleK: "Memory Fragment (Bottom...Probably?)",
    OtaPuzzleL: "Memory Fragment (Bottom Right)",
    OtaRailwayLineA: "Life Station",
    OtaRailwayLineB: "Straight-and-Narrow Track",
    OtaRailwayLineC: "Turn-of-Events Track",
    OtaRailwayLineD: "Back-at-the-Beginning Track",
    OtaRailwayLineE: "Thrill-Ride Track",
    OtaRappa: "Mega Horn",
    OtaRaspberry: "Juicy Gaggle",
    OtaRingo: "Insect Condo",
    OtaRingPop: "Sticky Jewel",
    OtaRoboBody: "Nexus Combobot",
    OtaRoboHandL: "Peacemaker Combobot",
    OtaRoboHandR: "Fist-Force Combobot",
    OtaRoboHead: "Think-Tank Combobot",
    OtaRoboLegL: "Sure-Footed Combobot",
    OtaRoboLegR: "Kick-Start Combobot",
    OtaRodan: "Contemplation Station",
    OtaSFCMouse: "Creativity Conduit",
    OtaShinjitsu: "Mouth of Lies",
    OtaShutterGlasses: "Don't-See-It Specs",
    OtaSmallBell: "Spouse Alert",
    OtaSpeaker: "Amplified Amplifier",
    OtaSpongeA: "Doggy Bed",
    OtaSpongeB: "Birdy Bed",
    OtaSpongeC: "Fishy Bed",
    OtaSqueezer: "Merciless Extractor",
    OtaStarFruit: "Stellar Extrusion",
    OtaSushiEbi: "Fish-Bed Snack",
    OtaSushiMaguro: "Maestro of Flavor",
    OtaSushiTamago: "Belted Delicacy",
    OtaSweetPotato: "Daughter of the Earth",
    OtaTakenoko: "Anxious Sprout",
    OtaTakoWiener: "Octoplus",
    OtaTennisBall: "Sphere of Fuzzy Feelings",
    OtaThermometer: "Heat Sensor",
    OtaTomatoM: "Love Nugget",
    OtaTomatoS: "Crush Nugget",
    OtaToothModel: "Monster Teeth",
    OtaTrainA: "Unlimited Locomotive",
    OtaTrainB: "Middle-Management Tank Car",
    OtaTrainC: "Leisure Car",
    OtaTrilobite: "Slipper-Bug Fossil",
    OtaVenus: "Unfinished Statue",
    OtaWaffle: "Cushion Cake",
    OtaWaterMelon: "Crimson Banquet",
    OtaWhistle: "Emperor Whistle",
    OtaYamashinju: "Princess Pearl",
    OtaYoshiCookieA: "Cookie of Nibbled Circles",
    OtaYoshiCookieB: "Cookie of Prosperity",
    OtaYoshiCookieC: "Vanishing Cookie",
    OtaYoshiCookieD: "Love's Fortune Cookie",
    OtaYoshiCookieE: "Hearty Container",
    OtaZucchini: "Crew-Cut Gourd"
};


export const ItemNames = {
    Bomb: "Bomb Rock",
    IceBomb: "Ice Blast",
    Honey: "Nectar",
    HomingBomb: "Trackonator",
    SearchBomb: "Mine",
    YuudouEsa: "PikPik Carrot",
    DogFood: "Scrummy Bone",
    PhotonBall: "Glow Seed?",
    ShugoFlag: "Idler's Alert?",
    Stone: "Stone?",
    HotExtract: "Ultra-Spicy Spray",
    // PiecePick: "Raw Material"
};

export const BaseNames = {
    OnyonCamp: "Onion Camp",
    OnyonCamp01: "Onion Camp 1",
    OnyonCamp02: "Onion Camp 2",
    OnyonCamp03: "Onion Camp 3",
    OnyonCampSimple: "Simple Onion Camp (?)",
    OnyonCampDummy: "Dummy Onion Camp",
    PodCamp: "Pod Camp",
    PodCamp01: "Pod Camp 1",
    PodCamp02: "Pod Camp 2",
    PodCamp03: "Pod Camp 3",
    PodCampCave00: "Cave Pod Camp",
    PodCampCave01: "Cave Pod Camp 1",
    PodCampCave02: "Cave Pod Camp 2",
    PodCampCave03: "Cave Pod Camp 3",
    PodCampSimple: "Simple Pod Camp",
    PodCampyDummy: "Dummy Pod Camp"
};

//#region Gimmick Names
export const GimmickNames = {
    AirWallBox: "AirWallBox",
    Branch_Long: "Long Branch",
    Burning: "Straw",
    Circulator: "Fan",
    CirculatorLean: "Fan (Leaning)",
    CirculatorLeanForHeroArea010: "Fan (Leaning)",
    CirculatorLeanForWorkingOnlyDay: "Fan (Leaning) (Day)",
    CirculatorLeanPurple: "Fan (Lean) (Purple)",
    CirculatorPurple: "Fan (Purple)",
    CirculatorRed: "Fan (Red)",
    ColdBox: "Ice Box",
    Conveyor265uu: "Conveyor Belt",
    CrackPlanter: "Cracked Planter",
    CrackPlanterDouble: "Cracked Planter (x2)",
    CrackPotL: "Pot (L)",
    CrackPotLAnother: "Pot 2 (L)",
    CrackPotS: "Pot (S)",
    CrackPotSAnother: "Pot 2 (S)",
    CrushJelly_S: "Hydro Jelly (S)",
    CrushJelly_M: "Hydro Jelly (M)",
    CrushJelly_L: "Hydro Jelly (L)",
    Excavation: "Excavation",
    ExcavationM: "Excavation (M)",
    ExcavationS: "Excavation (S)",
    ExcavationOnyon: "Excavation (Onion)",
    Fence: "Fence",
    FenceFall: "Iron Fence?",
    FenceFallNoSideColNoSE: "Iron Fence (???)",
    FenceNoSideCol: "Iron Fence (No Side Collision?)",
    Geyser: "Air Geyser",
    HappyDoor: "Oatchi Tunnel",
    Konro: "Stove?",
    Mizunuki: "Drain",
    MizunukiAnother: "Drain 2",
    MizunukiIndoor: "Drain (Cave)",
    MizunukiIndoorAnother: "Drain 2 (Cave)",
    MoveFloor: "Platform",
    MoveFloorHappy: "Oatchi Platform?",
    MoveFloorHover: "Platform (Floating)",
    MoveFloorRound: "Platform (Round)",
    NavMeshTrigger: "NavMeshTrigger",
    NavMeshTriggerClear: "NavMeshTriggerClear",
    NavMeshTriggerLinkForSplash: "NavMesh Sprinkler Trigger",
    NoraSpawnerHeadLock: "Pikmin Spawn",
    NoraSpawnerPikminLock: "Pikmin Spawn",
    NoraSpawnerPrologue: "Pikmin Spawn (Prologue)",
    NoraSpawnerPongashiLock: "Candypop Bud",
    OoAshibaKinoko: "Chargeshroom",
    OoAshibaKinokoNarrow: "Chargeshroom (Narrow)",
    SwitchOff: "Switch (Off Only)",
    SwitchOnOff: "Switch",
    SwitchOnOffGreen: "Switch (Green)",
    SwitchOnOffRed: "Switch (Red)",
    Tateana: "Hole",
    TateanaBaby: "Hole (Small)",
    Trampoline: "Trampoline",
    TrampolineOneWay: "Trampoline (One Way)",
    TrampolineWideAngle: "Trampoline (Wide)",
    TriggerDoor: "Trigger Gate",
    TriggerDoorSwitchBlue: "Trigger Gate (Blue)",
    TriggerDoorSwitchOff: "Trigger Gate (Off?)",
    TriggerDoorSwitchRed: "Trigger Gate (Red)",
    WallFlexible: "Climbable Wall",
    WarpTrigger: "WarpTrigger",
    ZiplineAnother: "Zipline 2",
    ZiplineSplineMesh: "Zipline",
};

export const HazardNames = {
    Charcoal: "Firey Thing on Top of FireFloor",
    FireFloor175uu: "Fire Floor (175uu)",
    FireFloor350uu: "Fire Floor (350uu)",
    FireFloor525uu: "Fire Floor (525uu)",
    Hiba: "Fire Geyser",
    HibaBubble: "Bubble Geyser",
    HibaDenki: "Electric Arial(?)",
    HibaIce: "Ice Geyser",
    HibaPoison: "Poison Geyser",
    HibaWater: "Water Geyser",
    Komush: "Kingcap",
    KomushS: "Kingcap (S)",
    KomushL: "Kingcap (L)",
    Konro: "Stove?",
    Mush: "Spotcap",
    MushS: "Spotcap (S)",
    MushL: "Spotcap (L)",
    PoisonKomush: "Poison Kingcap",
    PoisonKomushS: "Poison Kingcap (S)",
    PoisonKomushL: "Poison Kingcap (L)",
    PoisonMush: "Poison Spotcap",
    PoisonMushS: "Poison Spotcap (S)",
    PoisonMushL: "Poison Spotcap (L)",
    StickyFloor: "Sticky Floor",
    StickyFloor175uu: "Sticky Floor (175uu)",
    StickyFloor525uu: "Sticky Floor (525uu)",
    StickyFloorFew: "Sticky Floor (Small?)",
    StickyFloorPoison: "Poison Sticky Floor",
    StickyFloorPoison175uu: "Poison Sticky Floor (175uu)",
    StickyFloorPoisonFew: "Poison Sticky Floor (Small?)",
    StickyMush: "Sticky Spotcap?",
    StickyMushB: "Sticky Spotcap (B)?",
    StickyMushC: "Sticky Spotcap (C)?",
    StickyMushPoison: "Poison Sticky Spotcap?"
};

export const OnionNames = {
    Onyon: "Onion",
    OnyonCarryBlue: "Blue Onion",
    OnyonCarryBoost: "Flarlic",
    OnyonCarryIce: "Ice Onion",
    OnyonCarryPink: "Wing Onion",
    OnyonCarryPurple: "Purple Onion",
    OnyonCarryRed: "Red Onion",
    OnyonCarryStone: "Rock Onion",
    OnyonCarryWhite: "White Onion",
    OnyonCarryYellow: "Yellow Onion"
};

//#region Object Names
export const ObjectNames = {
    OjamaBlockAir: "OjamaBlock (Air)",
    OjamaBlock: "OjamaBlock",
    OjamaBlockRoom: "OjamaBlock (Room)",
    OjamaBlockRoom02: "OjamaBlock (Room02)",
    OjamaBlockRoomDuo: "OjamaBlock (?)",
    OjamaBlockWoodParts: "OjamaBlock (?)",
    OjamaBlockWoodPartsB: "OjamaBlock (?)",
    MoveFloorSlowTrigger: "MoveFloor Trigger",
    AirWallBox: "AirWallBox",
    AirWallFlick: "AirWallFlick",
    AirWallJump: "AirWallJump",
    BookendSlope: "BookendSlope",
    BookendPlope: "BookendSlope",
    CushionA: "Cushion (A)",
    CushionB: "Cushion (B)",
    CushionC: "Cushion (C)",
    CushionD: "Cushion (D)",
    PelplantTable: "Pellet Posy Platform",
    Burrow: "Burrow",
    BikkuriKinokoPlant: "Startle Spore Plant",
    Hikarikinoko: "Common Glowcap",
    Icicle: "Icicle",
    IcicleClose: "Icicle (Close)",
    IcicleUp: "Icicle (Up)",
    IwakkoCrystal: "Breakable Crystal",
    Pellet1: "1 Pellet",
    Pellet5: "5 Pellet",
    Pelplant1: "1 Pellet Posy",
    Pelplant1Revive: "1 Pellet Posy (Reviving)",
    Pelplant1ReviveForHero: "1 Pellet Posy (Reviving) (Hero)",
    Pelplant5: "5 Pellet Posy",
    Pelplant5Revive: "5 Pellet Posy (Reviving)",
    Pelplant5ReviveForHero: "5 Pellet Posy (Reviving) (Hero)",
    Pelplant10: "10 Pellet Posy",
    Pelplant10ReviveForHero: "10 Pellet Posy (Reviving) (Hero)",
    Pod: "Pod",
    SurvivorA: "Survivor (A)",
    SurvivorKoppai: "Koppai Survivor",
    SurvivorLeaf: "Leafling Survivor",
    Tsuyukusa: "Burgeoning Spiderwort",
    SurvivorOlimarLeaf: "Olimar Leafling",
    HikariStation: "Glow Pellets",
    Wasurenagusa: "Lumiknoll",
    WasurenagusaMini: "Tricknoll",
    None: "None" // TateanaBaby in night maps can drop "None" as the asset name which has to be handed specially
};

export const PortalNames = {
    DownPortal: "Cave Subfloor Entrance",
    DungeonExit: "Cave Exit",
    ExtraCavePortal: "Sage Leaf Map Portal (??)",
    MadoriArena: "Dandori Battle",
    MadoriPoko: "Dandori Challenge",
    MadoriRuins: "Cave Entrance",
    MadoriRuinsForExit: "Overworld Cave Exit"
};

//#region WorkObject Names
export const WorkObjectNames = {
    BridgeFlexible: "Bridge",
    BridgeFlexibleCave: "Bridge (Cave)",
    BridgeStation: "Raw Material Pile",
    Burning: "Straw",
    DownWall: "Paper Bag",
    DownWallSidecut: "Paper Bag (Sidecut?)",
    GateRock175uu: "Rock Gate (175uu)",
    GateRock200uu: "Rock Gate (200uu)",
    GateRock275uu: "Rock Gate (275uu)",
    GateRock325uu: "Rock Gate (325uu)",
    HandleBoard: "Hanging Clipboard Handle",
    HandleBoardYellow: "Hanging Clipboard Handle (Yellow)",
    HikariStation: "Glow Pellets",
    KinkaiStation: "Gold Nugget Pile",
    PiecePick: "Raw Material",
    PullNekko: "Pullable Plant",
    RopeFishing: "Pullable Rope?",
    SlopeBoth50uu: "Slope (50uu)",
    SlopeBothSidecut50uu: "Slope (Sidecut 50uu)",
    SlopeBothSidecut80uu: "Slope (Sidecut 80uu)",
    Sprinkler: "Sprinkler",
    String: "Climbable String",
    TanebiStation: "Fire Stand (Lit)",
    TanebiStationRelay: "Fire Stand (Unlit)",
    Tunnel: "Tunnel",
    WarpCarryFloor: "Floor Tunnel",
    WarpCarryWall: "Wall Tunnel",
    ValveOnce: "Valve (One Time)",
    ValveVariable: "Valve (Multi)",
    VarGateBomb: "Bomb Gate",
    VarGateDenki: "Electric Gate",
    VarGateDenkiNoPillar: "Electric Gate (No Pillar)",
    VarGateIce: "Ice Gate",
    VarGateIceNoPillar: "Ice Gate (No Pillar)",
    VarGateSoft: "Regular Gate",
    VarGateSoftNoPillar: "Regular Gate (No Pillar)",
    WallFlexible: "Climbable Wall",
    WallFlexibleCave: "Climbable Wall (Cave)",
    XBox: "Cardboard Box (X)",
    YBox: "Cardboard Box (Y)",
    YBoxAnother: "Cardboard Box 2 (Y)",
    YBoxCube: "Cardboard Box Cube (Y)",
    YBoxCubeCan: "Cardboard Box Cube Can (Y)",
    YBoxSmall: "Cardboard Box Small (Y)",
    YBoxSmallAnother: "Cardboard Box Small 2 (Y)",
};

export const PikminNames = {
    PikminYellow: "Yellow Pikmin",
    PikminRed: "Red Pikmin",
    PikminBlue: "Blue Pikmin",
    PikminRock: "Rock Pikmin",
    PikminIce: "Ice Pikmin",
    PikminWing: "Wing Pikmin",
    PikminWhite: "White Pikmin",
    PikminPurple: "Purple Pikmin",
    PikminPhoton: "Glow Pikmin"
};

export const EntityNames = {
    ...CreatureNames,
    ...TreasureNames,
    ...GimmickNames,
    ...ItemNames,
    ...HazardNames,
    ...WorkObjectNames,
    ...OnionNames,
    ...BaseNames,
    ...ObjectNames,
    ...PortalNames
};

export const NameMap = {
    [InfoType.Creature]: CreatureNames,
    [InfoType.Gimmick]: GimmickNames,
    [InfoType.Object]: ObjectNames,
    [InfoType.WorkObject]: WorkObjectNames,
    [InfoType.Pikmin]: PikminNames,
    [InfoType.Base]: BaseNames,
    [InfoType.Onion]: OnionNames,
    [InfoType.Hazard]: HazardNames,
    [InfoType.Portal]: PortalNames,
    [InfoType.Item]: ItemNames,
    [InfoType.Treasure]: TreasureNames,
};

//#region Icon Overrides
export const iconOverrides = {
    circulatorlean: "circulator",
    circulatorleanforheroarea010: "circulator",
    circulatorleanforworkingonlyday: "circulator",
    circulatorleanpurple: "circulator",
    circulatorpurple: "circulator",
    circulatorred: "circulator",
    crackpot2: "crackpot",
    crackpotl: "crackpot",
    crackpotlanother: "crackpot",
    crackpots: "crackpot",
    crackpotsanother: "crackpot",
    crushjelly_l: "crushjelly",
    crushjelly_m: "crushjelly",
    crushjelly_s: "crushjelly",
    mizunukiindoor: "mizunuki",
    mizunukianother: "mizunuki",
    mizunukiindooranother: "mizunuki",
    movefloorhover: "movefloor",
    movefloorhappy: "movefloor",
    triggerdoorswitchblue: "triggerdoor",
    triggerdoorswitchoff: "triggerdoor",
    triggerdoorswitchred: "triggerdoor",
    gaterock175uu: "gaterock",
    gaterock200uu: "gaterock",
    gaterock275uu: "gaterock",
    gaterock325uu: "gaterock",
    komushl: "komush",
    komushs: "komush",
    mushl: "mush",
    mushs: "mush",
    poisonkomushl: "poisonkomush",
    poisonkomushs: "poisonkomush",
    poisonmushl: "poisonmush",
    poisonmushs: "poisonmush",
    stickyfloor175uu: "stickyfloor",
    stickyfloor525uu: "stickyfloor",
    stickyfloorfew: "stickyfloor",
    stickyfloorpartsotas: "stickyfloor",
    stickyfloorpartsmadori: "stickyfloor",
    stickyfloorpartsotab: "stickyfloor",
    stickyfloorpoison175uu: "stickyfloorpoison",
    stickyfloorpoisonfew: "stickyfloorpoison",
    stickymushb: "stickymush",
    stickymushc: "stickymush",
    ojamablockroom: "default",
    bikkurigikiplant: "bikkurikinokoplant",
    onyoncamp01: "onyoncamp",
    onyoncamp02: "onyoncamp",
    onyoncamp03: "onyoncamp",
    onyoncampsimple: "onyoncamp",
    onyoncampdummy: "onyoncamp",
    podcamp: "podcamp",
    podcamp01: "podcamp",
    podcamp02: "podcamp",
    podcamp03: "podcamp",
    podcampsimple: "podcamp",
    podcampdummy: "podcamp",
    podcampcave00: "podcamp",
    podcampcave01: "podcamp",
    podcampcave02: "podcamp",
    podcampcave03: "podcamp",
    survivorolimarleaf: "survivorleaf",
    ojamablockair: "default",
    ojamablock: "default",
    ojamablockroom: "default",
    ojamablockroom02: "default",
    ojamablockroomduo: "default",
    ojamablockwoodparts: "default",
    ojamablockwoodpartsb: "default",
    movefloorslowtrigger: "default",
    excavation: "default",
    excavations: "default",
    excavationonyon: "default",
    excavationunders: "default",
    excavationm: "default",
    airwallbox: "default",
    airwallflick: "default",
    marigumonet: "default",
    pod: "default",
    airwalljump: "default",
    bookendslope: "default",
    bookendplane: "default",
    cushiona: "default",
    cushionb: "default",
    cushionc: "default",
    cushiond: "default",
    pelplanttable: "default",
    warptrigger: "default",
    burrow: "default",
    ropebranch: "default",
    ropebranchsmall: "default",
    navmeshtrigger: "default",
    navmeshtriggerlinkforsplash: "default",
    navmeshtriggerclear: "default",
    none: "default",
    pelplant1revive: "pelplant1",
    pelplant1ddb: "pelplant1",
    pelplant1reviveforhero: "pelplant1",
    pelplant5revive: "pelplant5",
    pelplant5ddb: "pelplant5",
    pelplant5reviveforhero: "pelplant5",
    pelplant10ddb: "pelplant10",
    pelplant10revive: "pelplant10",
};

// A 207 byte slice from an AreaBaseCamp_GEN_VARIABLE
// Sometimes they"re missing 4 bytes in the middle that are always 0 anyway
// A scrape indicated most seem not to have them, but a notable amount do. No clue on what they do.
export const areaBaseGenVarBytes = [0, 0, 0, 0, 255, 255, 255, 255, 5, 0, 0, 0, 78, 111, 110, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 66, 0, 128, 187, 67, 0, 0, 0, 0, 0, 0, 112, 65, 0, 0, 240, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 5, 0, 0, 0, 78, 111, 110, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export const Times = {
    DAY: "Day",
    NIGHT: "Night",
    PERM: "Permanent"
};

export const invisibleEntities = [
    "Ojama",
    "NavMeshTrigger",
    "ConveyNav",
    "AirWall",
    "WarpTrigger",
    "Excavation"
];

// Strange entities 
export const weirdAIEntities = [
    'BurrowDemejako',
    'BurrowDemejakoClose',
    'Perch',
    'MarigumoNet',
    'Burrow',
    'CaptureThrowPoint',
    'MiniMochi',
    'PanModokiHideArea',
    'CaptureThrowPoint',
    'CapturePoint',
    'RestPoint_LivingRoom',
    'RestPoint_Kitchen',
    'JumpPoint_LivingRoom',
    'JumpPoint_Kitchen',
    'TargetPoint_Kitchen',
    'TargetPoint_LivingRoom',
    'DemoWarpPoint',
    'PerchTakeOff'
];