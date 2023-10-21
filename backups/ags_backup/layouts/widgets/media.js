const { Widget } = ags;
const { Mpris } = ags.Service;
const { timeout } = ags.Utils;
const { prefer } = imports.modules.mpris;

Widget.widgets['mediabox'] = ({ player = prefer, ...props }) => Widget({
    ...props,
    type: 'mpris/box',
    className: 'mediabox',
    player,
    children: [
        {
            type: 'mpris/blurred-cover-art',
            player,
            className: 'cover-art-bg',
            hexpand: true,
            children: [{
                type: 'box',
                className: 'shader',
                hexpand: true,
                orientation: 'vertical',
                children: [
                    {
                        type: 'box',
                        children: [
                            {
                                type: 'mpris/cover-art', player,
                                className: 'cover-art',
                                halign: 'end',
                                hexpand: false,
                            },
                            {
                                type: 'box',
                                hexpand: true,
                                orientation: 'vertical',
                                className: 'labels',
                                children: [
                                    {
                                        type: 'mpris/title-label', player,
                                        className: 'title',
                                        xalign: 0,
                                        justify: 'left',
                                        wrap: true,
                                    },
                                    {
                                        type: 'mpris/artist-label', player,
                                        className: 'artist',
                                        xalign: 0,
                                        justify: 'left',
                                        wrap: true,
                                    },
                                ],
                            },
                        ],
                    },
                    { type: 'mpris/position-slider', className: 'position-slider', player },
                    {
                        type: 'centerbox',
                        className: 'footer-box',
                        children: [
                            {
                                type: 'box',
                                children: [
                                    { type: 'mpris/position-label', player },
                                    { type: 'mpris/slash', player },
                                    { type: 'mpris/length-label', player },
                                ],
                            },
                            {
                                className: 'controls',
                                type: 'box',
                                children: [
                                    { type: 'mpris/shuffle-button', player },
                                    { type: 'mpris/previous-button', player },
                                    { type: 'mpris/play-pause-button', player },
                                    { type: 'mpris/next-button', player },
                                    { type: 'mpris/loop-button', player },
                                ],
                            },
                            {
                                type: 'mpris/player-icon', player,
                                hexpand: true,
                                halign: 'end',
                            },
                        ],
                    },
                ],
            }],
        },
    ],
});

Widget.widgets['media/popup-content'] = props => Widget({
    ...props,
    type: 'box',
    properties: [['players', new Map()]],
    connections: [
        [Mpris, (box, busName) => {
            if (!busName || box._players.has(busName))
                return;

            const widget = ags.Widget({
                type: 'mediabox',
                player: busName,
            });

            box._players.set(busName, widget);
            box.add(widget);
            widget.show();
        }, 'player-added'],
    ],
});

Widget.widgets['media/panel-indicator'] = ({
    player  = prefer,
    onClick = () => Mpris.getPlayer(player)?.playPause(),
}) => Widget({
    type: 'mpris/box',
    orientation: 'horizontal',
    children:
    [
        {
            type: 'mpris/player-icon', player,
            hexpand: true,
            halign: 'end',
        },
        {
            type: 'mpris/artist-label',
            className: 'artist',
        },
        {
            type: 'clock',
            format: '-'
        },
        {
        type: 'mpris/title-label',
        className: 'title',
       },
    ],
});
