# Lettera in Campo — GitHub Pages + PWA Builder

Stesso metodo di Impostore: il gioco va online gratis su GitHub Pages come web app installabile (PWA), poi PWA Builder ne ricava l'APK per Android.

## 1. Crea il repository e carica i file

1. Su github.com: **+ → New repository**, nome `lettera-in-campo`, **Public**, poi **Create repository**.
2. Clicca **uploading an existing file**.
3. Estrai lo zip, apri la cartella `lettera-in-campo-pwa`, seleziona tutto il contenuto (Ctrl+A) e trascinalo nella pagina. Devono esserci `index.html`, `manifest.webmanifest`, `sw.js` e le cartelle `icons` e `fonts`.
4. Clicca **Commit changes**.

## 2. Attiva GitHub Pages

1. Nel repository: **Settings → Pages**.
2. In **Source** scegli **Deploy from a branch**, ramo **main**, cartella **/ (root)**, poi **Save**.
3. Dopo 1–2 minuti in alto compare l'indirizzo, del tipo `https://TUONOME.github.io/lettera-in-campo/`.
4. Aprilo dal telefono e prova il gioco.

## 3. Crea l'APK con PWA Builder

1. Vai su **pwabuilder.com**, incolla l'indirizzo di GitHub Pages e clicca **Start**.
2. Il punteggio del manifest e del service worker dovrebbe risultare valido (icone, nome, colori e modalità offline sono già impostati).
3. Clicca **Package for stores → Android → Generate Package**.
4. Package ID consigliato: `it.novaprojectagency.letteraincampo`. Lascia il resto com'è e scarica lo zip.
5. Nello zip trovi:
   - il file **.apk**, da installare sui telefoni Android;
   - il file **.aab**, da usare solo se un giorno pubblichi su Google Play;
   - la **chiave di firma** (signing.keystore + password nel file di testo). Conservala: serve per tutti gli aggiornamenti futuri della stessa app.

## 4. Installa

Manda l'APK sul telefono (Drive, WhatsApp, cavo), aprilo e consenti l'installazione da questa fonte.

## Nascondere la barra dell'indirizzo

Se nell'app compare la barra con l'indirizzo in alto, manca il file di verifica `assetlinks.json`. PWA Builder lo include nello zip. Su GitHub Pages va messo nella radice del dominio, cioè nel repository `TUONOME.github.io`, in `.well-known/assetlinks.json`. Se lo hai già fatto per Impostore, aggiungi la nuova voce nello stesso file accanto a quella esistente.

## Aggiornare il gioco

1. Carica su GitHub la nuova versione di `index.html`.
2. In `sw.js` cambia `lettera-in-campo-v1` in `v2`, poi `v3` e così via.

L'app installata si aggiorna da sola alla riapertura, senza rifare l'APK. L'APK va rigenerato solo se cambi nome, icona o colori.
