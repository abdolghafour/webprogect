import React from 'react'

function Footer() {
return (
<footer className="w-full flex items-center justify-center bg-white shadow-footer px-4 py-30px lg:px-35px lg:justify-between">
    <p className="text-gray-900">
        Copyright © 2021 <a className="font-semibold transition-colors duration-200 ease-in-out hover:text-red-400"
            href="">
            RedQ, Inc.</a> All rights reserved
    </p>
    <div className="items-center hidden lg:flex space-x-5">
        <a href="/" className="social facebook" target="_blank">
            <span class="sr-only">facebook</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 15 15">
                <path data-name="Path 1079"
                    d="M77.227,64H64.773a.773.773,0,0,0-.773.773V77.227a.773.773,0,0,0,.773.773H71V72.458H69.327V70.417H71V68.907a2.66,2.66,0,0,1,2.869-2.793c.773,0,1.6.058,1.8.084v1.889H74.38c-.879,0-1.046.416-1.046,1.028v1.3h2.093l-.273,2.042H73.333V78h3.894A.773.773,0,0,0,78,77.227V64.773A.773.773,0,0,0,77.227,64Z"
                    transform="translate(-63.5 -63.5)" fill="currentColor" stroke="rgba(0,0,0,0)" stroke-miterlimit="10"
                    stroke-width="1">
                </path>
            </svg>
        </a>
        <a href="/" className="social twitter" target="_blank">
            <span class="sr-only">twitter</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="21px" height="16px" viewBox="0 0 20.64 15.339">
                <path data-name="Path 1080"
                    d="M37.3,65.659a7.136,7.136,0,0,1-2.027.558,3.542,3.542,0,0,0,1.553-1.954,7.014,7.014,0,0,1-2.242.857,3.529,3.529,0,0,0-6.107,2.414,3.456,3.456,0,0,0,.091.806A10,10,0,0,1,21.3,64.645a3.537,3.537,0,0,0,1.1,4.718,3.448,3.448,0,0,1-1.6-.441v.044a3.533,3.533,0,0,0,2.833,3.464,3.553,3.553,0,0,1-.93.124,3.33,3.33,0,0,1-.664-.066,3.535,3.535,0,0,0,3.3,2.454,7.077,7.077,0,0,1-4.386,1.513A7.153,7.153,0,0,1,20.1,76.4,9.866,9.866,0,0,0,25.5,78,9.983,9.983,0,0,0,35.555,67.945c0-.153,0-.306-.011-.456A7.185,7.185,0,0,0,37.3,65.659Z"
                    transform="translate(-18.034 -63.161)" fill="currentColor" stroke="rgba(0,0,0,0)"
                    stroke-miterlimit="10" stroke-width="1">
                </path>
            </svg>
        </a>
        <a href="/" className="social youtube hidden" target="_blank">
            <span class="sr-only">youtube</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="19px" height="14px" viewBox="0 0 18.664 14">
                <path data-name="logo-youtube (1)"
                    d="M18.538,67.091a2.834,2.834,0,0,0-2.7-2.96C13.82,64.036,11.76,64,9.655,64H9c-2.1,0-4.163.036-6.183.131A2.84,2.84,0,0,0,.122,67.1c-.091,1.3-.13,2.6-.128,3.893s.038,2.6.124,3.9a2.844,2.844,0,0,0,2.694,2.971c2.122.1,4.3.142,6.511.139s4.387-.039,6.511-.139a2.844,2.844,0,0,0,2.7-2.971c.087-1.3.128-2.6.124-3.9S18.625,68.392,18.538,67.091Zm-11,7.477V67.4l5.286,3.58Z"
                    transform="translate(0.006 -64)" fill="currentColor">
                </path>
            </svg>
        </a>
        <a href="/" className="social github hidden" target="_blank">
            <span class="sr-only">github</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 14 14">
                <path
                    d="M39,32a7.092,7.092,0,0,0-7,7.178,7.164,7.164,0,0,0,4.787,6.809.549.549,0,0,0,.119.012.339.339,0,0,0,.359-.356c0-.172-.006-.622-.009-1.222a3.2,3.2,0,0,1-.706.084A1.626,1.626,0,0,1,34.9,43.459a1.9,1.9,0,0,0-.778-1.05c-.609-.428,0-.441.044-.441h0a1.5,1.5,0,0,1,1.072.744,1.374,1.374,0,0,0,1.237.784,1.969,1.969,0,0,0,.8-.187,1.551,1.551,0,0,1,.444-.959c-1.553-.181-3.187-.8-3.187-3.547a2.809,2.809,0,0,1,.719-1.925,2.642,2.642,0,0,1,.069-1.9.583.583,0,0,1,.156-.016,3.328,3.328,0,0,1,1.769.753,6.507,6.507,0,0,1,3.506,0,3.328,3.328,0,0,1,1.769-.753.583.583,0,0,1,.156.016,2.642,2.642,0,0,1,.069,1.9,2.821,2.821,0,0,1,.719,1.925c0,2.756-1.638,3.362-3.2,3.541a1.74,1.74,0,0,1,.475,1.328c0,.959-.009,1.734-.009,1.969a.337.337,0,0,0,.356.359.6.6,0,0,0,.125-.012A7.2,7.2,0,0,0,39,32Z"
                    transform="translate(-32 -32)" fill="currentColor">
                </path>
            </svg>
        </a>
        <a href="/" className="social instagram" target="_blank">
            <span className="sr-only">instagram</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 14 14">
                <path data-name="Path 1083"
                    d="M41.917,33.167a2.926,2.926,0,0,1,2.917,2.917v5.833a2.926,2.926,0,0,1-2.917,2.917H36.083a2.926,2.926,0,0,1-2.917-2.917V36.083a2.926,2.926,0,0,1,2.917-2.917h5.833m0-1.167H36.083A4.1,4.1,0,0,0,32,36.083v5.833A4.1,4.1,0,0,0,36.083,46h5.833A4.1,4.1,0,0,0,46,41.917V36.083A4.1,4.1,0,0,0,41.917,32Z"
                    transform="translate(-32 -32)" fill="currentColor"></path>
                <path data-name="Path 1084" d="M350.2,108.42a.873.873,0,1,1,.619-.256A.875.875,0,0,1,350.2,108.42Z"
                    transform="translate(-339.413 -104.337)" fill="currentColor"></path>
                <path data-name="Path 1085"
                    d="M147.5,145.167a2.333,2.333,0,1,1-2.333,2.333,2.333,2.333,0,0,1,2.333-2.333m0-1.167a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,147.5,144Z"
                    transform="translate(-140.5 -140.5)" fill="currentColor"></path>
            </svg>
        </a>
        <a href="/" className="social whatsapp">
            <span className="sr-only">whatsapp</span>
            <svg width="14px" height="14px" viewBox="0 0 308 308">
                <path d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156
            c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687
            c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887
            c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153
            c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348
            c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802
            c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922
            c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0
            c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458
            C233.168,179.508,230.845,178.393,227.904,176.981z" />
                <path d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716
            c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396
            c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z
             M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188
            l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677
            c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867
            C276.546,215.678,222.799,268.994,156.734,268.994z" />
            </svg>
        </a>
    </div>
</footer>
)
}

export default Footer