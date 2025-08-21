MinosPlus — 2025

MinosPlus is an Esoteric Programming Language (Esolang) created in 2025.
It all started as a simple Kata challenge: “Count how many + and - appear in a string using JavaScript”. From that idea, the project quickly grew into a fully working esolang — because, let’s be honest, these kinds of projects are fun and (relatively) easy to make.

If you want to dive into the syntax and symbols, check out the full documentation
 (coming soon 👀).

🔧 Installation
1. Install Git

If you don’t have Git installed yet:

Debian / Ubuntu / Mint

sudo apt update
sudo apt install git


Fedora

sudo dnf install git


Arch / Manjaro

sudo pacman -S git


macOS

brew install git


(On Windows, install Git for Windows
)

2. Clone the Repository
git clone https://github.com/Charllcrot/MinosPlus.git
cd MinosPlus

3. Install Node.js

If you don’t already have Node.js:

Linux (Debian-based)

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install nodejs


On other systems, download the installer from nodejs.org
.

4. Make the Interpreter Executable
chmod +x MinosPlus.js

5. Install Globally
npm install -g


Done! 🎉

▶️ Usage

Now you can run MinosPlus directly from your terminal:

minosplus '++--*'


Example output:

$ minosplus '++--*'
Result: 0


You can also write MinosPlus code in a file with the .mp suffix:

minosplus program.mp

📜 Syntax

Check the syntax manual
 for the full symbol list and examples.
(Spoiler: expect plenty of +, -, and other strange symbols 👾)

💡 That’s it! You’re ready to start experimenting with MinosPlus and writing the most questionable esolang programs ever.
