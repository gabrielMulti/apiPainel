export default (email: string, token: string) => {
    return `
    <!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Yinka Enoch Adedokun">
    <meta name="description" content="Simple Forgot Password Page Using HTML and CSS">
    <meta name="keywords" content="forgot password page, basic html and css">
    <title>Forgot Password Page - HTML + CSS</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "segoe ui", verdana, helvetica, arial, sans-serif;
            font-size: 16px;
        }

        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
            -moz-font-feature-settings: "liga" on;
        }

        .row {
            background-color: rgba(20, 120, 200, 0.6);
            color: #fff;
            text-align: center;
            padding: 2em 2em 0.5em;
            width: 90%;
            margin: 2em auto;
            border-radius: 5px;
        }

        .row h1 {
            font-size: 2.5em;
        }

        .row .form-group {
            margin: 0.5em 0;
        }

        .row .form-group label {
            display: block;
            color: #fff;
            text-align: left;
            font-weight: 600;
        }

        .row .form-group input,
        .row .form-group button {
            display: block;
            padding: 0.5em 0;
            width: 100%;
            background-color: inherit;
            border: none;
            color: #eee;
        }

        .row .form-group input:focus,
        .row .form-group .button:focus {
            background-color: #fff;
            color: #000;
            border: none;
            padding: 1em 0.5em;
            animation: pulse 1s infinite ease;
        }

        .row .form-group .button {
            border: 1px solid #fff;
            border-radius: 5px;
            outline: none;
            -moz-user-select: none;
            user-select: none;
            color: #333;
            font-weight: 800;
            cursor: pointer;
            margin-top: 2em;
            padding: 1em;
        }

        .row .form-group .button:hover,
        .row .form-group .button:focus {
            background-color: #fff;
        }

        button:disabled,
        button[disabled]{
          border: 1px solid #999999 !important;
          background-color: #cccccc !important;
          color: #666666 !important;
        }

        .row .form-group button.is-loading::after {
            animation: spinner 500ms infinite linear;
            content: "";
            position: absolute;
            margin-left: 2em;
            border: 2px solid #000;
            border-radius: 100%;
            border-right-color: transparent;
            border-left-color: transparent;
            height: 1em;
            width: 4%;
        }

        .row .footer h5 {
            margin-top: 1em;
        }

        .row .footer p {
            margin-top: 2em;
        }

        .row .footer p .symbols {
            color: #444;
        }

        .row .footer a {
            color: inherit;
            text-decoration: none;
        }

        .information-text {
            color: #ddd;
        }

        .row_input {
            display: flex;
            border-bottom: 1px solid #555;
            margin-bottom: 1rem;
        }

        .eye {
            position: relative;
        }

        @media screen and (max-width: 320px) {
            .row {
                padding-left: 1em;
                padding-right: 1em;
            }

            .row h1 {
                font-size: 1.5em !important;
            }
        }

        @media screen and (min-width: 900px) {
            .row {
                width: 50%;
            }
        }


        .box-login {
            width: 300px;
            height: auto;
            margin: 0 auto
        }

        .box-login .bots {
            width: 100%;
            height: auto;
            margin: 0;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radx-inpuius: 3px;
            -ms-border-radius: 3px;
            box-shadow: 0 0 4px rgba(0, 0, 0, .2);
            box-shadow: 0 0 4px rgba(0, 0, 0, .2);
            -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .2);
            -moz-box-shadow: 0 0 4px rgba(0, 0, 0, .2);
            -ms-box-shadow: 0 0 4px rgba(0, 0, 0, .2);
            background-color: #fff;
            position: relative
        }

        .box-login .box-inputs .line-input {
            width: 100%;
            height: 50px;
            padding-left: 40px;
            position: relative;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            border-left: 0px;
            border-top: 0px;
            border-right: 0px;
        }

        .box-login .btn-login {
            width: 100%;
            margin: 0;
            height: 50px;
            color: #fff;
            border-radius: 0 0 3px 3px;
            -webkit-border-radius: 0 0 3px 3px;
            -moz-border-radius: 0 0 3px 3px;
            -ms-border-radius: 0 0 3px 3px;
            background-color: #009edb;


            border: none;
        }

        .box-inputs {
            position: relative;
        }

        .box-inputs .icon {
            position: absolute;
            height: 24px;
            width: 24px;
            left: 10px;
            top: 10px;
            z-index: 2;
        }

        .box-inputs .icon img {
            width: 100%;
        }

        @keyframes spinner-line-fade-more {

            0%,
            100% {
                opacity: 0;
                /* minimum opacity */
            }

            1% {
                opacity: 1;
            }
        }

        @keyframes spinner-line-fade-quick {

            0%,
            39%,
            100% {
                opacity: 0.25;
                /* minimum opacity */
            }

            40% {
                opacity: 1;
            }
        }

        @keyframes spinner-line-fade-default {

            0%,
            100% {
                opacity: 0.22;
                /* minimum opacity */
            }

            1% {
                opacity: 1;
            }
        }

        @keyframes spinner-line-shrink {

            0%,
            25%,
            100% {
                /* minimum scale and opacity */
                transform: scale(0.5);
                opacity: 0.25;
            }

            26% {
                transform: scale(1);
                opacity: 1;
            }
        }

        .invalid {
            color: red;
        }

        .invalid:before {
            position: relative;
            left: -5px;
            content: "✖";
        }

        .valid {
            color: green;
        }

        .valid:before {
            position: relative;
            left: -5px;
            content: "✔";
        }

        #message {
            display: none;
            border-radius: 5px;
            background: #ffffff;
            color: #000;
            position: relative;
            padding: 20px;
            margin-top: 10px;
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
        }

        .messageError {
            background-color: #ff2626;
            border-radius: 5px;
            width: 100%;
            padding: 16px;
            display: none;
        }

        .messageSucess {
            background-color: #1eb51e;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>


</head>

<body>
    <script>
        var __assign = (this && this.__assign) || function () {
            __assign = Object.assign || function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
                }
                return t;
            };
            return __assign.apply(this, arguments);
        };
        var defaults = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            scale: 1.0,
            corners: 1,
            color: '#000',
            fadeColor: 'transparent',
            animation: 'spinner-line-fade-default',
            rotate: 0,
            direction: 1,
            speed: 1,
            zIndex: 2e9,
            className: 'spinner',
            top: '50%',
            left: '50%',
            shadow: '0 0 1px transparent',
            position: 'absolute',
        };
        var Spinner = /** @class */ (function () {
            function Spinner(opts) {
                if (opts === void 0) { opts = {}; }
                this.opts = __assign(__assign({}, defaults), opts);
            }
            /**
             * Adds the spinner to the given target element. If this instance is already
             * spinning, it is automatically removed from its previous target by calling
             * stop() internally.
             */
            Spinner.prototype.spin = function (target) {
                this.stop();
                this.el = document.createElement('div');
                this.el.className = this.opts.className;
                this.el.setAttribute('role', 'progressbar');
                css(this.el, {
                    position: this.opts.position,
                    width: 0,
                    zIndex: this.opts.zIndex,
                    left: this.opts.left,
                    top: this.opts.top,
                    transform: "scale(" + this.opts.scale + ")",
                });
                if (target) {
                    target.insertBefore(this.el, target.firstChild || null);
                }
                drawLines(this.el, this.opts);
                return this;
            };
            /**
             * Stops and removes the Spinner.
             * Stopped spinners may be reused by calling spin() again.
             */
            Spinner.prototype.stop = function () {
                if (this.el) {
                    if (typeof requestAnimationFrame !== 'undefined') {
                        cancelAnimationFrame(this.animateId);
                    }
                    else {
                        clearTimeout(this.animateId);
                    }
                    if (this.el.parentNode) {
                        this.el.parentNode.removeChild(this.el);
                    }
                    this.el = undefined;
                }
                return this;
            };
            return Spinner;
        }());
        /**
         * Sets multiple style properties at once.
         */
        function css(el, props) {
            for (var prop in props) {
                el.style[prop] = props[prop];
            }
            return el;
        }
        /**
         * Returns the line color from the given string or array.
         */
        function getColor(color, idx) {
            return typeof color == 'string' ? color : color[idx % color.length];
        }
        /**
         * Internal method that draws the individual lines.
         */
        function drawLines(el, opts) {
            var borderRadius = (Math.round(opts.corners * opts.width * 500) / 1000) + 'px';
            var shadow = 'none';
            if (opts.shadow === true) {
                shadow = '0 2px 4px #000'; // default shadow
            }
            else if (typeof opts.shadow === 'string') {
                shadow = opts.shadow;
            }
            var shadows = parseBoxShadow(shadow);
            for (var i = 0; i < opts.lines; i++) {
                var degrees = ~~(360 / opts.lines * i + opts.rotate);
                var backgroundLine = css(document.createElement('div'), {
                    position: 'absolute',
                    top: -opts.width / 2 + "px",
                    width: (opts.length + opts.width) + 'px',
                    height: opts.width + 'px',
                    background: getColor(opts.fadeColor, i),
                    borderRadius: borderRadius,
                    transformOrigin: 'left',
                    transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)",
                });
                var delay = i * opts.direction / opts.lines / opts.speed;
                delay -= 1 / opts.speed; // so initial animation state will include trail
                var line = css(document.createElement('div'), {
                    width: '100%',
                    height: '100%',
                    background: getColor(opts.color, i),
                    borderRadius: borderRadius,
                    boxShadow: normalizeShadow(shadows, degrees),
                    animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation,
                });
                backgroundLine.appendChild(line);
                el.appendChild(backgroundLine);
            }
        }
        function parseBoxShadow(boxShadow) {
            var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
            var shadows = [];
            for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
                var shadow = _a[_i];
                var matches = shadow.match(regex);
                if (matches === null) {
                    continue; // invalid syntax
                }
                var x = +matches[2];
                var y = +matches[5];
                var xUnits = matches[4];
                var yUnits = matches[7];
                if (x === 0 && !xUnits) {
                    xUnits = yUnits;
                }
                if (y === 0 && !yUnits) {
                    yUnits = xUnits;
                }
                if (xUnits !== yUnits) {
                    continue; // units must match to use as coordinates
                }
                shadows.push({
                    prefix: matches[1] || '',
                    x: x,
                    y: y,
                    xUnits: xUnits,
                    yUnits: yUnits,
                    end: matches[8],
                });
            }
            return shadows;
        }
        /**
         * Modify box-shadow x/y offsets to counteract rotation
         */
        function normalizeShadow(shadows, degrees) {
            var normalized = [];
            for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
                var shadow = shadows_1[_i];
                var xy = convertOffset(shadow.x, shadow.y, degrees);
                normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
            }
            return normalized.join(', ');
        }
        function convertOffset(x, y, degrees) {
            var radians = degrees * Math.PI / 180;
            var sin = Math.sin(radians);
            var cos = Math.cos(radians);
            return [
                Math.round((x * cos + y * sin) * 1000) / 1000,
                Math.round((-x * sin + y * cos) * 1000) / 1000,
            ];
        }


        var opts = {
            lines: 20, // The number of lines to draw
            length: 0, // The length of each line
            width: 10, // The line thickness
            radius: 30, // The radius of the inner circle
            scale: 1, // Scales overall size of the spinner
            corners: 0.6, // Corner roundness (0..1)
            speed: 1.6, // Rounds per second
            rotate: 90, // The rotation offset
            animation: 'spinner-line-shrink', // The CSS animation name for the lines
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#2b2b2b', // CSS color or array of colors
            fadeColor: 'dimgray', // CSS color or array of colors
            top: '50%', // Top position relative to parent
            left: '50%', // Left position relative to parent
            shadow: '0 0 1px transparent', // Box-shadow for the lines
            zIndex: 2000000000, // The z-index (defaults to 2e9)
            className: 'spinner', // The CSS class to assign to the spinner
            position: 'absolute', // Element positioning
        };



        var funcs;

        function doSomething() {
            var myInput = document.getElementById("passwordInput1");
            let formValid = false;

            var arrValidations = [
                {
                    name: 'letter',
                    element: document.getElementById("letter"),
                    validation: /[^a-zA-Z 0-9]+/g,
                    valid: false
                },
                {
                    name: 'capital',
                    element: document.getElementById("capital"),
                    validation: /[A-Z]/g,
                    valid: false
                },
                {
                    name: 'number',
                    element: document.getElementById("number"),
                    validation: /[0-9]/g,
                    valid: false
                },
                {
                    name: 'length',
                    element: document.getElementById("length"),
                    validation: 8,
                    valid: false
                }
            ]

            document.getElementById('passwordInput1').onfocus = function () {
                document.getElementById("message").style.display = "flex";
            };

            document.getElementById('passwordInput1').onblur = function () {
                document.getElementById("message").style.display = "none";
            }

            document.getElementById('passwordInput1').onkeyup = function () {
                if(Funcs.checkForm()) {
                    document.getElementById('btnSubmit').disabled = false;
                } else {
                    document.getElementById('btnSubmit').disabled = true;
                }
            }

            document.getElementById('passwordInput2').onkeyup = function () {
                if(Funcs.checkForm()) {
                    document.getElementById('btnSubmit').disabled = false;
                } else {
                    document.getElementById('btnSubmit').disabled = true;
                }            }



            class Funcs {
                target = document.getElementById('foo');
                spinner = new Spinner(opts);

                changeType(index) {
                    const id = 'passwordInput' + index
                    if (document.getElementById(id).type == 'text') {
                        document.getElementById(id).type = 'password';
                        document.getElementById("togglePassword" + index).classList.remove('fa-eye-slash')
                        document.getElementById("togglePassword" + index).classList.add('fa-eye')

                    } else {
                        document.getElementById("togglePassword" + index).classList.add('fa-eye-slash')
                        document.getElementById("togglePassword" + index).classList.remove('fa-eye')

                        document.getElementById(id).type = 'text';
                    }
                }

                submitForm() {
                    this.sppinerStart();
                    let resetForm = document.getElementById("resetForm");

                    const password = document.getElementById('passwordInput1').value;
                    const confirmPassword = document.getElementById('passwordInput2').value;

                    const options = {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            password: password,
                            confirmPassword: confirmPassword,
                            token: '${token}',
                            email: '${email}'
                        }),
                    };

                    fetch('https://1280-179-95-238-173.ngrok-free.app/resetPassWord', options).then((response) => {
                        this.sppinerStop();
                        return response.json();
                    }).then((data) => {
                        if(data.err) {
                            document.getElementById("messageError").innerHTML = data.err
                            document.getElementById("messageError").style.display = "block"
                        }

                        if(data.status == 'ok') {
                            document.getElementById("resetForm").innerHTML = '<div class="messageSucess">' + data.message + '</div>';

                        }
                    }).catch((error) => {
                        console.log("error", error)
                    });
                }

                static checkForm () {
                    arrValidations.map(validation => {
                        const regex = validation.validation;

                        if (validation.name !== 'length') {
                            if(myInput.value.match(regex)) {
                                validation.element.classList.remove("invalid");
                                validation.element.classList.add("valid");
                                validation.valid = true;
                            } else {
                                validation.element.classList.remove("valid");
                                validation.element.classList.add("invalid");
                                validation.valid = false;
                            }
                        } else if (myInput.value.length < validation.validation) {
                            validation.element.classList.remove("valid");
                            validation.element.classList.add("invalid");
                            validation.valid = false;
                        } else {
                            validation.element.classList.remove("invalid");
                            validation.element.classList.add("valid");
                            validation.valid = true;
                        }
                    });

                    for(let i = 0; i < arrValidations.length; i++) {
                        const validation = arrValidations[i];
                        console.log(validation)
                        if(validation.valid) {
                            formValid = true;
                        } else {
                            formValid = false
                            break
                        }
                    }

                    if(document.getElementById('passwordInput2').value != document.getElementById('passwordInput1').value) {
                        return false;
                    }

                    if(formValid) {
                        return true;
                    }

                }

                sppinerStart() {
                    this.spinner.spin()
                    this.target.appendChild(this.spinner.el);
                }

                sppinerStop() {
                    this.spinner.stop()
                }
            }

            funcs = new Funcs();
        }


        if (document.readyState === "loading") {
            // Loading hasn't finished yet
            document.addEventListener("DOMContentLoaded", doSomething);


        } else {

            // DOMContentLoaded has already fired
            doSomething();
        }

        //function changeType(index) {
        //const id = '#passwordInput'+index
        //console.log('change2')
        //document.getElementById(id).type = 'text';
        //console.log('change')
        //}


    </script>

    <div class="row">
        <h1>Forgot Password</h1>
        <h6 class="information-text">Enter your registered email to reset your password.</h6>
        <div class="form-group" id="resetForm">

            <p><label for="username">Password</label></p>
            <div class="row_input">
                <input type="password" name="user_email" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    id="passwordInput1">
                <div style="display: flex; align-content: center; flex-wrap: wrap;">
                    <a class="eye" id="eye" onclick="funcs.changeType('1')">
                        <i class="far fa-eye" id="togglePassword1" style="margin-left: 5px;"></i>
                    </a>
                </div>
            </div>

            <p><label for="username">Confirm password</label></p>
            <div class="row_input">
                <input type="password" name="user_email" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    id="passwordInput2">
                <div style="display: flex; align-content: center; flex-wrap: wrap;">
                    <a class="eye" id="eye" onclick="funcs.changeType('2')">
                        <i class="fa fa-eye" aria-hidden="true" id="togglePassword2" style="margin-left: 5px;"></i>
                    </a>
                </div>
            </div>

            <div class="messageError" id="messageError"></div>

            <div id="message">
                <h3>Password must contain the following:</h3>
                <p id="letter" class="invalid">A <b>characters especials</b> letter</p>
                <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                <p id="number" class="invalid">A <b>number</b></p>
                <p id="length" class="invalid">Minimum <b>8 characters</b></p>
            </div>
            <button id="btnSubmit" class="button" disabled onclick="funcs.submitForm()">Reset Password</button>
        </div>

        <div id="foo"></div>


    </div>
</body>

</html>
`
}