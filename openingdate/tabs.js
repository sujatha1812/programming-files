    let tabheader = document.querySelectorAll('.tabheader');
    tabheader.forEach((button)=>{
        button.onclick = changeTabheader;
        
    });

    function changeTabheader(){
        let tabnumber = parseInt(this.dataset.tab);
        

        document.querySelector('.active-tab').classList.remove('active-tab');
        this.classList.add('active-tab');

        switch(tabnumber) {
            case 1:
                changeTabsection(tabnumber);
                break;
            case 2:
                changeTabsection(tabnumber);
                break;
            case 3:
                changeTabsection(tabnumber);
                break;
            case 4:
                changeTabsection(tabnumber);
                break;
            default:
                break;
        }

    }
    function changeTabsection(tabnumber){
       
        let currentTab = document.querySelector('.show-tab');
        currentTab.classList.remove('show-tab');
        currentTab.classList.add('hide-tab');
        
        let newsection = document.getElementById('tabsection-' + tabnumber);
        newsection.classList.remove('hide-tab');
        newsection.classList.add('show-tab');
    }