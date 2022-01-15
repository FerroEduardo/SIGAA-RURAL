const versions = document.getElementById("versions");
const spinner = document.getElementById("spinner");

function fetchReleases() {
    fetch('https://api.github.com/repos/FerroEduardo/SIGAA-RURAL/releases')
    .then(function(response) {
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 403 && response.headers.get("X-RateLimit-Remaining") && response.headers.get("X-RateLimit-Remaining") === '0') {
            const now = new Date();
            const remaining = new Date(parseInt(response.headers.get("X-RateLimit-Reset")) * 1000);
            const diffTime = Math.abs(remaining - now);
            const diffMinutes = Math.ceil(diffTime / (1000 * 60));
            apiLimit(diffMinutes);
        } else {
            fatalError();
        }
    })
    .then(function(json) {
        if (!json) return;
        let releasesWithExtensionFile = json.filter(release => {
            let assets = release["assets"];
            let assetContainsExtensionFile = assets.some(asset => {
                if (asset["name"].includes(".xpi")) {
                    return true;
                }
            });
            return assetContainsExtensionFile;
        }).map(function (release) {
            let releaseObject = {};
            releaseObject["tag"] = release["tag_name"];
            let assets = release["assets"];
            let assetWithExtensionFile = assets.filter(asset => {
                if (asset["name"].includes(".xpi")) {
                    return true;
                }
            });
            releaseObject["filename"] = assetWithExtensionFile[0]["name"];
            releaseObject["downloadlink"] = assetWithExtensionFile[0]["browser_download_url"];
            releaseObject["body"] = release["body"];
            
            return releaseObject;
        });

        firefoxOnly()
        releasesWithExtensionFile.forEach((release, index) => {
            if (index === 0) {
                versions.insertAdjacentHTML('beforeend',createListItem(release.tag, 'Instalar', release.downloadlink, release.body,'Mais recente'));
            } else {
                versions.insertAdjacentHTML('beforeend',createListItem(release.tag, 'Instalar', release.downloadlink, release.body));
            }
        });
        insertAlert();
    });
    versions.style.display = "block";
    spinner.style.display = "none";
}

function createListItem(header, content, link, title, badge) {
    return `
    <li class="list-group-item d-flex justify-content-between align-items-start" title="${title}">
        <div class="ms-2 me-auto">
            <div class="fw-bold">v${header}</div>
            <a href='${link}'>${content}</a>
        </div>
        ${badge ? '<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">'+badge: ''}
    </li>
  `
}

function insertAlert() {
    const message = 'Versão do Chrome';
    const link = 'https://chrome.google.com/webstore/detail/sigaa-rural/oincadmpbogdfgckicmpclkdmcfagajg?hl=pt-BR';
    const element = `
    <div class="alert alert-dark mt-1">
        <a href="${link}">${message}<br>(desatualizado)</a>
    </div>
    `;
    versions.insertAdjacentHTML('beforeend',element)
}

function apiLimit(remainingMinutes) {
    const message = `Você atingiu o limite de acesso. Aguarde ${remainingMinutes} minutos e tente novamente`;
    const element = 
    `
    <div class="alert alert-danger mt-1">
        ${message}
    </div>
    `;
    versions.insertAdjacentHTML('beforeend',element);
}

function firefoxOnly() {
    versions.insertAdjacentHTML('beforeend','<div class="alert alert-warning mt-1">Somente para Firefox</div>');
}

function fatalError() {
    versions.insertAdjacentHTML('beforeend','<div class="alert alert-danger mt-1">Algo de errado não está certo</div>');
}

fetchReleases();