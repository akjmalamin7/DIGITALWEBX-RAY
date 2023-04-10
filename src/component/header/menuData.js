export const navItems = [
    {
        title:'Users',
        path:'#',
        accessName:"_users",
        icon:<i className="menu-icon fa fa-calendar"></i>,
        userRole:'admin',
        child:[
           {
            title:'Add Doctor',
            path:'/admin/add-doctor',
            accessName:"_addDoctor",
            icon:<i className="menu-icon fa fa-calendar"></i>,
           },
           {
            title:'Manage Radiology Doctor',
            path:'/admin/xray-doctors',
            accessName:"_mangeRadiologyDoctor",
            icon:<i className="menu-icon fa fa-calendar"></i>,
           }
        ]
    },
    {
        title:'Incomplete Report',
        path:'/admin/patient-list',
        accessName:"_incompleteReport",
        icon:<i className="menu-icon fa fa-calendar"></i>,
        userRole:'admin',
    },
    {
        title:'Send Report',
        path:'#',
        accessName:"_sendReport",
        icon:<i className="menu-icon fa fa-calendar"></i>,
        userRole:'user',
        child:[
           {
            title:'Send xray Report',
            path:'/agent/defaultxrayupload',
            accessName:"_sendXrayReport",
            icon:<i className="menu-icon fa fa-calendar"></i>,
           }
        ]
    },
    {
        title:'Quick Send Report',
        path:'/agent/xray/defaultsendreports',
        accessName:"_quickSendReport",
        icon:<i className="menu-icon fa fa-calendar"></i>,
        userRole:'user',
    }
]
