/**
 * Daily Quotes v1.0
 * Author: MascotSoftware
 */


/**
 * Initial function
 * @param {*} options 
 */
function dailyQuote(options){

    // Create a script element
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
    document.head.appendChild(script);

   // Create a style element
    var style = document.createElement('link');
    style.setAttribute("rel", "stylesheet");
    style.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(style);

    //add some style to the page
    var style = document.createElement('style');
    style.textContent = `
        .swal2-close, .swal2-close:focus{
            box-shadow: none;
        }
    `;


    var _position = options.position;
    if(!_position || _position===undefined){
        _position = 'bottom';
    }

    if(options.auto===true){
        
        openQuote(_position);
    }
    
    document.head.appendChild(style);

    var _button = options.button;
    if(_button===undefined){
        _button = true;
    }

    if(_button===true){
        var button = document.createElement("button");
     
        button.setAttribute("type", "button");
        button.setAttribute("onclick", "openQuote('"+_position+"')");
        button.setAttribute("class", "btn floating-button btn-success");
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.border = 'none';
        button.style.background = 'none';
        button.style.borderRadius = '50%';
        button.style.cursor = 'pointer';
        button.style.zIndex = '1000';
        (options.buttonPosition=='left') ? button.style.left = '20px' : button.style.right = '20px';

        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve"  width="50px" height="50px" version="1.1" style=" shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 2667 2667"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
        <style type="text/css">
        <![CDATA[
            .fil0 {fill:#7ED63F}
            .fil1 {fill:white}
        ]]>
        </style>
        </defs>
        <g id="Layer_x0020_1">
        <metadata id="CorelCorpID_0Corel-Layer"/>
        <path class="fil0" d="M1333 0c964,0 1334,370 1334,1333 0,964 -370,1334 -1334,1334 -963,0 -1333,-370 -1333,-1334 0,-963 370,-1333 1333,-1333z"/>
        <path class="fil1" d="M1930 1234c-137,0 -247,-110 -247,-247 0,-128 97,-233 222,-246 -43,-85 -103,-161 -103,-162 -6,-7 -7,-17 -2,-25 4,-8 12,-13 22,-12 219,20 355,246 355,445 0,137 -111,247 -247,247zm224 891l-1641 0c-18,0 -33,-15 -33,-33 0,-18 15,-33 33,-33l1641 0c18,0 33,15 33,33 0,18 -15,33 -33,33zm0 -191l-1641 0c-18,0 -33,-15 -33,-33 0,-18 15,-33 33,-33l1641 0c18,0 33,15 33,33 0,18 -15,33 -33,33zm0 -191l-1641 0c-18,0 -33,-15 -33,-33 0,-19 15,-33 33,-33l1641 0c18,0 33,14 33,33 0,18 -15,33 -33,33zm0 -192l-1641 0c-18,0 -33,-14 -33,-33 0,-18 15,-32 33,-32l1641 0c18,0 33,14 33,32 0,19 -15,33 -33,33zm0 -191l-1641 0c-18,0 -33,-14 -33,-33 0,-18 15,-33 33,-33l1641 0c18,0 33,15 33,33 0,19 -15,33 -33,33zm-1190 -191l-451 0c-18,0 -33,-15 -33,-33 0,-18 15,-33 33,-33l451 0c18,0 33,15 33,33 0,18 -15,33 -33,33zm0 -191l-451 0c-18,0 -33,-15 -33,-33 0,-18 15,-33 33,-33l451 0c18,0 33,15 33,33 0,18 -15,33 -33,33zm429 256c-137,0 -247,-110 -247,-247 0,-128 97,-233 222,-246 -43,-85 -103,-161 -103,-162 -6,-7 -7,-17 -2,-25 4,-8 13,-13 22,-12 219,20 355,246 355,445 0,137 -111,247 -247,247z"/>
        </g>
        </svg>`;

    
        document.body.appendChild(button);
    }
}

/**
 * open quote as per given position
 * @param {*} position 
 */
function openQuote(position) {
    fetch('./data.json')
    .then(response => response.json())

    .then(json => {

        let randomIndex = Math.floor(Math.random() * json.length);
        let randomQuote = json[randomIndex];
    
        Swal.fire({
            showCloseButton: true,
            showConfirmButton: false,
            position:position,
            html: `
                <div class="quote-box" style="padding: 15px;font-family: system-ui;">
                
                <h3 class="mt-2">
                    <span class="quotes-left" style="color: red;position: relative;left: -8px;top: -8px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" fill="#000"/></svg>
                    </span>
                    ${randomQuote.quote}
                    <span class="quotes-right" style="color: red;position: relative;left: 6px;top: 1px;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179zm-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C4.591 12.322 3.17 10.841 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.099.49 2.748 1.179z" fill="#000"/></svg>
                    </span>
                </h3>
                    <p align="right">-${randomQuote.author}</p>
                </div>
            `,
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
                },
                hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
                },
        });
    
    })

    .catch(error => {
        console.error('Error fetching data:', error);
        openQuote('center');
   
    });

}
