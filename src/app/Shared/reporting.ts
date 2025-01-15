import { Product } from "./products"

export class ReportDataViewModel {
    productCountByBrand: ReportViewModel[] = [];
    productCountByProductType: ReportViewModel[] = [];
    activeProductReport: ReportBrandProduct[] = [];
}

export class ReportViewModel
{
   label!:string
   data!:number
}

export class ReportBrandProduct
{
  brand!:string
  products: Product[] = [] 
}