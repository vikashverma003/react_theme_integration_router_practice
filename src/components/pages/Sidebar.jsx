import React from 'react'

function Sidebar() {
  return (
    <div>
     {/* start sidebar */}
    
  <div id="sideBar" className="relative flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">
    

   {/* sidebar content */}
    <div className="flex flex-col">

     {/* sidebar toggle */}
      <div className="text-right hidden md:block mb-4">
        <button id="sideBarHideBtn">
          <i className="fad fa-times-circle"></i>
        </button>
      </div>
     {/* end sidebar toggle */}

      <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">homes</p>

     {/* link */}
      <a href="./index.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-chart-pie text-xs mr-2"></i>                
        Analytics dashboard
      </a>
     {/* end link */}

     {/* link */}
      <a href="./index-1.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-shopping-cart text-xs mr-2"></i>
        ecommerce dashboard
      </a>
     {/* end link */}

      <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">apps</p>

     {/* link */}
      <a href="/email1" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-envelope-open-text text-xs mr-2"></i>
        email
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-comments text-xs mr-2"></i>
        chat
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-shield-check text-xs mr-2"></i>
        todo
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-calendar-edit text-xs mr-2"></i>
        calendar
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-file-invoice-dollar text-xs mr-2"></i>
        invoice
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-folder-open text-xs mr-2"></i>
        file manager
      </a>
     {/* end link */}   
      
      
      <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">UI Elements</p>

     {/* link */}
      <a href="./typography.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-text text-xs mr-2"></i>
        typography
      </a>
     {/* end link */}

     {/* link */}
      <a href="/alert" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-whistle text-xs mr-2"></i>
        alerts
      </a>
     {/* end link */}
      

     {/* link */}
      <a href="./buttons.html" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-cricket text-xs mr-2"></i>
        buttons
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-box-open text-xs mr-2"></i>
        Content
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-swatchbook text-xs mr-2"></i>
        colors
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-atom-alt text-xs mr-2"></i>
        icons
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-club text-xs mr-2"></i>
        card
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-cheese-swiss text-xs mr-2"></i>
        Widgets
      </a>
     {/* end link */}

     {/* link */}
      <a href="#" className="mb-3 capitalize font-medium text-sm hover:text-teal-600 transition ease-in-out duration-500">
        <i className="fad fa-computer-classNameic text-xs mr-2"></i>
        Components
      </a>
     {/* end link */}
      
      

    </div>
   {/* end sidebar content */}

  </div>
 {/* end sidbar */}
    
    
    </div>
  )
}

export default Sidebar