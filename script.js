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
  puzzleScene("Candella", "Restore the Harmony Parade order.", B.candella, tracks.warm),
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
  puzzleScene("Verdant Rail", "Reconnect train routes.", B.verdantRail, tracks.warm),
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
  puzzleScene("Glasshollow", "Reflect light through mirrors.", B.glasshollow, tracks.mystery),
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
  puzzleScene("Rain Market", "Reconnect lantern circuits.", B.rainMarket, tracks.warm),
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
  puzzleScene("Final Gate", "Activate the final seal.", B.finalGate, tracks.final),
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
  spriteSwapId: 0
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
  stage: document.querySelector(".stage")
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

  elements.puzzlePanel.classList.add("is-hidden");
  elements.dialogueBox.classList.remove("is-hidden");
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
    completePuzzle();
  } else {
    advanceDialogue();
  }
}

function handleBackInput() {
  prepareAudioForInteraction();

  if (currentScene().type === "puzzle") {
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

function showPuzzleScene() {
  clearEffects();
  elements.dialogueBox.classList.add("is-hidden");
  elements.sprite.classList.remove("is-visible");
  elements.puzzleKicker.textContent = "Puzzle Placeholder";
  elements.puzzleLabel.textContent = currentScene().prompt;
  elements.puzzlePanel.classList.remove("is-hidden");
}

function loadScene() {
  const scene = currentScene();

  clearEffects();
  setBackground(scene.background);
  setMusic(scene.music);

  if (scene.type === "puzzle") {
    showPuzzleScene();
    return;
  }

  state.lineIndex = 0;
  showDialogueLine();
}

function advanceDialogue() {
  const scene = currentScene();

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
elements.completePuzzle.addEventListener("click", () => {
  prepareAudioForInteraction();
  completePuzzle();
});
elements.audioToggle.addEventListener("click", toggleAudio);

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
