import themes from '../../themes.js';
import setupScss from './scss.js';
import setupHyprland from './hyprland.js';
import SettingsDialog from '../../settingsdialog/SettingsDialog.js';
import IconBrowser from '../../misc/IconBrowser.js';
import { Service, Utils } from '../../imports.js';

const THEME_CACHE = Utils.CACHE_DIR + '/theme-overrides.json';
const HOME_DIR = "../../../../backgrounds";
print (HOME_DIR);

class ThemeService extends Service {
    static { Service.register(this); }

    get themes() { return themes; }

    _defaultAvatar = `~/face.png`;
    _defaultTheme = themes[0].name;

    constructor() {
        super();
        Utils.exec('swww init');
        this.setup();
    }

    openSettings() {
        if (!this._dialog)
            this._dialog = SettingsDialog();

        this._dialog.hide();
        this._dialog.present();
    }

    iconBrowser() {
        IconBrowser();
    }

    setup() {
        const theme = {
            ...this.getTheme(),
            ...this.settings,
        };
        setupScss(theme);
        setupHyprland(theme);
        this.setupOther();
    }

    reset() {
        Utils.exec(`rm ${THEME_CACHE}`);
        this._settings = null;
        this.setup();
        this.emit('changed');
    }

    setupOther() {
        const darkmode = this.getSetting('color_scheme') === 'dark';

        if (Utils.exec('which gsettings')) {
            const gsettings = 'gsettings set org.gnome.desktop.interface color-scheme';
            Utils.execAsync(`${gsettings} "prefer-${darkmode ? 'dark' : 'light'}"`).catch(print);
        }
    }

    get settings() {
        if (this._settings)
            return this._settings;

        try {
            this._settings = JSON.parse(Utils.readFile(THEME_CACHE));
        } catch (_) {
            this._settings = {};
        }

        return this._settings;
    }

    setSetting(prop, value) {
        const settings = this.settings;
        settings[prop] = value;
        Utils.writeFile(JSON.stringify(settings, null, 2), THEME_CACHE).catch(print);
        this._settings = settings;
        this.emit('changed');

        if (prop === 'layout') {
            if (!this._notiSent) {
                this._notiSent = true;
                Utils.execAsync(['notify-send', 'Layout Change Needs a Reload']);
            }
            return;
        }

        this.setup();
    }

    getSetting(prop) {
        if (prop === 'theme')
            return this.settings.theme || this._defaultTheme;

        if (prop === 'avatar')
            return this.settings.avatar || this._defaultAvatar;

        return this.settings[prop] !== undefined
            ? this.settings[prop]
            : this.getTheme()[prop];
    }

    getTheme() {
        const currentThemeName = this.getSetting('theme');
        const theme = themes.find(({ name }) => name === currentThemeName,); 
        if (currentThemeName === 'gruvbox_dark_theme') {
            Utils.exec('wal --theme base16-gruvbox-hard');
            Utils.exec(`swww img ${HOME_DIR}/.dots/backgrounds/stairs.png`);
        } 
        if (currentThemeName === 'pico_theme') {
            Utils.exec('wal --theme base16-seti');
            Utils.exec('swww img /home/martin/.dots/backgrounds/town.jpg');
        } 
        return theme;
    }
}

export default new ThemeService();
