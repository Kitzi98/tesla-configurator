import {Model} from "./model";
import {Color} from "./color";
import {Config} from "./config";

export interface FormValue {
  step1 : {
    model : Model,
    color : Color
  }
  step2 : {
    config : Config,
    towHitch : boolean,
    yoke : boolean
  }
}
