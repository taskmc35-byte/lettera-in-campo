# Lettera in Campo — come ottenere l'APK

Il progetto si compila da solo su GitHub: carichi i file, GitHub crea l'APK e te lo mette in una pagina da cui scaricarlo sul telefono. Non serve installare niente sul PC.

## Cosa c'è nella cartella

| File / cartella | A cosa serve |
|---|---|
| `www/` | Il gioco (index.html e i font) |
| `assets/` | Icona e schermata di avvio |
| `.github/workflows/build-apk.yml` | Le istruzioni che GitHub segue per creare l'APK |
| `package.json`, `capacitor.config.json` | Configurazione dell'app Android |

## 1. Crea il repository

1. Vai su github.com e accedi.
2. In alto a destra: **+ → New repository**.
3. Nome: `lettera-in-campo`. Lascia **Public** (con Private le build consumano i minuti gratuiti, che comunque bastano).
4. Non spuntare README né .gitignore. Clicca **Create repository**.

## 2. Carica i file

1. Estrai lo zip sul PC.
2. Nella pagina del repository vuoto clicca **uploading an existing file**.
3. Apri la cartella estratta `lettera-in-campo-app`, seleziona **tutto il contenuto** (Ctrl+A) e trascinalo nella pagina. Devono comparire anche `.github`, `www` e `assets`.
4. In basso clicca **Commit changes**.

Se la cartella `.github` non viene caricata: **Add file → Create new file**, scrivi come nome `.github/workflows/build-apk.yml`, incolla il contenuto del file e salva.

## 3. Aspetta la build

1. Apri la scheda **Actions** del repository.
2. Vedrai il lavoro **Crea APK** in corso (pallino giallo). Ci mette circa 4–6 minuti.
3. Quando diventa verde, l'APK è pronto.

Se diventa rosso, apri il lavoro e guarda il passaggio con la X: il messaggio d'errore dice cosa non va.

## 4. Scarica e installa l'APK

1. Dal telefono Android apri il repository su GitHub e vai su **Releases** (colonna a destra).
2. Scarica `lettera-in-campo.apk` dall'ultima release.
3. Aprilo. Android chiederà di consentire l'installazione da questa fonte: autorizza e installa.

L'APK è una build di test (debug): va benissimo per installarla e passarla agli amici, ma non è firmata per il Play Store.

## Modificare il gioco

Ogni volta che carichi una nuova versione di `www/index.html` (o di qualsiasi file) sul ramo `main`, GitHub ricrea l'APK e pubblica una nuova release. Puoi anche rilanciarla a mano: **Actions → Crea APK → Run workflow**.

Per cambiare l'icona sostituisci i file in `assets/` mantenendo gli stessi nomi (PNG 1024×1024, splash 2732×2732).
