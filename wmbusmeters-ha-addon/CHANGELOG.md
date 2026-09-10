## 3.0.1 
- Version scheme changed: Home Assistant compares add-on versions with AwesomeVersion, which does not treat `3.0.0-RC1-3` as newer than `3.0.0-RC1-2`, so the Update button in the update dialog stayed disabled. Fork releases now use plain semver (stable) / `3.0.0.<edge-build>.<fork-rev>` (edge)
## 3.0.0-RC1-3 
- Sidebar panel title shortened to `Wmbusmeters` (`panel_title`)
  _Note: Home Assistant does not refresh an existing sidebar entry after a title change. Toggle "Show in sidebar" off and on in the add-on settings._
## 3.0.0-RC1-2 
- Web UI: light/dark theme with a toggle in the navigation bar (follows the system preference by default)
- Web UI: Logs tab now opens the add-on log from every page (all tabs used to link to different, partly outdated, Home Assistant paths)
- Add-on and repository metadata now identify the Shadow-230 fork
## 3.0.0-RC1-1 
- Security: meter encryption keys are no longer printed to the add-on log at startup, and `key` / MQTT `password` fields are masked in the configuration UI (with a Show/Hide toggle)
- Images are now built by GitHub Actions and published to GHCR (`ghcr.io/shadow-230`)
## 3.0.0-RC1 
- Updated to version [3.0.0-RC1](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 2.0.0 
- Updated to version [2.0.0](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 2.0.0-RC1 
- Updated to version [2.0.0-RC1](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.20.0 
- Updated to version [1.20.0](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.19.0 
- Updated to version [1.19.0](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.18.0-RC1 
- Updated to version [1.18.0-RC1](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.17.1 
- Updated to version [1.17.1](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.16.1 
- Updated to version [1.16.1](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.15.0 
- Updated to version [1.15.0](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.14.0 
- Updated to version [1.14.0](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.13.1 
- Updated to version [1.13.1](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
## 1.12.0 
- Updated to version [1.12.0](https://github.com/wmbusmeters/wmbusmeters/blob/master/CHANGES)
##