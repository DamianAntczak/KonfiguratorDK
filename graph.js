g.setNode("summary", {node: 'summary', title: 'Oversigt'});
g.setNode("loadLevel", {});
g.setNode("step_1", {
    node: 'step_1',
    title: 'bund',
    label: 'Vælg bund',
    number: 1,
    zIndex: 10,
    optionsFilter: false,
    overlay: true,
    overlay_z: 150,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver. '
});
g.setNode("base_box", {
    node: 'base_box',
    label: 'Box bund',
    img: 'baza_base_box.jpg',
    render: '/bazy/baza_base_box_h31_novel13.png',
    colors: 'base_box_colors_7',

});
g.setNode("baza_kontynentalna", {
    node: 'baza_kontynentalna',
    label: 'Kontinentalseng',
    img: 'kontynent.jpg',
    render: '/bazy/baza_kontynentalna_h31_novel13.png',
    colors: 'kontynent_colors_7',
});
g.setNode("baza_kontynentalna_z_szuflada", {
    node: 'baza_kontynentalna_z_szuflada',
    label: 'Kontinentalseng m. opbevaring',
    img: 'kontynent_z_szuflada.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_novel13.png',
    colors: 'kontynent_szuflada_colors_7',
});
g.setNode("baza_tapicerowana", {
    node: 'baza_tapicerowana',
    label: 'Polstret sengebund',
    img: 'baza_tapicerowana.jpg',
    render: '/bazy/baza_tapicerowana_h34_novel13.png',
    colors: 'tapicerowana_colors_7',
});
g.setNode("box_podnoszony", {
    node: 'box_podnoszony',
    label: 'Box bund m. opbevaring',
    img: 'box_podnoszony.jpg',
    render: '/bazy/baza_box_podnoszony_h31_novel13.png',
    colors: 'base_podnoszony_colors_7',
});

g.setNode("base_box_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1649, g2: 1749},
    nextStep: 'bb_wezglowie'
});
g.setNode("base_box_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1769, g2: 1869},
    nextStep: 'bb_wezglowie'
});
g.setNode("base_box_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2099, g2: 2199},
    nextStep: 'bb_wezglowie'
});
g.setNode("base_box_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2398, g2: 2598},
    nextStep: 'bb_wezglowie'
});

g.setNode("baza_kontynentalna_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2099, g2: 2299},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3198, g2: 3498},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3298, g2: 3598},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3598, g2: 3898},
    nextStep: 'step_2'
});

g.setNode("baza_kontynentalna_z_szuflada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2 * 1999, g2: 2 * 2199},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_z_szuflada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2 * 2159, g2: 2 * 2359},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_z_szuflada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2 * 2349, g2: 2 * 2549},
    nextStep: 'step_2'
});
g.setNode("baza_kontynentalna_z_szuflada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3199, g2: 3399},
    nextStep: 'step_2'
});

g.setNode("baza_tapicerowana_90_200", {
    label: '90/200',
    width: 90, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie_90'
});
g.setNode("baza_tapicerowana_140_200", {
    label: '140/200',
    width: 140, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie'
});
g.setNode("baza_tapicerowana_160_200", {
    label: '160/200',
    width: 160, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie'
});
g.setNode("baza_tapicerowana_180_200", {
    label: '180/200',
    width: 180, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie'
});
g.setNode("baza_tapicerowana_200_200", {
    label: '200/200',
    width: 200, price: {g1: -1, g2: -1}, nextStep: 't_wezglowie'
});


g.setNode("box_podnoszony_140_200", {
    label: '140/200',
    width: 140, price: {g1: 3659, g2: 3859}, nextStep: 'bp_wezglowie'
});
g.setNode("box_podnoszony_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 4498, g2: 4798},
    nextStep: 'bp_wezglowie'
});
g.setNode("box_podnoszony_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4798, g2: 5098},
    nextStep: 'bp_wezglowie'
});
g.setNode("box_podnoszony_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5318, g2: 5718},
    nextStep: 'bp_wezglowie'
});

g.setNode("kontynent_colors_7", {});

g.setNode("kontynent_novel", {
    g: 2,
    name: 'novel 13',
    node: 'kontynent_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_kontynentalna_h31_novel13.png'
});
g.setNode("kontynent_roko", {
    g: 2,
    name: 'roko 8',
    node: 'kontynent_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_kontynentalna_h31_roko08.png'
});
g.setNode("kontynent_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'kontynent_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/bazy/baza_kontynentalna_h31_aspen04.png'
});

g.setNode("kontynent_river", {
    g: 2,
    name: 'river 2',
    node: 'kontynent_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/bazy/baza_kontynentalna_h31_river02.png'
});
g.setNode("kontynent_eren", {
    g: 1,
    name: 'eren 07',
    node: 'kontynent_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_kontynentalna_h31_eren07.png'
});
g.setNode("kontynent_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'kontynent_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_kontynentalna_h31_ontario90.png'
});
g.setNode("kontynent_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'kontynent_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_kontynentalna_h31_riviera38.png'
});

g.setNode("kontynent_colors_7", {});
g.setNode("kontynent_novel", {
    g: 2,
    name: 'novel 13',
    node: 'kontynent_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_kontynentalna_h31_novel13.png'
});
g.setNode("kontynent_roko", {
    g: 2,
    name: 'roko 8',
    node: 'kontynent_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_kontynentalna_h31_roko08.png'
});
g.setNode("kontynent_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'kontynent_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/bazy/baza_kontynentalna_h31_aspen04.png'
});

g.setNode("kontynent_river", {
    g: 2,
    name: 'river 2',
    node: 'kontynent_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/bazy/baza_kontynentalna_h31_river02.png'
});
g.setNode("kontynent_eren", {
    g: 1,
    name: 'eren 07',
    node: 'kontynent_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_kontynentalna_h31_eren07.png'
});
g.setNode("kontynent_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'kontynent_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_kontynentalna_h31_ontario90.png'
});
g.setNode("kontynent_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'kontynent_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_kontynentalna_h31_riviera38.png'
});

g.setNode("kontynent_szuflada_colors_7", {});
g.setNode("kontynent_szuflada_novel", {
    g: 2,
    name: 'novel 13',
    node: 'kontynent_szuflada_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_novel13.png'
});
g.setNode("kontynent_szuflada_roko", {
    g: 2,
    name: 'roko 8',
    node: 'kontynent_szuflada_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_roko08.png'
});
g.setNode("kontynent_szuflada_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'kontynent_szuflada_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_aspen04.png'
});

g.setNode("kontynent_szuflada_river", {
    g: 2,
    name: 'river 2',
    node: 'kontynent_szuflada_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_river02.png'
});
g.setNode("kontynent_szuflada_eren", {
    g: 1,
    name: 'eren 07',
    node: 'kontynent_szuflada_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_eren07.png'
});
g.setNode("kontynent_szuflada_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'kontynent_szuflada_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_ontario90.png'
});
g.setNode("kontynent_szuflada_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'kontynent_szuflada_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_kontynentalna_szuflady_h34_riviera38.png'
});

g.setNode("base_box_colors_7", {});
g.setNode("base_box_novel", {
    g: 2,
    name: 'novel 13',
    node: 'base_box_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_base_box_h31_novel13.png'
});
g.setNode("base_box_roko", {
    g: 2,
    name: 'roko 8',
    node: 'base_box_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_base_box_h31_roko08.png'
});
g.setNode("base_box_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'base_box_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/bazy/baza_base_box_h31_aspen04.png'
});

g.setNode("base_box_river", {
    g: 2,
    name: 'river 2',
    node: 'base_box_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/bazy/baza_base_box_h31_river02.png'
});
g.setNode("base_box_eren", {
    g: 1,
    name: 'eren 07',
    node: 'base_box_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_base_box_h31_eren07.png'
});
g.setNode("base_box_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'base_box_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_base_box_h31_ontario90.png'
});
g.setNode("base_box_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'base_box_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_base_box_h31_riviera38.png'
});

g.setNode("base_podnoszony_colors_7", {});

g.setNode("base_podnoszony_novel", {
    g: 2,
    name: 'novel 13',
    node: 'base_podnoszony_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_box_podnoszony_h31_novel13.png'
});
g.setNode("base_podnoszony_roko", {
    g: 2,
    name: 'roko 8',
    node: 'base_podnoszony_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_box_podnoszony_h31_roko08.png'
});
g.setNode("base_podnoszony_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'base_podnoszony_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/bazy/baza_box_podnoszony_h31_aspen04.png'
});

g.setNode("base_podnoszony_river", {
    g: 2,
    name: 'river 2',
    node: 'base_podnoszony_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/bazy/baza_box_podnoszony_h31_river02.png'
});
g.setNode("base_podnoszony_eren", {
    g: 1,
    name: 'eren 07',
    node: 'base_podnoszony_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_box_podnoszony_h31_eren07.png'
});
g.setNode("base_podnoszony_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'base_podnoszony_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_box_podnoszony_h31_ontario90.png'
});
g.setNode("base_podnoszony_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'base_podnoszony_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_box_podnoszony_h31_riviera38.png'
});

g.setNode("tapicerowana_colors_7", {});
g.setNode("tapicerowana_novel", {
    g: 2,
    name: 'novel 13',
    node: 'tapicerowana_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/bazy/baza_tapicerowana_h34_novel13.png',
    overlay: '/bazy/baza_tapicerowana_h34_novel13_add.png'
});
g.setNode("tapicerowana_roko", {
    g: 2,
    name: 'roko 8',
    node: 'tapicerowana_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/bazy/baza_tapicerowana_h34_roko08.png',
    overlay: '/bazy/baza_tapicerowana_h34_roko08_add.png'
});
g.setNode("tapicerowana_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'tapicerowana_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/bazy/baza_tapicerowana_h34_aspen04.png',
    overlay: '/bazy/baza_tapicerowana_h34_aspen04_add.png'
});
g.setNode("tapicerowana_river", {
    g: 2,
    name: 'river 2',
    node: 'tapicerowana_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/bazy/baza_tapicerowana_h34_river02.png',
    overlay: '/bazy/baza_tapicerowana_h34_river02_add.png'
});
g.setNode("tapicerowana_eren", {
    g: 1,
    name: 'eren 07',
    node: 'tapicerowana_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/bazy/baza_tapicerowana_h34_eren07.png',
    overlay: '/bazy/baza_tapicerowana_h34_eren07_add.png'
});
g.setNode("tapicerowana_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'tapicerowana_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/bazy/baza_tapicerowana_h34_ontario90.png',
    overlay: '/bazy/baza_tapicerowana_h34_ontario90_add.png'
});
g.setNode("tapicerowana_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'tapicerowana_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/bazy/baza_tapicerowana_h34_riviera38.png',
    overlay: '/bazy/baza_tapicerowana_h34_riviera38_add.png'
});

//***********************************************

g.setNode("urban_colors_7", {});
g.setNode("urban_novel", {
    g: 2,
    name: 'novel 13',
    node: 'urban_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_urban_95_novel13.png'
});
g.setNode("urban_roko", {
    g: 2,
    name: 'roko 8',
    node: 'urban_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_urban_95_roko08.png'
});
g.setNode("urban_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'urban_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_urban_95_aspen04.png'
});
g.setNode("urban_river", {
    g: 2,
    name: 'river 2',
    node: 'urban_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_urban_95_river02.png'
});
g.setNode("urban_eren", {
    g: 1,
    name: 'eren 07',
    node: 'urban_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_urban_95_eren07.png'
});
g.setNode("urban_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'urban_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_urban_95_ontario90.png'
});
g.setNode("urban_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'urban_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_urban_95_riviera38.png'
});

g.setNode("preppy_colors_7", {});
g.setNode("preppy_novel", {
    g: 2,
    name: 'novel 13',
    node: 'preppy_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_preppy_95_novel13.png'
});
g.setNode("preppy_roko", {
    g: 2,
    name: 'roko 8',
    node: 'preppy_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_preppy_95_roko08.png'
});
g.setNode("preppy_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'preppy_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_preppy_95_aspen04.png'
});
g.setNode("preppy_river", {
    g: 2,
    name: 'river 2',
    node: 'preppy_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_preppy_95_river02.png'
});
g.setNode("preppy_eren", {
    g: 1,
    name: 'eren 07',
    node: 'preppy_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_preppy_95_eren07.png'
});
g.setNode("preppy_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'preppy_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_preppy_95_ontario90.png'
});
g.setNode("preppy_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'preppy_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_preppy_95_riviera38.png'
});

g.setNode("glamour_colors_7", {});
g.setNode("glamour_novel", {
    g: 2,
    name: 'novel 13',
    node: 'glamour_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_glamour_115_novel13.png',
    overlay: '/wezglowia/wezglowie_glamour_115_novel13_add.png'
});
g.setNode("glamour_roko", {
    g: 2,
    name: 'roko 8',
    node: 'glamour_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_glamour_115_roko08.png',
    overlay: '/wezglowia/wezglowie_glamour_115_roko08_add.png'
});
g.setNode("glamour_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'glamour_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_glamour_115_aspen04.png',
    overlay: '/wezglowia/wezglowie_glamour_115_aspen04_add.png'
});
g.setNode("glamour_river", {
    g: 1,
    name: 'river 2',
    node: 'glamour_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_glamour_115_river02.png',
    overlay: '/wezglowia/wezglowie_glamour_115_river02_add.png'
});
g.setNode("glamour_eren", {
    g: 1,
    name: 'eren 07',
    node: 'glamour_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_glamour_115_eren07.png',
    overlay: '/wezglowia/wezglowie_glamour_115_eren07_add.png',
});
g.setNode("glamour_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'glamour_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_glamour_115_ontario90.png',
    overlay: '/wezglowia/wezglowie_glamour_115_ontario90_add.png'
});
g.setNode("glamour_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'glamour_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_glamour_115_riviera38.png',
    overlay: '/wezglowia/wezglowie_glamour_115_riviera38_add.png'

});

g.setNode("vintage_colors_7", {});
g.setNode("vintage_novel", {
    g: 2,
    name: 'novel 13',
    node: 'vintage_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_vintage_95_novel13.png',
    overlay: '/wezglowia/wezglowie_vintage_95_novel13_add.png'
});
g.setNode("vintage_roko", {
    g: 2,
    name: 'roko 8',
    node: 'vintage_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_vintage_95_roko08.png',
    overlay: '/wezglowia/wezglowie_vintage_95_roko08_add.png'
});
g.setNode("vintage_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'vintage_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_vintage_95_aspen04.png',
    overlay: '/wezglowia/wezglowie_vintage_95_aspen04_add.png'
});
g.setNode("vintage_river", {
    g: 2,
    name: 'river 2',
    node: 'vintage_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_vintage_95_river02.png',
    overlay: '/wezglowia/wezglowie_vintage_95_river02_add.png'
});
g.setNode("vintage_eren", {
    g: 1,
    name: 'eren 07',
    node: 'vintage_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_vintage_95_eren07.png',
    overlay: '/wezglowia/wezglowie_vintage_95_eren07_add.png'
});
g.setNode("vintage_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'vintage_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_vintage_95_ontario90.png',
    overlay: '/wezglowia/wezglowie_vintage_95_ontario90_add.png'
});
g.setNode("vintage_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'vintage_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_vintage_95_riviera38.png',
    overlay: '/wezglowia/wezglowie_vintage_95_riviera38_add.png'
});

g.setNode("eclectic_colors_7", {});
g.setNode("eclectic_novel", {
    g: 2,
    name: 'novel 13',
    node: 'eclectic_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_novel13.png'
});
g.setNode("eclectic_roko", {
    g: 2,
    name: 'roko 8',
    node: 'eclectic_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_roko08.png'
});
g.setNode("eclectic_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'eclectic_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_aspen04.png'
});
g.setNode("eclectic_river", {
    g: 2,
    name: 'river 2',
    node: 'eclectic_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_river02.png'
});
g.setNode("eclectic_eren", {
    g: 1,
    name: 'eren 07',
    node: 'eclectic_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_eren07.png'
});
g.setNode("eclectic_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'eclectic_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_ontario90.png'
});
g.setNode("eclectic_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'eclectic_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_riviera38.png'
});

g.setNode("ladylike_colors_7", {});
g.setNode("ladylike_novel", {
    g: 2,
    name: 'novel 13',
    node: 'ladylike_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_novel13.png'
});
g.setNode("ladylike_roko", {
    g: 2,
    name: 'roko 8',
    node: 'ladylike_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_roko08.png'
});
g.setNode("ladylike_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'ladylike_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_aspen04.png'
});
g.setNode("ladylike_river", {
    g: 2,
    name: 'river 2',
    node: 'ladylike_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_river02.png'
});
g.setNode("ladylike_eren", {
    g: 1,
    name: 'eren 07',
    node: 'ladylike_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_eren07.png'
});
g.setNode("ladylike_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'ladylike_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_ontario90.png'
});
g.setNode("ladylike_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'ladylike_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_riviera38.png'
});

g.setNode("momiko_colors_7", {});
g.setNode("momiko_novel", {
    g: 2,
    name: 'novel 13',
    node: 'momiko_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_momiko_95_novel13.png'
});
g.setNode("momiko_roko", {
    g: 2,
    name: 'roko 8',
    node: 'momiko_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_momiko_95_roko08.png'
});
g.setNode("momiko_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'momiko_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_momiko_95_aspen04.png'
});
g.setNode("momiko_river", {
    g: 2,
    name: 'river 2',
    node: 'momiko_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_momiko_95_river02.png'
});
g.setNode("momiko_eren", {
    g: 1,
    name: 'eren 07',
    node: 'momiko_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_momiko_95_eren07.png'
});
g.setNode("momiko_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'momiko_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_momiko_95_ontario90.png'
});
g.setNode("momiko_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'momiko_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_momiko_95_riviera38.png'
});

//**************************************************
g.setNode("urban_colors_7_170", {});
g.setNode("urban_novel_170", {
    g: 2,
    name: 'novel 13',
    node: 'urban_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_novel13.png'
});
g.setNode("urban_roko_170", {
    g: 2,
    name: 'roko 8',
    node: 'urban_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_roko08.png'
});
g.setNode("urban_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'urban_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_aspen04.png'
});
g.setNode("urban_river_170", {
    g: 2,
    name: 'river 2',
    node: 'urban_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_river02.png'
});
g.setNode("urban_eren_170", {
    g: 1,
    name: 'eren 07',
    node: 'urban_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_eren07.png'
});
g.setNode("urban_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'urban_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_ontario90.png'
});
g.setNode("urban_riviera_170", {
    g: 1,
    name: 'riviera 38',
    node: 'urban_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_riviera38.png'
});

g.setNode("preppy_colors_7_170", {});
g.setNode("preppy_novel_170", {
    g: 2,
    name: 'novel 13',
    node: 'preppy_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_novel13.png'
});
g.setNode("preppy_roko_170", {
    g: 2,
    name: 'roko 8',
    node: 'preppy_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_roko08.png'
});
g.setNode("preppy_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'preppy_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_aspen04.png'
});
g.setNode("preppy_river_170", {
    g: 2,
    name: 'river 2',
    node: 'preppy_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_river02.png'
});
g.setNode("preppy_eren_170", {
    g: 1,
    name: 'eren 07',
    node: 'preppy_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_eren07.png'
});
g.setNode("preppy_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'preppy_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_ontario90.png'
});
g.setNode("preppy_riviera_170", {
    g: 1,
    name: 'riviera 38',
    node: 'preppy_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_riviera38.png'
});
g.setNode("glamour_colors_7_170", {});
g.setNode("glamour_novel_170", {
    g: 2,
    name: 'novel 13',
    node: 'glamour_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_novel13.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_novel13_add.png'
});
g.setNode("glamour_roko_170", {
    g: 2,
    name: 'roko 8',
    node: 'glamour_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_roko08.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_roko08_add.png'
});
g.setNode("glamour_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'glamour_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_aspen04.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_aspen04_add.png'
});
g.setNode("glamour_river_170", {
    g: 2,
    name: 'river 2',
    node: 'glamour_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_river02.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_river02_add.png'
});
g.setNode("glamour_eren_170", {
    g: 1,
    name: 'eren 07',
    node: 'glamour_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_eren07.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_eren07_add.png',
});
g.setNode("glamour_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'glamour_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_ontario90.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_ontario90_add.png'
});
g.setNode("glamour_riviera_170", {
    g: 1,
    name: 'riviera 38',
    node: 'glamour_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_riviera38.png',
    overlay: '/wezglowia/wezglowie_glamour_115_170_riviera38_add.png'

});

g.setNode("vintage_colors_7_170", {});
g.setNode("vintage_novel_170", {
    g: 2,
    name: 'novel 13',
    node: 'vintage_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_novel13.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_novel13_add.png'
});
g.setNode("vintage_roko_170", {
    g: 2,
    name: 'roko 8',
    node: 'vintage_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_roko08.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_roko08_add.png'
});
g.setNode("vintage_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'vintage_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_aspen04.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_aspen04_add.png'
});
g.setNode("vintage_river_170", {
    g: 1,
    name: 'river 2',
    node: 'vintage_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_river02.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_river02_add.png'
});
g.setNode("vintage_eren_170", {
    g: 1,
    name: 'eren 07',
    node: 'vintage_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_eren07.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_eren07_add.png'
});
g.setNode("vintage_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'vintage_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_ontario90.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_ontario90_add.png'
});
g.setNode("vintage_riviera_170", {
    g: 1,
    name: 'riviera 38',
    node: 'vintage_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_riviera38.png',
    overlay: '/wezglowia/wezglowie_vintage_95_170_riviera38_add.png'
});

g.setNode("eclectic_colors_7_170", {});
g.setNode("eclectic_novel_170", {
    g: 2,
    name: 'novel 13',
    node: 'eclectic_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_novel13.png'
});
g.setNode("eclectic_roko_170", {
    g: 2,
    name: 'roko 8',
    node: 'eclectic_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_roko08.png'
});
g.setNode("eclectic_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'eclectic_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_aspen04.png'
});
g.setNode("eclectic_river_170", {
    g: 2,
    name: 'river 2',
    node: 'eclectic_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_river02.png'
});
g.setNode("eclectic_eren_170", {
    g: 1,
    name: 'eren 07',
    node: 'eclectic_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_eren07.png'
});
g.setNode("eclectic_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'eclectic_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_ontario90.png'
});
g.setNode("eclectic_riviera_170", {
    g: 1,
    name: 'riviera 38',
    node: 'eclectic_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_riviera38.png'
});

g.setNode("ladylike_colors_7_170", {});
g.setNode("ladylike_novel_170", {
    g: 2,
    name: 'novel 13',
    node: 'ladylike_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_novel13.png'
});
g.setNode("ladylike_roko_170", {
    g: 2,
    name: 'roko 8',
    node: 'ladylike_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_roko08.png'
});
g.setNode("ladylike_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'ladylike_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_aspen04.png'
});
g.setNode("ladylike_river_170", {
    g: 2,
    name: 'river 2',
    node: 'ladylike_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_river02.png'
});
g.setNode("ladylike_eren_170", {
    g: 1,
    name: 'eren 07',
    node: 'ladylike_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_eren07.png'
});
g.setNode("ladylike_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'ladylike_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_ontario90.png'
});
g.setNode("ladylike_riviera_170", {
    g: 1,
    name: 'riviera 38',
    node: 'ladylike_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_riviera38.png'
});

g.setNode("momiko_colors_7_170", {});
g.setNode("momiko_novel_170", {
    g: 2,
    name: 'novel 13',
    node: 'momiko_novel_170',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_novel13.png'
});
g.setNode("momiko_roko_170", {
    g: 2,
    name: 'roko 8',
    node: 'momiko_roko_170',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_roko08.png'
});
g.setNode("momiko_aspen_170", {
    g: 2,
    name: 'aspen 04',
    node: 'momiko_aspen_170',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_aspen04.png'
});
g.setNode("momiko_river_170", {
    g: 2,
    name: 'river 2',
    node: 'momiko_river_170',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_river02.png'
});
g.setNode("momiko_eren_170", {
    g: 1,
    name: 'eren 07',
    node: 'momiko_eren_170',
    url: './img/tkaniny/eren_07.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_eren07.png'
});
g.setNode("momiko_ontario_170", {
    g: 1,
    name: 'ontario 90',
    node: 'momiko_ontario_170',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_ontario90.png'
});
g.setNode("momiko_riviera_170", {
    g: 1,
    name: 'riviera 38',
    node: 'momiko_riviera_170',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_riviera38.png'
});

//********************************

g.setNode("covers_cashmere", {});
g.setNode("cover_cashmere", {
    g: 1,
    name: 'cashmere',
    node: 'cover_cashmere',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_italiano_tencel_new", {});
g.setNode("cover_italiano", {
    g: 1,
    name: 'italiano',
    node: 'cover_italiano',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_velvet", {});
g.setNode("cover_velvet", {
    g: 1,
    name: 'velvet',
    node: 'cover_velvet',
    url: './img/pokrowce/velvet.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_velvet_new", {
    g: 1,
    name: 'velvet new',
    node: 'cover_velvet_new',
    url: './img/pokrowce/velvet_new.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_velvet_tencel", {});
g.setNode("covers_tencel", {});
g.setNode("cover_tencel", {
    g: 2,
    name: 'tencel',
    node: 'cover_tencel',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_velvet_new_tencel_new", {});
g.setNode("covers_tencel_new", {});
g.setNode("cover_tencel_new", {
    g: 2,
    name: 'tencel new',
    node: 'cover_tencel_new',
    url: './img/pokrowce/tencel_new.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_merced_elips", {});
g.setNode("cover_merced_1", {
    g: 1,
    name: 'merced',
    node: 'cover_merced_1',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_italiano_hybrid", {});
g.setNode("cover_italiano_1", {
    g: 1,
    name: 'italiano',
    node: 'cover_italiano_1',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_merced_2", {
    g: 2,
    name: 'merced',
    node: 'cover_merced_2',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_elips_medicott", {});
g.setNode("cover_elips_1", {
    g: 1,
    name: 'elips',
    node: 'cover_elips_1',
    url: './img/pokrowce/elips.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_elips_2", {
    g: 2,
    name: 'elips',
    node: 'cover_elips_2',
    url: './img/pokrowce/elips.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_hybrid_2", {
    g: 2,
    name: 'hybrid' ,
    node: 'cover_hybrid_2',
    url: './img/pokrowce/hybrid.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_medicott", {
    g: 2,
    name: 'medicot velur',
    node: 'cover_medicott',
    url: './img/pokrowce/medicot velur.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_cashmere_tencel_top", {});
g.setNode("cover_cashmere_top", {
    g: 1,
    name: 'Cashmere',
    node: 'cover_cashmere_top',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/top_blues_h31.png'
});
g.setNode("covers_tencel_top", {});
g.setNode("cover_tencel_top", {
    g: 2,
    name: 'tencel',
    node: 'cover_tencel_top',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/top_blues_h31.png'
});

g.setNode("covers_silver", {});
g.setNode("cover_silver", {
    g: 1,
    name: 'silver',
    node: 'cover_silver',
    url: './img/pokrowce/silver.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_medicover", {});
g.setNode("cover_medicover", {
    g: 1,
    name: 'Medicover',
    node: 'cover_medicover',
    url: './img/pokrowce/medicover.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_young", {});
g.setNode("cover_young", {
    g: 1,
    name: 'Young',
    node: 'cover_young',
    url: './img/pokrowce/young.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_italiano", {});
g.setNode("cover_italiano", {
    g: 1,
    name: 'Italiano',
    node: 'cover_italiano',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_probiotex", {});
g.setNode("cover_probiotex", {
    g: 1,
    name: 'Probiotex new',
    node: 'cover_probiotex',
    url: './img/pokrowce/probiotex.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_tencel_top", {});

//*******************************************

g.setNode("bp_covers_cashmere", {});
g.setNode("bp_cover_cashmere", {
    g: 1,
    name: 'cashmere',
    node: 'bp_cover_cashmere',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_italiano_tencel_new", {});
g.setNode("bp_cover_italiano", {
    g: 1,
    name: 'italiano',
    node: 'bp_cover_italiano',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_velvet_tencel", {});
g.setNode("bp_covers_tencel", {});
g.setNode("bp_cover_tencel", {
    g: 2,
    name: 'tencel',
    node: 'bp_cover_tencel',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_velvet", {});
g.setNode("bp_cover_velvet", {
    g: 1,
    name: 'velvet',
    node: 'bp_cover_velvet',
    url: './img/pokrowce/velvet.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_velvet_new_tencel_new", {});
g.setNode("bp_covers_tencel_new", {});
g.setNode("bp_cover_tencel_new", {
    g: 2,
    name: 'tencel new',
    node: 'bp_cover_tencel_new',
    url: './img/pokrowce/tencel_new.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_velvet_new", {});
g.setNode("bp_cover_velvet_new", {
    g: 1,
    name: 'velvet<new>new',
    node: 'bp_cover_velvet_new',
    url: './img/pokrowce/velvet_new.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_merced_elips", {});
g.setNode("bp_cover_merced_1", {
    g: 1,
    name: 'merced',
    node: 'bp_cover_merced_1',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_italiano_hybrid", {});
g.setNode("bp_cover_italiano_1", {
    g: 1,
    name: 'italiano',
    node: 'bp_cover_italiano_1',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_cover_elips_2", {
    g: 2,
    name: 'elips',
    node: 'bp_cover_elips_2',
    url: './img/pokrowce/elips.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_cover_merced_2", {
    g: 2,
    name: 'merced',
    node: 'bp_cover_merced_2',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_elips_medicott", {});
g.setNode("bp_cover_elips_1", {
    g: 1,
    name: 'elips',
    node: 'bp_cover_elips_1',
    url: './img/pokrowce/elips.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_cover_hybrid_2", {
    g: 2,
    name: 'hybrid' ,
    node: 'bp_cover_hybrid_2',
    url: './img/pokrowce/hybrid.png',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_cover_medicott", {
    g: 2,
    name: 'medicot velur',
    node: 'bp_cover_medicott',
    url: './img/pokrowce/medicot velur.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_cashmere_tencel_top", {});
g.setNode("bp_cover_cashmere_top", {
    g: 1,
    name: 'Cashmere',
    node: 'bp_cover_cashmere_top',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/top_blues_h39.png'
});
g.setNode("bp_covers_tencel_top", {});
g.setNode("bp_cover_tencel_top", {
    g: 2,
    name: 'tencel',
    node: 'bp_cover_tencel_top',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/top_blues_h39.png'
});

g.setNode("bp_covers_silver", {});
g.setNode("bp_cover_silver", {
    g: 1,
    name: 'silver',
    node: 'bp_cover_silver',
    url: './img/pokrowce/silver.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_medicover", {});
g.setNode("bp_cover_medicover", {
    g: 1,
    name: 'Medicover',
    node: 'bp_cover_medicover',
    url: './img/pokrowce/medicover.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_young", {});
g.setNode("bp_cover_young", {
    g: 1,
    name: 'Young',
    node: 'bp_cover_young',
    url: './img/pokrowce/teenage.jpg',
    render: 'materace/materac_salsa_h39.png'
});
g.setNode("bp_covers_italiano", {});
g.setNode("bp_cover_italiano", {
    g: 1,
    name: 'Italiano',
    node: 'bp_cover_italiano',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_probiotex", {});
g.setNode("bp_cover_probiotex", {
    g: 1,
    name: 'Probiotex new',
    node: 'bp_cover_probiotex',
    url: './img/pokrowce/probiotex.jpg',
    render: 'materace/materac_salsa_h39.png'
});

g.setNode("bp_covers_tencel_top", {});

//*******************************************

g.setNode("covers_cashmere_t", {});
g.setNode("cover_cashmere_t", {
    g: 1,
    name: 'cashmere',
    node: 'cover_cashmere_t',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/materac_salsa_h34.png'
});

g.setNode("covers_italiano_tencel_new_t", {});
g.setNode("cover_italiano_1", {
    g: 1,
    name: 'italiano',
    node: 'cover_italiano_1',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_velvet_t", {});
g.setNode("cover_velvet_t", {
    g: 1,
    name: 'velvet',
    node: 'cover_velvet_t',
    url: './img/pokrowce/velvet.jpg',
    render: 'materace/materac_salsa_h34.png'
});
g.setNode("cover_velvet_new_t", {
    g: 1,
    name: 'velvet new',
    node: 'cover_velvet_new_t',
    url: './img/pokrowce/velvet_new.jpg',
    render: 'materace/materac_salsa_h34.png'
});

g.setNode("covers_velvet_tencel_t", {});
g.setNode("covers_tencel_t", {});
g.setNode("cover_tencel_t", {
    g: 2,
    name: 'tencel',
    node: 'cover_tencel_t',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_velvet_new_tencel_new_t", {});
g.setNode("covers_tencel_new_t", {});
g.setNode("cover_tencel_new_t", {
    g: 2,
    name: 'tencel new',
    node: 'cover_tencel_new_t',
    url: './img/pokrowce/tencel_new.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_merced_elips_t", {});
g.setNode("cover_merced_1_t", {
    g: 1,
    name: 'merced',
    node: 'cover_merced_1_t',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_elips_2_t", {
    g: 2,
    name: 'elips',
    node: 'cover_elips_2_t',
    url: './img/pokrowce/elips.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_italiano_hybrid_t", {});
g.setNode("cover_italiano_1_t", {
    g: 1,
    name: 'italiano',
    node: 'cover_italiano_1_t',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_merced_2_t", {
    g: 2,
    name: 'merced',
    node: 'cover_merced_2_t',
    url: './img/pokrowce/merced.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_elips_medicott_t", {});
g.setNode("cover_elips_1_t", {
    g: 1,
    name: 'elips',
    node: 'cover_elips_1_t',
    url: './img/pokrowce/elips.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_hybrid_2_t", {
    g: 2,
    name: 'hybrid' ,
    node: 'cover_hybrid_2_t',
    url: './img/pokrowce/hybrid.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("cover_medicott_t", {
    g: 2,
    name: 'medicot velur',
    node: 'cover_medicott_t',
    url: './img/pokrowce/medicot velur.jpg',
    render: 'materace/materac_salsa_h31.png'
});

g.setNode("covers_cashmere_tencel_top_t", {});
g.setNode("cover_cashmere_top_t", {
    g: 1,
    name: 'Cashmere',
    node: 'cover_cashmere_top_t',
    url: './img/pokrowce/cashmere.jpg',
    render: 'materace/top_blues_h31.png'
});
g.setNode("cover_tencel_top_t", {
    g: 2,
    name: 'tencel',
    node: 'cover_tencel_top_t',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/top_blues_h31.png'
});
g.setNode("covers_silver_t", {});
g.setNode("cover_silver_t", {
    g: 1,
    name: 'silver',
    node: 'cover_silver_t',
    url: './img/pokrowce/silver.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_medicover_t", {});
g.setNode("cover_medicover_t", {
    g: 1,
    name: 'Medicover',
    node: 'cover_medicover_t',
    url: './img/pokrowce/medicover.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_young_t", {});
g.setNode("cover_young_t", {
    g: 1,
    name: 'Young',
    node: 'cover_young_t',
    url: './img/pokrowce/young.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_italiano_t", {});
g.setNode("cover_italiano_t", {
    g: 1,
    name: 'Italiano',
    node: 'cover_italiano_t',
    url: './img/pokrowce/italiano.png',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_probiotex_t", {});
g.setNode("cover_probiotex_t", {
    g: 1,
    name: 'Probiotex new',
    node: 'cover_probiotex_t',
    url: './img/pokrowce/probiotex.jpg',
    render: 'materace/materac_salsa_h31.png'
});
g.setNode("covers_tencel_top_t", {});
g.setNode("cover_tencel_top_t", {
    g: 1,
    name: 'tencel',
    node: 'cover_tencel_top_t',
    url: './img/pokrowce/tencel.jpg',
    render: 'materace/materac_salsa_h31.png'
});

//********************

g.setNode("m_tap_colors_7", {});
g.setNode("m_tap_novel", {
    g: 2,
    name: 'novel 13',
    node: 'm_tap_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/materace/materac_tapicerowany_h31_novel13.png'
});
g.setNode("m_tap_roko", {
    g: 2,
    name: 'roko 8',
    node: 'm_tap_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/materace/materac_tapicerowany_h31_roko08.png'
});
g.setNode("m_tap_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'm_tap_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/materace/materac_tapicerowany_h31_aspen04.png'
});
g.setNode("m_tap_river", {
    g: 2,
    name: 'river 2',
    node: 'm_tap_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/materace/materac_tapicerowany_h31_river02.png'
});
g.setNode("m_tap_eren", {
    g: 1,
    name: 'eren 07',
    node: 'm_tap_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/materace/materac_tapicerowany_h31_eren07.png'
});
g.setNode("m_tap_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'm_tap_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/materace/materac_tapicerowany_h31_ontario90.png'
});
g.setNode("m_tap_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'm_tap_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/materace/materac_tapicerowany_h31_riviera38.png'
});

//**********************************************************

g.setNode("bp_tap_colors_7", {});
g.setNode("bp_tap_novel", {
    g: 2,
    name: 'novel 13',
    node: 'bp_tap_novel',
    url: './img/tkaniny/novel_13_anthracite.jpg',
    render: '/materace/materac_tapicerowany_h31_novel13.png'
});
g.setNode("bp_tap_roko", {
    g: 2,
    name: 'roko 8',
    node: 'bp_tap_roko',
    url: './img/tkaniny/Roko088_blue.jpg',
    render: '/materace/materac_tapicerowany_h31_roko08.png'
});
g.setNode("bp_tap_aspen", {
    g: 2,
    name: 'aspen 04',
    node: 'bp_tap_aspen',
    url: './img/tkaniny/aspen_04_light.jpg',
    render: '/materace/materac_tapicerowany_h31_aspen04.png'
});
g.setNode("bp_tap_river", {
    g: 2,
    name: 'river 2',
    node: 'bp_tap_river',
    url: './img/tkaniny/river_02_silver.jpg',
    render: '/materace/materac_tapicerowany_h31_river02.png'
});
g.setNode("bp_tap_eren", {
    g: 1,
    name: 'eren 07',
    node: 'bp_tap_eren',
    url: './img/tkaniny/eren_07.jpg',
    render: '/materace/materac_tapicerowany_h31_eren07.png'
});
g.setNode("bp_tap_ontario", {
    g: 1,
    name: 'ontario 90',
    node: 'bp_tap_ontario',
    url: './img/tkaniny/ontario_90.jpg',
    render: '/materace/materac_tapicerowany_h31_ontario90.png'
});
g.setNode("bp_tap_riviera", {
    g: 1,
    name: 'riviera 38',
    node: 'bp_tap_riviera',
    url: './img/tkaniny/riviera_38.jpg',
    render: '/materace/materac_tapicerowany_h31_riviera38.png'
});

//***********************************************************************

g.setNode("step_2", {
    node: 'step_2',
    title: ' Vælg sengegavl',
    label: 'Vælg sengegavl',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    overlay_z: 200,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver. '
});

g.setNode("glamour", {
    node: 'glamour',
    label: 'Glamour',
    img: 'glamour.jpg',
    render: '/wezglowia/wezglowie_glamour_115_novel13.png',
    colors: 'glamour_colors_7',
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage", {
    node: 'vintage',
    label: 'Vintage',
    img: 'vintage.jpg',
    render: '/wezglowia/wezglowie_vintage_95_novel13.png',
    colors: 'vintage_colors_7',
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic", {
    node: 'eclectic',
    label: 'Eclectic',
    img: 'electric.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_novel13.png',
    colors: 'eclectic_colors_7',
    nextStep: 'step_typ_materaca'
});
g.setNode("ladylike", {
    node: 'ladylike',
    label: 'Ladylike',
    img: 'ladylike.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_novel13.png',
    colors: 'ladylike_colors_7',
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy", {
    node: 'preppy',
    label: 'Preppy',
    img: 'preppy.jpg',
    render: '/wezglowia/wezglowie_preppy_95_novel13.png',
    colors: 'preppy_colors_7',
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko", {
    node: 'momiko',
    label: 'Momiko',
    img: 'momiko.jpg',
    render: '/wezglowia/wezglowie_momiko_95_novel13.png',
    colors: 'momiko_colors_7',
    nextStep: 'step_typ_materaca'
});
g.setNode("urban", {
    node: 'urban',
    label: 'Urban',
    img: 'urban.jpg',
    render: '/wezglowia/wezglowie_urban_95_novel13.png',
    colors: 'urban_colors_7',
    nextStep: 'step_typ_materaca'
});

g.setNode("bb_wezglowie", {
    node: 'bb_wezglowie',
    title: ' Vælg sengegavl',
    label: 'Vælg sengegavl',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    overlay_z: 200,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver. '
});

g.setNode("bb_wezglowie_glamour", {
    node: 'bb_wezglowie_glamour',
    label: 'Glamour',
    img: 'glamour.jpg',
    render: '/wezglowia/wezglowie_glamour_115_novel13.png',
    colors: 'glamour_colors_7',
    nextStep: 'legs'
});
g.setNode("bb_wezglowie_vintage", {
    node: 'bb_wezglowie_vintage',
    label: 'Vintage',
    img: 'vintage.jpg',
    render: '/wezglowia/wezglowie_vintage_95_novel13.png',
    colors: 'vintage_colors_7',
    nextStep: 'legs'
});
g.setNode("bb_wezglowie_eclectic", {
    node: 'bb_wezglowie_eclectic',
    label: 'Eclectic',
    img: 'electric.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_novel13.png',
    colors: 'eclectic_colors_7',
    nextStep: 'legs'
});
g.setNode("bb_wezglowie_ladylike", {
    node: 'bb_wezglowie_ladylike',
    label: 'Ladylike',
    img: 'ladylike.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_novel13.png',
    colors: 'ladylike_colors_7',
    nextStep: 'legs'
});
g.setNode("bb_wezglowie_preppy", {
    node: 'bb_wezglowie_preppy',
    label: 'Preppy',
    img: 'preppy.jpg',
    render: '/wezglowia/wezglowie_preppy_95_novel13.png',
    colors: 'preppy_colors_7',
    nextStep: 'legs'
});
g.setNode("bb_wezglowie_momiko", {
    node: 'bb_wezglowie_momiko',
    label: 'Momiko',
    img: 'momiko.jpg',
    render: '/wezglowia/wezglowie_momiko_95_novel13.png',
    colors: 'momiko_colors_7',
    nextStep: 'legs'
});
g.setNode("bb_wezglowie_urban", {
    node: 'bb_wezglowie_urban',
    label: 'Urban',
    img: 'urban.jpg',
    render: '/wezglowia/wezglowie_urban_95_novel13.png',
    colors: 'urban_colors_7',
    nextStep: 'legs'
});

g.setNode("bp_wezglowie", {
    node: 'bp_wezglowie',
    title: ' Vælg sengegavl',
    label: 'Vælg sengegavl',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    overlay_z: 200,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver. '
});

g.setNode("bp_wezglowie_glamour", {
    node: 'bp_wezglowie_glamour',
    label: 'Glamour',
    img: 'glamour.jpg',
    render: '/wezglowia/wezglowie_glamour_115_novel13.png',
    colors: 'glamour_colors_7',
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_wezglowie_vintage", {
    node: 'bp_wezglowie_vintage',
    label: 'Vintage',
    img: 'vintage.jpg',
    render: '/wezglowia/wezglowie_vintage_95_novel13.png',
    colors: 'vintage_colors_7',
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_wezglowie_eclectic", {
    node: 'bp_wezglowie_eclectic',
    label: 'Eclectic',
    img: 'electric.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_novel13.png',
    colors: 'eclectic_colors_7',
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_wezglowie_ladylike", {
    node: 'bp_wezglowie_ladylike',
    label: 'Ladylike',
    img: 'ladylike.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_novel13.png',
    colors: 'ladylike_colors_7',
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_wezglowie_preppy", {
    node: 'bp_wezglowie_preppy',
    label: 'Preppy',
    img: 'preppy.jpg',
    render: '/wezglowia/wezglowie_preppy_95_novel13.png',
    colors: 'preppy_colors_7',
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_wezglowie_momiko", {
    node: 'bp_wezglowie_momiko',
    label: 'Momiko',
    img: 'momiko.jpg',
    render: '/wezglowia/wezglowie_momiko_95_novel13.png',
    colors: 'momiko_colors_7',
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_wezglowie_urban", {
    node: 'bp_wezglowie_urban',
    label: 'Urban',
    img: 'urban.jpg',
    render: '/wezglowia/wezglowie_urban_95_novel13.png',
    colors: 'urban_colors_7',
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("t_wezglowie", {
    node: 't_wezglowie',
    title: ' Vælg sengegavl',
    label: 'Vælg sengegavl',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    overlay_z: 200,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver. ',
});

g.setNode("t_wezglowie_glamour", {
    node: 't_wezglowie_glamour',
    label: 'Glamour',
    img: 'glamour.jpg',
    render: '/wezglowia/wezglowie_glamour_115_170_novel13.png',
    colors: 'glamour_colors_7_170',
    nextStep: 'legs',
});
g.setNode("t_wezglowie_vintage", {
    node: 't_wezglowie_vintage',
    label: 'Vintage',
    img: 'vintage.jpg',
    render: '/wezglowia/wezglowie_vintage_95_170_novel13.png',
    colors: 'vintage_colors_7_170',
    nextStep: 'legs',
});
g.setNode("t_wezglowie_eclectic", {
    node: 't_wezglowie_eclectic',
    label: 'Eclectic',
    img: 'electric.jpg',
    render: '/wezglowia/wezglowie_eclectic_95_170_novel13.png',
    colors: 'eclectic_colors_7_170',
    nextStep: 'legs',
});
g.setNode("t_wezglowie_ladylike", {
    node: 't_wezglowie_ladylike',
    label: 'Ladylike',
    img: 'ladylike.jpg',
    render: '/wezglowia/wezglowie_ladylike_115_170_novel13.png',
    colors: 'ladylike_colors_7_170',
    nextStep: 'legs',
});
g.setNode("t_wezglowie_preppy", {
    node: 't_wezglowie_preppy',
    label: 'Preppy',
    img: 'preppy.jpg',
    render: '/wezglowia/wezglowie_preppy_95_170_novel13.png',
    colors: 'preppy_colors_7_170',
    nextStep: 'legs',
});
g.setNode("t_wezglowie_momiko", {
    node: 't_wezglowie_momiko',
    label: 'Momiko',
    img: 'momiko.jpg',
    render: '/wezglowia/wezglowie_momiko_95_170_novel13.png',
    colors: 'momiko_colors_7_170',
    nextStep: 'legs',
});

g.setNode("t_wezglowie_90", {
    node: 't_wezglowie_90',
    title: ' Vælg sengegavl',
    label: 'Vælg sengegavl',
    number: 2,
    zIndex: 5,
    colors: 'colors_7',
    optionsFilter: true,
    overlay: true,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver. '
});
g.setNode("t_wezglowie_urban", {
    node: 't_wezglowie_urban',
    label: 'Urban',
    img: 'urban.jpg',
    render: '/wezglowia/wezglowie_urban_95_170_novel13.png',
    colors: 'urban_colors_7_170',
    nextStep: 'legs',
});

//*******************************************88

g.setNode("urban_140_95", {
    label: '95',
    width: 140,
    price: {g1: 749, g2: 849},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_160_95", {
    label: '95',
    width: 160,
    price: {g1: 799, g2: 899},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_180_95", {
    label: '95',
    width: 180,
    price: {g1: 899, g2: 999},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_200_95", {
    label: '95',
    width: 200,
    price: {g1: 999, g2: 1099},
    nextStep: 'step_typ_materaca'
});

g.setNode("urban_140_115", {
    label: '115',
    width: 140,
    price: {g1: 799, g2: 899},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_160_115", {
    label: '115',
    width: 160,
    price: {g1: 849, g2: 949},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_180_115", {
    label: '115',
    width: 180,
    price: {g1: 949, g2: 1049},
    nextStep: 'step_typ_materaca'
});
g.setNode("urban_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1049, g2: 1149},
    nextStep: 'step_typ_materaca'
});

g.setNode("preppy_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1169, g2: 1269},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1199, g2: 1299},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1299, g2: 1399},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1399, g2: 1499},
    nextStep: 'step_typ_materaca'
});

g.setNode("preppy_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1269, g2: 1369},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1299, g2: 1399},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1399, g2: 1499},
    nextStep: 'step_typ_materaca'
});
g.setNode("preppy_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1599, g2: 1699},
    nextStep: 'step_typ_materaca'
});

g.setNode("glamour_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1369, g2: 1469},
    nextStep: 'step_typ_materaca'
});
g.setNode("glamour_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1399, g2: 1499},
    nextStep: 'step_typ_materaca'
});
g.setNode("glamour_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1559, g2: 1659},
    nextStep: 'step_typ_materaca'
});
g.setNode("glamour_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1699, g2: 1799},
    nextStep: 'step_typ_materaca'
});

g.setNode("vintage_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1029, g2: 1129},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1059, g2: 1159},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1159, g2: 1259},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'step_typ_materaca'
});

g.setNode("vintage_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1169, g2: 1269},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1199, g2: 1299},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1299, g2: 1399},
    nextStep: 'step_typ_materaca'
});
g.setNode("vintage_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1499, g2: 1599},
    nextStep: 'step_typ_materaca'
});

g.setNode("momiko_140_95", {
    label: '95',
    width: 140,
    price: {g1: 869, g2: 969},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_160_95", {
    label: '95',
    width: 160,
    price: {g1: 899, g2: 999},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_180_95", {
    label: '95',
    width: 180,
    price: {g1: 999, g2: 1099},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1099, g2: 1199},
    nextStep: 'step_typ_materaca'
});

g.setNode("momiko_140_115", {
    label: '115',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_160_115", {
    label: '115',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'step_typ_materaca'
});
g.setNode("momiko_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'step_typ_materaca'
});

g.setNode("eclectic_140_95", {
    label: '95',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_160_95", {
    label: '95',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'step_typ_materaca'
});

g.setNode("eclectic_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1069, g2: 1169},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1099, g2: 1199},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1199, g2: 1299},
    nextStep: 'step_typ_materaca'
});
g.setNode("eclectic_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1399, g2: 1499},
    nextStep: 'step_typ_materaca'
});

g.setNode("ladylike_140_115", {
    label: '115',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'step_typ_materaca'
});
g.setNode("ladylike_160_115", {
    label: '115',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'step_typ_materaca'
});
g.setNode("ladylike_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'step_typ_materaca'
});
g.setNode("ladylike_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'step_typ_materaca'
});

//*********************************************

g.setNode("bb_urban_140_95", {
    label: '95',
    width: 140,
    price: {g1: 749, g2: 849},
    nextStep: 'legs'
});
g.setNode("bb_urban_160_95", {
    label: '95',
    width: 160,
    price: {g1: 799, g2: 899},
    nextStep: 'legs'
});
g.setNode("bb_urban_180_95", {
    label: '95',
    width: 180,
    price: {g1: 899, g2: 999},
    nextStep: 'legs'
});
g.setNode("bb_urban_200_95", {
    label: '95',
    width: 200,
    price: {g1: 999, g2: 1099},
    nextStep: 'legs'
});

g.setNode("bb_urban_140_115", {
    label: '115',
    width: 140,
    price: {g1: 799, g2: 899},
    nextStep: 'legs'
});
g.setNode("bb_urban_160_115", {
    label: '115',
    width: 160,
    price: {g1: 849, g2: 949},
    nextStep: 'legs'
});
g.setNode("bb_urban_180_115", {
    label: '115',
    width: 180,
    price: {g1: 949, g2: 1049},
    nextStep: 'legs'
});
g.setNode("bb_urban_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1049, g2: 1149},
    nextStep: 'legs'
});

g.setNode("bb_preppy_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1169, g2: 1269},
    nextStep: 'legs'
});
g.setNode("bb_preppy_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1199, g2: 1299},
    nextStep: 'legs'
});
g.setNode("bb_preppy_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1299, g2: 1399},
    nextStep: 'legs'
});
g.setNode("bb_preppy_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1399, g2: 1499},
    nextStep: 'legs'
});

g.setNode("bb_preppy_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1269, g2: 1369},
    nextStep: 'legs'
});
g.setNode("bb_preppy_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1299, g2: 1399},
    nextStep: 'legs'
});
g.setNode("bb_preppy_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1399, g2: 1499},
    nextStep: 'legs'
});
g.setNode("bb_preppy_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1599, g2: 1699},
    nextStep: 'legs'
});

g.setNode("bb_glamour_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1369, g2: 1469},
    nextStep: 'legs'
});
g.setNode("bb_glamour_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1399, g2: 1499},
    nextStep: 'legs'
});
g.setNode("bb_glamour_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1559, g2: 1659},
    nextStep: 'legs'
});
g.setNode("bb_glamour_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1699, g2: 1799},
    nextStep: 'legs'
});

g.setNode("bb_vintage_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1029, g2: 1129},
    nextStep: 'legs'
});
g.setNode("bb_vintage_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1059, g2: 1159},
    nextStep: 'legs'
});
g.setNode("bb_vintage_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1159, g2: 1259},
    nextStep: 'legs'
});
g.setNode("bb_vintage_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'legs'
});

g.setNode("bb_vintage_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1169, g2: 1269},
    nextStep: 'legs'
});
g.setNode("bb_vintage_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1199, g2: 1299},
    nextStep: 'legs'
});
g.setNode("bb_vintage_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1299, g2: 1399},
    nextStep: 'legs'
});
g.setNode("bb_vintage_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1499, g2: 1599},
    nextStep: 'legs'
});

g.setNode("bb_momiko_140_95", {
    label: '95',
    width: 140,
    price: {g1: 869, g2: 969},
    nextStep: 'legs'
});
g.setNode("bb_momiko_160_95", {
    label: '95',
    width: 160,
    price: {g1: 899, g2: 999},
    nextStep: 'legs'
});
g.setNode("bb_momiko_180_95", {
    label: '95',
    width: 180,
    price: {g1: 999, g2: 1099},
    nextStep: 'legs'
});
g.setNode("bb_momiko_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1099, g2: 1199},
    nextStep: 'legs'
});

g.setNode("bb_momiko_140_115", {
    label: '115',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'legs'
});
g.setNode("bb_momiko_160_115", {
    label: '115',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'legs'
});
g.setNode("bb_momiko_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'legs'
});
g.setNode("bb_momiko_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'legs'
});

g.setNode("bb_eclectic_140_95", {
    label: '95',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_160_95", {
    label: '95',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'legs'
});

g.setNode("bb_eclectic_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1069, g2: 1169},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1099, g2: 1199},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1199, g2: 1299},
    nextStep: 'legs'
});
g.setNode("bb_eclectic_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1399, g2: 1499},
    nextStep: 'legs'
});

g.setNode("bb_ladylike_140_115", {
    label: '115',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'legs'
});
g.setNode("bb_ladylike_160_115", {
    label: '115',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'legs'
});
g.setNode("bb_ladylike_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'legs'
});
g.setNode("bb_ladylike_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'legs'
});

//****************************

g.setNode("bp_urban_140_95", {
    label: '95',
    width: 140,
    price: {g1: 749, g2: 849},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_160_95", {
    label: '95',
    width: 160,
    price: {g1: 799, g2: 899},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_180_95", {
    label: '95',
    width: 180,
    price: {g1: 899, g2: 999},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_200_95", {
    label: '95',
    width: 200,
    price: {g1: 999, g2: 1099},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_urban_140_115", {
    label: '115',
    width: 140,
    price: {g1: 799, g2: 899},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_160_115", {
    label: '115',
    width: 160,
    price: {g1: 849, g2: 949},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_180_115", {
    label: '115',
    width: 180,
    price: {g1: 949, g2: 1049},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_urban_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1049, g2: 1149},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_preppy_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1169, g2: 1269},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1199, g2: 1299},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1299, g2: 1399},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1399, g2: 1499},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_preppy_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1269, g2: 1369},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1299, g2: 1399},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1399, g2: 1499},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_preppy_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1599, g2: 1699},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_glamour_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1369, g2: 1469},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_glamour_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1399, g2: 1499},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_glamour_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1559, g2: 1659},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_glamour_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1699, g2: 1799},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_vintage_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1029, g2: 1129},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1059, g2: 1159},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1159, g2: 1259},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_vintage_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1169, g2: 1269},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1199, g2: 1299},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1299, g2: 1399},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_vintage_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1499, g2: 1599},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_momiko_140_95", {
    label: '95',
    width: 140,
    price: {g1: 869, g2: 969},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_160_95", {
    label: '95',
    width: 160,
    price: {g1: 899, g2: 999},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_180_95", {
    label: '95',
    width: 180,
    price: {g1: 999, g2: 1099},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1099, g2: 1199},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_momiko_140_115", {
    label: '115',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_160_115", {
    label: '115',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_momiko_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_eclectic_140_95", {
    label: '95',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_160_95", {
    label: '95',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_200_95", {
    label: '95',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_eclectic_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1069, g2: 1169},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1099, g2: 1199},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1199, g2: 1299},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_eclectic_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1399, g2: 1499},
    nextStep: 'bp_step_typ_materaca'
});

g.setNode("bp_ladylike_140_115", {
    label: '115',
    width: 140,
    price: {g1: 969, g2: 1069},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_ladylike_160_115", {
    label: '115',
    width: 160,
    price: {g1: 999, g2: 1099},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_ladylike_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1099, g2: 1199},
    nextStep: 'bp_step_typ_materaca'
});
g.setNode("bp_ladylike_200_115", {
    label: '115',
    width: 200,
    price: {g1: 1259, g2: 1359},
    nextStep: 'bp_step_typ_materaca'
});

//****************************

g.setNode("t_urban_90_95", {
    label: '90/95',
    width: 90,
    price: {g1: 1489, g2: 1689},
    nextStep: 't_legs'
});
g.setNode("t_urban_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1559, g2: 1759},
    nextStep: 't_legs'
});
g.setNode("t_urban_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1649, g2: 1849},
    nextStep: 't_legs'
});
g.setNode("t_urban_180_95", {
    label: '95',
    width: 180,
    price: {g1: 1869, g2: 2069},
    nextStep: 't_legs'
});
g.setNode("t_urban_200_95", {
    label: '95',
    width: 200,
    price: {g1: 2149, g2: 2349},
    nextStep: 't_legs'
});

g.setNode("t_urban_90_115", {
    label: '115',
    width: 90,
    price: {g1: 1569, g2: 1769},
    nextStep: 't_legs'
});
g.setNode("t_urban_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1639, g2: 1839},
    nextStep: 't_legs'
});
g.setNode("t_urban_160_115", {
    label: '115',
    width: 160,
    price: {g1: 1749, g2: 1949},
    nextStep: 't_legs'
});
g.setNode("t_urban_180_115", {
    label: '115',
    width: 180,
    price: {g1: 1969, g2: 2169},
    nextStep: 't_legs'
});
g.setNode("t_urban_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2249, g2: 2449},
    nextStep: 't_legs'
});

g.setNode("t_preppy_140_95", {
    label: '95',
    width: 140,
    price: {g1: 2139, g2: 2339},
    nextStep: 't_legs'
});
g.setNode("t_preppy_160_95", {
    label: '95',
    width: 160,
    price: {g1: 2249, g2: 2449},
    nextStep: 't_legs'
});
g.setNode("t_preppy_180_95", {
    label: '95',
    width: 180,
    price: {g1: 2469, g2: 2669},
    nextStep: 't_legs'
});
g.setNode("t_preppy_200_95", {
    label: '95',
    width: 200,
    price: {g1: 2789, g2: 2989},
    nextStep: 't_legs'
});

g.setNode("t_preppy_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2239, g2: 2439},
    nextStep: 't_legs'
});
g.setNode("t_preppy_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2349, g2: 2549},
    nextStep: 't_legs'
});
g.setNode("t_preppy_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2569, g2: 2769},
    nextStep: 't_legs'
});
g.setNode("t_preppy_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2989, g2: 3189},
    nextStep: 't_legs'
});
g.setNode("t_glamour_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2339, g2: 2539},
    nextStep: 't_legs'
});
g.setNode("t_glamour_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2449, g2: 2649},
    nextStep: 't_legs'
});
g.setNode("t_glamour_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2729, g2: 2929},
    nextStep: 't_legs'
});
g.setNode("t_glamour_200_115", {
    label: '115',
    width: 200,
    price: {g1: 3089, g2: 3289},
    nextStep: 't_legs'
});

g.setNode("t_vintage_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1999, g2: 2199},
    nextStep: 't_legs'
});
g.setNode("t_vintage_160_95", {
    label: '95',
    width: 160,
    price: {g1: 2109, g2: 2309},
    nextStep: 't_legs'
});
g.setNode("t_vintage_180_95", {
    label: '95',
    width: 180,
    price: {g1: 2329, g2: 2529},
    nextStep: 't_legs'
});
g.setNode("t_vintage_200_95", {
    label: '95',
    width: 200,
    price: {g1: 2649, g2: 2849},
    nextStep: 't_legs'
});
g.setNode("t_vintage_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2139, g2: 2339},
    nextStep: 't_legs'
});
g.setNode("t_vintage_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2249, g2: 2449},
    nextStep: 't_legs'
});
g.setNode("t_vintage_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2469, g2: 2669},
    nextStep: 't_legs'
});
g.setNode("t_vintage_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2889, g2: 3089},
    nextStep: 't_legs'
});
g.setNode("t_momiko_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1839, g2: 2039},
    nextStep: 't_legs'
});
g.setNode("t_momiko_160_95", {
    label: '95',
    width: 160,
    price: {g1: 1949, g2: 2149},
    nextStep: 't_legs'
});
g.setNode("t_momiko_180_95", {
    label: '95',
    width: 180,
    price: {g1: 2169, g2: 2369},
    nextStep: 't_legs'
});
g.setNode("t_momiko_200_95", {
    label: '95',
    width: 200,
    price: {g1: 2489, g2: 2689},
    nextStep: 't_legs'
});
g.setNode("t_momiko_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1939, g2: 2139},
    nextStep: 't_legs'
});
g.setNode("t_momiko_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2049, g2: 2249},
    nextStep: 't_legs'
});
g.setNode("t_momiko_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2269, g2: 2469},
    nextStep: 't_legs'
});
g.setNode("t_momiko_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2649, g2: 2849},
    nextStep: 't_legs'
});

g.setNode("t_eclectic_140_95", {
    label: '95',
    width: 140,
    price: {g1: 1939, g2: 2139},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_160_95", {
    label: '95',
    width: 160,
    price: {g1: 2049, g2: 2249},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_180_95", {
    label: '95',
    width: 180,
    price: {g1: 2269, g2: 2469},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_200_95", {
    label: '95',
    width: 200,
    price: {g1: 2649, g2: 2849},
    nextStep: 't_legs'
});

g.setNode("t_eclectic_140_115", {
    label: '115',
    width: 140,
    price: {g1: 2039, g2: 2239},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2149, g2: 2349},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2369, g2: 2569},
    nextStep: 't_legs'
});
g.setNode("t_eclectic_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2789, g2: 2989},
    nextStep: 't_legs'
});

g.setNode("t_ladylike_140_115", {
    label: '115',
    width: 140,
    price: {g1: 1939, g2: 2139},
    nextStep: 't_legs'
});
g.setNode("t_ladylike_160_115", {
    label: '115',
    width: 160,
    price: {g1: 2049, g2: 2249},
    nextStep: 't_legs'
});
g.setNode("t_ladylike_180_115", {
    label: '115',
    width: 180,
    price: {g1: 2269, g2: 2469},
    nextStep: 't_legs'
});
g.setNode("t_ladylike_200_115", {
    label: '115',
    width: 200,
    price: {g1: 2649, g2: 2849},
    nextStep: 't_legs'
});


///-------------------------LEGS------------------

g.setNode("legs", {
    node: 'legs',
    title: 'Sengeben',
    label: 'vælg sengeben',
    number: 3,
    zIndex: 7,
    optionsFilter: true
});

g.setNode("stozek_owal_buk", {
    label: 'Oval bøg kegle-type ben',
    img: 'stozek_owal_buk.jpg',
    render: '/nogi/noga_stozek_owal_buk.png'
});

g.setNode("stozek_owal_dab", {
    label: 'Oval egetræ kegle-type ben',
    img: 'stozek_owal_dab.jpg',
    render: '/nogi/noga_stozek_owal_dab.png'
});

g.setNode("stozek_owal_wenge", {
    label: 'Oval wenge kegle-type ben',
    img: 'stozek_owal_wenge.jpg',
    render: '/nogi/noga_stozek_owal_wenge.png'
});

g.setNode("stozek_kwadrat_buk", {
    label: 'Firkantet bøg kegle-type ben',
    img: 'stozek_kwadrat_buk.jpg',
    render: '/nogi/noga_stozek_kwadrat_buk.png'
});

g.setNode("stozek_kwadrat_dab", {
    label: 'Firkantet egetræ kegle-type ben',
    img: 'stozek_kwadrat_dab.jpg',
    render: '/nogi/noga_stozek_kwadrat_dab.png'
});

g.setNode("stozek_kwadrat_wenge", {
    label: 'Firkantet wenge kegle-type bene',
    img: 'stozek_kwadrat_wenge.jpg',
    render: '/nogi/noga_stozek_kwadrat_wenge.png'
});

g.setNode("stozek_skos_buk", {
    label: 'Skrå bøg kegle-type ben',
    img: 'stozek_skos_buk.jpg',
    render: '/nogi/noga_stozek_skos_buk.png'
});

g.setNode("stozek_skos_dab", {
    label: 'Skrå egetræ kegle-type ben',
    img: 'stozek_skos_dab.jpg',
    render: '/nogi/noga_stozek_skos_dab.png'
});

g.setNode("stozek_skos_wenge", {
    label: 'Skrå wenge kegle-type ben',
    img: 'stozek_skos_wenge.jpg',
    render: '/nogi/noga_stozek_skos_wenge.png'
});

g.setNode("stozek_ze_stopka_czern", {
    label: 'Sort kegle-type ben',
    img: 'stozek_ze_stopka_czern.jpg',
    render: '/nogi/noga_stozek_stopka_czern.png'
});

g.setNode("stozek_ze_stopka_miedz", {
    label: 'Kobber kegle-type ben',
    img: 'stozek_ze_stopka_miedz.jpg',
    render: '/nogi/noga_stozek_stopka_miedz.png'
});

g.setNode("stozek_ze_stopka_srebro", {
    label: 'Sølv kegle-type ben',
    img: 'stozek_ze_stopka_srebro.jpg',
    render: '/nogi/noga_stozek_stopka_srebro.png'
});

g.setNode("trojkat_prosty_czern", {
    label: 'Sort trekant-type ben',
    img: 'trojkat_prosty_czern.jpg',
    render: '/nogi/noga_trojkat_prosty_czern.png'
});

g.setNode("trojkat_prosty_miedz", {
    label: 'Kobber trakabt-type ben',
    img: 'trojkat_prosty_miedz.jpg',
    render: '/nogi/noga_trojkat_prosty_miedz.png'
});

g.setNode("trojkat_prosty_srebro", {
    label: 'Sølv enkel trekant-type ben',
    img: 'trojkat_prosty_srebro.jpg',
    render: '/nogi/noga_trojkat_prosty_srebro.png'
});

g.setNode("trojkat_skosny_czern", {
    label: 'Sort skrå-trekant type ben',
    img: 'trojkat_skosny_czern.jpg',
    render: '/nogi/noga_trojkat_skos_czern.png'
});

g.setNode("trojkat_skosny_miedz", {
    label: 'Kobber skrå-trekant type ben',
    img: 'trojkat_skosny_miedz.jpg',
    render: '/nogi/noga_trojkat_skos_miedz.png'
});

g.setNode("trojkat_skosny_srebro", {
    label: 'Sølv skrå-trekant type ben',
    img: 'trojkat_skosny_srebro.jpg',
    render: '/nogi/noga_trojkat_skos_srebro.png'
});

g.setNode("walek_czern", {
    label: 'Wałek czerń',
    img: 'walek_czern.jpg',
    render: '/nogi/noga_walek_czern.png'
});

g.setNode("walek_czern", {
    label: 'Wałek czerń',
    img: 'walek_czern.jpg',
    render: '/nogi/noga_walek_czern.png'
});

g.setNode("walek_miedz", {
    label: 'Kobber rulle ben',
    img: 'walek_miedz.jpg',
    render: '/nogi/noga_walek_miedz.png'
});

g.setNode("walek_srebro", {
    label: 'Sølv rulle ben',
    img: 'walek_srebro.jpg',
    render: '/nogi/noga_walek_srebro.png'
});

g.setNode("kielich_czern", {
    label: 'Sorte champaigneben',
    img: 'kielich_czern.jpg',
    render: '/nogi/noga_kielich_czern.png'
});

g.setNode("kielich_miedz", {
    label: 'Kobber champaigneben',
    img: 'kielich_miedz.jpg',
    render: '/nogi/noga_kielich_miedz.png'
});

g.setNode("kielich_srebro", {
    label: 'Sølv champaigneben',
    img: 'kielich_srebro.jpg',
    render: '/nogi/noga_kielich_srebro.png'
});

g.setNode("naroznik_czern", {
    label: 'Sort hjørne ben',
    img: 'naroznik_czern.jpg',
    render: '/nogi/noga_naroznik_czern.png'
});

g.setNode("naroznik_miedz", {
    label: 'Kobber hjørne ben',
    img: 'naroznik_miedz.jpg',
    render: '/nogi/noga_naroznik_miedz.png'
});

g.setNode("naroznik_srebro", {
    label: 'Sølv hjørne ben',
    img: 'naroznik_srebro.jpg',
    render: '/nogi/noga_naroznik_srebro.png'
});

g.setNode("ploza_buk", {
    label: 'Bøg ski-type sengebunds ben',
    img: 'ploza_buk.jpg',
    render: '/nogi/ploza_buk.png'
});
g.setNode("ploza_dab", {
    label: 'Eg ski-type sengebunds ben',
    img: 'ploza_dab.jpg',
    render: '/nogi/ploza_dab.png'
});
g.setNode("ploza_wenge", {
    label: 'Sort ski-type sengebunds ben',
    img: 'ploza_wenge.jpg',
    render: '/nogi/ploza_wenge.png'
});

g.setNode("stozek_owal_buk_16", {
    label: '16',
    price: {g1: 101.0, g2: 101.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_owal_wenge_16", {
    label: '16',
    price: {g1: 101.0, g2: 101.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_owal_dab_16", {
    label: '16',
    price: {g1: 132.0, g2: 132.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_kwadrat_buk_16", {
    label: '16',
    price: {g1: 108.0, g2: 108.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_kwadrat_wenge_16", {
    label: '16',
    price: {g1: 108.0, g2: 108.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_kwadrat_dab_16", {
    label: '16',
    price: {g1: 139.0, g2: 139.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_skos_buk_16", {
    label: '16',
    price: {g1: 36.0, g2: 36.0},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_skos_dab_16", {
    label: '16',
    price: {g1: 50, g2: 50},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_skos_wenge_16", {
    label: '16',
    price: {g1: 36, g2: 36},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_ze_stopka_czern_16", {
    label: '16',
    price: {g1: 173, g2: 173},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_ze_stopka_miedz_16", {
    label: '16',
    price: {g1: 211, g2: 211},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("stozek_ze_stopka_srebro_16", {
    label: '16',
    price: {g1: 163, g2: 163},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_prosty_czern_16", {
    label: '16',
    price: {g1: 108, g2: 108},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_prosty_miedz_16", {
    label: '16',
    price: {g1: 175, g2: 175},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_prosty_srebro_16", {
    label: '16',
    price: {g1: 115, g2: 115},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_skosny_czern_16", {
    label: '95',
    price: {g1: 136, g2: 136},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_skosny_miedz_16", {
    label: '16',
    price: {g1: 208, g2: 208},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("trojkat_skosny_srebro_16", {
    label: '16',
    price: {g1: 145, g2: 145},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("walek_czern_16", {
    label: '16',
    price: {g1: 55, g2: 55},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("walek_miedz_16", {
    label: '16',
    price: {g1: 88, g2: 88},
    nextStep: 'step_typ_materaca'
});
g.setNode("walek_srebro_16", {
    label: '16',
    price: {g1: 61, g2: 61},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("kielich_czern_16", {
    label: '16',
    price: {g1: 173, g2: 173},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("kielich_miedz_16", {
    label: '16',
    price: {g1: 211, g2: 211},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("kielich_srebro_16", {
    label: '16',
    price: {g1: 173, g2: 173},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("naroznik_czern_16", {
    label: '16',
    price: {g1: 92, g2: 92},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("naroznik_miedz_16", {
    label: '16',
    price: {g1: 138, g2: 138},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("naroznik_srebro_16", {
    label: '16',
    price: {g1: 114, g2: 114},
    nextStep: 'bb_step_typ_materaca'
});

g.setNode("ploza_buk_140", {
    label: '140',
    width: 140,
    price: {g1: 218.4, g2: 218.4},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_buk_160", {
    label: '160',
    width: 160,
    price: {g1: 237.6, g2: 237.6},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_buk_180", {
    label: '180',
    width: 180,
    price: {g1: 259.2, g2: 259.2},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_buk_200", {
    label: '200',
    width: 200,
    price: {g1: 283.2, g2: 283.2},
    nextStep: 'bb_step_typ_materaca'
});

g.setNode("ploza_wenge_140", {
    label: '140',
    width: 140,
    price: {g1: 218.4, g2: 218.4},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_wenge_160", {
    label: '160',
    width: 160,
    price: {g1: 237.6, g2: 237.6},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_wenge_180", {
    label: '180',
    width: 180,
    price: {g1: 259.2, g2: 259.2},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_wenge_200", {
    label: '200',
    width: 200,
    price: {g1: 283.2, g2: 283.2},
    nextStep: 'bb_step_typ_materaca'
});

g.setNode("ploza_dab_140", {
    label: '140',
    width: 140,
    price: {g1: 468, g2: 468},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_dab_160", {
    label: '160',
    width: 160,
    price: {g1: 516, g2: 516},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_dab_180", {
    label: '180',
    width: 180,
    price: {g1: 564, g2: 564},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_dab_200", {
    label: '200',
    width: 200,
    price: {g1: 612, g2: 612},
    nextStep: 'bb_step_typ_materaca'
});

g.setNode("ploza_dab_16", {
    label: '95',
    price: {g1: 132, g2: 132},
    nextStep: 'bb_step_typ_materaca'
});
g.setNode("ploza_wenge_16", {
    label: '95',
    price: {g1: 132, g2: 132},
    nextStep: 'bb_step_typ_materaca'
});

g.setNode("t_legs", {
    node: 't_legs',
    title: 'sengeben',
    label: 'vælg sengeben',
    number: 3,
    zIndex: 7,
    optionsFilter: true
});
g.setNode("t_metal_trojkat_srebro", {
    label: 'Sølv trekant metalben',
    img: 'trojkat_srebro.jpg',
    render: '/nogi/noga_trojkat_srebro.png',
});
g.setNode("t_metal_trojkat_miedz", {
    label: 'Kobber trekant metalben',
    img: 'trojkat_miedz.jpg',
    render: '/nogi/noga_trojkat_miedz.png',
});
g.setNode("t_metal_trojkat_czarny", {
    label: 'Sort trekant metalben',
    img: 'trojkat_czarny.jpg',
    render: '/nogi/noga_trojkat_czern.png',
});
g.setNode("t_noga_drewniana_long_bug", {
    label: 'Lange bøge træben',
    img: 'prostokat_dab.jpg',
    render: '/nogi/noga_prostokat_buk.png',
});
g.setNode("t_noga_drewniana_long_wenge", {
    label: 'Lange træben',
    img: 'prostokat_wenge.jpg',
    render: '/nogi/noga_prostokat_wenge.png',
});

g.setNode("t_metal_trojkat_srebro_2", {
    label: '4,5',
    price: {g1: 45, g2: 45},
    nextStep: 't_materac'
});
g.setNode("t_metal_trojkat_miedz_2", {
    label: '4,5',
    price: {g1: 63, g2: 63},
    nextStep: 't_materac'
});
g.setNode("t_metal_trojkat_czarny_2", {
    label: '4,5',
    price: {g1: 45, g2: 45},
    nextStep: 't_materac'
});
g.setNode("t_noga_drewniana_long_bug_2", {
    label: '4,5',
    price: {g1: 39, g2: 39},
    nextStep: 't_materac'
});
g.setNode("t_noga_drewniana_long_wenge_2", {
    label: '4,5',
    price: {g1: 39, g2: 39},
    nextStep: 't_materac'
});

g.setEdge("t_legs", "t_metal_trojkat_srebro");
g.setEdge("t_legs", "t_metal_trojkat_miedz");
g.setEdge("t_legs", "t_metal_trojkat_czarny");
g.setEdge("t_legs", "t_noga_drewniana_long_bug");
g.setEdge("t_legs", "t_noga_drewniana_long_wenge");

g.setEdge("t_metal_trojkat_srebro", "t_metal_trojkat_srebro_2");
g.setEdge("t_metal_trojkat_miedz", "t_metal_trojkat_miedz_2");
g.setEdge("t_metal_trojkat_czarny", "t_metal_trojkat_czarny_2");
g.setEdge("t_noga_drewniana_long_bug", "t_noga_drewniana_long_bug_2");
g.setEdge("t_noga_drewniana_long_wenge", "t_noga_drewniana_long_wenge_2");


g.setNode("step_typ_materaca", {
    node: 'step_typ_materaca',
    title: 'Madras type',
    label: 'Vælg madras type',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary'
});

g.setNode("materac_pokrowiec", {
    label: 'I lagen',
    img: 'pokrowce/materac_w_pokrowcu_cover.jpg',
    render: 'transparent.png'
});

g.setNode("materac_tapicerowany", {
    label: 'Polstret',
    img: 'pokrowce/materac_tapicerowany_cover.jpg',
    render: 'transparent.png'
});

g.setNode("materac_pokrowiec_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'step_pokrowiec'});
g.setNode("materac_tapicerowany_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'step_tapicerowany'});

g.setNode("step_pokrowiec", {
    node: 'step_pokrowiec',
    title: 'Madras i lagen',
    label: 'Vælg madras i lagen',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: "Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver."
});
g.setNode("step_tapicerowany", {
    node: 'step_tapicerowany',
    title: 'Polstret madras',
    label: 'Vælg polstret madras ',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: "Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver."
});

g.setNode("step_4", {
    node: 'step_4',
    title: 'madras',
    label: 'Vælg madras',
    number: 3,
    zIndex: 25,
    skipToNode: 'step_5',
    optionsFilter: true,
    info: "Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver."
});

g.setNode("materac_tango", {
    node: 'materac_tango',
    label: 'Tango',
    img: '/materace/tango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new'
});
g.setNode("materac_step", {
    node: 'materac_step',
    label: 'Step',
    img: '/materace/step.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver'
});
g.setNode("materac_salsa", {
    node: 'materac_salsa',
    label: 'Salsa',
    img: '/materace/salsa.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel'
});
g.setNode("materac_chacha", {
    node: 'materac_chacha',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new'
});
g.setNode("materac_pasodoble", {
    node: 'materac_pasodoble',
    label: 'Pasodoble',
    img: '/materace/pasodoble.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel'
});
g.setNode("materac_flamenco", {
    node: 'materac_flamenco',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new'
});
g.setNode("materac_makarena", {
    node: 'materac_makarena',
    label: 'Makarena',
    img: '/materace/makarena.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_merced_elips'
});
g.setNode("materac_rockroll", {
    node: 'materac_rockroll',
    label: 'Rock & Roll',
    img: '/materace/rock_and_roll.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new'
});
g.setNode("materac_foxtrot", {
    node: 'materac_foxtrot',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid'
});
g.setNode("materac_melody", {
    node: 'materac_melody',
    label: 'Melody',
    img: '/materace/melody.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid'
});
g.setNode("materac_rumba", {
    node: 'materac_rumba',
    label: 'Rumba',
    img: '/materace/rumba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_elips_medicott'
});
g.setNode("materac_boogie", {
    node: 'materac_boogie',
    label: 'Boogie',
    img: '/materace/boogie.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel_new'
});
g.setNode("materac_modern", {
    node: 'materac_modern',
    label: 'Modern',
    img: '/materace/modern.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere'
});
g.setNode("materac_conga", {
    node: 'materac_conga',
    label: 'Conga',
    img: '/materace/conga.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere'
});
g.setNode("materac_fandango", {
    node: 'materac_fandango',
    label: 'Fandango',
    img: '/materace/fandango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_medicover'
});
g.setNode("materac_zorba", {
    node: 'materac_zorba',
    label: 'Zorba',
    img: '/materace/zorba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver'
});
g.setNode("materac_breakdance", {
    node: 'materac_breakdance',
    label: 'Breakdance',
    img: '/materace/breakdance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young'
});
g.setNode("materac_funky", {
    node: 'materac_funky',
    label: 'Funky',
    img: '/materace/funky.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young'
});
g.setNode("materac_dance", {
    node: 'materac_dance',
    label: 'Dance',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano'
});
g.setNode("materac_lambada", {
    node: 'materac_lambada',
    label: 'Lambada',
    img: '/materace/lambada.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_probiotex'
});
g.setNode("materac_electro", {
    node: 'materac_electro',
    label: 'Electro',
    img: '/materace/electro.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel'
});


g.setNode("materac_foxtrot_tapicerowany", {
    node: 'materac_foxtrot_tapicerowany',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7'
});
g.setNode("materac_chacha_tapicerowany", {
    node: 'materac_chacha_tapicerowany',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7'
});
g.setNode("materac_flamenco_tapicerowany", {
    node: 'materac_flamenco_tapicerowany',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7'
});


g.setNode("materac_tango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1599, g2: 1599},
    nextStep: 'step_5'
});
g.setNode("materac_tango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1749, g2: 1749},
    nextStep: 'step_5'
});
g.setNode("materac_tango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1899, g2: 1899},
    nextStep: 'step_5'
});
g.setNode("materac_tango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2198, g2: 1299},
    nextStep: 'step_5'
});

g.setNode("materac_step_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 679, g2: 679},
    nextStep: 'step_5'
});
g.setNode("materac_step_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 749, g2: 749},
    nextStep: 'step_5'
});
g.setNode("materac_step_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 839, g2: 839},
    nextStep: 'step_5'
});
g.setNode("materac_step_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1138, g2: 1138},
    nextStep: 'step_5'
});

g.setNode("materac_salsa_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1699, g2: 1699},
    nextStep: 'step_5'
});
g.setNode("materac_salsa_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1899, g2: 1899},
    nextStep: 'step_5'
});
g.setNode("materac_salsa_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2069, g2: 2069},
    nextStep: 'step_5'
});
g.setNode("materac_salsa_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2718, g2: 2718},
    nextStep: 'step_5'
});

g.setNode("materac_chacha_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1329, g2: 1329},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1459, g2: 1459},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1639, g2: 1639},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2198, g2: 2198},
    nextStep: 'step_5'
});

g.setNode("materac_pasodoble_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1659, g2: 1659},
    nextStep: 'step_5'
});
g.setNode("materac_pasodoble_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1829, g2: 1829},
    nextStep: 'step_5'
});
g.setNode("materac_pasodoble_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1999, g2: 1999},
    nextStep: 'step_5'
});
g.setNode("materac_pasodoble_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2658, g2: 2658},
    nextStep: 'step_5'
});

g.setNode("materac_flamenco_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1849, g2: 1849},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2059, g2: 2059},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2299, g2: 2299},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3458, g2: 3458},
    nextStep: 'step_5'
});

g.setNode("materac_makarena_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10734, g2: 10734},
    nextStep: 'step_5'
});
g.setNode("materac_makarena_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 11922, g2: 11922},
    nextStep: 'step_5'
});
g.setNode("materac_makarena_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 13121, g2: 13121},
    nextStep: 'step_5'
});
g.setNode("materac_makarena_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 17912, g2: 17912},
    nextStep: 'step_5'
});


g.setNode("materac_rockroll_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1539, g2: 1539},
    nextStep: 'step_5'
});
g.setNode("materac_rockroll_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1699, g2: 1699},
    nextStep: 'step_5'
});
g.setNode("materac_rockroll_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1849, g2: 1849},
    nextStep: 'step_5'
});
g.setNode("materac_rockroll_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2438, g2: 2438},
    nextStep: 'step_5'
});

g.setNode("materac_foxtrot_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1639, g2: 1639},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1799, g2: 1799},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1959, g2: 1959},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2678, g2: 2678},
    nextStep: 'step_5'
});

g.setNode("materac_melody_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1999, g2: 1999},
    nextStep: 'step_5'
});
g.setNode("materac_melody_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2299, g2: 2299},
    nextStep: 'step_5'
});
g.setNode("materac_melody_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2449, g2: 2449},
    nextStep: 'step_5'
});
g.setNode("materac_melody_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3398, g2: 3398},
    nextStep: 'step_5'
});

g.setNode("materac_rumba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2699, g2: 2999},
    nextStep: 'step_5'
});
g.setNode("materac_rumba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2999, g2: 3359},
    nextStep: 'step_5'
});
g.setNode("materac_rumba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3349, g2: 3699},
    nextStep: 'step_5'
});
g.setNode("materac_rumba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4598, g2: 4958},
    nextStep: 'step_5'
});

g.setNode("materac_boogie_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3249, g2: 3249},
    nextStep: 'step_5'
});
g.setNode("materac_boogie_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3499, g2: 3499},
    nextStep: 'step_5'
});
g.setNode("materac_boogie_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3849, g2: 3849},
    nextStep: 'step_5'
});
g.setNode("materac_boogie_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5298, g2: 5298},
    nextStep: 'step_5'
});

g.setNode("materac_modern_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2599, g2: 2599},
    nextStep: 'step_5'
});
g.setNode("materac_modern_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2899, g2: 2899},
    nextStep: 'step_5'
});
g.setNode("materac_modern_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3199, g2: 3199},
    nextStep: 'step_5'
});
g.setNode("materac_modern_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4198, g2: 4198},
    nextStep: 'step_5'
});

g.setNode("materac_conga_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 7905, g2: 7905},
    nextStep: 'step_5'
});
g.setNode("materac_conga_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 8702, g2: 8702},
    nextStep: 'step_5'
});
g.setNode("materac_conga_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 9488, g2: 9488},
    nextStep: 'step_5'
});
g.setNode("materac_conga_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 12744, g2: 12744},
    nextStep: 'step_5'
});

g.setNode("materac_fandango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3303, g2: 3303},
    nextStep: 'step_5'
});
g.setNode("materac_fandango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3716, g2: 3716},
    nextStep: 'step_5'
});
g.setNode("materac_fandango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4124, g2: 4124},
    nextStep: 'step_5'
});
g.setNode("materac_fandango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5352, g2: 5352},
    nextStep: 'step_5'
});

g.setNode("materac_zorba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3509, g2: 3509},
    nextStep: 'step_5'
});
g.setNode("materac_zorba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3899, g2: 3899},
    nextStep: 'step_5'
});
g.setNode("materac_zorba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4301, g2: 4301},
    nextStep: 'step_5'
});
g.setNode("materac_zorba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5624, g2: 5624},
    nextStep: 'step_5'
});

g.setNode("materac_breakdance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3533, g2: 3533},
    nextStep: 'step_5'
});
g.setNode("materac_breakdance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3929, g2: 3929},
    nextStep: 'step_5'
});
g.setNode("materac_breakdance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4714, g2: 4714},
    nextStep: 'step_5'
});
g.setNode("materac_breakdance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4714, g2: 4714},
    nextStep: 'step_5'
});

g.setNode("materac_funky_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2966, g2: 2966},
    nextStep: 'step_5'
});
g.setNode("materac_funky_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3279, g2: 3279},
    nextStep: 'step_5'
});
g.setNode("materac_funky_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4182, g2: 4182},
    nextStep: 'step_5'
});
g.setNode("materac_funky_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4182, g2: 4182},
    nextStep: 'step_5'
});

g.setNode("materac_dance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 8838, g2: 8838},
    nextStep: 'step_5'
});
g.setNode("materac_dance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 10031, g2: 10031},
    nextStep: 'step_5'
});
g.setNode("materac_dance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 10900, g2: 10900},
    nextStep: 'step_5'
});
g.setNode("materac_dance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 15372, g2: 15372},
    nextStep: 'step_5'
});

g.setNode("materac_lambada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2269, g2: 2269},
    nextStep: 'step_5'
});
g.setNode("materac_lambada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2499, g2: 2499},
    nextStep: 'step_5'
});
g.setNode("materac_lambada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2799, g2: 2799},
    nextStep: 'step_5'
});
g.setNode("materac_lambada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2269 * 2, g2: 2269 * 2},
    nextStep: 'step_5'
});

g.setNode("materac_electro_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10197, g2: 10197},
    nextStep: 'step_5'
});
g.setNode("materac_electro_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 11378, g2: 11378},
    nextStep: 'step_5'
});
g.setNode("materac_electro_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 12401, g2: 12401},
    nextStep: 'step_5'
});
g.setNode("materac_electro_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 17748, g2: 17748},
    nextStep: 'step_5'
});

g.setNode("materac_foxtrot_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2229, g2: 2429},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2399, g2: 2599},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2629, g2: 2829},
    nextStep: 'step_5'
});
g.setNode("materac_foxtrot_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4198, g2: 4458},
    nextStep: 'step_5',
    extra: '*(2x 100/200)'
});

g.setNode("materac_chacha_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1929, g2: 2129},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2099, g2: 2299},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2299, g2: 2499},
    nextStep: 'step_5'
});
g.setNode("materac_chacha_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3458, g2: 3858},
    nextStep: 'step_5',
    extra: '*(2x 100/200)'
});

g.setNode("materac_flamenco_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2109, g2: 2309},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2299, g2: 2499},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2499, g2: 2699},
    nextStep: 'step_5'
});
g.setNode("materac_flamenco_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3798, g2: 4198},
    nextStep: 'step_5',
    extra: '*(2x 100/200)'
});

//*******************************************88
g.setNode("bb_step_typ_materaca", {
    node: 'bb_step_typ_materaca',
    title: 'Madras type',
    label: 'Vælg madras type',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary'
});

g.setNode("bb_materac_pokrowiec", {
    label: 'I lagen',
    img: 'pokrowce/materac_w_pokrowcu_cover.jpg',
    render: 'transparent.png'
});

g.setNode("bb_materac_tapicerowany", {
    label: 'I lagen',
    img: 'pokrowce/materac_tapicerowany_cover.jpg',
    render: 'transparent.png'
});

g.setNode("bb_materac_pokrowiec_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'bb_step_pokrowiec'});
g.setNode("bb_materac_tapicerowany_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'bb_step_tapicerowany'});

g.setNode("bb_step_pokrowiec", {
    node: 'bb_step_pokrowiec',
    title: 'Madras i lagen',
    label: 'Vælg madras i lagen',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: "Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver."
});
g.setNode("bb_step_tapicerowany", {
    node: 'bb_step_tapicerowany',
    title: 'Polstret madras',
    label: 'Vælg polstret madras ',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: "Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver."
});

//*******************************************88
g.setNode("bp_step_typ_materaca", {
    node: 'bp_step_typ_materaca',
    title: 'Madras type',
    label: 'Vælg madras type',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary'
});

g.setNode("bp_materac_pokrowiec", {
    label: 'I lagen',
    img: 'pokrowce/materac_w_pokrowcu_cover.jpg',
    render: 'transparent.png'
});

g.setNode("bp_materac_tapicerowany", {
    label: 'I lagen',
    img: 'pokrowce/materac_tapicerowany_cover.jpg',
    render: 'transparent.png'
});

g.setNode("bp_materac_pokrowiec_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'bp_step_pokrowiec'});
g.setNode("bp_materac_tapicerowany_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'bp_step_tapicerowany'});

g.setNode("bp_step_pokrowiec", {
    node: 'bp_step_pokrowiec',
    title: 'Madras i lagen',
    label: 'Vælg madras i lagen',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver.'
});
g.setNode("bp_step_tapicerowany", {
    node: 'bp_step_tapicerowany',
    title: 'Polstret madras',
    label: 'Vælg polstret madras ',
    number: 3,
    zIndex: 25,
    skipToNode: 'summary',
    optionsFilter: true,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver.'
});

//********************************************

g.setNode("bb_materac_tango", {
    node: 'bb_materac_tango',
    label: 'Tango',
    img: '/materace/tango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new'
});
g.setNode("bb_materac_step", {
    node: 'bb_materac_step',
    label: 'Step',
    img: '/materace/step.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver'
});
g.setNode("bb_materac_salsa", {
    node: 'bb_materac_salsa',
    label: 'Salsa',
    img: '/materace/salsa.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel'
});
g.setNode("bb_materac_chacha", {
    node: 'bb_materac_chacha',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new'
});
g.setNode("bb_materac_pasodoble", {
    node: 'bb_materac_pasodoble',
    label: 'Pasodoble',
    img: '/materace/pasodoble.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel'
});
g.setNode("bb_materac_flamenco", {
    node: 'bb_materac_flamenco',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new'
});
g.setNode("bb_materac_makarena", {
    node: 'bb_materac_makarena',
    label: 'Makarena',
    img: '/materace/makarena.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_merced_elips'
});
g.setNode("bb_materac_rockroll", {
    node: 'bb_materac_rockroll',
    label: 'Rock & Roll',
    img: '/materace/rock_and_roll.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new'
});
g.setNode("bb_materac_foxtrot", {
    node: 'bb_materac_foxtrot',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid'
});
g.setNode("bb_materac_melody", {
    node: 'bb_materac_melody',
    label: 'Melody',
    img: '/materace/melody.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid'
});
g.setNode("bb_materac_rumba", {
    node: 'bb_materac_rumba',
    label: 'Rumba',
    img: '/materace/rumba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_elips_medicott'
});
g.setNode("bb_materac_boogie", {
    node: 'bb_materac_boogie',
    label: 'Boogie',
    img: '/materace/boogie.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel_new'
});
g.setNode("bb_materac_modern", {
    node: 'bb_materac_modern',
    label: 'Modern',
    img: '/materace/modern.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere'
});
g.setNode("bb_materac_conga", {
    node: 'bb_materac_conga',
    label: 'Conga',
    img: '/materace/conga.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere'
});
g.setNode("bb_materac_fandango", {
    node: 'bb_materac_fandango',
    label: 'Fandango',
    img: '/materace/fandango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_medicover'
});
g.setNode("bb_materac_zorba", {
    node: 'bb_materac_zorba',
    label: 'Zorba',
    img: '/materace/zorba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver'
});
g.setNode("bb_materac_breakdance", {
    node: 'bb_materac_breakdance',
    label: 'Breakdance',
    img: '/materace/breakdance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young'
});
g.setNode("bb_materac_funky", {
    node: 'bb_materac_funky',
    label: 'Funky',
    img: '/materace/funky.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young'
});
g.setNode("bb_materac_dance", {
    node: 'bb_materac_dance',
    label: 'Dance',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano'
});
g.setNode("bb_materac_lambada", {
    node: 'bb_materac_lambada',
    label: 'Lambada',
    img: '/materace/lambada.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_probiotex'
});
g.setNode("bb_materac_electro", {
    node: 'bb_materac_electro',
    label: 'Electro',
    img: '/materace/electro.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel'
});

g.setNode("bb_materac_foxtrot_tapicerowany", {
    node: 'bb_materac_foxtrot_tapicerowany',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7'
});
g.setNode("bb_materac_chacha_tapicerowany", {
    node: 'bb_materac_chacha_tapicerowany',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7'
});
g.setNode("bb_materac_flamenco_tapicerowany", {
    node: 'materac_flamenco_tapicerowany',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'm_tap_colors_7'
});


g.setNode("bb_materac_tango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1599, g2: 1599},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_tango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1749, g2: 1749},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_tango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1899, g2: 1899},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_tango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2198, g2: 1299},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_step_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2145, g2: 2145},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_step_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2369, g2: 2369},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_step_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2659, g2: 2659},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_step_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3662, g2: 3662},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_salsa_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1699, g2: 1699},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_salsa_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1899, g2: 1899},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_salsa_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2069, g2: 2069},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_salsa_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2718, g2: 2718},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_chacha_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1329, g2: 1329},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1459, g2: 1459},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1639, g2: 1639},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2198, g2: 2198},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_pasodoble_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1659, g2: 1659},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_pasodoble_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1829, g2: 1829},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_pasodoble_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1999, g2: 1999},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_pasodoble_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2658, g2: 2658},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_flamenco_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1849, g2: 1849},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2059, g2: 2059},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2299, g2: 2299},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3458, g2: 3458},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_makarena_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10734, g2: 10734},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_makarena_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 11922, g2: 11922},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_makarena_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 13121, g2: 13121},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_makarena_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 17912, g2: 17912},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});


g.setNode("bb_materac_rockroll_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1539, g2: 1539},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rockroll_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1699, g2: 1699},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rockroll_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1849, g2: 1849},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rockroll_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2438, g2: 2438},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_foxtrot_140_200", {label: '140/200', width: 140, price: {g1: 1639, g2: 1639}, nextStep: 'bb_nawierzchniowy'});
g.setNode("bb_materac_foxtrot_160_200", {label: '160/200', width: 160, price: {g1: 1799, g2: 1799}, nextStep: 'bb_nawierzchniowy'});
g.setNode("bb_materac_foxtrot_180_200", {label: '180/200', width: 180, price: {g1: 1959, g2: 1959}, nextStep: 'bb_nawierzchniowy'});
g.setNode("bb_materac_foxtrot_200_200", {label: '200/200', width: 200, price: {g1: 2678, g2: 2678}, nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'});

g.setNode("bb_materac_melody_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1999, g2: 1999},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_melody_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2299, g2: 2299},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_melody_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2449, g2: 2449},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_melody_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3398, g2: 3398},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_rumba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2699, g2: 2999},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rumba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2999, g2: 3359},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rumba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3349, g2: 3699},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_rumba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4598, g2: 4958},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_boogie_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3249, g2: 3249},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_boogie_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3499, g2: 3499},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_boogie_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3849, g2: 3849},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_boogie_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5298, g2: 5298},
    nextStep: 'bb_nawierzchniowy'
});

g.setNode("bb_materac_modern_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2599, g2: 2599},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_modern_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2899, g2: 2899},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_modern_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3199, g2: 3199},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_modern_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4198, g2: 4198},
    nextStep: 'bb_nawierzchniowy'
});

g.setNode("bb_materac_conga_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 7905, g2: 7905},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_conga_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 8702, g2: 8702},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_conga_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 9488, g2: 9488},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_conga_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 12744, g2: 12744},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_fandango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3303, g2: 3303},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_fandango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3716, g2: 3716},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_fandango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4124, g2: 4124},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_fandango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5352, g2: 5352},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_zorba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3509, g2: 3509},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_zorba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3899, g2: 3899},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_zorba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4301, g2: 4301},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_zorba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5624, g2: 5624},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_breakdance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3533, g2: 3533},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_breakdance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3929, g2: 3929},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_breakdance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4714, g2: 4714},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_breakdance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4714, g2: 4714},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_funky_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2966, g2: 2966},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_funky_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3279, g2: 3279},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_funky_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4182, g2: 4182},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_funky_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4182, g2: 4182},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_dance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 8838, g2: 8838},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_dance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 10031, g2: 10031},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_dance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 10900, g2: 10900},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_dance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 15372, g2: 15372},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_lambada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2269, g2: 2269},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_lambada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2499, g2: 2499},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_lambada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2799, g2: 2799},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_lambada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2269 * 2, g2: 2269 * 2},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_electro_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10197, g2: 10197},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_electro_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 11378, g2: 11378},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_electro_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 12401, g2: 12401},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_electro_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 17748, g2: 17748},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_foxtrot_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2229, g2: 2429},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_foxtrot_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2399, g2: 2599},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_foxtrot_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2629, g2: 2829},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_foxtrot_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4198, g2: 4458},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_chacha_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1929, g2: 2129},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2099, g2: 2299},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2299, g2: 2499},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_chacha_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3458, g2: 3858},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

g.setNode("bb_materac_flamenco_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2109, g2: 2309},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2299, g2: 2499},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2499, g2: 2699},
    nextStep: 'bb_nawierzchniowy'
});
g.setNode("bb_materac_flamenco_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3798, g2: 4198},
    nextStep: 'bb_nawierzchniowy',
    extra: '*(2x 100/200)'
});

//**********************************************

g.setNode("bp_materac_tango", {
    node: 'bp_materac_tango',
    label: 'Tango',
    img: '/materace/tango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_velvet_new_tencel_new'
});
g.setNode("bp_materac_step", {
    node: 'bp_materac_step',
    label: 'Step',
    img: '/materace/step.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_silver'
});
g.setNode("bp_materac_salsa", {
    node: 'bp_materac_salsa',
    label: 'Salsa',
    img: '/materace/salsa.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_velvet_tencel'
});
g.setNode("bp_materac_chacha", {
    node: 'bp_materac_chacha',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano_tencel_new'
});
g.setNode("bp_materac_pasodoble", {
    node: 'bp_materac_pasodoble',
    label: 'Pasodoble',
    img: '/materace/pasodoble.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_velvet_tencel'
});
g.setNode("bp_materac_flamenco", {
    node: 'bp_materac_flamenco',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_velvet_tencel'
});
g.setNode("bp_materac_makarena", {
    node: 'bp_materac_makarena',
    label: 'Makarena',
    img: '/materace/makarena.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_merced_elips'
});
g.setNode("bp_materac_rockroll", {
    node: 'bp_materac_rockroll',
    label: 'Rock & Roll',
    img: '/materace/rock_and_roll.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano_tencel_new'
});
g.setNode("bp_materac_foxtrot", {
    node: 'bp_materac_foxtrot',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano_hybrid'
});
g.setNode("bp_materac_melody", {
    node: 'bp_materac_melody',
    label: 'Melody',
    img: '/materace/melody.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano_hybrid'
});
g.setNode("bp_materac_rumba", {
    node: 'bp_materac_rumba',
    label: 'Rumba',
    img: '/materace/rumba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_elips_medicott'
});
g.setNode("bp_materac_boogie", {
    node: 'bp_materac_boogie',
    label: 'Boogie',
    img: '/materace/boogie.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_tencel_new'
});
g.setNode("bp_materac_modern", {
    node: 'bp_materac_modern',
    label: 'Modern',
    img: '/materace/modern.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_cashmere'
});
g.setNode("bp_materac_conga", {
    node: 'bp_materac_conga',
    label: 'Conga',
    img: '/materace/conga.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_cashmere'
});
g.setNode("bp_materac_fandango", {
    node: 'bp_materac_fandango',
    label: 'Fandango',
    img: '/materace/fandango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_medicover'
});
g.setNode("bp_materac_zorba", {
    node: 'bp_materac_zorba',
    label: 'Zorba',
    img: '/materace/zorba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_silver'
});
g.setNode("bp_materac_breakdance", {
    node: 'bp_materac_breakdance',
    label: 'Breakdance',
    img: '/materace/breakdance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_young'
});
g.setNode("bp_materac_funky", {
    node: 'bp_materac_funky',
    label: 'Funky',
    img: '/materace/funky.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_young'
});
g.setNode("bp_materac_dance", {
    node: 'bp_materac_dance',
    label: 'Dance',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_italiano'
});
g.setNode("bp_materac_lambada", {
    node: 'bp_materac_lambada',
    label: 'Lambada',
    img: '/materace/lambada.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_probiotex'
});
g.setNode("bp_materac_electro", {
    node: 'bp_materac_electro',
    label: 'Electro',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'bp_covers_tencel'
});


g.setNode("bp_materac_foxtrot_tapicerowany", {
    node: 'bp_materac_foxtrot_tapicerowany',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'bp_tap_colors_7'
});
g.setNode("bp_materac_chacha_tapicerowany", {
    node: 'bp_materac_chacha_tapicerowany',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'bp_tap_colors_7'
});
g.setNode("bp_materac_flamenco_tapicerowany", {
    node: 'bp_materac_flamenco_tapicerowany',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_tapicerowany_h31_novel13.png',
    colors: 'bp_tap_colors_7'
});

g.setNode("bp_materac_tango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1599, g2: 1599},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_tango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1749, g2: 1749},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_tango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1899, g2: 1899},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_tango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2198, g2: 1299},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_step_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2145, g2: 2145},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_step_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2369, g2: 2369},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_step_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2659, g2: 2659},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_step_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3662, g2: 3662},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_salsa_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1699, g2: 1699},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_salsa_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1899, g2: 1899},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_salsa_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2069, g2: 2069},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_salsa_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2718, g2: 2718},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1329, g2: 1329},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1459, g2: 1459},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1639, g2: 1639},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2198, g2: 2198},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_pasodoble_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1659, g2: 1659},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_pasodoble_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1829, g2: 1829},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_pasodoble_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1999, g2: 1999},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_pasodoble_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2658, g2: 2658},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1849, g2: 1849},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2059, g2: 2059},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2299, g2: 2299},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3458, g2: 3458},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_makarena_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10734, g2: 10734},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_makarena_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 11922, g2: 11922},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_makarena_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 13121, g2: 13121},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_makarena_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 17912, g2: 17912},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rockroll_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1539, g2: 1539},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rockroll_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1699, g2: 1699},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rockroll_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1849, g2: 1849},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rockroll_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2438, g2: 2438},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_foxtrot_140_200", {label: '140/200', width: 140, price: {g1: 1639, g2: 1639}, nextStep: 'bp_nawierzchniowy'});
g.setNode("bp_materac_foxtrot_160_200", {label: '160/200', width: 160, price: {g1: 1799, g2: 1799}, nextStep: 'bp_nawierzchniowy'});
g.setNode("bp_materac_foxtrot_180_200", {label: '180/200', width: 180, price: {g1: 1959, g2: 1959}, nextStep: 'bp_nawierzchniowy'});
g.setNode("bp_materac_foxtrot_200_200", {label: '200/200', width: 200, price: {g1: 2678, g2: 2678}, nextStep: 'bp_nawierzchniowy'});
g.setNode("bp_materac_melody_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1999, g2: 1999},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_melody_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2299, g2: 2299},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_melody_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2449, g2: 2449},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_melody_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3398, g2: 3398},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rumba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2699, g2: 2999},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rumba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2999, g2: 3359},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rumba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3349, g2: 3699},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_rumba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4598, g2: 4958},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_boogie_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3249, g2: 3249},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_boogie_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3499, g2: 3499},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_boogie_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3849, g2: 3849},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_boogie_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5298, g2: 8298},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_modern_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2599, g2: 2599},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_modern_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2899, g2: 2899},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_modern_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3199, g2: 3199},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_modern_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4198, g2: 4198},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_conga_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 7905, g2: 7905},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_conga_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 8702, g2: 8702},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_conga_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 9488, g2: 9488},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_conga_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 12744, g2: 12744},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_fandango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3303, g2: 3303},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_fandango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3716, g2: 3716},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_fandango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4124, g2: 4124},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_fandango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5352, g2: 5352},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_zorba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 999, g2: 999},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_zorba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1099, g2: 1099},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_zorba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1219, g2: 1219},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_zorba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1598, g2: 1598},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_breakdance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3533, g2: 3533},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_breakdance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3929, g2: 3929},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_breakdance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4714, g2: 4714},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_breakdance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4714, g2: 4714},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_funky_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2966, g2: 2966},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_funky_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3279, g2: 3279},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_funky_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4182, g2: 4182},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_funky_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4182, g2: 4182},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_dance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 8838, g2: 8838},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_dance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 10031, g2: 10031},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_dance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 10900, g2: 10900},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_dance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 15372, g2: 15372},
    nextStep: 'bp_nawierzchniowy'
});

g.setNode("bp_materac_lambada_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2269, g2: 2269},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_lambada_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2499, g2: 2499},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_lambada_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2799, g2: 2799},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_lambada_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2269 * 2, g2: 2269 * 2},
    nextStep: 'bp_nawierzchniowy'
});

g.setNode("bp_materac_electro_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10197, g2: 10197},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_electro_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 11378, g2: 11378},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_electro_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 12401, g2: 12401},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_electro_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 17748, g2: 17748},
    nextStep: 'bp_nawierzchniowy'
});

g.setNode("bp_materac_foxtrot_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2229, g2: 2429},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_foxtrot_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2399, g2: 2599},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_foxtrot_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2629, g2: 2829},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_foxtrot_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4198, g2: 4458},
    nextStep: 'bp_nawierzchniowy',
    extra: '*(2x 100/200)'
});
g.setNode("bp_materac_chacha_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1929, g2: 2129},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2099, g2: 2299},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2299, g2: 2499},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_chacha_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3458, g2: 3858},
    nextStep: 'bp_nawierzchniowy',
    extra: '*(2x 100/200)'
});
g.setNode("bp_materac_flamenco_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2109, g2: 2309},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2299, g2: 2499},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2499, g2: 2699},
    nextStep: 'bp_nawierzchniowy'
});
g.setNode("bp_materac_flamenco_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3798, g2: 4198},
    nextStep: 'bp_nawierzchniowy',
    extra: '*(2x 100/200)'
});

//*******************************8

g.setNode("t_materac", {
    node: 't_materac',
    title: 'Materac',
    label: 'Vælg madras',
    number: 4,
    zIndex: 25,
    skipToNode: 'skrzynia_posciel_big',
    optionsFilter: true,
    info: "Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver."
});

g.setNode("t_materac_tango", {
    node: 't_materac_tango',
    label: 'Tango',
    img: '/materace/tango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new_t'
});
g.setNode("t_materac_step", {
    node: 't_materac_step',
    label: 'Step',
    img: '/materace/step.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver_t'
});
g.setNode("t_materac_salsa", {
    node: 't_materac_salsa',
    label: 'Salsa',
    img: '/materace/salsa.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel_t'
});
g.setNode("t_materac_chacha", {
    node: 't_materac_chacha',
    label: 'Cha-Cha',
    img: '/materace/cha_cha.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new_t'
});
g.setNode("t_materac_pasodoble", {
    node: 't_materac_pasodoble',
    label: 'Pasodoble',
    img: '/materace/pasodoble.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_tencel_t'
});
g.setNode("t_materac_flamenco", {
    node: 't_materac_flamenco',
    label: 'Flamenco',
    img: '/materace/flamenco.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_velvet_new_tencel_new_t'
});
g.setNode("t_materac_makarena", {
    node: 't_materac_makarena',
    label: 'Makarena',
    img: '/materace/makarena.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_merced_elips_t'
});
g.setNode("t_materac_rockroll", {
    node: 't_materac_rockroll',
    label: 'Rock & Roll',
    img: '/materace/rock_and_roll.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_tencel_new_t'
});
g.setNode("t_materac_foxtrot", {
    node: 't_materac_foxtrot',
    label: 'Foxtrot',
    img: '/materace/foxtrot.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid_t'
});
g.setNode("t_materac_melody", {
    node: 't_materac_melody',
    label: 'Melody',
    img: '/materace/melody.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_hybrid_t'
});
g.setNode("t_materac_rumba", {
    node: 't_materac_rumba',
    label: 'Rumba',
    img: '/materace/rumba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_elips_medicott_t'
});
g.setNode("t_materac_boogie", {
    node: 't_materac_boogie',
    label: 'Boogie',
    img: '/materace/boogie.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel_new_t'
});
g.setNode("t_materac_modern", {
    node: 't_materac_modern',
    label: 'Modern',
    img: '/materace/modern.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere_t'
});
g.setNode("t_materac_conga", {
    node: 't_materac_conga',
    label: 'Conga',
    img: '/materace/conga.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_cashmere_t'
});
g.setNode("t_materac_fandango", {
    node: 't_materac_fandango',
    label: 'Fandango',
    img: '/materace/fandango.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_medicover_t'
});
g.setNode("t_materac_zorba", {
    node: 't_materac_zorba',
    label: 'Zorba',
    img: '/materace/zorba.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_silver_t'
});
g.setNode("t_materac_breakdance", {
    node: 't_materac_breakdance',
    label: 'Breakdance',
    img: '/materace/breakdance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young_t'
});
g.setNode("t_materac_funky", {
    node: 't_materac_funky',
    label: 'Funky',
    img: '/materace/funky.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_young_t'
});
g.setNode("t_materac_dance", {
    node: 't_materac_dance',
    label: 'Dance',
    img: '/materace/dance.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_italiano_t'
});
g.setNode("t_materac_lambada", {
    node: 't_materac_lambada',
    label: 'Lambada',
    img: '/materace/lambada.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_probiotex_t'
});
g.setNode("t_materac_electro", {
    node: 't_materac_electro',
    label: 'Electro',
    img: '/materace/electro.jpg',
    render: 'materace/materac_salsa_h31.png',
    cover: 'covers_tencel_t'
});

//***************************************

g.setNode("t_materac_tango_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1029, g2: 1029},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_tango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1599, g2: 1599},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_tango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1749, g2: 1749},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_tango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1899, g2: 1899},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_tango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2198, g2: 1299},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});

g.setNode("t_materac_step_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1642, g2: 1642},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_step_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2145, g2: 2145},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_step_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2369, g2: 2369},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_step_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2659, g2: 2659},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_step_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3662, g2: 3662},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_salsa_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1119, g2: 1119},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_salsa_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1699, g2: 1699},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_salsa_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1899, g2: 1899},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_salsa_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2069, g2: 2069},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_salsa_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2718, g2: 2718},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_chacha_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 929, g2: 929},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_chacha_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1329, g2: 1329},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1459, g2: 1459},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1639, g2: 1639},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2198, g2: 2198},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_pasodoble_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1149, g2: 1149},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_pasodoble_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1659, g2: 1659},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_pasodoble_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1829, g2: 1829},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_pasodoble_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1999, g2: 1999},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_pasodoble_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2658, g2: 2658},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_flamenco_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1259, g2: 1259},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_flamenco_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1849, g2: 1849},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2059, g2: 2059},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2299, g2: 2299},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3458, g2: 3458},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_makarena_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 7160, g2: 7160},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_makarena_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10734, g2: 10734},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_makarena_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 11922, g2: 11922},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_makarena_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 13121, g2: 13121},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_makarena_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 17912, g2: 17912},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_rockroll_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1029, g2: 1029},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_rockroll_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1539, g2: 1539},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rockroll_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 1699, g2: 1699},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rockroll_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 1849, g2: 1849},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rockroll_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 2438, g2: 2438},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_foxtrot_90_200", {label: '90/200', width: 90, price: {g1: 1059, g2: 1059}, nextStep: 'skrzynia_posciel_90'});
g.setNode("t_materac_foxtrot_140_200", {label: '140/200', width: 140, price: {g1: 1639, g2: 1639}, nextStep: 'skrzynia_posciel_small'});
g.setNode("t_materac_foxtrot_160_200", {label: '160/200', width: 160, price: {g1: 1799, g2: 1799}, nextStep: 'skrzynia_posciel_small'});
g.setNode("t_materac_foxtrot_180_200", {label: '180/200', width: 180, price: {g1: 1959, g2: 1959}, nextStep: 'skrzynia_posciel_small'});
g.setNode("t_materac_foxtrot_200_200", {label: '200/200', width: 200, price: {g1: 2678, g2: 2678}, nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'});
g.setNode("t_materac_melody_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1349, g2: 1349},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_melody_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1999, g2: 1999},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_melody_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2299, g2: 2299},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_melody_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2449, g2: 2449},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_melody_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3398, g2: 3398},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_rumba_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1849, g2: 2019},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_rumba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2699, g2: 2999},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rumba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2999, g2: 3359},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rumba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3349, g2: 3699},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_rumba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4598, g2: 4958},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_boogie_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2169, g2: 2169},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_boogie_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3249, g2: 3249},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_boogie_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3499, g2: 3499},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_boogie_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3849, g2: 3849},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_boogie_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5298, g2: 8298},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_modern_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 1699, g2: 1699},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_modern_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2599, g2: 2599},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_modern_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2899, g2: 2899},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_modern_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3199, g2: 3199},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_modern_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4198, g2: 4198},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_conga_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 5134, g2: 5134},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_conga_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 7905, g2: 7905},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_conga_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 8702, g2: 8702},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_conga_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 9488, g2: 9488},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_conga_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 12654, g2: 12654},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_fandango_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 639, g2: 639},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_fandango_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3303, g2: 3303},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_fandango_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3716, g2: 3716},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_fandango_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4124, g2: 4124},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_fandango_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5352, g2: 5352},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_zorba_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2351, g2: 2351},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_zorba_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3509, g2: 3509},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_zorba_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3899, g2: 3899},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_zorba_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4301, g2: 4301},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_zorba_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5624, g2: 5624},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_breakdance_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2357, g2: 2357},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_breakdance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 3533, g2: 3533},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_breakdance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 3929, g2: 3929},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_breakdance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 4714, g2: 4714},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_breakdance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4714, g2: 4714},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_funky_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2091, g2: 2091},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_funky_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1079, g2: 1079},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_funky_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2966, g2: 2966},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_funky_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 3279, g2: 3279},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_funky_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 5258, g2: 5258},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_dance_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 6150, g2: 6150},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_dance_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10031, g2: 10031},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_dance_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 10031, g2: 10031},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_dance_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 10900, g2: 10900},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_dance_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 15372, g2: 15372},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_electro_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 7083, g2: 7083},
    nextStep: 'skrzynia_posciel_90'
});
g.setNode("t_materac_electro_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 10197, g2: 10197},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_electro_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 11378, g2: 11378},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_electro_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 12401, g2: 12401},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_electro_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 17748, g2: 17748},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_foxtrot_tap_90_200", {
    label: '90/200',
    width: 90,
    price: {g1: 2229, g2: 2429},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_foxtrot_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2399, g2: 2599},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_foxtrot_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2629, g2: 2829},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_foxtrot_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 4198, g2: 4458},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_chacha_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 1929, g2: 2129},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2099, g2: 2299},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2299, g2: 2499},
    nextStep: 'skrzynia_posciel_small'
});
g.setNode("t_materac_chacha_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3458, g2: 3858},
    nextStep: 'skrzynia_posciel_small',
    extra: '*(2x 100/200)'
});
g.setNode("t_materac_flamenco_tap_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 2109, g2: 2309},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_tap_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 2299, g2: 2499},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_tap_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 2499, g2: 2699},
    nextStep: 'skrzynia_posciel_big'
});
g.setNode("t_materac_flamenco_tap_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 3798, g2: 4198},
    nextStep: 'skrzynia_posciel_big',
    extra: '*(2x 100/200)'
});


//************************************************

g.setNode("step_5", {
    node: 'step_5',
    title: 'topmadras',
    label: 'Vælg en topmadras',
    number: 4,
    zIndex: 30,
    skipToNode: 'summary',
    optionsFilter: true
});
g.setNode("materac_bass", {
    node: 'materac_bass',
    label: 'Bass',
    img: '/materace/bass.jpg',
    render: '/materace/top_blues_h31.png',
    cover: 'covers_cashmere_tencel_top'
});
g.setNode("materac_alt", {
    node: 'materac_alt',
    label: 'Alt',
    img: '/materace/alt.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_cashmere_tencel_top'
});
g.setNode("materac_tenor", {
    node: 'materac_tenor',
    label: 'Tenor',
    img: '/materace/tenor.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_tencel_top'
});


g.setNode("materac_alt_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 599, g2: 599},
    nextStep: 'summary'
});
g.setNode("materac_alt_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 659, g2: 659},
    nextStep: 'summary'
});
g.setNode("materac_alt_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 719, g2: 719},
    nextStep: 'summary'
});
g.setNode("materac_alt_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1098, g2: 1098},
    nextStep: 'summary'
});

g.setNode("materac_tenor_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 449, g2: 449},
    nextStep: 'summary'
});
g.setNode("materac_tenor_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 499, g2: 499},
    nextStep: 'summary'
});
g.setNode("materac_tenor_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 579, g2: 579},
    nextStep: 'summary'
});
g.setNode("materac_tenor_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 749, g2: 749},
    nextStep: 'summary'
});
g.setNode("materac_bass_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 679, g2: 679},
    nextStep: 'summary'
});
g.setNode("materac_bass_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 749, g2: 749},
    nextStep: 'summary'
});
g.setNode("materac_bass_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 819, g2: 819},
    nextStep: 'summary'
});
g.setNode("materac_bass_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1039, g2: 1039},
    nextStep: 'summary'
});


//***************************************************************

g.setNode("bb_nawierzchniowy", {
    node: 'bb_nawierzchniowy',
    title: 'topmadras',
    label: 'Vælg en topmadras',
    number: 4,
    zIndex: 30,
    skipToNode: 'summary',
    optionsFilter: true,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver.'
});

g.setNode("bb_materac_bass", {
    node: 'bb_materac_bass',
    label: 'Bass',
    img: '/materace/bass.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_cashmere_tencel_top'
});

g.setNode("bb_materac_alt", {
    node: 'bb_materac_alt',
    label: 'Alt',
    img: '/materace/alt.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_cashmere_tencel_top'
});


g.setNode("bb_materac_tenor", {
    node: 'bb_materac_tenor',
    label: 'Tenor',
    img: '/materace/tenor.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'covers_tencel_top'
});


g.setNode("bb_materac_alt_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 599, g2: 599},
    nextStep: 'summary'
});
g.setNode("bb_materac_alt_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 659, g2: 659},
    nextStep: 'summary'
});
g.setNode("bb_materac_alt_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 719, g2: 719},
    nextStep: 'summary'
});
g.setNode("bb_materac_alt_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1098, g2: 1098},
    nextStep: 'summary',
});

g.setNode("bb_materac_tenor_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 689, g2: 689},
    nextStep: 'summary'
});
g.setNode("bb_materac_tenor_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 769, g2: 769},
    nextStep: 'summary'
});
g.setNode("bb_materac_tenor_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 849, g2: 849},
    nextStep: 'summary'
});
g.setNode("bb_materac_tenor_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1278, g2: 1278},
    nextStep: 'summary',
});

g.setNode("bb_materac_bass_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 519, g2: 519},
    nextStep: 'summary'
});
g.setNode("bb_materac_bass_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 569, g2: 569},
    nextStep: 'summary'
});
g.setNode("bb_materac_bass_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 629, g2: 629},
    nextStep: 'summary'
});
g.setNode("bb_materac_bass_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 918, g2: 918},
    nextStep: 'summary',
});

//******************************************************

g.setNode("bp_nawierzchniowy", {
    node: 'bp_nawierzchniowy',
    title: 'topmadras',
    label: 'Vælg en topmadras',
    number: 4,
    zIndex: 30,
    skipToNode: 'summary',
    optionsFilter: true,
    info: 'Visualiseringen præsenteres i størrelsen 160 x 200 cm. De præsenterede stoffarver kan afvige fra de faktiske farver.'
});

g.setNode("bp_materac_bass", {
    node: 'bp_materac_bass',
    label: 'Bass',
    img: '/materace/bass.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'bp_covers_cashmere_tencel_top'
});

g.setNode("bp_materac_alt", {
    node: 'bp_materac_alt',
    label: 'Alt',
    img: '/materace/alt.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'bp_covers_cashmere_tencel_top'
});


g.setNode("bp_materac_tenor", {
    node: 'bp_materac_tenor',
    label: 'Tenor',
    img: '/materace/tenor.jpg',
    render: 'materace/top_blues_h31.png',
    cover: 'bp_covers_tencel_top'
});


g.setNode("bp_materac_alt_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 599, g2: 599},
    nextStep: 'summary'
});
g.setNode("bp_materac_alt_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 659, g2: 659},
    nextStep: 'summary'
});
g.setNode("bp_materac_alt_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 719, g2: 719},
    nextStep: 'summary'
});
g.setNode("bp_materac_alt_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1098, g2: 1098},
    nextStep: 'summary'
});

g.setNode("bp_materac_tenor_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 689, g2: 689},
    nextStep: 'summary'
});
g.setNode("bp_materac_tenor_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 769, g2: 769},
    nextStep: 'summary'
});
g.setNode("bp_materac_tenor_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 849, g2: 849},
    nextStep: 'summary'
});
g.setNode("bp_materac_tenor_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 1278, g2: 1278},
    nextStep: 'summary'
});

g.setNode("bp_materac_bass_140_200", {
    label: '140/200',
    width: 140,
    price: {g1: 519, g2: 519},
    nextStep: 'summary'
});
g.setNode("bp_materac_bass_160_200", {
    label: '160/200',
    width: 160,
    price: {g1: 569, g2: 569},
    nextStep: 'summary'
});
g.setNode("bp_materac_bass_180_200", {
    label: '180/200',
    width: 180,
    price: {g1: 629, g2: 629},
    nextStep: 'summary'
});
g.setNode("bp_materac_bass_200_200", {
    label: '200/200',
    width: 200,
    price: {g1: 918, g2: 918},
    nextStep: 'summary'
});


g.setNode("step_6", {
    node: 'step_6',
    title: 'otomana',
    label: 'wybierz otomanę',
    number: 5,
    zIndex: 35,
    skipToNode: 'summary',
    colors: 'colors_7',
    optionsFilter: false
});

g.setNode("otomana", {
    label: 'Otomana',
    img: 'otomany.png',
    render: 'transparent.png'
});

g.setNode("otomana_140", {label: '140/200', price: {g1: 1599, g2: 1849}, nextStep: 'summary'});
g.setNode("otomana_160", {label: '160/200', price: {g1: 1699, g2: 2099}, nextStep: 'summary'});
g.setNode("otomana_180", {label: '180/200', price: {g1: 1899, g2: 2169}, nextStep: 'summary'});


g.setNode("skrzynia_posciel_big", {
    node: 'skrzynia_posciel_big',
    title: 'Pojemnik na pościel',
    label: 'pojemnik na pościel',
    number: 5,
    zIndex: 35,
    skipToNode: 'frame_no_box_big',
    optionsFilter: true
});

g.setNode("skrzynia_posciel_big_price", {
    label: 'Pojemnik na pościel',
    img: 'pojemnik_na_posciel.jpg',
    render: 'transparent.png',
});

g.setNode("skrzynia_posciel_big_90_yes", {label: 'TAK',width: 90, price: {g1: 139, g2: 139}, nextStep: 'frame_with_box_90'});
g.setNode("skrzynia_posciel_big_140_yes", {label: 'TAK',width: 140, price: {g1: 199, g2: 199}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_big_160_yes", {label: 'TAK',width: 160, price: {g1: 269, g2: 269}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_big_180_yes", {label: 'TAK',width: 180, price: {g1: 269, g2: 269}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_big_200_yes", {label: 'TAK',width: 200, price: {g1: 289, g2: 289}, nextStep: 'frame_with_box'});

g.setNode("skrzynia_posciel_big_90_no", {label: 'NIE',width: 90, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_90'});
g.setNode("skrzynia_posciel_big_140_no", {label: 'NIE',width: 140, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_big'});
g.setNode("skrzynia_posciel_big_160_no", {label: 'NIE',width: 160, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_big'});
g.setNode("skrzynia_posciel_big_180_no", {label: 'NIE',width: 180, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_big'});
g.setNode("skrzynia_posciel_big_200_no", {label: 'NIE',width: 200, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_big'});

g.setNode("skrzynia_posciel_small", {
    node: 'skrzynia_posciel_small',
    title: 'Pojemnik na pościel',
    label: 'pojemnik na pościel',
    number: 5,
    zIndex: 35,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("skrzynia_posciel_small_price", {
    label: 'Pojemnik na pościel',
    img: 'pojemnik_na_posciel.jpg',
    render: 'transparent.png',
});

g.setNode("skrzynia_posciel_90", {
    node: 'skrzynia_posciel_90',
    title: 'Pojemnik na pościel',
    label: 'pojemnik na pościel',
    number: 5,
    zIndex: 35,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("skrzynia_posciel_90_price", {
    label: 'Pojemnik na pościel',
    img: 'pojemnik_na_posciel.jpg',
    render: 'transparent.png',
});


g.setNode("skrzynia_posciel_small_90_yes", {label: 'TAK',width: 90, price: {g1: 139, g2: 199}, nextStep: 'frame_with_box_90'});
g.setNode("skrzynia_posciel_small_140_yes", {label: 'TAK',width: 140, price: {g1: 199, g2: 199}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_small_160_yes", {label: 'TAK',width: 160, price: {g1: 269, g2: 269}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_small_180_yes", {label: 'TAK',width: 180, price: {g1: 269, g2: 269}, nextStep: 'frame_with_box'});
g.setNode("skrzynia_posciel_small_200_yes", {label: 'TAK',width: 200, price: {g1: 289, g2: 289}, nextStep: 'frame_with_box'});

g.setNode("skrzynia_posciel_small_90_no", {label: 'NIE',width: 90, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_90'});
g.setNode("skrzynia_posciel_small_140_no", {label: 'NIE',width: 140, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_small'});
g.setNode("skrzynia_posciel_small_160_no", {label: 'NIE',width: 160, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_small'});
g.setNode("skrzynia_posciel_small_180_no", {label: 'NIE',width: 180, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_small'});
g.setNode("skrzynia_posciel_small_200_no", {label: 'NIE',width: 200, price: {g1: 0, g2: 0}, nextStep: 'frame_no_box_small'});

g.setEdge("skrzynia_posciel_big", "skrzynia_posciel_big_price");

g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_90_yes");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_140_yes");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_160_yes");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_180_yes");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_200_yes");

g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_90_no");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_140_no");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_160_no");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_180_no");
g.setEdge("skrzynia_posciel_big_price", "skrzynia_posciel_big_200_no");

g.setEdge("skrzynia_posciel_small", "skrzynia_posciel_small_price");

g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_90_yes");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_140_yes");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_160_yes");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_180_yes");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_200_yes");

g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_90_no");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_140_no");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_160_no");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_180_no");
g.setEdge("skrzynia_posciel_small_price", "skrzynia_posciel_small_200_no");

g.setEdge("skrzynia_posciel_90", "skrzynia_posciel_90_price");
g.setEdge("skrzynia_posciel_90_price", "skrzynia_posciel_big_90_yes");
g.setEdge("skrzynia_posciel_90_price", "skrzynia_posciel_big_90_no");

g.setNode("skrzynia_posciel_urban", {
    node: 'skrzynia_posciel_big',
    title: 'Pojemnik na pościel',
    label: 'pojemnik na pościel',
    number: 5,
    zIndex: 35,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("skrzynia_posciel_urban", {
    label: 'Pojemnik na pościel',
    img: 'pojemnik_na_posciel.jpg',
    render: 'transparent.png',
});

g.setNode("frame", {
    node: 'frame',
    title: 'Sengramme',
    label: 'Vælg sengramme',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});


g.setNode("frame_with_box", {
    node: 'frame_with_box',
    title: 'Sengramme',
    label: 'Vælg sengramme',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_with_box_90", {
    node: 'frame_with_box_90',
    title: 'Sengramme',
    label: 'Vælg sengramme',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_family_lift", {
    label: 'Family lift',
    img: '/stelaze/family_lift.jpg',
    render: 'ramiak.png',
});

g.setNode("frame_double_lift", {
    label: 'Double lift',
    img: '/stelaze/double_lift.jpg',
    render: 'ramiak.png',
});

g.setNode("frame_family_lift_90", {label: '90/200',width: 90, price: {g1: 429, g2: 429}, nextStep: 'summary'});
g.setNode("frame_family_lift_140", {label: '140/200',width: 140, price: {g1: 838, g2: 838}, nextStep: 'summary'});
g.setNode("frame_family_lift_160", {label: '160/200',width: 160, price: {g1: 838, g2: 838}, nextStep: 'summary'});
g.setNode("frame_family_lift_180", {label: '180/200',width: 180, price: {g1: 878, g2: 878}, nextStep: 'summary'});
g.setNode("frame_family_lift_200", {label: '200/200',width: 200, price: {g1: 878, g2: 878}, nextStep: 'summary'});

g.setNode("frame_double_lift_90", {label: '90/200',width: 90, price: {g1: 568, g2: 568}, nextStep: 'summary'});
g.setNode("frame_double_lift_140", {label: '140/200',width: 140, price: {g1: 568, g2: 568}, nextStep: 'summary'});
g.setNode("frame_double_lift_160", {label: '160/200',width: 160, price: {g1: 568, g2: 568}, nextStep: 'summary'});
g.setNode("frame_double_lift_180", {label: '180/200',width: 180, price: {g1: 592, g2: 592}, nextStep: 'summary'});

g.setEdge("frame_with_box", "frame_family_lift");
g.setEdge("frame_with_box", "frame_double_lift");

g.setEdge("frame_family_lift", "frame_family_lift_90");
g.setEdge("frame_family_lift", "frame_family_lift_140");
g.setEdge("frame_family_lift", "frame_family_lift_160");
g.setEdge("frame_family_lift", "frame_family_lift_180");
g.setEdge("frame_family_lift", "frame_family_lift_200");

g.setEdge("frame_double_lift", "frame_double_lift_90");
g.setEdge("frame_double_lift", "frame_double_lift_140");
g.setEdge("frame_double_lift", "frame_double_lift_160");
g.setEdge("frame_double_lift", "frame_double_lift_180");

g.setNode("frame_no_box_big", {
    node: 'frame_no_box_big',
    title: 'Sengramme',
    label: 'Vælg sengramme',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_no_box", {
    node: 'frame_no_box',
    title: 'Sengramme',
    label: 'Vælg sengramme',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_no_box_90", {
    node: 'frame_no_box_90',
    title: 'Sengramme',
    label: 'Vælg sengramme',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});

g.setNode("frame_family_expert", {
    label: 'Family lift',
    img: '/stelaze/family_expert.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_family_moto", {
    label: 'Family moto',
    img: '/stelaze/family_moto.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_select_expert", {
    label: 'Select expert',
    img: '/stelaze/select_expert.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_select_moto", {
    label: 'Select moto',
    img: '/stelaze/select_moto.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_family_classic", {
    label: 'Family classic',
    img: '/stelaze/family_classic.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_select_classic", {
    label: 'Select classic',
    img: '/stelaze/select_classic.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_sam", {
    label: 'Sengramme sam',
    img: '/stelaze/stelaz_sam.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_family_lift", {
    label: 'Family lift',
    img: '/stelaze/family_lift.jpg',
    render: 'ramiak.png',
});
g.setNode("frame_double_lift", {
    label: 'Double lift',
    img: '/stelaze/double_lift.jpg',
    render: 'ramiak.png',
});

g.setNode("frame_family_expert_140", {label: '140/200',width: 140, price: {g1: 499, g2: 499}, nextStep: 'summary'});
g.setNode("frame_family_expert_160", {label: '160/200',width: 160, price: {g1: 678, g2: 678}, nextStep: 'summary'});
g.setNode("frame_family_expert_180", {label: '180/200',width: 180, price: {g1: 738, g2: 738}, nextStep: 'summary'});
g.setNode("frame_family_expert_200", {label: '200/200',width: 200, price: {g1: 758, g2: 758}, nextStep: 'summary'});

g.setNode("frame_family_moto_160", {label: '160/200',width: 160, price: {g1: 2198, g2: 2198}, nextStep: 'summary'});
g.setNode("frame_family_moto_180", {label: '180/200',width: 180, price: {g1: 2278, g2: 2278}, nextStep: 'summary'});
g.setNode("frame_family_moto_200", {label: '200/200',width: 200, price: {g1: 2398, g2: 2398}, nextStep: 'summary'});

g.setNode("frame_family_classic_90", {label: '90/200',width: 90, price: {g1: 219, g2: 219}, nextStep: 'summary'});
g.setNode("frame_family_classic_140", {label: '140/200',width: 140, price: {g1: 359, g2: 359}, nextStep: 'summary'});
g.setNode("frame_family_classic_160", {label: '160/200',width: 160, price: {g1: 418, g2: 418}, nextStep: 'summary'});
g.setNode("frame_family_classic_180", {label: '180/200',width: 180, price: {g1: 438, g2: 438}, nextStep: 'summary'});
g.setNode("frame_family_classic_200", {label: '200/200',width: 200, price: {g1: 478, g2: 478}, nextStep: 'summary'});

g.setNode("frame_select_expert_160", {label: '160/200',width: 160, price: {g1: 1318, g2: 1318}, nextStep: 'summary'});
g.setNode("frame_select_expert_180", {label: '180/200',width: 180, price: {g1: 1358, g2: 1358}, nextStep: 'summary'});

g.setNode("frame_select_moto_160", {label: '160/200',width: 160, price: {g1: 3698, g2: 3698}, nextStep: 'summary'});
g.setNode("frame_select_moto_180", {label: '180/200',width: 180, price: {g1: 3798, g2: 3798}, nextStep: 'summary'});

g.setNode("frame_select_classic_90", {label: '90/200',width: 90, price: {g1: 469, g2: 469}, nextStep: 'summary'});
g.setNode("frame_select_classic_160", {label: '160/200',width: 160, price: {g1: 898, g2: 898}, nextStep: 'summary'});
g.setNode("frame_select_classic_180", {label: '180/200',width: 180, price: {g1: 938, g2: 938}, nextStep: 'summary'});

g.setNode("frame_sam_90", {label: '90/200',width: 90, price: {g1: 159, g2: 159}, nextStep: 'summary'});
g.setNode("frame_sam_140", {label: '140/200',width: 140, price: {g1: 229, g2: 229}, nextStep: 'summary'});
g.setNode("frame_sam_160", {label: '160/200',width: 160, price: {g1: 259, g2: 259}, nextStep: 'summary'});
g.setNode("frame_sam_180", {label: '180/200',width: 180, price: {g1: 318, g2: 318}, nextStep: 'summary'});

g.setEdge("frame_no_box", "frame_family_expert");
g.setEdge("frame_no_box", "frame_family_moto");
g.setEdge("frame_no_box", "frame_select_expert");
g.setEdge("frame_no_box", "frame_select_moto");
g.setEdge("frame_no_box", "frame_family_classic");
g.setEdge("frame_no_box", "frame_select_classic");
g.setEdge("frame_no_box", "frame_sam");
g.setEdge("frame_no_box", "frame_double_lift");
g.setEdge("frame_no_box", "frame_family_lift");


g.setEdge("frame", "frame_family_expert");
g.setEdge("frame", "frame_family_moto");
g.setEdge("frame", "frame_select_expert");
g.setEdge("frame", "frame_select_moto");
g.setEdge("frame", "frame_family_classic");
g.setEdge("frame", "frame_select_classic");
g.setEdge("frame", "frame_sam");
g.setEdge("frame", "frame_double_lift");
g.setEdge("frame", "frame_family_lift");

g.setEdge("frame_no_box_big", "frame_family_expert");
g.setEdge("frame_no_box_big", "frame_family_moto");
g.setEdge("frame_no_box_big", "frame_select_expert");
g.setEdge("frame_no_box_big", "frame_select_moto");
g.setEdge("frame_no_box_big", "frame_family_classic");
g.setEdge("frame_no_box_big", "frame_select_classic");
g.setEdge("frame_no_box_big", "frame_sam");
g.setEdge("frame_no_box_big", "frame_double_lift");
g.setEdge("frame_no_box_big", "frame_family_lift");

g.setEdge("frame_family_expert", "frame_family_expert_140");
g.setEdge("frame_family_expert", "frame_family_expert_160");
g.setEdge("frame_family_expert", "frame_family_expert_180");
g.setEdge("frame_family_expert", "frame_family_expert_200");

g.setEdge("frame_family_moto", "frame_family_moto_160");
g.setEdge("frame_family_moto", "frame_family_moto_180");
g.setEdge("frame_family_moto", "frame_family_moto_200");

g.setEdge("frame_family_classic", "frame_family_classic_90");
g.setEdge("frame_family_classic", "frame_family_classic_140");
g.setEdge("frame_family_classic", "frame_family_classic_160");
g.setEdge("frame_family_classic", "frame_family_classic_180");
g.setEdge("frame_family_classic", "frame_family_classic_200");

g.setEdge("frame_select_expert", "frame_select_expert_160");
g.setEdge("frame_select_expert", "frame_select_expert_180");

g.setEdge("frame_select_moto", "frame_select_moto_160");
g.setEdge("frame_select_moto", "frame_select_moto_180");

g.setEdge("frame_select_classic", "frame_select_classic_90");
g.setEdge("frame_select_classic", "frame_select_classic_160");
g.setEdge("frame_select_classic", "frame_select_classic_180");

g.setEdge("frame_sam", "frame_sam_90");
g.setEdge("frame_sam", "frame_sam_140");
g.setEdge("frame_sam", "frame_sam_160");
g.setEdge("frame_sam", "frame_sam_180");

g.setNode("frame_no_box_small", {
    node: 'frame_no_box_small',
    title: 'Sengramme',
    label: 'Vælg sengramme',
    number: 6,
    zIndex: 22,
    skipToNode: 'summary',
    optionsFilter: true
});
g.setEdge("frame_no_box_small", "frame_family_classic");
g.setEdge("frame_no_box_small", "frame_select_classic");
g.setEdge("frame_no_box_small", "frame_family_lift");
g.setEdge("frame_no_box_small", "frame_double_lift");

g.setEdge("frame_with_box_90", "frame_family_lift");

g.setEdge("frame_no_box_90", "frame_family_classic");
g.setEdge("frame_no_box_90", "frame_select_classic");
g.setEdge("frame_no_box_90", "frame_sam");
g.setEdge("frame_no_box_90", "frame_double_lift");
g.setEdge("frame_no_box_90", "frame_family_lift");

g.setNode("otomana_140", {label: '140/200', price: {g1: 1599, g2: 1849}, nextStep: 'summary'});
g.setNode("otomana_160", {label: '160/200', price: {g1: 1699, g2: 2099}, nextStep: 'summary'});
g.setNode("otomana_180", {label: '180/200', price: {g1: 1899, g2: 2169}, nextStep: 'summary'});

//-------------------------------

g.setEdge("loadLevel", "step_1");

g.setEdge("step_1", "baza_tapicerowana");
g.setEdge("step_1", "base_box");
g.setEdge("step_1", "box_podnoszony");
g.setEdge("step_1", "baza_kontynentalna");
g.setEdge("step_1", "baza_kontynentalna_z_szuflada");

g.setEdge("base_box", "base_box_140_200");
g.setEdge("base_box", "base_box_160_200");
g.setEdge("base_box", "base_box_180_200");
g.setEdge("base_box", "base_box_200_200");

g.setEdge("baza_kontynentalna", "baza_kontynentalna_140_200");
g.setEdge("baza_kontynentalna", "baza_kontynentalna_160_200");
g.setEdge("baza_kontynentalna", "baza_kontynentalna_180_200");
g.setEdge("baza_kontynentalna", "baza_kontynentalna_200_200");

g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_140_200");
g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_160_200");
g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_180_200");
g.setEdge("baza_kontynentalna_z_szuflada", "baza_kontynentalna_z_szuflada_200_200");

g.setEdge("baza_tapicerowana", "baza_tapicerowana_90_200");
g.setEdge("baza_tapicerowana", "baza_tapicerowana_140_200");
g.setEdge("baza_tapicerowana", "baza_tapicerowana_160_200");
g.setEdge("baza_tapicerowana", "baza_tapicerowana_180_200");
g.setEdge("baza_tapicerowana", "baza_tapicerowana_200_200");

g.setEdge("box_podnoszony", "box_podnoszony_140_200");
g.setEdge("box_podnoszony", "box_podnoszony_160_200");
g.setEdge("box_podnoszony", "box_podnoszony_180_200");
g.setEdge("box_podnoszony", "box_podnoszony_200_200");


g.setEdge("kontynent_colors_7", "kontynent_novel");
g.setEdge("kontynent_colors_7", "kontynent_roko");
g.setEdge("kontynent_colors_7", "kontynent_aspen");
g.setEdge("kontynent_colors_7", "kontynent_river");
g.setEdge("kontynent_colors_7", "kontynent_eren");
g.setEdge("kontynent_colors_7", "kontynent_ontario");
g.setEdge("kontynent_colors_7", "kontynent_riviera");

g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_novel");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_roko");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_aspen");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_river");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_eren");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_ontario");
g.setEdge("kontynent_szuflada_colors_7", "kontynent_szuflada_riviera");

g.setEdge("base_box_colors_7", "base_box_novel");
g.setEdge("base_box_colors_7", "base_box_roko");
g.setEdge("base_box_colors_7", "base_box_aspen");
g.setEdge("base_box_colors_7", "base_box_river");
g.setEdge("base_box_colors_7", "base_box_eren");
g.setEdge("base_box_colors_7", "base_box_ontario");
g.setEdge("base_box_colors_7", "base_box_riviera");

g.setEdge("base_podnoszony_colors_7", "base_podnoszony_novel");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_roko");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_aspen");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_river");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_eren");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_ontario");
g.setEdge("base_podnoszony_colors_7", "base_podnoszony_riviera");

g.setEdge("tapicerowana_colors_7", "tapicerowana_novel");
g.setEdge("tapicerowana_colors_7", "tapicerowana_roko");
g.setEdge("tapicerowana_colors_7", "tapicerowana_aspen");
g.setEdge("tapicerowana_colors_7", "tapicerowana_river");
g.setEdge("tapicerowana_colors_7", "tapicerowana_eren");
g.setEdge("tapicerowana_colors_7", "tapicerowana_ontario");
g.setEdge("tapicerowana_colors_7", "tapicerowana_riviera");

g.setEdge("urban_colors_7", "urban_novel");
g.setEdge("urban_colors_7", "urban_roko");
g.setEdge("urban_colors_7", "urban_aspen");
g.setEdge("urban_colors_7", "urban_river");
g.setEdge("urban_colors_7", "urban_eren");
g.setEdge("urban_colors_7", "urban_ontario");
g.setEdge("urban_colors_7", "urban_riviera");

g.setEdge("preppy_colors_7", "preppy_novel");
g.setEdge("preppy_colors_7", "preppy_roko");
g.setEdge("preppy_colors_7", "preppy_aspen");
g.setEdge("preppy_colors_7", "preppy_river");
g.setEdge("preppy_colors_7", "preppy_eren");
g.setEdge("preppy_colors_7", "preppy_ontario");
g.setEdge("preppy_colors_7", "preppy_riviera");

g.setEdge("glamour_colors_7", "glamour_novel");
g.setEdge("glamour_colors_7", "glamour_roko");
g.setEdge("glamour_colors_7", "glamour_aspen");
g.setEdge("glamour_colors_7", "glamour_river");
g.setEdge("glamour_colors_7", "glamour_eren");
g.setEdge("glamour_colors_7", "glamour_ontario");
g.setEdge("glamour_colors_7", "glamour_riviera");

g.setEdge("vintage_colors_7", "vintage_novel");
g.setEdge("vintage_colors_7", "vintage_roko");
g.setEdge("vintage_colors_7", "vintage_aspen");
g.setEdge("vintage_colors_7", "vintage_river");
g.setEdge("vintage_colors_7", "vintage_eren");
g.setEdge("vintage_colors_7", "vintage_ontario");
g.setEdge("vintage_colors_7", "vintage_riviera");

g.setEdge("eclectic_colors_7", "eclectic_novel");
g.setEdge("eclectic_colors_7", "eclectic_roko");
g.setEdge("eclectic_colors_7", "eclectic_aspen");
g.setEdge("eclectic_colors_7", "eclectic_river");
g.setEdge("eclectic_colors_7", "eclectic_eren");
g.setEdge("eclectic_colors_7", "eclectic_ontario");
g.setEdge("eclectic_colors_7", "eclectic_riviera");

g.setEdge("ladylike_colors_7", "ladylike_novel");
g.setEdge("ladylike_colors_7", "ladylike_roko");
g.setEdge("ladylike_colors_7", "ladylike_aspen");
g.setEdge("ladylike_colors_7", "ladylike_river");
g.setEdge("ladylike_colors_7", "ladylike_eren");
g.setEdge("ladylike_colors_7", "ladylike_ontario");
g.setEdge("ladylike_colors_7", "ladylike_riviera");

g.setEdge("momiko_colors_7", "momiko_novel");
g.setEdge("momiko_colors_7", "momiko_roko");
g.setEdge("momiko_colors_7", "momiko_aspen");
g.setEdge("momiko_colors_7", "momiko_river");
g.setEdge("momiko_colors_7", "momiko_eren");
g.setEdge("momiko_colors_7", "momiko_ontario");
g.setEdge("momiko_colors_7", "momiko_riviera");

//********************************

g.setEdge("urban_colors_7_170", "urban_novel_170");
g.setEdge("urban_colors_7_170", "urban_roko_170");
g.setEdge("urban_colors_7_170", "urban_aspen_170");
g.setEdge("urban_colors_7_170", "urban_river_170");
g.setEdge("urban_colors_7_170", "urban_eren_170");
g.setEdge("urban_colors_7_170", "urban_ontario_170");
g.setEdge("urban_colors_7_170", "urban_riviera_170");

g.setEdge("preppy_colors_7_170", "preppy_novel_170");
g.setEdge("preppy_colors_7_170", "preppy_roko_170");
g.setEdge("preppy_colors_7_170", "preppy_aspen_170");
g.setEdge("preppy_colors_7_170", "preppy_river_170");
g.setEdge("preppy_colors_7_170", "preppy_eren_170");
g.setEdge("preppy_colors_7_170", "preppy_ontario_170");
g.setEdge("preppy_colors_7_170", "preppy_riviera_170");

g.setEdge("glamour_colors_7_170", "glamour_novel_170");
g.setEdge("glamour_colors_7_170", "glamour_roko_170");
g.setEdge("glamour_colors_7_170", "glamour_aspen_170");
g.setEdge("glamour_colors_7_170", "glamour_river_170");
g.setEdge("glamour_colors_7_170", "glamour_eren_170");
g.setEdge("glamour_colors_7_170", "glamour_ontario_170");
g.setEdge("glamour_colors_7_170", "glamour_riviera_170");

g.setEdge("vintage_colors_7_170", "vintage_novel_170");
g.setEdge("vintage_colors_7_170", "vintage_roko_170");
g.setEdge("vintage_colors_7_170", "vintage_aspen_170");
g.setEdge("vintage_colors_7_170", "vintage_river_170");
g.setEdge("vintage_colors_7_170", "vintage_eren_170");
g.setEdge("vintage_colors_7_170", "vintage_ontario_170");
g.setEdge("vintage_colors_7_170", "vintage_riviera_170");

g.setEdge("eclectic_colors_7_170", "eclectic_novel_170");
g.setEdge("eclectic_colors_7_170", "eclectic_roko_170");
g.setEdge("eclectic_colors_7_170", "eclectic_aspen_170");
g.setEdge("eclectic_colors_7_170", "eclectic_river_170");
g.setEdge("eclectic_colors_7_170", "eclectic_eren_170");
g.setEdge("eclectic_colors_7_170", "eclectic_ontario_170");
g.setEdge("eclectic_colors_7_170", "eclectic_riviera_170");

g.setEdge("ladylike_colors_7_170", "ladylike_novel_170");
g.setEdge("ladylike_colors_7_170", "ladylike_roko_170");
g.setEdge("ladylike_colors_7_170", "ladylike_aspen_170");
g.setEdge("ladylike_colors_7_170", "ladylike_river_170");
g.setEdge("ladylike_colors_7_170", "ladylike_eren_170");
g.setEdge("ladylike_colors_7_170", "ladylike_ontario_170");
g.setEdge("ladylike_colors_7_170", "ladylike_riviera_170");

g.setEdge("momiko_colors_7_170", "momiko_novel_170");
g.setEdge("momiko_colors_7_170", "momiko_roko_170");
g.setEdge("momiko_colors_7_170", "momiko_aspen_170");
g.setEdge("momiko_colors_7_170", "momiko_river_170");
g.setEdge("momiko_colors_7_170", "momiko_eren_170");
g.setEdge("momiko_colors_7_170", "momiko_ontario_170");
g.setEdge("momiko_colors_7_170", "momiko_riviera_170");



//*********************************

g.setEdge("m_tap_colors_7", "m_tap_novel");
g.setEdge("m_tap_colors_7", "m_tap_roko");
g.setEdge("m_tap_colors_7", "m_tap_aspen");
g.setEdge("m_tap_colors_7", "m_tap_river");
g.setEdge("m_tap_colors_7", "m_tap_eren");
g.setEdge("m_tap_colors_7", "m_tap_ontario");
g.setEdge("m_tap_colors_7", "m_tap_riviera");

//***********************************

g.setEdge("bp_tap_colors_7", "bp_tap_novel");
g.setEdge("bp_tap_colors_7", "bp_tap_roko");
g.setEdge("bp_tap_colors_7", "bp_tap_aspen");
g.setEdge("bp_tap_colors_7", "bp_tap_river");
g.setEdge("bp_tap_colors_7", "bp_tap_eren");
g.setEdge("bp_tap_colors_7", "bp_tap_ontario");
g.setEdge("bp_tap_colors_7", "bp_tap_riviera");

//***********************************

g.setEdge("step_2", "urban");
g.setEdge("step_2", "preppy");
g.setEdge("step_2", "glamour");
g.setEdge("step_2", "vintage");
g.setEdge("step_2", "eclectic");
g.setEdge("step_2", "ladylike");
g.setEdge("step_2", "momiko");

g.setEdge("bb_wezglowie", "bb_wezglowie_urban");
g.setEdge("bb_wezglowie", "bb_wezglowie_preppy");
g.setEdge("bb_wezglowie", "bb_wezglowie_glamour");
g.setEdge("bb_wezglowie", "bb_wezglowie_vintage");
g.setEdge("bb_wezglowie", "bb_wezglowie_eclectic");
g.setEdge("bb_wezglowie", "bb_wezglowie_ladylike");
g.setEdge("bb_wezglowie", "bb_wezglowie_momiko");

//**************************************

g.setEdge("bp_wezglowie", "bp_wezglowie_urban");
g.setEdge("bp_wezglowie", "bp_wezglowie_preppy");
g.setEdge("bp_wezglowie", "bp_wezglowie_glamour");
g.setEdge("bp_wezglowie", "bp_wezglowie_vintage");
g.setEdge("bp_wezglowie", "bp_wezglowie_eclectic");
g.setEdge("bp_wezglowie", "bp_wezglowie_ladylike");
g.setEdge("bp_wezglowie", "bp_wezglowie_momiko");

//**************************************

g.setEdge("t_wezglowie_90", "t_wezglowie_urban");
g.setEdge("t_wezglowie", "t_wezglowie_urban");
g.setEdge("t_wezglowie", "t_wezglowie_preppy");
g.setEdge("t_wezglowie", "t_wezglowie_glamour");
g.setEdge("t_wezglowie", "t_wezglowie_vintage");
g.setEdge("t_wezglowie", "t_wezglowie_eclectic");
g.setEdge("t_wezglowie", "t_wezglowie_ladylike");
g.setEdge("t_wezglowie", "t_wezglowie_momiko");

//**************************************

g.setEdge("urban", "urban_140_115");
g.setEdge("urban", "urban_160_115");
g.setEdge("urban", "urban_180_115");
g.setEdge("urban", "urban_200_115");

g.setEdge("urban", "urban_140_95");
g.setEdge("urban", "urban_160_95");
g.setEdge("urban", "urban_180_95");
g.setEdge("urban", "urban_200_95");

g.setEdge("preppy", "preppy_140_115");
g.setEdge("preppy", "preppy_160_115");
g.setEdge("preppy", "preppy_180_115");
g.setEdge("preppy", "preppy_200_115");

g.setEdge("preppy", "preppy_140_95");
g.setEdge("preppy", "preppy_160_95");
g.setEdge("preppy", "preppy_180_95");
g.setEdge("preppy", "preppy_200_95");

g.setEdge("glamour", "glamour_140_115");
g.setEdge("glamour", "glamour_160_115");
g.setEdge("glamour", "glamour_180_115");
g.setEdge("glamour", "glamour_200_115");

g.setEdge("vintage", "vintage_140_115");
g.setEdge("vintage", "vintage_160_115");
g.setEdge("vintage", "vintage_180_115");
g.setEdge("vintage", "vintage_200_115");

g.setEdge("vintage", "vintage_140_95");
g.setEdge("vintage", "vintage_160_95");
g.setEdge("vintage", "vintage_180_95");
g.setEdge("vintage", "vintage_200_95");

g.setEdge("momiko", "momiko_140_115");
g.setEdge("momiko", "momiko_160_115");
g.setEdge("momiko", "momiko_180_115");
g.setEdge("momiko", "momiko_200_115");

g.setEdge("momiko", "momiko_140_95");
g.setEdge("momiko", "momiko_160_95");
g.setEdge("momiko", "momiko_180_95");
g.setEdge("momiko", "momiko_200_95");

g.setEdge("eclectic", "eclectic_140_115");
g.setEdge("eclectic", "eclectic_160_115");
g.setEdge("eclectic", "eclectic_180_115");
g.setEdge("eclectic", "eclectic_200_115");

g.setEdge("eclectic", "eclectic_140_95");
g.setEdge("eclectic", "eclectic_160_95");
g.setEdge("eclectic", "eclectic_180_95");
g.setEdge("eclectic", "eclectic_200_95");

g.setEdge("ladylike", "ladylike_140_115");
g.setEdge("ladylike", "ladylike_160_115");
g.setEdge("ladylike", "ladylike_180_115");
g.setEdge("ladylike", "ladylike_200_115");

//**************************************************

g.setEdge("bb_wezglowie_urban", "bb_urban_140_95");
g.setEdge("bb_wezglowie_urban", "bb_urban_160_95");
g.setEdge("bb_wezglowie_urban", "bb_urban_180_95");
g.setEdge("bb_wezglowie_urban", "bb_urban_200_95");

g.setEdge("bb_wezglowie_urban", "bb_urban_140_115");
g.setEdge("bb_wezglowie_urban", "bb_urban_160_115");
g.setEdge("bb_wezglowie_urban", "bb_urban_180_115");
g.setEdge("bb_wezglowie_urban", "bb_urban_200_115");

g.setEdge("bb_wezglowie_preppy", "bb_preppy_140_95");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_160_95");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_180_95");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_200_95");

g.setEdge("bb_wezglowie_preppy", "bb_preppy_140_115");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_160_115");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_180_115");
g.setEdge("bb_wezglowie_preppy", "bb_preppy_200_115");

g.setEdge("bb_wezglowie_glamour", "bb_glamour_140_115");
g.setEdge("bb_wezglowie_glamour", "bb_glamour_160_115");
g.setEdge("bb_wezglowie_glamour", "bb_glamour_180_115");
g.setEdge("bb_wezglowie_glamour", "bb_glamour_200_115");

g.setEdge("bb_wezglowie_vintage", "bb_vintage_140_95");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_160_95");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_180_95");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_200_95");

g.setEdge("bb_wezglowie_vintage", "bb_vintage_140_115");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_160_115");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_180_115");
g.setEdge("bb_wezglowie_vintage", "bb_vintage_200_115");

g.setEdge("bb_wezglowie_momiko", "bb_momiko_140_95");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_160_95");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_180_95");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_200_95");

g.setEdge("bb_wezglowie_momiko", "bb_momiko_140_115");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_160_115");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_180_115");
g.setEdge("bb_wezglowie_momiko", "bb_momiko_200_115");

g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_140_95");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_160_95");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_180_95");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_200_95");

g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_140_115");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_160_115");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_180_115");
g.setEdge("bb_wezglowie_eclectic", "bb_eclectic_200_115");

g.setEdge("bb_wezglowie_ladylike", "bb_ladylike_140_115");
g.setEdge("bb_wezglowie_ladylike", "bb_ladylike_160_115");
g.setEdge("bb_wezglowie_ladylike", "bb_ladylike_180_115");
g.setEdge("bb_wezglowie_ladylike", "bb_ladylike_200_115");

//*****************************************************

g.setEdge("bp_wezglowie_urban", "bp_urban_140_95");
g.setEdge("bp_wezglowie_urban", "bp_urban_160_95");
g.setEdge("bp_wezglowie_urban", "bp_urban_180_95");
g.setEdge("bp_wezglowie_urban", "bp_urban_200_95");

g.setEdge("bp_wezglowie_urban", "bp_urban_140_115");
g.setEdge("bp_wezglowie_urban", "bp_urban_160_115");
g.setEdge("bp_wezglowie_urban", "bp_urban_180_115");
g.setEdge("bp_wezglowie_urban", "bp_urban_200_115");

g.setEdge("bp_wezglowie_preppy", "bp_preppy_140_95");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_160_95");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_180_95");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_200_95");

g.setEdge("bp_wezglowie_preppy", "bp_preppy_140_115");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_160_115");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_180_115");
g.setEdge("bp_wezglowie_preppy", "bp_preppy_200_115");

g.setEdge("bp_wezglowie_glamour", "bp_glamour_140_115");
g.setEdge("bp_wezglowie_glamour", "bp_glamour_160_115");
g.setEdge("bp_wezglowie_glamour", "bp_glamour_180_115");
g.setEdge("bp_wezglowie_glamour", "bp_glamour_200_115");

g.setEdge("bp_wezglowie_vintage", "bp_vintage_140_95");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_160_95");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_180_95");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_200_95");

g.setEdge("bp_wezglowie_vintage", "bp_vintage_140_115");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_160_115");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_180_115");
g.setEdge("bp_wezglowie_vintage", "bp_vintage_200_115");

g.setEdge("bp_wezglowie_momiko", "bp_momiko_140_95");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_160_95");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_180_95");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_200_95");

g.setEdge("bp_wezglowie_momiko", "bp_momiko_140_115");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_160_115");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_180_115");
g.setEdge("bp_wezglowie_momiko", "bp_momiko_200_115");

g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_140_95");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_160_95");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_180_95");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_200_95");

g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_140_115");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_160_115");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_180_115");
g.setEdge("bp_wezglowie_eclectic", "bp_eclectic_200_115");

g.setEdge("bp_wezglowie_ladylike", "bp_ladylike_140_115");
g.setEdge("bp_wezglowie_ladylike", "bp_ladylike_160_115");
g.setEdge("bp_wezglowie_ladylike", "bp_ladylike_180_115");
g.setEdge("bp_wezglowie_ladylike", "bp_ladylike_200_115");

//*****************************************************

g.setEdge("t_wezglowie_urban", "t_urban_90_95");
g.setEdge("t_wezglowie_urban", "t_urban_140_95");
g.setEdge("t_wezglowie_urban", "t_urban_160_95");
g.setEdge("t_wezglowie_urban", "t_urban_180_95");
g.setEdge("t_wezglowie_urban", "t_urban_200_95");

g.setEdge("t_wezglowie_urban", "t_urban_90_115");
g.setEdge("t_wezglowie_urban", "t_urban_140_115");
g.setEdge("t_wezglowie_urban", "t_urban_160_115");
g.setEdge("t_wezglowie_urban", "t_urban_180_115");
g.setEdge("t_wezglowie_urban", "t_urban_200_115");

g.setEdge("t_wezglowie_preppy", "t_preppy_140_95");
g.setEdge("t_wezglowie_preppy", "t_preppy_160_95");
g.setEdge("t_wezglowie_preppy", "t_preppy_180_95");
g.setEdge("t_wezglowie_preppy", "t_preppy_200_95");

g.setEdge("t_wezglowie_preppy", "t_preppy_140_115");
g.setEdge("t_wezglowie_preppy", "t_preppy_160_115");
g.setEdge("t_wezglowie_preppy", "t_preppy_180_115");
g.setEdge("t_wezglowie_preppy", "t_preppy_200_115");

g.setEdge("t_wezglowie_glamour", "t_glamour_140_115");
g.setEdge("t_wezglowie_glamour", "t_glamour_160_115");
g.setEdge("t_wezglowie_glamour", "t_glamour_180_115");
g.setEdge("t_wezglowie_glamour", "t_glamour_200_115");

g.setEdge("t_wezglowie_vintage", "t_vintage_140_95");
g.setEdge("t_wezglowie_vintage", "t_vintage_160_95");
g.setEdge("t_wezglowie_vintage", "t_vintage_180_95");
g.setEdge("t_wezglowie_vintage", "t_vintage_200_95");

g.setEdge("t_wezglowie_vintage", "t_vintage_140_115");
g.setEdge("t_wezglowie_vintage", "t_vintage_160_115");
g.setEdge("t_wezglowie_vintage", "t_vintage_180_115");
g.setEdge("t_wezglowie_vintage", "t_vintage_200_115");

g.setEdge("t_wezglowie_momiko", "t_momiko_140_95");
g.setEdge("t_wezglowie_momiko", "t_momiko_160_95");
g.setEdge("t_wezglowie_momiko", "t_momiko_180_95");
g.setEdge("t_wezglowie_momiko", "t_momiko_200_95");

g.setEdge("t_wezglowie_momiko", "t_momiko_140_115");
g.setEdge("t_wezglowie_momiko", "t_momiko_160_115");
g.setEdge("t_wezglowie_momiko", "t_momiko_180_115");
g.setEdge("t_wezglowie_momiko", "t_momiko_200_115");

g.setEdge("t_wezglowie_eclectic", "t_eclectic_140_95");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_160_95");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_180_95");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_200_95");

g.setEdge("t_wezglowie_eclectic", "t_eclectic_140_115");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_160_115");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_180_115");
g.setEdge("t_wezglowie_eclectic", "t_eclectic_200_115");

g.setEdge("t_wezglowie_ladylike", "t_ladylike_140_115");
g.setEdge("t_wezglowie_ladylike", "t_ladylike_160_115");
g.setEdge("t_wezglowie_ladylike", "t_ladylike_180_115");
g.setEdge("t_wezglowie_ladylike", "t_ladylike_200_115");

//****************************

g.setEdge("legs", "stozek_owal_buk");
g.setEdge("legs", "stozek_owal_dab");
g.setEdge("legs", "stozek_owal_wenge");
g.setEdge("legs", "stozek_kwadrat_buk");
g.setEdge("legs", "stozek_kwadrat_dab");
g.setEdge("legs", "stozek_kwadrat_wenge");
g.setEdge("legs", "stozek_skos_buk");
g.setEdge("legs", "stozek_skos_dab");
g.setEdge("legs", "stozek_skos_wenge");
g.setEdge("legs", "stozek_ze_stopka_czern");
g.setEdge("legs", "stozek_ze_stopka_miedz");
g.setEdge("legs", "stozek_ze_stopka_srebro");
g.setEdge("legs", "trojkat_prosty_czern");
g.setEdge("legs", "trojkat_prosty_miedz");
g.setEdge("legs", "trojkat_prosty_srebro");
g.setEdge("legs", "trojkat_skosny_czern");
g.setEdge("legs", "trojkat_skosny_miedz");
g.setEdge("legs", "trojkat_skosny_srebro");
g.setEdge("legs", "walek_srebro");
g.setEdge("legs", "walek_miedz");
g.setEdge("legs", "walek_srebro");
g.setEdge("legs", "kielich_czern");
g.setEdge("legs", "kielich_miedz");
g.setEdge("legs", "kielich_srebro");
g.setEdge("legs", "naroznik_czern");
g.setEdge("legs", "naroznik_miedz");
g.setEdge("legs", "naroznik_srebro");
g.setEdge("legs", "ploza_dab");
g.setEdge("legs", "ploza_buk");
g.setEdge("legs", "ploza_wenge");


g.setEdge("stozek_owal_buk", "stozek_owal_buk_16");
g.setEdge("stozek_owal_wenge", "stozek_owal_wenge_16");
g.setEdge("stozek_owal_dab", "stozek_owal_dab_16");
g.setEdge("stozek_kwadrat_buk", "stozek_kwadrat_buk_16");
g.setEdge("stozek_kwadrat_wenge", "stozek_kwadrat_wenge_16");
g.setEdge("stozek_kwadrat_dab", "stozek_kwadrat_dab_16");
g.setEdge("stozek_skos_buk", "stozek_skos_buk_16");
g.setEdge("stozek_skos_dab", "stozek_skos_dab_16");
g.setEdge("stozek_skos_wenge", "stozek_skos_wenge_16");
g.setEdge("stozek_ze_stopka_czern", "stozek_ze_stopka_czern_16");
g.setEdge("stozek_ze_stopka_miedz", "stozek_ze_stopka_miedz_16");
g.setEdge("stozek_ze_stopka_srebro", "stozek_ze_stopka_srebro_16");
g.setEdge("trojkat_prosty_czern", "trojkat_prosty_czern_16");
g.setEdge("trojkat_prosty_miedz", "trojkat_prosty_miedz_16");
g.setEdge("trojkat_prosty_srebro", "trojkat_prosty_srebro_16");
g.setEdge("trojkat_skosny_czern", "trojkat_skosny_czern_16");
g.setEdge("trojkat_skosny_miedz", "trojkat_skosny_miedz_16");
g.setEdge("trojkat_skosny_srebro", "trojkat_skosny_srebro_16");
g.setEdge("walek_srebro", "walek_srebro_16");
g.setEdge("walek_miedz", "walek_miedz_16");
g.setEdge("walek_srebro", "walek_srebro_16");
g.setEdge("kielich_czern", "kielich_czern_16");
g.setEdge("kielich_miedz", "kielich_miedz_16");
g.setEdge("kielich_srebro", "kielich_srebro_16");
g.setEdge("naroznik_czern", "naroznik_czern_16");
g.setEdge("naroznik_miedz", "naroznik_miedz_16");
g.setEdge("naroznik_srebro", "naroznik_srebro_16");

g.setEdge("ploza_dab", "ploza_dab_140");
g.setEdge("ploza_dab", "ploza_dab_160");
g.setEdge("ploza_dab", "ploza_dab_180");
g.setEdge("ploza_dab", "ploza_dab_200");

g.setEdge("ploza_buk", "ploza_buk_140");
g.setEdge("ploza_buk", "ploza_buk_160");
g.setEdge("ploza_buk", "ploza_buk_180");
g.setEdge("ploza_buk", "ploza_buk_200");


g.setEdge("ploza_wenge", "ploza_wenge_140");
g.setEdge("ploza_wenge", "ploza_wenge_160");
g.setEdge("ploza_wenge", "ploza_wenge_180");
g.setEdge("ploza_wenge", "ploza_wenge_200");

//*************8

g.setEdge("step_typ_materaca", "materac_pokrowiec");
g.setEdge("step_typ_materaca", "materac_tapicerowany");

g.setEdge("materac_pokrowiec", "materac_pokrowiec_1");
g.setEdge("materac_tapicerowany", "materac_tapicerowany_1");


g.setEdge("step_4", "materac_tango");
g.setEdge("step_4", "materac_step");
g.setEdge("step_4", "materac_salsa");
g.setEdge("step_4", "materac_pasodoble");
g.setEdge("step_4", "materac_makarena");
g.setEdge("step_4", "materac_rockroll");
g.setEdge("step_4", "materac_melody");
g.setEdge("step_4", "materac_rumba");
g.setEdge("step_4", "materac_boogie");
g.setEdge("step_4", "materac_modern");
g.setEdge("step_4", "materac_conga");
g.setEdge("step_4", "materac_chacha");
g.setEdge("step_4", "materac_foxtrot");
g.setEdge("step_4", "materac_flamenco");

g.setEdge("step_tapicerowany", "materac_foxtrot_tapicerowany");
g.setEdge("step_tapicerowany", "materac_chacha_tapicerowany");
g.setEdge("step_tapicerowany", "materac_flamenco_tapicerowany");

g.setEdge("step_pokrowiec", "materac_tango");
g.setEdge("step_pokrowiec", "materac_step");
g.setEdge("step_pokrowiec", "materac_salsa");
g.setEdge("step_pokrowiec", "materac_pasodoble");
g.setEdge("step_pokrowiec", "materac_makarena");
g.setEdge("step_pokrowiec", "materac_rockroll");
g.setEdge("step_pokrowiec", "materac_melody");
g.setEdge("step_pokrowiec", "materac_rumba");
g.setEdge("step_pokrowiec", "materac_boogie");
g.setEdge("step_pokrowiec", "materac_modern");
g.setEdge("step_pokrowiec", "materac_conga");
g.setEdge("step_pokrowiec", "materac_foxtrot");
g.setEdge("step_pokrowiec", "materac_chacha");
g.setEdge("step_pokrowiec", "materac_flamenco");
g.setEdge("step_pokrowiec", "materac_fandango");
g.setEdge("step_pokrowiec", "materac_zorba");
g.setEdge("step_pokrowiec", "materac_breakdance");
g.setEdge("step_pokrowiec", "materac_funky");
g.setEdge("step_pokrowiec", "materac_dance");
g.setEdge("step_pokrowiec", "materac_lambada");
g.setEdge("step_pokrowiec", "materac_electro");

g.setEdge("materac_tango", "materac_tango_140_200");
g.setEdge("materac_tango", "materac_tango_160_200");
g.setEdge("materac_tango", "materac_tango_180_200");
g.setEdge("materac_tango", "materac_tango_200_200");

g.setEdge("materac_step", "materac_step_140_200");
g.setEdge("materac_step", "materac_step_160_200");
g.setEdge("materac_step", "materac_step_180_200");
g.setEdge("materac_step", "materac_step_200_200");

g.setEdge("materac_salsa", "materac_salsa_140_200");
g.setEdge("materac_salsa", "materac_salsa_160_200");
g.setEdge("materac_salsa", "materac_salsa_180_200");
g.setEdge("materac_salsa", "materac_salsa_200_200");

g.setEdge("materac_chacha", "materac_chacha_140_200");
g.setEdge("materac_chacha", "materac_chacha_160_200");
g.setEdge("materac_chacha", "materac_chacha_180_200");
g.setEdge("materac_chacha", "materac_chacha_200_200");

g.setEdge("materac_pasodoble", "materac_pasodoble_140_200");
g.setEdge("materac_pasodoble", "materac_pasodoble_160_200");
g.setEdge("materac_pasodoble", "materac_pasodoble_180_200");
g.setEdge("materac_pasodoble", "materac_pasodoble_200_200");

g.setEdge("materac_flamenco", "materac_flamenco_140_200");
g.setEdge("materac_flamenco", "materac_flamenco_160_200");
g.setEdge("materac_flamenco", "materac_flamenco_180_200");
g.setEdge("materac_flamenco", "materac_flamenco_200_200");

g.setEdge("materac_makarena", "materac_makarena_140_200");
g.setEdge("materac_makarena", "materac_makarena_160_200");
g.setEdge("materac_makarena", "materac_makarena_180_200");
g.setEdge("materac_makarena", "materac_makarena_200_200");

g.setEdge("materac_rockroll", "materac_rockroll_140_200");
g.setEdge("materac_rockroll", "materac_rockroll_160_200");
g.setEdge("materac_rockroll", "materac_rockroll_180_200");
g.setEdge("materac_rockroll", "materac_rockroll_200_200");

g.setEdge("materac_foxtrot", "materac_foxtrot_140_200");
g.setEdge("materac_foxtrot", "materac_foxtrot_160_200");
g.setEdge("materac_foxtrot", "materac_foxtrot_180_200");
g.setEdge("materac_foxtrot", "materac_foxtrot_200_200");

g.setEdge("materac_melody", "materac_melody_140_200");
g.setEdge("materac_melody", "materac_melody_160_200");
g.setEdge("materac_melody", "materac_melody_180_200");
g.setEdge("materac_melody", "materac_melody_200_200");

g.setEdge("materac_rumba", "materac_rumba_140_200");
g.setEdge("materac_rumba", "materac_rumba_160_200");
g.setEdge("materac_rumba", "materac_rumba_180_200");
g.setEdge("materac_rumba", "materac_rumba_200_200");

g.setEdge("materac_boogie", "materac_boogie_140_200");
g.setEdge("materac_boogie", "materac_boogie_160_200");
g.setEdge("materac_boogie", "materac_boogie_180_200");
g.setEdge("materac_boogie", "materac_boogie_200_200");

g.setEdge("materac_modern", "materac_modern_140_200");
g.setEdge("materac_modern", "materac_modern_160_200");
g.setEdge("materac_modern", "materac_modern_180_200");
g.setEdge("materac_modern", "materac_modern_200_200");

g.setEdge("materac_conga", "materac_conga_140_200");
g.setEdge("materac_conga", "materac_conga_160_200");
g.setEdge("materac_conga", "materac_conga_180_200");
g.setEdge("materac_conga", "materac_conga_200_200");

g.setEdge("materac_fandango", "materac_fandango_140_200");
g.setEdge("materac_fandango", "materac_fandango_160_200");
g.setEdge("materac_fandango", "materac_fandango_180_200");
g.setEdge("materac_fandango", "materac_fandango_200_200");

g.setEdge("materac_zorba", "materac_zorba_140_200");
g.setEdge("materac_zorba", "materac_zorba_160_200");
g.setEdge("materac_zorba", "materac_zorba_180_200");
g.setEdge("materac_zorba", "materac_zorba_200_200");

g.setEdge("materac_breakdance", "materac_breakdance_140_200");
g.setEdge("materac_breakdance", "materac_breakdance_160_200");
g.setEdge("materac_breakdance", "materac_breakdance_180_200");
g.setEdge("materac_breakdance", "materac_breakdance_200_200");

g.setEdge("materac_funky", "materac_funky_140_200");
g.setEdge("materac_funky", "materac_funky_160_200");
g.setEdge("materac_funky", "materac_funky_180_200");
g.setEdge("materac_funky", "materac_funky_200_200");

g.setEdge("materac_dance", "materac_dance_140_200");
g.setEdge("materac_dance", "materac_dance_160_200");
g.setEdge("materac_dance", "materac_dance_180_200");
g.setEdge("materac_dance", "materac_dance_200_200");

g.setEdge("materac_lambada", "materac_lambada_140_200");
g.setEdge("materac_lambada", "materac_lambada_160_200");
g.setEdge("materac_lambada", "materac_lambada_180_200");
g.setEdge("materac_lambada", "materac_lambada_200_200");

g.setEdge("materac_electro", "materac_electro_140_200");
g.setEdge("materac_electro", "materac_electro_160_200");
g.setEdge("materac_electro", "materac_electro_180_200");
g.setEdge("materac_electro", "materac_electro_200_200");

g.setEdge("materac_foxtrot_tapicerowany", "materac_foxtrot_tap_140_200");
g.setEdge("materac_foxtrot_tapicerowany", "materac_foxtrot_tap_160_200");
g.setEdge("materac_foxtrot_tapicerowany", "materac_foxtrot_tap_180_200");
g.setEdge("materac_foxtrot_tapicerowany", "materac_foxtrot_tap_200_200");


g.setEdge("materac_chacha_tapicerowany", "materac_chacha_tap_140_200");
g.setEdge("materac_chacha_tapicerowany", "materac_chacha_tap_160_200");
g.setEdge("materac_chacha_tapicerowany", "materac_chacha_tap_180_200");
g.setEdge("materac_chacha_tapicerowany", "materac_chacha_tap_200_200");

g.setEdge("materac_flamenco_tapicerowany", "materac_flamenco_tap_140_200");
g.setEdge("materac_flamenco_tapicerowany", "materac_flamenco_tap_160_200");
g.setEdge("materac_flamenco_tapicerowany", "materac_flamenco_tap_180_200");
g.setEdge("materac_flamenco_tapicerowany", "materac_flamenco_tap_200_200");

//**************************************************
g.setEdge("bb_step_typ_materaca", "bb_materac_pokrowiec");
g.setEdge("bb_step_typ_materaca", "bb_materac_tapicerowany");

g.setEdge("bb_materac_pokrowiec", "bb_materac_pokrowiec_1");
g.setEdge("bb_materac_tapicerowany", "bb_materac_tapicerowany_1");

g.setEdge("bb_step_tapicerowany", "bb_materac_foxtrot_tapicerowany");
g.setEdge("bb_step_tapicerowany", "bb_materac_chacha_tapicerowany");
g.setEdge("bb_step_tapicerowany", "bb_materac_flamenco_tapicerowany");

g.setEdge("bb_step_pokrowiec", "bb_materac_tango");
g.setEdge("bb_step_pokrowiec", "bb_materac_step");
g.setEdge("bb_step_pokrowiec", "bb_materac_salsa");
g.setEdge("bb_step_pokrowiec", "bb_materac_pasodoble");
g.setEdge("bb_step_pokrowiec", "bb_materac_makarena");
g.setEdge("bb_step_pokrowiec", "bb_materac_rockroll");
g.setEdge("bb_step_pokrowiec", "bb_materac_melody");
g.setEdge("bb_step_pokrowiec", "bb_materac_rumba");
g.setEdge("bb_step_pokrowiec", "bb_materac_boogie");
g.setEdge("bb_step_pokrowiec", "bb_materac_modern");
g.setEdge("bb_step_pokrowiec", "bb_materac_conga");
g.setEdge("bb_step_pokrowiec", "bb_materac_foxtrot");
g.setEdge("bb_step_pokrowiec", "bb_materac_chacha");
g.setEdge("bb_step_pokrowiec", "bb_materac_flamenco");
g.setEdge("bb_step_pokrowiec", "bb_materac_fandango");
g.setEdge("bb_step_pokrowiec", "bb_materac_zorba");
g.setEdge("bb_step_pokrowiec", "bb_materac_breakdance");
g.setEdge("bb_step_pokrowiec", "bb_materac_funky");
g.setEdge("bb_step_pokrowiec", "bb_materac_dance");
g.setEdge("bb_step_pokrowiec", "bb_materac_lambada");
g.setEdge("bb_step_pokrowiec", "bb_materac_electro");

g.setEdge("bb_materac_tango", "bb_materac_tango_140_200");
g.setEdge("bb_materac_tango", "bb_materac_tango_160_200");
g.setEdge("bb_materac_tango", "bb_materac_tango_180_200");
g.setEdge("bb_materac_tango", "bb_materac_tango_200_200");

g.setEdge("bb_materac_step", "bb_materac_step_140_200");
g.setEdge("bb_materac_step", "bb_materac_step_160_200");
g.setEdge("bb_materac_step", "bb_materac_step_180_200");
g.setEdge("bb_materac_step", "bb_materac_step_200_200");

g.setEdge("bb_materac_salsa", "bb_materac_salsa_140_200");
g.setEdge("bb_materac_salsa", "bb_materac_salsa_160_200");
g.setEdge("bb_materac_salsa", "bb_materac_salsa_180_200");
g.setEdge("bb_materac_salsa", "bb_materac_salsa_200_200");

g.setEdge("bb_materac_chacha", "bb_materac_chacha_140_200");
g.setEdge("bb_materac_chacha", "bb_materac_chacha_160_200");
g.setEdge("bb_materac_chacha", "bb_materac_chacha_180_200");
g.setEdge("bb_materac_chacha", "bb_materac_chacha_200_200");

g.setEdge("bb_materac_pasodoble", "bb_materac_pasodoble_140_200");
g.setEdge("bb_materac_pasodoble", "bb_materac_pasodoble_160_200");
g.setEdge("bb_materac_pasodoble", "bb_materac_pasodoble_180_200");
g.setEdge("bb_materac_pasodoble", "bb_materac_pasodoble_200_200");

g.setEdge("bb_materac_flamenco", "bb_materac_flamenco_140_200");
g.setEdge("bb_materac_flamenco", "bb_materac_flamenco_160_200");
g.setEdge("bb_materac_flamenco", "bb_materac_flamenco_180_200");
g.setEdge("bb_materac_flamenco", "bb_materac_flamenco_200_200");

g.setEdge("bb_materac_makarena", "bb_materac_makarena_140_200");
g.setEdge("bb_materac_makarena", "bb_materac_makarena_160_200");
g.setEdge("bb_materac_makarena", "bb_materac_makarena_180_200");
g.setEdge("bb_materac_makarena", "bb_materac_makarena_200_200");

g.setEdge("bb_materac_rockroll", "bb_materac_rockroll_140_200");
g.setEdge("bb_materac_rockroll", "bb_materac_rockroll_160_200");
g.setEdge("bb_materac_rockroll", "bb_materac_rockroll_180_200");
g.setEdge("bb_materac_rockroll", "bb_materac_rockroll_200_200");

g.setEdge("bb_materac_foxtrot", "bb_materac_foxtrot_140_200");
g.setEdge("bb_materac_foxtrot", "bb_materac_foxtrot_160_200");
g.setEdge("bb_materac_foxtrot", "bb_materac_foxtrot_180_200");
g.setEdge("bb_materac_foxtrot", "bb_materac_foxtrot_200_200");

g.setEdge("bb_materac_melody", "bb_materac_melody_140_200");
g.setEdge("bb_materac_melody", "bb_materac_melody_160_200");
g.setEdge("bb_materac_melody", "bb_materac_melody_180_200");
g.setEdge("bb_materac_melody", "bb_materac_melody_200_200");

g.setEdge("bb_materac_rumba", "bb_materac_rumba_140_200");
g.setEdge("bb_materac_rumba", "bb_materac_rumba_160_200");
g.setEdge("bb_materac_rumba", "bb_materac_rumba_180_200");
g.setEdge("bb_materac_rumba", "bb_materac_rumba_200_200");

g.setEdge("bb_materac_boogie", "bb_materac_boogie_140_200");
g.setEdge("bb_materac_boogie", "bb_materac_boogie_160_200");
g.setEdge("bb_materac_boogie", "bb_materac_boogie_180_200");
g.setEdge("bb_materac_boogie", "bb_materac_boogie_200_200");

g.setEdge("bb_materac_modern", "bb_materac_modern_140_200");
g.setEdge("bb_materac_modern", "bb_materac_modern_160_200");
g.setEdge("bb_materac_modern", "bb_materac_modern_180_200");
g.setEdge("bb_materac_modern", "bb_materac_modern_200_200");

g.setEdge("bb_materac_conga", "bb_materac_conga_140_200");
g.setEdge("bb_materac_conga", "bb_materac_conga_160_200");
g.setEdge("bb_materac_conga", "bb_materac_conga_180_200");
g.setEdge("bb_materac_conga", "bb_materac_conga_200_200");

g.setEdge("bb_materac_fandango", "bb_materac_fandango_140_200");
g.setEdge("bb_materac_fandango", "bb_materac_fandango_160_200");
g.setEdge("bb_materac_fandango", "bb_materac_fandango_180_200");
g.setEdge("bb_materac_fandango", "bb_materac_fandango_200_200");

g.setEdge("bb_materac_zorba", "bb_materac_zorba_140_200");
g.setEdge("bb_materac_zorba", "bb_materac_zorba_160_200");
g.setEdge("bb_materac_zorba", "bb_materac_zorba_180_200");
g.setEdge("bb_materac_zorba", "bb_materac_zorba_200_200");

g.setEdge("bb_materac_breakdance", "bb_materac_breakdance_140_200");
g.setEdge("bb_materac_breakdance", "bb_materac_breakdance_160_200");
g.setEdge("bb_materac_breakdance", "bb_materac_breakdance_180_200");
g.setEdge("bb_materac_breakdance", "bb_materac_breakdance_200_200");

g.setEdge("bb_materac_funky", "bb_materac_funky_140_200");
g.setEdge("bb_materac_funky", "bb_materac_funky_160_200");
g.setEdge("bb_materac_funky", "bb_materac_funky_180_200");
g.setEdge("bb_materac_funky", "bb_materac_funky_200_200");

g.setEdge("bb_materac_dance", "bb_materac_dance_140_200");
g.setEdge("bb_materac_dance", "bb_materac_dance_160_200");
g.setEdge("bb_materac_dance", "bb_materac_dance_180_200");
g.setEdge("bb_materac_dance", "bb_materac_dance_200_200");

g.setEdge("bb_materac_lambada", "bb_materac_lambada_140_200");
g.setEdge("bb_materac_lambada", "bb_materac_lambada_160_200");
g.setEdge("bb_materac_lambada", "bb_materac_lambada_180_200");
g.setEdge("bb_materac_lambada", "bb_materac_lambada_200_200");

g.setEdge("bb_materac_electro", "bb_materac_electro_140_200");
g.setEdge("bb_materac_electro", "bb_materac_electro_160_200");
g.setEdge("bb_materac_electro", "bb_materac_electro_180_200");
g.setEdge("bb_materac_electro", "bb_materac_electro_200_200");

g.setEdge("bb_materac_foxtrot_tapicerowany", "bb_materac_foxtrot_tap_140_200");
g.setEdge("bb_materac_foxtrot_tapicerowany", "bb_materac_foxtrot_tap_160_200");
g.setEdge("bb_materac_foxtrot_tapicerowany", "bb_materac_foxtrot_tap_180_200");
g.setEdge("bb_materac_foxtrot_tapicerowany", "bb_materac_foxtrot_tap_200_200");


g.setEdge("bb_materac_chacha_tapicerowany", "bb_materac_chacha_tap_140_200");
g.setEdge("bb_materac_chacha_tapicerowany", "bb_materac_chacha_tap_160_200");
g.setEdge("bb_materac_chacha_tapicerowany", "bb_materac_chacha_tap_180_200");
g.setEdge("bb_materac_chacha_tapicerowany", "bb_materac_chacha_tap_200_200");

g.setEdge("bb_materac_flamenco_tapicerowany", "bb_materac_flamenco_tap_140_200");
g.setEdge("bb_materac_flamenco_tapicerowany", "bb_materac_flamenco_tap_160_200");
g.setEdge("bb_materac_flamenco_tapicerowany", "bb_materac_flamenco_tap_180_200");
g.setEdge("bb_materac_flamenco_tapicerowany", "bb_materac_flamenco_tap_200_200");

//***************************************************
g.setEdge("bp_step_typ_materaca", "bp_materac_pokrowiec");
g.setEdge("bp_step_typ_materaca", "bp_materac_tapicerowany");

g.setEdge("bp_materac_pokrowiec", "bp_materac_pokrowiec_1");
g.setEdge("bp_materac_tapicerowany", "bp_materac_tapicerowany_1");

g.setEdge("bp_step_tapicerowany", "bp_materac_foxtrot_tapicerowany");
g.setEdge("bp_step_tapicerowany", "bp_materac_chacha_tapicerowany");
g.setEdge("bp_step_tapicerowany", "bp_materac_flamenco_tapicerowany");

g.setEdge("bp_step_pokrowiec", "bp_materac_tango");
g.setEdge("bp_step_pokrowiec", "bp_materac_step");
g.setEdge("bp_step_pokrowiec", "bp_materac_salsa");
g.setEdge("bp_step_pokrowiec", "bp_materac_pasodoble");
g.setEdge("bp_step_pokrowiec", "bp_materac_makarena");
g.setEdge("bp_step_pokrowiec", "bp_materac_rockroll");
g.setEdge("bp_step_pokrowiec", "bp_materac_melody");
g.setEdge("bp_step_pokrowiec", "bp_materac_rumba");
g.setEdge("bp_step_pokrowiec", "bp_materac_boogie");
g.setEdge("bp_step_pokrowiec", "bp_materac_modern");
g.setEdge("bp_step_pokrowiec", "bp_materac_conga");
g.setEdge("bp_step_pokrowiec", "bp_materac_foxtrot");
g.setEdge("bp_step_pokrowiec", "bp_materac_chacha");
g.setEdge("bp_step_pokrowiec", "bp_materac_flamenco");
g.setEdge("bp_step_pokrowiec", "bp_materac_fandango");
g.setEdge("bp_step_pokrowiec", "bp_materac_zorba");
g.setEdge("bp_step_pokrowiec", "bp_materac_breakdance");
g.setEdge("bp_step_pokrowiec", "bp_materac_funky");
g.setEdge("bp_step_pokrowiec", "bp_materac_dance");
g.setEdge("bp_step_pokrowiec", "bp_materac_lambada");
g.setEdge("bp_step_pokrowiec", "bp_materac_electro");

g.setEdge("bp_materac_tango", "bp_materac_tango_140_200");
g.setEdge("bp_materac_tango", "bp_materac_tango_160_200");
g.setEdge("bp_materac_tango", "bp_materac_tango_180_200");
g.setEdge("bp_materac_tango", "bp_materac_tango_200_200");

g.setEdge("bp_materac_step", "bp_materac_step_140_200");
g.setEdge("bp_materac_step", "bp_materac_step_160_200");
g.setEdge("bp_materac_step", "bp_materac_step_180_200");
g.setEdge("bp_materac_step", "bp_materac_step_200_200");

g.setEdge("bp_materac_salsa", "bp_materac_salsa_140_200");
g.setEdge("bp_materac_salsa", "bp_materac_salsa_160_200");
g.setEdge("bp_materac_salsa", "bp_materac_salsa_180_200");
g.setEdge("bp_materac_salsa", "bp_materac_salsa_200_200");

g.setEdge("bp_materac_chacha", "bp_materac_chacha_140_200");
g.setEdge("bp_materac_chacha", "bp_materac_chacha_160_200");
g.setEdge("bp_materac_chacha", "bp_materac_chacha_180_200");
g.setEdge("bp_materac_chacha", "bp_materac_chacha_200_200");

g.setEdge("bp_materac_pasodoble", "bp_materac_pasodoble_140_200");
g.setEdge("bp_materac_pasodoble", "bp_materac_pasodoble_160_200");
g.setEdge("bp_materac_pasodoble", "bp_materac_pasodoble_180_200");
g.setEdge("bp_materac_pasodoble", "bp_materac_pasodoble_200_200");

g.setEdge("bp_materac_flamenco", "bp_materac_flamenco_140_200");
g.setEdge("bp_materac_flamenco", "bp_materac_flamenco_160_200");
g.setEdge("bp_materac_flamenco", "bp_materac_flamenco_180_200");
g.setEdge("bp_materac_flamenco", "bp_materac_flamenco_200_200");

g.setEdge("bp_materac_makarena", "bp_materac_makarena_140_200");
g.setEdge("bp_materac_makarena", "bp_materac_makarena_160_200");
g.setEdge("bp_materac_makarena", "bp_materac_makarena_180_200");
g.setEdge("bp_materac_makarena", "bp_materac_makarena_200_200");

g.setEdge("bp_materac_rockroll", "bp_materac_rockroll_140_200");
g.setEdge("bp_materac_rockroll", "bp_materac_rockroll_160_200");
g.setEdge("bp_materac_rockroll", "bp_materac_rockroll_180_200");
g.setEdge("bp_materac_rockroll", "bp_materac_rockroll_200_200");

g.setEdge("bp_materac_foxtrot", "bp_materac_foxtrot_140_200");
g.setEdge("bp_materac_foxtrot", "bp_materac_foxtrot_160_200");
g.setEdge("bp_materac_foxtrot", "bp_materac_foxtrot_180_200");
g.setEdge("bp_materac_foxtrot", "bp_materac_foxtrot_200_200");

g.setEdge("bp_materac_melody", "bp_materac_melody_140_200");
g.setEdge("bp_materac_melody", "bp_materac_melody_160_200");
g.setEdge("bp_materac_melody", "bp_materac_melody_180_200");
g.setEdge("bp_materac_melody", "bp_materac_melody_200_200");

g.setEdge("bp_materac_rumba", "bp_materac_rumba_140_200");
g.setEdge("bp_materac_rumba", "bp_materac_rumba_160_200");
g.setEdge("bp_materac_rumba", "bp_materac_rumba_180_200");
g.setEdge("bp_materac_rumba", "bp_materac_rumba_200_200");

g.setEdge("bp_materac_boogie", "bp_materac_boogie_140_200");
g.setEdge("bp_materac_boogie", "bp_materac_boogie_160_200");
g.setEdge("bp_materac_boogie", "bp_materac_boogie_180_200");
g.setEdge("bp_materac_boogie", "bp_materac_boogie_200_200");

g.setEdge("bp_materac_modern", "bp_materac_modern_140_200");
g.setEdge("bp_materac_modern", "bp_materac_modern_160_200");
g.setEdge("bp_materac_modern", "bp_materac_modern_180_200");
g.setEdge("bp_materac_modern", "bp_materac_modern_200_200");

g.setEdge("bp_materac_conga", "bp_materac_conga_140_200");
g.setEdge("bp_materac_conga", "bp_materac_conga_160_200");
g.setEdge("bp_materac_conga", "bp_materac_conga_180_200");
g.setEdge("bp_materac_conga", "bp_materac_conga_200_200");

g.setEdge("bp_materac_fandango", "bp_materac_fandango_140_200");
g.setEdge("bp_materac_fandango", "bp_materac_fandango_160_200");
g.setEdge("bp_materac_fandango", "bp_materac_fandango_180_200");
g.setEdge("bp_materac_fandango", "bp_materac_fandango_200_200");

g.setEdge("bp_materac_zorba", "bp_materac_zorba_140_200");
g.setEdge("bp_materac_zorba", "bp_materac_zorba_160_200");
g.setEdge("bp_materac_zorba", "bp_materac_zorba_180_200");
g.setEdge("bp_materac_zorba", "bp_materac_zorba_200_200");

g.setEdge("bp_materac_breakdance", "bp_materac_breakdance_140_200");
g.setEdge("bp_materac_breakdance", "bp_materac_breakdance_160_200");
g.setEdge("bp_materac_breakdance", "bp_materac_breakdance_180_200");
g.setEdge("bp_materac_breakdance", "bp_materac_breakdance_200_200");

g.setEdge("bp_materac_funky", "bp_materac_funky_140_200");
g.setEdge("bp_materac_funky", "bp_materac_funky_160_200");
g.setEdge("bp_materac_funky", "bp_materac_funky_180_200");
g.setEdge("bp_materac_funky", "bp_materac_funky_200_200");

g.setEdge("bp_materac_dance", "bp_materac_dance_140_200");
g.setEdge("bp_materac_dance", "bp_materac_dance_160_200");
g.setEdge("bp_materac_dance", "bp_materac_dance_180_200");
g.setEdge("bp_materac_dance", "bp_materac_dance_200_200");

g.setEdge("bp_materac_lambada", "bp_materac_lambada_140_200");
g.setEdge("bp_materac_lambada", "bp_materac_lambada_160_200");
g.setEdge("bp_materac_lambada", "bp_materac_lambada_180_200");
g.setEdge("bp_materac_lambada", "bp_materac_lambada_200_200");

g.setEdge("bp_materac_electro", "bp_materac_electro_140_200");
g.setEdge("bp_materac_electro", "bp_materac_electro_160_200");
g.setEdge("bp_materac_electro", "bp_materac_electro_180_200");
g.setEdge("bp_materac_electro", "bp_materac_electro_200_200");

g.setEdge("bp_materac_foxtrot_tapicerowany", "bp_materac_foxtrot_tap_140_200");
g.setEdge("bp_materac_foxtrot_tapicerowany", "bp_materac_foxtrot_tap_160_200");
g.setEdge("bp_materac_foxtrot_tapicerowany", "bp_materac_foxtrot_tap_180_200");
g.setEdge("bp_materac_foxtrot_tapicerowany", "bp_materac_foxtrot_tap_200_200");


g.setEdge("bp_materac_chacha_tapicerowany", "bp_materac_chacha_tap_140_200");
g.setEdge("bp_materac_chacha_tapicerowany", "bp_materac_chacha_tap_160_200");
g.setEdge("bp_materac_chacha_tapicerowany", "bp_materac_chacha_tap_180_200");
g.setEdge("bp_materac_chacha_tapicerowany", "bp_materac_chacha_tap_200_200");

g.setEdge("bp_materac_flamenco_tapicerowany", "bp_materac_flamenco_tap_140_200");
g.setEdge("bp_materac_flamenco_tapicerowany", "bp_materac_flamenco_tap_160_200");
g.setEdge("bp_materac_flamenco_tapicerowany", "bp_materac_flamenco_tap_180_200");
g.setEdge("bp_materac_flamenco_tapicerowany", "bp_materac_flamenco_tap_200_200");

//******************************************************************************

g.setEdge("t_materac", "t_materac_tango");
g.setEdge("t_materac", "t_materac_step");
g.setEdge("t_materac", "t_materac_salsa");
g.setEdge("t_materac", "t_materac_pasodoble");
g.setEdge("t_materac", "t_materac_makarena");
g.setEdge("t_materac", "t_materac_rockroll");
g.setEdge("t_materac", "t_materac_melody");
g.setEdge("t_materac", "t_materac_rumba");
g.setEdge("t_materac", "t_materac_boogie");
g.setEdge("t_materac", "t_materac_modern");
g.setEdge("t_materac", "t_materac_conga");
g.setEdge("t_materac", "t_materac_foxtrot");
g.setEdge("t_materac", "t_materac_chacha");
g.setEdge("t_materac", "t_materac_flamenco");
g.setEdge("t_materac", "t_materac_fandango");
g.setEdge("t_materac", "t_materac_zorba");
g.setEdge("t_materac", "t_materac_breakdance");
g.setEdge("t_materac", "t_materac_funky");
g.setEdge("t_materac", "t_materac_dance");
g.setEdge("t_materac", "t_materac_lambada");
g.setEdge("t_materac", "t_materac_electro");

g.setEdge("t_materac_tango", "t_materac_tango_90_200");
g.setEdge("t_materac_tango", "t_materac_tango_140_200");
g.setEdge("t_materac_tango", "t_materac_tango_160_200");
g.setEdge("t_materac_tango", "t_materac_tango_180_200");
g.setEdge("t_materac_tango", "t_materac_tango_200_200");

g.setEdge("t_materac_step", "t_materac_step_90_200");
g.setEdge("t_materac_step", "t_materac_step_140_200");
g.setEdge("t_materac_step", "t_materac_step_160_200");
g.setEdge("t_materac_step", "t_materac_step_180_200");
g.setEdge("t_materac_step", "t_materac_step_200_200");

g.setEdge("t_materac_salsa", "t_materac_salsa_90_200");
g.setEdge("t_materac_salsa", "t_materac_salsa_140_200");
g.setEdge("t_materac_salsa", "t_materac_salsa_160_200");
g.setEdge("t_materac_salsa", "t_materac_salsa_180_200");
g.setEdge("t_materac_salsa", "t_materac_salsa_200_200");

g.setEdge("t_materac_chacha", "t_materac_chacha_90_200");
g.setEdge("t_materac_chacha", "t_materac_chacha_140_200");
g.setEdge("t_materac_chacha", "t_materac_chacha_160_200");
g.setEdge("t_materac_chacha", "t_materac_chacha_180_200");
g.setEdge("t_materac_chacha", "t_materac_chacha_200_200");

g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_90_200");
g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_140_200");
g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_160_200");
g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_180_200");
g.setEdge("t_materac_pasodoble", "t_materac_pasodoble_200_200");

g.setEdge("t_materac_flamenco", "t_materac_flamenco_90_200");
g.setEdge("t_materac_flamenco", "t_materac_flamenco_140_200");
g.setEdge("t_materac_flamenco", "t_materac_flamenco_160_200");
g.setEdge("t_materac_flamenco", "t_materac_flamenco_180_200");
g.setEdge("t_materac_flamenco", "t_materac_flamenco_200_200");

g.setEdge("t_materac_makarena", "t_materac_makarena_90_200");
g.setEdge("t_materac_makarena", "t_materac_makarena_140_200");
g.setEdge("t_materac_makarena", "t_materac_makarena_160_200");
g.setEdge("t_materac_makarena", "t_materac_makarena_180_200");
g.setEdge("t_materac_makarena", "t_materac_makarena_200_200");

g.setEdge("t_materac_rockroll", "t_materac_rockroll_90_200");
g.setEdge("t_materac_rockroll", "t_materac_rockroll_140_200");
g.setEdge("t_materac_rockroll", "t_materac_rockroll_160_200");
g.setEdge("t_materac_rockroll", "t_materac_rockroll_180_200");
g.setEdge("t_materac_rockroll", "t_materac_rockroll_200_200");

g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_90_200");
g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_140_200");
g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_160_200");
g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_180_200");
g.setEdge("t_materac_foxtrot", "t_materac_foxtrot_200_200");

g.setEdge("t_materac_melody", "t_materac_melody_90_200");
g.setEdge("t_materac_melody", "t_materac_melody_140_200");
g.setEdge("t_materac_melody", "t_materac_melody_160_200");
g.setEdge("t_materac_melody", "t_materac_melody_180_200");
g.setEdge("t_materac_melody", "t_materac_melody_200_200");

g.setEdge("t_materac_rumba", "t_materac_rumba_90_200");
g.setEdge("t_materac_rumba", "t_materac_rumba_140_200");
g.setEdge("t_materac_rumba", "t_materac_rumba_160_200");
g.setEdge("t_materac_rumba", "t_materac_rumba_180_200");
g.setEdge("t_materac_rumba", "t_materac_rumba_200_200");

g.setEdge("t_materac_boogie", "t_materac_boogie_90_200");
g.setEdge("t_materac_boogie", "t_materac_boogie_140_200");
g.setEdge("t_materac_boogie", "t_materac_boogie_160_200");
g.setEdge("t_materac_boogie", "t_materac_boogie_180_200");
g.setEdge("t_materac_boogie", "t_materac_boogie_200_200");

g.setEdge("t_materac_modern", "t_materac_modern_90_200");
g.setEdge("t_materac_modern", "t_materac_modern_140_200");
g.setEdge("t_materac_modern", "t_materac_modern_160_200");
g.setEdge("t_materac_modern", "t_materac_modern_180_200");
g.setEdge("t_materac_modern", "t_materac_modern_200_200");

g.setEdge("t_materac_conga", "t_materac_conga_90_200");
g.setEdge("t_materac_conga", "t_materac_conga_140_200");
g.setEdge("t_materac_conga", "t_materac_conga_160_200");
g.setEdge("t_materac_conga", "t_materac_conga_180_200");
g.setEdge("t_materac_conga", "t_materac_conga_200_200");

g.setEdge("t_materac_fandango", "t_materac_fandango_90_200");
g.setEdge("t_materac_fandango", "t_materac_fandango_140_200");
g.setEdge("t_materac_fandango", "t_materac_fandango_160_200");
g.setEdge("t_materac_fandango", "t_materac_fandango_180_200");
g.setEdge("t_materac_fandango", "t_materac_fandango_200_200");

g.setEdge("t_materac_zorba", "t_materac_zorba_90_200");
g.setEdge("t_materac_zorba", "t_materac_zorba_140_200");
g.setEdge("t_materac_zorba", "t_materac_zorba_160_200");
g.setEdge("t_materac_zorba", "t_materac_zorba_180_200");
g.setEdge("t_materac_zorba", "t_materac_zorba_200_200");

g.setEdge("t_materac_breakdance", "t_materac_breakdance_90_200");
g.setEdge("t_materac_breakdance", "t_materac_breakdance_140_200");
g.setEdge("t_materac_breakdance", "t_materac_breakdance_160_200");
g.setEdge("t_materac_breakdance", "t_materac_breakdance_180_200");
g.setEdge("t_materac_breakdance", "t_materac_breakdance_200_200");

g.setEdge("t_materac_funky", "t_materac_funky_90_200");
g.setEdge("t_materac_funky", "t_materac_funky_140_200");
g.setEdge("t_materac_funky", "t_materac_funky_160_200");
g.setEdge("t_materac_funky", "t_materac_funky_180_200");
g.setEdge("t_materac_funky", "t_materac_funky_200_200");

g.setEdge("t_materac_dance", "t_materac_dance_90_200");
g.setEdge("t_materac_dance", "t_materac_dance_140_200");
g.setEdge("t_materac_dance", "t_materac_dance_160_200");
g.setEdge("t_materac_dance", "t_materac_dance_180_200");
g.setEdge("t_materac_dance", "t_materac_dance_200_200");

g.setEdge("t_materac_lambada", "t_materac_dance_90_200");
g.setEdge("t_materac_lambada", "t_materac_dance_140_200");
g.setEdge("t_materac_lambada", "t_materac_dance_160_200");
g.setEdge("t_materac_lambada", "t_materac_dance_180_200");
g.setEdge("t_materac_lambada", "t_materac_dance_200_200");

g.setEdge("t_materac_electro", "t_materac_electro_90_200");
g.setEdge("t_materac_electro", "t_materac_electro_140_200");
g.setEdge("t_materac_electro", "t_materac_electro_160_200");
g.setEdge("t_materac_electro", "t_materac_electro_180_200");
g.setEdge("t_materac_electro", "t_materac_electro_200_200");

//*******************************************************

g.setEdge("step_5", "materac_bass");
g.setEdge("step_5", "materac_alt");
g.setEdge("step_5", "materac_tenor");

g.setEdge("materac_alt", "materac_alt_140_200");
g.setEdge("materac_alt", "materac_alt_160_200");
g.setEdge("materac_alt", "materac_alt_180_200");
g.setEdge("materac_alt", "materac_alt_200_200");

g.setEdge("materac_tenor", "materac_tenor_140_200");
g.setEdge("materac_tenor", "materac_tenor_160_200");
g.setEdge("materac_tenor", "materac_tenor_180_200");
g.setEdge("materac_tenor", "materac_tenor_200_200");

g.setEdge("materac_bass", "materac_bass_140_200");
g.setEdge("materac_bass", "materac_bass_160_200");
g.setEdge("materac_bass", "materac_bass_180_200");
g.setEdge("materac_bass", "materac_bass_200_200");


//**********************************

g.setEdge("bb_nawierzchniowy", "bb_materac_bass");
g.setEdge("bb_nawierzchniowy", "bb_materac_alt");
g.setEdge("bb_nawierzchniowy", "bb_materac_tenor");

g.setEdge("bb_materac_alt", "bb_materac_alt_140_200");
g.setEdge("bb_materac_alt", "bb_materac_alt_160_200");
g.setEdge("bb_materac_alt", "bb_materac_alt_180_200");
g.setEdge("bb_materac_alt", "bb_materac_alt_200_200");

g.setEdge("bb_materac_tenor", "bb_materac_tenor_140_200");
g.setEdge("bb_materac_tenor", "bb_materac_tenor_160_200");
g.setEdge("bb_materac_tenor", "bb_materac_tenor_180_200");
g.setEdge("bb_materac_tenor", "bb_materac_tenor_200_200");

g.setEdge("bb_materac_bass", "bb_materac_bass_140_200");
g.setEdge("bb_materac_bass", "bb_materac_bass_160_200");
g.setEdge("bb_materac_bass", "bb_materac_bass_180_200");
g.setEdge("bb_materac_bass", "bb_materac_bass_200_200");

//*****************************************

g.setEdge("bp_nawierzchniowy", "bp_materac_bass");
g.setEdge("bp_nawierzchniowy", "bp_materac_alt");
g.setEdge("bp_nawierzchniowy", "bp_materac_tenor");

g.setEdge("bp_materac_alt", "bp_materac_alt_140_200");
g.setEdge("bp_materac_alt", "bp_materac_alt_160_200");
g.setEdge("bp_materac_alt", "bp_materac_alt_180_200");
g.setEdge("bp_materac_alt", "bp_materac_alt_200_200");

g.setEdge("bp_materac_tenor", "bp_materac_tenor_140_200");
g.setEdge("bp_materac_tenor", "bp_materac_tenor_160_200");
g.setEdge("bp_materac_tenor", "bp_materac_tenor_180_200");
g.setEdge("bp_materac_tenor", "bp_materac_tenor_200_200");

g.setEdge("bp_materac_bass", "bp_materac_bass_140_200");
g.setEdge("bp_materac_bass", "bp_materac_bass_160_200");
g.setEdge("bp_materac_bass", "bp_materac_bass_180_200");
g.setEdge("bp_materac_bass", "bp_materac_bass_200_200");

//*****************************************

g.setEdge("covers_italiano_tencel_new", "cover_italiano");
g.setEdge("covers_italiano_tencel_new", "cover_tencel_new");
g.setEdge("covers_velvet_tencel", "cover_velvet");
g.setEdge("covers_velvet_tencel", "cover_tencel");
g.setEdge("covers_velvet_new_tencel_new", "cover_velvet_new");
g.setEdge("covers_velvet_new_tencel_new", "cover_tencel_new");
g.setEdge("covers_tencel", "cover_tencel");
g.setEdge("covers_tencel_new", "cover_tencel_new");

g.setEdge("covers_velvet", "cover_velvet");

g.setEdge("covers_cashmere", "cover_cashmere");

g.setEdge("covers_elips_medicott", "cover_medicott");
g.setEdge("covers_elips_medicott", "cover_elips_1");

g.setEdge("covers_silver", "cover_silver");
g.setEdge("covers_medicover", "cover_medicover");
g.setEdge("covers_young", "cover_young");
g.setEdge("covers_italiano", "cover_italiano");
g.setEdge("covers_probiotex", "cover_probiotex");
g.setEdge("covers_italiano_hybrid", "cover_italiano_1");
g.setEdge("covers_italiano_hybrid", "cover_hybrid_2");
g.setEdge("covers_cashmere_tencel_top", "cover_cashmere_top");
g.setEdge("covers_cashmere_tencel_top", "cover_tencel_top");
g.setEdge("covers_tencel_top", "cover_tencel_top");
g.setEdge("covers_merced_elips", "cover_merced_1");
g.setEdge("covers_merced_elips", "cover_elips_2");
g.setEdge("covers_elips_tencel_top", "cover_elips_top");
g.setEdge("covers_elips_tencel_top", "cover_tencel_top");
g.setEdge("covers_sensity_top", "cover_sensity_top");

//************************************************

g.setEdge("bp_covers_italiano_tencel_new", "bp_cover_italiano");
g.setEdge("bp_covers_italiano_tencel_new", "bp_cover_tencel_new");

g.setEdge("bp_covers_velvet_tencel", "bp_cover_velvet");
g.setEdge("bp_covers_velvet_tencel", "bp_cover_tencel");

g.setEdge("bp_covers_velvet_new_tencel_new", "bp_cover_velvet_new");
g.setEdge("bp_covers_velvet_new_tencel_new", "bp_cover_tencel_new");

g.setEdge("bp_covers_velvet", "bp_cover_velvet");

g.setEdge("bp_covers_cashmere", "bp_cover_cashmere");

g.setEdge("bp_covers_elips_medicott", "bp_cover_medicott");
g.setEdge("bp_covers_elips_medicott", "bp_cover_elips_1");

g.setEdge("bp_covers_silver", "bp_cover_silver");
g.setEdge("bp_covers_medicover", "bp_cover_medicover");
g.setEdge("bp_covers_young", "bp_cover_young");
g.setEdge("bp_covers_italiano", "bp_cover_italiano");
g.setEdge("bp_covers_probiotex", "bp_cover_probiotex");
g.setEdge("bp_covers_tencel", "bp_cover_tencel");
g.setEdge("bp_covers_tencel_new", "bp_cover_tencel_new");

g.setEdge("bp_covers_italiano_hybrid", "bp_cover_italiano_1");
g.setEdge("bp_covers_italiano_hybrid", "bp_cover_hybrid_2");
g.setEdge("bp_covers_cashmere_tencel_top", "bp_cover_cashmere_top");
g.setEdge("bp_covers_cashmere_tencel_top", "bp_cover_tencel_top");
g.setEdge("bp_covers_italiano_hybrid", "bp_cover_italiano_1");
g.setEdge("bp_covers_italiano_hybrid", "bp_cover_hybrid_2");
g.setEdge("bp_covers_cashmere_tencel_top", "bp_cover_cashmere_top");
g.setEdge("bp_covers_cashmere_tencel_top", "bp_cover_tencel_top");
g.setEdge("bp_covers_tencel_top", "bp_cover_tencel_top");
g.setEdge("bp_covers_merced_elips", "bp_cover_merced_1");
g.setEdge("bp_covers_merced_elips", "bp_cover_elips_2");
g.setEdge("bp_covers_elips_tencel_top", "bp_cover_elips_top");
g.setEdge("bp_covers_elips_tencel_top", "bp_cover_tencel_top");
g.setEdge("bp_covers_sensity_top", "bp_cover_sensity_top");

//************************************************

g.setEdge("covers_italiano_tencel_new_t", "cover_italiano_t");
g.setEdge("covers_italiano_tencel_new_t", "cover_tencel_new_t");

g.setEdge("covers_velvet_tencel_t", "cover_velvet_t");
g.setEdge("covers_velvet_tencel_t", "cover_tencel_t");

g.setEdge("covers_velvet_new_tencel_new_t", "cover_velvet_new_t");
g.setEdge("covers_velvet_new_tencel_new_t", "cover_tencel_new_t");

g.setEdge("covers_velvet_t", "cover_velvet_t");

g.setEdge("covers_tencel_t", "cover_tencel_t");
g.setEdge("covers_tencel_new_t", "cover_tencel_new_t");

g.setEdge("covers_cashmere_t", "cover_cashmere_t");

g.setEdge("covers_elips_medicott_t", "cover_medicott_t");
g.setEdge("covers_elips_medicott_t", "cover_elips_1_t");

g.setEdge("covers_silver_t", "cover_silver_t");
g.setEdge("covers_medicover_t", "cover_medicover_t");
g.setEdge("covers_merced_elips_t", "cover_merced_1_t");
g.setEdge("covers_merced_elips_t", "cover_elips_2_t");
g.setEdge("covers_young_t", "cover_young_t");
g.setEdge("covers_italiano_t", "cover_italiano_t");
g.setEdge("covers_probiotex_t", "cover_probiotex_t");
g.setEdge("covers_italiano_hybrid_t", "cover_italiano_1_t");
g.setEdge("covers_italiano_hybrid_t", "cover_hybrid_2_t");
g.setEdge("covers_cashmere_tencel_top_t", "cover_cashmere_top_t");
g.setEdge("covers_cashmere_tencel_top_t", "cover_tencel_top_t");
g.setEdge("covers_tencel_top_t", "cover_tencel_top_t");
g.setEdge("covers_italiano_hybrid_t", "cover_italiano_1_t");
g.setEdge("covers_italiano_hybrid_t", "cover_hybrid_2_t");
g.setEdge("covers_cashmere_tencel_top_t", "cover_cashmere_top_t");
g.setEdge("covers_cashmere_tencel_top_t", "cover_tencel_top_t");
g.setEdge("covers_tencel_top_t", "cover_tencel_top_t");

//************************************************

g.setEdge("step_6", "otomana");

g.setEdge("otomana", "otomana_140");
g.setEdge("otomana", "otomana_160");
g.setEdge("otomana", "otomana_180");

console.log("this.graph = g;");
configurator.graph = g;
