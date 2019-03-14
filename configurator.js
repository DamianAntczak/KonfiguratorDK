class Step {


    constructor(number, title, skipEnable, img, optionsFilter) {
        this.number = number;
        this.title = title;
        this.previous = null;
        this.skipEnable = skipEnable;
        this.img = img;
        this.optionsFilter = optionsFilter;
        this.selectedNodes = [];
    }
}

class Configurator {
    constructor(startStep, graph) {
        this.step = startStep;
        this.graph = graph;
        this.allSteps = [];
        this.stepIndex = 0;
        this.width = 0;
    }

    numberWithSpaces(x) {
        x = x.toFixed(2);
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(",");
    }

    nextStep() {
        // let actualStep = this.step;
        // this.step = this.step.nextStep;
        // this.step.previous = actualStep;
        // this.refresh();
        // $('#configurator-preview').append('<img class="img-responsive configurator-img" src="renders/' + this.step.img + '" />');

        var selectedNode = this.step.selectedNodes[2];
        console.log(selectedNode);
        this.stepIndex = this.stepIndex + 1;
        if (selectedNode.nextStep == 'summary') {
            this.loadSummary();
        } else {
            if (configurator.step.number === 1) {
                configurator.width = selectedNode.width;
            }
            this.loadLevel(selectedNode.nextStep);
        }
    }

    previousStep() {
        $('#configurator-preview img').last().remove();
        console.log(this.allSteps[this.stepIndex - 1].selectedNodes[0]);
        this.allSteps.pop();
        console.log('this.allSteps');
        console.log(this.allSteps);
        this.stepIndex = this.stepIndex - 1;
        var previousStepName = this.allSteps[this.stepIndex].selectedNodes[0].node;
        this.allSteps[this.stepIndex].selectedNodes = [];
        this.showPrice();
        this.loadLevel(previousStepName);
    }

    skipStep() {
        var selectedNode = this.step.selectedNodes[0];
        console.log(selectedNode);
        this.stepIndex = this.stepIndex + 1;
        if (selectedNode.skipToNode == 'summary') {
            this.loadSummary();
        } else {
            this.loadLevel(selectedNode.skipToNode);
        }
    }

    start() {
        $('#configurator-start-view').remove();
        $('#configurator').show();
        this.loadLevel("step_1");
    }

    refresh(node) {
        console.log($('#step-title'));
        $('#step-number').text('Krok ' + node.number);
        $('#step-title').text(node.label);
        console.log('Step index:' + (this.stepIndex - 1));
        console.log(this.allSteps[this.stepIndex - 1]);
        if (this.allSteps[this.stepIndex - 1] == null) {
            $("#previous-step").hide();
        } else {
            $("#previous-step").show();
            $("#previous-step").text('<< poprzedni krok: ' + this.allSteps[this.stepIndex - 1].title);
        }
        // if (this.step.nextStep !== null) {
        //     $('#next-step').hide();
        // } else {
        //     $('#next-step').show();
        //     $('#next-step').text('następny krok: ' + this.step.nextStep.title + ' >>');
        // }
        // $('#next-step').show();
        // console.log('Node ');
        // console.log(node);
        // $('#next-step').text('następny krok: ' + this.step.title + ' >>');

        if (this.step.skipEnable !== undefined) {
            $('#skip-step').show();
        } else {
            $('#skip-step').hide();
        }
    }

    loadLevel(step) {

        this.showStepInfo();
        $('#next-step').hide();
        $('#item-color').remove();

        var starNode = this.graph.node(step);
        console.log(starNode);
        this.step = new Step(starNode.number, starNode.title, starNode.skipToNode, 'baza kontynetalna_roko08.png', starNode.optionsFilter);
        this.step.selectedNodes[0] = starNode;
        // this.graph
        var successors = this.graph.successors(step);
        var stepElement = $('#step-content');
        stepElement.html('');
        var divElement = stepElement.append($('<div>').addClass("configurator-base-carousel owl-carousel owl-theme"));
        var items = 3;
        var center  = false;
        if (successors.length < 3) {
            if(successors.length === 2) {
                items = 2;
            }
            else {
                center = true;
            }
        };
        var carousel = $('.configurator-base-carousel').owlCarousel({
            loop: false,
            items: items,
            center: center,
            nav: true,
            mouseDrag: false,
            margin: 30,
            dots: false,
            navText: ['<i class="svg prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-198 322.5 197.4 197.4" style="enable-background:new -198 322.5 197.4 197.4;" xml:space="preserve"> <g> <g> <g> <g> <polygon class="st0" points="-147.7,514.9 -50.1,420.1 -147.7,325.4 -152.7,330.6 -60.5,420.1 -152.7,509.7 "/> <path d="M-147.7,518.4l-8.5-8.8l92.1-89.5l-92.1-89.5l8.5-8.8l101.2,98.3L-147.7,518.4z M-149.2,509.7l1.6,1.6l93.9-91.2 l-93.9-91.2l-1.6,1.6l92.3,89.6L-149.2,509.7z"/></g></g></g></g></svg></i>', '<i class="svg next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-198 322.5 197.4 197.4" style="enable-background:new -198 322.5 197.4 197.4;" xml:space="preserve"> <g> <g> <g> <g> <polygon class="st0" points="-147.7,514.9 -50.1,420.1 -147.7,325.4 -152.7,330.6 -60.5,420.1 -152.7,509.7 "/> <path d="M-147.7,518.4l-8.5-8.8l92.1-89.5l-92.1-89.5l8.5-8.8l101.2,98.3L-147.7,518.4z M-149.2,509.7l1.6,1.6l93.9-91.2 l-93.9-91.2l-1.6,1.6l92.3,89.6L-149.2,509.7z"/></g></g></g></g></svg></i>'],
            // responsive: {
            //     0: {
            //         items: 1,
            //     },
            //     768: {
            //         items: 2,
            //     },
            //     992: {
            //         items: 3,
            //     }
            // },

        });
        let nodePrice = function (node_name) {
            return '<div><h6 class="dimension-price">Wymiar i cena</h6>' +
                '<p class="node-price blue-text" id="node-price-' + node_name + '" class="blue-text"></p>' +
                '<p style="font-size: 6px;">Cena zawiera podatek VAT 23 %</p></div>';
        };
        successors.forEach(node_name => {
            var node = this.graph.node(node_name);
            var successors = this.graph.successors(node_name);
            var counter = successors.length;
            carousel.trigger('add.owl.carousel',
                ['<div class="owl-item">' +
                '<div class="col-sm-12">' +
                '<div class="carousel-box box" node_name="' + node_name + '" onclick="configurator.onPartClick($(this))">' +
                '<div class="square" style="background-image: url(\'img/' + node.img + '\')" />' +
                '</div>' +
                '<div class="row"><h6 class="item-label text-center word-wrap" style="color: #212121;">' + node.label.toUpperCase() + '</h6></div>' +
                nodePrice(node_name) +
                this.addOption(node_name, successors) +
                '</div>' +
                '</div>']);

            if (counter === 1) {
                $('#select-' + node_name).parent().hide();
            }

            $(document.body).on('change', '#select-' + node_name, function () {
                var nodeName = $(this).val();
                var node = configurator.graph.node(nodeName);
                var $owl = $('.configurator-base-carousel');
                var price = 0.0;
                if (configurator.step.selectedNodes[3] !== undefined && configurator.step.selectedNodes[3].g === 2) {
                    price = node.price.g2;
                }
                else {
                    price = node.price.g1;
                }
                if (price > 0) {
                    $owl.find('#node-price-' + node_name).html(configurator.numberWithSpaces(price) + ' PLN');
                    if(configurator.step.selectedNodes[0].number === 2){
                        console.log('wezglowie');
                        var find = $('img#render-' + configurator.step.selectedNodes[0].node);
                        var src = $('#render-' + configurator.step.selectedNodes[0].node).prop('src');
                        console.log(src);
                        if(src !== undefined) {
                            if(src.includes('95')) {
                                $('#render-' + configurator.step.selectedNodes[0].node).prop('src', src.replace('95', '115'));
                            }
                            else{
                                $('#render-' + configurator.step.selectedNodes[0].node).prop('src', src.replace('115', '95'));
                            }
                            console.log(configurator.step.selectedNodes[0].node);
                        }
                    }
                }
                else {
                    $owl.find('#node-price-' + node_name).parent().hide();
                }
                $owl.trigger('refresh.owl.carousel');
                configurator.step.selectedNodes[2] = node;
                configurator.showPrice();
            });

            $('#select-' + node_name).val($('#select-' + node_name + ' option:first').val()).change();
        });

        carousel.trigger('refresh.owl.carousel');



        this.refresh(this.graph.node(step));

        this.allSteps[this.stepIndex] = this.step;

        if (this.allSteps[this.stepIndex - 1] !== undefined) {
            $("#previous-step").show();
            $("#previous-step").text('<< poprzedni krok: ' + this.allSteps[this.stepIndex - 1].title);
        } else {
            $("#previous-step").hide();
        }
    }

    showStepInfo() {
        $('#step-number').show();
        $('#step-title').show();
        $('#item-color').show();
    }

    onPartClick(selectedImg) {
        var $this = $(selectedImg);
        $('.box').removeClass('carousel-box-selected').addClass('carousel-box');
        var nodeName = $this.attr("node_name");
        var mainNode = configurator.step.selectedNodes[0];
        if ($this.hasClass('clicked')) {
            $this.removeAttr('style').removeClass('clicked');
            $this.removeClass('carousel-box-selected').addClass('carousel-box');
            $this.attr("node_name");
            $('#configurator-preview').find('#render-' + mainNode.node).remove();
            $('#price').attr("hidden", true);
            $('#price-vat').attr("hidden", true);
            $('#select-' + nodeName).prop("disabled", "disabled");
        } else {
            $this.addClass('clicked');
            $this.removeClass('carousel-box').addClass('carousel-box-selected');

            var baseNode = configurator.graph.node(nodeName);
            var find = $('#configurator-preview').find('#render-' + mainNode.node);
            if (find.length === 0) {
                $('#configurator-preview').append('<img id="render-' + mainNode.node + '" style="z-index: ' + mainNode.zIndex + '" class="img-responsive configurator-img" src="renders/' + baseNode.render + '" />');
            } else {
                $(find).attr('src', 'renders/' + baseNode.render);
            }
            $('.configurator-select').prop("disabled", "disabled");
            $('#select-' + nodeName).removeAttr("disabled");
            var node = configurator.graph.node($('#select-' + nodeName).val());
            configurator.step.selectedNodes[1] = baseNode;
            configurator.step.selectedNodes[2] = node;
            this.showPrice();

            $('#item-color').remove();
            if (baseNode.colors !== undefined) {
                $('#step-content').after(this.addColor(baseNode.colors));
                $('.tiles:first').addClass('color-selected');
            }
            else if(baseNode.cover !== undefined){
                $('#step-content').after(this.addCover(baseNode.cover));
                $('.tiles:first').addClass('color-selected');
            }

            $('#next-step').show();
            console.log('Node ');
            console.log(baseNode);
            let nextStep = configurator.graph.node(node.nextStep);
            console.log('nextStep');
            console.log(nextStep);
            $('#next-step').text('następny krok: ' + nextStep.title + ' >>');
        }
    }

    showPrice() {
        let price = 0.0;
        configurator.allSteps.forEach(step => {
            if (step.selectedNodes[3] !== undefined) {
                if (step.selectedNodes[3].g === 1) {
                    price += step.selectedNodes[2].price.g1;
                } else {
                    price += step.selectedNodes[2].price.g2;
                }
            }
            else {
                if(step.selectedNodes[2] != undefined) {
                    price += step.selectedNodes[2].price.g1;
                }
            }
        });
        $('#price').text(configurator.numberWithSpaces(price) + ' PLN*').removeAttr('hidden');
        $('#price-vat').removeAttr('hidden');
    }

    addOption(node_name, successors) {
        console.log('this.width');
        console.log(this.width);
        if (successors.length > 0) {
            var sb = '<div class="form-group">';
            sb += '<label class="label-small" for="select-' + node_name + '">Rozmiar</label>';
            sb += '<select disabled class="configurator-select form-control input-sm" name="base-size" id="select-' + node_name + '">';
            var optionNode = [];
            successors.forEach(s => {
                var node = this.graph.node(s);
                optionNode.push([s, node]);
                // sb += '<option value="' + s + '">' + node.label + '</option>';
            });
            if (this.step.optionsFilter && this.width > 0) {
                optionNode = optionNode.filter(function (elem) {
                    return elem[1].width == configurator.width;
                });
            }
            optionNode.forEach(node => {
                sb += '<option value="' + node[0] + '">' + node[1].label + '</option>';
            });
            return sb + '</select></div>';
        }
        return '';
    }

    addColor(colorsNode) {
        var allColorsNodeNames = this.graph.successors(colorsNode);
        var allColors = [];

        allColorsNodeNames.forEach(node => {
            allColors.push(this.graph.node(node));
        });

        var g1Colors = allColors.filter(function (color) {
            return color.g == 1;
        });

        var g2Colors = allColors.filter(function (color) {
            return color.g == 2;
        });


        var html = '<div id="item-color" class="col-sm-12">' +
            '<h5 class="text-center">Wybierz tkaninę</h5>' +
            '<div class="row">';

        html += '<div class="col-sm-12">';
        // html += '<div class="center-block">';
        addImageToDom(g1Colors, 'I', 'text-align: right;');
        addImageToDom(g2Colors, 'II','text-align: left;');
        // html += '</div>';
        html += '</div>';

        html += '</div>';
        return html + '</div></div>';

        function addImageToDom(colors, group, style) {
            // html += '<div class="row">';
            var counter = 0;
            html += '<div class="col-sm-6">';
            html += '<div class="center-block" style="' + style + '">';
            colors.forEach(color => {
                // html += '<div class="col-sm-3" onclick="configurator.onColorSelect($(this))">';
                html += '<div color="' + color.node + '" onclick="configurator.onColorSelect($(this))" class="img_tkan tiles" style="background-image: url(\'' + color.url + '\')" ></div>';
                // html += '</div>';
            });
            html += '</div>';
            // html += '<div class="row">';
            html += '<h6 class="bold" style="' + style + '">grupa ' + group + '</h6>';
            html += '</div>';
        }
    }

    addCover(coverNode) {
        var allColorsNodeNames = this.graph.successors(coverNode);
        var allColors = [];

        allColorsNodeNames.forEach(node => {
            allColors.push(this.graph.node(node));
        });

        var g1Colors = allColors.filter(function (color) {
            return color.g == 1;
        });

        var g2Colors = allColors.filter(function (color) {
            return color.g == 2;
        });

        var html = '<div id="item-color" class="col-sm-12">' +
            '<h5 class="text-center">Wybierz pokrowiec</h5>' +
            '<div class="row">';

        html += '<div class="col-sm-12">';
        // html += '<div class="center-block">';
        html += '<div class="center-block" style="text-align: center;font-size: 9px;">';
        if(g1Colors.length > 0) {
            addImageToDom(g1Colors, g1Colors[0].name);
        }
        if(g2Colors.length > 0) {
            addImageToDom(g2Colors, g2Colors[0].name);
        }
        html += '</div>';
        // html += '</div>';
        html += '</div>';

        html += '</div>';
        return html + '</div></div>';

        function addImageToDom(colors, group) {
            // html += '<div class="row">';
            var counter = 0;
            colors.forEach(color => {
                // html += '<div class="col-sm-3" onclick="configurator.onColorSelect($(this))">';
                html += '<div style="display: inline-block;background-clip: content-box;"><div color="' + color.node + '" onclick="configurator.onColorSelect($(this))" class="img_cover tiles" style="background-image: url(\'' + color.url + '\')" >';
                // html += '</div>';
                html += '</div>';
            });
            html += '<span class="bold text-uppercase">' + group + '</span>';
            html += '</div>';
        }

        return html + '</div>';
    }

    onColorSelect(selectedColor) {
        var $this = $(selectedColor);

        console.log('selectedColor');
        console.log(selectedColor);
        console.log($this.attr('color'));

        let colorNode = configurator.graph.node($this.attr('color'));
        configurator.step.selectedNodes[3] = colorNode;
        console.log(colorNode.render);
        // var mainNode = configurator.step.selectedNodes[1];
        var mainNode = this.step.selectedNodes[0];
        var find = $('#configurator-preview').find('#render-' + mainNode.node);
        if (find.length === 0) {
            $('#configurator-preview').append('<img id="render-' + mainNode.node + '" style="z-index: ' + mainNode.zIndex + '" class="img-responsive configurator-img" src="renders/' + baseNode.render + '" />');
        } else {
            $(find).attr('src', 'renders/' + colorNode.render);
        }

        $('.tiles').removeClass('color-selected');
        // this.graph

        // var successors = configurator.graph.successors(mainNode.node);
        var $owl = $('.configurator-base-carousel');

        // successors.forEach(base_node_name => {
        //     console.log(base_node_name);
        //     // let baseNode = configurator.graph.node(base_node_name);
        //
        //     var val = $('#select-' + base_node_name).val();
        //     console.log(val);
        //     var node = this.step.selectedNodes[0];
        //     var base_node_name = node.name;
        //     console.log(node);
        //     if (node !== undefined) {
        //         if (colorNode.g === 1) {
        //             $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g1) + ' PLN');
        //         } else {
        //             $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g2) + ' PLN');
        //         }
        //     }
        // });

        var node = this.step.selectedNodes[2];
        var base_node_name = this.step.selectedNodes[1].node;
        console.log(this.step.selectedNodes[1].node);
        if (node !== undefined) {
            if (colorNode.g === 1) {
                $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g1) + ' PLN');
            } else {
                $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g2) + ' PLN');
            }
        }

        configurator.showPrice();
        $this.toggleClass('color-selected');
    }


    loadSummary() {
        $('#step-number').hide();
        $('#step-title').hide();
        $('#item-color').hide();
        $('#next-step').hide();
        $('#skip-step').hide();

        var stepElement = $('#step-content');
        stepElement.html('');
        // var divElement = stepElement.append($('<div>').addClass("row").append($('h3').text('Podsumowanie')));
        let str = '<div class="col-sm-12">';
        str += '<h2 class="text-center text-uppercase">podsumowanie</h2>';
        let priceSum = 0.0;
        let fabricName = function (step) {
            return step.selectedNodes[3] !== undefined ? step.selectedNodes[3].name : '';
        };
        this.allSteps.forEach(step => {
            var priceNode = step.selectedNodes[2];
            console.log('393');
            console.log(priceNode);
            if (step.selectedNodes[1] !== undefined && priceNode.price.g1 > 0) {
                str += '<div class="row summary-price-row"">';
                str += '<div class="col-sm-7 text-capitalize">' + step.selectedNodes[0].title + ' ' + step.selectedNodes[1].label.replace(/<br[^>]*>/gi, ' ') + ' ' + fabricName(step) + '</div>';
                str += '<div class="col-sm-5 text-right">' + this.numberWithSpaces(priceNode.price.g1) + ' PLN*</div>' +
                    '</div>';
                priceSum += priceNode.price.g1;
            }
        });
        str += '</div>';
        str += '<div class="col-sm-6 col-sm-offset-6 margin-top-25 margin-bottom-25">';
        str += '<h5>Wymiar i cena prezentowanego<br> zestawu:</h5>';
        str += '<h3 class="blue-text">' + this.numberWithSpaces(priceSum) + ' PLN</h3>';
        str += '<p id="price-vat">Cena zawiera podatek VAT 23 %</p>';
        str += '</div>';
        str += '<div class="row summary-btn-row">';
        str += '<div class="col-sm-6 text-center"><button class="btn text-uppercase btn-summary" onclick="location.href=\'https://hilding.pl/index/whereBuy\'" >Znajdź salon</button></div>';
        str += '<div class="col-sm-6 text-center"><button class="btn text-uppercase btn-summary">Wydrukuj</button></div>';
        str += '</div>';
        stepElement.html(str);
    }
}


$(document)

    .ready(
        function () {
            var Graph = graphlib.Graph;
            var g = new Graph();

            g.setNode("summary", {node: 'summary', title: 'Podsumowanie'});
            g.setNode("loadLevel", {});
            g.setNode("step_1", {
                node: 'step_1',
                title: 'baza',
                label: 'wybierz bazę',
                number: 1,
                zIndex: 10,
                optionsFilter: false
            });
            g.setNode("base_box", {
                node: 'base_box',
                label: 'Base box',
                img: 'baza_base_box.jpg',
                render: '/bazy/baza_base_box_h31_novel13.png',
                colors: 'base_box_colors_7',
            });
            g.setNode("baza_kontynentalna", {
                node: 'baza_kontynentalna',
                label: 'Kontynent',
                img: 'kontynent.jpg',
                render: '/bazy/baza_kontynentalna_h31_novel13.png',
                colors: 'kontynent_colors_7',
            });
            g.setNode("baza_kontynentalna_z_szuflada", {
                node: 'baza_kontynentalna_z_szuflada',
                label: 'Kontynent</br>z szufladą',
                img: 'kontynent_z_szuflada.jpg',
                render: '/bazy/baza_kontynentalna_szuflady_h34_novel13.png',
                colors: 'kontynent_szuflada_colors_7',
            });
            g.setNode("baza_tapicerowana", {
                node: 'baza_tapicerowana',
                label: 'Baza tapicerowana',
                img: 'baza_tapicerowana.jpg',
                render: '/bazy/baza_tapicerowana_h34_novel13.png',
                colors: 'tapicerowana_colors_7',
            });
            g.setNode("box_podnoszony", {
                node: 'box_podnoszony',
                label: 'Box-podnoszony',
                img: 'box_podnoszony.jpg',
                render: '/bazy/baza_box_podnoszony_h39_novel13.png',
                colors: 'base_podnoszony_colors_7',
            });

            g.setNode("base_box_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1649, g2: 1749},
                nextStep: 'step_2'
            });
            g.setNode("base_box_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1769, g2: 1869},
                nextStep: 'step_2'
            });
            g.setNode("base_box_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 2099, g2: 2199},
                nextStep: 'step_2'
            });
            g.setNode("base_box_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 2398, g2: 2598},
                nextStep: 'step_2'
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

            g.setNode("baza_tapicerowana_140_200", {
                label: '140/200',
                width: 140, price: {g1: 0, g2: 0}, nextStep: 'step_2'
            });
            g.setNode("baza_tapicerowana_160_200", {
                label: '180/200',
                width: 160, price: {g1: 0, g2: 0}, nextStep: 'step_2'
            });
            g.setNode("baza_tapicerowana_180_200", {
                label: '90/200',
                width: 180, price: {g1: 0, g2: 0}, nextStep: 'step_2'
            });
            g.setNode("baza_tapicerowana_200_200", {
                label: '200/200',
                width: 200, price: {g1: 0, g2: 0}, nextStep: 'step_2'
            });


            g.setNode("box_podnoszony_140_200", {
                label: '140/200',
                width: 140, price: {g1: 3659, g2: 3859}, nextStep: 'step_2'
            });
            g.setNode("box_podnoszony_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 4498, g2: 4798},
                nextStep: 'step_2'
            });
            g.setNode("box_podnoszony_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 4798, g2: 5098},
                nextStep: 'step_2'
            });
            g.setNode("box_podnoszony_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 5318, g2: 5718},
                nextStep: 'step_2'
            });

            g.setNode("kontynent_colors_7", {});

            g.setNode("kontynent_novel", {
                g: 1,
                name: 'novel',
                node: 'kontynent_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/bazy/baza_kontynentalna_h31_novel13.png'
            });
            g.setNode("kontynent_roko", {
                g: 1,
                name: 'roko',
                node: 'kontynent_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/bazy/baza_kontynentalna_h31_roko08.png'
            });
            g.setNode("kontynent_aspen", {
                g: 1,
                name: 'aspen',
                node: 'kontynent_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/bazy/baza_kontynentalna_h31_aspen04.png'
            });

            g.setNode("kontynent_river", {
                g: 2,
                name: 'river',
                node: 'kontynent_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/bazy/baza_kontynentalna_h31_river02.png'
            });
            g.setNode("kontynent_eren", {
                g: 2,
                name: 'eren',
                node: 'kontynent_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/bazy/baza_kontynentalna_h31_eren07.png'
            });
            g.setNode("kontynent_ontario", {
                g: 2,
                name: 'ontario',
                node: 'kontynent_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/bazy/baza_kontynentalna_h31_ontario90.png'
            });
            g.setNode("kontynent_riviera", {
                g: 2,
                name: 'riviera',
                node: 'kontynent_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/bazy/baza_kontynentalna_h31_riviera38.png'
            });

            g.setNode("kontynent_colors_7", {});
            g.setNode("kontynent_novel", {
                g: 1,
                name: 'novel',
                node: 'kontynent_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/bazy/baza_kontynentalna_h31_novel13.png'
            });
            g.setNode("kontynent_roko", {
                g: 1,
                name: 'roko',
                node: 'kontynent_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/bazy/baza_kontynentalna_h31_roko08.png'
            });
            g.setNode("kontynent_aspen", {
                g: 1,
                name: 'aspen',
                node: 'kontynent_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/bazy/baza_kontynentalna_h31_aspen04.png'
            });

            g.setNode("kontynent_river", {
                g: 2,
                name: 'river',
                node: 'kontynent_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/bazy/baza_kontynentalna_h31_river02.png'
            });
            g.setNode("kontynent_eren", {
                g: 2,
                name: 'eren',
                node: 'kontynent_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/bazy/baza_kontynentalna_h31_eren07.png'
            });
            g.setNode("kontynent_ontario", {
                g: 2,
                name: 'ontario',
                node: 'kontynent_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/bazy/baza_kontynentalna_h31_ontario90.png'
            });
            g.setNode("kontynent_riviera", {
                g: 2,
                name: 'riviera',
                node: 'kontynent_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/bazy/baza_kontynentalna_h31_riviera38.png'
            });

            g.setNode("kontynent_szuflada_colors_7", {});
            g.setNode("kontynent_szuflada_novel", {
                g: 1,
                name: 'novel',
                node: 'kontynent_szuflada_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/bazy/baza_kontynentalna_szuflady_h34_novel13.png'
            });
            g.setNode("kontynent_szuflada_roko", {
                g: 1,
                name: 'roko',
                node: 'kontynent_szuflada_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/bazy/baza_kontynentalna_szuflady_h34_roko08.png'
            });
            g.setNode("kontynent_szuflada_aspen", {
                g: 1,
                name: 'aspen',
                node: 'kontynent_szuflada_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/bazy/baza_kontynentalna_szuflady_h34_aspen04.png'
            });

            g.setNode("kontynent_szuflada_river", {
                g: 2,
                name: 'river',
                node: 'kontynent_szuflada_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/bazy/baza_kontynentalna_szuflady_h34_river02.png'
            });
            g.setNode("kontynent_szuflada_eren", {
                g: 2,
                name: 'eren',
                node: 'kontynent_szuflada_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/bazy/baza_kontynentalna_szuflady_h34_eren07.png'
            });
            g.setNode("kontynent_szuflada_ontario", {
                g: 2,
                name: 'ontario',
                node: 'kontynent_szuflada_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/bazy/baza_kontynentalna_szuflady_h34_ontario90.png'
            });
            g.setNode("kontynent_szuflada_riviera", {
                g: 2,
                name: 'riviera',
                node: 'kontynent_szuflada_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/bazy/baza_kontynentalna_szuflady_h34_riviera38.png'
            });

            g.setNode("base_box_colors_7", {});
            g.setNode("base_box_novel", {
                g: 1,
                name: 'novel',
                node: 'base_box_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/bazy/baza_base_box_h31_novel13.png'
            });
            g.setNode("base_box_roko", {
                g: 1,
                name: 'roko',
                node: 'base_box_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/bazy/baza_base_box_h31_roko08.png'
            });
            g.setNode("base_box_aspen", {
                g: 1,
                name: 'aspen',
                node: 'base_box_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/bazy/baza_base_box_h31_aspen04.png'
            });

            g.setNode("base_box_river", {
                g: 2,
                name: 'river',
                node: 'base_box_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/bazy/baza_base_box_h31_river02.png'
            });
            g.setNode("base_box_eren", {
                g: 2,
                name: 'eren',
                node: 'base_box_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/bazy/baza_base_box_h31_eren07.png'
            });
            g.setNode("base_box_ontario", {
                g: 2,
                name: 'ontario',
                node: 'base_box_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/bazy/baza_base_box_h31_ontario90.png'
            });
            g.setNode("base_box_riviera", {
                g: 2,
                name: 'riviera',
                node: 'base_box_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/bazy/baza_base_box_h31_riviera38.png'
            });

            g.setNode("base_podnoszony_colors_7", {});

            g.setNode("base_podnoszony_novel", {
                g: 1,
                name: 'novel',
                node: 'base_podnoszony_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/bazy/baza_box_podnoszony_h39_novel13.png'
            });
            g.setNode("base_podnoszony_roko", {
                g: 1,
                name: 'roko',
                node: 'base_podnoszony_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/bazy/baza_box_podnoszony_h39_roko08.png'
            });
            g.setNode("base_podnoszony_aspen", {
                g: 1,
                name: 'aspen',
                node: 'base_podnoszony_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/bazy/baza_box_podnoszony_h39_aspen04.png'
            });

            g.setNode("base_podnoszony_river", {
                g: 2,
                name: 'river',
                node: 'base_podnoszony_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/bazy/baza_box_podnoszony_h39_river02.png'
            });
            g.setNode("base_podnoszony_eren", {
                g: 2,
                name: 'eren',
                node: 'base_podnoszony_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/bazy/baza_box_podnoszony_h39_eren07.png'
            });
            g.setNode("base_podnoszony_ontario", {
                g: 2,
                name: 'ontario',
                node: 'base_podnoszony_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/bazy/baza_box_podnoszony_h39_ontario90.png'
            });
            g.setNode("base_podnoszony_riviera", {
                g: 2,
                name: 'riviera',
                node: 'base_podnoszony_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/bazy/baza_box_podnoszony_h39_riviera38.png'
            });

            g.setNode("tapicerowana_colors_7", {});
            g.setNode("tapicerowana_novel", {
                g: 1,
                name: 'novel',
                node: 'tapicerowana_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/bazy/baza_tapicerowana_h34_novel13.png'
            });
            g.setNode("tapicerowana_roko", {
                g: 1,
                name: 'roko',
                node: 'tapicerowana_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/bazy/baza_tapicerowana_h34_roko08.png'
            });
            g.setNode("tapicerowana_aspen", {
                g: 1,
                name: 'aspen',
                node: 'tapicerowana_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/bazy/baza_tapicerowana_h34_aspen04.png'
            });
            g.setNode("tapicerowana_river", {
                g: 2,
                name: 'river',
                node: 'tapicerowana_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/bazy/baza_tapicerowana_h34_river02.png'
            });
            g.setNode("tapicerowana_eren", {
                g: 2,
                name: 'eren',
                node: 'tapicerowana_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/bazy/baza_tapicerowana_h34_eren07.png'
            });
            g.setNode("tapicerowana_ontario", {
                g: 2,
                name: 'ontario',
                node: 'tapicerowana_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/bazy/baza_tapicerowana_h34_ontario90.png'
            });
            g.setNode("tapicerowana_riviera", {
                g: 2,
                name: 'riviera',
                node: 'tapicerowana_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/bazy/baza_tapicerowana_h34_riviera38.png'
            });

            g.setNode("urban_colors_7", {});
            g.setNode("urban_novel", {
                g: 1,
                name: 'novel',
                node: 'urban_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/wezglowia/wezglowie_urban_95_novel13.png'
            });
            g.setNode("urban_roko", {
                g: 1,
                name: 'roko',
                node: 'urban_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/wezglowia/wezglowie_urban_95_roko08.png'
            });
            g.setNode("urban_aspen", {
                g: 1,
                name: 'aspen',
                node: 'urban_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/wezglowia/wezglowie_urban_95_aspen04.png'
            });
            g.setNode("urban_river", {
                g: 2,
                name: 'river',
                node: 'urban_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/wezglowia/wezglowie_urban_95_river02.png'
            });
            g.setNode("urban_eren", {
                g: 2,
                name: 'eren',
                node: 'urban_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/wezglowia/wezglowie_urban_95_eren07.png'
            });
            g.setNode("urban_ontario", {
                g: 2,
                name: 'ontario',
                node: 'urban_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/wezglowia/wezglowie_urban_95_ontario90.png'
            });
            g.setNode("urban_riviera", {
                g: 2,
                name: 'riviera',
                node: 'urban_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/wezglowia/wezglowie_urban_95_riviera38.png'
            });

            g.setNode("preppy_colors_7", {});
            g.setNode("preppy_novel", {
                g: 1,
                name: 'novel',
                node: 'preppy_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/wezglowia/wezglowie_preppy_95_novel13.png'
            });
            g.setNode("preppy_roko", {
                g: 1,
                name: 'roko',
                node: 'preppy_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/wezglowia/wezglowie_preppy_95_roko08.png'
            });
            g.setNode("preppy_aspen", {
                g: 1,
                name: 'aspen',
                node: 'preppy_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/wezglowia/wezglowie_preppy_95_aspen04.png'
            });
            g.setNode("preppy_river", {
                g: 2,
                name: 'river',
                node: 'preppy_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/wezglowia/wezglowie_preppy_95_river02.png'
            });
            g.setNode("preppy_eren", {
                g: 2,
                name: 'eren',
                node: 'preppy_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/wezglowia/wezglowie_preppy_95_eren07.png'
            });
            g.setNode("preppy_ontario", {
                g: 2,
                name: 'ontario',
                node: 'preppy_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/wezglowia/wezglowie_preppy_95_ontario90.png'
            });
            g.setNode("preppy_riviera", {
                g: 2,
                name: 'riviera',
                node: 'preppy_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/wezglowia/wezglowie_preppy_95_riviera38.png'
            });

            g.setNode("glamour_colors_7", {});
            g.setNode("glamour_novel", {
                g: 1,
                name: 'novel',
                node: 'glamour_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/wezglowia/wezglowie_glamour_115_novel13.png'
            });
            g.setNode("glamour_roko", {
                g: 1,
                name: 'roko',
                node: 'glamour_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/wezglowia/wezglowie_glamour_115_roko08.png'
            });
            g.setNode("glamour_aspen", {
                g: 1,
                name: 'aspen',
                node: 'glamour_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/wezglowia/wezglowie_glamour_115_aspen04.png'
            });
            g.setNode("glamour_river", {
                g: 2,
                name: 'river',
                node: 'glamour_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/wezglowia/wezglowie_glamour_115_river02.png'
            });
            g.setNode("glamour_eren", {
                g: 2,
                name: 'eren',
                node: 'glamour_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/wezglowia/wezglowie_glamour_115_eren07.png'
            });
            g.setNode("glamour_ontario", {
                g: 2,
                name: 'ontario',
                node: 'glamour_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/wezglowia/wezglowie_glamour_115_ontario90.png'
            });
            g.setNode("glamour_riviera", {
                g: 2,
                name: 'riviera',
                node: 'glamour_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/wezglowia/wezglowie_glamour_115_riviera38.png'
            });

            g.setNode("vintage_colors_7", {});
            g.setNode("vintage_novel", {
                g: 1,
                name: 'novel',
                node: 'vintage_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/wezglowia/wezglowie_vintage_95_novel13.png'
            });
            g.setNode("vintage_roko", {
                g: 1,
                name: 'roko',
                node: 'vintage_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/wezglowia/wezglowie_vintage_95_roko08.png'
            });
            g.setNode("vintage_aspen", {
                g: 1,
                name: 'aspen',
                node: 'vintage_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/wezglowia/wezglowie_vintage_95_aspen04.png'
            });
            g.setNode("vintage_river", {
                g: 2,
                name: 'river',
                node: 'vintage_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/wezglowia/wezglowie_vintage_95_river02.png'
            });
            g.setNode("vintage_eren", {
                g: 2,
                name: 'eren',
                node: 'vintage_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/wezglowia/wezglowie_vintage_95_eren07.png'
            });
            g.setNode("vintage_ontario", {
                g: 2,
                name: 'ontario',
                node: 'vintage_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/wezglowia/wezglowie_vintage_95_ontario90.png'
            });
            g.setNode("vintage_riviera", {
                g: 2,
                name: 'riviera',
                node: 'vintage_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/wezglowia/wezglowie_vintage_95_riviera38.png'
            });

            g.setNode("eclectic_colors_7", {});
            g.setNode("eclectic_novel", {
                g: 1,
                name: 'novel',
                node: 'eclectic_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/wezglowia/wezglowie_eclectic_95_novel13.png'
            });
            g.setNode("eclectic_roko", {
                g: 1,
                name: 'roko',
                node: 'eclectic_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/wezglowia/wezglowie_eclectic_95_roko08.png'
            });
            g.setNode("eclectic_aspen", {
                g: 1,
                name: 'aspen',
                node: 'eclectic_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/wezglowia/wezglowie_eclectic_95_aspen04.png'
            });
            g.setNode("eclectic_river", {
                g: 2,
                name: 'river',
                node: 'eclectic_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/wezglowia/wezglowie_eclectic_95_river02.png'
            });
            g.setNode("eclectic_eren", {
                g: 2,
                name: 'eren',
                node: 'eclectic_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/wezglowia/wezglowie_eclectic_95_eren07.png'
            });
            g.setNode("eclectic_ontario", {
                g: 2,
                name: 'ontario',
                node: 'eclectic_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/wezglowia/wezglowie_eclectic_95_ontario90.png'
            });
            g.setNode("eclectic_riviera", {
                g: 2,
                name: 'riviera',
                node: 'eclectic_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/wezglowia/wezglowie_eclectic_95_riviera38.png'
            });

            g.setNode("ladylike_colors_7", {});
            g.setNode("ladylike_novel", {
                g: 1,
                name: 'novel',
                node: 'ladylike_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/wezglowia/wezglowie_ladylike_115_novel13.png'
            });
            g.setNode("ladylike_roko", {
                g: 1,
                name: 'roko',
                node: 'ladylike_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/wezglowia/wezglowie_ladylike_115_roko08.png'
            });
            g.setNode("ladylike_aspen", {
                g: 1,
                name: 'aspen',
                node: 'ladylike_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/wezglowia/wezglowie_ladylike_115_aspen04.png'
            });
            g.setNode("ladylike_river", {
                g: 2,
                name: 'river',
                node: 'ladylike_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/wezglowia/wezglowie_ladylike_115_river02.png'
            });
            g.setNode("ladylike_eren", {
                g: 2,
                name: 'eren',
                node: 'ladylike_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/wezglowia/wezglowie_ladylike_115_eren07.png'
            });
            g.setNode("ladylike_ontario", {
                g: 2,
                name: 'ontario',
                node: 'ladylike_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/wezglowia/wezglowie_ladylike_115_ontario90.png'
            });
            g.setNode("ladylike_riviera", {
                g: 2,
                name: 'riviera',
                node: 'ladylike_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/wezglowia/wezglowie_ladylike_115_riviera38.png'
            });

            g.setNode("momiko_colors_7", {});
            g.setNode("momiko_novel", {
                g: 1,
                name: 'novel',
                node: 'momiko_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/wezglowia/wezglowie_momiko_95_novel13.png'
            });
            g.setNode("momiko_roko", {
                g: 1,
                name: 'roko',
                node: 'momiko_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/wezglowia/wezglowie_momiko_95_roko08.png'
            });
            g.setNode("momiko_aspen", {
                g: 1,
                name: 'aspen',
                node: 'momiko_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/wezglowia/wezglowie_momiko_95_aspen04.png'
            });
            g.setNode("momiko_river", {
                g: 2,
                name: 'river',
                node: 'momiko_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/wezglowia/wezglowie_momiko_95_river02.png'
            });
            g.setNode("momiko_eren", {
                g: 2,
                name: 'eren',
                node: 'momiko_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/wezglowia/wezglowie_momiko_95_eren07.png'
            });
            g.setNode("momiko_ontario", {
                g: 2,
                name: 'ontario',
                node: 'momiko_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/wezglowia/wezglowie_momiko_95_ontario90.png'
            });
            g.setNode("momiko_riviera", {
                g: 2,
                name: 'riviera',
                node: 'momiko_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/wezglowia/wezglowie_momiko_95_riviera38.png'
            });

            g.setNode("covers_velvet", {});
            g.setNode("cover_velvet", {
                g: 1,
                name: 'velvet',
                node: 'cover_velvet',
                url: 'https://hilding.pl/png/product/velvet_1501504449.jpg',
                render: 'materace/materac_salsa_h31.png'
            });

            g.setNode("covers_velvet_tencel", {});
            g.setNode("cover_tencel", {
                g: 2,
                name: 'tencel',
                node: 'cover_tencel',
                url: 'https://hilding.pl/png/product/tencel_1501504432.jpg',
                render: 'materace/materac_salsa_h31.png'
            });

            g.setNode("covers_merced_elips", {});
            g.setNode("cover_merced_1", {
                g: 1,
                name: 'merced',
                node: 'cover_merced_1',
                url: 'https://hilding.pl/png/product/merced_1501505133.jpg',
                render: 'materace/materac_salsa_h31.png'
            });
            g.setNode("cover_merced_2", {
                g: 2,
                name: 'merced',
                node: 'cover_merced_2',
                url: 'https://hilding.pl/png/product/merced_1501505133.jpg',
                render: 'materace/materac_salsa_h31.png'
            });
            g.setNode("covers_elips_medicott", {});
            g.setNode("cover_elips_1", {
                g: 1,
                name: 'elips',
                node: 'cover_elips_1',
                url: 'https://hilding.pl/png/product/elips_1501505106.jpg',
                render: 'materace/materac_salsa_h31.png'
            });
            g.setNode("cover_elips_2", {
                g: 2,
                name: 'elips',
                node: 'cover_elips_2',
                url: 'https://hilding.pl/png/product/elips_1501505106.jpg',
                render: 'materace/materac_salsa_h31.png'
            });
            g.setNode("cover_medicott", {
                g: 2,
                name: 'medicott velur',
                node: 'cover_medicott',
                url: 'https://hilding.pl/png/product/medicott_velur_1501507379.jpg',
                render: 'materace/materac_salsa_h31.png'
            });

            g.setNode("covers_elips_tencel_top", {});
            g.setNode("cover_elips_top", {
                g: 1,
                name: 'elips',
                node: 'cover_elips_top',
                url: 'https://hilding.pl/png/product/elips_1501505106.jpg',
                render: 'materace/top_blues_h31.png'
            });
            g.setNode("cover_tencel_top", {
                g: 2,
                name: 'tencel',
                node: 'cover_tencel_top',
                url: 'https://hilding.pl/png/product/tencel_1501504432.jpg',
                render: 'materace/top_blues_h31.png'
            });

            g.setNode("covers_fresh", {});
            g.setNode("cover_fresh", {
                g: 1,
                name: 'fresh',
                node: 'cover_fresh',
                url: 'https://hilding.pl/png/product/fresh_1501574622.jpg',
                render: 'materace/materac_salsa_h31.png'
            });

            g.setNode("covers_medicover", {});
            g.setNode("cover_medicover", {
                g: 1,
                name: 'Medi-cover',
                node: 'cover_medicover',
                url: 'https://hilding.pl/png/product/medicott_1501579581.jpg',
                render: 'materace/materac_salsa_h31.png'
            });

            g.setNode("covers_teenage", {});
            g.setNode("cover_teenage", {
                g: 1,
                name: 'Teenage',
                node: 'cover_teenage',
                url: 'https://hilding.pl/png/product/teenage_1501584003.jpg',
                render: 'materace/materac_salsa_h31.png'
            });

            g.setNode("covers_sensity_top", {});
            g.setNode("cover_sensity_top", {
                g: 1,
                name: 'sensity',
                node: 'cover_sensity_top',
                url: 'https://hilding.pl/png/product/fresh_1501574622.jpg',
                render: 'materace/materac_salsa_h31.png'
            });


            g.setNode("m_tap_colors_7", {});
            g.setNode("m_tap_novel", {
                g: 1,
                name: 'novel',
                node: 'm_tap_novel',
                url: 'https://hilding.pl/png/product/Novel_04_stone_1524204873.png',
                render: '/materace/materac_tapicerowany_h31_novel13.png'
            });
            g.setNode("m_tap_roko", {
                g: 1,
                name: 'roko',
                node: 'm_tap_roko',
                url: 'https://hilding.pl/png/product/Roko_08Blue_1524205213.png',
                render: '/materace/materac_tapicerowany_h31_roko08.png'
            });
            g.setNode("m_tap_aspen", {
                g: 1,
                name: 'aspen',
                node: 'm_tap_aspen',
                url: 'https://hilding.pl/png/product/Aspen_04_light_grey_1524138655.png',
                render: '/materace/materac_tapicerowany_h31_aspen04.png'
            });
            g.setNode("m_tap_river", {
                g: 2,
                name: 'river',
                node: 'm_tap_river',
                url: 'https://hilding.pl/png/product/River_02_Silver_1524205043.png',
                render: '/materace/materac_tapicerowany_h31_river02.png'
            });
            g.setNode("m_tap_eren", {
                g: 2,
                name: 'eren',
                node: 'm_tap_eren',
                url: 'https://hilding.pl/png/product/EREN07pink_1524204319.png',
                render: '/materace/materac_tapicerowany_h31_eren07.png'
            });
            g.setNode("m_tap_ontario", {
                g: 2,
                name: 'ontario',
                node: 'm_tap_ontario',
                url: 'https://hilding.pl/png/product/Ontario-90_1524204971.png',
                render: '/materace/materac_tapicerowany_h31_ontario90.png'
            });
            g.setNode("m_tap_riviera", {
                g: 2,
                name: 'riviera',
                node: 'm_tap_riviera',
                url: 'https://hilding.pl/png/product/riviera__38_1524205099.png',
                render: '/materace/materac_tapicerowany_h31_riviera38.png'
            });

            g.setNode("step_2", {
                node: 'step_2',
                title: 'wezgłowie',
                label: 'wybierz wezgłowie',
                number: 2,
                zIndex: 5,
                colors: 'colors_7',
                optionsFilter: true
            });

            g.setNode("glamour", {
                node: 'glamour',
                label: 'Glamour',
                img: 'glamour.jpg',
                render: '/wezglowia/wezglowie_glamour_115_novel13.png',
                colors: 'glamour_colors_7'
            });
            g.setNode("vintage", {
                node: 'vintage',
                label: 'Vintage',
                img: 'vintage.jpg',
                render: '/wezglowia/wezglowie_vintage_95_novel13.png',
                colors: 'vintage_colors_7'
            });
            g.setNode("eclectic", {
                node: 'eclectic',
                label: 'Eclectic',
                img: 'electric.jpg',
                render: '/wezglowia/wezglowie_eclectic_95_novel13.png',
                colors: 'eclectic_colors_7'
            });
            g.setNode("ladylike", {
                node: 'ladylike',
                label: 'Ladylike',
                img: 'ladylike.jpg',
                render: '/wezglowia/wezglowie_ladylike_115_novel13.png',
                colors: 'ladylike_colors_7'
            });
            g.setNode("preppy", {
                node: 'preppy',
                label: 'Preppy',
                img: 'preppy.jpg',
                render: '/wezglowia/wezglowie_preppy_95_novel13.png',
                colors: 'preppy_colors_7'
            });
            g.setNode("momiko", {
                node: 'momiko',
                label: 'Momiko',
                img: 'momiko.jpg',
                render: '/wezglowia/wezglowie_momiko_95_novel13.png',
                colors: 'momiko_colors_7'
            });
            g.setNode("urban", {
                node: 'urban',
                label: 'Urban',
                img: 'urban.jpg',
                render: '/wezglowia/wezglowie_urban_95_novel13.png',
                colors: 'urban_colors_7'
            });

            g.setNode("urban_140_95", {label: '140/95', width: 140, price: {g1: 749, g2: 849}, nextStep: 'step_typ_materaca'});
            g.setNode("urban_160_95", {label: '160/95', width: 160, price: {g1: 799, g2: 899}, nextStep: 'step_typ_materaca'});
            g.setNode("urban_180_95", {label: '180/95', width: 180, price: {g1: 899, g2: 999}, nextStep: 'step_typ_materaca'});
            g.setNode("urban_200_95", {label: '200/95', width: 200, price: {g1: 999, g2: 1099}, nextStep: 'step_typ_materaca'});

            g.setNode("urban_140_115", {label: '140/115', width: 140, price: {g1: 799, g2: 899}, nextStep: 'step_typ_materaca'});
            g.setNode("urban_160_115", {label: '160/115', width: 160, price: {g1: 849, g2: 949}, nextStep: 'step_typ_materaca'});
            g.setNode("urban_180_115", {label: '180/115', width: 180, price: {g1: 949, g2: 1049}, nextStep: 'step_typ_materaca'});
            g.setNode("urban_200_115", {label: '200/115', width: 200, price: {g1: 1049, g2: 1149}, nextStep: 'step_typ_materaca'});

            g.setNode("preppy_140_95", {label: '140/95', width: 140, price: {g1: 1169, g2: 1269}, nextStep: 'step_typ_materaca'});
            g.setNode("preppy_160_95", {label: '160/95', width: 160, price: {g1: 1199, g2: 1299}, nextStep: 'step_typ_materaca'});
            g.setNode("preppy_180_95", {label: '180/95', width: 180, price: {g1: 1299, g2: 1399}, nextStep: 'step_typ_materaca'});
            g.setNode("preppy_200_95", {label: '200/95', width: 200, price: {g1: 1399, g2: 1499}, nextStep: 'step_typ_materaca'});

            g.setNode("preppy_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 1269, g2: 1369},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("preppy_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 1299, g2: 1399},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("preppy_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1399, g2: 1499},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("preppy_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1599, g2: 1699},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("glamour_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 1369, g2: 1469},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("glamour_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 1399, g2: 1499},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("glamour_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1559, g2: 1659},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("glamour_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1699, g2: 1799},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("vintage_140_95", {label: '140/95', width: 140, price: {g1: 1029, g2: 1129}, nextStep: 'step_typ_materaca'});
            g.setNode("vintage_160_95", {label: '160/95', width: 160, price: {g1: 1059, g2: 1159}, nextStep: 'step_typ_materaca'});
            g.setNode("vintage_180_95", {label: '180/95', width: 180, price: {g1: 1159, g2: 1259}, nextStep: 'step_typ_materaca'});
            g.setNode("vintage_200_95", {label: '200/95', width: 200, price: {g1: 1259, g2: 1359}, nextStep: 'step_typ_materaca'});

            g.setNode("vintage_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 1169, g2: 1269},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("vintage_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 1199, g2: 1299},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("vintage_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1299, g2: 1399},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("vintage_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1499, g2: 1599},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("momiko_140_95", {label: '140/95', width: 140, price: {g1: 869, g2: 969}, nextStep: 'step_typ_materaca'});
            g.setNode("momiko_160_95", {label: '160/95', width: 160, price: {g1: 899, g2: 999}, nextStep: 'step_typ_materaca'});
            g.setNode("momiko_180_95", {label: '180/95', width: 180, price: {g1: 999, g2: 1099}, nextStep: 'step_typ_materaca'});
            g.setNode("momiko_200_95", {label: '200/95', width: 200, price: {g1: 1099, g2: 1199}, nextStep: 'step_typ_materaca'});

            g.setNode("momiko_140_115", {label: '140/115', width: 140, price: {g1: 969, g2: 1069}, nextStep: 'step_typ_materaca'});
            g.setNode("momiko_160_115", {label: '160/115', width: 160, price: {g1: 999, g2: 1099}, nextStep: 'step_typ_materaca'});
            g.setNode("momiko_180_115", {label: '180/115', width: 180, price: {g1: 1099, g2: 1199}, nextStep: 'step_typ_materaca'});
            g.setNode("momiko_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1259, g2: 1359},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("eclectic_140_95", {
                label: '140/95',
                width: 140,
                price: {g1: 969, g2: 1069},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("eclectic_160_95", {
                label: '160/95',
                width: 160,
                price: {g1: 999, g2: 1099},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("eclectic_180_95", {
                label: '180/95',
                width: 180,
                price: {g1: 1099, g2: 1199},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("eclectic_200_95", {
                label: '200/95',
                width: 200,
                price: {g1: 1259, g2: 1359},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("eclectic_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 1069, g2: 1169},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("eclectic_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 1099, g2: 1199},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("eclectic_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1199, g2: 1299},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("eclectic_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1399, g2: 1499},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("ladylike_140_115", {
                label: '140/115',
                width: 140,
                price: {g1: 969, g2: 1069},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ladylike_160_115", {
                label: '160/115',
                width: 160,
                price: {g1: 999, g2: 1099},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ladylike_180_115", {
                label: '180/115',
                width: 180,
                price: {g1: 1099, g2: 1199},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ladylike_200_115", {
                label: '200/115',
                width: 200,
                price: {g1: 1259, g2: 1359},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("step_3", {
                node: 'step_3',
                title: 'nóżki',
                label: 'wybierz nożki',
                number: 3,
                zIndex: 3,
                optionsFilter: false
            });

            g.setNode("stozek_owal_buk", {
                label: 'Stożek owal buk',
                img: 'stozek_owal_buk.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_owal_dab", {
                label: 'Stożek owal dąb',
                img: 'stozek_owal_dab.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_owal_wenge", {
                label: 'Stożek owal wenge',
                img: 'stozek_owal_wenge.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_skos_buk", {
                label: 'Stożek skos buk',
                img: 'stozek_skos_buk.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_skos_dab", {
                label: 'Stożek skos dąb',
                img: 'stozek_skos_dab.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_skos_wenge", {
                label: 'Stożek skos wenge',
                img: 'stozek_skos_wenge.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_ze_stopka_czern", {
                label: 'Stożek ze stópką czerń',
                img: 'stozek_ze_stopka_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_ze_stopka_miedz", {
                label: 'Stożek ze stópką miedź',
                img: 'stozek_ze_stopka_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_ze_stopka_srebro", {
                label: 'Stożek ze stópką srebro',
                img: 'stozek_ze_stopka_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_prosty_czern", {
                label: 'Trójkąt prosty czerń',
                img: 'trojkat_prosty_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_prosty_miedz", {
                label: 'Trójkąt prosty miedź',
                img: 'trojkat_prosty_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_prosty_srebro", {
                label: 'Trójkąt prosty srebro',
                img: 'trojkat_prosty_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_skosny_czern", {
                label: 'Trójkąt skośny czerń',
                img: 'trojkat_skosny_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_skosny_miedz", {
                label: 'Trójkąt skośny miedź',
                img: 'trojkat_skosny_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("trojkat_skosny_srebro", {
                label: 'Trójkąt skośny srebro',
                img: 'trojkat_skosny_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("walek_czern", {
                label: 'Wałek czerń',
                img: 'walek_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("walek_czern", {
                label: 'Wałek czerń',
                img: 'walek_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("walek_miedz", {
                label: 'Wałek miedź',
                img: 'walek_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("walek_srebro", {
                label: 'Wałek srebro',
                img: 'walek_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("kielich_czern", {
                label: 'Kielich czerń',
                img: 'kielich_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("kielich_miedz", {
                label: 'Kielich miedź',
                img: 'kielich_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("kielich_srebro", {
                label: 'Kielich srebro',
                img: 'kielich_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("naroznik_czern", {
                label: 'Narożnik czerń',
                img: 'naroznik_czern.jpg',
                render: 'n04_03.png'
            });

            g.setNode("naroznik_miedz", {
                label: 'Narożnik miedź',
                img: 'naroznik_miedz.jpg',
                render: 'n04_03.png'
            });

            g.setNode("naroznik_srebro", {
                label: 'Narożnik srebro',
                img: 'naroznik_srebro.jpg',
                render: 'n04_03.png'
            });

            g.setNode("ploza_buk", {
                label: 'Płoza buk',
                img: 'ploza_buk.jpg',
                render: 'n04_03.png'
            });
            g.setNode("ploza_dab", {
                label: 'Płoza dąb',
                img: 'ploza_dab.jpg',
                render: 'n04_03.png'
            });
            g.setNode("ploza_wenge", {
                label: 'Płoza wenge',
                img: 'ploza_wenge.jpg',
                render: 'n04_03.png'
            });

            g.setNode("stozek_owal_buk_16", {
                label: '200/95',
                price: {g1: 101.0, g2: 101.0},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_owal_wenge_16", {
                label: '200/95',
                price: {g1: 101.0, g2: 101.0},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_owal_dab_16", {
                label: '200/95',
                price: {g1: 132.0, g2: 132.0},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_skos_buk_16", {
                label: '200/95',
                price: {g1: 36.0, g2: 36.0},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_skos_dab_16", {
                label: '200/95',
                price: {g1: 50, g2: 50},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_skos_wenge_16", {
                label: '200/95',
                price: {g1: 36, g2: 36},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_ze_stopka_czern_16", {
                label: '200/95',
                price: {g1: 173, g2: 173},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_ze_stopka_miedz_16", {
                label: '200/95',
                price: {g1: 211, g2: 211},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("stozek_ze_stopka_srebro_16", {
                label: '200/95',
                price: {g1: 163, g2: 163},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_prosty_czern_16", {
                label: '200/95',
                price: {g1: 108, g2: 108},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_prosty_miedz_16", {
                label: '200/95',
                price: {g1: 175, g2: 175},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_prosty_srebro_16", {
                label: '200/95',
                price: {g1: 115, g2: 115},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_skosny_czern_16", {
                label: '200/95',
                price: {g1: 136, g2: 136},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_skosny_miedz_16", {
                label: '200/95',
                price: {g1: 208, g2: 208},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("trojkat_skosny_srebro_16", {
                label: '200/95',
                price: {g1: 145, g2: 145},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("walek_czern_16", {
                label: '200/95',
                price: {g1: 55, g2: 55},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("walek_miedz_16", {
                label: '200/95',
                price: {g1: 88, g2: 88},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("walek_srebro_16", {
                label: '200/95',
                price: {g1: 61, g2: 61},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("kielich_czern_16", {
                label: '200/95',
                price: {g1: 173, g2: 173},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("kielich_miedz_16", {
                label: '200/95',
                price: {g1: 211, g2: 211},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("kielich_srebro_16", {
                label: '200/95',
                price: {g1: 173, g2: 173},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("naroznik_czern_16", {
                label: '200/95',
                price: {g1: 92, g2: 92},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("naroznik_miedz_16", {
                label: '200/95',
                price: {g1: 138, g2: 138},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("naroznik_srebro_16", {
                label: '200/95',
                price: {g1: 114, g2: 114},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ploza_buk_16", {
                label: '200/95',
                price: {g1: 132, g2: 132},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ploza_dab_16", {
                label: '200/95',
                price: {g1: 132, g2: 132},
                nextStep: 'step_typ_materaca'
            });
            g.setNode("ploza_wenge_16", {
                label: '200/95',
                price: {g1: 132, g2: 132},
                nextStep: 'step_typ_materaca'
            });

            g.setNode("step_typ_materaca", {
                node: 'step_typ_materaca',
                title: 'typ materac',
                label: 'wybierz typ materaca',
                number: 3,
                zIndex: 25,
                skipToNode: 'step_5'
            });

            g.setNode("materac_pokrowiec", {
                label: 'W pokrowcu',
                img: 'velvet.jpg',
                render: 'transparent.png'
            });

            g.setNode("materac_tapicerowany", {
                label: 'Tapicerowany',
                img: 'aspen_04.png',
                render: 'transparent.png'
            });

            g.setNode("materac_pokrowiec_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'step_pokrowiec'});
            g.setNode("materac_tapicerowany_1", {label: '', price: {g1: 0, g2: 0}, nextStep: 'step_tapicerowany'});

            g.setNode("step_pokrowiec", {
                node: 'step_pokrowiec',
                title: 'materac w pokrowcu',
                label: 'wybierz materac w pokrowcu',
                number: 3,
                zIndex: 25,
                skipToNode: 'step_5',
                optionsFilter: true
            });
            g.setNode("step_tapicerowany", {
                node: 'step_tapicerowany',
                title: 'materac tapicerowany',
                label: 'wybierz materac tapicerowany',
                number: 3,
                zIndex: 25,
                skipToNode: 'step_5',
                optionsFilter: true
            });

            g.setNode("step_4", {
                node: 'step_4',
                title: 'materac',
                label: 'wybierz materac',
                number: 3,
                zIndex: 25,
                skipToNode: 'step_5',
                optionsFilter: true
            });

            g.setNode("materac_tango", {
                node: 'materac_tango',
                label: 'Tango',
                img: 'tango.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_velvet_tencel'
            });
            g.setNode("materac_step", {
                node: 'materac_step',
                label: 'Step',
                img: 'step.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_fresh'
            });
            g.setNode("materac_salsa", {
                node: 'materac_salsa',
                label: 'Salsa',
                img: 'salsa.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_medicover'
            });
            g.setNode("materac_chacha", {
                node: 'materac_chacha',
                label: 'Cha-Cha',
                img: 'cha-cha.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_velvet'
            });
            g.setNode("materac_pasodoble", {
                node: 'materac_pasodoble',
                label: 'Pasodoble',
                img: 'pasadoble.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_velvet_tencel'
            });
            g.setNode("materac_flamenco", {
                node: 'materac_flamenco',
                label: 'Flamenco',
                img: 'flamenco.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_velvet_tencel'
            });
            g.setNode("materac_makarena", {
                node: 'materac_makarena',
                label: 'Makarena',
                img: 'makarena.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_merced_elips'
            });
            g.setNode("materac_rockroll", {
                node: 'materac_rockroll',
                label: 'Rock & Roll',
                img: 'cha-cha.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_velvet_tencel'
            });
            g.setNode("materac_foxtrot", {
                node: 'materac_foxtrot',
                label: 'Foxtrot',
                img: 'foxtrot.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_velvet'
            });
            g.setNode("materac_mambo", {
                node: 'materac_mambo',
                label: 'Mambo',
                img: 'mambo.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_merced_elips'
            });
            g.setNode("materac_rumba", {
                node: 'materac_rumba',
                label: 'Rumba',
                img: 'rumba.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_elips_medicott'
            });
            g.setNode("materac_latino", {
                node: 'materac_latino',
                label: 'Latino',
                img: 'latino.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_merced_elips'
            });
            g.setNode("materac_fandango", {
                node: 'materac_fandango',
                label: 'Fandango',
                img: 'salsa.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_medicover'
            });
            g.setNode("materac_zorba", {
                node: 'materac_zorba',
                label: 'Zorba',
                img: 'zorba.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_medicover'
            });
            g.setNode("materac_breakdance", {
                node: 'materac_breakdance',
                label: 'Breakdance',
                img: 'breakdance.jpg',
                render: 'materace/materac_salsa_h31.png',
                cover: 'covers_teenage'
            });


            g.setNode("materac_foxtrot_tapicerowany", {
                node: 'materac_foxtrot_tapicerowany',
                label: 'Foxtrot',
                img: 'foxtrot.jpg',
                render: 'materace/materac_tapicerowany_h31_novel13.png',
                colors: 'm_tap_colors_7'
            });
            g.setNode("materac_chacha_tapicerowany", {
                node: 'materac_chacha_tapicerowany',
                label: 'Cha-Cha',
                img: 'cha-cha.jpg',
                render: 'materace/materac_tapicerowany_h31_novel13.png',
                colors: 'm_tap_colors_7'
            });
            g.setNode("materac_flamenco_tapicerowany", {
                node: 'materac_flamenco_tapicerowany',
                label: 'Flamenco',
                img: 'flamenco.jpg',
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
                price: {g1: 3059, g2: 3059},
                nextStep: 'step_5'
            });
            g.setNode("materac_makarena_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 3399, g2: 3399},
                nextStep: 'step_5'
            });
            g.setNode("materac_makarena_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 3749, g2: 3749},
                nextStep: 'step_5'
            });
            g.setNode("materac_makarena_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 5118, g2: 5118},
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

            g.setNode("materac_mambo_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 2429, g2: 2429},
                nextStep: 'step_5'
            });
            g.setNode("materac_mambo_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2699, g2: 2699},
                nextStep: 'step_5'
            });
            g.setNode("materac_mambo_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 2929, g2: 2929},
                nextStep: 'step_5'
            });
            g.setNode("materac_mambo_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 3898, g2: 3898},
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

            g.setNode("materac_latino_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 2699, g2: 2699},
                nextStep: 'step_5'
            });
            g.setNode("materac_latino_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 2999, g2: 2999},
                nextStep: 'step_5'
            });
            g.setNode("materac_latino_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 3279, g2: 3279},
                nextStep: 'step_5'
            });
            g.setNode("materac_latino_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 4518, g2: 4518},
                nextStep: 'step_5'
            });

            g.setNode("materac_fandango_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 929, g2: 929},
                nextStep: 'step_5'
            });
            g.setNode("materac_fandango_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1049, g2: 1049},
                nextStep: 'step_5'
            });
            g.setNode("materac_fandango_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1159, g2: 1159},
                nextStep: 'step_5'
            });
            g.setNode("materac_fandango_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1518, g2: 1518},
                nextStep: 'step_5'
            });

            g.setNode("materac_zorba_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 999, g2: 999},
                nextStep: 'step_5'
            });
            g.setNode("materac_zorba_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1099, g2: 1099},
                nextStep: 'step_5'
            });
            g.setNode("materac_zorba_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1219, g2: 1219},
                nextStep: 'step_5'
            });
            g.setNode("materac_zorba_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1598, g2: 1598},
                nextStep: 'step_5'
            });

            g.setNode("materac_breakdance_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 1079, g2: 1079},
                nextStep: 'step_5'
            });
            g.setNode("materac_breakdance_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 1199, g2: 1199},
                nextStep: 'step_5'
            });
            g.setNode("materac_breakdance_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 1438, g2: 1438},
                nextStep: 'step_5'
            });
            g.setNode("materac_breakdance_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1918, g2: 1918},
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
                nextStep: 'step_5'
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
                nextStep: 'step_5'
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
                nextStep: 'step_5'
            });


            g.setNode("step_5", {
                node: 'step_5',
                title: 'materac nawierzchniowy',
                label: 'wybierz materac nawierzchniowy',
                number: 4,
                zIndex: 30,
                skipToNode: 'step_6',
                optionsFilter: true
            });

            g.setNode("materac_select_plus", {
                node: 'materac_select_plus',
                label: 'Select Plus Softex',
                img: 'jive.jpg',
                render: 'materace/top_blues_h31.png',
                cover: 'covers_sensity_top'
            });

            g.setNode("materac_blues", {
                node: 'materac_blues',
                label: 'Blues',
                img: 'blues.jpg',
                render: 'materace/top_blues_h31.png',
                cover: 'covers_elips_tencel_top'
            });


            g.setNode("materac_jive", {
                node: 'materac_jive',
                label: 'Jive',
                img: 'jive.jpg',
                render: 'materace/top_blues_h31.png',
                cover: 'covers_elips_tencel_top'
            });

            g.setNode("materac_select_top", {
                node: 'materac_select_top',
                label: 'Select TOP',
                img: 'jive.jpg',
                render: 'materace/top_blues_h31.png',
                cover: 'covers_sensity_top'
            });

            g.setNode("materac_blues_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 719, g2: 719},
                nextStep: 'step_6'
            });
            g.setNode("materac_blues_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 799, g2: 799},
                nextStep: 'step_6'
            });
            g.setNode("materac_blues_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 879, g2: 879},
                nextStep: 'step_6'
            });
            g.setNode("materac_blues_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1079, g2: 1079},
                nextStep: 'step_6'
            });

            g.setNode("materac_jive_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 449, g2: 449},
                nextStep: 'step_6'
            });
            g.setNode("materac_jive_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 499, g2: 499},
                nextStep: 'step_6'
            });
            g.setNode("materac_jive_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 579, g2: 579},
                nextStep: 'step_6'
            });
            g.setNode("materac_jive_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 749, g2: 749},
                nextStep: 'step_6'
            });

            g.setNode("materac_select_plus_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 679, g2: 679},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_plus_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 749, g2: 749},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_plus_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 819, g2: 819},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_plus_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1039, g2: 1039},
                nextStep: 'step_6'
            });

            g.setNode("materac_select_top_140_200", {
                label: '140/200',
                width: 140,
                price: {g1: 819, g2: 819},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_top_160_200", {
                label: '160/200',
                width: 160,
                price: {g1: 899, g2: 899},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_top_180_200", {
                label: '180/200',
                width: 180,
                price: {g1: 999, g2: 999},
                nextStep: 'step_6'
            });
            g.setNode("materac_select_top_200_200", {
                label: '200/200',
                width: 200,
                price: {g1: 1229, g2: 1229},
                nextStep: 'step_6'
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


            g.nodes();


            g.setEdge("loadLevel", "step_1");

            g.setEdge("step_1", "base_box");
            g.setEdge("step_1", "box_podnoszony");
            g.setEdge("step_1", "baza_kontynentalna");
            g.setEdge("step_1", "baza_kontynentalna_z_szuflada");
            g.setEdge("step_1", "baza_tapicerowana");

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
            g.setEdge("kontynent_colors_7", "kontynent_riviera")

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

            g.setEdge("m_tap_colors_7", "m_tap_novel");
            g.setEdge("m_tap_colors_7", "m_tap_roko");
            g.setEdge("m_tap_colors_7", "m_tap_aspen");
            g.setEdge("m_tap_colors_7", "m_tap_river");
            g.setEdge("m_tap_colors_7", "m_tap_eren");
            g.setEdge("m_tap_colors_7", "m_tap_ontario");
            g.setEdge("m_tap_colors_7", "m_tap_riviera");

            g.setEdge("step_2", "urban");
            g.setEdge("step_2", "preppy");
            g.setEdge("step_2", "glamour");
            g.setEdge("step_2", "vintage");
            g.setEdge("step_2", "eclectic");
            g.setEdge("step_2", "ladylike");
            g.setEdge("step_2", "momiko");

            g.setEdge("urban", "urban_140_95");
            g.setEdge("urban", "urban_160_95");
            g.setEdge("urban", "urban_180_95");
            g.setEdge("urban", "urban_200_95");

            g.setEdge("urban", "urban_140_115");
            g.setEdge("urban", "urban_160_115");
            g.setEdge("urban", "urban_180_115");
            g.setEdge("urban", "urban_200_115");

            g.setEdge("preppy", "preppy_140_95");
            g.setEdge("preppy", "preppy_160_95");
            g.setEdge("preppy", "preppy_180_95");
            g.setEdge("preppy", "preppy_200_95");

            g.setEdge("preppy", "preppy_140_115");
            g.setEdge("preppy", "preppy_160_115");
            g.setEdge("preppy", "preppy_180_115");
            g.setEdge("preppy", "preppy_200_115");

            g.setEdge("glamour", "glamour_140_115");
            g.setEdge("glamour", "glamour_160_115");
            g.setEdge("glamour", "glamour_180_115");
            g.setEdge("glamour", "glamour_200_115");

            g.setEdge("vintage", "vintage_140_95");
            g.setEdge("vintage", "vintage_160_95");
            g.setEdge("vintage", "vintage_180_95");
            g.setEdge("vintage", "vintage_200_95");

            g.setEdge("vintage", "vintage_140_115");
            g.setEdge("vintage", "vintage_160_115");
            g.setEdge("vintage", "vintage_180_115");
            g.setEdge("vintage", "vintage_200_115");

            g.setEdge("momiko", "momiko_140_95");
            g.setEdge("momiko", "momiko_160_95");
            g.setEdge("momiko", "momiko_180_95");
            g.setEdge("momiko", "momiko_200_95");

            g.setEdge("momiko", "momiko_140_115");
            g.setEdge("momiko", "momiko_160_115");
            g.setEdge("momiko", "momiko_180_115");
            g.setEdge("momiko", "momiko_200_115");

            g.setEdge("eclectic", "eclectic_140_95");
            g.setEdge("eclectic", "eclectic_160_95");
            g.setEdge("eclectic", "eclectic_180_95");
            g.setEdge("eclectic", "eclectic_200_95");

            g.setEdge("eclectic", "eclectic_140_115");
            g.setEdge("eclectic", "eclectic_160_115");
            g.setEdge("eclectic", "eclectic_180_115");
            g.setEdge("eclectic", "eclectic_200_115");

            g.setEdge("ladylike", "ladylike_140_115");
            g.setEdge("ladylike", "ladylike_160_115");
            g.setEdge("ladylike", "ladylike_180_115");
            g.setEdge("ladylike", "ladylike_200_115");

            g.setEdge("step_3", "stozek_owal_buk");
            g.setEdge("step_3", "stozek_owal_dab");
            g.setEdge("step_3", "stozek_owal_wenge");
            g.setEdge("step_3", "stozek_skos_buk");
            g.setEdge("step_3", "stozek_skos_dab");
            g.setEdge("step_3", "stozek_skos_wenge");
            g.setEdge("step_3", "stozek_ze_stopka_czern");
            g.setEdge("step_3", "stozek_ze_stopka_miedz");
            g.setEdge("step_3", "stozek_ze_stopka_srebro");
            g.setEdge("step_3", "trojkat_prosty_czern");
            g.setEdge("step_3", "trojkat_prosty_miedz");
            g.setEdge("step_3", "trojkat_prosty_srebro");
            g.setEdge("step_3", "trojkat_skosny_czern");
            g.setEdge("step_3", "trojkat_skosny_miedz");
            g.setEdge("step_3", "trojkat_skosny_srebro");
            g.setEdge("step_3", "walek_srebro");
            g.setEdge("step_3", "walek_miedz");
            g.setEdge("step_3", "walek_srebro");
            g.setEdge("step_3", "kielich_czern");
            g.setEdge("step_3", "kielich_miedz");
            g.setEdge("step_3", "kielich_srebro");
            g.setEdge("step_3", "naroznik_czern");
            g.setEdge("step_3", "naroznik_miedz");
            g.setEdge("step_3", "naroznik_srebro");
            g.setEdge("step_3", "ploza_dab");
            g.setEdge("step_3", "ploza_buk");
            g.setEdge("step_3", "ploza_wenge");


            g.setEdge("stozek_owal_buk", "stozek_owal_buk_16");
            g.setEdge("stozek_owal_wenge", "stozek_owal_wenge_16");
            g.setEdge("stozek_owal_dab", "stozek_owal_dab_16");
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
            g.setEdge("ploza_dab", "ploza_dab_16");
            g.setEdge("ploza_buk", "ploza_buk_16");
            g.setEdge("ploza_wenge", "ploza_wenge_16");

            g.setEdge("step_typ_materaca", "materac_pokrowiec");
            g.setEdge("step_typ_materaca", "materac_tapicerowany");

            g.setEdge("materac_pokrowiec", "materac_pokrowiec_1");
            g.setEdge("materac_tapicerowany", "materac_tapicerowany_1");

            g.setEdge("step_4", "materac_tango");
            g.setEdge("step_4", "materac_step");
            g.setEdge("step_4", "materac_pasodoble");
            g.setEdge("step_4", "materac_makarena");
            g.setEdge("step_4", "materac_rockroll");
            g.setEdge("step_4", "materac_mambo");
            g.setEdge("step_4", "materac_rumba");
            g.setEdge("step_4", "materac_latino");

            g.setEdge("step_4", "materac_chacha");
            g.setEdge("step_4", "materac_foxtrot");
            g.setEdge("step_4", "materac_flamenco");

            g.setEdge("step_tapicerowany", "materac_foxtrot_tapicerowany");
            g.setEdge("step_tapicerowany", "materac_chacha_tapicerowany");
            g.setEdge("step_tapicerowany", "materac_flamenco_tapicerowany");

            g.setEdge("step_pokrowiec", "materac_tango");
            g.setEdge("step_pokrowiec", "materac_step");
            g.setEdge("step_pokrowiec", "materac_pasodoble");
            g.setEdge("step_pokrowiec", "materac_makarena");
            g.setEdge("step_pokrowiec", "materac_rockroll");
            g.setEdge("step_pokrowiec", "materac_mambo");
            g.setEdge("step_pokrowiec", "materac_rumba");
            g.setEdge("step_pokrowiec", "materac_latino");
            g.setEdge("step_pokrowiec", "materac_foxtrot");
            g.setEdge("step_pokrowiec", "materac_chacha");
            g.setEdge("step_pokrowiec", "materac_flamenco");
            g.setEdge("step_pokrowiec", "materac_fandango");
            g.setEdge("step_pokrowiec", "materac_zorba");
            g.setEdge("step_pokrowiec", "materac_breakdance");

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

            g.setEdge("materac_mambo", "materac_mambo_140_200");
            g.setEdge("materac_mambo", "materac_mambo_160_200");
            g.setEdge("materac_mambo", "materac_mambo_180_200");
            g.setEdge("materac_mambo", "materac_mambo_200_200");

            g.setEdge("materac_rumba", "materac_rumba_140_200");
            g.setEdge("materac_rumba", "materac_rumba_160_200");
            g.setEdge("materac_rumba", "materac_rumba_180_200");
            g.setEdge("materac_rumba", "materac_rumba_200_200");

            g.setEdge("materac_latino", "materac_latino_140_200");
            g.setEdge("materac_latino", "materac_latino_160_200");
            g.setEdge("materac_latino", "materac_latino_180_200");
            g.setEdge("materac_latino", "materac_latino_200_200");

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

            g.setEdge("step_5", "materac_select_plus");
            g.setEdge("step_5", "materac_blues");
            g.setEdge("step_5", "materac_jive");
            g.setEdge("step_5", "materac_select_top");

            g.setEdge("materac_blues", "materac_blues_140_200");
            g.setEdge("materac_blues", "materac_blues_160_200");
            g.setEdge("materac_blues", "materac_blues_180_200");
            g.setEdge("materac_blues", "materac_blues_200_200");

            g.setEdge("materac_jive", "materac_jive_140_200");
            g.setEdge("materac_jive", "materac_jive_160_200");
            g.setEdge("materac_jive", "materac_jive_180_200");
            g.setEdge("materac_jive", "materac_jive_200_200");

            g.setEdge("materac_select_top", "materac_select_top_140_200");
            g.setEdge("materac_select_top", "materac_select_top_160_200");
            g.setEdge("materac_select_top", "materac_select_top_180_200");
            g.setEdge("materac_select_top", "materac_select_top_200_200");

            g.setEdge("materac_select_plus", "materac_select_plus_140_200");
            g.setEdge("materac_select_plus", "materac_select_plus_160_200");
            g.setEdge("materac_select_plus", "materac_select_plus_180_200");
            g.setEdge("materac_select_plus", "materac_select_plus_200_200");

            g.setEdge("covers_velvet_tencel","cover_velvet");
            g.setEdge("covers_velvet_tencel","cover_tencel");

            g.setEdge("covers_velvet","cover_velvet");

            g.setEdge("covers_elips_medicott","cover_medicott");
            g.setEdge("covers_elips_medicott","cover_elips_1");

            g.setEdge("covers_fresh","cover_fresh");
            g.setEdge("covers_medicover","cover_medicover");
            g.setEdge("covers_teenage","cover_teenage");
            g.setEdge("covers_merced_elips","cover_merced_1");
            g.setEdge("covers_merced_elips","cover_elips_2");
            g.setEdge("covers_elips_tencel_top","cover_elips_top");
            g.setEdge("covers_elips_tencel_top","cover_tencel_top");
            g.setEdge("covers_sensity_top","cover_sensity_top");

            g.setEdge("step_6", "otomana");

            g.setEdge("otomana", "otomana_140");
            g.setEdge("otomana", "otomana_160");
            g.setEdge("otomana", "otomana_180");


            // var serialized = graphlib.json.write(g);

            var base = new Step(1, "bazę", false, 'baza kontynetalna_roko08.png');
            configurator = new Configurator(base, g);
        }
    )
;