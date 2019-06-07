class Step {


    constructor(number, title, skipEnable, optionsFilter) {
        this.number = number;
        this.title = title;
        this.previous = null;
        this.skipEnable = skipEnable;
        this.optionsFilter = optionsFilter;
        this.selectedNodes = [];
    }
}

class Configurator {
    constructor(graph) {
        this.step = null;
        this.graph = graph;
        this.allSteps = [];
        this.stepIndex = 0;
        this.width = 0;
        this.selectedColor = undefined;
    }

    numberWithSpaces(x) {
        x = x.toFixed(2);
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(",");
    }

    nextStep() {
        var selectedNode = this.step.selectedNodes[2];
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
        var currentMainNode = this.allSteps[this.stepIndex].selectedNodes[0];
        if (currentMainNode !== undefined) {
            if (currentMainNode.overlay !== undefined) {
                $('#render-overlay-' + currentMainNode.node).remove();
            }
            $('#render-' + currentMainNode.node).remove();
        }

        this.allSteps.pop();
        this.stepIndex = this.stepIndex - 1;
        var previousStepNode = this.allSteps[this.stepIndex].selectedNodes[0];
        if (previousStepNode !== undefined) {
            if (previousStepNode.overlay !== undefined) {
                $('#render-overlay-' + previousStepNode.node).remove();
            }
            $('#render-' + previousStepNode.node).remove();
        }

        this.allSteps[this.stepIndex].selectedNodes = [];
        this.showPrice();
        this.loadLevel(previousStepNode.node);
    }

    skipStep() {
        var selectedNode = this.step.selectedNodes[0];
        this.stepIndex = this.stepIndex + 1;
        if (selectedNode.skipToNode == 'summary') {
            this.loadSummary();
        } else {
            this.loadLevel(selectedNode.skipToNode);

        }
    }

    start() {
        $('#start-img').remove();
        $('#configurator-section').show();
        this.loadLevel("step_1");
    }

    repeat() {
        // this.step = null;
        this.allSteps = [];
        this.stepIndex = 0;
        this.width = 0;
        this.selectedColor = undefined;
        $("img[id^='render-']").remove();
        $('#reload').hide();
        this.start();
    }

    refresh(node) {
        $('#step-number').text('Krok ' + node.number);
        $('#step-title').text(node.label);
        let $previousStep = $("#previous-step");
        let $previousStepXs = $("#previous-step-xs");
        if (this.allSteps[this.stepIndex - 1] == null) {
            $previousStep.hide();
            $previousStepXs.hide();
        } else {
            $previousStepXs.show();
            $previousStep.show();
            $previousStep.text('<< poprzedni krok: ' + this.allSteps[this.stepIndex - 1].title);
        }

        let $nextStep = $('#next-step');
        let $nextStepXs = $('#next-step-xs');
        if (this.step.skipEnable !== undefined) {
            $nextStepXs.show();
            $nextStep.show();
            $nextStep.text('pomiń ten krok >>');
            $nextStep.attr("onclick", "configurator.skipStep()").attr("style", "color:red");
            $nextStepXs.text('pomiń >>');
            $nextStepXs.attr("onclick", "configurator.skipStep()").attr("style", "background-color:#ea4335");

        } else {
            $nextStep.hide();
            $nextStepXs.hide();
        }
    }

    loadLevel(step) {

        this.showStepInfo();
        $('#next-step').hide();
        $('#next-step-xs').hide();
        $('#item-color').remove();
        $('#example-visualization-info').html('');

        var starNode = this.graph.node(step);
        this.step = new Step(starNode.number, starNode.title, starNode.skipToNode, starNode.optionsFilter);
        this.step.selectedNodes[0] = starNode;
        // this.graph
        var successors = this.graph.successors(step);
        var stepElement = $('#step-content');
        stepElement.html('');
        var divElement = stepElement.append($('<div>').addClass("configurator-base-carousel owl-carousel"));
        var items = 3;
        var center = false;
        var margin = 0;
        var loop = true;
        if (successors.length === 3) {
            items = 3;
            margin = 100;
            loop = false;
        } else if (successors.length < 3) {
            items = 3;
            center = true;
            loop = false;
        }
        var carousel = $('.configurator-base-carousel').owlCarousel({
            center: center,
            loop: false,
            nav: true,
            mouseDrag: false,
            dots: false,
            navText: ['<i class="svg prev"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-198 322.5 197.4 197.4" style="enable-background:new -198 322.5 197.4 197.4;" xml:space="preserve"> <g> <g> <g> <g> <polygon class="st0" points="-147.7,514.9 -50.1,420.1 -147.7,325.4 -152.7,330.6 -60.5,420.1 -152.7,509.7 "/> <path d="M-147.7,518.4l-8.5-8.8l92.1-89.5l-92.1-89.5l8.5-8.8l101.2,98.3L-147.7,518.4z M-149.2,509.7l1.6,1.6l93.9-91.2 l-93.9-91.2l-1.6,1.6l92.3,89.6L-149.2,509.7z"/></g></g></g></g></svg></i>', '<i class="svg next"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-198 322.5 197.4 197.4" style="enable-background:new -198 322.5 197.4 197.4;" xml:space="preserve"> <g> <g> <g> <g> <polygon class="st0" points="-147.7,514.9 -50.1,420.1 -147.7,325.4 -152.7,330.6 -60.5,420.1 -152.7,509.7 "/> <path d="M-147.7,518.4l-8.5-8.8l92.1-89.5l-92.1-89.5l8.5-8.8l101.2,98.3L-147.7,518.4z M-149.2,509.7l1.6,1.6l93.9-91.2 l-93.9-91.2l-1.6,1.6l92.3,89.6L-149.2,509.7z"/></g></g></g></g></svg></i>'],
            responsiveBaseElement: ".configurator-right",
            responsive: {
                0: {
                    items: 2,
                    center: false
                },
                500: {
                    items: 3
                },
                770: {
                    items: 4
                }
            }
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
            var options = this.addOption(node_name, successors);
            if (options !== '') {
                carousel.trigger('add.owl.carousel',
                    ['<div class="owl-item">' +
                    '<div class="col-sm-12 part-carousel-box">' +
                    '<div class="carousel-box box" node_name="' + node_name + '" onclick="configurator.onPartClick($(this))">' +
                    '<div class="square" style="background-image: url(\'img/' + node.img + '\')" />' +
                    this.showDiscount(node) +
                    '</div>' +
                    '<div class="row"><h6 class="item-label text-center word-wrap" style="color: #212121;">' + node.label.toUpperCase() + '</h6></div>' +
                    nodePrice(node_name) +
                    options +
                    '</div>' +
                    '</div>']);

                if (counter === 1) {
                    $('#select-' + node_name).parent().hide();
                    $('.dimension-price').text('Cena');
                }

                $(document.body).on('change', '#select-' + node_name, function () {
                    var nodeName = $(this).val();
                    var node = configurator.graph.node(nodeName);
                    var $owl = $('.configurator-base-carousel');
                    var price = 0.0;
                    if (configurator.step.selectedNodes[3] !== undefined && configurator.step.selectedNodes[3].g === 2) {
                        price = node.price.g2;
                    } else {
                        if (node !== undefined) {
                            price = node.price.g1;
                        }
                    }
                    if (price > 0) {
                        $owl.find('#node-price-' + node_name).html(configurator.numberWithSpaces(price) + ' PLN');
                        configurator.changeHeight(node);
                    } else if (price === -1) {
                        $owl.find('#node-price-' + node_name).html('Cena łączna z wezgłowiem widoczna w kolejnym kroku')
                            .removeClass('node-price').addClass('node-price-small');
                    } else {
                        $owl.find('#node-price-' + node_name).parent().hide();
                    }
                    $owl.trigger('refresh.owl.carousel');
                    configurator.step.selectedNodes[2] = node;
                    configurator.showPrice();
                });

                if (configurator.step.number === 1) {
                    $('#select-' + node_name).val($('#select-' + node_name + ' option[width="160"]').val()).change();
                } else {
                    $('#select-' + node_name).val($('#select-' + node_name + ' option:first').val()).change();
                }
            }
        });

        carousel.trigger('refresh.owl.carousel');


        this.refresh(this.graph.node(step));

        this.allSteps[this.stepIndex] = this.step;

        let $previousStep = $("#previous-step");
        let $previousStepXs = $("#previous-step-xs");
        if (this.allSteps[this.stepIndex - 1] !== undefined) {
            $previousStep.show();
            $previousStep.text('<< poprzedni krok: ' + this.allSteps[this.stepIndex - 1].title);
            $previousStepXs.show();
        } else {
            $previousStep.hide();
            $previousStepXs.hide();
        }
        if (configurator.step.number > 1) {
            $('#reload').show();
        } else {
            $('#reload').hide();
        }

        $(document).ready(function () {
            $('.configurator-select').select2({
                minimumResultsForSearch: -1
            });
        });
    }

    showDiscount(node) {
        if (node.discount !== undefined) {
            return '<div class="discount">- ' + node.discount + '%</div>';
        } else {
            return '';
        }
    }

    changeHeight(node) {
        if (configurator.step.selectedNodes[0].number === 2) {
            var mainNode = configurator.step.selectedNodes[0].node;
            var find = $('img#render-' + mainNode);
            var render = configurator.step.selectedNodes[3];
            if (render !== undefined) {
                var src = render.render;
                var height = node.label;
                let $renderOverlay = $('#render-overlay-' + mainNode);
                if (parseInt(height) === 95) {
                    $('#render-' + mainNode).attr('src', 'renders/' + src);
                    if ($renderOverlay.length) {
                        var overlay = render.overlay;
                        $renderOverlay.prop('src', 'renders/' + overlay);
                    }
                } else {
                    var replace = src.replace("95", "115");
                    $('#render-' + mainNode).attr('src', 'renders/' + replace);
                    if ($renderOverlay.length) {
                        var overlay = render.overlay.replace("95", "115");
                        $renderOverlay.prop('src', 'renders/' + overlay);
                    }
                }
            }
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
        let $nextStep = $('#next-step');
        let $nextStepXs = $('#next-step-xs');
        let $configuratorPreview = $('#configurator-preview');
        if ($this.hasClass('clicked')) {
            $this.removeAttr('style').removeClass('clicked');
            $this.removeClass('carousel-box-selected').addClass('carousel-box');
            $this.attr("node_name");
            $configuratorPreview.find('#render-' + mainNode.node).remove();
            $('#price').attr("hidden", true);
            $('#price-discount').attr("hidden", true);
            $('#price-vat').attr("hidden", true);
            $('.select-' + nodeName).attr("disabled", "disabled");
            $('#render-overlay-' + mainNode.node).remove();
            if (mainNode.skipToNode !== undefined) {
                $nextStep.show();
                $nextStepXs.show();
                $nextStep.text('pomiń ten krok >>');
                $nextStep.attr("onclick", "configurator.skipStep()").attr("style", "color:red");
                $nextStepXs.text('pomiń >>');
                $nextStepXs.attr("onclick", "configurator.skipStep()").attr("style", "background-color:#ea4335");
            } else {
                $nextStep.hide();
                $nextStepXs.hide();
            }
        } else {
            $this.addClass('clicked');
            $this.removeClass('carousel-box').addClass('carousel-box-selected');

            var baseNode = configurator.graph.node(nodeName);
            var find = $configuratorPreview.find('#render-' + mainNode.node);
            if (find.length === 0) {
                $configuratorPreview.append('<img id="render-' + mainNode.node + '" style="z-index: ' + mainNode.zIndex + '" class="img-responsive configurator-img" src="renders/' + baseNode.render + '" />');
            } else {
                $(find).attr('src', 'renders/' + baseNode.render);
            }
            $('.configurator-select').attr("disabled", "disabled");

            $('#select-' + nodeName).removeAttr("disabled");

            var node = configurator.graph.node($('#select-' + nodeName).val());
            configurator.step.selectedNodes[1] = baseNode;
            configurator.step.selectedNodes[2] = node;
            this.showPrice();

            if (mainNode.info !== undefined) {
                $('#example-visualization-info').html(mainNode.info);
            } else {
                $('#example-visualization-info').html('');
            }

            $('#item-color').remove();
            if (baseNode.colors !== undefined) {
                $('#step-content').after(this.addColor(baseNode.colors));
                if (configurator.selectedColor !== undefined) {
                    var selectedColor = configurator.selectedColor;
                    $('.tiles[name="' + selectedColor + '"]').click();
                } else {
                    $('.tiles:first').click();
                }
            } else if (baseNode.cover !== undefined) {
                $('#step-content').after(this.addCover(baseNode.cover));
                $('.tiles:first').addClass('color-selected');
            }

            $nextStep.show();
            $nextStepXs.show();
            $nextStep.attr("onclick", "configurator.nextStep()").removeAttr("style");
            $nextStepXs.attr("onclick", "configurator.nextStep()").removeAttr("style");
            let nextStep = configurator.graph.node(node.nextStep);
            $nextStep.text('następny krok: ' + nextStep.title + ' >>');
            $nextStepXs.text('Dalej >>');
        }
    }

    showPrice() {
        let price = this.getPrice();
        $('#price').text(configurator.numberWithSpaces(price) + ' PLN*').removeAttr('hidden');
        $('#price-vat').removeAttr('hidden');
        if (this.isDiscount()) {
            $('#price-discount').show();
            $('#price-discount').text(configurator.numberWithSpaces(this.getPriceWithDiscount()) + ' PLN*');
            $('#price').addClass('configurator-red-price').removeClass('configurator-price');
            $('.discount-info').show();
            $('.discount-info').show();
        } else {
            $('#price-discount').hide();
            $('.discount-info').hide();
            $('#price').removeClass('configurator-red-price').addClass('configurator-price');
        }
    }

    getPrice() {
        let priceSum = 0.0;
        configurator.allSteps.forEach(step => {
            if (step.selectedNodes[1] !== undefined) {
                let stepPrice = 0.0;
                if (step.selectedNodes[3] !== undefined) {
                    if (step.selectedNodes[3].g === 1) {
                        stepPrice = step.selectedNodes[2].price.g1;
                    } else {
                        stepPrice = step.selectedNodes[2].price.g2;
                    }
                } else {
                    if (step.selectedNodes[2] !== undefined) {
                        stepPrice = step.selectedNodes[2].price.g1;
                    }
                }
                priceSum += stepPrice === -1 ? 0 : stepPrice;
            }
        });
        return priceSum;
    }

    getPriceWithDiscount() {
        let priceSum = 0.0;
        configurator.allSteps.forEach(step => {
            if (step.selectedNodes[1] !== undefined) {
                let stepPrice = 0.0;
                if (step.selectedNodes[3] !== undefined) {
                    if (step.selectedNodes[3].g === 1) {
                        stepPrice = step.selectedNodes[2].price.g1;
                    } else {
                        stepPrice = step.selectedNodes[2].price.g2;
                    }
                } else {
                    if (step.selectedNodes[2] !== undefined) {
                        stepPrice = step.selectedNodes[2].price.g1;
                    }
                }
                if (step.selectedNodes[2].price.g1 > 0 && step.selectedNodes[1].discount > 0) {
                    stepPrice = stepPrice * (100 - step.selectedNodes[1].discount) / 100.0;
                }
                priceSum += stepPrice === -1 ? 0 : stepPrice;
            }
        });
        return priceSum;
    }

    isDiscount() {
        var isDiscount = false;
        configurator.allSteps.forEach(step => {
            if (step.selectedNodes[1] !== undefined && step.selectedNodes[1].discount !== undefined && step.selectedNodes[2].price.g1 > 0) {
                isDiscount = true;
            }
        });
        return isDiscount;
    }

    addOption(node_name, successors) {
        var mainNode = this.graph.node(node_name);

        var labelText = "Wymiar";
        if (mainNode.img === 'empty.png') {
            labelText = "Wybierz";
        }
        if (successors.length > 0) {
            var sb = '<div class="form-group">';
            sb += '<label class="label-small" for="select-' + node_name + '">' + labelText + '</label>';
            sb += '<select disabled class="configurator-select form-control input-sm" name="base-size" id="select-' + node_name + '">';
            var optionNode = [];
            successors.forEach(s => {
                var node = this.graph.node(s);
                optionNode.push([s, node]);
            });
            if (this.step.optionsFilter && this.width > 0) {
                optionNode = optionNode.filter(function (elem) {
                    return elem[1].width == configurator.width || elem[1].width === undefined;
                });
            }
            if (optionNode.length === 0) {
                return '';
            }
            optionNode.forEach(node => {
                sb += '<option value="' + node[0] + '" width="' + node[1].width + '">' + node[1].label + '</option>';
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
        addImageToDom(g1Colors, 'I', 'fabric_group_1');
        addImageToDom(g2Colors, 'II', 'fabric_group_2');
        // html += '</div>';
        html += '</div>';

        html += '</div>';
        return html + '</div></div>';

        function addImageToDom(colors, group, style) {
            // html += '<div class="row">';
            var counter = 0;
            html += '<div class="col-sm-6 col-xs-12">';
            html += '<div class="center-block ' + style + '">';
            var i;
            for (i = 0; i < colors.length; i++) {
                const color = colors[i];
                html += '<div style="display: inline-block;background-clip: content-box;text-align: center;">';
                if (i === 0) {
                    html += '<span class="bold text-uppercase" style="font-size: 11px;">' + group + ' grupa</span>';
                }
                html += '<div color="' + color.node + '" name="' + color.name + '" onclick="configurator.onColorSelect($(this))" class="tiles img_tkan" style="background-image: url(\'' + color.url + '\')" ></div>';
                html += '<span class="bold text-uppercase" style="font-size: 8px;">' + color.name + '</span>';
                html += '</div>';
            }
            html += '</div>';
            // html += '<div class="row">';
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
        if (g1Colors.length > 0) {
            addImageToDom(g1Colors, g1Colors[0].name);
        }
        if (g2Colors.length > 0) {
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
    }

    changeColorInAllSteps(colorNode) {
        if (configurator.allSteps !== undefined) {
            configurator.allSteps.forEach(step => {
                var topNode = step.selectedNodes[0];
                var main = step.selectedNodes[1];
                if (main !== undefined) {
                    var colors = configurator.graph.successors(main.colors);
                    var stepColor = null;
                    if (colors !== undefined) {
                        colors.forEach(color => {
                            var currentColorNode = configurator.graph.node(color);
                            if (currentColorNode.name === colorNode.name) {
                                stepColor = currentColorNode;
                            }
                        });

                        if (stepColor !== null) {
                            var find = $('#render-' + topNode.node);
                            var node2 = step.selectedNodes[2];
                            if (find.length === 0) {
                                $('#configurator-preview').append('<img id="render-' + topNode.node + '" style="z-index: ' + topNode.zIndex + '" class="img-responsive configurator-img" src="renders/' + stepColor.render + '" />');
                            } else {
                                $(find).attr('src', 'renders/' + stepColor.render);
                            }
                            if (topNode.overlay !== undefined) {
                                if (stepColor.overlay !== undefined) {
                                    var find = $('#configurator-preview').find('#render-overlay-' + topNode.node);
                                    if (find.length === 0) {
                                        $('#base-img').after('<img id="render-overlay-' + topNode.node + '" style="z-index: ' + topNode.overlay_z + '" class="img-responsive configurator-img" src="renders/' + stepColor.overlay + '" />');
                                    } else {
                                        $(find).attr('src', 'renders/' + stepColor.overlay);
                                    }
                                } else {
                                    $('#render-overlay-' + topNode.node).remove();
                                }
                            }
                            step.selectedNodes[3] = stepColor;

                            if (step.selectedNodes[0].number === 2) {
                                var mainNode = step.selectedNodes[0].node;
                                var find = $('img#render-' + mainNode);
                                var render = step.selectedNodes[3];
                                if (render !== undefined) {
                                    var src = render.render;
                                    var height = step.selectedNodes[2].label;
                                    let $renderOverlay = $('#render-overlay-' + mainNode);
                                    if (parseInt(height) === 95) {
                                        $('#render-' + mainNode).attr('src', 'renders/' + src);
                                        if ($renderOverlay.length) {
                                            var overlay = render.overlay;
                                            $renderOverlay.prop('src', 'renders/' + overlay);
                                        }
                                    } else {
                                        var replace = src.replace("95", "115");
                                        $('#render-' + mainNode).attr('src', 'renders/' + replace);
                                        if ($renderOverlay.length) {
                                            var overlay = render.overlay.replace("95", "115");
                                            $renderOverlay.prop('src', 'renders/' + overlay);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    }

    onColorSelect(selectedColor) {

        var $this = $(selectedColor);
        this.selectedColor = $this.attr('name');

        var colorNode = configurator.graph.node($this.attr('color'));
        configurator.step.selectedNodes[3] = colorNode;
        configurator.changeColorInAllSteps(colorNode);

        $('.tiles').removeClass('color-selected');

        var $owl = $('.configurator-base-carousel');

        var node = this.step.selectedNodes[2];
        var base_node_name = this.step.selectedNodes[1].node;
        if (node !== undefined) {
            if (node.price.g1 === -1 || node.price.g2 === -1) {
                $owl.find('#node-price-' + base_node_name).html('Cena łączna z wezgłowiem widoczna w kolejnym kroku');
            } else if (colorNode.g === 1) {
                $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g1) + ' PLN');
            } else {
                $owl.find('#node-price-' + base_node_name).html(configurator.numberWithSpaces(node.price.g2) + ' PLN');
            }
        }
        configurator.changeHeight(node);

        configurator.showPrice();
        $this.toggleClass('color-selected');

    }


    loadSummary() {
        $('#step-number').hide();
        $('#step-title').hide();
        $('#item-color').hide();
        $('#next-step').hide();
        $('#next-step-xs').hide();
        // $('#skip-step').hide();
        $('#example-visualization-info').html('');

        this.step = new Step(100, "Podsumowanie", false, 'baza kontynetalna_roko08.png', null);
        this.step.selectedNodes[0] = this.graph.node("summary");
        this.allSteps[this.stepIndex] = this.step;

        var stepElement = $('#step-content');
        stepElement.html('');
        // var divElement = stepElement.append($('<div>').addClass("row").append($('h3').text('Podsumowanie')));
        let str = '<div class="col-sm-12">';
        str += '<h2 class="text-center text-uppercase">podsumowanie</h2>';
        let fabricName = function (step) {
            return step.selectedNodes[3] !== undefined ? step.selectedNodes[3].name : '';
        };
        this.allSteps.forEach(step => {
            var priceNode = step.selectedNodes[2];
            if (step.selectedNodes[1] !== undefined && priceNode.price.g1 > 0) {
                str += '<div class="row summary-price-row"">';
                str += '<div class="col-sm-5 col-xs-12 text-capitalize summary-element-name">' + step.selectedNodes[0].title + ' - ' + step.selectedNodes[1].label + '</div>';
                str += '<div class="col-sm-2 col-xs-3 text-left text-capitalize">' + fabricName(step) + '</div>';
                str += '<div class="col-sm-2 col-xs-4 text-right">' + this.getWidthString(step.selectedNodes[2]) + '</div>';
                str += this.getPriceDiv(step.selectedNodes[1], priceNode, step.selectedNodes[3]) +
                    '</div>';
            }
        });
        str += '</div>';
        str += '<div class="col-sm-6 col-sm-offset-6 margin-top-25 margin-bottom-25">';
        str += '<h5>Wymiar i cena prezentowanego zestawu:</h5>';
        str += '<h3 class="blue-text ' + (this.isDiscount() ? 'line-through' : '') + '">' + this.numberWithSpaces(this.getPrice()) + ' PLN</h3>';
        if (this.isDiscount()) {
            str += '<h2 class="red-text">' + this.numberWithSpaces(this.getPriceWithDiscount()) + ' PLN</h2>';
        }
        str += '<p id="price-vat">Cena zawiera podatek VAT 23 %</p>';
        str += '</div>';
        str += '<div class="row summary-btn-row">';
        str += '<div class="col-xs-6 text-center"><button class="btn text-uppercase btn-summary" onclick="location.href=\'https://hilding.pl/index/whereBuy\'" ><span class="fa fa-search"></span> Znajdź salon</button></div>';
        str += '<div class="col-xs-6 text-center"><button id="print-btn" class="btn text-uppercase btn-summary"' +
            'data-loading-text="<i class=\'fa fa-spinner fa-spin \'></i> Tworzenie wydruku"><i class="fa fa-print"></i> Wydrukuj</button></div>';
        str += '</div>';
        stepElement.html(str);
        $('#print-btn').click(function () {
            var $btn = $(this);
            $btn.button('loading').promise().done(function () {
                configurator.printSummary();
            });
        });
    }

    getPriceDiv(mainNode, priceNode, tNode) {
        let stepPrice = this.getStepPrice(tNode, priceNode);

        let classDiscount = '';
        let stepPriceDiscount = '';
        if (mainNode.discount !== undefined) {
            classDiscount = 'before-discount-price';
            stepPriceDiscount = ' \ ' + this.numberWithSpaces(stepPrice * (100 - mainNode.discount) / 100.0);
        }

        return '<div class="col-sm-3 col-xs-5 text-right "><span class="' + classDiscount + '">'
            + this.numberWithSpaces(stepPrice) + '</span>' + stepPriceDiscount + ' PLN*</div>';
    }

    getStepPrice(tNode, priceNode) {
        let stepPrice = 0.0;
        if (tNode !== undefined) {
            if (tNode.g === 1) {
                stepPrice = priceNode.price.g1;
            } else {
                stepPrice = priceNode.price.g2;
            }
        } else {
            if (priceNode !== undefined) {
                stepPrice = priceNode.price.g1;
            }
        }
        return stepPrice;
    }

    getWidthString(node) {
        if (node.label !== 'TAK') {
            return node.label + ' cm';
        } else {
            return '';
        }
    }

    printSummary() {
        function getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            return canvas.toDataURL("image/png");
        }


        var bodyData = [];

        var img = document.getElementById('base-img');
        var canvas = document.createElement("canvas");
        canvas.width = 1500;
        canvas.height = 1140;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);

        var images = [];
        this.allSteps.forEach(step => {
            var priceNode = step.selectedNodes[2];
            if (step.selectedNodes[1] !== undefined && priceNode.price.g1 !== 0) {
                bodyData.push([
                    step.selectedNodes[0].title.toUpperCase(),
                    {
                        text: this.capitalize(step.selectedNodes[1].label),
                        style: {color: '#737477', bold: true}
                    },
                    {
                        text: this.getWidthString(step.selectedNodes[2]),
                        style: {color: '#737477'}
                    },
                    {
                        text: step.selectedNodes[3] !== undefined ? this.capitalize(step.selectedNodes[3].name) : '',
                        style: {color: '#737477'}
                    },
                    {
                        text: (priceNode.price.g1 === -1 ? '' : this.numberWithSpaces(this.getStepPrice(step.selectedNodes[3], priceNode)) + ' PLN'),
                        style: {color: '#737477', alignment: 'right'}
                    }]);

                var stepImg = document.getElementById('render-' + step.selectedNodes[0].node);
                images.push(stepImg);
                var overlayImg = document.getElementById('render-overlay-' + step.selectedNodes[0].node);
                if (overlayImg != null) {
                    images.push(overlayImg);
                }
            }
        });
        images.sort(function (a, b) {
            return a.style.zIndex - b.style.zIndex;
        });

        images.forEach(img => {
            ctx.drawImage(img, 0, 0);
        });

        bodyData.push([
            '',
            '',
            '',
            '',
            {
                text: this.numberWithSpaces(this.getPrice()) + ' PLN',
                style: {color: '#737477', alignment: 'right', bold: 'true'}
            }]);

        var today = new Date();
        let imageUrl = canvas.toDataURL("image/png");
        var docDefinition = {
            title: 'Twój wybór - Łóżko ' + this.allSteps[1].selectedNodes[1].label,
            content: [
                {
                    columns: [
                        {
                            text: 'Konfigurator',
                            style: {color: '#737477', fontSize: 10, bold: false}
                        },
                        {
                            alignment: 'right',
                            text: today.getDate() + '.' + (today.getMonth() + 1) + '.' + (today.getYear() + 1900)
                                + ', ' + today.getHours() + ':' + (today.getMinutes() < 10 ? '0' : '') + today.getMinutes(),
                            style: {color: '#737477', fontSize: 10, bold: false}
                        }
                    ]
                },
                {
                    margin: [0, 30],
                    columns: [
                        [
                            {
                                text: 'Łóżko ' + this.allSteps[1].selectedNodes[1].label,
                                style: {color: '#307bbf', fontSize: 25, bold: true}
                            },
                            {
                                text: 'Sugerowana cena detaliczna: ' + this.numberWithSpaces(this.getPrice()) + ' zł',
                                style: {color: '#737477', fontSize: 16, bold: false}
                            },
                            {
                                text: 'Cena zawiera podatek VAT 23%;',
                                style: {color: '#737477', fontSize: 8, bold: false}
                            },
                            {
                                text: 'w przypadku materacy medycznych cena zawiera podatek VAT 8%.',
                                style: {color: '#737477', fontSize: 8, bold: false}
                            }
                        ],
                        {
                            image: 'data:image/jpeg;base64,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',
                            width: 150
                        }
                    ]
                },
                {
                    image: imageUrl,
                    width: 300,
                    alignment: 'center'
                },
                {
                    margin: [0, 30],
                    text: 'Twój wybór',
                    style: {color: '#737477', fontSize: 16, bold: false}
                },
                {
                    style: 'tableExample',
                    table: {
                        widths: [150, 100, 'auto', 'auto', '*'],
                        body: bodyData
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return 0.5;
                        },
                        vLineWidth: function (i, node) {
                            return 0;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0) || (i === node.table.body.length) ? 'white' : '#97999b';
                        },
                        // hLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
                        // vLineStyle: function (i, node) { return {dash: { length: 10, space: 4 }}; },
                        // paddingLeft: function(i, node) { return 4; },
                        // paddingRight: function(i, node) { return 4; },
                        paddingTop: function (i, node) {
                            return 10;
                        },
                        paddingBottom: function (i, node) {
                            return 10;
                        },
                        // fillColor: function (rowIndex, node, columnIndex) { return null; }
                    }
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    fontSize: 10,
                    color: '#307bbf',
                    border: [false, false, false, false],
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                }
            },
            footer: function (currentPage, pageCount) {
                return {

                    table: {
                        widths: [450, '*'],
                        body: [
                            [
                                {
                                    text: 'Nie bierzemy odpowiedzialności za różnice między cenami z konfiguratora a cenami rzeczywistymi.',
                                    style: {color: '#737477', fontSize: 10, bold: false}
                                },
                                ''
                            ],
                            [
                                {
                                    text: 'Sprawdź lokalizację najbliższego sklepu: hilding.pl/index/whereBuy',
                                    style: {color: '#737477', fontSize: 10, bold: false}
                                },
                                {
                                    text: 'Strona ' + currentPage + '/' + pageCount, alignment: 'right',
                                    style: {color: '#737477', fontSize: 10, bold: false}
                                }
                            ]
                        ]
                    },
                    layout: 'noBorders',
                    margin: [30, 0]
                }
            },
        };


        pdfMake.createPdf(docDefinition).download('Twój wybór - Łóżko ' + this.allSteps[1].selectedNodes[1].label);
        // pdfMake.createPdf(docDefinition).open();
        $('#print-btn').button('reset');
    }

    capitalize(title) {
        return title.charAt(0).toUpperCase() + title.substr(1);
    }
}


$(document)

    .ready(
        function () {
            var Graph = graphlib.Graph;
            g = new Graph();

            $.when(
                $.getScript("graph.js"),
                $.Deferred(function (deferred) {
                    $(deferred.resolve);
                })
            ).done(function () {
                configurator = new Configurator(g);
            });
        }
    )
;