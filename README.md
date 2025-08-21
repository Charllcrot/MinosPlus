# MinosPlus — 2025
![MinosPlusLogo](https://github.com/user-attachments/assets/d14ee7a2-9863-4303-8781-a00bb5f91caa)

[![made-with-node](https://img.shields.io/badge/Made%20with-Node.js-green)](https://nodejs.org/)
[![GitHub license](https://img.shields.io/github/license/Charllcrot/MinosPlus)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Charllcrot/MinosPlus?style=social)](https://github.com/Charllcrot/MinosPlus/stargazers)

---

**MinosPlus** is an **Esoteric Programming Language (Esolang)** created in 2025.  
It all started as a simple Kata challenge: *“Count how many `+` and `-` appear in a string using JavaScript”*.  
From that tiny experiment, the project quickly mutated into a fully working esolang — because, let’s be honest, these kinds of languages are *fun and (relatively) easy to make*.

📖 If you want to dive into the **syntax and symbols**, check out the [full documentation](#) (coming soon 👀).

---

## 🔧 Installation

### 1. Install Git
If you don’t have Git installed yet:

**Debian / Ubuntu / Mint**
```bash
sudo apt update
sudo apt install git
```

**Fedora**
```bash
sudo dnf install git
```

**Arch / Manjaro**
```bash
sudo pacman -S git
```

**macOS**
```bash
brew install git
```

*(On Windows, install [Git for Windows](https://git-scm.com/download/win))*

---

### 2. Clone the Repository
```bash
git clone https://github.com/Charllcrot/MinosPlus.git
cd MinosPlus
```

---

### 3. Install Node.js
If you don’t already have Node.js:

**Linux (Debian-based)**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install nodejs
```

Other systems: download the installer from [nodejs.org](https://nodejs.org).

---

### 4. Make the Interpreter Executable
```bash
chmod +x MinosPlus.js
```

---

### 5. Install Globally
```bash
npm install -g
```

Done! 🎉

---

## ▶️ Usage

Now you can run MinosPlus directly from your terminal:

```bash
minosplus '++--*'
```

Example output:
```bash
$ minosplus '++--*'
Result: 0
```

You can also write MinosPlus code in a file with the `.mp` suffix:

```bash
minosplus program.mp
```

---

## 📜 Syntax
Check the [syntax manual](#) for the full symbol list and examples.  
*(Spoiler: expect plenty of `+`, `-`, and other strange symbols 👾)*

---

💡 That’s it! You’re ready to start experimenting with MinosPlus and writing the most *questionable* esolang programs ever.  
Enjoy breaking your brain 🌀
