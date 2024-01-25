function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

/* TERMINAL */ 
/*
document.addEventListener('click', () => {
    const terminalElement = document.querySelector('.terminal');
    const inputTerminal = document.querySelector('.terminal-input-command');
    
    const REMOVE_LOG = () => {
        const outputLog = terminalElement.querySelectorAll('.terminal-row');
        outputLog.forEach((log) => {
            if (!log.contains(inputTerminal)) {
                terminalElement.removeChild(log);
            }
        });
    };
    const EXIT = () => {
        REMOVE_LOG();
        inputTerminal.removeEventListener('change', inputTerminalHandler);
        document.querySelector('.terminal').style.removeProperty('height');
        document.querySelector('.terminal').style.removeProperty('margin');
        document.querySelector('.terminal').style.removeProperty('padding');
        document.querySelector('.terminal').style.removeProperty('width');
    };

    const RETURN_VALUE = (inputValue, outputValue) => {
        let outputElement = document.createElement('p');
        outputElement.classList.add('terminal-row');
        outputElement.classList.add('terminal-log');
        outputElement.innerHTML = outputValue;
        let lastInputElement = document.createElement('p');
        lastInputElement.classList.add('terminal-row');
        lastInputElement.innerHTML = `<span class="terminal-user">ask@justin:~$</span><span class="terminal-log">${inputValue}</span>`;
        terminalElement.insertBefore(outputElement, inputTerminal.parentNode);
        terminalElement.insertBefore(lastInputElement, outputElement);
    };

    let PREVIOUS_COMMANDS = [];

    const inputTerminalHandler = (e) => {
        if (e.keyCode === '13' && e.target.value) {
            let input = e.target.value.lowerize();
            let output = `'${input.split(' ')[0]}' is not recognized as a command.`;
            PREVIOUS_COMMANDS.push(input);
            switch (input.split(' ')[0]) {
                case 'help':
                    output = `<span>Some available commands are:</span><ul>
                    <li>about ......... About me</li>
                    <li>clear ......... Clear terminal log</li>
                    <li>exit .......... Exit terminal session</li>
                    <li>help .......... Showing available commands</li>
                    <li>links ......... Social media links</li>
                    <li>theme ......... Change theme of terminal</li>
                    <li>articles ...... Recent articles</li>
                    <li>projects ...... My pinned projects on GitHub</li>
                    <li>lang .......... Change language of this website</li>
                    </ul><span>Besides, there are some hidden feature, try to find it out!</span>`;
                    break;
                case 'about':
                    output =
                        "Hello, I'm Justin Maximillian Kimlim from Indonesia, a 15 y.o. high school student with hobbies of computer science, programming and science fiction. I enjoy making projects or even website clone.";
                    break;
                case 'links':
                    output = `<ul>
                    <li><a href="https://instagram.com/justin_kimlim_" target="_blank" rel="noopener">Instagram</a></li>
                    <li><a href="https://github.com/kimlimjustin" target="_blank" rel="noopener">GitHub</a></li>
                    <li><a href="https://dev.to/kimlimjustin" target="_blank" rel="noopener">Dev.to</a></li>
                    <li><a href="https://reddit.com/kimlimjustin" target="_blank" rel="noopener">Reddit</a></li>
                    <li><a href="mailto:kimlimjustin@gmail.com" target="_blank" rel="noopener">Email</a></li>
                    </ul>`;
                    break;
                case 'articles':
                    output = `<ul>${ARTICLES.map(
                        (article) => `<li><a href = "${article.url}" target="_blank" rel="noopener">${article.title}</a></li>`
                    ).join('')}</ul>`;
                    break;
                case 'github':
                    let github = window.open('https://github.com/kimlimjustin', '_blank');
                    github.focus();
                    output = '';
                    break;
                case 'https://kimlimjustin.com':
                case 'kimlimjustin.com':
                case 'http://kimlimjustin.com':
                    output = `This website is designed and built by Justin Maximillian Kimlim using HTML, CSS and Vanilla JavaScript and was inspired by several websites over the internet. Find out the repo of this website <a href = "https://github.com/kimlimjustin/kimlimjustin.com" target="_blank" rel="noopener">here.</a>`;
                    break;
                case 'hello':
                case 'hi':
                    window.open('mailto:kimlimjustin@gmail.com?Subject=Hello');
                    output = `Say hello to me <a href="mailto:kimlimjustin@gmail.com?Subject=Hello">here!</a>`;
                    break;
                case 'refresh':
                    location.reload();
                    output = '';
                    break;
                case 'whoami':
                    output = 'You are human when you type this command :)';
                    break;
                case 'pwd':
                    output = 'https://kimlimjustin.com';
                    break;
                case 'sudo':
                    output = 'Are you thinking you are on linux man?';
                    break;
                case 'cd':
                    output = 'Where do you want to go? This is just a website that simulates terminal haha.';
                    break;
                case 'ls':
                    output = 'Nothing here xd.';
                    break;
                case 'ping':
                    output = 'Where do you want to ping to? Haha';
                    break;
                case 'echo':
                    output = input.split(' ').slice(1).join(' ');
                    break;
                case 'kill':
                    output = "Please don't kill me 😆😆";
                    breakl;
                case 'man':
                    output = 'What?';
                    break;
                case 'shutdown':
                    output = 'Wait? what???';
                    break;
                case 'whoareu':
                case 'whoareyou':
                    output = `I'm human :) Contact me <a href = "kimlimjustin@gmail.com">here</a>`;
                    break;
                case 'clear':
                    if (input === 'clear cache') {
                        localStorage.clear();
                        output = 'Localstorage has been cleared :)';
                    }
                    break;
                case 'date':
                    output = new Date();
                    break;
                case 'projects':
                    output = `<span>My pinned repositories:</span>
                    <ul>${PROJECTS.map(
                        (repo) =>
                            `<li><a href="${repo.link}" target="_blank" rel="noopener">${repo.owner}/${repo.repo}</a> (${repo.description})</li>`
                    ).join('')}</ul>`;
                    break;
                case 'fork':
                case 'star':
                    let repo = window.open('https://github.com/kimlimjustin/kimlimjustin.com', '_blank');
                    repo.focus();
                    output = '';
                    break;
                case 'lang':
                case 'language':
                    if (input.trim() === 'lang' || input.trim() === 'language') {
                        output = `<span>Usage: lang [language code]. Available languages:<ul>${multilingual.availableLanguages
                            .map((lang) => `<li>${lang}</li>`)
                            .join('')}</span>`;
                    } else {
                        let langCode = input.split(' ').slice(1).join(' ');
                        if (multilingual.availableLanguagesCode.indexOf(langCode) === -1)
                            output = `${langCode} is not recognized as language code.`;
                        else {
                            switchLang(langCode);
                            output = '';
                        }
                        changeSelectedLang(langCode);
                    }
                    break;
            }
            RETURN_VALUE(input, output);

            if (input === 'clear' || input === 'cls') REMOVE_LOG();
            if (input === 'exit') EXIT();
            inputTerminal.value = '';
            terminalElement.scrollTop = terminalElement.scrollHeight;
        }
    };

    inputTerminal.addEventListener('keydown', inputTerminalHandler);
    let i = PREVIOUS_COMMANDS.length;
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === '38') {
            e.preventDefault();
            i > 0 ? (i = i - 1) : (i = PREVIOUS_COMMANDS.length - 1);
            if (PREVIOUS_COMMANDS[i]) inputTerminal.value = PREVIOUS_COMMANDS[i];
            inputTerminal.focus();
        } else if (e.keyCode === '40') {
            e.preventDefault();
            i < PREVIOUS_COMMANDS.length - 1 ? (i = i + 1) : (i = 0);
            if (PREVIOUS_COMMANDS[i]) inputTerminal.value = PREVIOUS_COMMANDS[i];
            inputTerminal.focus();
        }
    });
    terminalElement.addEventListener('click', () => inputTerminal.focus());
    document.body.addEventListener('click', (e) => {
        if (e.target === modal) EXIT();
    });
;
*/