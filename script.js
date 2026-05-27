const assets = {
  backgrounds: {
    intro: blackImage(),
    cloudBridge: "assets/backgrounds/Lumin-Harbor.png",
    candella: "assets/backgrounds/Candella-Day.png",
    trainPlatform: "assets/backgrounds/Hearthwake.png",
    verdantRail: "assets/backgrounds/Verdant-Trail.png",
    nightField: "assets/backgrounds/Candella-Night.png",
    glasshollow: "assets/backgrounds/Glass-Hollow.png",
    rainRooftop: "assets/backgrounds/Rain-Market.png",
    rainMarket: "assets/backgrounds/Rain-Market.png",
    observatoryStairs: "assets/backgrounds/Observatory.png",
    observatory: "assets/backgrounds/Observatory.png",
    finalGate: "assets/backgrounds/Final-Gate.png",
    black: blackImage()
  },
  sprites: {
    frog: "assets/sprites/frog-smile.png",
    frogThink: "assets/sprites/frog-think-.png",
    frogCry: "assets/sprites/frog-cry.png",
    timeKeeper: "assets/sprites/timekeeper sprite (1)-jukebox-bg-removed.png",
    timeKeeperAlt: "assets/sprites/timekeeper sprite (2)-jukebox-bg-removed.png"
  }
};

const tracks = {
  calm: createAmbientTrack([196, 247, 330], 8),
  warm: createAmbientTrack([220, 277, 349], 8),
  mystery: createAmbientTrack([164, 220, 294], 9),
  final: createAmbientTrack([110, 147, 196], 10)
};

const S = assets.sprites;
const B = assets.backgrounds;

const scenes = [
  dialogueScene("Intro Sequence", B.intro, tracks.mystery, [
    tk("Welcome, travelers."),
    tk("You arrived safely."),
    tk("That alone is becoming increasingly rare."),
    pause(),
    tk("The pathways between timelines have weakened."),
    tk("Worlds once connected now drift apart."),
    tk("Entire histories separate from one another."),
    tk("Places vanish."),
    tk("Memories distort."),
    tk("Eventually..."),
    tk("Nothing remains connected at all."),
    note("Frog appears"),
    frog("Okay."),
    frog("I know this is probably a weird thing to focus on right now...", "think"),
    frog("But did we seriously just walk through the sky?", "think"),
    tk("Something similar to it."),
    frog("Great."),
    frog("Very normal start."),
    tk("You do not need to understand everything immediately."),
    tk("Only continue forward."),
    tk("The worlds can still be restored."),
    tk("But not for much longer."),
    frog("So what exactly are we supposed to do?", "think"),
    tk("Repair fractured timelines."),
    tk("Reconnect what has drifted apart."),
    tk("Restore alignment."),
    frog("You say that word like it explains everything.", "think"),
    tk("Eventually it will."),
    frog("I still don't even know who I am.", "think"),
    frog("Or where I came from.", "think"),
    frog("Or why I woke up in... wherever this is.", "think"),
    tk("Your memory was affected during transit."),
    frog("Convenient.", "think"),
    tk("Not intentionally."),
    frog("Right.", "think"),
    tk("Your first destination awaits."),
    tk("Candella."),
    tk("A world built around celebration."),
    tk("Its harmony has begun to fail."),
    tk("Please restore it."),
    frog("You know, somehow I expected the end of reality to look less colorful.")
  ]),

  dialogueScene("Cloud Bridge", B.cloudBridge, tracks.calm, [
    frog("Hey."),
    frog("Can I admit something weird?", "think"),
    pause(),
    frog("I know we've only been traveling together for a little while...", "think"),
    frog("But it already feels longer somehow.", "think"),
    frog("Not in a bad way."),
    frog("Just..."),
    frog("Familiar.", "think"),
    pause(),
    frog("I keep trying to remember where I came from.", "think"),
    frog("Every time I get close, it feels like the memory slips away again.", "think"),
    frog("Like trying to remember a dream after waking up.", "think"),
    pause(),
    frog("But weirdly?"),
    frog("I don't feel alone anymore."),
    frog("So thanks for that.")
  ]),

  dialogueScene("Candella Arrival", B.candella, tracks.warm, [
    frog("..."),
    frog("Okay."),
    frog("This place is incredible."),
    frog("I think younger me would've actually cried seeing this."),
    frog("Assuming I had a younger me.", "think"),
    tk("Candella once held a celebration every seventh cycle."),
    tk("The Harmony Parade united the entire city."),
    tk("Music, movement, procession."),
    tk("A shared sequence."),
    tk("Now its order has drifted."),
    tk("Please restore the parade route."),
    frog("Wait.", "think"),
    frog("That's it?", "think"),
    frog("No monsters?", "think"),
    tk("Not every broken world becomes violent."),
    frog("Honestly that is VERY reassuring."),
    frog("I like this place."),
    frog("It feels..."),
    frog("Safe."),
    pause(),
    frog("I forgot places could feel like that.", "think"),
    frog("Like people here wake up expecting tomorrow to happen.", "think"),
    frog("That sounds stupid when I say it out loud.", "think"),
    tk("No."),
    tk("It does not.")
  ]),
  candellaPuzzleScene(B.candella, tracks.warm),
  dialogueScene("Candella Restored", B.candella, tracks.warm, [
    tk("Harmony restored successfully."),
    tk("Candella has stabilized."),
    frog("Nice."),
    frog("One less collapsing reality."),
    tk("Not collapsing."),
    frog("Hm?", "think"),
    tk("Nothing important."),
    tk("You both performed well.")
  ]),

  dialogueScene("Train Platform", B.trainPlatform, tracks.calm, [
    frog("You ever notice how quiet the spaces between worlds are?", "think"),
    frog("Not empty.", "think"),
    frog("Just..."),
    frog("Still.", "think"),
    pause(),
    frog("I think before all this started, I used to hate silence.", "think"),
    frog("Now I kind of like it."),
    frog("Maybe because it gives me time to think.", "think"),
    pause(),
    frog("Or maybe because when things get quiet enough...", "think"),
    frog("I can almost remember the sky.", "think"),
    frog("That probably sounds stupid.", "think"),
    frog("I don't even know what I mean by that yet.", "think")
  ]),

  dialogueScene("Verdant Rail Arrival", B.verdantRail, tracks.warm, [
    frog("Woah."),
    frog("This place feels huge."),
    frog("Like it just keeps going forever."),
    tk("Verdant Rail once connected every settlement across these valleys."),
    tk("Travel between worlds began here long ago."),
    tk("Now the routes no longer align correctly."),
    tk("Restore the railway signals."),
    frog("You REALLY like the word align.", "think"),
    tk("Because alignment matters."),
    frog("Still mysterious.", "think"),
    frog("Can I ask something?", "think"),
    pause(),
    frog("If you could stay in one timeline forever...", "think"),
    frog("Would you?", "think"),
    tk("No."),
    frog("That was immediate."),
    tk("Nothing should remain isolated forever."),
    frog("I don't know.", "think"),
    frog("Some places feel worth staying in.", "think"),
    tk("That feeling is temporary."),
    frog("That sounded sad.", "think")
  ]),
  verdantPuzzleScene(B.verdantRail, tracks.warm),
  dialogueScene("Verdant Rail Restored", B.verdantRail, tracks.warm, [
    tk("Connection restored."),
    tk("The railways now move correctly."),
    frog("Feels weird.", "think"),
    frog("Like the whole world started breathing again.", "think"),
    frog("I didn't realize places could feel alive until now.")
  ]),

  dialogueScene("Night Field", B.nightField, tracks.calm, [
    frog("Can I ask you something?", "think"),
    pause(),
    frog("Do you think people are supposed to remember everything?", "think"),
    frog("Because I don't think I want to.", "think"),
    pause(),
    frog("Some memories feel heavy before I even fully remember them.", "think"),
    frog("Like they're waiting for me.", "think"),
    pause(),
    frog("Still..."),
    frog("I think I'd rather know the truth than stay confused forever.", "think"),
    frog("Even if it hurts.", "cry"),
    pause(),
    frog("You know what's strange?", "think"),
    frog("The more worlds we visit...", "think"),
    frog("The more the sky starts feeling important.", "think"),
    frog("Like I forgot something obvious.", "think")
  ]),

  dialogueScene("Glasshollow Arrival", B.glasshollow, tracks.mystery, [
    frog("Okay."),
    frog("This place definitely feels magical."),
    frog("And maybe slightly haunted.", "think"),
    tk("It is not haunted."),
    frog("You hesitated.", "think"),
    tk("Glasshollow preserves reflections."),
    tk("Fragments of memory often remain here longer than elsewhere."),
    tk("Some people came here specifically to remember."),
    frog("That sounds dangerous.", "think"),
    tk("Sometimes it was."),
    frog("..."),
    frog("Wait.", "think"),
    frog("I think I've seen you before.", "think"),
    tk("Who?"),
    frog("You.", "think"),
    frog("Or someone that felt like you.", "think"),
    tk("Memory echoes are common here."),
    frog("No.", "think"),
    frog("That's not what this feels like.", "think"),
    pause(),
    frog("Nevermind.", "think")
  ]),
  glassPuzzleScene(B.glasshollow, tracks.mystery),
  dialogueScene("Glasshollow Restored", B.glasshollow, tracks.mystery, [
    tk("Reflection beacons restored."),
    tk("Glasshollow has stabilized."),
    frog("Do you ever feel like memories exist somewhere before we remember them?", "think"),
    tk("Sometimes."),
    frog("That sounded weirdly personal.", "think"),
    tk("Perhaps it was.")
  ]),

  dialogueScene("Rain Market Rooftop", B.rainRooftop, tracks.calm, [
    frog("I used to think adventure meant something exciting.", "think"),
    frog("Saving worlds."),
    frog("Big discoveries."),
    frog("Cool dramatic speeches."),
    pause(),
    frog("But honestly?"),
    frog("I think the best parts are the quiet ones."),
    pause(),
    frog("Walking through cities."),
    frog("Hearing rain hit windows."),
    frog("Watching lights turn on at night."),
    pause(),
    frog("Normal stuff.", "think"),
    pause(),
    frog("I think I miss normal things.", "cry"),
    frog("Even if I can't remember them properly.", "cry")
  ]),

  dialogueScene("Rain Market Arrival", B.rainMarket, tracks.warm, [
    frog("I love this place already."),
    frog("Rain at night always makes cities feel calmer."),
    frog("Like the whole world slows down for a little while."),
    tk("The lantern pathways have become disconnected."),
    tk("Restore the market circuit."),
    frog("Do you ever stop talking like an ancient prophecy?", "think"),
    tk("Occasionally."),
    frog("Good."),
    frog("Can I admit something embarrassing?", "think"),
    frog("I think I would've liked living somewhere normal.", "think"),
    frog("Some little rainy town.", "think"),
    frog("Same streets every day.", "think"),
    frog("Same people.", "think"),
    frog("Nothing important happening.", "think"),
    tk("There is value in ordinary lives."),
    frog("You say that like you've seen a lot of them.", "think"),
    tk("I have.")
  ]),
  rainPuzzleScene(B.rainMarket, tracks.warm),
  dialogueScene("Rain Market Restored", B.rainMarket, tracks.warm, [
    tk("Circuit restored."),
    tk("The market is stable once more."),
    frog("You know what I like most about this place?"),
    tk("What?"),
    frog("Nobody here seems afraid of tomorrow."),
    pause(),
    tk("Yes."),
    tk("That is rare.")
  ]),

  dialogueScene("Observatory Stairs", B.observatoryStairs, tracks.calm, [
    frog("Do you ever feel like something is waiting for you?", "think"),
    pause(),
    frog("Not in a scary way.", "think"),
    frog("More like..."),
    frog("Like you've been walking toward something your whole life without realizing it.", "think"),
    pause(),
    frog("That's what this place feels like.", "think"),
    pause(),
    frog("The weird thing is...", "think"),
    frog("I don't think I'm supposed to be here.", "think"),
    frog("But I also think I was always going to end up here anyway.", "think")
  ]),

  dialogueScene("The Observatory Arrival", B.observatory, tracks.mystery, [
    frog("..."),
    frog("This place feels different.", "think"),
    frog("Quieter.", "think"),
    tk("The Observatory monitored celestial alignment across connected timelines."),
    tk("Restore the telescope."),
    frog("Do you notice something strange?", "think"),
    tk("Many things are strange."),
    frog("No.", "think"),
    frog("I mean the sky.", "think"),
    frog("It feels familiar.", "think"),
    frog("I know this place.", "think"),
    pause(),
    frog("No.", "think"),
    frog("Not this place.", "think"),
    frog("This sky.", "think"),
    frog("I don't know why but...", "think"),
    frog("It feels like I lost something here.", "cry"),
    tk("..."),
    tk("Continue.")
  ]),
  puzzleScene("The Observatory", "Align constellations.", B.observatory, tracks.mystery),
  dialogueScene("The Observatory Restored", B.observatory, tracks.mystery, [
    note("Telescope activates"),
    note("Stars shift"),
    note("Hidden constellation appears"),
    frog("Wait.", "think"),
    frog("Was that always there?", "think"),
    tk("You have done more than I expected."),
    tk("Thank you."),
    tk("Truly."),
    note("Hidden staircase opens"),
    frog("I don't think this was part of the original plan.", "think"),
    tk("No."),
    tk("But perhaps it was always waiting.")
  ]),

  dialogueScene("Final Gate", B.finalGate, tracks.final, [
    frog("..."),
    frog("Woah."),
    frog("This thing is massive."),
    tk("This is the Final Gate."),
    tk("The central restoration mechanism."),
    tk("Its seals prevent complete synchronization."),
    tk("If restored..."),
    tk("All fractured timelines may finally reconnect."),
    frog("So this whole time we've been repairing the paths leading here.", "think"),
    tk("Correct."),
    frog("Then why seal it away?", "think"),
    pause(),
    tk("Fear."),
    frog("Fear of what?", "think"),
    tk("Change."),
    tk("There is only one seal remaining."),
    tk("A physical anchor."),
    tk("A living presence is required to complete synchronization."),
    frog("Meaning... us?", "think"),
    tk("Yes."),
    tk("Only conscious beings can finalize the alignment."),
    frog("This suddenly feels way more important than repairing candy parades.", "think"),
    tk("Every path was necessary."),
    tk("Every restored world brought us closer to this moment."),
    tk("Please."),
    tk("Activate the final seal."),
    note("Frog hesitates"),
    frog("...", "think"),
    frog("I suddenly feel like we shouldn't do this.", "cry"),
    tk("You are afraid because the worlds have remained separated for too long."),
    tk("But this is restoration."),
    tk("This is healing."),
    tk("This is what you came here to do."),
    pause(),
    frog("...", "think"),
    frog("Okay.", "think")
  ]),
  finalGatePuzzleScene(B.finalGate, tracks.final),
  dialogueScene("Alignment Complete", B.finalGate, tracks.final, [
    note("Massive light erupts", "flash"),
    note("Music distorts", "shake"),
    note("Screen shakes violently", "shake"),
    tkReleased("Finally.", "shake"),
    note("FLASH", "flash"),
    note("A strange image cuts through the light.", "corrupt"),
    note("Audio distortion", "corrupt"),
    frog("WAIT-", "cry", "shake"),
    tkReleased("You have completed the alignment.", "corrupt"),
    tkReleased("And now...", "corrupt"),
    tkReleased("I may continue.", "corrupt"),
    note("Screen corruption", "corrupt"),
    note("The sky begins distorting unnaturally.", "corrupt"),
    frog("What did we just do?", "cry", "corrupt"),
    note("Hard cut to black.", "blackout"),
    note("END OF PHASE 1", "blackout")
  ])
];

const state = {
  sceneIndex: 0,
  lineIndex: 0,
  frontBackgroundVisible: false,
  muted: true,
  activeMusic: "",
  spriteSwapId: 0,
  completed: false
};

const candellaState = {
  totalClicks: 0,
  clickHistory: [],
  fragmentClicks: {
    candy_gate: 0,
    confetti_bridge: 0,
    laughter_cart: 0,
    final_arch: 0,
    broken_wagon: 0
  },
  unlockedFinal: false,
  clickOrderIndex: {},
  lastClickedFragment: "",
  completed: false,
  keeperHintLevel: 0,
  notes: []
};

const candellaFragments = {
  candy_gate: {
    label: "Candy Gate",
    stable: true,
    early: "This feels like the beginning of something.",
    mid: "I feel like I've already seen this... but I know I haven't.",
    late: "Why does this feel different now than it did before?",
    revisit: "It changed... didn't it?",
    deep: "No. The candy moved, the lights changed, but the gate still means start.",
    note: "Candy Gate: the decorations drift, but it keeps feeling like a beginning."
  },
  confetti_bridge: {
    label: "Confetti Bridge",
    stable: true,
    early: "The confetti keeps landing in the same pattern.",
    mid: "Wait. The colors moved, but the bridge still feels like itself.",
    late: "This one bends around the change. It doesn't break.",
    revisit: "No... this stayed familiar. Even after everything else shifted.",
    deep: "The pieces scatter differently, but the crossing is always there.",
    note: "Confetti Bridge: surface changes; purpose stays."
  },
  laughter_cart: {
    label: "Laughter Cart",
    stable: false,
    early: "I can hear people laughing from inside it.",
    mid: "Was that laughter before? It sounds like music now.",
    late: "I don't trust this one. It keeps pretending to be cheerful.",
    revisit: "That's not the same sound. I'm sure of it.",
    deep: "The joke changed again. I don't think it remembers what was funny.",
    note: "Laughter Cart: the feeling changes after I look away."
  },
  final_arch: {
    label: "Final Arch",
    stable: true,
    early: "This feels like where everyone is trying to arrive.",
    mid: "The decorations changed, but the path still points forward.",
    late: "This one remembers the parade better than the parade remembers itself.",
    revisit: "It still feels like an ending. Maybe that's why it stayed.",
    deep: "Every route keeps leaning toward it. The arch does not forget its shape.",
    note: "Final Arch: even when details shift, it remains an ending."
  },
  broken_wagon: {
    label: "Broken Music Wagon",
    stable: false,
    early: "The song is broken, but it's trying.",
    mid: "The melody wasn't like that before. Was it?",
    late: "Every time I listen, it chooses a different memory.",
    revisit: "It changed again. I think it wanted me to miss that.",
    deep: "The wagon plays a new song and acts like it was always singing it.",
    note: "Broken Music Wagon: repeats, but not consistently."
  }
};

const verdantState = {
  visited: [],
  attemptPath: [],
  validPathProgress: 0,
  confirmedOnce: false,
  completed: false,
  sectionStates: {
    overview: { unlocked: true },
    anomaly: { unlocked: true },
    stationIndex: { unlocked: false },
    transit: { unlocked: false }
  },
  truthState: {
    keyedByAnomaly: false,
    coherentIndex: false,
    coherentTransit: false
  }
};

const verdantSections = {
  overview: {
    label: "System Overview",
    alias: "overview",
    order: 0
  },
  anomaly: {
    label: "Anomaly Log",
    alias: "anomaly",
    order: 1
  },
  stationIndex: {
    label: "Station Index",
    alias: "index",
    order: 2
  },
  transit: {
    label: "Transit Behavior Report",
    alias: "transit",
    order: 3
  }
};

const glassState = {
  actions: [],
  echoQueue: [],
  corruptionLevel: 0,
  stablePhrases: ["We are in Glasshollow."],
  shardClicks: {
    room: 0,
    safe: 0,
    memory: 0,
    frog: 0
  },
  completed: false,
  timers: []
};

const glassShards = {
  room: {
    normal: "We are in Glasshollow.",
    echo: "We are still in Glasshollow. I think.",
    corrupt: "Glasshollow is remembering us back."
  },
  safe: {
    normal: "This place is safe.",
    echo: "This place was never safe.",
    corrupt: "I don't know what safety means here."
  },
  memory: {
    normal: "This memory belongs to me.",
    echo: "I don't remember saying that.",
    corrupt: "Maybe I'm reacting before it happens."
  },
  frog: {
    normal: "I feel like I've already reacted to this.",
    echo: "No, I reacted later. Didn't I?",
    corrupt: "Frog is not matching Frog."
  }
};

const rainState = {
  items: {
    beginning: { drift: 0, stable: false },
    sound: { drift: 0, stable: false },
    path: { drift: 0, stable: true },
    certainty: { drift: 0, stable: true },
    repetition: { drift: 0, stable: true },
    shelter: { drift: 0, stable: false }
  },
  tradeHistory: [],
  globalDriftLevel: 0,
  completed: false
};

const gateState = {
  locks: {
    candella: null,
    rail: null,
    echo: null,
    memory: null
  },
  contradictionScore: 0,
  alignmentState: "unstable",
  attempts: 0,
  completed: false
};

const rainItems = {
  beginning: ["This feels like something that starts safely.", "This feels like something that pretends to start safely.", "This is not a beginning. It is a cover."],
  sound: ["A tune waits just outside memory.", "The tune has a different owner now.", "The sound remembers you incorrectly."],
  path: ["A path that may not exist, but still asks to be followed.", "The path remains uncertain. That is the only honest part.", "It never becomes certain, and it never stops being a path."],
  certainty: ["A moment of certainty, fragile enough to bruise.", "The certainty remains brief. It refuses to become permanent.", "It is still certainty, but only for a moment."],
  repetition: ["A broken repetition circles without resolving.", "It repeats differently, but it still repeats.", "The loop survives every trade."],
  shelter: ["A dry place under market light.", "The shelter asks what it costs to be kept.", "This was never shelter. It was delay."]
};

const elements = {
  game: document.querySelector(".game"),
  backBackground: document.querySelector(".background-layer--back"),
  frontBackground: document.querySelector(".background-layer--front"),
  sprite: document.querySelector("#sprite"),
  speaker: document.querySelector("#speaker"),
  dialogueText: document.querySelector("#dialogueText"),
  dialogueBox: document.querySelector("#dialogueBox"),
  continueButton: document.querySelector("#continueButton"),
  backButton: document.querySelector("#backButton"),
  puzzlePanel: document.querySelector("#puzzlePanel"),
  puzzleKicker: document.querySelector("#puzzleKicker"),
  puzzleLabel: document.querySelector("#puzzleLabel"),
  completePuzzle: document.querySelector("#completePuzzle"),
  audioToggle: document.querySelector("#audioToggle"),
  stage: document.querySelector(".stage"),
  candellaNode: document.querySelector("#candellaNode"),
  fragmentButtons: document.querySelectorAll(".fragment"),
  stabilityPanel: document.querySelector("#stabilityPanel"),
  stabilitySubmit: document.querySelector(".stability-submit"),
  memoryList: document.querySelector("#memoryList"),
  candellaTimeKeeper: document.querySelector("#candellaTimeKeeper"),
  candellaFrog: document.querySelector("#candellaFrog"),
  verdantNode: document.querySelector("#verdantNode"),
  sectionButtons: document.querySelectorAll(".section-tabs button"),
  archivePage: document.querySelector("#archivePage"),
  verdantStatus: document.querySelector("#verdantStatus"),
  sequenceList: document.querySelector("#sequenceList"),
  routePanel: document.querySelector("#routePanel"),
  routeInput: document.querySelector("#routeInput"),
  glassNode: document.querySelector("#glassNode"),
  glassStatus: document.querySelector("#glassStatus"),
  echoLog: document.querySelector("#echoLog"),
  shardButtons: document.querySelectorAll(".shard"),
  rainNode: document.querySelector("#rainNode"),
  rainStatus: document.querySelector("#rainStatus"),
  stallButtons: document.querySelectorAll(".stall"),
  marketCard: document.querySelector("#marketCard"),
  gateNode: document.querySelector("#gateNode"),
  gateForm: document.querySelector("#gateForm"),
  gateStatus: document.querySelector("#gateStatus")
};

const music = new Audio();
music.loop = true;
music.volume = 0.34;

let audioContext;

function dialogueScene(title, background, musicTrack, dialogue) {
  return { type: "dialogue", title, background, music: musicTrack, dialogue };
}

function puzzleScene(title, prompt, background, musicTrack) {
  return { type: "puzzle", title, prompt, background, music: musicTrack };
}

function candellaPuzzleScene(background, musicTrack) {
  return { type: "candellaPuzzle", title: "Candella", background, music: musicTrack };
}

function verdantPuzzleScene(background, musicTrack) {
  return { type: "verdantPuzzle", title: "Verdant Rail", background, music: musicTrack };
}

function glassPuzzleScene(background, musicTrack) {
  return { type: "glassPuzzle", title: "Glasshollow", background, music: musicTrack };
}

function rainPuzzleScene(background, musicTrack) {
  return { type: "rainPuzzle", title: "Rain Market", background, music: musicTrack };
}

function finalGatePuzzleScene(background, musicTrack) {
  return { type: "finalGatePuzzle", title: "Final Gate", background, music: musicTrack };
}

function tk(text, effect) {
  return {
    speaker: "Time Keeper",
    sprite: S.timeKeeper,
    position: "right",
    text,
    effect
  };
}

function tkReleased(text, effect) {
  return {
    speaker: "Time Keeper",
    sprite: S.timeKeeperAlt,
    position: "right",
    text,
    effect
  };
}

function frog(text, mood = "auto", effect) {
  const resolvedMood = mood === "auto" ? frogMoodFor(text) : mood;
  const sprite = resolvedMood === "cry" ? S.frogCry : resolvedMood === "think" ? S.frogThink : S.frog;

  return {
    speaker: "Frog",
    sprite,
    position: "left",
    text,
    effect
  };
}

function frogMoodFor(text) {
  const line = text.toLowerCase();

  if (
    line.includes("alone") ||
    line.includes("afraid") ||
    line.includes("confused") ||
    line.includes("don't think i want") ||
    line.includes("hurts") ||
    line.includes("lost something") ||
    line.includes("miss normal") ||
    line.includes("shouldn't do this") ||
    line.includes("what did we just do") ||
    line.includes("wait-")
  ) {
    return "cry";
  }

  if (
    text.includes("?") ||
    text.includes("...") ||
    line.includes("weird") ||
    line.includes("remember") ||
    line.includes("familiar") ||
    line.includes("mysterious") ||
    line.includes("strange") ||
    line.includes("supposed") ||
    line.includes("probably") ||
    line.includes("maybe") ||
    line.includes("feels") ||
    line.includes("i don't know") ||
    line.includes("i think")
  ) {
    return "think";
  }

  return "smile";
}

function note(text, effect) {
  return {
    speaker: "Event",
    sprite: "",
    position: "center",
    text,
    effect,
    narration: true
  };
}

function pause() {
  return note("...");
}

function blackImage() {
  return "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect width='16' height='9' fill='%23000000'/%3E%3C/svg%3E";
}

function createAmbientTrack(frequencies, seconds) {
  const sampleRate = 8000;
  const sampleCount = sampleRate * seconds;
  const bytesPerSample = 2;
  const buffer = new ArrayBuffer(44 + sampleCount * bytesPerSample);
  const view = new DataView(buffer);

  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + sampleCount * bytesPerSample, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * bytesPerSample, true);
  view.setUint16(32, bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, sampleCount * bytesPerSample, true);

  for (let i = 0; i < sampleCount; i += 1) {
    const time = i / sampleRate;
    const fadeIn = Math.min(1, time / 1.6);
    const fadeOut = Math.min(1, (seconds - time) / 1.6);
    const envelope = Math.min(fadeIn, fadeOut) * 0.15;
    const wave = frequencies.reduce((sum, frequency, noteIndex) => {
      const drift = Math.sin(time * 0.28 + noteIndex) * 0.9;
      return sum + Math.sin(2 * Math.PI * (frequency + drift) * time) / (noteIndex + 2);
    }, 0);

    view.setInt16(44 + i * bytesPerSample, wave * envelope * 32767, true);
  }

  return URL.createObjectURL(new Blob([view], { type: "audio/wav" }));
}

function writeString(view, offset, value) {
  for (let i = 0; i < value.length; i += 1) {
    view.setUint8(offset + i, value.charCodeAt(i));
  }
}

function currentScene() {
  return scenes[state.sceneIndex];
}

function setBackground(source) {
  const visibleLayer = state.frontBackgroundVisible ? elements.frontBackground : elements.backBackground;
  const hiddenLayer = state.frontBackgroundVisible ? elements.backBackground : elements.frontBackground;

  if (visibleLayer.style.backgroundImage === `url("${source}")`) return;

  hiddenLayer.style.backgroundImage = `url("${source}")`;
  hiddenLayer.classList.add("is-visible");
  visibleLayer.classList.remove("is-visible");
  state.frontBackgroundVisible = !state.frontBackgroundVisible;
}

function setMusic(track) {
  if (!track || state.activeMusic === track) return;

  state.activeMusic = track;
  music.src = track;

  if (!state.muted) {
    music.play().catch(() => {
      state.muted = true;
      updateAudioButton();
    });
  }
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playVoice(line) {
  if (state.muted || line.narration || !line.text || !audioContext) return;

  const now = audioContext.currentTime;
  const isTimeKeeper = line.speaker === "Time Keeper";
  const baseFrequency = isTimeKeeper ? 132 : 330;
  const noteCount = Math.min(10, Math.max(3, Math.ceil(line.text.length / 18)));

  for (let i = 0; i < noteCount; i += 1) {
    const start = now + i * 0.045;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const step = isTimeKeeper ? (i % 3) * 18 : (i % 4) * 34;

    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(baseFrequency + step, start);
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(isTimeKeeper ? 0.035 : 0.028, start + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.038);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.042);
  }
}

function playFragmentTone(fragmentId) {
  if (state.muted || !audioContext) return;

  const tones = {
    candy_gate: 523,
    confetti_bridge: 659,
    laughter_cart: 587,
    final_arch: 784,
    broken_wagon: 220,
    overview: 196,
    anomaly: 247,
    stationIndex: 294,
    transit: 392,
    room: 330,
    safe: 277,
    memory: 247,
    frog: 220,
    beginning: 523,
    sound: 587,
    path: 392,
    certainty: 659,
    repetition: 330,
    shelter: 440
  };
  const now = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(tones[fragmentId] || 440, now);
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.linearRampToValueAtTime(0.045, now + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.24);
}

function updateAudioButton() {
  elements.audioToggle.textContent = state.muted ? "Sound Off" : "Sound On";
  elements.audioToggle.setAttribute("aria-pressed", String(!state.muted));
}

function clearEffects() {
  elements.game.classList.remove("is-shaking", "is-corrupt", "is-flashing", "is-blackout");
}

function applyEffect(effect) {
  clearEffects();

  if (!effect) return;

  if (effect === "shake") elements.game.classList.add("is-shaking");
  if (effect === "corrupt") elements.game.classList.add("is-corrupt");
  if (effect === "flash") elements.game.classList.add("is-flashing");
  if (effect === "blackout") {
    elements.game.classList.add("is-blackout");
    setBackground(B.black);
  }
}

function showDialogueLine() {
  const scene = currentScene();
  const line = scene.dialogue[state.lineIndex];

  hideCandellaPuzzle();
  hideVerdantPuzzle();
  hideGlassPuzzle();
  hideRainPuzzle();
  hideFinalGatePuzzle();
  elements.puzzlePanel.classList.add("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.remove("is-hidden");
  elements.speaker.textContent = line.narration ? scene.title : line.speaker;
  elements.dialogueText.textContent = line.text;
  elements.stage.dataset.position = line.position || "center";
  elements.stage.dataset.speaker = line.speaker || "Event";
  applyEffect(line.effect);
  playVoice(line);

  showSprite(line);
}

function showSprite(line) {
  if (line.sprite && elements.sprite.getAttribute("src") === line.sprite) {
    elements.sprite.alt = line.speaker || "";
    elements.sprite.classList.remove("is-preparing");
    elements.sprite.classList.add("is-visible");
    return;
  }

  state.spriteSwapId += 1;
  const swapId = state.spriteSwapId;
  elements.sprite.classList.add("is-preparing");
  elements.sprite.classList.remove("is-visible");

  if (!line.sprite) {
    elements.sprite.removeAttribute("src");
    elements.sprite.alt = "";
    elements.sprite.classList.remove("is-preparing");
    return;
  }

  const nextSprite = new Image();
  nextSprite.onload = () => {
    if (swapId !== state.spriteSwapId) return;

    elements.sprite.src = line.sprite;
    elements.sprite.alt = line.speaker || "";

    requestAnimationFrame(() => {
      elements.sprite.offsetWidth;
      elements.sprite.classList.remove("is-preparing");
      elements.sprite.classList.add("is-visible");
    });
  };

  nextSprite.src = line.sprite;

  if (nextSprite.complete) {
    nextSprite.onload();
  }
}

function prepareAudioForInteraction() {
  if (state.muted) return;
  ensureAudioContext();
}

function handleAdvanceInput() {
  prepareAudioForInteraction();

  if (currentScene().type === "puzzle") {
    if (state.completed) {
      advanceDialogue();
    }
  } else {
    advanceDialogue();
  }
}

function handleBackInput() {
  prepareAudioForInteraction();

  if (["puzzle", "candellaPuzzle", "verdantPuzzle", "glassPuzzle", "rainPuzzle", "finalGatePuzzle"].includes(currentScene().type)) {
    goToPreviousSceneEnd();
    return;
  }

  if (state.lineIndex > 0) {
    state.lineIndex -= 1;
    showDialogueLine();
    return;
  }

  goToPreviousSceneEnd();
}

function goToPreviousSceneEnd() {
  if (state.sceneIndex <= 0) return;

  state.sceneIndex -= 1;
  const scene = currentScene();

  clearEffects();
  setBackground(scene.background);
  setMusic(scene.music);

  if (scene.type === "puzzle") {
    showPuzzleScene();
    return;
  }

  if (scene.type === "candellaPuzzle") {
    showCandellaPuzzle();
    return;
  }

  if (scene.type === "verdantPuzzle") {
    showVerdantPuzzle();
    return;
  }

  if (scene.type === "glassPuzzle") {
    showGlassPuzzle();
    return;
  }

  if (scene.type === "rainPuzzle") {
    showRainPuzzle();
    return;
  }

  if (scene.type === "finalGatePuzzle") {
    showFinalGatePuzzle();
    return;
  }

  state.lineIndex = scene.dialogue.length - 1;
  showDialogueLine();
}

function revealCurrentVoiceAfterUnmute() {
  const scene = currentScene();

  if (scene.type !== "dialogue") return;

  playVoice(scene.dialogue[state.lineIndex]);
}

function showInitialSpriteIfCached() {
  if (elements.sprite.complete && elements.sprite.src) {
    elements.sprite.classList.add("is-visible");
  }
}

function showCandellaPuzzle() {
  elements.puzzlePanel.classList.add("is-hidden");
  elements.stage.classList.add("is-hidden");
  elements.candellaNode.classList.remove("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.add("is-hidden");
  elements.stabilityPanel.classList.toggle("is-hidden", !candellaState.unlockedFinal || candellaState.completed);
  elements.game.classList.add("is-candella");
  elements.candellaFrog.src = S.frog;
  elements.candellaTimeKeeper.src = S.timeKeeper;
  renderMemoryNotes();

  if (candellaState.completed) {
    elements.continueButton.classList.remove("is-hidden");
    setCandellaDialogue("Frog", "Candella feels steadier now. Not fixed exactly... steadier.");
    return;
  }

  setCandellaDialogue("Time Keeper", timeKeeperCandellaHint());
  maybeUnlockStabilitySelection();
}

function hideCandellaPuzzle() {
  elements.candellaNode.classList.add("is-hidden");
  elements.candellaTimeKeeper.classList.remove("is-visible");
  elements.stage.classList.remove("is-hidden");
  elements.game.classList.remove("is-candella");
}

function showVerdantPuzzle() {
  elements.puzzlePanel.classList.add("is-hidden");
  elements.stage.classList.remove("is-hidden");
  elements.verdantNode.classList.remove("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.toggle("is-hidden", !verdantState.completed);
  elements.game.classList.add("is-verdant");
  elements.stage.dataset.position = "left";
  elements.stage.dataset.speaker = "Frog";
  showSprite({
    speaker: "Frog",
    sprite: S.frogThink,
    position: "left"
  });
  renderVerdantInterface();

  if (verdantState.completed) {
    setDialogueText("Frog", "The route finally reads like one railway instead of four different memories.");
    return;
  }

  setDialogueText("Time Keeper", verdantKeeperHint());
}

function hideVerdantPuzzle() {
  elements.verdantNode.classList.add("is-hidden");
  elements.game.classList.remove("is-verdant");
}

function showGlassPuzzle() {
  elements.puzzlePanel.classList.add("is-hidden");
  elements.stage.classList.remove("is-hidden");
  elements.glassNode.classList.remove("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.toggle("is-hidden", !glassState.completed);
  elements.game.classList.add("is-glass");
  showSprite({ speaker: "Frog", sprite: S.frogThink, position: "left" });
  renderGlassLog();
  setDialogueText("Time Keeper", glassKeeperLine());
}

function hideGlassPuzzle() {
  elements.glassNode.classList.add("is-hidden");
  elements.game.classList.remove("is-glass");
}

function showRainPuzzle() {
  elements.puzzlePanel.classList.add("is-hidden");
  elements.stage.classList.remove("is-hidden");
  elements.rainNode.classList.remove("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.toggle("is-hidden", !rainState.completed);
  elements.game.classList.add("is-rain");
  showSprite({ speaker: "Frog", sprite: S.frogThink, position: "left" });
  renderRainMarket();
  setDialogueText("Time Keeper", rainKeeperLine());
}

function hideRainPuzzle() {
  elements.rainNode.classList.add("is-hidden");
  elements.game.classList.remove("is-rain");
}

function showFinalGatePuzzle() {
  elements.puzzlePanel.classList.add("is-hidden");
  elements.stage.classList.remove("is-hidden");
  elements.gateNode.classList.remove("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.toggle("is-hidden", !gateState.completed);
  elements.game.classList.add("is-gate");
  showSprite({ speaker: "Frog", sprite: S.frogCry, position: "left" });
  renderGateStatus();
  setDialogueText("Time Keeper", gateKeeperLine());
}

function hideFinalGatePuzzle() {
  elements.gateNode.classList.add("is-hidden");
  elements.game.classList.remove("is-gate");
}

function setDialogueText(speaker, text) {
  elements.speaker.textContent = speaker;
  elements.dialogueText.textContent = text;
  playVoice({ speaker, text, narration: false });
}

function setCandellaDialogue(speaker, text) {
  elements.speaker.textContent = speaker;
  elements.dialogueText.textContent = text;
  elements.candellaTimeKeeper.classList.toggle("is-visible", speaker === "Time Keeper");

  playVoice({
    speaker,
    text,
    narration: false
  });
}

function handleFragmentClick(fragmentId) {
  if (candellaState.completed) return;

  const firstVisit = candellaState.fragmentClicks[fragmentId] === 0;
  const clickedAgainImmediately = candellaState.lastClickedFragment === fragmentId;

  prepareAudioForInteraction();
  playFragmentTone(fragmentId);
  candellaState.totalClicks += 1;
  candellaState.fragmentClicks[fragmentId] += 1;
  candellaState.clickHistory.push(fragmentId);
  candellaState.lastClickedFragment = fragmentId;

  if (firstVisit) {
    candellaState.clickOrderIndex[fragmentId] = Object.keys(candellaState.clickOrderIndex).length;
  }

  elements.fragmentButtons.forEach((button) => {
    if (button.dataset.fragment === fragmentId) {
      button.classList.add("has-shifted");
    }
  });

  setCandellaDialogue("Frog", candellaFragmentDialogue(fragmentId, firstVisit, clickedAgainImmediately));
  maybeAddMemoryNote(fragmentId);
  renderMemoryNotes();
  maybeUnlockStabilitySelection();
  maybeShowTimeKeeperHint();
}

function candellaFragmentDialogue(fragmentId, firstVisit, clickedAgainImmediately) {
  const fragment = candellaFragments[fragmentId];
  const seenCount = Object.values(candellaState.fragmentClicks).filter((count) => count > 0).length;

  if (clickedAgainImmediately && candellaState.totalClicks > 1) return "I looked twice and it still didn't feel like the same moment.";
  if (candellaState.fragmentClicks[fragmentId] >= 3) return fragment.deep;
  if (!firstVisit && candellaState.totalClicks > 2) return fragment.revisit;
  if (candellaState.totalClicks <= 2) return fragment.early;
  if (seenCount < 4) return fragment.mid;
  return fragment.late;
}

function maybeAddMemoryNote(fragmentId) {
  const fragment = candellaFragments[fragmentId];

  if (candellaState.fragmentClicks[fragmentId] < 2) return;
  if (candellaState.notes.includes(fragment.note)) return;

  candellaState.notes.push(fragment.note);
}

function renderMemoryNotes() {
  elements.memoryList.innerHTML = "";

  if (candellaState.notes.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Watch what still means the same thing after it changes.";
    elements.memoryList.append(item);
    return;
  }

  candellaState.notes.slice(-5).forEach((noteText) => {
    const item = document.createElement("li");
    item.textContent = noteText;
    elements.memoryList.append(item);
  });
}

function maybeShowTimeKeeperHint() {
  const hintLevel = candellaState.totalClicks >= 10 ? 3 : candellaState.totalClicks >= 5 ? 2 : candellaState.totalClicks >= 1 ? 1 : 0;

  if (hintLevel <= candellaState.keeperHintLevel) return;

  candellaState.keeperHintLevel = hintLevel;
  window.setTimeout(() => {
    if (currentScene().type !== "candellaPuzzle" || candellaState.completed) return;
    setCandellaDialogue("Time Keeper", timeKeeperCandellaHint());
  }, 1100);
}

function timeKeeperCandellaHint() {
  if (candellaState.totalClicks >= 10) return "...do not rely on fixed interpretation.";
  if (candellaState.totalClicks >= 5) return "Maintain alignment consistency.";
  return "Restore the parade fragments.";
}

function maybeUnlockStabilitySelection() {
  const allRevisited = Object.values(candellaState.fragmentClicks).every((count) => count >= 2);
  const enoughInstability = candellaState.totalClicks >= 15;

  if (!allRevisited || !enoughInstability || candellaState.unlockedFinal) return;

  candellaState.unlockedFinal = true;
  elements.stabilityPanel.classList.remove("is-hidden");
  window.setTimeout(() => {
    if (currentScene().type === "candellaPuzzle" && !candellaState.completed) {
      setCandellaDialogue("Frog", "The parade isn't asking where things go. It's asking what stayed itself.");
    }
  }, 700);
}

function handleStabilitySubmit(event) {
  event.preventDefault();

  const selected = Array.from(elements.stabilityPanel.querySelectorAll("input:checked")).map((input) => input.value);

  if (selected.length !== 3) {
    setCandellaDialogue("Frog", "It feels like three of them are holding still. Exactly three.");
    return;
  }

  const underObserved = selected.some((fragmentId) => candellaState.fragmentClicks[fragmentId] < 3);

  if (underObserved) {
    setCandellaDialogue("Frog", "I don't think I've watched those long enough yet. One more look might matter.");
    return;
  }

  const stableSelections = selected.filter((fragmentId) => candellaFragments[fragmentId].stable).length;

  if (stableSelections === 3) {
    candellaState.completed = true;
    elements.stabilityPanel.classList.add("is-hidden");
    elements.continueButton.classList.remove("is-hidden");
    setCandellaDialogue("Frog", "...so it wasn't about order.");
    window.setTimeout(() => {
      if (currentScene().type === "candellaPuzzle") {
        setCandellaDialogue("Frog", "It was about what survives the change.");
      }
    }, 1300);
    return;
  }

  if (stableSelections >= 2) {
    setCandellaDialogue("Frog", "I think you're seeing part of it... but not all of it stays the same.");
    return;
  }

  setCandellaDialogue("Frog", "Something changes when I look away. Did you notice that?");
}

function handleSectionClick(sectionId) {
  if (verdantState.completed || !verdantState.sectionStates[sectionId].unlocked) {
    setDialogueText("Frog", "That section isn't ready. It feels like the rails haven't reached it yet.");
    return;
  }

  prepareAudioForInteraction();
  playFragmentTone(sectionId);
  verdantState.visited.push(sectionId);
  verdantState.attemptPath.push(sectionId);
  updateVerdantLocks(sectionId);
  updateVerdantProgress(sectionId);
  renderVerdantInterface(sectionId);
  setDialogueText("Frog", verdantFrogLine(sectionId));
}

function updateVerdantLocks(sectionId) {
  if (sectionId === "overview") {
    verdantState.sectionStates.anomaly.unlocked = true;
  }

  if (sectionId === "anomaly" && verdantState.visited.includes("overview")) {
    verdantState.truthState.keyedByAnomaly = true;
    verdantState.sectionStates.stationIndex.unlocked = true;
  }

  if (sectionId === "stationIndex" && verdantState.truthState.keyedByAnomaly) {
    verdantState.truthState.coherentIndex = true;
    verdantState.sectionStates.transit.unlocked = true;
  }

  if (sectionId === "transit" && verdantState.truthState.coherentIndex) {
    verdantState.truthState.coherentTransit = true;
    elements.routePanel.classList.remove("is-hidden");
  }
}

function updateVerdantProgress(sectionId) {
  const expected = ["overview", "anomaly", "stationIndex", "transit"][verdantState.validPathProgress];

  if (sectionId === expected) {
    verdantState.validPathProgress += 1;
    if (verdantState.confirmedOnce && verdantState.validPathProgress === 4) {
      verdantState.completed = true;
      elements.routePanel.classList.add("is-hidden");
      elements.continueButton.classList.remove("is-hidden");
      setDialogueText("Frog", "So the answer wasn't inside the document. It was the way through it.");
    }
    return;
  }

  verdantState.validPathProgress = sectionId === "overview" ? 1 : 0;
}

function renderVerdantInterface(activeSection = "") {
  elements.sectionButtons.forEach((button) => {
    const sectionId = button.dataset.section;
    button.classList.toggle("is-locked", !verdantState.sectionStates[sectionId].unlocked);
    button.classList.toggle("is-active", sectionId === activeSection);
  });

  elements.verdantStatus.textContent = verdantStatusText();
  renderSequenceNotes();

  if (activeSection) {
    renderArchivePage(activeSection);
  }
}

function renderArchivePage(sectionId) {
  const content = verdantSectionContent(sectionId);

  elements.archivePage.innerHTML = "";

  const title = document.createElement("p");
  title.className = "archive-title";
  title.textContent = content.title;

  const body = document.createElement("p");
  body.className = "archive-body";
  body.textContent = content.body;

  elements.archivePage.append(title, body);
}

function verdantSectionContent(sectionId) {
  const firstRead = verdantState.visited.filter((visitedId) => visitedId === sectionId).length === 1;
  const path = verdantState.attemptPath.join(">");
  const onValidPath = path.endsWith("overview>anomaly>stationIndex>transit") || verdantState.validPathProgress > verdantSections[sectionId].order;

  if (sectionId === "overview") {
    return {
      title: "System Overview",
      body: firstRead
        ? "Verdant Rail connects every valley settlement through one living route. Begin with system shape before trusting local station records."
        : "Overview revision: the rail cannot be understood from destinations alone. Anomalies define which stations are real."
    };
  }

  if (sectionId === "anomaly") {
    return {
      title: "Anomaly Log",
      body: verdantState.visited[0] === "overview"
        ? "Anomaly seed accepted. The document now recognizes ROOT, GLASS, RAIN, and STAR as a coherent chain. Station records may stabilize."
        : "Anomaly log opened without context. All station names remain plausible. The archive will not say which ones breathe."
    };
  }

  if (sectionId === "stationIndex") {
    return {
      title: "Station Index",
      body: verdantState.truthState.keyedByAnomaly
        ? "Stabilized index: ROOT -> GLASS -> RAIN -> STAR. Harbor appears in every copy, but does not belong to this route."
        : "Station index: ROOT, HARBOR, GLASS, RAIN, STAR. All entries report consistent service. This consistency is not proof."
    };
  }

  return {
    title: "Transit Behavior Report",
    body: onValidPath && verdantState.truthState.coherentIndex
      ? "Transit resolves only when read after the stabilized index. Valid movement follows ROOT, then GLASS, then RAIN, then STAR."
      : "Transit report: trains arrive before departure and depart after arrival. Harbor remains consistent. The report appears stable, but the route does not."
  };
}

function renderSequenceNotes() {
  elements.sequenceList.innerHTML = "";

  const notes = verdantSequenceNotes();

  notes.forEach((note) => {
    const item = document.createElement("li");
    item.textContent = note;
    elements.sequenceList.append(item);
  });
}

function verdantSequenceNotes() {
  if (verdantState.visited.length === 0) return ["The archive has not been read yet."];

  const notes = [];

  if (verdantState.visited[0] === "overview") notes.push("Starting with the overview made later sections less slippery.");
  if (verdantState.visited.includes("anomaly")) notes.push("The anomaly log behaves like a key, not a report.");
  if (verdantState.truthState.coherentIndex) notes.push("The station index only settled after the anomaly log.");
  if (verdantState.truthState.coherentTransit) notes.push("Transit finally made sense after the stations stabilized.");
  if (verdantState.validPathProgress === 0 && verdantState.visited.length > 1) notes.push("This reading path bent the document out of shape.");

  return notes.slice(-4);
}

function verdantStatusText() {
  if (verdantState.completed) return "Document state: synchronized";
  if (verdantState.truthState.coherentTransit) return "Document state: route phrase generated";
  if (verdantState.truthState.coherentIndex) return "Document state: station index stabilized";
  if (verdantState.truthState.keyedByAnomaly) return "Document state: anomaly key accepted";
  return "Document state: unresolved";
}

function verdantFrogLine(sectionId) {
  if (verdantState.validPathProgress === 4) return "I think the document finally read itself in one direction.";
  if (sectionId === "overview") return "Every time I read this differently, it feels like a different place.";
  if (sectionId === "anomaly") return "Is the document changing... or are we reading it wrong?";
  if (sectionId === "stationIndex") return "Some of these stations feel real only after the anomaly log.";
  return "The route only makes sense if the earlier pages prepared it.";
}

function verdantKeeperHint() {
  if (verdantState.visited.length >= 8) return "Order determines stability.";
  if (verdantState.visited.length >= 4) return "Do not skip sections.";
  return "Consult the archive.";
}

function handleRouteSubmit(event) {
  event.preventDefault();

  const submitted = elements.routeInput.value
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean)
    .map((word) => (word === "index" || word === "station" || word === "stations" ? "stationIndex" : word))
    .map((word) => (word === "behavior" || word === "report" ? "transit" : word));
  const compact = submitted.filter((word, index) => index === 0 || word !== submitted[index - 1]);
  const expected = ["overview", "anomaly", "stationIndex", "transit"];
  const valid = expected.every((sectionId, index) => compact[index] === sectionId);

  if (!valid) {
    setDialogueText("Frog", "No... that order makes the same words, but not the same truth.");
    return;
  }

  if (!verdantState.confirmedOnce) {
    verdantState.confirmedOnce = true;
    resetVerdantForConfirmationPass();
    elements.routeInput.value = "";
    elements.routePanel.classList.add("is-hidden");
    setDialogueText("Frog", "I think that's the path. But the archive wants us to prove it by reading it that way again.");
    return;
  }

  if (verdantState.validPathProgress < 4) {
    setDialogueText("Frog", "The order sounds right, but we haven't generated it cleanly this time.");
    return;
  }

  verdantState.completed = true;
  elements.routePanel.classList.add("is-hidden");
  elements.continueButton.classList.remove("is-hidden");
  setDialogueText("Frog", "So the answer wasn't inside the document. It was the way through it.");
}

function resetVerdantForConfirmationPass() {
  verdantState.attemptPath = [];
  verdantState.validPathProgress = 0;
  verdantState.truthState.keyedByAnomaly = false;
  verdantState.truthState.coherentIndex = false;
  verdantState.truthState.coherentTransit = false;
  verdantState.sectionStates.overview.unlocked = true;
  verdantState.sectionStates.anomaly.unlocked = true;
  verdantState.sectionStates.stationIndex.unlocked = false;
  verdantState.sectionStates.transit.unlocked = false;
  renderVerdantInterface();
}

function handleShardClick(shardId) {
  if (glassState.completed) return;

  prepareAudioForInteraction();
  playFragmentTone(shardId);
  glassState.actions.push(shardId);
  glassState.shardClicks[shardId] += 1;
  glassState.corruptionLevel += 1;
  appendEchoLine("Frog", glassShards[shardId].normal, false);
  setDialogueText("Frog", glassFrogLine(shardId));

  const delay = 3500 + Math.floor(Math.random() * 4200);
  const timer = window.setTimeout(() => {
    if (currentScene().type !== "glassPuzzle" || glassState.completed) return;
    glassState.echoQueue.push(shardId);
    appendEchoLine("Frog (echo)", glassEchoText(shardId), true);
    mutateEchoHistory();
    renderGlassStatus();
    maybeCompleteGlass();
  }, delay);

  glassState.timers.push(timer);
  renderGlassStatus();
}

function glassEchoText(shardId) {
  const shard = glassShards[shardId];
  return glassState.corruptionLevel >= 6 ? shard.corrupt : shard.echo;
}

function appendEchoLine(speaker, text, echo) {
  const line = document.createElement("p");
  line.className = `echo-line${echo ? " echo" : ""}`;
  line.textContent = `${speaker}: ${text}`;
  elements.echoLog.prepend(line);

  while (elements.echoLog.children.length > 8) {
    elements.echoLog.lastElementChild.remove();
  }
}

function mutateEchoHistory() {
  Array.from(elements.echoLog.children).slice(2).forEach((line, index) => {
    if (index % 2 === 0 && !line.textContent.includes("Glasshollow")) {
      line.textContent = line.textContent.replace(" is ", " was ");
    }
  });
}

function renderGlassLog() {
  if (elements.echoLog.children.length === 0) {
    appendEchoLine("System", "Echoes will appear after observation.", false);
  }

  renderGlassStatus();
}

function renderGlassStatus() {
  elements.glassStatus.textContent = glassKeeperLine();
}

function glassKeeperLine() {
  if (glassState.corruptionLevel >= 8) return "Echo saturation complete.";
  if (glassState.corruptionLevel >= 5) return "...stop observing echoes too closely.";
  if (glassState.corruptionLevel >= 3) return "Do not trust repeated statements.";
  return "Echo synchronization is nominal.";
}

function glassFrogLine(shardId) {
  if (shardId === "room") return "We are in Glasshollow. That part keeps surviving.";
  if (glassState.corruptionLevel >= 5) return "Or maybe I'm reacting before it happens.";
  return "I feel like I've already reacted to this.";
}

function maybeCompleteGlass() {
  const allShardsRepeated = Object.values(glassState.shardClicks).every((count) => count >= 2);

  if (glassState.corruptionLevel < 14 || glassState.echoQueue.length < 10 || !allShardsRepeated) return;

  glassState.completed = true;
  elements.continueButton.classList.remove("is-hidden");
  setDialogueText("Time Keeper", "Echo saturation complete. Proceeding to containment phase.");
}

function handleStallClick(itemId) {
  if (rainState.completed) return;

  prepareAudioForInteraction();
  playFragmentTone(itemId);
  rainState.tradeHistory.push(itemId);
  rainState.globalDriftLevel += 1;
  rainState.items[itemId].drift += 1;

  Object.keys(rainState.items).forEach((key) => {
    if (key !== itemId && !rainState.items[key].stable) {
      rainState.items[key].drift += rainState.globalDriftLevel % 2;
    }
  });

  renderRainMarket(itemId);
  setDialogueText("Frog", rainFrogLine());
  maybeCompleteRain();
}

function renderRainMarket(activeItem = "") {
  elements.rainStatus.textContent = `Drift level: ${rainState.globalDriftLevel}`;
  elements.stallButtons.forEach((button) => {
    const drift = rainState.items[button.dataset.item].drift;
    button.textContent = rainStallLabel(button.dataset.item, drift);
    button.classList.toggle("is-active", button.dataset.item === activeItem);
  });

  if (activeItem) {
    const item = rainState.items[activeItem];
    const variants = rainItems[activeItem];
    const index = Math.min(item.drift, variants.length - 1);
    elements.marketCard.textContent = `${rainStallLabel(activeItem, item.drift)}\n\n${variants[index]}`;
  }
}

function rainStallLabel(itemId, drift) {
  const labels = {
    beginning: ["A warm beginning", "A careful beginning", "A covered beginning"],
    sound: ["A sound you almost remember", "A sound that remembers you", "A borrowed sound"],
    path: ["A path that may not exist", "An uncertain path", "A path, still uncertain"],
    certainty: ["A moment of certainty", "A fragile certainty", "A brief certainty"],
    repetition: ["A broken repetition", "A repeating break", "A loop that remains broken"],
    shelter: ["A borrowed shelter", "A priced shelter", "A delay shaped like shelter"]
  };

  return labels[itemId][Math.min(drift, 2)];
}

function rainFrogLine() {
  if (rainState.globalDriftLevel >= 10) return "I don't think words are keeping their shape anymore.";
  if (rainState.globalDriftLevel >= 6) return "I think I remember this place differently every time I speak.";
  return "Why does everything here feel like it already changed after I looked away?";
}

function rainKeeperLine() {
  if (rainState.globalDriftLevel >= 10) return "Do not assign permanence to meaning.";
  if (rainState.globalDriftLevel >= 5) return "Value drift is within expected range.";
  return "Exchange will stabilize perception.";
}

function maybeCompleteRain() {
  const stableTouched = ["path", "certainty", "repetition"].every((itemId) => rainState.items[itemId].drift >= 2);
  const marketFullySampled = Object.values(rainState.items).every((item) => item.drift >= 2);

  if (rainState.globalDriftLevel < 21 || !stableTouched || !marketFullySampled) return;

  rainState.completed = true;
  elements.continueButton.classList.remove("is-hidden");
  setDialogueText("Time Keeper", "Good.");
}

function handleGateSubmit(event) {
  event.preventDefault();

  if (gateState.completed) return;

  const form = new FormData(elements.gateForm);
  gateState.locks.candella = form.get("candella");
  gateState.locks.rail = form.get("rail");
  gateState.locks.echo = form.get("echo");
  gateState.locks.memory = form.get("memory");
  gateState.attempts += 1;
  gateState.contradictionScore = calculateGateContradictionScore();
  renderGateStatus();

  if (Object.values(gateState.locks).some((value) => !value)) {
    setDialogueText("Frog", "The gate isn't hearing all four systems yet.");
    return;
  }

  if (isFullyConsistentGate()) {
    setDialogueText("Frog", "I thought everything had to make sense... but this is too clean. It won't hold.");
    return;
  }

  if (isGateSolution() && gateState.attempts >= 2) {
    gateState.completed = true;
    gateState.alignmentState = "paradox satisfied";
    elements.continueButton.classList.remove("is-hidden");
    elements.game.classList.add("is-corrupt");
    renderGateStatus();
    setDialogueText("Time Keeper", "Good. ...you learned the system.");
    return;
  }

  if (isGateSolution()) {
    setDialogueText("Frog", "But maybe it only has to hold together. Even if it doesn't agree with itself.");
    return;
  }

  if (gateState.contradictionScore >= 3) {
    setDialogueText("Time Keeper", "Do not attempt full consistency.");
    return;
  }

  setDialogueText("Frog", "This is broken, but not in the right shape.");
}

function calculateGateContradictionScore() {
  let score = 0;

  if (gateState.locks.candella === "stable_inside_drift") score += 1;
  if (gateState.locks.rail === "wrong_station") score += 1;
  if (gateState.locks.echo === "accepted_contradiction") score += 1;
  if (gateState.locks.memory === "drifting") score += 1;
  if (isFullyConsistentGate()) score = 0;

  return score;
}

function isFullyConsistentGate() {
  return (
    gateState.locks.candella === "all_stable" &&
    gateState.locks.rail === "valid_only" &&
    gateState.locks.echo === "consistent" &&
    gateState.locks.memory === "fixed"
  );
}

function isGateSolution() {
  return (
    gateState.locks.candella === "stable_inside_drift" &&
    gateState.locks.rail === "wrong_station" &&
    gateState.locks.echo === "accepted_contradiction" &&
    gateState.locks.memory === "drifting"
  );
}

function renderGateStatus() {
  const score = gateState.contradictionScore;
  elements.gateStatus.textContent = `Alignment state: ${gateState.alignmentState} / contradiction ${score}:4`;
}

function gateKeeperLine() {
  if (gateState.attempts >= 4) return "Do not attempt full consistency.";
  if (gateState.completed) return "Alignment complete.";
  return "You are approaching final alignment.";
}

function showPuzzleScene() {
  hideCandellaPuzzle();
  hideVerdantPuzzle();
  hideGlassPuzzle();
  hideRainPuzzle();
  hideFinalGatePuzzle();
  clearEffects();

  const scene = currentScene();

  if (scene.title === "The Observatory") {
    state.completed = false;
    elements.dialogueBox.classList.remove("is-hidden");
    elements.continueButton.classList.add("is-hidden");
    elements.sprite.classList.add("is-visible");
    showSprite({
      speaker: "Frog",
      sprite: S.frogThink,
      position: "left"
    });
    setDialogueText("Frog", "The stars... they're not where they're supposed to be. I think I can move them if I click the right patterns in the sky.");

    elements.puzzleKicker.textContent = "Observatory Calibration";
    elements.puzzleLabel.innerHTML = `
      <div class="observatory-puzzle">
        <p>Align the three missing anchors.</p>
        <div class="constellation-grid">
          <button type="button" class="star-node" data-node="1">Anchor Alpha</button>
          <button type="button" class="star-node" data-node="2">Anchor Beta</button>
          <button type="button" class="star-node" data-node="3">Anchor Gamma</button>
        </div>
      </div>
    `;
    elements.puzzlePanel.classList.remove("is-hidden");

    const nodes = elements.puzzlePanel.querySelectorAll(".star-node");
    let activeNodes = new Set();

    nodes.forEach((node) => {
      node.addEventListener("click", () => {
        const id = node.dataset.node;
        prepareAudioForInteraction();
        playFragmentTone("certainty");

        if (activeNodes.has(id)) {
          activeNodes.delete(id);
          node.classList.remove("is-active");
        } else {
          activeNodes.add(id);
          node.classList.add("is-active");
        }

        if (activeNodes.size === 3) {
          state.completed = true;
          elements.continueButton.classList.remove("is-hidden");
          setDialogueText("Frog", "There. The sky just... clicked into place.");
        } else {
          state.completed = false;
          elements.continueButton.classList.add("is-hidden");
        }
      });
    });
  } else {
    elements.dialogueBox.classList.add("is-hidden");
    elements.sprite.classList.remove("is-visible");
    elements.puzzleKicker.textContent = "Puzzle Placeholder";
    elements.puzzleLabel.textContent = scene.prompt;
    elements.puzzlePanel.classList.remove("is-hidden");
  }
}

function loadScene() {
  const scene = currentScene();

  clearEffects();
  hideCandellaPuzzle();
  hideVerdantPuzzle();
  hideGlassPuzzle();
  hideRainPuzzle();
  hideFinalGatePuzzle();
  setBackground(scene.background);
  setMusic(scene.music);

  if (scene.type === "candellaPuzzle") {
    showCandellaPuzzle();
    return;
  }

  if (scene.type === "verdantPuzzle") {
    showVerdantPuzzle();
    return;
  }

  if (scene.type === "glassPuzzle") {
    showGlassPuzzle();
    return;
  }

  if (scene.type === "rainPuzzle") {
    showRainPuzzle();
    return;
  }

  if (scene.type === "finalGatePuzzle") {
    showFinalGatePuzzle();
    return;
  }

  if (scene.type === "puzzle") {
    showPuzzleScene();
    return;
  }

  state.lineIndex = 0;
  showDialogueLine();
}

function advanceDialogue() {
  const scene = currentScene();

  if (scene.type === "candellaPuzzle") {
    if (candellaState.completed) completePuzzle();
    return;
  }

  if (scene.type === "verdantPuzzle") {
    if (verdantState.completed) completePuzzle();
    return;
  }

  if (scene.type === "glassPuzzle") {
    if (glassState.completed) completePuzzle();
    return;
  }

  if (scene.type === "rainPuzzle") {
    if (rainState.completed) completePuzzle();
    return;
  }

  if (scene.type === "finalGatePuzzle") {
    if (gateState.completed) completePuzzle();
    return;
  }

  if (scene.type === "puzzle") return;

  state.lineIndex += 1;

  if (state.lineIndex < scene.dialogue.length) {
    showDialogueLine();
    return;
  }

  state.sceneIndex += 1;

  if (state.sceneIndex >= scenes.length) {
    state.sceneIndex = 0;
  }

  loadScene();
}

function completePuzzle() {
  state.sceneIndex += 1;

  if (state.sceneIndex >= scenes.length) {
    state.sceneIndex = 0;
  }

  loadScene();
}

function toggleAudio() {
  state.muted = !state.muted;
  updateAudioButton();

  if (state.muted) {
    music.pause();
    return;
  }

  ensureAudioContext();
  music.play().catch(() => {
    state.muted = true;
    updateAudioButton();
  });
  revealCurrentVoiceAfterUnmute();
}

elements.continueButton.addEventListener("click", handleAdvanceInput);
elements.backButton.addEventListener("click", handleBackInput);
elements.audioToggle.addEventListener("click", toggleAudio);
elements.fragmentButtons.forEach((button) => {
  button.addEventListener("click", () => handleFragmentClick(button.dataset.fragment));
});
elements.stabilityPanel.addEventListener("submit", handleStabilitySubmit);
elements.sectionButtons.forEach((button) => {
  button.addEventListener("click", () => handleSectionClick(button.dataset.section));
});
elements.routePanel.addEventListener("submit", handleRouteSubmit);
elements.shardButtons.forEach((button) => {
  button.addEventListener("click", () => handleShardClick(button.dataset.shard));
});
elements.stallButtons.forEach((button) => {
  button.addEventListener("click", () => handleStallClick(button.dataset.item));
});
elements.gateForm.addEventListener("submit", handleGateSubmit);

window.addEventListener("keydown", (event) => {
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    handleAdvanceInput();
  }

  if (event.key === "ArrowLeft" || event.key === "Backspace") {
    event.preventDefault();
    handleBackInput();
  }
});

updateAudioButton();
loadScene();
showInitialSpriteIfCached();
