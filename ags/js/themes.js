const misc = {
    wm_gaps: 5,
    radii: 10,
    spacing: 9,
    shadow: 'rgba(0, 0, 0, 0)',
    drop_shadow: false,
    transition: 200,
    screen_corners: false,
    bar_style: 'floating',
    layout: 'topbar',
    desktop_clock: 'center center',
    font: 'Ubuntu Nerd Font',
    mono_font: 'Mononoki Nerd Font',
    font_size: 19,
};

const gruv_dark = {
    color_scheme: 'gruv_dark',
    red: '#CC241D',
    green: '#476C43',
    yellow: '#D79921',
    blue: '#458588',
    magenta: '#B16286',
    teal: '#689D6A',
    orange: '#D65D0E',
    bg_color: '#1D2021',
    fg_color: '#FBF1C7',
    hover_fg: '#f1f1f1',
};

const gruv_darktooth = {
    color_scheme: 'gruv_darktooth',
    red: '#FB543F',
    green: '#95C085',
    yellow: '#FAC03B',
    blue: '#0D6678',
    magenta: '#8F4673',
    teal: '#8BA59B',
    orange: '#D65D0E',
    bg_color: '#1D2021',
    fg_color: '#FDF4C1',
    hover_fg: '#FDF4C1',
};

const pico = {
    color_scheme: 'pico',
    red: '#FF004D',
    green: '#00E756',
    yellow: '#FFF024',
    blue: '#29ADFF',
    magenta: '#FF77A8',
    teal: '#83769C',
    orange: '#D08770',
    bg_color: '#000000',
    fg_color: '#FFF1E8',
    hover_fg: '#FFF1E8',
};

const catppuccin_mocha = {
    color_scheme: 'catppuccin_mocha',
    red: '#F38BA8',
    green: '#A6E3A1',
    yellow: '#F9E2AF',
    blue: '#89B4FA',
    magenta: '#CBA6F7',
    teal: '#94E2D5',
    orange: '#FAB387',
    bg_color: '#181825',
    fg_color: '#CDD6F4',
    hover_fg: '#CDD6F4',
};

const material_dark = {
    color_scheme: 'material_dark',
    red: '#F07178',
    green: '#C3E88D',
    yellow: '#FFCB6B',
    blue: '#82AAFF',
    magenta: '#C792EA',
    teal: '#89DDFF',
    orange: '#D65D0E',
    bg_color: '#212121',
    fg_color: '#EEFFFF',
    hover_fg: '#EEFFFF',
};

const nord = {
    color_scheme: 'nord',
    red: '#BF616A',
    green: '#A3BE8C',
    yellow: '#EBCB8B',
    blue: '#5E81AC',
    magenta: '#88C0D0',
    teal: '#8FBCBB',
    orange: '#D08770',
    bg_color: '#272b35',
    fg_color: '#E5E9F0',
    hover_fg: '#E5E9F0',
};

const tokyo_night = {
    color_scheme: 'tokyo_night',
    red: '#F7768E',
    green: '#9ECE6A',
    yellow: '#D0D040',
    blue: '#7AA2F7',
    magenta: '#BB9AF7',
    teal: '#7DCFFF',
    orange: '#E0AF68',
    bg_color: '#24283B',
    fg_color: '#B5BFE8',
    hover_fg: '#B5BFE8',
};

const adwaita = {
    color_scheme: 'adwaita',
    red: '#c01c28',
    green: '#2ec27e',
    yellow: '#f5c211',
    blue: '#3584e4',
    magenta: '#813d9c',
    teal: '#99c1f1',
    orange: '#e66100',
    bg_color: '#1E1E1E',
    fg_color: '#deddda',
    hover_fg: '#c0bfbc',
};

const light = {
    color_scheme: 'light',
    red: '#f66151',
    green: '#57e389',
    yellow: '#f6d32d',
    blue: '#fff',
    magenta: '#c061cb',
    teal: '#5bc8aF',
    orange: '#ffa348',
    bg_color: '#fffffa',
    fg_color: '#141414',
    hover_fg: '#0a0a0a',
    border_color: '#476C43',
};

const colors_gruv_dark = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(476C43FF)',
    hypr_inactive_border: 'rgba(3f3f3fDD)',
    accent: '$blue',
    accent_fg: '$bg_color',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 25%)',
    border_color: '$yellow',
    bar_border_color: '$green',
    border_opacity: 100,
    border_width: 2,
};

const colors_gruv_darktooth = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(95C085FF)',
    hypr_inactive_border: 'rgba(1D2021DD)',
    accent: '$blue',
    accent_fg: '$bg_color',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 25%)',
    border_color: '$yellow',
    bar_border_color: '$green',
    border_opacity: 100,
    border_width: 2,
};


const colors_pico = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(29ADFFFF)',
    hypr_inactive_border: 'rgba(545862DD)',
    accent: '$teal',
    accent_fg: '$bg_color',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 25%)',
    border_color: '$blue',
    bar_border_color: '$blue',
    border_opacity: 100,
    border_width: 2,
};

const colors_catppuccin_mocha = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(CBA6F7FF)',
    hypr_inactive_border: 'rgba(1E1E2EDD)',
    accent: '$teal',
    accent_fg: '$bg_color',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 25%)',
    border_color: '$blue',
    bar_border_color: '$blue',
    border_opacity: 100,
    border_width: 2,
};

const colors_material_dark = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(C792EAFF)',
    hypr_inactive_border: 'rgba(4A4A4ADD)',
    accent: '$blue',
    accent_fg: '$bg_color',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 25%)',
    border_color: '$blue',
    bar_border_color: '$blue',
    border_opacity: 100,
    border_width: 2,
};

const colors_nord = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(5E81ACFF)',
    hypr_inactive_border: 'rgba(4C566ADD)',
    accent: '$teal',
    accent_fg: '$bg_color',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 25%)',
    border_color: '$blue',
    bar_border_color: '$blue',
    border_opacity: 100,
    border_width: 2,
}

const colors_tokyo_night = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(BB9AF7FF)',
    hypr_inactive_border: 'rgba(24283BDD)',
    accent: '$blue',
    accent_fg: '$bg_color',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 25%)',
    border_color: '$magenta',
    bar_border_color: '$magenta',
    border_opacity: 100,
    border_width: 2,
}

const colors_adwaita = {
    wallpaper_fg: 'white',
    hypr_active_border: 'rgba(1c71d8FF)',
    hypr_inactive_border: 'rgba(241f31DD)',
    accent: '$blue',
    accent_fg: '$bg_color',
    widget_bg: '$fg_color',
    widget_opacity: 94,
    active_gradient: 'to right, $accent, lighten($accent, 25%)',
    border_color: '$magenta',
    bar_border_color: '$blue',
    border_opacity: 100,
    border_width: 1,
}


// themes
const gruvbox_dark_theme = {
    avatar: '~/face.png',
    name: 'gruvbox_dark_theme',
    icon: '󰄛',
    gtk_theme: 'Gruvbox-Dark-B',
    icons: 'gruvbox_icons',
    pywall_theme: 'base16-gruvbox-hard',
    theme_wallpaper: 'stairs.png',
    ...gruv_dark,
    ...misc,
    ...colors_gruv_dark,
};

const gruvbox_darktooth_theme = {
    avatar: '~/face.png',
    name: 'gruvbox_darktooth_theme',
    icon: '󰄛',
    gtk_theme: 'Gruvbox-Dark-B',
    icons: 'gruvbox_icons',
    pywall_theme: 'base16-gruvbox-hard',
    theme_wallpaper: 'gruvbox_forest-4.png',
    ...gruv_darktooth,
    ...misc,
    ...colors_gruv_darktooth,
};

const pico_theme = {
    avatar: '~/face.png',
    name: 'pico_theme',
    icon: '󰄛',
    gtk_theme: 'Juno-ocean',
    icons: 'pico_icons',
    pywall_theme: 'base16-seti',
    theme_wallpaper: 'color_city.png',
    ...pico,
    ...misc,
    ...colors_pico,
};

const catppuccin_mocha_theme = {
    avatar: '~/face.png',
    name: 'catppuccin_mocha_theme',
    icon: '󰄛',
    gtk_theme: 'Catppuccin-Mocha-Standard-Lavender-Dark',
    icons: 'catppuccin_mocha',
    pywall_theme: 'base16-seti',
    theme_wallpaper: 'oled-mountains.jpg',
    ...catppuccin_mocha,
    ...misc,
    ...colors_catppuccin_mocha,
};

const material_dark_theme = {
    avatar: '~/face.png',
    name: 'material_dark_theme',
    icon: '󰄛',
    gtk_theme: 'Material',
    icons: 'material',
    pywall_theme: 'base16-materialer',
    theme_wallpaper: 'japanese-sakura-painting.jpg',
    ...material_dark,
    ...misc,
    ...colors_material_dark,
};

const nord_theme = {
    avatar: '~/face.png',
    name: 'nord_theme',
    icon: '󰄛',
    gtk_theme: 'nord',
    icons: 'nord_icons',
    pywall_theme: 'base16-nord',
    theme_wallpaper: 'nord.jpg',
    ...nord,
    ...misc,
    ...colors_nord,
};
const tokyo_night_theme = {
    avatar: '~/face.png',
    name: 'tokyo_night_theme',
    icon: '󰄛',
    gtk_theme: 'Tokyonight',
    icons: 'tokyo_night',
    pywall_theme: 'base16-tomorrow-night',
    theme_wallpaper: 'nord-street.png',
    ...tokyo_night,
    ...misc,
    ...colors_tokyo_night,
};

const adwaita_theme = {
    avatar: '~/face.png',
    name: 'adwaita_theme',
    icon: '󰄛',
    gtk_theme: 'adw-gtk3-dark',
    icons: 'Adwaita',
    pywall_theme: 'base16-default',
    theme_wallpaper: 'minimal_landscape.jpg',
    ...adwaita,
    ...misc,
    ...colors_adwaita,
};

export default [
    gruvbox_dark_theme,
    gruvbox_darktooth_theme,
    pico_theme,
    catppuccin_mocha_theme,
    material_dark_theme,
    nord_theme,
    tokyo_night_theme,
    adwaita_theme
];
