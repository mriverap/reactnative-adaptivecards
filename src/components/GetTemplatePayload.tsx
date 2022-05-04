import * as ACData from 'adaptivecards-templating';
// import AdaptiveCard from 'adaptivecards-reactnative';

import {payload as p1, context as c1} from '../adaptivecards/sample1';
import {payload as p2, context as c2} from '../adaptivecards/sample2';
import {payload as p3, context as c3} from '../adaptivecards/sample3';
import {payload as p4, context as c4} from '../adaptivecards/sample4';

export const GetTemplatePayload = (cardSample: string): any => {
  let template: any;

  if (cardSample === 'sample1') {
    template = new ACData.Template(p1);
    return template.expand(c1);
  }
  if (cardSample === 'sample2') {
    template = new ACData.Template(p2);
    return template.expand(c2);
  }
  if (cardSample === 'sample3') {
    template = new ACData.Template(p3);
    return template.expand(c3);
  }
  if (cardSample === 'sample4') {
    template = new ACData.Template(p4);
    return template.expand(c4);
  }
};
