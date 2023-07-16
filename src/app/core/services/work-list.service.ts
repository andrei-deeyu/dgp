import { Injectable } from "@angular/core";
import { Work } from "../models/work.model";

@Injectable()
export class WorkListService {
  private exampleWorkList = [ // will mock an HTTP request to the interceptor
    {
      title: 'RPA bot',
      details: 'When simple tasks that can be precisely documented need to be done much faster than a person is able to accomplish, without errors',
      link: 'https://www.ibm.com/resources/automate/dwg-how-digital-workers-compare',
      img: 'https://1.cms.s81c.com/sites/default/files/2022-12-01/RPA.jpg',
      hidden: false
    },
    {
      title: 'IBM Watson Orchestrate',
      details: 'Hand off tedious tasks to Watson and never work the same way again',
      link: 'https://www.ibm.com/products/watson-orchestrate',
      img: 'https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/cdp/cf/ul/g/12/76/WO-Custom-Skills.component.offering-item-xl.ts=1689283517355.png/content/adobe-cms/us/en/products/watson-orchestrate/jcr:content/root/table_of_contents/body/content_section_styled/content-section-body/offering_group/items/offering_item_344008830/image',
      hidden: false
    },
    {
      title: 'A legendary brand achieves record holiday sales',
      details: 'Carhartt has been one of the hardest-working companies in America since its founding in Detroit in 1889. Originally designed for rail workers, Carhartt apparel soon became the choice for workers in automobile production, construction and many other industries.',
      link: 'https://www.ibm.com/case-studies/carhartt-turbonomic',
      img: null,
      hidden: false
    }
  ];

  get workList(): Array<Work> {
    return this.exampleWorkList.filter(el => !el.hidden)
  }
}
