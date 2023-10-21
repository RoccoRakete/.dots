const progress = Widget.CircularProgress({
    style:
        'min-width: 50px;' + // its size is min(min-height, min-width)
        'min-height: 50px;' +
        'font-size: 6px;' + // to set its thickness set font-size on it
        'margin: 4px;' + // you can set margin on it
        'background-color: #131313;' + // set its bg color
        'color: aqua;', // set its fg color
    connections: [[Battery, self => {
        self.value = Battery.percent / 100;
    }]],
    child: Widget.Icon({
        binds: [['icon', Battery, 'icon-name']],
    }),
    rounded: false,
    inverted: false,
    startAt: 0.75,
});
