
function getCurrentSubdomain() {
    const parsedUrl = new URL(window.location.href);
    const hostname = parsedUrl.hostname;
    const parts = hostname.split('.');
    if (parts.length > 2) {
        return parts.slice(0, -2).join('.');
    } else if (parts.length === 2) {
        return null;
    } else {
        return null;
    }
}
const currentSubdomain = getCurrentSubdomain();
const hackercon = document.createElement('div');
hackercon.id = "hackercon";
hackercon.classList.add("hidden");
const showButton = document.createElement('button');
    showButton.style.float = "right";
    showButton.style.marginTop = "50px";
    showButton.classList.add("Transparent");
    showButton.onclick = function() {
        hackercon.classList.remove("hidden");
        showButton.classList.add("hidden");
        hackercon.style.display = "block";
    };
    const span = document.createElement('span');
    span.textContent = 'menu';
    span.classList.add('material-symbols-outlined');
    function closeHackerMenu() {
        hackercon.classList.add("hidden");
        showButton.classList.remove("hidden");
        hackercon.style.display = "none";
    }
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
    const style = document.createElement('style');
    style.textContent = `
        #hackercon.hidden {
            display: none;
        }
        .hidden {
            display: none;
        }
        #hackercon {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.5); 
            z-index: 9999; 
            padding: 20px;
            text-align: center;
        }
        button,
        input[type=password],
        input[type=text],
        #searchInput {
            background-color: #000000;
            border: 1px solid #555555;
            color: #ffffff;
            border-radius: 5px;
            padding: 10px;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
        }

        button:hover {
            transform: scale(1.1);
            background-color: #555555;
            border: 1px solid #ffffff;
            color: #ffffff;
            box-shadow: 4px 4px 10px rgba(250, 250, 250, 0.5);
        }
        .Tranparnt{
            background-color: rgba(0, 0, 0, 0.5);
        }
    `;
if (currentSubdomain === "goldquest") {
    hackercon.innerHTML = `<h1>Welcome to the hacker menu for gold quest</h1><button id="closeButton" style = "flote: right;" class="closeButton" onclick="closeHackerMenu()"><span class="material-symbols-outlined">close</span></button>
        <br>
        <br>
        <button class="hackerbut" onclick="triplegold()">Set prizes to triple gold</button>
        <br>
        <br>
        <button class="hackerbut" onclick="goldamount()">Set your gold amount</button>
        <br>
        <br>
        <button class="hackerbut" onclick="swap()">Swap with someone</button>
        <br>
        <br>
        <button class="hackerbut" onclick="showans()">Shows the crect anser</button>
        `;

}else if(currentSubdomain === "fishingfrenzy") {
    hackercon.innerHTML = `<h1>Welcome to the hacker menu for fishing frenzy</h1><button id="closeButton" style = "flote: right;" class="closeButton" onclick="closeHackerMenu()"><span class="material-symbols-outlined">close</span></button>
        <br>
        <br>
        <button class="hackerbut" onclick="frensy()">Start a frenzy</button>
        <br>
        <br>
        <button class="hackerbut" onclick="destract()">Send destractions</button>
        <br>
        <br>
        <button class="hackerbut" onclick="wate()">Change your wate</button>
        <br>
        <br>
        <button class="hackerbut" onclick="removede()">Remove distractions</button>
        <br>
        <br>
        <button class="hackerbut" onclick="setscale()">Set fishing lure (range 1 - 5)</button>
        <br>
        <br>
        <button class="hackerbut" onclick="showans()">Shows the crect anser</button>

        `;

}else if(currentSubdomain === "cryptohack"){
    hackercon.innerHTML = `<h1>Welcome to the hacker menu for crypto hack</h1><button id="closeButton" style = "flote: right;" class="closeButton" onclick="closeHackerMenu()"><span class="material-symbols-outlined">close</span></button>
        <br>
        <br>
        <button class="hackerbut" onclick="triplec()">Set the boxs to triple</button>
        <br>
        <br>
        <button class="hackerbut" onclick="chagepass()">Change password</button>
        <br>
        <br>
        <button class="hackerbut" onclick="showpass()">Show right password</button>
        <br>
        <br>
        <button class="hackerbut" onclick="showans()">Shows the crect anser</button>
        `;

}else if(currentSubdomain == "deceptivedinos"){
    hackercon.innerHTML = `<h1>Welcome to the hacker menu for deceptive dinos</h1><button id="closeButton" style = "flote: right;" class="closeButton" onclick="closeHackerMenu()"><span class="material-symbols-outlined">close</span></button>
        <br>
        <br>
        <button class="hackerbut" onclick="clercheet()">Clear your cheating</button>
        <br>
        <br>
        <button class="hackerbut" onclick="showrock()">Show whats under rock</button>
        <br>
        <br>
        <button class="hackerbut" onclick="setfos()">Set your fosles</button>
        <br>
        <br>
        <button class="hackerbut" onclick="showans()">Shows the crect anser</button>
        `;

}else if(currentSubdomain == "battleroyale"){
    hackercon.innerHTML = `<h1>Welcome to the hacker menu for battle royale</h1><button id="closeButton" style = "flote: right;" class="closeButton" onclick="closeHackerMenu()"><span class="material-symbols-outlined">close</span></button>
        <br>
        <br>
        <button class="hackerbut" onclick="aouto()">Atow anser</button>
        `;

}else if(currentSubdomain == "cafe"){
    hackercon.innerHTML = `<h1>Welcome to the hacker menu for cafe </h1><button id="closeButton" style = "flote: right;" class="closeButton" onclick="closeHackerMenu()"><span class="material-symbols-outlined">close</span></button>
        <br>
        <br>
        <button class="hackerbut" onclick="getallstuff()">Get everthing</button>
        <br>
        <br>
        <button class="hackerbut" onclick="resetabittlys()">Rest abilitys</button>
        <br>
        <br>
        <button class="hackerbut" onclick="setchash()">Set cash</button>
        <br>
        <br>
        <button class="hackerbut" onclick="food99()">Set food to 99</button>
        <br>
        <br>
        <button class="hackerbut" onclick="showans()">Shows the crect anser</button>

        `;

}else if(currentSubdomain == "towerdefense2"){
    hackercon.innerHTML = `<h1>Welcome to the hacker menu for cafe </h1><button id="closeButton" style = "flote: right;" class="closeButton" onclick="closeHackerMenu()"><span class="material-symbols-outlined">close</span></button>
        <br>
        <br>
        <button class="hackerbut" onclick="max()">Max towers</button>
        <br>
        <br>
        <button class="hackerbut" onclick="coins()">Set coins</button>
        <br>
        <br>
        <button class="hackerbut" onclick="heath()">Set heath</button>
        <br>
        <br>
        <button class="hackerbut" onclick="round()">Set what round it is</button>
        <br>
        <br>
        <button class="hackerbut" onclick="showans()">Shows the crect anser</button>

        `;

}else{
    hackercon.innerHTML = `<h1>Sorry we do not have hacks for this game</h1>
    <br>
    <button id="closeButton" style = "flote: right;" class="closeButton" onclick="closeHackerMenu()"><span class="material-symbols-outlined">close</span></button>
    <p>You can try this it motly works on all of the games</p>
    <br>
    <button class="hackerbut" onclick="showans()">Shows the crect anser</button>`;
}
showButton.appendChild(span);
document.body.appendChild(showButton);
document.head.appendChild(link);
document.body.appendChild(hackercon);
document.head.appendChild(style);



//gold
let stopTripleGold = false;
const stopTripleGoldFunction = () => {
    stopTripleGold = true;
}
const triplegold = async () => {
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.state.gold == 0 && stateNode.setState({ gold: 100, gold2: 100 });
    stateNode._choosePrize ||= stateNode.choosePrize;
    stateNode.choosePrize = function (i) {
        if (!stopTripleGold) {
            stateNode.state.choices[i] = { type: "multiply", val: 3, text: "Triple Gold!", blook: "Unicorn" };
            stateNode._choosePrize(i);
        }
    }
    closeHackerMenu();
};


const goldamount = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    let gold = Number(parseInt(prompt("How much gold would you like?")));
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.setState({ gold, gold2: gold });
    stateNode.props.liveGameController.setVal({
        path: "c/".concat(stateNode.props.client.name),
        val: {
            b: stateNode.props.client.blook,
            g: gold
        }
    });
    closeHackerMenu();
});
const swap = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.props.liveGameController.getDatabaseVal("c", (players) => {
        stateNode.setState({
            players: (players ? Object.entries(players).map(([name, { b, g }]) => ({
                name, blook: b, gold: g || 0
            })).filter((e) => e.name != stateNode.props.client.name).sort(({ gold }, { gold: gold2 }) => gold2 - gold) : []),
            ready: true,
            phaseTwo: true,
            stage: "prize",
            choiceObj: { type: "swap" }
        });
    });
    closeHackerMenu();
});
//fish
const frensy = (async () => {
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            w: stateNode.state.weight,
            f: "Frenzy",
            s: true
        }
    })
    closeHackerMenu();
});
const destract = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.alert.bind(window);
    i.remove();
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    const f = ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)];
    stateNode.safe = true;
    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            w: stateNode.state.weight, f, s: true
        }
    });
    alert(`Sent a ${f} distraction`);
    closeHackerMenu();
});
const wate  = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    let weight = Number(parseInt(prompt("How much weight would you like?")));
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.setState({ weight, weight2: weight });
    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            w: weight,
            f: ["Crab", "Jellyfish", "Frog", "Pufferfish", "Octopus", "Narwhal", "Megalodon", "Blobfish", "Baby Shark"][Math.floor(Math.random() * 9)]
        }
    });
    closeHackerMenu();
});
const removede = (async () => {
    Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ party: "" });
    closeHackerMenu();
});
const setscale = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ lure: Math.max(Math.min(Number(parseInt(prompt("What would you like to set your lure to? (1 - 5)"))) - 1, 4), 0) });
    closeHackerMenu();
});

// cripto
const triplec = (async () => {
    setInterval(() => Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ choices: [{ type: "mult", val: 3, rate: .075, blook: "Brainy Bot", text: "Triple Crypto" }] }), 25);
    closeHackerMenu();
});

const chagepass = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    let password = prompt("What do you want to set your password to?");
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.setState({ password });
    stateNode.props.liveGameController.setVal({
        path: "c/".concat(stateNode.props.client.name),
        val: {
            b: stateNode.props.client.blook,
            p: password,
            cr: stateNode.state.crypto
        }
    });
    closeHackerMenu();
});
const showpass = async () => {
    setInterval(function() {
        let { state } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode;
        if (state.stage == "hack") {
            const buttonContainer = document.querySelector('div[class^=_buttonContainer_mrhfb_157]');
            const buttons = buttonContainer.children;
            for (let i = 0; i < buttons.length; i++) {
                const button = buttons[i];
                if (button.innerText !== state.correctPassword) {
                    button.style.outlineColor = "rgba(255, 64, 64, 0.8)";
                    button.style.backgroundColor = "rgba(255, 64, 64, 0.8)";
                    button.style.textShadow = "0 0 1px #f33";
                }
            }
        }
    }, 1000);
    closeHackerMenu();
};
// BAtial 

const aouto = (async () => {
    setInterval(function (){
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode?.onAnswer?.(true, stateNode.props.client.question.correctAnswers[0]);
    }, 100)
    closeHackerMenu();
});

// dino

const clercheet = (async () => {
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.setState({ isCheating: false });
    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}/ic`,
        val: false
    });
    closeHackerMenu();
});
const showrock = (async () => {
    setInterval(function (){
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        const rocks = [...document.querySelector('[class*="rockButton"]').parentElement.children];
        if (!rocks.every(element => element.querySelector('div'))) stateNode.setState({
            choices: [{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }].sort(() => 0.5 - Math.random()).slice(0, 3)
        }, () => {
            rocks.forEach((element, index) => {
                const rock = stateNode.state.choices[index];
                if (element.querySelector('div')) element.querySelector('div').remove();
                const choice = document.createElement("div");
                choice.style.color = "white";
                choice.style.fontFamily = "Macondo";
                choice.style.fontSize = "1em";
                choice.style.display = "flex";
                choice.style.justifyContent = "center";
                choice.style.transform = "translateY(25px)";
                choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? Object.values(webpack('74sb')).find(x => x.toString().includes('\xd7'))(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                element.append(choice);
            });
        });
    }, 100)
    closeHackerMenu();
})

const setfos = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    let fossils = Number(parseInt(prompt("How many fossils would you like?")));
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.setState({ fossils });
    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            f: fossils,
            ic: stateNode.state.isCheating
        }
    });
    closeHackerMenu();
})

// cafe

const getallstuff = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.alert.bind(window);
    i.remove();
    if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
    else {
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.setState({ items: Object.fromEntries(Object.entries(stateNode.state.items).map(x => [x[0], 5])) });
    }
    closeHackerMenu();
});

const resetabittlys = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.alert.bind(window);
    i.remove();
    if (window.location.pathname !== "/cafe/shop") alert("This can only be run in the shop");
    else {
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.setState({ abilities: Object.fromEntries(Object.entries(stateNode.state.abilities).map(x => [x[0], 5])) });
    }
    closeHackerMenu();
});

const setchash = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    let cafeCash = Number(parseInt(prompt("How much cash would you like?")));
    let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
    stateNode.setState({ cafeCash });
    stateNode.props.liveGameController.setVal({
        path: `c/${stateNode.props.client.name}`,
        val: {
            b: stateNode.props.client.blook,
            ca: cafeCash
        }
    });
    closeHackerMenu();
});

const food99 = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.alert.bind(window);
    i.remove();
    if (window.location.pathname !== "/cafe") alert("This can't be run in the shop");
    else {
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        stateNode.setState({ foods: stateNode.state.foods.map(e => ({ ...e, stock: 99, level: 5 })) });
    }
    closeHackerMenu();
});

// all
const showans = (async () => {
    setInterval(function(){
        const { stateNode: { state, props } } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        const answerContainers = document.querySelectorAll(`[class*="answerContainer"]`);
        const question = state.question || props.client.question;
        const correctAnswers = question.correctAnswers;
        const answers = question.answers;

        for (let i = 0; i < answerContainers.length; i++) {
            const answer = answerContainers[i];
            const currentAnswer = answers[i];

            if (correctAnswers.includes(currentAnswer)) {
                answer.style.backgroundColor = "rgb(0, 207, 119)";
            } else {
                answer.style.backgroundColor = "rgb(189, 15, 38)";
            }
        }
    })
    closeHackerMenu();
});

// tower 2

const max = (async () => {
    Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.towers.forEach(tower => {
        tower.stats.dmg = 1e6;
        tower.stats.fireRate = 50;
        tower.stats.ghostDetect = true;
        tower.stats.maxTargets = 1e6;
        tower.stats.numProjectiles &&= 100;
        tower.stats.range = 100;
        if (tower.stats.auraBuffs) for (const buff in tower.stats.auraBuffs) tower.stats.auraBuffs[buff] *= 100;
    });
    closeHackerMenu();
});

const coins = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ coins: Number(parseInt(prompt("How many tokens would you like?"))) })
});

const heath = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ health: Number(parseInt(prompt("How much health do you want?"))) });
    closeHackerMenu();
});

const round = (async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.setState({ round: Number(parseInt(prompt("What round do you want to set to?"))) })
    closeHackerMenu();
});
