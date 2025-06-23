Tabii! Sana adım adım **Haxball Headless Client bot kurulum rehberi** ve tam örnek proje dosyası yapısını hazırladım.

---

# Haxball Admin Bot Kurulum ve Çalıştırma Rehberi

---

## 1. Node.js Kurulumu

* Eğer bilgisayarında yüklü değilse:
  [https://nodejs.org/](https://nodejs.org/) adresinden **LTS** sürümünü indirip kur.

* Kurulumdan sonra terminal / komut istemcisinde şunu yaz ve çalıştığından emin ol:

  ```bash
  node -v
  npm -v
  ```

---

## 2. Proje Klasörü Oluştur

* Bilgisayarında örneğin `haxball-bot` adlı bir klasör oluştur.

* Terminali aç ve bu klasöre git:

```bash
cd /path/to/haxball-bot
```

---

## 3. `package.json` Dosyası Oluştur

Terminalde şu komutu çalıştır:

```bash
npm init -y
```

Bu, basit bir `package.json` oluşturur.

---

## 4. Haxball Headless Client Paketini Kur

Terminalde:

```bash
npm install haxball-headless
```

---

## 5. `index.js` Dosyasını Oluştur

`index.js` dosyasını proje klasörüne oluştur ve içine aşağıdaki tam bot kodunu yapıştır.

---

### `index.js` Örneği (Tam Bot Koduyla)

```js
const HBInit = require("haxball-headless");

const room = HBInit({
  roomName: "⚽ Gelişmiş Admin Botlu Oda",
  maxPlayers: 12,
  public: true,
  geo: "tr",
  noPlayer: true
});

// --- HARİTALAR ---
const warmupStadiumJson = {
  name: "Isınma Haritası",
  author: "ChatGPT",
  width: 800,
  height: 400,
  spawnDistance: 150,
  goals: [
    { pos: { x: 0, y: 150 }, size: { width: 80, height: 100 } },
    { pos: { x: 800, y: 150 }, size: { width: 80, height: 100 } }
  ],
  segments: [
    { p1: { x: 0, y: 0 }, p2: { x: 800, y: 0 } },
    { p1: { x: 800, y: 0 }, p2: { x: 800, y: 400 } },
    { p1: { x: 800, y: 400 }, p2: { x: 0, y: 400 } },
    { p1: { x: 0, y: 400 }, p2: { x: 0, y: 0 } }
  ],
  discs: [
    {
      pos: { x: 400, y: 200 },
      radius: 30,
      type: "ball",
      elasticity: 1,
      color: "#ffffff"
    }
  ]
};

const smallTeamStadiumJson = {
  name: "1v1 / 2v2 / 3v3 Map",
  author: "ChatGPT",
  width: 1000,
  height: 500,
  spawnDistance: 180,
  goals: [
    { pos: { x: 0, y: 200 }, size: { width: 80, height: 100 } },
    { pos: { x: 1000, y: 200 }, size: { width: 80, height: 100 } }
  ],
  segments: [
    { p1: { x: 0, y: 0 }, p2: { x: 1000, y: 0 } },
    { p1: { x: 1000, y: 0 }, p2: { x: 1000, y: 500 } },
    { p1: { x: 1000, y: 500 }, p2: { x: 0, y: 500 } },
    { p1: { x: 0, y: 500 }, p2: { x: 0, y: 0 } },
    { p1: { x: 500, y: 0 }, p2: { x: 500, y: 500 } }
  ],
  discs: [
    {
      pos: { x: 500, y: 250 },
      radius: 30,
      type: "ball",
      elasticity: 1,
      color: "#ffffff"
    }
  ]
};

const powerStadiumJson = {
  name: "Power Style Stadium",
  author: "ChatGPT",
  width: 1200,
  height: 600,
  spawnDistance: 180,
  goals: [
    { pos: { x: 0, y: 250 }, size: { width: 100, height: 100 } },
    { pos: { x: 1200, y: 250 }, size: { width: 100, height: 100 } }
  ],
  segments: [
    { p1: { x: 0, y: 0 }, p2: { x: 1200, y: 0 } },
    { p1: { x: 1200, y: 0 }, p2: { x: 1200, y: 600 } },
    { p1: { x: 1200, y: 600 }, p2: { x: 0, y: 600 } },
    { p1: { x: 0, y: 600 }, p2: { x: 0, y: 0 } },
    { p1: { x: 600, y: 0 }, p2: { x: 600, y: 600 } },
    { p1: { x: 100, y: 150 }, p2: { x: 100, y: 450 } },
    { p1: { x: 1100, y: 150 }, p2: { x: 1100, y: 450 } },
    { p1: { x: 0, y: 250 }, p2: { x: 100, y: 250 } },
    { p1: { x: 0, y: 350 }, p2: { x: 100, y: 350 } },
    { p1: { x: 1200, y: 250 }, p2: { x: 1100, y: 250 } },
    { p1: { x: 1200, y: 350 }, p2: { x: 1100, y: 350 } },
    { p1: { x: 500, y: 200 }, p2: { x: 500, y: 400 } },
    { p1: { x: 700, y: 200 }, p2: { x: 700, y: 400 } },
    { p1: { x: 400, y: 300 }, p2: { x: 480, y: 300 } },
    { p1: { x: 720, y: 300 }, p2: { x: 800, y: 300 } }
  ],
  discs: [
    {
      pos: { x: 600, y: 300 },
      radius: 30,
      type: "ball",
      elasticity: 1,
      color: "#ffffff"
    }
  ]
};

// --- KÜFÜR FİLTRESİ ---
const bannedWords = ["oe", "ae", "aq", "aw", "amk", "amcık", "oç", "orosbu", "ananı sikiyim", "mal", "salak", "aptal", "gerizekalı"];
let warnings = {}; // player.id => uyarı sayısı

// --- AFK KONTROLÜ ---
const AFK_TIME = 60 * 1000; // 60 saniye
let playerActivity = {};

// --- OYUNCU SAYISAL ID'Sİ ---
let playerIDs = {};
let nextID = 1;

// --- İSTATİSTİKLER ---
let stats = {}; // player.id => { goals, ownGoals, assists }

function initPlayerStats(id) {
  if (!stats[id]) {
    stats[id] = { goals: 0, ownGoals: 0, assists: 0 };
  }
}

// --- OYUNCU TAKIM DAĞITMA ---
function shufflePlayersToTeams() {
  let players = room.getPlayerList().filter(p => p.team === 0);
  for (let i = 0; i < players.length; i++) {
    let team = i % 2 === 0 ? 1 : 2;
    room.setPlayerTeam(players[i].id, team);
  }
}

// --- OYLAMA SİSTEMİ ---
let voteInProgress = false;
let voteTarget = null; // playerID
let voteYesSet = new Set();
let voteTimeout = null;
let bannedPlayers = {}; // playerID: ban bitiş timestamp

function finishVote() {
  voteInProgress = false;
  let totalPlayers = room.getPlayerList().length;
  let neededVotes = Math.ceil(totalPlayers / 2);
  let votes = voteYesSet.size;

  let targetPlayerName = room.getPlayerList().find(p => p.id === voteTarget)?.name || "Bilinmeyen";

  if (votes >= neededVotes) {
    bannedPlayers[voteTarget] = Date.now() + 3600000; // 1 saat ban
    room.kickPlayer(voteTarget, "Oylama sonucu 1 saat banlandın!", false);
    room.sendChat(`🚫 ${targetPlayerName} 1 saatliğine banlandı! (Oylama sonucu)`);
  } else {
    room.sendChat(`ℹ️ ${targetPlayerName} için oylama başarısız oldu. (${votes}/${neededVotes} oy)`);
  }

  voteTarget = null;
  voteYesSet.clear();
}

// --- HARİTA SEÇİMİ ---
function updateStadiumByPlayerCount() {
  let players = room.getPlayerList().filter(p => !p.bot);
  let count = players.length;

  if (count === 1) {
    room.setCustomStadium(warmupStadiumJson);
    room.sendChat("⚡ Isınma haritası açıldı, bekleniyor...");
  } else if (count >= 2 && count <= 6) {
    room.setCustomStadium(smallTeamStadiumJson);
    room.sendChat("🔥 1v1, 2v2 veya 3v3 için harita açıldı, maç başlıyor!");
  } else if (count >= 7) {
    room.setCustomStadium(powerStadiumJson);
    room.sendChat("⚡ Power haritasına geçildi, maç başlıyor!");
  }
}

// --- OLAYLAR ---

room.onPlayerJoin = (player) => {
  // Ban kontrolü
  if (bannedPlayers[player.id]) {
    if (Date.now() < bannedPlayers[player.id]) {
      room.kickPlayer(player.id, "Süreli banlısın!", false);
      return;
    } else {
      delete bannedPlayers[player.id];
    }
  }

  // ID atama
  playerIDs[player.id] = nextID++;

  // Aktivite kaydı
  playerActivity[player.id] = Date.now();

  // Uyarı ve istatistik sıfırla
  warnings[player.id] = 0;
  initPlayerStats(player.id);

  // İlk oyuncu admin olsun
  if (room.getPlayerList().length === 1) {
    room.setPlayerAdmin(player.id, true);
    room.sendChat(`${player.name} admin olarak atandı.`);
  }

  room.sendChat(`🎫 ${player.name} için ID atandı: #${playerIDs[player.id]}`);

  updateStadiumByPlayerCount();
};

room.onPlayerLeave = (player) => {
  delete warnings[player.id];
  delete stats[player.id];
  delete playerActivity[player.id];
  delete playerIDs[player.id];

  updateStadiumByPlayerCount();
};

room.onPlayerActivity = (player) => {
  playerActivity[player.id] = Date.now();
};

room.onGameTick = () => {
  let now = Date.now();
  for (let p of room.getPlayerList()) {
    if (!p.admin && playerActivity[p.id] && now - playerActivity[p.id] > AFK_TIME) {
      room.kickPlayer(p.id, "AFK nedeniyle atıldın", false);
      delete playerActivity[p.id];
    }
  }
};

room.onGameStart = () => {
  // Maç başında kalecileri duyur
  let blueKeepers = [];
  let redKeepers = [];

  room.getPlayerList().forEach(p => {
    if (p.team === 1 && p.position && Math.abs(p.position.x) < 100) {
      blueKeepers.push(p.name);
    }
    if (p.team === 2 && p.position && Math.abs(p.position.x) < 100) {
      redKeepers.push(p.name);
    }
  });

  room.sendChat(`🧤 Mavi takım kalecileri: ${blueKeepers.join(", ") || "Yok"}`);
  room.sendChat(`🧤 Kırmızı takım kalecileri: ${redKeepers.join(", ") || "Yok"}`);
};

room.onGameStop = () => {
  setTimeout(() => {
    if (room.getPlayerList().length >= 2) {
      room.startGame();
      room.sendChat("⏱️ Maç otomatik yeniden başladı.");
    }
  }, 5000);
};

room.onTeamGoal = (team) => {
  let lastTouch = room.getLastTouch();
  if (lastTouch) {
    initPlayerStats(lastTouch.id);
    if (lastTouch.team === team) {
      stats[lastTouch.id].goals++;
    } else {
      stats[lastTouch.id].ownGoals++;
    }
  }
};

// --- SOHBET KOMUTLARI ---

room.onPlayerChat = function(player, message) {
  let msgLower = message.toLowerCase();

  // Küfür filtresi
  for (let word of bannedWords) {
    if (msgLower.includes(word)) {
      if (!warnings[player.id]) warnings[player.id] = 0;
      warnings[player.id]++;
      if (warnings[player.id] >= 3) {
        room.sendChat(`🚫 ${player.name} 3 kez küfür ettiği için atıldı.`);
        room.kickPlayer(player.id, "3 kez küfür ettin!", false);
      } else {
        room.sendChat(`⚠️ ${player.name}, lütfen küfür etme! (${warnings[player.id]}/3)`);
      }
      return false;
    }
  }

  // Gizli admin atama (ör: !adminim Staples145)
  if (message.startsWith("!adminim ")) {
    let targetName = message.substring(9).trim();
    let targetPlayer = room.getPlayerList().find(p => p.name === targetName);
    if (targetPlayer) {
      room.setPlayerAdmin(targetPlayer.id, true);
      // Komutu gizli tutmak için chat mesajı göndermiyoruz
    }
    return false;
  }

  // Oylama başlatma !vote <id>
  if (message.startsWith("!vote ")) {
    if (voteInProgress) {
      room.sendChat("⚠️ Zaten bir oylama devam ediyor.");
      return false;
    }
    let idStr = message.substring(6).trim();
    let targetEntry = Object.entries(playerIDs).find(([pid, num]) => num == idStr);
    if (!targetEntry) {
      room.sendChat("⚠️ Geçerli bir oyuncu ID'si gir.");
      return false;
    }
    let targetID = targetEntry[0];
    if (targetID === player.id) {
      room.sendChat("⚠️ Kendine oylama başlatamazsın.");
      return false;
    }
    voteInProgress = true;
    voteTarget = targetID;
    voteYesSet = new Set();
    voteYesSet.add(player.id);
    room.sendChat(`📢 Oylama başladı! ${room.getPlayerList().find(p => p.id === voteTarget).name} adlı oyuncu için oy ver! (1 dakika) - Oy vermek için !vote yaz\nBaşlatan: ${player.name}`);
    voteTimeout = setTimeout(() => finishVote(), 60000);
    return false;
  }

  // Oy verme !vote
  if (message === "!vote") {
    if (!voteInProgress) {
      room.sendChat("⚠️ Şu anda oylama yok.");
      return false;
    }
    if (voteYesSet.has(player.id)) {
      room.sendChat("⚠️ Zaten oy kullandın.");
      return false;
    }
    voteYesSet.add(player.id);
    room.sendChat(`✅ ${player.name} oyunu kullandı! (${voteYesSet.size} oy)`);
    return false;
  }

  // Komutlar listesi
  if (message === "!komutlar") {
    room.sendChat(`📄 Kullanılabilir Komutlar:
!komutlar - Bu listeyi gösterir
!istatistik - Kendi istatistiklerini göster
!uyarılar - Uyarı sayını göster
!reset - Skoru sıfırla (admin)
!takimlar - Takımlara dağıt (admin)
!kaleciler - Kalecileri göster (admin)
!duyuru [mesaj] - Duyuru gönder (admin)
!skorum - Gol ve asistlerini göster
!id - Oyuncu ID listesini göster
!vote <id> - Oy başlat (oy kullanmak için !vote)`);
    return false;
  }

  // İstatistik göster
  if (message === "!istatistik") {
    initPlayerStats(player.id);
    let s = stats[player.id];
    room.sendChat(`📊 ${player.name} | Goller: ${s.goals} | Own Goals: ${s.ownGoals}`);
    return false;
  }

  // Uyarı sayısı göster
  if (message === "!uyarılar") {
    let count = warnings[player.id] || 0;
    room.sendChat(`⚠️ ${player.name}, uyarı sayın: ${count}/3`);
    return false;
  }

  // Skor ve asist göster
  if (message === "!skorum") {
    initPlayerStats(player.id);
    let s = stats[player.id];
    room.sendChat(`📈 ${player.name} | Goller: ${s.goals}, Own Goals: ${s.ownGoals}, Asistler: ${s.assists || 0}`);
    return
```
