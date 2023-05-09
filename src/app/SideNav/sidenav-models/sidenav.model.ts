export class MenuDetails{
    menuDetails:Menu[]
    constructor(menuDetails:Menu[]){
        this.menuDetails = menuDetails;
    }
}
export class Menu{
    name: string;
    logo: string;
    link: string;
    submenu: SubMenu[];

    constructor(name:string, logo:string,link:string,submenu:SubMenu[]){
        this.name = name;
        this.logo = logo;
        this.link = link;
        this.submenu = submenu
    }
}

export class SubMenu{
    name: string;
    about: AboutSubmenu[];
    description: string;
    constructor(name:string, about:AboutSubmenu[], description:string){
        this.name = name;
        this.about = about;
        this.description = description;
    }
}
export class AboutSubmenu{
    name:string

    constructor(name:string){
        this.name = name;
    }
}