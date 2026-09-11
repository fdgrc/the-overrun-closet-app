# The Overrun Closet — Android Capacitor Wrapper

Capacitor 8 wrapper for the production site:

https://blissful-kate.pages.dev

App ID: `com.blissfulkate.overruncloset`

The wrapper intentionally loads the production Cloudflare Pages site remotely so content and Admin updates appear in the Android app without rebuilding the APK.

## Build locally

Requirements:
- Node.js 22+
- Java 21+
- Android SDK / Android Studio

Then run:

```bash
npm install
npx cap add android
npx @capacitor/assets generate --android --iconBackgroundColor '#fff7fb' --iconBackgroundColorDark '#24191f' --splashBackgroundColor '#fff7fb' --splashBackgroundColorDark '#171216'
npx cap sync android
cd android
./gradlew assembleDebug
```

APK output:
`android/app/build/outputs/apk/debug/app-debug.apk`

## GitHub Actions

The included `.github/workflows/build-apk.yml` creates the Android project, generates icons, builds the debug APK, and uploads it as a workflow artifact.

## Production signing

The included workflow builds a debug APK for direct installation/testing. Google Play distribution requires a release keystore and signed Android App Bundle/APK. Do not commit a release keystore or passwords to GitHub.
