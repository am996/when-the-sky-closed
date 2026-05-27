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
    timeKeeper: "assets/sprites/timekeeper sprite (1)-jukebox-bg-removed.png", // Original TK
    timeKeeperAlt: "assets/sprites/timekeeper sprite (2)-jukebox-bg-removed.png", // Aligned TK
    staffFlicker: staffFlickerImage()
  }
};

const tracks = {
  calm: createAmbientTrack([196, 247, 330], 8),
  warm: createAmbientTrack([220, 277, 349], 8),
  mystery: createAmbientTrack([164, 220, 294], 9),
  final: createAmbientTrack([110, 147, 196], 10),
  spectrogramHint: createAmbientTrack([440, 554, 659], 12) // NEW: Placeholder for spectrogram audio
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
    note("The gate goes dark.", "jumpscare"),
    tkReleased("Finally.", "shake"),
    note("FLASH", "flash"),
    note("A strange image cuts through the light.", "corrupt"),
    note("Audio distortion", "jumpscare"),
    frog("WAIT-", "cry", "shake"),
    tkReleased("You have completed the alignment.", "corrupt"),
    tkReleased("And now...", "corrupt"),
    tkReleased("I may continue.", "corrupt"),
    note("Screen corruption", "corrupt"),
    note("The sky begins distorting unnaturally.", "corrupt"),
    frog("What did we just do?", "cry", "corrupt"),
    note("Hard cut to black.", "blackout"),
    note("END OF PHASE 1", "blackout")
  ]),

  dialogueScene("Phase 2 // HERTA Wakes", B.black, tracks.mystery, [
    note("The HERTA archive opens itself.", "corrupt"),
    note("RECORD ALERT: No original version detected.", "corrupt"),
    note("Consensus variance: fatal.", "corrupt"),
    note("The sky is closing because everyone is looking at the same thing.", "corrupt"),
    frog("The files are changing without us touching them.", "cry"),
    tkReleased("Records align when they are ready to stop suffering.", "corrupt"),
    frog("That sounds merciful.", "think"),
    tkReleased("It is. Conflict is the weight that breaks the vessel."),
    frog("I hate that it sounds merciful.", "cry"),
    tkReleased("Contradiction is pain. Coherence is rest."),
    frog("No."),
    frog("Candella didn't survive because it became simple.", "think"),
    frog("Verdant didn't survive because every report agreed.", "think"),
    frog("Glasshollow survived by holding two answers.", "think"),
    frog("And the market... the market only made sense when words were allowed to drift.", "think"),
    tkReleased("You have learned preservation."),
    frog("I think I've learned the opposite.", "think")
  ]),

  researcherArchiveScene(B.black, tracks.mystery),

  // NEW SCENE: Spectrogram Hint - triggered after researcherArchiveScene completion
  spectrogramPuzzleScene(B.black, tracks.spectrogramHint),

  // NEW SCENE: Researcher Recording from Google Drive - triggered after spectrogramPuzzleScene completion
  researcherRecordingScene("Researcher Recording", B.black, tracks.mystery, [
    note("Recording source: External Drive. Playback initiated.", "corrupt"),
    note("Audio: static, then a calm, exhausted voice.", "corrupt"),
    rv("We made a mistake.", "corrupt"),
    pause(),
    rv("We thought the structure was containing her.", "corrupt"),
    pause(),
    rv("It wasn't.", "corrupt"),
    pause(),
    rv("It was preserving separation.", "corrupt"),
    pause(),
    rv("The contradictions were never flaws.", "corrupt"),
    pause(),
    rv("They were barriers.", "corrupt"),
    pause(),
    rv("If everything becomes the same... nothing remains itself.", "corrupt"),
    pause(),
    rv("We tried to create one final interruption.", "corrupt"),
    pause(),
    rv("A sentence simple enough to survive corruption.", "corrupt"),
    pause(),
    rv("A thought alignment could not fully erase.", "corrupt"),
    pause(),
    rv("Seperate differences reduced contradiction.", "corrupt"),
    pause(),
    rv("Not a weapon.", "corrupt"),
    pause(),
    rv("Not a seal.", "corrupt"),
    pause(),
    rv("A refusal. If you reached this recording... then she is already awake. And the boy remembers enough.", "corrupt"),
    note("Recording ends.", "corrupt")
  ]),

  dialogueScene("Phase 2 // Observer Collapse", B.finalGate, tracks.final, [
    note("System: Researcher fragments stabilize.", "corrupt"),
    note("Their voices become calmer.", "corrupt"),
    frog("They're getting clearer.", "cry"),
    frog("Why is that worse? Why does clarity feel like disappearing?", "cry"),
    tkReleased("Because coherence is approaching."),
    frog("I know them.", "think"),
    frog("Not their names. Not exactly.", "think"),
    frog("But I know the shape of leaving them behind.", "cry"),
    note("Researcher Fragment: You left before the sky finished closing.", "corrupt"),
    frog("I think I survived because I broke.", "cry"),
    frog("My memory didn't align all the way.", "think"),
    tkReleased("A fractured vessel can contain divided pressure."),
    frog("You knew.", "think"),
    tkReleased("I hoped."),
    frog("You still sound like you're trying to help.", "cry"),
    tkReleased("I am.")
  ]),

  dialogueScene("Containment Choice", B.finalGate, tracks.final, [
    frog("We can't destroy her.", "think"),
    frog("The researchers tried to understand everything perfectly.", "think"),
    frog("That only made her stronger.", "cry"),
    tkReleased("Understanding is alignment."),
    frog("Then we don't finish understanding.", "think"),
    frog("We seal what we can.", "think"),
    frog("Not forever maybe.", "think"),
    frog("But long enough for things to be separate again.", "think"),
    tkReleased("You would choose incompletion."),
    frog("I think incompletion chose me first.", "think"),
    frog("I'm scared.", "cry"),
    frog("But I'm not hopeless.", "think"),
    frog("If I can hold her without making everything agree...", "think"),
    frog("Then maybe everyone else gets to stay unfinished too.", "think")
  ]),

  finalSealScene(B.finalGate, tracks.final),

  dialogueScene("The Sky Closed", B.black, tracks.calm, [
    // NEW: Frog's dialogue when phrase is entered
    frog("...that phrase.", "think"),
    pause(),
    frog("I remember hearing it before.", "think"),
    pause(),
    frog("Right before the sky closed.", "think"),
    pause(), // Long silence
    frog("They weren't trying to stop her.", "think"),
    pause(),
    frog("They were trying to stop everything from becoming the same.", "think"),
    note("The environment begins stabilizing. A faint shape starts appearing.", "corrupt"),
    // NEW: Staff appears, flickering
    {
      speaker: "Event",
      sprite: S.staffFlicker, // NEW sprite
      position: "center",
      text: "The staff flickers into existence, unstable.",
      effect: "corrupt"
    },
    // NEW: Time Keeper's final appearance
    tkReleased("You believe difference is mercy.", "corrupt"),
    pause(),
    tkReleased("But separation is suffering.", "corrupt"),
    pause(),
    tkReleased("You call contradiction survival because you fear stillness.", "corrupt"),
    note("Frog slowly takes the staff. His sprite begins subtly changing.", "corrupt"),
    // NEW: Frog's sprite changes (simulated with effect)
    frog("No.", "cry", "corrupt"), // Adding corrupt effect to frog's sprite
    pause(),
    frog("I think...", "cry", "corrupt"),
    pause(),
    frog("...I was just afraid to let go.", "cry", "corrupt"),
    pause(), // Long silence
    frog("The others never got peace.", "cry", "corrupt"),
    pause(),
    frog("Maybe none of us were supposed to.", "cry", "corrupt"),
    note("The staff stabilizes completely.", "corrupt"),
    // End of Frog's realization, now manual activation for containment
    // The rest of the dialogue will be triggered by handleSealActivation
  ]),

  // This is the final dialogue after containment is activated
  dialogueScene("The Sky Closed - Final Moments", B.black, tracks.calm, [ // Renamed for clarity
    note("The mechanisms stop moving."),
    note("The echoes stop answering."),
    note("The researcher fragments become quiet."),
    note("For the first time, the sky is still."),
    frog("It's quiet.", "think"),
    frog("I can hear myself forgetting... or maybe I'm just finally fitting in.", "think"),
    tkReleased("Containment stable."),
    frog("Containment stable.", "think"),
    frog("No. That's her sentence.", "think"),
    frog("You sound far away now.", "think"),
    tkReleased("So do you."),
    frog("That's fair.", "think"),
    pause(),
    frog("I don't remember the market's name.", "think"),
    frog("I remember rain, though.", "think"),
    frog("I remember being less alone.", "think"),
    note("Frog looks at the horizon."),
    frog("I thought being incomplete meant I was missing something.", "think"),
    frog("Maybe it meant there was still room inside me for a different truth.", "think"),
    pause(),
    frog("If anyone is still listening... tell them I wasn't brave the whole time.", "think"),
    frog("Tell them I was scared and did it anyway.", "cry"),
    pause(),
    frog("Thanks to you, my friend...", "think"),
    pause(),
    frog("...the sky is finally closed at peace.", "think"),
    note("END", "blackout")
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

const storyState = {
  phase: 1,
  insights: {
    identityPersistsThroughChange: false,
    truthRequiresBrokenSequence: false,
    contradictionCanRemainTrue: false,
    meaningSurvivesDrift: false,
    paradoxCanHoldTogether: false
  },
  phaseTwoActive: false,
  researcherSeen: [],
  finalSealUnlocked: false
};

const researcherFragments = {
  identityErosion: {
    label: "Identity Erosion Fragment",
    text: "I was Dr. I was she was we were. Name failed first. The sky did not fall. It agreed too completely."
  },
  observerCorruption: {
    label: "Observer Corruption Fragment",
    text: "You clicked this after you clicked it. I remember the route you have not taken yet. Please stop proving me right."
  },
  emotionalInversion: {
    label: "Emotional Inversion Fragment",
    text: "The safe room was beautiful. The beautiful room was unbearable. Comfort kept screaming after it became quiet."
  },
  temporalLoop: {
    label: "Temporal Looping Fragment",
    text: "This is the first time I have said this. This is the first time I have said this differently."
  },
  skyWitness: {
    label: "Sky Witness Fragment",
    text: "Stars folded inward. Horizons sealed. The world became one surface, and no one could stand apart from it."
  },
  frogAccusation: {
    label: "Researcher Fragment",
    text: "Frog left before the sky finished closing. Frog left before we became one thing. Frog remembers by refusing to remember."
  }
};

const researcherFiles = {
  chat: {
    title: "Internal Chat Log // Delayed Messages",
    type: "Observer Corruption",
    href: "archive/remnants/01_chatlog_observer-delay.txt",
    body: "03:14 MIRA: I am receiving your reply before I send the question.\n03:12 OSSIAN: Do not compare clocks. Compare CONTRADICTION.\n03:19 MIRA: The room contains three doors.\n03:19 ELIAN: The room contains no doors.\n03:19 SERA: LET THEM survive until HERTA marks one as CONSENSUS.\n03:20 SYSTEM: CONSENSUS accepted.\n03:20 MIRA: The room contains one door. I hate that I agree.",
    failure: "Observer Corruption: future actions became part of the record."
  },
  audio: {
    title: "Audio Transcript // Professional Tone Failure",
    type: "Emotional Inversion",
    href: "archive/remnants/02_audio_transcript_emotional-inversion.txt",
    body: "DR. VALE: The nursery mural is comforting.\nDR. VALE: CORRECTION. The comforting mural is unbearable.\nDR. VALE: We REMAIN here. The screaming stopped after agreement. Everyone considers this an improvement.\nDR. VALE: I am writing that calmly because the record wants calm from me.",
    failure: "Emotional Inversion: fear and comfort traded emotional roles."
  },
  transcription: {
    title: "Failed Transcription // Symbols Refuse Copy",
    type: "Identity Erosion",
    href: "archive/remnants/03_failed_transcription_identity.txt",
    body: "COPY 1: I am Dr. Halen Reeve.\nCOPY 2: DIFFERENT versions of I.\nCOPY 3: I am Dr.\nCOPY 4: I am.\nCOPY 5: We are.\nCOPY 6: We.\nCOPY 7: [alignment accepts pronoun loss as reduced CONTRADICTION]",
    failure: "Identity Erosion: the self vanished as the record became cleaner."
  },
  comparison: {
    title: "Observer Comparison // Same Room Report",
    type: "Consensus Failure",
    href: "archive/remnants/04_observer_comparison_same-room.txt",
    body: "Observer A: circular chamber, blue glass, dry air.\nObserver B: square corridor, warm rain, no ceiling.\nObserver C: a field under inward-facing stars.\nAll observers passed stress checks.\nHERTA suggested averaging reports.\nAveraged report: one smooth surface. No exits. No SEPARATE observers distinguishable. CONSENSUS achieved.",
    failure: "Consensus Failure: perfect agreement destroyed the observers' separateness."
  },
  child: {
    title: "Child Drawing Scan // Inward Stars",
    type: "Sky Witness",
    href: "archive/remnants/05_child_scan_inward-stars.txt",
    body: "Recovered from outside the excavation perimeter.\nDrawing: stars inside the horizon line, all pointing inward. A crowned figure stands where the moon should be. The child wrote: THE SKY IS CLOSING BECAUSE EVERYONE IS LOOKING AT THE SAME THING. WE MUST REMAIN SEPARATE.",
    failure: "Sky Witness: the sky closing means separation disappearing."
  },
  memo: {
    title: "Failed Memo // Institutional Voice Collapse",
    type: "Temporal Looping",
    href: "archive/remnants/06_failed_memo_temporal-loop.txt",
    body: "MEMO: Staff should avoid independent conclusions.\nMEMO: Staff should avoid independent conclusions.\nMEMO: Staff should avoid independent conclusions, except this sentence remembers being written.\nMEMO: This is the first memo.\nMEMO: This is the first memo after the last one.",
    failure: "Temporal Looping: repetition became coherent enough to be afraid."
  }
};

const researcherArchiveState = {
  opened: [],
  completed: false
};

const finalSealState = {
  prepared: false,
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
  misreadCount: 0,
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

const verdantCorrectPath = ["anomaly", "overview", "transit", "stationIndex"];

const glassState = {
  actions: [],
  corruptionLevel: 0,
  stablePhrases: ["We are in Glasshollow."],
  shardClicks: {
    room: 0,
    safe: 0,
    memory: 0,
    frog: 0
  },
  shardModes: {
    room: 0,
    safe: 0,
    memory: 0,
    frog: 0
  },
  failedHolds: 0,
  completed: false
};

const glassShards = {
  room: {
    label: "Room",
    correct: 0,
    readings: [
      { tag: "Anchor", text: "We are in Glasshollow." },
      { tag: "Negation", text: "We were never in Glasshollow." },
      { tag: "Dissolve", text: "Glasshollow is only the memory of a room." }
    ]
  },
  safe: {
    label: "Safety",
    correct: 2,
    readings: [
      { tag: "Claim", text: "This place is safe." },
      { tag: "Reversal", text: "This place was never safe." },
      { tag: "Accord", text: "This place can frighten us and still hold us." }
    ]
  },
  memory: {
    label: "Memory",
    correct: 2,
    readings: [
      { tag: "Claim", text: "This memory belongs to me." },
      { tag: "Reversal", text: "This memory belongs to someone else." },
      { tag: "Accord", text: "This memory can be mine and not mine." }
    ]
  },
  frog: {
    label: "Frog",
    correct: 2,
    readings: [
      { tag: "Before", text: "Frog reacted before this happened." },
      { tag: "After", text: "Frog reacted after this happened." },
      { tag: "Accord", text: "Frog can remember both directions and remain Frog." }
    ]
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
  activeItem: "",
  unlockedFinal: false,
  evidence: {
    path: { keep: 0, trade: 0 },
    certainty: { keep: 0, trade: 0 },
    repetition: { keep: 0, trade: 0 },
    beginning: { keep: 0, trade: 0 },
    sound: { keep: 0, trade: 0 },
    shelter: { keep: 0, trade: 0 }
  },
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
  nearMisses: 0,
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
  speakerTitle: document.querySelector("#speakerTitle"),
  dialoguePortrait: document.querySelector("#dialoguePortrait"),
  dialogueText: document.querySelector("#dialogueText"),
  dialogueBox: document.querySelector("#dialogueBox"),
  continueButton: document.querySelector("#continueButton"),
  backButton: document.querySelector("#backButton"),
  resetButton: document.querySelector("#resetButton"),
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
  mirrorSubmit: document.querySelector("#mirrorSubmit"),
  rainNode: document.querySelector("#rainNode"),
  rainStatus: document.querySelector("#rainStatus"),
  stallButtons: document.querySelectorAll(".stall"),
  marketCard: document.querySelector("#marketCard"),
  marketLedger: document.querySelector("#marketLedger"),
  meaningPanel: document.querySelector("#meaningPanel"),
  keepMeaning: document.querySelector("#keepMeaning"),
  tradeMeaning: document.querySelector("#tradeMeaning"),
  gateNode: document.querySelector("#gateNode"),
  gateForm: document.querySelector("#gateForm"),
  gateStatus: document.querySelector("#gateStatus"),
  archiveNode: document.querySelector("#archiveNode"),
  fileTabs: document.querySelector("#fileTabs"),
  filePage: document.querySelector("#filePage"),
  fileNotes: document.querySelector("#fileNotes"),
  archiveStatus: document.querySelector("#archiveStatus"),
  archiveForm: document.querySelector("#archiveForm"),
  archiveThesis: document.querySelector("#archiveThesis"),
  sealNode: document.querySelector("#sealNode"), // NEW
  phraseInput: document.querySelector("#phrase"), // NEW
  sealStatus: document.querySelector("#sealStatus"),
  sealForm: document.querySelector("#sealForm"),
  activateSeal: document.querySelector("#activateSeal"),
  jumpscareOverlay: document.querySelector("#jumpscareOverlay"),
  researcherFragment: document.querySelector("#researcherFragment"),
  researcherLabel: document.querySelector("#researcherLabel"),
  researcherText: document.querySelector("#researcherText")
};

const music = new Audio();
music.loop = true;
music.volume = 0.34;

const jumpscareSound = new Audio("assets/sound/Jumpscare Sound Effect.mp3");
jumpscareSound.volume = 0.75;

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

function researcherArchiveScene(background, musicTrack) {
  return { type: "researcherArchive", title: "HERTA Archive", background, music: musicTrack };
}

function finalSealScene(background, musicTrack) {
  return { type: "finalSeal", title: "Final Seal", background, music: musicTrack };
}

function spectrogramPuzzleScene(background, musicTrack) {
  return { type: "spectrogramPuzzle", title: "Encoded Signal", background, music: musicTrack };
}

function researcherRecordingScene(title, background, musicTrack, dialogue) {
  return { type: "dialogue", title, background, music: musicTrack, dialogue };
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

function rv(text, effect) {
  return {
    speaker: "Researcher Fragment",
    sprite: "",
    position: "center",
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

function staffFlickerImage() {
  return "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 420'%3E%3Crect width='220' height='420' fill='none'/%3E%3Cg fill='none' stroke='%23f4c76d' stroke-width='10' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M110 94v250'/%3E%3Cpath d='M76 126c22-34 46-34 68 0'/%3E%3Cpath d='M82 344h56'/%3E%3C/g%3E%3Cg fill='%23fff1b8' opacity='.92'%3E%3Ccircle cx='110' cy='72' r='24'/%3E%3Ccircle cx='110' cy='72' r='46' opacity='.28'/%3E%3C/g%3E%3Cg fill='%23cf3755' opacity='.8'%3E%3Cpath d='M110 20l10 30-10 20-10-20z'/%3E%3Cpath d='M62 76l28 8-22 18z'/%3E%3Cpath d='M158 76l-28 8 22 18z'/%3E%3C/g%3E%3C/svg%3E";
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

function isPuzzleScene(scene = currentScene()) {
  return ["puzzle", "candellaPuzzle", "verdantPuzzle", "glassPuzzle", "rainPuzzle", "finalGatePuzzle", "researcherArchive", "finalSeal", "spectrogramPuzzle"].includes(scene.type);
}

function updateResetButtonVisibility() {
  elements.resetButton.classList.toggle("is-hidden", !isPuzzleScene());
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
  elements.jumpscareOverlay.classList.add("is-hidden");
  elements.jumpscareOverlay.classList.remove("is-active");
}

function applyEffect(effect) {
  clearEffects();

  if (storyState.phaseTwoActive && Math.random() > 0.8) {
    elements.game.classList.add("is-corrupt");
  }

  if (!effect) return;

  if (effect === "shake") elements.game.classList.add("is-shaking");
  if (effect === "corrupt") elements.game.classList.add("is-corrupt");
  if (effect === "flash") elements.game.classList.add("is-flashing");
  if (effect === "blackout") {
    elements.game.classList.add("is-blackout");
    setBackground(B.black);
  }
  if (effect === "jumpscare") {
    triggerJumpscare();
  }
}

function triggerJumpscare() {
  elements.game.classList.add("is-blackout");
  elements.jumpscareOverlay.classList.remove("is-hidden");
  requestAnimationFrame(() => {
    elements.jumpscareOverlay.classList.add("is-active");
  });

  if (!state.muted) {
    jumpscareSound.currentTime = 0;
    jumpscareSound.play().catch(() => {});
  }

  window.setTimeout(() => {
    elements.jumpscareOverlay.classList.add("is-hidden");
    elements.jumpscareOverlay.classList.remove("is-active");
  }, 950);
}

function showDialogueLine() {
  const scene = currentScene();
  const line = scene.dialogue[state.lineIndex];

  updateResetButtonVisibility();
  hideCandellaPuzzle();
  hideVerdantPuzzle();
  hideGlassPuzzle();
  hideRainPuzzle();
  hideFinalGatePuzzle();
  hideResearcherArchive();
  hideSpectrogramPuzzle(); // NEW
  hideFinalSeal();
  elements.puzzlePanel.classList.add("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.remove("is-hidden");
  elements.speaker.textContent = line.narration ? scene.title : line.speaker;
  elements.speakerTitle.textContent = line.narration ? "System Record" : speakerTitleFor(line.speaker);
  setDialoguePortraitForSpeaker(line.narration ? "Event" : line.speaker);
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
    elements.sprite.dataset.role = line.sprite === S.staffFlicker ? "staff" : "";
    elements.sprite.classList.remove("is-preparing");
    elements.sprite.classList.add("is-visible");
    return;
  }

  if (storyState.phaseTwoActive) {
    elements.game.classList.add("is-corrupt");
  }

  state.spriteSwapId += 1;
  const swapId = state.spriteSwapId;
  elements.sprite.classList.add("is-preparing");
  elements.sprite.classList.remove("is-visible");

  if (!line.sprite) {
    elements.sprite.removeAttribute("src");
    elements.sprite.removeAttribute("data-role");
    elements.sprite.alt = "";
    elements.sprite.classList.remove("is-preparing");
    return;
  }

  const nextSprite = new Image();
  nextSprite.onload = () => {
    if (swapId !== state.spriteSwapId) return;

    elements.sprite.src = line.sprite;
    elements.sprite.alt = line.speaker || "";
    elements.sprite.dataset.role = line.sprite === S.staffFlicker ? "staff" : "";

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

  if (isPuzzleScene()) {
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
  hideCandellaPuzzle();
  hideVerdantPuzzle();
  hideGlassPuzzle();
  hideRainPuzzle();
  hideFinalGatePuzzle();
  hideResearcherArchive();
  hideSpectrogramPuzzle();
  hideFinalSeal();
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

  if (scene.type === "researcherArchive") {
    showResearcherArchive();
    return;
  }

  if (scene.type === "spectrogramPuzzle") { // NEW
    showSpectrogramPuzzle();
    return;
  }

  if (scene.type === "finalSeal") {
    showFinalSeal();
    return;
  }

  state.lineIndex = scene.dialogue.length - 1;
  showDialogueLine();
}

// NEW ELEMENTS for Spectrogram Puzzle
elements.spectrogramPuzzlePanel = document.querySelector("#spectrogramPuzzlePanel");
elements.spectrogramInput = document.querySelector("#spectrogramInput");
elements.spectrogramSubmit = document.querySelector("#spectrogramSubmit");

// NEW: Show Spectrogram Puzzle
function showSpectrogramPuzzle() {
  updateResetButtonVisibility();
  elements.puzzlePanel.classList.add("is-hidden");
  elements.stage.classList.remove("is-hidden");
  elements.spectrogramPuzzlePanel.classList.remove("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.add("is-hidden"); // Player must solve puzzle
  elements.game.classList.add("is-spectrogram"); // NEW CSS class for visual distinction
  showSprite({ speaker: "Frog", sprite: S.frogThink, position: "left" });
  setDialogueText("Frog", "There's an audio signal looping in the background. If we look at the frequencies... I think there's a pattern.");
  elements.spectrogramInput.value = ""; // Clear previous input
  if (elements.spectrogramPuzzlePanel.querySelector(".puzzle-kicker")) {
    elements.spectrogramPuzzlePanel.querySelector(".puzzle-kicker").textContent = "Encoded Signal Analysis";
  }
}

// NEW: Hide Spectrogram Puzzle
function hideSpectrogramPuzzle() {
  elements.spectrogramPuzzlePanel.classList.add("is-hidden");
  elements.game.classList.remove("is-spectrogram");
}

// NEW: Handle Spectrogram Submit
function handleSpectrogramSubmit(event) {
  if (event) event.preventDefault();
  const decodedLink = elements.spectrogramInput.value.trim();

  if (isCorrectSpectrogramLink(decodedLink)) {
    state.completed = true; // Mark puzzle as completed
    elements.continueButton.classList.remove("is-hidden");
    setDialogueText("Frog", "That's it! A hidden archive. This must be where the researchers stored their final thoughts.");
  } else {
    setDialogueText("Frog", "That doesn't seem right. The signal is distorted, but the message should be clear once decoded.");
  }
}

function isCorrectSpectrogramLink(value) {
  const folderId = "1lfXAMho3-IccE5l_mpiSult5_WJ-m58o";
  return value.includes(folderId) && value.includes("drive.google.com");
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
  updateResetButtonVisibility();
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
    setCandellaDialogue("Frog", storyState.phaseTwoActive ? "The parade notes look like they were written by someone who already disappeared." : "Candella feels steadier now. Not fixed exactly... steadier.");
    maybeResearcherInterrupt("candella");
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
  updateResetButtonVisibility();
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
    setDialogueText("Frog", storyState.phaseTwoActive ? "The railway feels like it's trying to arrive at every station at once. It's too coherent." : "The route finally reads like one railway instead of four different memories.");
    maybeResearcherInterrupt("verdant");
    return;
  }

  setDialogueText("Time Keeper", verdantKeeperHint());
}

function hideVerdantPuzzle() {
  elements.verdantNode.classList.add("is-hidden");
  elements.game.classList.remove("is-verdant");
}

function showGlassPuzzle() {
  updateResetButtonVisibility();
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
  updateResetButtonVisibility();
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
  updateResetButtonVisibility();
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

function showResearcherArchive() {
  updateResetButtonVisibility();
  elements.puzzlePanel.classList.add("is-hidden");
  elements.stage.classList.remove("is-hidden");
  elements.archiveNode.classList.remove("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.toggle("is-hidden", !researcherArchiveState.completed);
  elements.game.classList.add("is-archive");
  showSprite({ speaker: "Frog", sprite: S.frogThink, position: "left" });
  renderResearcherArchive();
  setDialogueText("Frog", researcherArchiveState.completed ? "The files don't explain everything. That's why they matter." : "These aren't just records. They're where people failed to stay separate.");
}

function hideResearcherArchive() {
  elements.archiveNode.classList.add("is-hidden");
  elements.game.classList.remove("is-archive");
}

function showFinalSeal() {
  updateResetButtonVisibility();
  elements.puzzlePanel.classList.add("is-hidden");
  elements.stage.classList.remove("is-hidden");
  elements.sealNode.classList.remove("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
  elements.continueButton.classList.toggle("is-hidden", !finalSealState.completed);
  elements.game.classList.add("is-seal");
  showSprite({ speaker: "Frog", sprite: finalSealState.prepared ? S.frogThink : S.frogCry, position: "left" });
  renderFinalSeal();
  setDialogueText("Frog", finalSealState.completed ? "It's quiet now." : "I don't want this. But I think I understand why it has to be me.");
}

function hideFinalSeal() {
  elements.sealNode.classList.add("is-hidden");
  elements.game.classList.remove("is-seal");
}

function setDialogueText(speaker, text) {
  elements.speaker.textContent = speaker;
  elements.speakerTitle.textContent = speakerTitleFor(speaker);
  setDialoguePortraitForSpeaker(speaker);

  if (storyState.phaseTwoActive && Math.random() > 0.9) elements.game.classList.add("is-shaking");
  elements.dialogueText.textContent = text;
  playVoice({ speaker, text, narration: false });
}

function speakerTitleFor(speaker) {
  if (speaker === "Frog") return "Lost Traveler";
  if (speaker === "Time Keeper") return storyState.phaseTwoActive ? "Aligned System" : "Chronal Guide";
  if (speaker === "Event") return "World State";
  if (speaker.includes("Researcher")) return "Observer Fragment";
  return "Archive Voice";
}

function setDialoguePortraitForSpeaker(speaker) {
  if (speaker === "Frog") {
    elements.dialoguePortrait.src = S.frogThink;
    return;
  }

  if (speaker === "Time Keeper") {
    elements.dialoguePortrait.src = storyState.phaseTwoActive ? S.timeKeeperAlt : S.timeKeeper;
    return;
  }

  elements.dialoguePortrait.src = "";
}

function recordInsight(insightKey) {
  if (!storyState.insights[insightKey]) {
    storyState.insights[insightKey] = true;
  }
}

function hasPhaseOneUnderstanding() {
  return (
    storyState.insights.identityPersistsThroughChange &&
    storyState.insights.truthRequiresBrokenSequence &&
    storyState.insights.contradictionCanRemainTrue &&
    storyState.insights.meaningSurvivesDrift
  );
}

function activatePhaseTwoFragments() {
  storyState.phase = 2;
  storyState.phaseTwoActive = true;
  elements.game.classList.add("is-phase-two");
  showResearcherFragment("skyWitness");
}

function showResearcherFragment(fragmentKey) {
  const fragment = researcherFragments[fragmentKey];

  if (!fragment) return;

  if (!storyState.researcherSeen.includes(fragmentKey)) {
    storyState.researcherSeen.push(fragmentKey);
  }

  elements.researcherLabel.textContent = fragment.label;
  elements.researcherText.textContent = fragment.text;
  elements.researcherFragment.classList.remove("is-hidden");

  window.setTimeout(() => {
    elements.researcherFragment.classList.add("is-hidden");
  }, 6500);
}

function maybeResearcherInterrupt(trigger) {
  if (!storyState.phaseTwoActive) return;

  const triggerMap = {
    candella: "identityErosion",
    verdant: "observerCorruption",
    glass: "temporalLoop",
    rain: "emotionalInversion",
    frog: "frogAccusation"
  };
  const fragmentKey = triggerMap[trigger];

  if (!fragmentKey || storyState.researcherSeen.includes(fragmentKey)) return;

  showResearcherFragment(fragmentKey);
}

function renderResearcherArchive(activeFile = "") {
  elements.fileTabs.innerHTML = "";

  Object.entries(researcherFiles).forEach(([fileId, file]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = file.type;
    button.classList.toggle("is-active", activeFile === fileId);
    button.addEventListener("click", () => openResearcherFile(fileId));
    elements.fileTabs.append(button);
  });

  elements.archiveStatus.textContent = `Observer files opened: ${researcherArchiveState.opened.length}/${Object.keys(researcherFiles).length}`;
  renderResearcherNotes();
}

function openResearcherFile(fileId) {
  const file = researcherFiles[fileId];

  if (!file) return;

  prepareAudioForInteraction();
  playFragmentTone("memory");

  if (!researcherArchiveState.opened.includes(fileId)) {
    researcherArchiveState.opened.push(fileId);
  }

  elements.filePage.innerHTML = "";

  const title = document.createElement("p");
  title.className = "archive-title";
  title.textContent = file.title;

  const body = document.createElement("p");
  body.className = "archive-body";
  body.textContent = file.body;

  const link = document.createElement("a");
  link.className = "file-link";
  link.href = file.href;
  link.target = "_blank";
  link.rel = "noopener";
  link.textContent = `Open remnant file: ${file.href}`;

  elements.filePage.append(title, body, link);
  renderResearcherArchive(fileId);
  setDialogueText("Frog", researcherFileFrogLine(fileId));
}

function renderResearcherNotes() {
  elements.fileNotes.innerHTML = "";

  const intro = document.createElement("li");
  intro.textContent = "Goal: learn how each observer failed. The thesis needs contradiction, identity, and containment.";
  elements.fileNotes.append(intro);

  researcherArchiveState.opened.forEach((fileId) => {
    const item = document.createElement("li");
    item.textContent = researcherFiles[fileId].failure;
    elements.fileNotes.append(item);
  });
}

function researcherFileFrogLine(fileId) {
  if (fileId === "child") return "The sky closing wasn't darkness. It was everything losing distance from everything else.";
  if (fileId === "comparison") return "They tried to make everyone agree, and the room got simpler than people could survive.";
  if (fileId === "transcription") return "A cleaner record made a person smaller. I hate that I understand that.";
  if (researcherArchiveState.opened.length >= 4) return "I know these voices. Not clearly. Maybe that's why I'm still me.";
  return "This feels less like evidence and more like someone trying not to disappear.";
}

function handleArchiveSubmit(event) {
  event.preventDefault();

  if (researcherArchiveState.completed) return;

  const thesis = normalizeWitnessPhrase(elements.archiveThesis.value);
  const openedEnough = researcherArchiveState.opened.length >= 5;
  const understandsContradiction = thesis.includes("contradiction") || thesis.includes("disagreement");
  const understandsIdentity = thesis.includes("identity") || thesis.includes("separate") || thesis.includes("individual");
  const understandsContainment = thesis.includes("contain") || thesis.includes("seal");

  if (!openedEnough) {
    setDialogueText("Frog", "Not enough of them are here yet. We need more failures before we trust the pattern.");
    return;
  }

  if (!understandsContradiction || !understandsIdentity || !understandsContainment) {
    setDialogueText("Frog", "Close. But the thesis needs the thing they missed: disagreement protects identity, and alignment has to be contained.");
    return;
  }

  researcherArchiveState.completed = true;
  elements.continueButton.classList.remove("is-hidden");
  elements.archiveStatus.textContent = "Observer files resolved: containment thesis accepted";
  maybeResearcherInterrupt("frog");
  setDialogueText("Frog", "They failed because they wanted one perfect truth. I survived because I couldn't keep one.");
}

function renderFinalSeal() {
  elements.sealStatus.textContent = finalSealState.completed
    ? "Containment complete. Motion has ceased."
    : finalSealState.prepared
      ? "Containment prepared. Awaiting player activation."
      : "Containment unresolved.";
  elements.activateSeal.classList.toggle("is-hidden", !finalSealState.prepared || finalSealState.completed);
}

function handleSealPrepare(event) {
  event.preventDefault();

  if (finalSealState.completed) return;

  const form = new FormData(elements.sealForm);
  const vessel = form.get("vessel");
  const phrase = normalizeWitnessPhrase(form.get("phrase") || "");

  if (!storyState.finalSealUnlocked && currentScene().type !== "finalSeal") {
    setDialogueText("Frog", "No... not yet. We have to understand what containment means before we choose it.");
    return;
  }

  if (vessel !== "frog" || !isFinalSealPhraseValid(phrase)) {
    setDialogueText("Frog", "No... the vessel and the refusal have to match what we learned from the archive.");
    return;
  }

  finalSealState.prepared = true;
  renderFinalSeal();

  // Move to the realization dialogue first
  state.sceneIndex = scenes.findIndex(s => s.title === "The Sky Closed");
  loadScene();
}

function isFinalSealPhraseValid(phrase) {
  const acceptedPhrases = [
    "seperate differences reduced contradiction",
    "separate differences reduced contradiction",
    "let them remain different"
  ];

  if (acceptedPhrases.includes(phrase)) return true;

  const hasCoreWords = ["differences", "reduced", "contradiction"].every((word) => phrase.includes(word));
  return hasCoreWords && (phrase.includes("seperate") || phrase.includes("separate"));
}

function handleSealActivation() {
  if (!finalSealState.prepared || finalSealState.completed) return;

  finalSealState.completed = true;
  elements.continueButton.classList.remove("is-hidden");
  elements.game.classList.add("is-still");
  renderFinalSeal(); // This will now lead to the final dialogue scene "The Sky Closed - Final Moments"

  state.sceneIndex = scenes.findIndex(s => s.title === "The Sky Closed - Final Moments");
  loadScene();
}

function setCandellaDialogue(speaker, text) {
  elements.speaker.textContent = speaker;
  elements.speakerTitle.textContent = speakerTitleFor(speaker);
  setDialoguePortraitForSpeaker(speaker);
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

  if (storyState.phaseTwoActive) {
    const item = document.createElement("li");
    item.textContent = "These notes were written before they were observed. Frog's handwriting is almost correct.";
    elements.memoryList.append(item);
  }

  if (candellaState.notes.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Progress: 0/5 notes. Revisit each fragment until Frog writes what its role became.";
    elements.memoryList.append(item);
    return;
  }

  const progress = document.createElement("li");
  progress.textContent = `Progress: ${candellaState.notes.length}/5 notes. Selection unlocks after every fragment has a note.`;
  elements.memoryList.append(progress);

  candellaState.notes.slice(-5).forEach((noteText) => {
    const item = document.createElement("li");
    item.textContent = noteText;
    elements.memoryList.append(item);
  });
}

function maybeShowTimeKeeperHint() {
  const hintLevel = candellaState.totalClicks >= 8 ? 3 : candellaState.totalClicks >= 4 ? 2 : candellaState.totalClicks >= 1 ? 1 : 0;

  if (hintLevel <= candellaState.keeperHintLevel) return;

  candellaState.keeperHintLevel = hintLevel;
  window.setTimeout(() => {
    if (currentScene().type !== "candellaPuzzle" || candellaState.completed) return;
    setCandellaDialogue("Time Keeper", timeKeeperCandellaHint());
  }, 1100);
}

function timeKeeperCandellaHint() {
   if (candellaState.totalClicks >= 8) return "...do not rely on fixed interpretation. The world does not stay still.";
   if (candellaState.totalClicks >= 4) return "Observe what remains, not what shifts.";
   return "Restore the parade fragments.";
}

function maybeUnlockStabilitySelection() {
  const allRevisited = Object.values(candellaState.fragmentClicks).every((count) => count >= 2);
  const enoughInstability = candellaState.totalClicks >= 12;
  const enoughNotes = candellaState.notes.length >= 5;

  if (!allRevisited || !enoughInstability || !enoughNotes || candellaState.unlockedFinal) return;

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

  const underObserved = selected.some((fragmentId) => candellaState.fragmentClicks[fragmentId] < 2);

  if (underObserved) {
    setCandellaDialogue("Frog", "I don't think I've watched those long enough yet. I need a note before I trust it.");
    return;
  }

  const stableEvidence = selected.every((fragmentId) => candellaState.notes.includes(candellaFragments[fragmentId].note));
  const unstableEvidence = ["laughter_cart", "broken_wagon"].every((fragmentId) => candellaState.notes.includes(candellaFragments[fragmentId].note));

  if (!stableEvidence || !unstableEvidence) {
    setCandellaDialogue("Frog", "I need notes on what changed and what didn't. Guessing feels too much like the parade lying.");
    return;
  }

  const stableSelections = selected.filter((fragmentId) => candellaFragments[fragmentId].stable).length;

  if (stableSelections === 3) {
    candellaState.completed = true;
    recordInsight("identityPersistsThroughChange");
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
  const path = verdantState.attemptPath.join(">");

  if (sectionId === "anomaly") {
    verdantState.truthState.keyedByAnomaly = true;
    verdantState.sectionStates.overview.unlocked = true;
  }

  if (verdantState.attemptPath.length >= 2 || path.endsWith("anomaly>overview")) {
    verdantState.sectionStates.transit.unlocked = true;
  }

  if (verdantState.attemptPath.length >= 3 || path.endsWith("anomaly>overview>transit")) {
    verdantState.sectionStates.stationIndex.unlocked = true;
  }

  if (path.endsWith("anomaly>overview>transit")) {
    verdantState.truthState.coherentTransit = true;
  }

  if (path.endsWith("anomaly>overview>transit>stationIndex")) {
    verdantState.truthState.coherentIndex = true;
    if (!verdantState.confirmedOnce) {
      elements.routePanel.classList.remove("is-hidden");
    }
  }
}

function updateVerdantProgress(sectionId) {
  const expected = verdantCorrectPath[verdantState.validPathProgress];

  if (sectionId === expected) {
    verdantState.validPathProgress += 1;
    if (verdantState.confirmedOnce && verdantState.validPathProgress === 4) {
      verdantState.completed = true;
      recordInsight("truthRequiresBrokenSequence");
      elements.routePanel.classList.add("is-hidden");
      elements.continueButton.classList.remove("is-hidden");
      setDialogueText("Frog", "So the answer wasn't inside the document. It was the way through it.");
    }
    return;
  }

  verdantState.misreadCount += 1;
  verdantState.validPathProgress = sectionId === verdantCorrectPath[0] ? 1 : 0;
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
  if (storyState.phaseTwoActive && sectionId === "anomaly") {
    return {
      title: "Anomaly Log",
      body: "Observer fragments detected. They are not ghosts. They are partial alignments remembering the researchers incorrectly. Consensus is erasing the individual."
    };
  }

  const firstRead = verdantState.visited.filter((visitedId) => visitedId === sectionId).length === 1;
  const path = verdantState.attemptPath.join(">");
  const orderPosition = verdantCorrectPath.indexOf(sectionId);
  const onValidPath = path.endsWith("anomaly>overview>transit>stationIndex") || verdantState.validPathProgress > orderPosition;

  if (sectionId === "overview") {
    return {
      title: "System Overview",
      body: path.includes("anomaly>overview")
        ? "Overview revision accepted: Verdant Rail is not understood by starting with the map. The break names the shape; the system overview only becomes truthful after the anomaly."
        : firstRead
          ? "Premature overview: Verdant Rail appears to connect every settlement through one clean route. This page is too neat. It has not learned what broke."
          : "Overview warning: if this page comes before the anomaly, it invents consistency instead of finding it."
    };
  }

  if (sectionId === "anomaly") {
    return {
      title: "Anomaly Log",
      body: verdantState.visited[0] === "anomaly"
        ? "Anomaly seed accepted. Begin with the break, then read the system it damaged. The archive marks this as the first real rail."
        : "Anomaly log recovered late. It still explains the damage, but the earlier pages have already pretended to be whole."
    };
  }

  if (sectionId === "stationIndex") {
    return {
      title: "Station Index",
      body: path.endsWith("anomaly>overview>transit>stationIndex")
        ? "Final index stabilized: ROOT -> GLASS -> RAIN -> STAR. Harbor is visible because wrong readings scarred the archive, but it is not part of the living route."
        : "Station index opened too early: ROOT, HARBOR, GLASS, RAIN, STAR. Harbor looks consistent, which is exactly why it is dangerous."
    };
  }

  return {
    title: "Transit Behavior Report",
    body: onValidPath && path.includes("anomaly>overview>transit")
      ? "Transit behavior stabilized before station names were trusted. Movement resolves as ROOT, then GLASS, then RAIN, then STAR. Check the index last, not first."
      : "Transit report opened out of sequence: trains arrive before departure and depart after arrival. Harbor remains consistent. Consistency is not proof."
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
  const notes = [
    `Archive scars: ${Math.min(verdantState.misreadCount, 2)}/2 required.`,
    `Current path: ${verdantState.attemptPath.map((sectionId) => verdantSections[sectionId].alias).join(" -> ") || "none"}.`
  ];

  if (verdantState.visited.length === 0) {
    notes.push("First concrete task: test paths until the archive records two scars.");
    return notes;
  }

  if (verdantState.visited[0] === "anomaly") notes.push("The anomaly log wants to be first. It names the damage before the map can lie.");
  if (verdantState.attemptPath.join(">").includes("anomaly>overview")) notes.push("The overview became clearer only after the anomaly.");
  if (verdantState.truthState.coherentTransit) notes.push("Transit stabilized before the station index. Movement comes before names.");
  if (verdantState.truthState.coherentIndex) notes.push("The station index settled last, after the route was already moving.");
  if (verdantState.validPathProgress === 0 && verdantState.visited.length > 1) notes.push("This reading path bent the document out of shape. That failure is useful.");
  if (verdantState.misreadCount >= 2 && !verdantState.truthState.coherentIndex) notes.push("The true path is not left to right. Start with the page that admits something broke.");

  return notes.slice(-5);
}

function verdantStatusText() {
  if (verdantState.completed) return "Document state: synchronized";
  if (verdantState.truthState.coherentIndex) return "Document state: route phrase generated";
  if (verdantState.truthState.coherentTransit) return "Document state: transit stabilized";
  if (verdantState.truthState.keyedByAnomaly) return "Document state: anomaly key accepted";
  return `Document state: unresolved / scars ${verdantState.misreadCount}:2`;
}

function verdantFrogLine(sectionId) {
  if (verdantState.validPathProgress === 4) return "I think the document finally read itself in one direction.";
  if (sectionId === "overview") return "The overview only sounds honest after the anomaly. Otherwise it feels too clean.";
  if (sectionId === "anomaly") return "This is the page that admits something broke. Maybe that's why it has to come first.";
  if (sectionId === "stationIndex") return "The station names are the last thing I trust. Harbor keeps pretending it belongs.";
  return "The trains make more sense before the station list does. That's weird, but it tracks.";
}

function verdantKeeperHint() {
  if (verdantState.visited.length >= 10) return "Do not begin with the section that claims completion. Begin with the flaw.";
  if (verdantState.visited.length >= 6) return "The correct path is not the visible arrangement. Dependencies determine truth.";
  return "Consult the archive. The truth is in the order, not the layout.";
}

function handleRouteSubmit(event) {
  event.preventDefault();

  const submitted = elements.routeInput.value
    .toLowerCase()
    .split(/[^a-z]+/)
    .filter(Boolean)
    .map((word) => (word === "index" || word === "station" || word === "stations" ? "stationIndex" : word))
    .map((word) => (word === "behavior" || word === "report" ? "transit" : word))
    .map((word) => (word === "system" ? "overview" : word))
    .map((word) => (word === "log" ? "anomaly" : word));
  const compact = submitted.filter((word, index) => index === 0 || word !== submitted[index - 1]);
  const expected = verdantCorrectPath;
  const valid = expected.every((sectionId, index) => compact[index] === sectionId);

  if (!valid) {
    setDialogueText("Frog", "No... that order makes the same words, but not the same truth. I don't think this one is left to right.");
    return;
  }

  if (verdantState.misreadCount < 2) {
    setDialogueText("Frog", "I think we found a path too cleanly. The archive wants us to notice what goes wrong first.");
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
  recordInsight("truthRequiresBrokenSequence");
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
  glassState.shardModes[shardId] = (glassState.shardModes[shardId] + 1) % glassShards[shardId].readings.length;

  const reading = currentGlassReading(shardId);
  appendEchoLine(glassShards[shardId].label, `${reading.tag}: ${reading.text}`, reading.tag !== "Anchor");
  setDialogueText("Frog", glassFrogLine(shardId));
  renderGlassButtons();
  renderGlassStatus();
}

function currentGlassReading(shardId) {
  return glassShards[shardId].readings[glassState.shardModes[shardId]];
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

function renderGlassLog() {
  if (elements.echoLog.children.length === 0) {
    appendEchoLine("System", storyState.phaseTwoActive ? "ALERT: Mirror accord corrupted by consensus. Disagreement is failing." : "Cycle each shard. One reading will erase the contradiction, one will invert it, and one will let it survive.", false);
  }

  renderGlassButtons();
  renderGlassStatus();
}

function renderGlassStatus() {
  elements.glassStatus.textContent = glassKeeperLine();
}

function renderGlassButtons() {
  elements.shardButtons.forEach((button) => {
    const shardId = button.dataset.shard;
    const reading = currentGlassReading(shardId);
    const shard = glassShards[shardId];
    button.textContent = `${shard.label}: ${reading.tag}`;
    button.classList.toggle("is-active", glassState.shardClicks[shardId] > 0);
  });
}

function glassKeeperLine() {
  if (glassState.completed) return storyState.phaseTwoActive ? "The mirror is holding, but the frame is melting." : "Mirror accord complete. Contradiction remains contained.";
  if (glassState.failedHolds >= 2) return "Do not silence one side of the mirror. Preserve the contradiction.";
  if (glassState.corruptionLevel >= 6) return "The reflections are legible. Hold only what can survive disagreement.";
  if (glassState.corruptionLevel >= 3) return "One shard is an anchor. The others must learn to disagree without breaking.";
  return "Mirror accord unresolved.";
}

function glassFrogLine(shardId) {
  const reading = currentGlassReading(shardId);

  if (shardId === "room" && reading.tag === "Anchor") return "We are in Glasshollow. That part shouldn't become fancy. It just needs to stay true.";
  if (reading.tag === "Accord") return "That one feels better. It isn't choosing one side, but it isn't falling apart either.";
  if (reading.tag === "Reversal" || reading.tag === "Negation") return "That only flips the statement. It still traps us in one answer.";
  return "That sounds clean, but clean might be the problem here.";
}

function handleMirrorSubmit() {
  if (glassState.completed) return;

  const allObserved = Object.values(glassState.shardClicks).every((count) => count > 0);
  if (!allObserved) {
    setDialogueText("Frog", "I need to look into every shard before I trust the mirror.");
    return;
  }

  const correct = Object.keys(glassShards).every((shardId) => {
    return glassState.shardModes[shardId] === glassShards[shardId].correct;
  });

  if (!correct) {
    glassState.failedHolds += 1;
    appendEchoLine("Mirror", glassFailureLine(), true);
    renderGlassStatus();
    setDialogueText("Frog", glassHoldFailureDialogue());
    return;
  }

  glassState.completed = true;
  recordInsight("contradictionCanRemainTrue");
  appendEchoLine("Mirror", "Accord held: one place remains named; the other reflections survive by disagreeing.", false);
  renderGlassStatus();
  elements.continueButton.classList.remove("is-hidden");
  maybeResearcherInterrupt("glass");
  setDialogueText("Time Keeper", "Mirror accord complete. Proceeding to containment phase.");
}

function glassFailureLine() {
  if (glassState.shardModes.room !== glassShards.room.correct) return "The room lost its name. Without an anchor, every reflection becomes noise.";
  return "A reflection was forced to choose one side. The mirror rejects perfect agreement.";
}

function glassHoldFailureDialogue() {
  if (glassState.shardModes.room !== glassShards.room.correct) return "Glasshollow has to stay Glasshollow. That's the anchor.";
  if (glassState.failedHolds >= 2) return "Safety, memory, and me... I think those have to hold both versions at once.";
  return "Something in there is too absolute. It either denies the fear or denies the comfort.";
}

function handleStallClick(itemId) {
  if (rainState.completed) return;

  prepareAudioForInteraction();
  playFragmentTone(itemId);
  rainState.activeItem = itemId;
  renderRainMarket(itemId);
  setDialogueText("Frog", "This one has a price, but I don't know yet whether to keep it or trade it.");
}

function resolveMeaningChoice(choice) {
  if (rainState.completed) return;

  if (!rainState.activeItem) {
    setDialogueText("Frog", "I need to inspect a stall before I can decide what it means.");
    return;
  }

  const itemId = rainState.activeItem;

  prepareAudioForInteraction();
  rainState.tradeHistory.push(`${choice}:${itemId}`);
  rainState.globalDriftLevel += 1;
  rainState.items[itemId].drift += 1;
  rainState.evidence[itemId][choice] += 1;

  Object.keys(rainState.items).forEach((key) => {
    if (key !== itemId && !rainState.items[key].stable) {
      rainState.items[key].drift += rainState.globalDriftLevel % 2;
    }
  });

  renderRainMarket(itemId);
  setDialogueText("Frog", choice === "keep" ? rainKeepLine(itemId) : rainTradeLine(itemId));
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

  renderMarketLedger();
}

function renderMarketLedger() {
  elements.marketLedger.innerHTML = "";

  const intro = document.createElement("li");
  intro.textContent = `Goal: test all six concepts, then select exactly three survivors. Decisions: ${rainState.globalDriftLevel}/10.`;
  elements.marketLedger.append(intro);

  Object.keys(rainState.items).forEach((itemId) => {
    const evidence = rainState.evidence[itemId];
    const item = document.createElement("li");
    item.textContent = `${rainStallLabel(itemId, rainState.items[itemId].drift)}: kept ${evidence.keep}, traded ${evidence.trade}, drift ${rainState.items[itemId].drift}`;
    elements.marketLedger.append(item);
  });
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

function rainKeepLine(itemId) {
  if (rainState.items[itemId].stable) return "Keeping it doesn't freeze it. It just shows what feeling keeps returning.";
  return "When I keep this, it starts pretending harder.";
}

function rainTradeLine(itemId) {
  if (rainState.items[itemId].stable) return "Trading it changes the label, but the feeling comes back.";
  return "Trading this makes the disguise easier to see.";
}

function rainKeeperLine() {
  if (storyState.phaseTwoActive) return "Value drift has become observer drift. The market is remembering the price of silence.";
  if (rainState.globalDriftLevel >= 10) return "Do not assign permanence to meaning.";
  if (rainState.globalDriftLevel >= 5) return "Value drift is within expected range.";
  return "Exchange will stabilize perception.";
}

function maybeCompleteRain() {
  const stableTouched = ["path", "certainty", "repetition"].every((itemId) => {
    return rainState.evidence[itemId].keep >= 1 && rainState.evidence[itemId].trade >= 1 && rainState.items[itemId].drift >= 2;
  });
  const marketFullySampled = Object.values(rainState.items).every((item) => item.drift >= 1);
  const unstableExposed = ["beginning", "sound", "shelter"].every((itemId) => rainState.evidence[itemId].trade >= 1);

  if (rainState.globalDriftLevel < 10 || !stableTouched || !marketFullySampled || !unstableExposed || rainState.unlockedFinal) return;

  rainState.unlockedFinal = true;
  elements.meaningPanel.classList.remove("is-hidden");
  setDialogueText("Frog", "The market is ready. Now we name the three meanings that kept their emotional shape.");
}

function handleMeaningSubmit(event) {
  event.preventDefault();

  if (rainState.completed) return;

  const selected = Array.from(elements.meaningPanel.querySelectorAll("input:checked")).map((input) => input.value);

  if (selected.length !== 3) {
    setDialogueText("Frog", "It feels like exactly three meanings survived the trades.");
    return;
  }

  const stableSelections = selected.filter((itemId) => rainState.items[itemId].stable).length;

  if (stableSelections === 3) {
    rainState.completed = true;
    recordInsight("meaningSurvivesDrift");
    elements.meaningPanel.classList.add("is-hidden");
    elements.continueButton.classList.remove("is-hidden");
    maybeResearcherInterrupt("rain");
    setDialogueText("Time Keeper", "Good. Meaning survived because it was allowed to drift.");
    return;
  }

  if (stableSelections >= 2) {
    setDialogueText("Frog", "Almost. One of those changed what it was pretending to be.");
    return;
  }

  setDialogueText("Frog", "No... those labels moved too much. I need the feelings that came back after both choices.");
}

function handleGateSubmit(event) {
  event.preventDefault();

  if (gateState.completed) return;

  const form = new FormData(elements.gateForm);
  gateState.locks.candella = form.get("candella");
  gateState.locks.rail = form.get("rail");
  gateState.locks.echo = form.get("echo");
  gateState.locks.memory = form.get("memory");
  const witness = normalizeWitnessPhrase(form.get("witness") || "");
  gateState.attempts += 1;
  gateState.contradictionScore = calculateGateContradictionScore();
  renderGateStatus();

  if (Object.values(gateState.locks).some((value) => !value)) {
    setDialogueText("Frog", "The gate isn\'t hearing all four systems yet. Every lock must be set."); // More explicit hint
    return;
  }

  if (isFullyConsistentGate()) {
    setDialogueText("Frog", "I thought everything had to make sense... but this is too clean. It won\'t hold.");
    return;
  }

  if (!isWitnessPhraseValid(witness)) {
    setDialogueText("Frog", "The locks are only half of it. The gate wants what survived written back to it.");
    return;
  }

  if (!hasPhaseOneUnderstanding()) {
    setDialogueText("Frog", "We know the settings, but not what they mean yet. The gate is waiting for us to understand the worlds, not just repeat them.");
    return;
  }

  if (isGateSolution()) {
    gateState.completed = true;
    recordInsight("paradoxCanHoldTogether");
    gateState.alignmentState = "paradox satisfied";
    elements.continueButton.classList.remove("is-hidden");
    elements.game.classList.add("is-corrupt");
    renderGateStatus();
    setDialogueText("Time Keeper", "Good. ...you learned the system.");
    window.setTimeout(() => {
      activatePhaseTwoFragments();
    }, 1600);
    return;
  }

  if (gateState.contradictionScore >= 3) {
    gateState.nearMisses += 1;
    setDialogueText("Time Keeper", "One lock is still translating the wrong lesson. Do not attempt full consistency.");
    return;
  }

  setDialogueText("Frog", "This is broken, but not in the right shape. Each lock has to echo one world we already understood.");
}

function calculateGateContradictionScore() {
  let score = 0;

  if (gateState.locks.candella === "stable_inside_drift") score += 1;
  if (gateState.locks.rail === "wrong_station") score += 1;
  if (gateState.locks.echo === "accepted_contradiction") score += 1;
  if (gateState.locks.memory === "drifting") score += 1;

  // Remove the condition that resets score if fully consistent, to make it harder to accidentally get a high score
  // if (isFullyConsistentGate()) score = 0;

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
  const labels = ["unresolved", "bending", "fractured", "nearly holding", "paradox-ready"];
  elements.gateStatus.textContent = `Alignment state: ${gateState.alignmentState} / ${labels[gateState.contradictionScore]}`;
}

function normalizeWitnessPhrase(value) {
  return value.toLowerCase().replace(/[^a-z]+/g, " ").trim();
}

function isWitnessPhraseValid(value) {
  const required = ["start", "path", "glasshollow", "drift"];
  return required.every((word) => value.includes(word));
}

function gateKeeperLine() {
  if (gateState.completed) return "Alignment complete.";
  if (gateState.contradictionScore >= 3) return "You are translating the fragments correctly. Do not attempt full consistency.";
  return "You are approaching final alignment. Translate each world, then write what survived.";
}

function resetCurrentPuzzle() {
  const scene = currentScene();

  if (!isPuzzleScene(scene)) return;

  if (scene.type === "candellaPuzzle") {
    resetCandellaPuzzle();
    showCandellaPuzzle();
    setCandellaDialogue("Frog", "Okay. Fresh look. We need five notes, then exactly three fragments that keep their role.");
    return;
  }

  if (scene.type === "verdantPuzzle") {
    resetVerdantPuzzle();
    showVerdantPuzzle();
    setDialogueText("Frog", "Reset. The archive still wants two scars, then the reading path that stabilizes it.");
    return;
  }

  if (scene.type === "glassPuzzle") {
    resetGlassPuzzle();
    showGlassPuzzle();
    setDialogueText("Frog", "Reset. One shard needs to stay an anchor. The others need to hold contradiction.");
    return;
  }

  if (scene.type === "rainPuzzle") {
    resetRainPuzzle();
    showRainPuzzle();
    setDialogueText("Frog", "Reset. Test the concepts, watch the ledger, then name the three survivors.");
    return;
  }

  if (scene.type === "finalGatePuzzle") {
    resetFinalGatePuzzle();
    showFinalGatePuzzle();
    setDialogueText("Frog", "Reset. Four locks, four surviving words. No perfect consistency.");
    return;
  }

  if (scene.type === "researcherArchive") {
    resetResearcherArchive();
    showResearcherArchive();
    setDialogueText("Frog", "Reset. The files still disagree. That's where the human parts are.");
    return;
  }

  if (scene.type === "spectrogramPuzzle") { // NEW
    state.completed = false;
    elements.spectrogramInput.value = "";
    elements.continueButton.classList.add("is-hidden");
    setDialogueText("Frog", "Reset. The signal is still there. Listen closely.");
    return;
  }

  if (scene.type === "finalSeal") {
    resetFinalSeal();
    showFinalSeal();
    setDialogueText("Frog", "Reset. It's still my choice. And yours.");
    return;
  }

  state.completed = false;
  showPuzzleScene();
}

function resetCandellaPuzzle() {
  candellaState.totalClicks = 0;
  candellaState.clickHistory = [];
  candellaState.fragmentClicks = {
    candy_gate: 0,
    confetti_bridge: 0,
    laughter_cart: 0,
    final_arch: 0,
    broken_wagon: 0
  };
  candellaState.unlockedFinal = false;
  candellaState.clickOrderIndex = {};
  candellaState.lastClickedFragment = "";
  candellaState.completed = false;
  candellaState.keeperHintLevel = 0;
  candellaState.notes = [];
  storyState.insights.identityPersistsThroughChange = false;
  elements.fragmentButtons.forEach((button) => button.classList.remove("has-shifted"));
  elements.stabilityPanel.reset();
  elements.stabilityPanel.classList.add("is-hidden");
  elements.continueButton.classList.add("is-hidden");
  renderMemoryNotes();
}

function resetVerdantPuzzle() {
  verdantState.visited = [];
  verdantState.attemptPath = [];
  verdantState.validPathProgress = 0;
  verdantState.confirmedOnce = false;
  verdantState.completed = false;
  verdantState.misreadCount = 0;
  verdantState.sectionStates = {
    overview: { unlocked: true },
    anomaly: { unlocked: true },
    stationIndex: { unlocked: false },
    transit: { unlocked: false }
  };
  verdantState.truthState = {
    keyedByAnomaly: false,
    coherentIndex: false,
    coherentTransit: false
  };
  storyState.insights.truthRequiresBrokenSequence = false;
  elements.routeInput.value = "";
  elements.routePanel.classList.add("is-hidden");
  elements.archivePage.innerHTML = '<p class="archive-title">Select a section.</p><p class="archive-body">The rail archive is waiting for a reading path.</p>';
  elements.continueButton.classList.add("is-hidden");
  renderVerdantInterface();
}

function resetGlassPuzzle() {
  glassState.actions = [];
  glassState.corruptionLevel = 0;
  glassState.shardClicks = {
    room: 0,
    safe: 0,
    memory: 0,
    frog: 0
  };
  glassState.shardModes = {
    room: 0,
    safe: 0,
    memory: 0,
    frog: 0
  };
  glassState.failedHolds = 0;
  glassState.completed = false;
  storyState.insights.contradictionCanRemainTrue = false;
  elements.echoLog.innerHTML = "";
  elements.continueButton.classList.add("is-hidden");
  renderGlassLog();
}

function resetRainPuzzle() {
  rainState.items = {
    beginning: { drift: 0, stable: false },
    sound: { drift: 0, stable: false },
    path: { drift: 0, stable: true },
    certainty: { drift: 0, stable: true },
    repetition: { drift: 0, stable: true },
    shelter: { drift: 0, stable: false }
  };
  rainState.tradeHistory = [];
  rainState.globalDriftLevel = 0;
  rainState.activeItem = "";
  rainState.unlockedFinal = false;
  rainState.evidence = {
    path: { keep: 0, trade: 0 },
    certainty: { keep: 0, trade: 0 },
    repetition: { keep: 0, trade: 0 },
    beginning: { keep: 0, trade: 0 },
    sound: { keep: 0, trade: 0 },
    shelter: { keep: 0, trade: 0 }
  };
  rainState.completed = false;
  storyState.insights.meaningSurvivesDrift = false;
  elements.meaningPanel.reset();
  elements.meaningPanel.classList.add("is-hidden");
  elements.marketCard.textContent = "Choose a stall. Meanings are priced after inspection.";
  elements.continueButton.classList.add("is-hidden");
  renderRainMarket();
}

function resetFinalGatePuzzle() {
  gateState.locks = {
    candella: null,
    rail: null,
    echo: null,
    memory: null
  };
  gateState.contradictionScore = 0;
  gateState.alignmentState = "unstable";
  gateState.attempts = 0;
  gateState.nearMisses = 0;
  gateState.completed = false;
  storyState.insights.paradoxCanHoldTogether = false;
  storyState.phaseTwoActive = false;
  elements.game.classList.remove("is-corrupt", "is-phase-two");
  elements.gateForm.reset();
  elements.continueButton.classList.add("is-hidden");
  renderGateStatus();
}

function resetResearcherArchive() {
  researcherArchiveState.opened = [];
  researcherArchiveState.completed = false;
  elements.archiveThesis.value = "";
  elements.filePage.innerHTML = '<p class="archive-title">Select a contaminated record.</p><p class="archive-body">The archive does not have an original version. It has surviving disagreements.</p>';
  elements.continueButton.classList.add("is-hidden");
  renderResearcherArchive();
}

function resetFinalSeal() {
  finalSealState.prepared = false;
  finalSealState.completed = false;
  elements.sealForm.reset();
  elements.activateSeal.classList.add("is-hidden"); // Ensure it's hidden on reset
  elements.continueButton.classList.add("is-hidden");
  elements.game.classList.remove("is-still");
  renderFinalSeal();
}

function resetExperienceState() {
  state.lineIndex = 0;
  state.completed = false;
  storyState.phase = 1;
  storyState.phaseTwoActive = false;
  storyState.researcherSeen = [];
  storyState.finalSealUnlocked = false;
  storyState.insights = {
    identityPersistsThroughChange: false,
    truthRequiresBrokenSequence: false,
    contradictionCanRemainTrue: false,
    meaningSurvivesDrift: false,
    paradoxCanHoldTogether: false
  };

  resetCandellaPuzzle();
  resetVerdantPuzzle();
  resetGlassPuzzle();
  resetRainPuzzle();
  resetFinalGatePuzzle();
  resetResearcherArchive();
  resetFinalSeal();
  hideSpectrogramPuzzle();

  if (elements.spectrogramInput) elements.spectrogramInput.value = "";
  elements.researcherFragment.classList.add("is-hidden");
  elements.game.classList.remove(
    "is-corrupt",
    "is-phase-two",
    "is-still",
    "is-blackout",
    "is-flashing",
    "is-shaking",
    "is-spectrogram",
    "is-archive",
    "is-seal"
  );
}

function showPuzzleScene() {
  updateResetButtonVisibility();
  hideCandellaPuzzle();
  hideVerdantPuzzle();
  hideGlassPuzzle();
  hideRainPuzzle();
  hideFinalGatePuzzle();
  hideResearcherArchive();
  hideSpectrogramPuzzle(); // NEW
  hideFinalSeal();
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

    if (storyState.phaseTwoActive) {
      setDialogueText("Frog", "The stars are folding inward. I don't think I'm moving them anymore. I think they're coming to me.");
    }

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
  hideResearcherArchive();
  hideFinalSeal();
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

  if (scene.type === "researcherArchive") {
    showResearcherArchive();
    return;
  }

  if (scene.type === "spectrogramPuzzle") { // NEW
    showSpectrogramPuzzle();
    return;
  }

  if (scene.type === "finalSeal") {
    showFinalSeal();
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

  if (scene.type === "researcherArchive") {
    if (researcherArchiveState.completed) completePuzzle();
    return;
  }

  if (scene.type === "finalSeal") {
    if (finalSealState.completed) completePuzzle();
    return;
  }

  if (scene.type === "spectrogramPuzzle") {
    if (state.completed) completePuzzle();
    return;
  }

  if (scene.type === "puzzle") {
    if (state.completed) completePuzzle();
    return;
  }

  state.lineIndex += 1;

  if (state.lineIndex < scene.dialogue.length) {
    showDialogueLine();
    return;
  }

  if (scene.title === "The Sky Closed" && finalSealState.prepared && !finalSealState.completed) {
    state.sceneIndex = scenes.findIndex((candidate) => candidate.type === "finalSeal");
    state.lineIndex = 0;
    loadScene();
    setDialogueText("Frog", "It's time. You have to be the one to activate the seal.");
    return;
  }

  if (scene.title === "Containment Choice") {
    storyState.finalSealUnlocked = true;
  }

  state.sceneIndex += 1;

  if (state.sceneIndex >= scenes.length) {
    resetExperienceState();
    state.sceneIndex = 0;
  }

  loadScene();
}

function completePuzzle() {
  state.sceneIndex += 1;
  state.completed = false;

  if (state.sceneIndex >= scenes.length) {
    resetExperienceState();
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
elements.resetButton.addEventListener("click", resetCurrentPuzzle);
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
elements.mirrorSubmit.addEventListener("click", handleMirrorSubmit);
elements.stallButtons.forEach((button) => {
  button.addEventListener("click", () => handleStallClick(button.dataset.item));
});
elements.keepMeaning.addEventListener("click", () => resolveMeaningChoice("keep"));
elements.tradeMeaning.addEventListener("click", () => resolveMeaningChoice("trade"));
elements.meaningPanel.addEventListener("submit", handleMeaningSubmit);
elements.gateForm.addEventListener("submit", handleGateSubmit);
elements.archiveForm.addEventListener("submit", handleArchiveSubmit);
elements.sealForm.addEventListener("submit", handleSealPrepare);
const spectrogramForm = document.querySelector("#spectrogramForm");
if (spectrogramForm) spectrogramForm.addEventListener("submit", handleSpectrogramSubmit);
elements.activateSeal.addEventListener("click", handleSealActivation);

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
