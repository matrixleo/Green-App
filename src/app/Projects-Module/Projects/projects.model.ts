
// export class GreenModel{
//     firstPage: string;
//     nextUrl:string;
//     lastPage: string;
//     page: number;
//     itemCount: number;
//     pageCount: number;
//     data:Data;

//     constructor(
//         firstPage: string,
//         nextUrl:string,
//         lastPage: string,
//         page: number,
//         itemCount: number,
//         pageCount: number,
//         data:Data,
//     ){
//         this.firstPage = firstPage;
//         this.nextUrl = nextUrl;
//         this.lastPage = lastPage;
//         this.page = page;
//         this.itemCount = itemCount;
//         this.pageCount = pageCount;
//         this.data = data;
//     }
//   }
  export class GreenModel{
    teDhenat:Data[];
    constructor(teDhenat:Data[]){
      this.teDhenat = teDhenat;
    }
  }  
  export class Data{
      clientInfo: ClientInfo;
      propertyInfo: PropertyInfo;
      total: number;
      clientTotal: number;
      estimatedTotal: number;
      profit: number;
      cost: number;
      invoiceAmount: number;
      approvedProjectedAmount: number;
      approvedInvoicesAmount: number;
      estimatedSavings: number;
      estimatedMarketPrice: number;
      savings: number;
      marketPrice: number;
      accountGenerator: AccountGenerator;
      workAreaReport: boolean;
      convertToOnHold: boolean;
      number: string;
      jobType: string;
      anticipatedStartDate: Date;
      anticipatedNumOfDays: number;
      numOfDays: number;
      status: string;
      jobClass: string;
      projectType: string;
      omissions: Omission;
      clientSignReq: boolean;
      id: string;
      createdAt: Date;
      updatedAt: Date;

      constructor(
      clientInfo: ClientInfo,
      propertyInfo: PropertyInfo,
      total: number,
      clientTotal: number,
      estimatedTotal: number,
      profit: number,
      cost: number,
      invoiceAmount: number,
      approvedProjectedAmount: number,
      approvedInvoicesAmount: number,
      estimatedSavings: number,
      estimatedMarketPrice: number,
      savings: number,
      marketPrice: number,
      accountGenerator: AccountGenerator,
      workAreaReport: boolean,
      convertToOnHold: boolean,
      number: string,
      jobType: string,
      anticipatedStartDate: Date,
      anticipatedNumOfDays: number,
      numOfDays: number,
      status: string,
      jobClass: string,
      projectType: string,
      omissions: Omission,
      clientSignReq: boolean,
      id: string,
      createdAt: Date,
      updatedAt: Date,

      ){
        this.clientInfo = clientInfo;
        this.propertyInfo = propertyInfo;
        this.total = total;
        this.clientTotal = clientTotal;
        this.estimatedTotal = estimatedTotal;
        this.profit = profit;
        this.cost = cost;
        this.invoiceAmount = invoiceAmount;
        this.approvedProjectedAmount = approvedProjectedAmount;
        this.approvedInvoicesAmount = approvedInvoicesAmount;
        this.estimatedSavings = estimatedSavings;
        this.estimatedMarketPrice = estimatedMarketPrice;
        this.savings = savings;
        this.marketPrice = marketPrice;
        this.accountGenerator = accountGenerator;
        this.workAreaReport = workAreaReport;
        this.convertToOnHold = convertToOnHold;
        this.number = number;
        this.jobType = jobType;
        this.anticipatedStartDate = anticipatedStartDate;
        this.anticipatedNumOfDays = anticipatedNumOfDays;
        this.numOfDays = numOfDays;
        this.status = status;
        this.jobClass = jobClass;
        this.projectType = projectType;
        this.omissions = omissions;
        this.clientSignReq = clientSignReq;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;


      }
  }
  
  export class Omission{
      id:number;
      section_id:string;
      name:string;

      constructor(id:number, section_id:string, name:string){
        this.id = id;
        this.section_id = section_id;
        this.name = name;
      }
  }


  export class AccountGenerator {
    firstName: string;
    lastName: string;
    id: string;
    constructor(firstName: string, lastName:string, id:string){
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id;
    } 
  }

  
  export class ClientInfo{
      id:string;
      name:string;
      abbreviation:string;
      
      constructor(id:string,name:string,abbreviation:string){
      this.id = id;
      this.name = name;
      this.abbreviation = abbreviation
      }
    }
  
  export class PropertyInfo{
      id: string;
      name: string;
      address: Address;

      constructor(id: string, name: string, address: Address){
        this.id = id,
        this.name = name;
        this.address = address;
      }
  }
  
  export class Address{
      street: string;
      city: string;
      state: string;
      stateAbbr: string;
      zip: number;
      location: Location;
      zoneId: string;

      constructor(street:string, city:string, state:string, stateAbbr:string, zip:number, location:Location, zoneId:string){
        this.street = street;
        this.city = city;
        this.state = state;
        this.stateAbbr = stateAbbr;
        this.zip = zip;
        this.location = location;
        this.zoneId = zoneId;
      }
  }
  export class Location{
      lat: number;
      lng: number;

      constructor(lat:number, lng:number){
        this.lat = lat;
        this.lng = lng;
      }
  }